import { useRef, useState, useEffect, useCallback } from 'react'
import * as d3 from 'd3'
import type { NewsItem } from '../types'

interface GlobeProps {
  width?: number
  height?: number
  newsItems: NewsItem[]
  onNewsHover?: (item: NewsItem | null, x: number, y: number) => void
  onNewsClick?: (item: NewsItem | null) => void
}

interface LandPoint {
  lng: number
  lat: number
}

export default function Globe({
  width = 900,
  height = 700,
  newsItems,
  onNewsHover,
  onNewsClick,
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const newsRef = useRef(newsItems)
  const hoveredRef = useRef<NewsItem | null>(null)
  const onHoverRef = useRef(onNewsHover)
  const onClickRef = useRef(onNewsClick)

  useEffect(() => { newsRef.current = newsItems }, [newsItems])
  useEffect(() => { onHoverRef.current = onNewsHover; onClickRef.current = onNewsClick }, [onNewsHover, onNewsClick])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const isMobile = window.innerWidth < 768
    const availW = Math.min(width, window.innerWidth - (isMobile ? 0 : 24))
    const availH = Math.min(height, window.innerHeight - (isMobile ? 120 : 100))
    const w = availW
    const h = availH
    const baseScale = Math.min(w, h) / 2.5
    const dpr = window.devicePixelRatio || 1

    canvas.width = w * dpr
    canvas.height = h * dpr
    canvas.style.width = `${w}px`
    canvas.style.height = `${h}px`
    ctx.scale(dpr, dpr)

    const projection = d3.geoOrthographic()
      .scale(baseScale)
      .translate([w / 2, h / 2])
      .clipAngle(90)

    const path = d3.geoPath().projection(projection).context(ctx)

    let land: any = null
    let countries: any = null
    const landPoints: LandPoint[] = []

    // Minimal cloud positions (just a few sparse clouds)
    const clouds: { lng: number; lat: number; r: number; alpha: number }[] = []
    for (let i = 0; i < 12; i++) {
      clouds.push({
        lng: (Math.random() - 0.5) * 360,
        lat: (Math.random() - 0.5) * 140,
        r: Math.random() * 8 + 5,
        alpha: Math.random() * 0.15 + 0.05,
      })
    }

    const render = () => {
      ctx.clearRect(0, 0, w, h)

      const scale = projection.scale()
      const zoom = scale / baseScale
      const cx = w / 2
      const cy = h / 2

      // Ocean sphere - solid opaque gradient (not transparent)
      const oceanGrad = ctx.createRadialGradient(
        cx - scale * 0.3, cy - scale * 0.3, scale * 0.1,
        cx, cy, scale
      )
      oceanGrad.addColorStop(0, '#1e5a8a')
      oceanGrad.addColorStop(0.5, '#0d3a6b')
      oceanGrad.addColorStop(1, '#061f3a')
      ctx.beginPath()
      ctx.arc(cx, cy, scale, 0, 2 * Math.PI)
      ctx.fillStyle = oceanGrad
      ctx.fill()

      // Subtle ocean grid (graticule)
      ctx.save()
      ctx.beginPath()
      ctx.arc(cx, cy, scale, 0, 2 * Math.PI)
      ctx.clip()

      const graticule = d3.geoGraticule()
      ctx.beginPath()
      path(graticule())
      ctx.strokeStyle = 'rgba(100, 160, 220, 0.08)'
      ctx.lineWidth = 0.5
      ctx.stroke()
      ctx.restore()

      if (land) {
        ctx.save()
        ctx.beginPath()
        ctx.arc(cx, cy, scale, 0, 2 * Math.PI)
        ctx.clip()

        // Land - solid opaque fill
        land.features.forEach((feature: any) => {
          ctx.beginPath()
          path(feature)
          ctx.fillStyle = '#2d5a3d'
          ctx.fill()
        })

        // Land texture overlay
        land.features.forEach((feature: any) => {
          ctx.beginPath()
          path(feature)
          const landGrad = ctx.createLinearGradient(cx - scale, cy - scale, cx + scale, cy + scale)
          landGrad.addColorStop(0, 'rgba(45, 90, 60, 0.6)')
          landGrad.addColorStop(1, 'rgba(20, 50, 30, 0.3)')
          ctx.fillStyle = landGrad
          ctx.fill()
        })

        // Country borders
        if (countries) {
          ctx.beginPath()
          countries.features.forEach((feature: any) => {
            path(feature)
          })
          ctx.strokeStyle = 'rgba(140, 190, 160, 0.4)'
          ctx.lineWidth = Math.max(0.4, 0.5 * zoom)
          ctx.stroke()
        }

        // Land outline
        ctx.beginPath()
        land.features.forEach((feature: any) => {
          path(feature)
        })
        ctx.strokeStyle = 'rgba(160, 210, 180, 0.5)'
        ctx.lineWidth = Math.max(0.5, 0.8 * zoom)
        ctx.stroke()

        // Minimal clouds - only a few, subtle
        clouds.forEach(cloud => {
          const pos = projection([cloud.lng, cloud.lat])
          if (!pos) return
          const dist = Math.hypot(pos[0] - cx, pos[1] - cy)
          if (dist > scale) return
          const edgeFade = Math.max(0, 1 - dist / scale)
          ctx.beginPath()
          ctx.arc(pos[0], pos[1], cloud.r * zoom, 0, 2 * Math.PI)
          ctx.fillStyle = `rgba(255, 255, 255, ${cloud.alpha * edgeFade})`
          ctx.fill()
        })

        ctx.restore()
      }

      // Atmospheric glow ring (outside the globe)
      const glowGrad = ctx.createRadialGradient(cx, cy, scale * 0.95, cx, cy, scale * 1.12)
      glowGrad.addColorStop(0, 'rgba(80, 160, 255, 0.25)')
      glowGrad.addColorStop(0.5, 'rgba(60, 130, 220, 0.08)')
      glowGrad.addColorStop(1, 'rgba(40, 100, 200, 0)')
      ctx.beginPath()
      ctx.arc(cx, cy, scale * 1.12, 0, 2 * Math.PI)
      ctx.fillStyle = glowGrad
      ctx.fill()

      // News dots - visible on all sides, not transparent
      const items = newsRef.current
      const hovered = hoveredRef.current

      items.forEach(item => {
        const pos = projection([item.lng, item.lat])
        if (!pos) return
        const dist = Math.hypot(pos[0] - cx, pos[1] - cy)
        if (dist > scale) return // only show dots on the visible hemisphere

        const isHovered = hovered && hovered.url === item.url
        const dotRadius = Math.max(2.5, 2.5 * zoom)
        const radius = isHovered ? dotRadius * 2 : dotRadius
        const color = item.category === 'accident' ? '#ef4444' : '#3b82f6'
        const glowColor = item.category === 'accident' ? 'rgba(239, 68, 68, 0.5)' : 'rgba(59, 130, 246, 0.5)'

        // Glow halo
        const glowRadius = radius * 2.5
        const haloGrad = ctx.createRadialGradient(pos[0], pos[1], 0, pos[0], pos[1], glowRadius)
        haloGrad.addColorStop(0, glowColor)
        haloGrad.addColorStop(1, 'rgba(0, 0, 0, 0)')
        ctx.beginPath()
        ctx.arc(pos[0], pos[1], glowRadius, 0, 2 * Math.PI)
        ctx.fillStyle = haloGrad
        ctx.fill()

        // Solid dot (opaque, not transparent)
        ctx.beginPath()
        ctx.arc(pos[0], pos[1], radius, 0, 2 * Math.PI)
        ctx.fillStyle = color
        ctx.fill()

        // White border on hover
        if (isHovered) {
          ctx.beginPath()
          ctx.arc(pos[0], pos[1], radius + 2, 0, 2 * Math.PI)
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)'
          ctx.lineWidth = 1.5
          ctx.stroke()
        }
      })
    }

    const loadData = async () => {
      try {
        setLoading(true)
        const [landRes, countriesRes] = await Promise.all([
          fetch('/data/ne_110m_land.json'),
          fetch('/data/ne_110m_countries.json'),
        ])
        if (!landRes.ok || !countriesRes.ok) throw new Error('Failed to load map data')
        land = await landRes.json()
        countries = await countriesRes.json()

        // Generate land points for texture
        const pointInPolygon = (point: [number, number], polygon: number[][]) => {
          const [x, y] = point
          let inside = false
          for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
            const [xi, yi] = polygon[i]
            const [xj, yj] = polygon[j]
            if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
              inside = !inside
            }
          }
          return inside
        }

        const pointInFeature = (point: [number, number], feature: any) => {
          const geom = feature.geometry
          if (geom.type === 'Polygon') {
            if (!pointInPolygon(point, geom.coordinates[0])) return false
            for (let i = 1; i < geom.coordinates.length; i++) {
              if (pointInPolygon(point, geom.coordinates[i])) return false
            }
            return true
          } else if (geom.type === 'MultiPolygon') {
            for (const poly of geom.coordinates) {
              if (pointInPolygon(point, poly[0])) {
                let inHole = false
                for (let i = 1; i < poly.length; i++) {
                  if (pointInPolygon(point, poly[i])) { inHole = true; break }
                }
                if (!inHole) return true
              }
            }
            return false
          }
          return false
        }

        land.features.forEach((feature: any) => {
          const bounds = d3.geoBounds(feature)
          const [[minLng, minLat], [maxLng, maxLat]] = bounds
          const step = 1.2
          for (let lng = minLng; lng <= maxLng; lng += step) {
            for (let lat = minLat; lat <= maxLat; lat += step) {
              if (pointInFeature([lng, lat], feature)) {
                landPoints.push({ lng, lat })
              }
            }
          }
        })

        render()
        setLoading(false)
      } catch {
        setError('Failed to load map data')
        setLoading(false)
      }
    }

    // Rotation state
    let rotation = [-20, -15, 0]
    let autoRotate = true
    const rotateSpeed = 0.25

    const autoRotateAnim = d3.timer(() => {
      if (autoRotate) {
        rotation[0] += rotateSpeed
        projection.rotate(rotation)
        render()
      }
    })

    // Mouse drag
    let dragStart = { x: 0, y: 0 }
    let rotStart = [0, 0, 0]

    const handleMouseDown = (e: MouseEvent) => {
      autoRotate = false
      dragStart = { x: e.clientX, y: e.clientY }
      rotStart = [...rotation]
      canvas.style.cursor = 'grabbing'
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (rotStart) {
        const dx = e.clientX - dragStart.x
        const dy = e.clientY - dragStart.y
        rotation[0] = rotStart[0] + dx * 0.4
        rotation[1] = Math.max(-90, Math.min(90, rotStart[1] - dy * 0.4))
        projection.rotate(rotation)
        render()
      }

      // Hover detection
      const rect = canvas.getBoundingClientRect()
      const mx = e.clientX - rect.left
      const my = e.clientY - rect.top
      const cx = w / 2
      const cy = h / 2
      const scale = projection.scale()
      const zoom = scale / baseScale
      let closest: NewsItem | null = null
      let closestDist = Infinity
      for (const item of newsRef.current) {
        const pos = projection([item.lng, item.lat])
        if (!pos) continue
        if (Math.hypot(pos[0] - cx, pos[1] - cy) > scale) continue
        const dist = Math.hypot(pos[0] - mx, pos[1] - my)
        const threshold = Math.max(8, 5 * zoom)
        if (dist < threshold && dist < closestDist) {
          closest = item
          closestDist = dist
        }
      }
      if (closest !== hoveredRef.current) {
        hoveredRef.current = closest
        render()
      }
      onHoverRef.current?.(closest, e.clientX, e.clientY)
    }

    const handleMouseUp = () => {
      rotStart = [0, 0, 0] as any
      canvas.style.cursor = 'grab'
      setTimeout(() => { autoRotate = true }, 3000)
    }

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      const factor = e.deltaY > 0 ? 0.88 : 1.12
      const newScale = Math.max(baseScale * 0.6, Math.min(baseScale * 5, projection.scale() * factor))
      projection.scale(newScale)
      render()
    }

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const mx = e.clientX - rect.left
      const my = e.clientY - rect.top
      const cx = w / 2
      const cy = h / 2
      const scale = projection.scale()
      const zoom = scale / baseScale
      for (const item of newsRef.current) {
        const pos = projection([item.lng, item.lat])
        if (!pos) continue
        if (Math.hypot(pos[0] - cx, pos[1] - cy) > scale) continue
        const dist = Math.hypot(pos[0] - mx, pos[1] - my)
        const threshold = Math.max(8, 5 * zoom)
        if (dist < threshold) {
          onClickRef.current?.(item)
          return
        }
      }
    }

    // Touch support for mobile
    let touchStart = { x: 0, y: 0 }
    let touchRotStart = [0, 0, 0]
    let pinchStartDist = 0
    let pinchStartScale = 0

    const handleTouchStart = (e: TouchEvent) => {
      e.preventDefault()
      autoRotate = false
      if (e.touches.length === 1) {
        touchStart = { x: e.touches[0].clientX, y: e.touches[0].clientY }
        touchRotStart = [...rotation]
      } else if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX
        const dy = e.touches[0].clientY - e.touches[1].clientY
        pinchStartDist = Math.hypot(dx, dy)
        pinchStartScale = projection.scale()
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault()
      if (e.touches.length === 1) {
        const dx = e.touches[0].clientX - touchStart.x
        const dy = e.touches[0].clientY - touchStart.y
        rotation[0] = touchRotStart[0] + dx * 0.4
        rotation[1] = Math.max(-90, Math.min(90, touchRotStart[1] - dy * 0.4))
        projection.rotate(rotation)
        render()
      } else if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX
        const dy = e.touches[0].clientY - e.touches[1].clientY
        const dist = Math.hypot(dx, dy)
        const factor = dist / pinchStartDist
        const newScale = Math.max(baseScale * 0.6, Math.min(baseScale * 5, pinchStartScale * factor))
        projection.scale(newScale)
        render()
      }
    }

    const handleTouchEnd = (e: TouchEvent) => {
      e.preventDefault()
      if (e.touches.length === 0) {
        // Check for tap (short touch with minimal movement)
        setTimeout(() => { autoRotate = true }, 3000)
      }
    }

    const handleTouchClick = (e: TouchEvent) => {
      if (e.changedTouches.length !== 1) return
      const rect = canvas.getBoundingClientRect()
      const mx = e.changedTouches[0].clientX - rect.left
      const my = e.changedTouches[0].clientY - rect.top
      const cx = w / 2
      const cy = h / 2
      const scale = projection.scale()
      const zoom = scale / baseScale
      for (const item of newsRef.current) {
        const pos = projection([item.lng, item.lat])
        if (!pos) continue
        if (Math.hypot(pos[0] - cx, pos[1] - cy) > scale) continue
        const dist = Math.hypot(pos[0] - mx, pos[1] - my)
        const threshold = Math.max(12, 8 * zoom)
        if (dist < threshold) {
          onClickRef.current?.(item)
          return
        }
      }
    }

    canvas.addEventListener('mousedown', handleMouseDown)
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseup', handleMouseUp)
    canvas.addEventListener('mouseleave', handleMouseUp)
    canvas.addEventListener('wheel', handleWheel, { passive: false })
    canvas.addEventListener('click', handleClick)
    canvas.addEventListener('touchstart', handleTouchStart, { passive: false })
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false })
    canvas.addEventListener('touchend', handleTouchEnd, { passive: false })
    canvas.addEventListener('touchend', handleTouchClick, { passive: false })

    loadData()

    // Re-render when news changes
    const newsInterval = setInterval(() => {
      render()
    }, 2000)

    // Re-render on resize
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 768
      const newW = Math.min(width, window.innerWidth - (newIsMobile ? 0 : 24))
      const newH = Math.min(height, window.innerHeight - (newIsMobile ? 120 : 100))
      canvas.width = newW * dpr
      canvas.height = newH * dpr
      canvas.style.width = `${newW}px`
      canvas.style.height = `${newH}px`
      ctx.scale(dpr, dpr)
      projection.translate([newW / 2, newH / 2])
      const newScale = Math.min(newW, newH) / 2.5
      projection.scale(newScale)
      render()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      autoRotateAnim.stop()
      clearInterval(newsInterval)
      canvas.removeEventListener('mousedown', handleMouseDown)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseup', handleMouseUp)
      canvas.removeEventListener('mouseleave', handleMouseUp)
      canvas.removeEventListener('wheel', handleWheel)
      canvas.removeEventListener('click', handleClick)
      canvas.removeEventListener('touchstart', handleTouchStart)
      canvas.removeEventListener('touchmove', handleTouchMove)
      canvas.removeEventListener('touchend', handleTouchEnd)
      canvas.removeEventListener('touchend', handleTouchClick)
      window.removeEventListener('resize', handleResize)
    }
  }, [width, height])

  if (error) {
    return (
      <div className="flex items-center justify-center bg-neutral-900 rounded-2xl p-8">
        <div className="text-center">
          <p className="text-red-400 font-semibold mb-2">Error loading Earth visualization</p>
          <p className="text-neutral-400 text-sm">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="rounded-2xl bg-black cursor-grab active:cursor-grabbing touch-none"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black">
          <div className="text-neutral-400 text-sm animate-pulse">Loading world map...</div>
        </div>
      )}
      <div className="absolute bottom-4 left-4 text-xs text-neutral-400 px-3 py-1.5 rounded-lg bg-neutral-900/80 backdrop-blur-sm border border-neutral-700/50 pointer-events-none">
        Drag to rotate • Scroll to zoom • Click dots for details
      </div>
    </div>
  )
}
