import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import type { NewsItem, Satellite, Earthquake, Flight, RadioStation, LayerId } from '../types'
import { CATEGORY_META, SAT_CLASS_META, LAYER_META } from '../types'

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

export default function Globe({
  newsItems, satellites, earthquakes, flights, radioStations,
  activeLayers, onHover, onClick,
}: GlobeProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const onHoverRef = useRef(onHover)
  const onClickRef = useRef(onClick)
  const markersRef = useRef<MarkerEntry[]>([])
  const markersContainerRef = useRef<THREE.Group | null>(null)
  const activeLayersRef = useRef(activeLayers)

  useEffect(() => { onHoverRef.current = onHover }, [onHover])
  useEffect(() => { onClickRef.current = onClick }, [onClick])
  useEffect(() => { activeLayersRef.current = activeLayers }, [activeLayers])

  // Rebuild markers whenever any layer data changes
  useEffect(() => {
    const container = markersContainerRef.current
    if (!container) return

    container.clear()
    markersRef.current = []

    const dotGeo = new THREE.SphereGeometry(0.012, 8, 8)
    const ringGeo = new THREE.RingGeometry(0.018, 0.024, 16)

    // News markers
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

    // Satellite markers — small dots above the globe surface
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

    // Earthquake markers — pulsing red circles sized by magnitude
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

    // Flight markers — tiny yellow triangles oriented by heading
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

    // Radio markers — cyan dots
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
    const camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 100)
    camera.position.set(0, 0, 2.8)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(w, h)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    mount.appendChild(renderer.domElement)

    scene.add(new THREE.AmbientLight(0xddeeff, 0.7))
    const sun = new THREE.DirectionalLight(0xfff8f0, 0.9)
    sun.position.set(5, 3, 4)
    scene.add(sun)

    const globeGeo = new THREE.SphereGeometry(1, 128, 128)
    const globeMat = new THREE.MeshStandardMaterial({
      color: 0x1a4d80,
      roughness: 0.78,
      metalness: 0.0,
    })
    const globe = new THREE.Mesh(globeGeo, globeMat)
    globe.rotation.x = THREE.MathUtils.degToRad(-8)
    scene.add(globe)

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
    scene.add(new THREE.Mesh(new THREE.SphereGeometry(1.1, 64, 64), atmosMat))

    const markersContainer = new THREE.Group()
    globe.add(markersContainer)
    markersContainerRef.current = markersContainer

    let autoRotate = true
    let rotY = THREE.MathUtils.degToRad(-20)
    globe.rotation.y = rotY

    const _wp = new THREE.Vector3()

    let animId = 0
    const animate = () => {
      animId = requestAnimationFrame(animate)
      if (autoRotate) {
        rotY += 0.0022
        globe.rotation.y = rotY
      }

      // Backface cull: hide markers facing away from camera
      markersRef.current.forEach(({ group, layer }) => {
        group.getWorldPosition(_wp)
        group.visible = _wp.z > 0.04 && activeLayersRef.current.has(layer)
      })

      renderer.render(scene, camera)
    }
    animate()

    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()
    let hoveredEntry: MarkerEntry | null = null

    const doRaycast = (cx: number, cy: number): MarkerEntry | null => {
      const rect = renderer.domElement.getBoundingClientRect()
      mouse.x = ((cx - rect.left) / rect.width) * 2 - 1
      mouse.y = -((cy - rect.top) / rect.height) * 2 + 1
      raycaster.setFromCamera(mouse, camera)
      const visibleMeshes = markersRef.current.filter(m => m.group.visible).map(m => m.mesh)
      const hits = raycaster.intersectObjects(visibleMeshes)
      if (!hits.length) return null
      return markersRef.current.find(m => m.mesh === hits[0].object) ?? null
    }

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
        globe.rotation.y = rotY
        globe.rotation.x = Math.max(-1.2, Math.min(1.2, globe.rotation.x + dy * 0.006))
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
      camera.position.z = Math.max(1.5, Math.min(6.5, camera.position.z + e.deltaY * 0.004))
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
        rotY += dx * 0.006
        globe.rotation.y = rotY
        globe.rotation.x = Math.max(-1.2, Math.min(1.2, globe.rotation.x + dy * 0.006))
        touchPrev = { x: e.touches[0].clientX, y: e.touches[0].clientY }
      } else if (e.touches.length === 2) {
        const dist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY)
        camera.position.z = Math.max(1.5, Math.min(6.5, pinchZ0 * (pinchDist0 / dist)))
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
        <span className="hidden sm:inline">Drag to rotate · Scroll to zoom · Click a marker</span>
        <span className="sm:hidden">Drag · Pinch to zoom · Tap marker</span>
      </div>
    </div>
  )
}
