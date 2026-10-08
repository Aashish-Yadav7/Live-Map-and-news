import { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import type { NewsItem, Satellite, Earthquake, Flight, RadioStation, LayerId, SeaRoute, FlightPath } from '../types'
import { CATEGORY_META, SAT_CLASS_META, LAYER_META } from '../types'

export type ViewMode = 'earth' | 'solar' | 'galaxy'

export interface GlobeHoverData {
  layer: LayerId
  title: string
  subtitle: string
  meta?: string
  url?: string
  lat: number
  lng: number
}

interface GlobeProps {
  newsItems: NewsItem[]
  satellites: Satellite[]
  earthquakes: Earthquake[]
  flights: Flight[]
  radioStations: RadioStation[]
  seaRoutes: SeaRoute[]
  flightPaths: FlightPath[]
  activeLayers: Set<LayerId>
  godEyeMode: boolean
  onHover?: (data: GlobeHoverData | null, x: number, y: number) => void
  onClick?: (data: GlobeHoverData) => void
  onViewChange?: (mode: ViewMode) => void
}

function latLngToVec3(lat: number, lng: number, r = 1.0): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  )
}

// Create a great-circle arc between two lat/lng points on a sphere
function greatCircleArc(from: THREE.Vector3, to: THREE.Vector3, segments = 64): THREE.Vector3[] {
  const points: THREE.Vector3[] = []
  const angle = from.angleTo(to)
  const arcHeight = 1 + Math.sin(angle * 0.5) * 0.15
  for (let i = 0; i <= segments; i++) {
    const t = i / segments
    const slerped = new THREE.Vector3().lerpVectors(from, to, t)
    slerped.normalize()
    const lift = 1 + Math.sin(t * Math.PI) * (arcHeight - 1)
    slerped.multiplyScalar(lift)
    points.push(slerped)
  }
  return points
}

const ATMOS_VERT = `
  varying vec3 vNormal;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`
const ATMOS_FRAG = `
  varying vec3 vNormal;
  void main() {
    float rim = 1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0)));
    float intensity = pow(rim, 3.0) * 0.7;
    gl_FragColor = vec4(0.25, 0.55, 1.0, 1.0) * intensity;
  }
`

interface MarkerEntry {
  group: THREE.Group
  mesh: THREE.Mesh
  layer: LayerId
  id: string
  hoverData: GlobeHoverData
}

// Planet data: [name, radius, distance, color, orbitalSpeed, hasRings, tilt]
interface PlanetData {
  name: string
  radius: number
  distance: number
  color: number
  speed: number
  hasRings: boolean
  tilt: number
  texUrl?: string
}

const PLANETS: PlanetData[] = [
  { name: 'Mercury', radius: 0.10, distance: 3.0, color: 0x8c7853, speed: 0.0048, hasRings: false, tilt: 0.03 },
  { name: 'Venus',   radius: 0.16, distance: 4.5, color: 0xe39e54, speed: 0.0020, hasRings: false, tilt: 3.10 },
  { name: 'Earth',   radius: 0.18, distance: 6.5, color: 0x2b5f8a, speed: 0.0012, hasRings: false, tilt: 0.41,
    texUrl: 'https://unpkg.com/three-globe@2.31.1/example/img/earth-blue-marble.jpg' },
  { name: 'Mars',    radius: 0.13, distance: 9.0, color: 0xc1440e, speed: 0.0010, hasRings: false, tilt: 0.44 },
  { name: 'Jupiter', radius: 0.50, distance: 14.0, color: 0xd8a87e, speed: 0.0005, hasRings: false, tilt: 0.05 },
  { name: 'Saturn',  radius: 0.42, distance: 19.0, color: 0xead6b8, speed: 0.0003, hasRings: true,  tilt: 0.47 },
  { name: 'Uranus',  radius: 0.28, distance: 24.0, color: 0x8eceed, speed: 0.0002, hasRings: true,  tilt: 1.71 },
  { name: 'Neptune', radius: 0.27, distance: 29.0, color: 0x3d5ef8, speed: 0.00015, hasRings: false, tilt: 0.49 },
]

