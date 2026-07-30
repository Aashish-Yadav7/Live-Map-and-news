import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import type { NewsItem } from '../types'

interface GlobeProps {
  newsItems: NewsItem[]
  onNewsHover?: (item: NewsItem | null, x: number, y: number) => void
  onNewsClick?: (item: NewsItem) => void
}

// Convert geographic coordinates to a 3D point on the sphere surface
function latLngToVec3(lat: number, lng: number, radius = 1.0): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  )
}

// Create a glowing dot canvas texture
function makeMarkerTexture(color: string): THREE.CanvasTexture {
  const size = 128
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')!
  const cx = size / 2
  const r = size / 2
  const grad = ctx.createRadialGradient(cx, cx, r * 0.05, cx, cx, r)
  grad.addColorStop(0.0, color)
  grad.addColorStop(0.25, color)
  grad.addColorStop(0.5, color.replace(')', ', 0.6)').replace('rgb', 'rgba'))
  grad.addColorStop(1.0, 'rgba(0,0,0,0)')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, size, size)
  return new THREE.CanvasTexture(canvas)
}

export default function Globe({ newsItems, onNewsHover, onNewsClick }: GlobeProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const newsRef = useRef(newsItems)
  const onHoverRef = useRef(onNewsHover)
  const onClickRef = useRef(onNewsClick)
  const sceneRef = useRef<{
    renderer: THREE.WebGLRenderer
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    globe: THREE.Mesh
    markerGroup: THREE.Group
    markers: Array<{ mesh: THREE.Mesh; item: NewsItem }>
    animId: number
  } | null>(null)

  // Keep refs up to date without re-mounting
  useEffect(() => { newsRef.current = newsItems }, [newsItems])
  useEffect(() => { onHoverRef.current = onNewsHover }, [onNewsHover])
  useEffect(() => { onClickRef.current = onNewsClick }, [onNewsClick])

  // Rebuild markers whenever newsItems changes (after scene exists)
  useEffect(() => {
    const s = sceneRef.current
    if (!s || newsItems.length === 0) return

    // Clear old markers
    s.markerGroup.clear()
    s.markers.length = 0

    const accidentTex = makeMarkerTexture('rgb(239,68,68)')
    const researchTex = makeMarkerTexture('rgb(59,130,246)')
    const markerGeo = new THREE.SphereGeometry(0.022, 10, 10)

    newsItems.forEach(item => {
      const mat = new THREE.MeshBasicMaterial({
        color: item.category === 'accident' ? 0xef4444 : 0x3b82f6,
        depthTest: true,
        depthWrite: false,
        transparent: false,
      })
      const dot = new THREE.Mesh(markerGeo, mat)
      dot.position.copy(latLngToVec3(item.lat, item.lng, 1.022))
      s.markerGroup.add(dot)
      s.markers.push({ mesh: dot, item })

      // Glow sprite sits just above the dot — also depth tested
      const spriteMat = new THREE.SpriteMaterial({
        map: item.category === 'accident' ? accidentTex : researchTex,
        transparent: true,
        depthTest: true,
        depthWrite: false,
        sizeAttenuation: true,
      })
      const sprite = new THREE.Sprite(spriteMat)
      sprite.scale.setScalar(0.09)
      sprite.position.copy(latLngToVec3(item.lat, item.lng, 1.025))
      s.markerGroup.add(sprite)
    })
  }, [newsItems])

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // ── Scene ────────────────────────────────────────────────────────────────
    const scene = new THREE.Scene()

    // ── Camera ───────────────────────────────────────────────────────────────
    const w = mount.clientWidth || 800
    const h = mount.clientHeight || 600
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100)
    camera.position.set(0, 0, 2.8)

    // ── Renderer ─────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(w, h)
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    // ── Starfield ────────────────────────────────────────────────────────────
    const starGeo = new THREE.BufferGeometry()
    const starCount = 3000
    const starPos = new Float32Array(starCount * 3)
    for (let i = 0; i < starCount * 3; i++) {
      starPos[i] = (Math.random() - 0.5) * 200
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3))
    const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.15, sizeAttenuation: true })
    scene.add(new THREE.Points(starGeo, starMat))

    // ── Globe sphere ─────────────────────────────────────────────────────────
    const globeGeo = new THREE.SphereGeometry(1, 64, 64)

    // Load satellite texture from CDN (NASA Blue Marble via three-globe package)
    const loader = new THREE.TextureLoader()
    loader.crossOrigin = 'anonymous'

    const globeMat = new THREE.MeshPhongMaterial({
      color: 0x2244aa,  // Fallback ocean color while texture loads
      shininess: 25,
    })
    const globe = new THREE.Mesh(globeGeo, globeMat)
    scene.add(globe)

    // Load day texture — try primary CDN, fall back to secondary
    const tryTextures = [
      'https://unpkg.com/three-globe@2.31.1/example/img/earth-blue-marble.jpg',
      'https://cdn.jsdelivr.net/npm/three-globe@2.31.1/example/img/earth-blue-marble.jpg',
    ]
    let loaded = false
    tryTextures.forEach((url, i) => {
      if (loaded) return
      loader.load(url, (tex) => {
        if (loaded) return
        loaded = true
        tex.colorSpace = THREE.SRGBColorSpace
        globeMat.map = tex
        globeMat.color.set(0xffffff)
        globeMat.needsUpdate = true
      }, undefined, () => {
        if (i === tryTextures.length - 1 && !loaded) {
          // Both CDNs failed — use a procedural fallback (ocean + land colors)
          globeMat.color.set(0x1a4d80)
        }
      })
    })

    // Specular (water shine) map
    loader.load('https://unpkg.com/three-globe@2.31.1/example/img/earth-water.png', (tex) => {
      globeMat.specularMap = tex
      globeMat.specular = new THREE.Color(0x888888)
      globeMat.needsUpdate = true
    })

    // Bump map for terrain depth
    loader.load('https://unpkg.com/three-globe@2.31.1/example/img/earth-topology.png', (tex) => {
      globeMat.bumpMap = tex
      globeMat.bumpScale = 0.008
      globeMat.needsUpdate = true
    })

    // ── Atmosphere glow ───────────────────────────────────────────────────────
    const atmosGeo = new THREE.SphereGeometry(1.025, 64, 64)
    const atmosMat = new THREE.MeshPhongMaterial({
      color: 0x3399ff,
      transparent: true,
      opacity: 0.08,
      side: THREE.BackSide,
      depthWrite: false,
    })
    scene.add(new THREE.Mesh(atmosGeo, atmosMat))

    // Outer glow halo
    const haloGeo = new THREE.SphereGeometry(1.08, 64, 64)
    const haloMat = new THREE.MeshPhongMaterial({
      color: 0x88bbff,
      transparent: true,
      opacity: 0.04,
      side: THREE.BackSide,
      depthWrite: false,
    })
    scene.add(new THREE.Mesh(haloGeo, haloMat))

    // ── Lighting ──────────────────────────────────────────────────────────────
    const ambient = new THREE.AmbientLight(0xffffff, 0.35)
    scene.add(ambient)
    const sun = new THREE.DirectionalLight(0xfff5e0, 1.4)
    sun.position.set(5, 3, 5)
    scene.add(sun)
    // Subtle blue fill from the opposite side
    const fill = new THREE.DirectionalLight(0x4488ff, 0.15)
    fill.position.set(-5, -2, -3)
    scene.add(fill)

    // ── Marker group (parented to globe so they rotate with it) ───────────────
    const markerGroup = new THREE.Group()
    globe.add(markerGroup)

    const markers: Array<{ mesh: THREE.Mesh; item: NewsItem }> = []

    sceneRef.current = { renderer, scene, camera, globe, markerGroup, markers, animId: 0 }

    // ── Rotation state ────────────────────────────────────────────────────────
    let autoRotate = true
    const euler = new THREE.Euler(
      THREE.MathUtils.degToRad(-15),
      THREE.MathUtils.degToRad(-20),
      0,
      'YXZ'
    )
    globe.rotation.copy(euler)

    // ── Animation loop ────────────────────────────────────────────────────────
    let animId = 0
    const animate = () => {
      animId = requestAnimationFrame(animate)
      if (autoRotate) {
        globe.rotation.y += 0.003
      }
      renderer.render(scene, camera)
    }
    animate()
    sceneRef.current.animId = animId

    // ── Raycaster for hover / click ────────────────────────────────────────────
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()
    let hoveredItem: NewsItem | null = null

    const getMeshes = () => sceneRef.current?.markers.map(m => m.mesh) ?? []

    const raycast = (clientX: number, clientY: number) => {
      const rect = renderer.domElement.getBoundingClientRect()
      mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1
      raycaster.setFromCamera(mouse, camera)
      // Test against globe first — anything behind it is automatically culled by depth
      const hits = raycaster.intersectObjects(getMeshes())
      if (hits.length > 0) {
        const found = sceneRef.current?.markers.find(m => m.mesh === hits[0].object)
        return found?.item ?? null
      }
      return null
    }

    // ── Mouse drag ────────────────────────────────────────────────────────────
    let isDragging = false
    let hasDragged = false
    let dragPrev = { x: 0, y: 0 }

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true
      hasDragged = false
      autoRotate = false
      dragPrev = { x: e.clientX, y: e.clientY }
      renderer.domElement.style.cursor = 'grabbing'
    }
    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const dx = e.clientX - dragPrev.x
        const dy = e.clientY - dragPrev.y
        if (Math.hypot(dx, dy) > 2) hasDragged = true
        globe.rotation.y += dx * 0.007
        globe.rotation.x += dy * 0.007
        globe.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, globe.rotation.x))
        dragPrev = { x: e.clientX, y: e.clientY }
      } else {
        const hit = raycast(e.clientX, e.clientY)
        if (hit !== hoveredItem) {
          hoveredItem = hit
          onHoverRef.current?.(hit, e.clientX, e.clientY)
          // Scale up the hovered marker
          sceneRef.current?.markers.forEach(({ mesh, item }) => {
            const s = item.url === hit?.url ? 1.8 : 1.0
            mesh.scale.setScalar(s)
          })
        }
        renderer.domElement.style.cursor = hit ? 'pointer' : 'grab'
      }
    }
    const onMouseUp = () => {
      isDragging = false
      renderer.domElement.style.cursor = hoveredItem ? 'pointer' : 'grab'
      setTimeout(() => { autoRotate = true }, 3000)
    }
    const onClick = (e: MouseEvent) => {
      if (hasDragged) return
      const hit = raycast(e.clientX, e.clientY)
      if (hit) onClickRef.current?.(hit)
    }

    // ── Scroll to zoom ────────────────────────────────────────────────────────
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      camera.position.z = Math.max(1.4, Math.min(6, camera.position.z + e.deltaY * 0.004))
    }

    // ── Touch ─────────────────────────────────────────────────────────────────
    let touchPrev = { x: 0, y: 0 }
    let touchDragged = false
    let pinchDist = 0
    let pinchCamZ = 0

    const onTouchStart = (e: TouchEvent) => {
      e.preventDefault()
      autoRotate = false
      if (e.touches.length === 1) {
        touchDragged = false
        touchPrev = { x: e.touches[0].clientX, y: e.touches[0].clientY }
      } else if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX
        const dy = e.touches[0].clientY - e.touches[1].clientY
        pinchDist = Math.hypot(dx, dy)
        pinchCamZ = camera.position.z
      }
    }
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault()
      if (e.touches.length === 1) {
        const dx = e.touches[0].clientX - touchPrev.x
        const dy = e.touches[0].clientY - touchPrev.y
        if (Math.hypot(dx, dy) > 4) touchDragged = true
        globe.rotation.y += dx * 0.007
        globe.rotation.x += dy * 0.007
        globe.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, globe.rotation.x))
        touchPrev = { x: e.touches[0].clientX, y: e.touches[0].clientY }
      } else if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX
        const dy = e.touches[0].clientY - e.touches[1].clientY
        const dist = Math.hypot(dx, dy)
        camera.position.z = Math.max(1.4, Math.min(6, pinchCamZ * (pinchDist / dist)))
      }
    }
    const onTouchEnd = (e: TouchEvent) => {
      e.preventDefault()
      if (!touchDragged && e.changedTouches.length === 1) {
        const hit = raycast(e.changedTouches[0].clientX, e.changedTouches[0].clientY)
        if (hit) onClickRef.current?.(hit)
      }
      setTimeout(() => { autoRotate = true }, 3000)
    }

    // ── Resize ────────────────────────────────────────────────────────────────
    const onResize = () => {
      if (!mount) return
      const rw = mount.clientWidth
      const rh = mount.clientHeight
      camera.aspect = rw / rh
      camera.updateProjectionMatrix()
      renderer.setSize(rw, rh)
    }
    const ro = new ResizeObserver(onResize)
    ro.observe(mount)

    const el = renderer.domElement
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
      mount.removeChild(el)
      sceneRef.current = null
    }
  }, [])

  return (
    <div className="relative w-full h-full">
      <div ref={mountRef} className="w-full h-full touch-none" />
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-neutral-400 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-sm border border-neutral-700/50 pointer-events-none whitespace-nowrap">
        <span className="hidden sm:inline">Drag to rotate · Scroll to zoom · Click a dot for article</span>
        <span className="sm:hidden">Drag to rotate · Pinch to zoom · Tap a dot</span>
      </div>
    </div>
  )
}
