import { useState, useEffect } from 'react'
import type { RadioStation } from '../types'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

export function useRadio(enabled: boolean) {
  const [items, setItems] = useState<RadioStation[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!enabled) return
    let cancelled = false

    const run = async () => {
      if (!SUPABASE_URL || !ANON_KEY) return
      setLoading(true)
      try {
        const res = await fetch(`${SUPABASE_URL}/functions/v1/radio?limit=750`, {
          headers: { Authorization: `Bearer ${ANON_KEY}` },
        })
        if (!res.ok) throw new Error(`Failed (${res.status})`)
        const data = await res.json()
        if (cancelled) return
        if (data.error) { setError(data.error); return }
        setItems(data.items || [])
        setError(null)
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : 'Failed to load radio')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    run()
    const interval = setInterval(run, 30 * 60 * 1000)
    return () => { cancelled = true; clearInterval(interval) }
  }, [enabled])

  return { items, loading, error }
}