export default function Globe({
  newsItems, satellites, earthquakes, flights, radioStations,
  seaRoutes, flightPaths, activeLayers, godEyeMode,
  onHover, onClick, onViewChange,
}: GlobeProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const onHoverRef = useRef(onHover)
  const onClickRef = useRef(onClick)
  const onViewChangeRef = useRef(onViewChange)
  const markersRef = useRef<MarkerEntry[]>([])
  const markersContainerRef = useRef<THREE.Group | null>(null)
  const arcsContainerRef = useRef<THREE.Group | null>(null)
  const activeLayersRef = useRef(activeLayers)
  const godEyeRef = useRef(godEyeMode)
  const [viewMode, setViewMode] = useState<ViewMode>('earth')

  useEffect(() => { onHoverRef.current = onHover }, [onHover])
  useEffect(() => { onClickRef.current = onClick }, [onClick])
  useEffect(() => { onViewChangeRef.current = onViewChange }, [onViewChange])
  useEffect(() => { activeLayersRef.current = activeLayers }, [activeLayers])
  useEffect(() => { godEyeRef.current = godEyeMode }, [godEyeMode])

  // Rebuild markers + arcs whenever data or layers change
  useEffect(() => {
    const container = markersContainerRef.current
    const arcContainer = arcsContainerRef.current
    if (!container || !arcContainer) return

    container.clear()
    arcContainer.clear()
    markersRef.current = []

    const dotGeo = new THREE.SphereGeometry(0.012, 8, 8)

    // ── News markers ────────────────────────────────────────────────────────
    if (activeLayers.has('news')) {
      newsItems.forEach(item => {
        const color = CATEGORY_META[item.category]?.hex ?? 0x94a3b8
        const mat = new THREE.MeshBasicMaterial({ color, depthTest: true, depthWrite: true, toneMapped: false })
        const dot = new THREE.Mesh(dotGeo, mat)
        const group = new THREE.Group()
        group.position.copy(latLngToVec3(item.lat, item.lng, 1.0))
        group.add(dot)
        container.add(group)
        markersRef.current.push({
          group, mesh: dot, layer: 'news', id: item.url,
          hoverData: { layer: 'news', title: item.title, subtitle: item.source, meta: CATEGORY_META[item.category].label, url: item.url, lat: item.lat, lng: item.lng },
        })
      })
    }

    // ── Satellite markers ───────────────────────────────────────────────────
    if (activeLayers.has('satellites')) {
      const satGeo = new THREE.SphereGeometry(0.006, 6, 6)
      satellites.forEach(sat => {
        const color = SAT_CLASS_META[sat.satClass]?.hex ?? 0xa78bfa
        const mat = new THREE.MeshBasicMaterial({ color, depthTest: true, depthWrite: true, toneMapped: false })
        const dot = new THREE.Mesh(satGeo, mat)
        const r = 1.0 + Math.min(sat.alt / 6371, 0.3) * 0.3
        const group = new THREE.Group()
        group.position.copy(latLngToVec3(sat.lat, sat.lng, r))
        group.add(dot)
        container.add(group)
        markersRef.current.push({
          group, mesh: dot, layer: 'satellites', id: `sat-${sat.id}`,
          hoverData: { layer: 'satellites', title: sat.name, subtitle: SAT_CLASS_META[sat.satClass].label, meta: `${sat.alt} km · ${sat.velocity} km/s`, lat: sat.lat, lng: sat.lng },
        })
      })
    }

    // ── Earthquake markers ──────────────────────────────────────────────────
    if (activeLayers.has('earthquakes')) {
      const eqGeo = new THREE.SphereGeometry(0.014, 8, 8)
      earthquakes.forEach(eq => {
        const scale = Math.max(0.5, Math.min(eq.magnitude / 8, 2.5))
        const color = eq.magnitude >= 6 ? 0xef4444 : eq.magnitude >= 4.5 ? 0xf97316 : 0xfbbf24
        const mat = new THREE.MeshBasicMaterial({ color, depthTest: true, depthWrite: true, toneMapped: false, transparent: true, opacity: 0.9 })
        const dot = new THREE.Mesh(eqGeo, mat)
        dot.scale.setScalar(scale)
        const group = new THREE.Group()
        group.position.copy(latLngToVec3(eq.lat, eq.lng, 1.005))
        group.add(dot)
        container.add(group)
        markersRef.current.push({
          group, mesh: dot, layer: 'earthquakes', id: eq.id,
          hoverData: { layer: 'earthquakes', title: `M${eq.magnitude} Earthquake`, subtitle: eq.place, meta: `${eq.depth} km deep`, url: eq.url, lat: eq.lat, lng: eq.lng },
        })
      })
    }

    // ── Flight markers ──────────────────────────────────────────────────────
    if (activeLayers.has('flights')) {
      const flightGeo = new THREE.ConeGeometry(0.008, 0.02, 4)
      flights.forEach(flight => {
        const color = flight.military ? 0xfb923c : 0xfbbf24
        const mat = new THREE.MeshBasicMaterial({ color, depthTest: true, depthWrite: true, toneMapped: false })
        const dot = new THREE.Mesh(flightGeo, mat)
        dot.rotation.x = Math.PI / 2
        dot.rotation.z = -flight.heading * Math.PI / 180
        const group = new THREE.Group()
        group.position.copy(latLngToVec3(flight.lat, flight.lng, 1.002))
        group.add(dot)
        container.add(group)
        markersRef.current.push({
          group, mesh: dot, layer: 'flights', id: flight.icao,
          hoverData: { layer: 'flights', title: flight.callsign, subtitle: flight.origin || 'Unknown origin', meta: flight.military ? 'Military' : `${flight.altitude} m · ${flight.velocity} m/s`, lat: flight.lat, lng: flight.lng },
        })
      })
    }

    // ── Radio markers ───────────────────────────────────────────────────────
    if (activeLayers.has('radio')) {
      const radioGeo = new THREE.SphereGeometry(0.01, 8, 8)
      radioStations.forEach(station => {
        const mat = new THREE.MeshBasicMaterial({ color: 0x22d3ee, depthTest: true, depthWrite: true, toneMapped: false, transparent: true, opacity: 0.85 })
        const dot = new THREE.Mesh(radioGeo, mat)
        const group = new THREE.Group()
        group.position.copy(latLngToVec3(station.lat, station.lng, 1.0))
        group.add(dot)
        container.add(group)
        markersRef.current.push({
          group, mesh: dot, layer: 'radio', id: station.id,
          hoverData: { layer: 'radio', title: station.name, subtitle: station.country, meta: station.tags.join(', ') || station.codec, url: station.url, lat: station.lat, lng: station.lng },
        })
      })
    }

    // ── Flight path arcs ────────────────────────────────────────────────────
    if (activeLayers.has('flightPaths')) {
      flightPaths.forEach(fp => {
        const from = latLngToVec3(fp.fromLat, fp.fromLng, 1.0)
        const to = latLngToVec3(fp.toLat, fp.toLng, 1.0)
        const points = greatCircleArc(from, to, 48)
        const geo = new THREE.BufferGeometry().setFromPoints(points)
        const color = fp.military ? 0xfb923c : 0xf59e0b
        const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.5, depthWrite: false, toneMapped: false })
        const line = new THREE.Line(geo, mat)
        arcContainer.add(line)

        // Endpoint dots
        const endGeo = new THREE.SphereGeometry(0.008, 6, 6)
        const endMat = new THREE.MeshBasicMaterial({ color, toneMapped: false })
        const fromDot = new THREE.Mesh(endGeo, endMat)
        fromDot.position.copy(from)
        const toDot = new THREE.Mesh(endGeo, endMat)
        toDot.position.copy(to)
        arcContainer.add(fromDot, toDot)
      })
    }

    // ── Sea route arcs ──────────────────────────────────────────────────────
    if (activeLayers.has('seaRoutes')) {
      seaRoutes.forEach(route => {
        const from = latLngToVec3(route.fromLat, route.fromLng, 1.0)
        const to = latLngToVec3(route.toLat, route.toLng, 1.0)
        const points = greatCircleArc(from, to, 64)
        const geo = new THREE.BufferGeometry().setFromPoints(points)
        const opacity = route.traffic === 'high' ? 0.7 : route.traffic === 'medium' ? 0.45 : 0.25
        const mat = new THREE.LineBasicMaterial({ color: 0x06b6d4, transparent: true, opacity, depthWrite: false, toneMapped: false })
        const line = new THREE.Line(geo, mat)
        arcContainer.add(line)

        // Port dots
        const portGeo = new THREE.SphereGeometry(0.01, 8, 8)
        const portMat = new THREE.MeshBasicMaterial({ color: 0x06b6d4, toneMapped: false })
        const fromDot = new THREE.Mesh(portGeo, portMat)
        fromDot.position.copy(from)
        const toDot = new THREE.Mesh(portGeo, portMat)
        toDot.position.copy(to)
        arcContainer.add(fromDot, toDot)
      })
    }
  }, [newsItems, satellites, earthquakes, flights, radioStations, seaRoutes, flightPaths, activeLayers])

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000000)

    const w = mount.clientWidth || 800
    const h = mount.clientHeight || 600
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.01, 5000)
    camera.position.set(0, 0, 2.8)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(w, h)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    mount.appendChild(renderer.domElement)

    // ── Earth group ───────────────────────────────────────────────────────────
    const earthGroup = new THREE.Group()
    scene.add(earthGroup)

    scene.add(new THREE.AmbientLight(0xddeeff, 0.7))
    const sunLight = new THREE.DirectionalLight(0xfff8f0, 0.9)
    sunLight.position.set(5, 3, 4)
    scene.add(sunLight)

    const globeGeo = new THREE.SphereGeometry(1, 128, 128)
    const globeMat = new THREE.MeshStandardMaterial({
      color: 0x1a4d80,
      roughness: 0.78,
      metalness: 0.0,
    })
    const globe = new THREE.Mesh(globeGeo, globeMat)
    globe.rotation.x = THREE.MathUtils.degToRad(-8)
    earthGroup.add(globe)

    const loader = new THREE.TextureLoader()
    loader.crossOrigin = 'anonymous'
    let dayLoaded = false
    const tryDay = (idx: number) => {
      const urls = [
        'https://unpkg.com/three-globe@2.31.1/example/img/earth-blue-marble.jpg',
        'https://cdn.jsdelivr.net/npm/three-globe@2.31.1/example/img/earth-blue-marble.jpg',
      ]
      if (idx >= urls.length) return
      loader.load(urls[idx], (tex) => {
        if (dayLoaded) return
        dayLoaded = true
        tex.colorSpace = THREE.SRGBColorSpace
        tex.anisotropy = renderer.capabilities.getMaxAnisotropy()
        globeMat.map = tex
        globeMat.color.set(0xffffff)
        globeMat.needsUpdate = true
      }, undefined, () => tryDay(idx + 1))
    }
    tryDay(0)

    loader.load('https://unpkg.com/three-globe@2.31.1/example/img/earth-topology.png', (tex) => {
      globeMat.bumpMap = tex
      globeMat.bumpScale = 0.01
      globeMat.needsUpdate = true
    })

    loader.load('https://unpkg.com/three-globe@2.31.1/example/img/earth-water.png', (tex) => {
      globeMat.roughnessMap = tex
      globeMat.needsUpdate = true
    })

    const cloudMat = new THREE.MeshStandardMaterial({
      transparent: true, opacity: 0, roughness: 1, metalness: 0, depthWrite: false,
    })
    const clouds = new THREE.Mesh(new THREE.SphereGeometry(1.005, 64, 64), cloudMat)
    globe.add(clouds)
    loader.load('https://unpkg.com/three-globe@2.31.1/example/img/earth-clouds.png', (tex) => {
      cloudMat.alphaMap = tex
      cloudMat.color.set(0xffffff)
      cloudMat.opacity = 0.85
      cloudMat.needsUpdate = true
    })

    const atmosMat = new THREE.ShaderMaterial({
      vertexShader: ATMOS_VERT,
      fragmentShader: ATMOS_FRAG,
      side: THREE.FrontSide,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
    earthGroup.add(new THREE.Mesh(new THREE.SphereGeometry(1.1, 64, 64), atmosMat))

    const markersContainer = new THREE.Group()
    globe.add(markersContainer)
    markersContainerRef.current = markersContainer

    const arcsContainer = new THREE.Group()
    globe.add(arcsContainer)
    arcsContainerRef.current = arcsContainer

    // ── Solar system group ───────────────────────────────────────────────────
    const solarGroup = new THREE.Group()
    solarGroup.visible = false
    scene.add(solarGroup)

    // The Sun
    const sunGeo = new THREE.SphereGeometry(0.8, 32, 32)
    const sunMat = new THREE.MeshBasicMaterial({ color: 0xffdd33, toneMapped: false })
    const sunMesh = new THREE.Mesh(sunGeo, sunMat)
    solarGroup.add(sunMesh)

    // Sun corona glow
    const sunGlowMat = new THREE.ShaderMaterial({
      vertexShader: ATMOS_VERT,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float rim = 1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0)));
          float intensity = pow(rim, 2.0) * 1.8;
          gl_FragColor = vec4(1.0, 0.7, 0.15, 1.0) * intensity;
        }
      `,
      side: THREE.FrontSide,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
    solarGroup.add(new THREE.Mesh(new THREE.SphereGeometry(1.5, 32, 32), sunGlowMat))

    // Point light at sun position
    const solarLight = new THREE.PointLight(0xfff5e0, 3, 300)
    solarGroup.add(solarLight)
    solarGroup.add(new THREE.AmbientLight(0x222244, 0.5))

    const planetMeshes: { mesh: THREE.Mesh; orbitAngle: number; speed: number; name: string; distance: number; moon?: THREE.Mesh; moonAngle?: number }[] = []

    PLANETS.forEach(p => {
      // Orbit ring
      const orbitGeo = new THREE.RingGeometry(p.distance - 0.03, p.distance + 0.03, 128)
      const orbitMat = new THREE.MeshBasicMaterial({
        color: 0x3a3a5a,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.35,
        depthWrite: false,
      })
      const orbit = new THREE.Mesh(orbitGeo, orbitMat)
      orbit.rotation.x = Math.PI / 2
      solarGroup.add(orbit)

      // Planet
      const pGeo = new THREE.SphereGeometry(p.radius, 32, 32)
      const pMat = new THREE.MeshStandardMaterial({ color: p.color, roughness: 0.8, metalness: 0.1 })
      const pMesh = new THREE.Mesh(pGeo, pMat)
      pMesh.rotation.z = p.tilt
      const startAngle = Math.random() * Math.PI * 2
      pMesh.position.set(Math.cos(startAngle) * p.distance, 0, Math.sin(startAngle) * p.distance)
      solarGroup.add(pMesh)

      // Load Earth texture onto the Earth planet in solar view
      if (p.texUrl) {
        loader.load(p.texUrl, (tex) => {
          tex.colorSpace = THREE.SRGBColorSpace
          pMat.map = tex
          pMat.color.set(0xffffff)
          pMat.needsUpdate = true
        })
      }

      // Saturn / Uranus rings
      if (p.hasRings) {
        const ringInner = p.radius * 1.4
        const ringOuter = p.name === 'Saturn' ? p.radius * 2.4 : p.radius * 1.8
        const ringGeo = new THREE.RingGeometry(ringInner, ringOuter, 64)
        const ringMat = new THREE.MeshBasicMaterial({
          color: p.name === 'Saturn' ? 0xc4a877 : 0x7fdbe6,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.55,
          depthWrite: false,
        })
        const ring = new THREE.Mesh(ringGeo, ringMat)
        ring.rotation.x = Math.PI / 2.5
        pMesh.add(ring)
      }

      // Earth's Moon
      let moon: THREE.Mesh | undefined
      if (p.name === 'Earth') {
        const moonGeo = new THREE.SphereGeometry(0.05, 16, 16)
        const moonMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, roughness: 0.9 })
        moon = new THREE.Mesh(moonGeo, moonMat)
        solarGroup.add(moon)
      }

      planetMeshes.push({ mesh: pMesh, orbitAngle: startAngle, speed: p.speed, name: p.name, distance: p.distance, moon, moonAngle: 0 })
    })

    // ── Galaxy background ────────────────────────────────────────────────────
    const galaxyGroup = new THREE.Group()
    galaxyGroup.visible = false
    scene.add(galaxyGroup)

    // Spiral galaxy star field
    const starCount = 12000
    const starGeo = new THREE.BufferGeometry()
    const starPositions = new Float32Array(starCount * 3)
    const starColors = new Float32Array(starCount * 3)

    for (let i = 0; i < starCount; i++) {
      const arm = Math.floor(Math.random() * 4)
      const armAngle = (arm * Math.PI * 2) / 4
      const t = Math.random()
      const radius = t * 100 + 8
      const angle = armAngle + t * 5 + (Math.random() - 0.5) * 0.6
      const spread = (1 - t) * 12
      starPositions[i * 3] = Math.cos(angle) * radius + (Math.random() - 0.5) * spread
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * spread * 0.4
      starPositions[i * 3 + 2] = Math.sin(angle) * radius + (Math.random() - 0.5) * spread

      const intensity = 0.4 + Math.random() * 0.6
      if (t < 0.25) {
        starColors[i * 3] = intensity; starColors[i * 3 + 1] = intensity * 0.92; starColors[i * 3 + 2] = intensity * 0.8
      } else if (t < 0.65) {
        starColors[i * 3] = intensity * 0.85; starColors[i * 3 + 1] = intensity * 0.88; starColors[i * 3 + 2] = intensity
      } else {
        starColors[i * 3] = intensity * 0.6; starColors[i * 3 + 1] = intensity * 0.7; starColors[i * 3 + 2] = intensity
      }
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3))

    const starMat = new THREE.PointsMaterial({
      size: 1.8, vertexColors: true, transparent: true, opacity: 0.9,
      sizeAttenuation: true, depthWrite: false, blending: THREE.AdditiveBlending,
    })
    galaxyGroup.add(new THREE.Points(starGeo, starMat))

    // Galactic core glow
    const coreGeo = new THREE.SphereGeometry(6, 32, 32)
    const coreMat = new THREE.MeshBasicMaterial({ color: 0xffeecc, transparent: true, opacity: 0.15, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false })
    galaxyGroup.add(new THREE.Mesh(coreGeo, coreMat))

    // Distant background stars
    const bgStarCount = 4000
    const bgStarGeo = new THREE.BufferGeometry()
    const bgStarPos = new Float32Array(bgStarCount * 3)
    for (let i = 0; i < bgStarCount; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 300 + Math.random() * 1000
      bgStarPos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      bgStarPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      bgStarPos[i * 3 + 2] = r * Math.cos(phi)
    }
    bgStarGeo.setAttribute('position', new THREE.BufferAttribute(bgStarPos, 3))
    scene.add(new THREE.Points(bgStarGeo, new THREE.PointsMaterial({
      color: 0x8899aa, size: 1.0, transparent: true, opacity: 0.5, sizeAttenuation: true, depthWrite: false,
    })))

    // ── Navigation state ──────────────────────────────────────────────────────
    let autoRotate = true
    let rotY = THREE.MathUtils.degToRad(-20)
    globe.rotation.y = rotY

    // God's eye: camera orbits around the globe continuously
    let godEyeAngle = 0
    let godEyeHeight = 0.8

    const EARTH_MAX_Z = 8
    const SOLAR_MAX_Z = 80
    const GALAXY_MAX_Z = 600

    let currentMode: ViewMode = 'earth'

    const updateViewMode = (z: number) => {
      let newMode: ViewMode = 'earth'
      if (z > SOLAR_MAX_Z) newMode = 'galaxy'
      else if (z > EARTH_MAX_Z) newMode = 'solar'

      if (newMode !== currentMode) {
        currentMode = newMode
        setViewMode(newMode)
        onViewChangeRef.current?.(newMode)

        if (newMode === 'earth') {
          earthGroup.visible = true; solarGroup.visible = false; galaxyGroup.visible = false
          scene.background = new THREE.Color(0x000000)
        } else if (newMode === 'solar') {
          earthGroup.visible = false; solarGroup.visible = true; galaxyGroup.visible = false
          scene.background = new THREE.Color(0x000005)
        } else {
          earthGroup.visible = false; solarGroup.visible = false; galaxyGroup.visible = true
          scene.background = new THREE.Color(0x000000)
        }
      }
    }

    const _wp = new THREE.Vector3()
    let animId = 0
    const animate = () => {
      animId = requestAnimationFrame(animate)

      if (currentMode === 'earth') {
        // God's eye mode: camera automatically orbits the globe
        if (godEyeRef.current) {
          godEyeAngle += 0.003
          const r = 3.5
          camera.position.x = Math.cos(godEyeAngle) * r
          camera.position.z = Math.sin(godEyeAngle) * r
          camera.position.y = Math.sin(godEyeAngle * 0.5) * godEyeHeight
          camera.lookAt(0, 0, 0)
        } else if (autoRotate) {
          rotY += 0.0022
          globe.rotation.y = rotY
        }

        markersRef.current.forEach(({ group, layer }) => {
          group.getWorldPosition(_wp)
          group.visible = _wp.z > 0.04 && activeLayersRef.current.has(layer)
        })

        // Arc visibility — only show front-facing arcs
        if (arcsContainer) {
          arcsContainer.children.forEach(child => {
            if (child instanceof THREE.Line) {
              const mid = new THREE.Vector3()
              child.geometry.getAttribute('position').getXYZ(Math.floor(child.geometry.getAttribute('position').count / 2), mid)
              mid.applyMatrix4(child.matrixWorld)
              child.visible = mid.z > -0.1
            }
          })
        }
      } else if (currentMode === 'solar') {
        planetMeshes.forEach(p => {
          p.orbitAngle += p.speed
          p.mesh.position.set(Math.cos(p.orbitAngle) * p.distance, 0, Math.sin(p.orbitAngle) * p.distance)
          p.mesh.rotation.y += 0.005

          // Moon orbit around Earth
          if (p.moon) {
            p.moonAngle = (p.moonAngle ?? 0) + 0.02
            const moonDist = p.distance + 0.5
            const moonR = 0.5
            p.moon.position.set(
              Math.cos(p.orbitAngle) * p.distance + Math.cos(p.moonAngle) * moonR,
              Math.sin(p.moonAngle) * moonR * 0.3,
              Math.sin(p.orbitAngle) * p.distance + Math.sin(p.moonAngle) * moonR
            )
          }
        })
        sunMesh.rotation.y += 0.001
        if (autoRotate && !godEyeRef.current) {
          solarGroup.rotation.y += 0.0005
        }
        if (godEyeRef.current) {
          godEyeAngle += 0.002
          const r = 40
          camera.position.x = Math.cos(godEyeAngle) * r
          camera.position.z = Math.sin(godEyeAngle) * r
          camera.position.y = 15
          camera.lookAt(0, 0, 0)
        }
      } else if (currentMode === 'galaxy') {
        if (autoRotate && !godEyeRef.current) {
          galaxyGroup.rotation.y += 0.0003
        }
        if (godEyeRef.current) {
          godEyeAngle += 0.001
          const r = 150
          camera.position.x = Math.cos(godEyeAngle) * r
          camera.position.z = Math.sin(godEyeAngle) * r
          camera.position.y = 40
          camera.lookAt(0, 0, 0)
        }
      }

      renderer.render(scene, camera)
    }
    animate()

    // ── Raycasting ─────────────────────────────────────────────────────────────
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()
    let hoveredEntry: MarkerEntry | null = null

    const doRaycast = (cx: number, cy: number): MarkerEntry | null => {
      if (currentMode !== 'earth') return null
      const rect = renderer.domElement.getBoundingClientRect()
      mouse.x = ((cx - rect.left) / rect.width) * 2 - 1
      mouse.y = -((cy - rect.top) / rect.height) * 2 + 1
      raycaster.setFromCamera(mouse, camera)
      const visibleMeshes = markersRef.current.filter(m => m.group.visible).map(m => m.mesh)
      const hits = raycaster.intersectObjects(visibleMeshes)
      if (!hits.length) return null
      return markersRef.current.find(m => m.mesh === hits[0].object) ?? null
    }

    // ── Mouse / touch controls ─────────────────────────────────────────────────
    let dragging = false
    let hasDragged = false
    let dragPrev = { x: 0, y: 0 }
    let autoResumeTimer = 0

    const onMouseDown = (e: MouseEvent) => {
      if (godEyeRef.current) return
      dragging = true; hasDragged = false; autoRotate = false
      clearTimeout(autoResumeTimer)
      dragPrev = { x: e.clientX, y: e.clientY }
      renderer.domElement.style.cursor = 'grabbing'
    }
    const onMouseMove = (e: MouseEvent) => {
      if (dragging) {
        const dx = e.clientX - dragPrev.x
        const dy = e.clientY - dragPrev.y
        if (Math.hypot(dx, dy) > 2) hasDragged = true
        rotY += dx * 0.006
        if (currentMode === 'earth') {
          globe.rotation.y = rotY
          globe.rotation.x = Math.max(-1.2, Math.min(1.2, globe.rotation.x + dy * 0.006))
        } else if (currentMode === 'solar') {
          solarGroup.rotation.y += dx * 0.006
          solarGroup.rotation.x = Math.max(-1.2, Math.min(1.2, solarGroup.rotation.x + dy * 0.006))
        } else {
          galaxyGroup.rotation.y += dx * 0.003
          galaxyGroup.rotation.x = Math.max(-1.2, Math.min(1.2, galaxyGroup.rotation.x + dy * 0.003))
        }
        dragPrev = { x: e.clientX, y: e.clientY }
        return
      }
      const hit = doRaycast(e.clientX, e.clientY)
      if (hit !== hoveredEntry) {
        hoveredEntry = hit
        onHoverRef.current?.(hit ? hit.hoverData : null, e.clientX, e.clientY)
        markersRef.current.forEach(({ mesh, id }) => {
          mesh.scale.setScalar(id === hit?.id ? 2.2 : (mesh.scale.x > 2 ? 1 : mesh.scale.x))
        })
      }
      renderer.domElement.style.cursor = hit ? 'pointer' : (godEyeRef.current ? 'default' : 'grab')
    }
    const onMouseUp = () => {
      dragging = false
      renderer.domElement.style.cursor = hoveredEntry ? 'pointer' : (godEyeRef.current ? 'default' : 'grab')
      autoResumeTimer = window.setTimeout(() => { autoRotate = true }, 3000)
    }
    const onClickEv = (e: MouseEvent) => {
      if (hasDragged) return
      const hit = doRaycast(e.clientX, e.clientY)
      if (hit) onClickRef.current?.(hit.hoverData)
    }

    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      const maxZ = currentMode === 'galaxy' ? GALAXY_MAX_Z : currentMode === 'solar' ? SOLAR_MAX_Z : EARTH_MAX_Z
      const minZ = currentMode === 'galaxy' ? SOLAR_MAX_Z + 1 : currentMode === 'solar' ? EARTH_MAX_Z + 1 : 1.5
      if (godEyeRef.current) {
        godEyeHeight = Math.max(-2, Math.min(3, godEyeHeight + e.deltaY * 0.002))
        return
      }
      camera.position.z = Math.max(minZ, Math.min(maxZ, camera.position.z + e.deltaY * 0.01))
      updateViewMode(camera.position.z)
    }

    let touchPrev = { x: 0, y: 0 }
    let touchDragged = false
    let pinchDist0 = 0
    let pinchZ0 = 0

    const onTouchStart = (e: TouchEvent) => {
      if (godEyeRef.current) return
      e.preventDefault(); autoRotate = false; clearTimeout(autoResumeTimer)
      if (e.touches.length === 1) {
        touchDragged = false
        touchPrev = { x: e.touches[0].clientX, y: e.touches[0].clientY }
      } else if (e.touches.length === 2) {
        pinchDist0 = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY)
        pinchZ0 = camera.position.z
      }
    }
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault()
      if (e.touches.length === 1 && !godEyeRef.current) {
        const dx = e.touches[0].clientX - touchPrev.x
        const dy = e.touches[0].clientY - touchPrev.y
        if (Math.hypot(dx, dy) > 4) touchDragged = true
        if (currentMode === 'earth') {
          rotY += dx * 0.006; globe.rotation.y = rotY
          globe.rotation.x = Math.max(-1.2, Math.min(1.2, globe.rotation.x + dy * 0.006))
        } else if (currentMode === 'solar') {
          solarGroup.rotation.y += dx * 0.006
          solarGroup.rotation.x = Math.max(-1.2, Math.min(1.2, solarGroup.rotation.x + dy * 0.006))
        } else {
          galaxyGroup.rotation.y += dx * 0.003
          galaxyGroup.rotation.x = Math.max(-1.2, Math.min(1.2, galaxyGroup.rotation.x + dy * 0.003))
        }
        touchPrev = { x: e.touches[0].clientX, y: e.touches[0].clientY }
      } else if (e.touches.length === 2) {
        const dist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY)
        const maxZ = currentMode === 'galaxy' ? GALAXY_MAX_Z : currentMode === 'solar' ? SOLAR_MAX_Z : EARTH_MAX_Z
        const minZ = currentMode === 'galaxy' ? SOLAR_MAX_Z + 1 : currentMode === 'solar' ? EARTH_MAX_Z + 1 : 1.5
        camera.position.z = Math.max(minZ, Math.min(maxZ, pinchZ0 * (pinchDist0 / dist)))
        updateViewMode(camera.position.z)
      }
    }
    const onTouchEnd = (e: TouchEvent) => {
      e.preventDefault()
      if (!touchDragged && e.changedTouches.length === 1) {
        const hit = doRaycast(e.changedTouches[0].clientX, e.changedTouches[0].clientY)
        if (hit) onClickRef.current?.(hit.hoverData)
      }
      if (e.touches.length === 0) autoResumeTimer = window.setTimeout(() => { autoRotate = true }, 3000)
    }

    const ro = new ResizeObserver(() => {
      const rw = mount.clientWidth, rh = mount.clientHeight
      camera.aspect = rw / rh
      camera.updateProjectionMatrix()
      renderer.setSize(rw, rh)
    })
    ro.observe(mount)

    const el = renderer.domElement
    el.style.cursor = 'grab'
    el.addEventListener('mousedown', onMouseDown)
    el.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    el.addEventListener('click', onClickEv)
    el.addEventListener('wheel', onWheel, { passive: false })
    el.addEventListener('touchstart', onTouchStart, { passive: false })
    el.addEventListener('touchmove', onTouchMove, { passive: false })
    el.addEventListener('touchend', onTouchEnd, { passive: false })

    return () => {
      cancelAnimationFrame(animId)
      clearTimeout(autoResumeTimer)
      ro.disconnect()
      el.removeEventListener('mousedown', onMouseDown)
      el.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      el.removeEventListener('click', onClickEv)
      el.removeEventListener('wheel', onWheel)
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchmove', onTouchMove)
      el.removeEventListener('touchend', onTouchEnd)
      renderer.dispose()
      if (mount.contains(el)) mount.removeChild(el)
      markersContainerRef.current = null
      arcsContainerRef.current = null
    }
  }, [])

  return (
    <div className="relative w-full h-full bg-black">
      <div ref={mountRef} className="w-full h-full touch-none" />
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-white/40 px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm pointer-events-none whitespace-nowrap">
        {viewMode === 'earth' && (
          <span className="hidden sm:inline">Drag to rotate · Scroll out to explore the solar system · Click a marker</span>
        )}
        {viewMode === 'solar' && (
          <span>Solar System · Scroll out for the galaxy · Scroll in for Earth</span>
        )}
        {viewMode === 'galaxy' && (
          <span>Milky Way Galaxy · Scroll in to return to the solar system</span>
        )}
      </div>
    </div>
  )
}
