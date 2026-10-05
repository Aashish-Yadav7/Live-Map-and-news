import { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import type { NewsItem, Satellite, Earthquake, Flight, RadioStation, LayerId } from '../types'
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
  activeLayers: Set<LayerId>
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

// Planet data: [name, radius, distance from sun, color, orbital speed]
const PLANETS: [string, number, number, number, number][] = [
  ['Mercury', 0.08, 2.5, 0x8c7853, 0.004],
  ['Venus', 0.14, 3.6, 0xe39e54, 0.0015],
  ['Earth', 0.15, 5.0, 0x2b5f8a, 0.001],
  ['Mars', 0.11, 7.0, 0xc1440e, 0.0008],
  ['Jupiter', 0.45, 11.0, 0xd8a87e, 0.0004],
  ['Saturn', 0.38, 15.5, 0xead6b8, 0.0003],
  ['Uranus', 0.24, 20.0, 0x8eceed, 0.0002],
  ['Neptune', 0.23, 24.0, 0x3d5ef8, 0.00015],
]

export default function Globe({
  newsItems, satellites, earthquakes, flights, radioStations,
  activeLayers, onHover, onClick, onViewChange,
}: GlobeProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const onHoverRef = useRef(onHover)
  const onClickRef = useRef(onClick)
  const onViewChangeRef = useRef(onViewChange)
  const markersRef = useRef<MarkerEntry[]>([])
  const markersContainerRef = useRef<THREE.Group | null>(null)
  const activeLayersRef = useRef(activeLayers)
  const [viewMode, setViewMode] = useState<ViewMode>('earth')

  useEffect(() => { onHoverRef.current = onHover }, [onHover])
  useEffect(() => { onClickRef.current = onClick }, [onClick])
  useEffect(() => { onViewChangeRef.current = onViewChange }, [onViewChange])
  useEffect(() => { activeLayersRef.current = activeLayers }, [activeLayers])

  // Rebuild markers whenever any layer data changes
  useEffect(() => {
    const container = markersContainerRef.current
    if (!container) return

    container.clear()
    markersRef.current = []

    const dotGeo = new THREE.SphereGeometry(0.012, 8, 8)

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
  }, [newsItems, satellites, earthquakes, flights, radioStations, activeLayers])

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

    // ── Solar system group ───────────────────────────────────────────────────
    const solarGroup = new THREE.Group()
    solarGroup.visible = false
    scene.add(solarGroup)

    // The Sun
    const sunGeo = new THREE.SphereGeometry(0.6, 32, 32)
    const sunMat = new THREE.MeshBasicMaterial({ color: 0xffdd33, toneMapped: false })
    const sunMesh = new THREE.Mesh(sunGeo, sunMat)
    solarGroup.add(sunMesh)

    // Sun glow
    const sunGlowMat = new THREE.ShaderMaterial({
      vertexShader: ATMOS_VERT,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float rim = 1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0)));
          float intensity = pow(rim, 2.0) * 1.5;
          gl_FragColor = vec4(1.0, 0.8, 0.2, 1.0) * intensity;
        }
      `,
      side: THREE.FrontSide,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
    solarGroup.add(new THREE.Mesh(new THREE.SphereGeometry(1.2, 32, 32), sunGlowMat))

    // Point light at sun position for solar view
    const solarLight = new THREE.PointLight(0xfff5e0, 2, 200)
    solarGroup.add(solarLight)

    const planetMeshes: { mesh: THREE.Mesh; orbitAngle: number; speed: number; name: string }[] = []

    PLANETS.forEach(([name, radius, distance, color, speed]) => {
      // Orbit ring
      const orbitGeo = new THREE.RingGeometry(distance - 0.02, distance + 0.02, 128)
      const orbitMat = new THREE.MeshBasicMaterial({
        color: 0x444466,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.3,
        depthWrite: false,
      })
      const orbit = new THREE.Mesh(orbitGeo, orbitMat)
      orbit.rotation.x = Math.PI / 2
      solarGroup.add(orbit)

      // Planet
      const pGeo = new THREE.SphereGeometry(radius, 32, 32)
      const pMat = new THREE.MeshStandardMaterial({ color, roughness: 0.8, metalness: 0.1 })
      const pMesh = new THREE.Mesh(pGeo, pMat)
      const startAngle = Math.random() * Math.PI * 2
      pMesh.position.set(Math.cos(startAngle) * distance, 0, Math.sin(startAngle) * distance)
      solarGroup.add(pMesh)

      // Saturn rings
      if (name === 'Saturn') {
        const ringGeo = new THREE.RingGeometry(radius * 1.4, radius * 2.2, 64)
        const ringMat = new THREE.MeshBasicMaterial({
          color: 0xc4a877,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.6,
          depthWrite: false,
        })
        const ring = new THREE.Mesh(ringGeo, ringMat)
        ring.rotation.x = Math.PI / 2.3
        pMesh.add(ring)
      }

      planetMeshes.push({ mesh: pMesh, orbitAngle: startAngle, speed, name })
    })

    // ── Galaxy background (star field) ────────────────────────────────────────
    const galaxyGroup = new THREE.Group()
    galaxyGroup.visible = false
    scene.add(galaxyGroup)

    // Generate a spiral galaxy star field
    const starCount = 8000
    const starGeo = new THREE.BufferGeometry()
    const starPositions = new Float32Array(starCount * 3)
    const starColors = new Float32Array(starCount * 3)
    const starSizes = new Float32Array(starCount)

    for (let i = 0; i < starCount; i++) {
      const arm = Math.floor(Math.random() * 4)
      const armAngle = (arm * Math.PI * 2) / 4
      const t = Math.random()
      const radius = t * 80 + 5
      const angle = armAngle + t * 4 + (Math.random() - 0.5) * 0.5
      const spread = (1 - t) * 8
      const x = Math.cos(angle) * radius + (Math.random() - 0.5) * spread
      const z = Math.sin(angle) * radius + (Math.random() - 0.5) * spread
      const y = (Math.random() - 0.5) * spread * 0.3

      starPositions[i * 3] = x
      starPositions[i * 3 + 1] = y
      starPositions[i * 3 + 2] = z

      // Star color: white-blue near center, cooler at edges
      const intensity = 0.5 + Math.random() * 0.5
      if (t < 0.3) {
        starColors[i * 3] = intensity
        starColors[i * 3 + 1] = intensity * 0.95
        starColors[i * 3 + 2] = intensity
      } else if (t < 0.7) {
        starColors[i * 3] = intensity * 0.9
        starColors[i * 3 + 1] = intensity * 0.9
        starColors[i * 3 + 2] = intensity
      } else {
        starColors[i * 3] = intensity * 0.7
        starColors[i * 3 + 1] = intensity * 0.8
        starColors[i * 3 + 2] = intensity
      }

      starSizes[i] = Math.random() * 2 + 0.5
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3))

    const starMat = new THREE.PointsMaterial({
      size: 1.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
    const stars = new THREE.Points(starGeo, starMat)
    galaxyGroup.add(stars)

    // Distant background stars (all directions)
    const bgStarCount = 3000
    const bgStarGeo = new THREE.BufferGeometry()
    const bgStarPos = new Float32Array(bgStarCount * 3)
    for (let i = 0; i < bgStarCount; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 200 + Math.random() * 800
      bgStarPos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      bgStarPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      bgStarPos[i * 3 + 2] = r * Math.cos(phi)
    }
    bgStarGeo.setAttribute('position', new THREE.BufferAttribute(bgStarPos, 3))
    const bgStarMat = new THREE.PointsMaterial({
      color: 0x888899,
      size: 1.0,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
      depthWrite: false,
    })
    scene.add(new THREE.Points(bgStarGeo, bgStarMat))

    // ── Navigation state ──────────────────────────────────────────────────────
    let autoRotate = true
    let rotY = THREE.MathUtils.degToRad(-20)
    globe.rotation.y = rotY

    // Camera zoom thresholds for view transitions
    const EARTH_MAX_Z = 8       // zoom out past this -> solar
    const SOLAR_MAX_Z = 60      // zoom out past this -> galaxy
    const GALAXY_MAX_Z = 500

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
          earthGroup.visible = true
          solarGroup.visible = false
          galaxyGroup.visible = false
          scene.background = new THREE.Color(0x000000)
        } else if (newMode === 'solar') {
          earthGroup.visible = false
          solarGroup.visible = true
          galaxyGroup.visible = false
          scene.background = new THREE.Color(0x000005)
        } else {
          earthGroup.visible = false
          solarGroup.visible = false
          galaxyGroup.visible = true
          scene.background = new THREE.Color(0x000000)
        }
      }
    }

    const _wp = new THREE.Vector3()

    let animId = 0
    const animate = () => {
      animId = requestAnimationFrame(animate)

      if (currentMode === 'earth') {
        if (autoRotate) {
          rotY += 0.0022
          globe.rotation.y = rotY
        }
        markersRef.current.forEach(({ group, layer }) => {
          group.getWorldPosition(_wp)
          group.visible = _wp.z > 0.04 && activeLayersRef.current.has(layer)
        })
      } else if (currentMode === 'solar') {
        // Animate planet orbits
        planetMeshes.forEach(p => {
          p.orbitAngle += p.speed
          const data = PLANETS.find(d => d[0] === p.name)!
          const dist = data[2]
          p.mesh.position.set(Math.cos(p.orbitAngle) * dist, 0, Math.sin(p.orbitAngle) * dist)
          p.mesh.rotation.y += 0.005
        })
        sunMesh.rotation.y += 0.001
        if (autoRotate) {
          solarGroup.rotation.y += 0.0005
        }
      } else if (currentMode === 'galaxy') {
        if (autoRotate) {
          galaxyGroup.rotation.y += 0.0003
        }
      }

      renderer.render(scene, camera)
    }
    animate()

    // ── Raycasting for markers (earth view only) ───────────────────────────────
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
      renderer.domElement.style.cursor = hit ? 'pointer' : 'grab'
    }
    const onMouseUp = () => {
      dragging = false
      renderer.domElement.style.cursor = hoveredEntry ? 'pointer' : 'grab'
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
      camera.position.z = Math.max(minZ, Math.min(maxZ, camera.position.z + e.deltaY * 0.01))
      updateViewMode(camera.position.z)
    }

    let touchPrev = { x: 0, y: 0 }
    let touchDragged = false
    let pinchDist0 = 0, pinchZ0 = 0

    const onTouchStart = (e: TouchEvent) => {
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
      if (e.touches.length === 1) {
        const dx = e.touches[0].clientX - touchPrev.x
        const dy = e.touches[0].clientY - touchPrev.y
        if (Math.hypot(dx, dy) > 4) touchDragged = true
        if (currentMode === 'earth') {
          rotY += dx * 0.006
          globe.rotation.y = rotY
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
    }
  }, [])

  return (
    <div className="relative w-full h-full bg-black">
      <div ref={mountRef} className="w-full h-full touch-none" />
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-white/40 px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm pointer-events-none whitespace-nowrap">
        {viewMode === 'earth' && (
          <span className="hidden sm:inline">Drag to rotate · Scroll out to explore the solar system</span>
        )}
        {viewMode === 'solar' && (
          <span>Solar System · Scroll out to see the galaxy · Scroll in to return to Earth</span>
        )}
        {viewMode === 'galaxy' && (
          <span>Milky Way Galaxy · Scroll in to return to the solar system</span>
        )}
      </div>
    </div>
  )
}
