import { useState, useEffect } from 'react'
import type { Earthquake } from '../types'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

export function useEarthquakes(enabled: boolean) {
  const [items, setItems] = useState<Earthquake[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!enabled) return
    let cancelled = false

    const run = async () => {
      if (!SUPABASE_URL || !ANON_KEY) return
      setLoading(true)
      try {
        const res = await fetch(`${SUPABASE_URL}/functions/v1/earthquakes?minmag=2.5`, {
          headers: { Authorization: `Bearer ${ANON_KEY}` },
        })
        if (!res.ok) throw new Error(`Failed (${res.status})`)
        const data = await res.json()
        if (cancelled) return
        if (data.error) { setError(data.error); return }
        setItems(data.items || [])
        setError(null)
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : 'Failed to load earthquakes')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    run()
    const interval = setInterval(run, 5 * 60 * 1000)
    return () => { cancelled = true; clearInterval(interval) }
  }, [enabled])

  return { items, loading, error }
}
