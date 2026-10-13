import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import type { NewsItem, Earthquake, Flight, RadioStation, LayerId } from '../types'
import { CATEGORY_META } from '../types'

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
  earthquakes: Earthquake[]
  flights: Flight[]
  radioStations: RadioStation[]
  activeLayers: Set<LayerId>
  godEyeMode: boolean
  onHover?: (data: GlobeHoverData | null, x: number, y: number) => void
  onClick?: (data: GlobeHoverData) => void
}

function latLngToVec3(lat: number, lng: number, radius = 1): THREE.Vector3 {
  const phi = (90 - lat) * Math.PI / 180
  const theta = (lng + 180) * Math.PI / 180
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  )
}

interface MarkerEntry {
  group: THREE.Group
  mesh: THREE.Mesh
  layer: LayerId
  id: string
  hoverData: GlobeHoverData
}

const atmosphereVertex = `
  varying vec3 vNormal;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const atmosphereFragment = `
  varying vec3 vNormal;
  void main() {
    float rim = 1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0)));
    float intensity = pow(rim, 3.0) * 0.7;
    gl_FragColor = vec4(0.25, 0.55, 1.0, 1.0) * intensity;
  }
`

export default function Globe({ newsItems, earthquakes, flights, radioStations, activeLayers, godEyeMode, onHover, onClick }: GlobeProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const activeLayersRef = useRef(activeLayers)
  const godEyeRef = useRef(godEyeMode)
  const hoverRef = useRef(onHover)
  const clickRef = useRef(onClick)
  const markersRef = useRef<MarkerEntry[]>([])

  useEffect(() => { activeLayersRef.current = activeLayers }, [activeLayers])
  useEffect(() => { godEyeRef.current = godEyeMode }, [godEyeMode])
  useEffect(() => { hoverRef.current = onHover }, [onHover])
  useEffect(() => { clickRef.current = onClick }, [onClick])

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x02050a)
    const width = container.clientWidth || 800
    const height = container.clientHeight || 600
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.01, 100)
    camera.position.set(0, 0, 2.8)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(width, height)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    container.appendChild(renderer.domElement)

    scene.add(new THREE.AmbientLight(0xddeeff, 0.75))
    const sunLight = new THREE.DirectionalLight(0xfff8f0, 1.1)
    sunLight.position.set(5, 3, 4)
    scene.add(sunLight)

    const earthMaterial = new THREE.MeshStandardMaterial({ color: 0x1a4d80, roughness: 0.78 })
    const earth = new THREE.Mesh(new THREE.SphereGeometry(1, 96, 96), earthMaterial)
    earth.rotation.x = THREE.MathUtils.degToRad(-8)
    scene.add(earth)

    const loader = new THREE.TextureLoader()
    loader.crossOrigin = 'anonymous'
    loader.load('https://unpkg.com/three-globe@2.31.1/example/img/earth-blue-marble.jpg', texture => {
      texture.colorSpace = THREE.SRGBColorSpace
      earthMaterial.map = texture
      earthMaterial.color.set(0xffffff)
      earthMaterial.needsUpdate = true
    })

    const atmosphere = new THREE.ShaderMaterial({
      vertexShader: atmosphereVertex,
      fragmentShader: atmosphereFragment,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
    scene.add(new THREE.Mesh(new THREE.SphereGeometry(1.1, 64, 64), atmosphere))

    const markerContainer = new THREE.Group()
    earth.add(markerContainer)
    const markerEntries: MarkerEntry[] = []
    markersRef.current = markerEntries

    const addMarker = (layer: LayerId, id: string, lat: number, lng: number, color: number, geometry: THREE.BufferGeometry, hoverData: GlobeHoverData, scale = 1) => {
      const material = new THREE.MeshBasicMaterial({ color, toneMapped: false, depthTest: true })
      const mesh = new THREE.Mesh(geometry, material)
      mesh.scale.setScalar(scale)
      const group = new THREE.Group()
      group.position.copy(latLngToVec3(lat, lng, 1.006))
      group.add(mesh)
      markerContainer.add(group)
      markerEntries.push({ group, mesh, layer, id, hoverData })
    }

    if (activeLayers.has('news')) {
      newsItems.forEach(item => addMarker('news', item.url, item.lat, item.lng, CATEGORY_META[item.category]?.hex ?? 0x94a3b8, new THREE.SphereGeometry(0.014, 8, 8), { layer: 'news', title: item.title, subtitle: item.source, meta: CATEGORY_META[item.category]?.label, url: item.url, lat: item.lat, lng: item.lng }))
    }
    if (activeLayers.has('earthquakes')) {
      earthquakes.forEach(eq => addMarker('earthquakes', eq.id, eq.lat, eq.lng, eq.magnitude >= 6 ? 0xef4444 : eq.magnitude >= 4.5 ? 0xf97316 : 0xfbbf24, new THREE.SphereGeometry(0.018, 8, 8), { layer: 'earthquakes', title: `M${eq.magnitude} Earthquake`, subtitle: eq.place, meta: `${eq.depth} km deep`, url: eq.url, lat: eq.lat, lng: eq.lng }, Math.max(0.7, Math.min(eq.magnitude / 5, 2.5))))
    }
    if (activeLayers.has('flights')) {
      flights.forEach(flight => {
        const entryGeometry = new THREE.ConeGeometry(0.012, 0.035, 4)
        const data: GlobeHoverData = { layer: 'flights', title: flight.callsign, subtitle: flight.origin || 'Unknown origin', meta: flight.military ? 'Military aircraft' : `${flight.altitude} m · ${flight.velocity} m/s`, lat: flight.lat, lng: flight.lng }
        addMarker('flights', flight.icao, flight.lat, flight.lng, flight.military ? 0xfb923c : 0xfbbf24, entryGeometry, data)
      })
    }
    if (activeLayers.has('radio')) {
      radioStations.forEach(station => addMarker('radio', station.id, station.lat, station.lng, 0x22d3ee, new THREE.SphereGeometry(0.012, 8, 8), { layer: 'radio', title: station.name, subtitle: station.country, meta: station.tags.join(', ') || station.codec, url: station.url, lat: station.lat, lng: station.lng }))
    }

    let rotation = -0.35
    let godAngle = 0
    let dragging = false
    let dragged = false
    let previous = { x: 0, y: 0 }
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()
    let hovered: MarkerEntry | null = null

    const raycast = (clientX: number, clientY: number): MarkerEntry | null => {
      const rect = renderer.domElement.getBoundingClientRect()
      mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1
      raycaster.setFromCamera(mouse, camera)
      const hits = raycaster.intersectObjects(markerEntries.filter(entry => entry.group.visible).map(entry => entry.mesh))
      return hits[0] ? markerEntries.find(entry => entry.mesh === hits[0].object) ?? null : null
    }

    const onDown = (event: MouseEvent) => {
      if (godEyeRef.current) return
      dragging = true
      dragged = false
      previous = { x: event.clientX, y: event.clientY }
    }
    const onMove = (event: MouseEvent) => {
      if (dragging) {
        const dx = event.clientX - previous.x
        const dy = event.clientY - previous.y
        if (Math.hypot(dx, dy) > 2) dragged = true
        rotation += dx * 0.006
        earth.rotation.y = rotation
        earth.rotation.x = Math.max(-1.2, Math.min(1.2, earth.rotation.x + dy * 0.006))
        previous = { x: event.clientX, y: event.clientY }
        return
      }
      const hit = raycast(event.clientX, event.clientY)
      if (hit !== hovered) {
        hovered = hit
        hoverRef.current?.(hit?.hoverData ?? null, event.clientX, event.clientY)
        markerEntries.forEach(entry => entry.mesh.scale.setScalar(entry === hit ? 2 : 1))
      }
      renderer.domElement.style.cursor = hit ? 'pointer' : godEyeRef.current ? 'default' : 'grab'
    }
    const onUp = () => { dragging = false }
    const onClickEvent = (event: MouseEvent) => { if (!dragged) { const hit = raycast(event.clientX, event.clientY); if (hit) clickRef.current?.(hit.hoverData) } }
    const onTouchStart = (event: TouchEvent) => { if (!godEyeRef.current && event.touches[0]) { previous = { x: event.touches[0].clientX, y: event.touches[0].clientY }; dragging = true; dragged = false } }
    const onTouchMove = (event: TouchEvent) => { if (!godEyeRef.current && event.touches[0]) { const dx = event.touches[0].clientX - previous.x; if (Math.abs(dx) > 3) dragged = true; rotation += dx * 0.006; earth.rotation.y = rotation; previous = { x: event.touches[0].clientX, y: event.touches[0].clientY } } }
    const onTouchEnd = () => { dragging = false }

    renderer.domElement.addEventListener('mousedown', onDown)
    renderer.domElement.addEventListener('mousemove', onMove)
    renderer.domElement.addEventListener('click', onClickEvent)
    renderer.domElement.addEventListener('touchstart', onTouchStart, { passive: true })
    renderer.domElement.addEventListener('touchmove', onTouchMove, { passive: true })
    renderer.domElement.addEventListener('touchend', onTouchEnd)
    window.addEventListener('mouseup', onUp)

    let animationId = 0
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      if (godEyeRef.current) {
        godAngle += 0.0025
        camera.position.set(Math.cos(godAngle) * 3.4, Math.sin(godAngle * 0.5) * 0.7, Math.sin(godAngle) * 3.4)
        camera.lookAt(0, 0, 0)
      } else {
        earth.rotation.y = rotation
      }
      const worldPosition = new THREE.Vector3()
      markerEntries.forEach(entry => {
        entry.group.getWorldPosition(worldPosition)
        entry.group.visible = worldPosition.z > 0.02 && activeLayersRef.current.has(entry.layer)
      })
      renderer.render(scene, camera)
    }
    animate()

    const resize = new ResizeObserver(() => {
      const nextWidth = container.clientWidth
      const nextHeight = container.clientHeight
      camera.aspect = nextWidth / nextHeight
      camera.updateProjectionMatrix()
      renderer.setSize(nextWidth, nextHeight)
    })
    resize.observe(container)

    return () => {
      cancelAnimationFrame(animationId)
      resize.disconnect()
      renderer.domElement.removeEventListener('mousedown', onDown)
      renderer.domElement.removeEventListener('mousemove', onMove)
      renderer.domElement.removeEventListener('click', onClickEvent)
      renderer.domElement.removeEventListener('touchstart', onTouchStart)
      renderer.domElement.removeEventListener('touchmove', onTouchMove)
      renderer.domElement.removeEventListener('touchend', onTouchEnd)
      window.removeEventListener('mouseup', onUp)
      renderer.dispose()
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
    }
  }, [newsItems, earthquakes, flights, radioStations, activeLayers])

  return (
    <div className="relative w-full h-full bg-black">
      <div ref={mountRef} className="w-full h-full touch-none" />
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-white/50 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm pointer-events-none">
        {godEyeMode ? 'God’s Eye surveillance orbit active' : 'Drag to rotate Earth · click a marker for details'}
      </div>
    </div>
  )
}
