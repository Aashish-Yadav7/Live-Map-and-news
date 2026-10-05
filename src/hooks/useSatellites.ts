import { useState, useEffect, useRef } from 'react'
import { twoline2satrec, propagate as propagateSat, gstime, eciToGeodetic } from '../sat-lib'
import type { Satellite } from '../types'

interface TleRecord {
  name: string
  line1: string
  line2: string
  satClass: string
}

function classifySat(name: string): string {
  const n = name.toUpperCase()
  if (n.includes('ISS') || n.includes('STATION') || n.includes('CSS') || n.includes('TIANGONG')) return 'station'
  if (n.includes('STARLINK')) return 'starlink'
  if (n.includes('DEB') || n.includes('DEBRIS')) return 'debris'
  if (n.includes('R/B') || n.includes('ROCKET') || n.includes('SL-')) return 'rocket'
  if (n.includes('PAYLOAD') || n.includes('SAT')) return 'payload'
  return 'unknown'
}

export function useSatellites(enabled: boolean) {
  const [items, setItems] = useState<Satellite[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const tleRef = useRef<TleRecord[]>([])

  // Fetch TLE text directly from CelesTrak and propagate positions client-side
  useEffect(() => {
    if (!enabled) return
    let cancelled = false

    const fetchAndPropagate = async () => {
      setLoading(true)
      try {
        // Fetch TLE from CelesTrak directly (no API key needed)
        const res = await fetch('https://celestrak.org/NORAD/elements/gp.php?GROUP=active&FORMAT=tle')
        if (!res.ok) throw new Error('Failed to fetch TLE')
        const text = await res.text()
        if (cancelled) return

        const lines = text.trim().split('\n')
        const records: TleRecord[] = []
        let i = 0
        while (i < lines.length) {
          if (lines[i] && lines[i].startsWith('1 ') && lines[i + 1] && lines[i + 1].startsWith('2 ')) {
            const name = lines[i - 1]?.trim() || 'UNKNOWN'
            records.push({
              name,
              line1: lines[i],
              line2: lines[i + 1],
              satClass: classifySat(name),
            })
            i += 3
          } else {
            i++
          }
        }
        tleRef.current = records
        setError(null)
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : 'Failed to load satellites')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchAndPropagate()
  }, [enabled])

  // Propagate satellite positions every 5 seconds
  useEffect(() => {
    if (!enabled || tleRef.current.length === 0) return

    const updatePositions = () => {
      const now = new Date()
      const gmst = gstime(now)
      const results: Satellite[] = []

      for (const rec of tleRef.current) {
        try {
          const satrec = twoline2satrec(rec.line1, rec.line2)
          const pv = propagateSat(satrec, now)
          if (!pv || typeof pv === 'boolean') continue

          const geodetic = eciToGeodetic(pv.position, gmst)
          if (!geodetic) continue

          const lat = geodetic.latitude * (180 / Math.PI)
          const lng = geodetic.longitude * (180 / Math.PI)
          const alt = geodetic.height
          const velocity = Math.sqrt(
            pv.velocity.x * pv.velocity.x +
            pv.velocity.y * pv.velocity.y +
            pv.velocity.z * pv.velocity.z
          )

          results.push({
            id: parseInt(satrec.satnum, 10) || 0,
            name: rec.name,
            satClass: rec.satClass as Satellite['satClass'],
            lat,
            lng,
            alt: Math.round(alt),
            velocity: Math.round(velocity * 10) / 10,
          })
        } catch { /* skip bad TLE */ }
      }

      setItems(results)
    }

    updatePositions()
    const interval = setInterval(updatePositions, 5000)
    return () => clearInterval(interval)
  }, [enabled])

  return { items, loading, error }
}
