import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import type { NewsItem } from '../types'

interface GlobeProps {
  newsItems: NewsItem[]
  onNewsHover?: (item: NewsItem | null, x: number, y: number) => void
  onNewsClick?: (item: NewsItem) => void
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

// Rim-glow atmosphere shader — creates the blue edge visible in the reference photo
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
  dot: THREE.Mesh
  item: NewsItem
}

export default function Globe({ newsItems, onNewsHover, onNewsClick }: GlobeProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const onHoverRef = useRef(onNewsHover)
  const onClickRef = useRef(onNewsClick)
  // Each marker is a THREE.Group (dot + glow ring) so we can toggle visibility atomically
  const markersRef = useRef<MarkerEntry[]>([])
  const markersContainerRef = useRef<THREE.Group | null>(null)

  useEffect(() => { onHoverRef.current = onNewsHover }, [onNewsHover])
  useEffect(() => { onClickRef.current = onNewsClick }, [onNewsClick])

  // Rebuild markers whenever news items change
  useEffect(() => {
    const container = markersContainerRef.current
    if (!container) return

    container.clear()
    markersRef.current = []

    if (newsItems.length === 0) return

    const dotGeo = new THREE.SphereGeometry(0.012, 8, 8)

    newsItems.forEach(item => {
      const isAcc = item.category === 'accident'

      const dotMat = new THREE.MeshBasicMaterial({
        color: isAcc ? 0xef4444 : 0x3b82f6,
        depthTest: true,
        depthWrite: true,
        toneMapped: false,
      })
      const dot = new THREE.Mesh(dotGeo, dotMat)

      const group = new THREE.Group()
      group.position.copy(latLngToVec3(item.lat, item.lng, 1.0))
      group.add(dot)
      container.add(group)
      markersRef.current.push({ group, dot, item })
    })
  }, [newsItems])

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // ── Scene ─────────────────────────────────────────────────────────────────
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000000)

    // ── Camera ────────────────────────────────────────────────────────────────
    const w = mount.clientWidth || 800
    const h = mount.clientHeight || 600
    const camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 100)
    camera.position.set(0, 0, 2.8)

    // ── Renderer ──────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(w, h)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    mount.appendChild(renderer.domElement)

    // ── Lighting — matches reference photo: gentle warm sun, no hotspot ───────
    // High ambient so the night side is still visible (not pitch black)
    scene.add(new THREE.AmbientLight(0xddeeff, 0.7))
    // Single directional from upper-right, moderate intensity for the gradient
    const sun = new THREE.DirectionalLight(0xfff8f0, 0.9)
    sun.position.set(5, 3, 4)
    scene.add(sun)

    // ── Globe — MeshStandardMaterial, roughness=0.78 → natural matte texture ─
    const globeGeo = new THREE.SphereGeometry(1, 128, 128)
    const globeMat = new THREE.MeshStandardMaterial({
      color: 0x1a4d80,  // fallback ocean blue
      roughness: 0.78,
      metalness: 0.0,
    })
    const globe = new THREE.Mesh(globeGeo, globeMat)
    globe.rotation.x = THREE.MathUtils.degToRad(-8)
    scene.add(globe)

    // Texture loading — try both CDNs, fall back gracefully
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

    // Bump map for terrain relief (mountains, ocean ridges)
    loader.load('https://unpkg.com/three-globe@2.31.1/example/img/earth-topology.png', (tex) => {
      globeMat.bumpMap = tex
      globeMat.bumpScale = 0.01
      globeMat.needsUpdate = true
    })

    // Roughness map — oceans slightly smoother than land
    loader.load('https://unpkg.com/three-globe@2.31.1/example/img/earth-water.png', (tex) => {
      globeMat.roughnessMap = tex
      globeMat.needsUpdate = true
    })

    // Cloud layer
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

    // ── Atmosphere — blue rim glow at the limb ────────────────────────────────
    const atmosMat = new THREE.ShaderMaterial({
      vertexShader: ATMOS_VERT,
      fragmentShader: ATMOS_FRAG,
      side: THREE.FrontSide,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
    scene.add(new THREE.Mesh(new THREE.SphereGeometry(1.1, 64, 64), atmosMat))

    // ── Markers container — child of globe so dots rotate with it ─────────────
    const markersContainer = new THREE.Group()
    globe.add(markersContainer)
    markersContainerRef.current = markersContainer

    // ── Rotation state ────────────────────────────────────────────────────────
    let autoRotate = true
    let rotY = THREE.MathUtils.degToRad(-20)
    globe.rotation.y = rotY

    // Reusable vector for the per-frame visibility check
    const _wp = new THREE.Vector3()

    // ── Animation loop ────────────────────────────────────────────────────────
    let animId = 0
    const animate = () => {
      animId = requestAnimationFrame(animate)
      if (autoRotate) {
        rotY += 0.0022
        globe.rotation.y = rotY
      }

      // ── Backface cull: hide any marker whose world Z < 0 (facing away from camera)
      // Camera is always on the positive Z axis so worldPos.z > 0 = facing us.
      // This is the only reliable way — depth-buffer culling can still bleed through
      // transparent geometry.
      markersRef.current.forEach(({ group }) => {
        group.getWorldPosition(_wp)
        group.visible = _wp.z > 0.04
      })

      renderer.render(scene, camera)
    }
    animate()

    // ── Raycaster ─────────────────────────────────────────────────────────────
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()
    let hoveredItem: NewsItem | null = null

    const doRaycast = (cx: number, cy: number): NewsItem | null => {
      const rect = renderer.domElement.getBoundingClientRect()
      mouse.x = ((cx - rect.left) / rect.width) * 2 - 1
      mouse.y = -((cy - rect.top) / rect.height) * 2 + 1
      raycaster.setFromCamera(mouse, camera)
      // Only raycast visible dots (backface ones are already hidden)
      const visibleDots = markersRef.current.filter(m => m.group.visible).map(m => m.dot)
      const hits = raycaster.intersectObjects(visibleDots)
      if (!hits.length) return null
      return markersRef.current.find(m => m.dot === hits[0].object)?.item ?? null
    }

    // ── Mouse ─────────────────────────────────────────────────────────────────
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
      if (hit !== hoveredItem) {
        hoveredItem = hit
        onHoverRef.current?.(hit, e.clientX, e.clientY)
        markersRef.current.forEach(({ dot, item }) => dot.scale.setScalar(item.url === hit?.url ? 2.2 : 1.0))
      }
      renderer.domElement.style.cursor = hit ? 'pointer' : 'grab'
    }
    const onMouseUp = () => {
      dragging = false
      renderer.domElement.style.cursor = hoveredItem ? 'pointer' : 'grab'
      autoResumeTimer = window.setTimeout(() => { autoRotate = true }, 3000)
    }
    const onClick = (e: MouseEvent) => {
      if (hasDragged) return
      const hit = doRaycast(e.clientX, e.clientY)
      if (hit) onClickRef.current?.(hit)
    }
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      camera.position.z = Math.max(1.5, Math.min(6.5, camera.position.z + e.deltaY * 0.004))
    }

    // ── Touch ─────────────────────────────────────────────────────────────────
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
        if (hit) onClickRef.current?.(hit)
      }
      if (e.touches.length === 0) autoResumeTimer = window.setTimeout(() => { autoRotate = true }, 3000)
    }

    // ── Resize ────────────────────────────────────────────────────────────────
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
    el.addEventListener('click', onClick)
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
      el.removeEventListener('click', onClick)
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
        <span className="hidden sm:inline">Drag to rotate · Scroll to zoom · Click a dot</span>
        <span className="sm:hidden">Drag · Pinch to zoom · Tap dot</span>
      </div>
    </div>
  )
}
