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

// Classic atmosphere rim-glow shader (limb brightening effect matching the reference photo)
const ATMOS_VERTEX = `
  varying vec3 vNormal;
  varying vec3 vPosition;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`
const ATMOS_FRAGMENT = `
  uniform vec3 lightDir;
  varying vec3 vNormal;
  varying vec3 vPosition;
  void main() {
    // Rim glow — bright at edge (normal perpendicular to view), dark at center
    float rim = 1.0 - abs(dot(normalize(vNormal), vec3(0.0, 0.0, 1.0)));
    float intensity = pow(rim, 3.5);
    // Slight sun-side brightening
    float sun = max(0.0, dot(normalize(vNormal), normalize(lightDir)));
    vec3 color = mix(vec3(0.15, 0.4, 1.0), vec3(0.4, 0.7, 1.0), sun * 0.4);
    gl_FragColor = vec4(color, intensity * 0.85);
  }
`

export default function Globe({ newsItems, onNewsHover, onNewsClick }: GlobeProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const newsRef = useRef(newsItems)
  const onHoverRef = useRef(onNewsHover)
  const onClickRef = useRef(onNewsClick)
  const markersRef = useRef<Array<{ mesh: THREE.Mesh; item: NewsItem }>>([])
  const markerGroupRef = useRef<THREE.Group | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)

  useEffect(() => { newsRef.current = newsItems }, [newsItems])
  useEffect(() => { onHoverRef.current = onNewsHover }, [onNewsHover])
  useEffect(() => { onClickRef.current = onNewsClick }, [onNewsClick])

  // Rebuild markers when news changes
  useEffect(() => {
    const group = markerGroupRef.current
    if (!group || newsItems.length === 0) return

    group.clear()
    markersRef.current = []

    const geo = new THREE.SphereGeometry(0.018, 8, 8)
    newsItems.forEach(item => {
      const isAccident = item.category === 'accident'
      // Solid dot
      const mat = new THREE.MeshBasicMaterial({
        color: isAccident ? 0xef4444 : 0x3b82f6,
        depthTest: true,
        depthWrite: false,
      })
      const dot = new THREE.Mesh(geo, mat)
      dot.position.copy(latLngToVec3(item.lat, item.lng, 1.018))
      group.add(dot)
      markersRef.current.push({ mesh: dot, item })

      // Outer glow ring (slightly larger, transparent, additive)
      const glowMat = new THREE.MeshBasicMaterial({
        color: isAccident ? 0xff6666 : 0x66aaff,
        transparent: true,
        opacity: 0.35,
        depthTest: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
      const glow = new THREE.Mesh(new THREE.SphereGeometry(0.032, 8, 8), glowMat)
      glow.position.copy(latLngToVec3(item.lat, item.lng, 1.018))
      group.add(glow)
    })
  }, [newsItems])

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // ── Scene ─────────────────────────────────────────────────────────────────
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000000)
    sceneRef.current = scene

    // ── Camera ────────────────────────────────────────────────────────────────
    const w = mount.clientWidth || 800
    const h = mount.clientHeight || 600
    const camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 100)
    camera.position.set(0, 0, 2.75)
    cameraRef.current = camera

    // ── Renderer ──────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(w, h)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    rendererRef.current = renderer
    mount.appendChild(renderer.domElement)

    // ── Lighting ──────────────────────────────────────────────────────────────
    // Matches reference photo: strong warm sun from upper-right, soft fill from opposite side
    const sunDir = new THREE.Vector3(4, 2.5, 3).normalize()

    const ambient = new THREE.AmbientLight(0x223355, 0.4)
    scene.add(ambient)

    const sun = new THREE.DirectionalLight(0xfff8e8, 1.6)
    sun.position.copy(sunDir.clone().multiplyScalar(10))
    scene.add(sun)

    // Very soft cold fill from the night side
    const fill = new THREE.DirectionalLight(0x334466, 0.18)
    fill.position.set(-6, -2, -4)
    scene.add(fill)

    // ── Globe ─────────────────────────────────────────────────────────────────
    const globeGeo = new THREE.SphereGeometry(1, 128, 128)
    const globeMat = new THREE.MeshPhongMaterial({
      color: 0x1a4d80,  // fallback ocean while texture loads
      shininess: 60,
      specular: new THREE.Color(0x224488),
    })
    const globe = new THREE.Mesh(globeGeo, globeMat)
    // Slight tilt to match reference photo
    globe.rotation.x = THREE.MathUtils.degToRad(-8)
    scene.add(globe)

    // Load satellite texture — try multiple CDN sources for reliability
    const loader = new THREE.TextureLoader()
    loader.crossOrigin = 'anonymous'

    const textureUrls = [
      'https://unpkg.com/three-globe@2.31.1/example/img/earth-blue-marble.jpg',
      'https://cdn.jsdelivr.net/npm/three-globe@2.31.1/example/img/earth-blue-marble.jpg',
    ]

    let texLoaded = false
    const tryLoadTexture = (idx: number) => {
      if (idx >= textureUrls.length) return
      loader.load(
        textureUrls[idx],
        (tex) => {
          if (texLoaded) return
          texLoaded = true
          tex.colorSpace = THREE.SRGBColorSpace
          tex.anisotropy = renderer.capabilities.getMaxAnisotropy()
          globeMat.map = tex
          globeMat.color.set(0xffffff)
          globeMat.needsUpdate = true
        },
        undefined,
        () => tryLoadTexture(idx + 1)
      )
    }
    tryLoadTexture(0)

    // Specular map (oceans reflect sunlight, land does not)
    loader.load('https://unpkg.com/three-globe@2.31.1/example/img/earth-water.png', (tex) => {
      globeMat.specularMap = tex
      globeMat.specular = new THREE.Color(0x446688)
      globeMat.shininess = 80
      globeMat.needsUpdate = true
    })

    // Bump map — terrain height
    loader.load('https://unpkg.com/three-globe@2.31.1/example/img/earth-topology.png', (tex) => {
      globeMat.bumpMap = tex
      globeMat.bumpScale = 0.006
      globeMat.needsUpdate = true
    })

    // Cloud layer — semi-transparent sphere slightly above surface
    const cloudGeo = new THREE.SphereGeometry(1.006, 64, 64)
    const cloudMat = new THREE.MeshPhongMaterial({
      transparent: true,
      opacity: 0.0,  // starts hidden until texture loads
      depthWrite: false,
      side: THREE.FrontSide,
    })
    const clouds = new THREE.Mesh(cloudGeo, cloudMat)
    globe.add(clouds)
    loader.load('https://unpkg.com/three-globe@2.31.1/example/img/earth-clouds.png', (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace
      cloudMat.alphaMap = tex
      cloudMat.color.set(0xffffff)
      cloudMat.opacity = 0.9
      cloudMat.needsUpdate = true
    })

    // ── Atmosphere shader (rim glow like the reference photo) ─────────────────
    const atmosGeo = new THREE.SphereGeometry(1.12, 64, 64)
    const atmosMat = new THREE.ShaderMaterial({
      vertexShader: ATMOS_VERTEX,
      fragmentShader: ATMOS_FRAGMENT,
      uniforms: { lightDir: { value: sunDir } },
      side: THREE.FrontSide,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
    scene.add(new THREE.Mesh(atmosGeo, atmosMat))

    // ── Marker group (child of globe so it rotates with it) ───────────────────
    const markerGroup = new THREE.Group()
    globe.add(markerGroup)
    markerGroupRef.current = markerGroup

    // ── Rotation state ────────────────────────────────────────────────────────
    let autoRotate = true
    let rotY = THREE.MathUtils.degToRad(-20)
    globe.rotation.y = rotY

    // ── Animate ───────────────────────────────────────────────────────────────
    let animId = 0
    const animate = () => {
      animId = requestAnimationFrame(animate)
      if (autoRotate) {
        rotY += 0.0025
        globe.rotation.y = rotY
      }
      renderer.render(scene, camera)
    }
    animate()

    // ── Raycaster ─────────────────────────────────────────────────────────────
    const raycaster = new THREE.Raycaster()
    raycaster.params.Mesh = { threshold: 0.015 }
    const mouse = new THREE.Vector2()
    let hoveredItem: NewsItem | null = null

    const doRaycast = (cx: number, cy: number): NewsItem | null => {
      const rect = renderer.domElement.getBoundingClientRect()
      mouse.x = ((cx - rect.left) / rect.width) * 2 - 1
      mouse.y = -((cy - rect.top) / rect.height) * 2 + 1
      raycaster.setFromCamera(mouse, camera)
      const meshes = markersRef.current.map(m => m.mesh)
      const hits = raycaster.intersectObjects(meshes)
      if (!hits.length) return null
      return markersRef.current.find(m => m.mesh === hits[0].object)?.item ?? null
    }

    // ── Mouse drag + hover ────────────────────────────────────────────────────
    let dragging = false
    let hasDragged = false
    let dragPrev = { x: 0, y: 0 }
    let autoResumeTimer = 0

    const onMouseDown = (e: MouseEvent) => {
      dragging = true
      hasDragged = false
      autoRotate = false
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
        markersRef.current.forEach(({ mesh, item }) => {
          mesh.scale.setScalar(item.url === hit?.url ? 2.0 : 1.0)
        })
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
      camera.position.z = Math.max(1.4, Math.min(6.5, camera.position.z + e.deltaY * 0.004))
    }

    // ── Touch ─────────────────────────────────────────────────────────────────
    let touchPrev = { x: 0, y: 0 }
    let touchDragged = false
    let pinchDist0 = 0
    let pinchZ0 = 0

    const onTouchStart = (e: TouchEvent) => {
      e.preventDefault()
      autoRotate = false
      clearTimeout(autoResumeTimer)
      if (e.touches.length === 1) {
        touchDragged = false
        touchPrev = { x: e.touches[0].clientX, y: e.touches[0].clientY }
      } else if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX
        const dy = e.touches[0].clientY - e.touches[1].clientY
        pinchDist0 = Math.hypot(dx, dy)
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
        const dx = e.touches[0].clientX - e.touches[1].clientX
        const dy = e.touches[0].clientY - e.touches[1].clientY
        const dist = Math.hypot(dx, dy)
        camera.position.z = Math.max(1.4, Math.min(6.5, pinchZ0 * (pinchDist0 / dist)))
      }
    }
    const onTouchEnd = (e: TouchEvent) => {
      e.preventDefault()
      if (!touchDragged && e.changedTouches.length === 1) {
        const hit = doRaycast(e.changedTouches[0].clientX, e.changedTouches[0].clientY)
        if (hit) onClickRef.current?.(hit)
      }
      if (e.touches.length === 0) {
        autoResumeTimer = window.setTimeout(() => { autoRotate = true }, 3000)
      }
    }

    // ── Resize ────────────────────────────────────────────────────────────────
    const ro = new ResizeObserver(() => {
      const rw = mount.clientWidth
      const rh = mount.clientHeight
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
      markerGroupRef.current = null
      sceneRef.current = null
      rendererRef.current = null
      cameraRef.current = null
    }
  }, [])

  return (
    <div className="relative w-full h-full bg-black">
      <div ref={mountRef} className="w-full h-full touch-none" />
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-neutral-400/70 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm pointer-events-none whitespace-nowrap">
        <span className="hidden sm:inline">Drag · Scroll to zoom · Click dot for article</span>
        <span className="sm:hidden">Drag · Pinch to zoom · Tap dot</span>
      </div>
    </div>
  )
}
