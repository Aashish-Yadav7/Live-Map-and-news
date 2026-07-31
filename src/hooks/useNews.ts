import { useState, useEffect, useCallback } from 'react'
import type { NewsItem } from '../types'

const NEWS_ENDPOINT = import.meta.env.VITE_SUPABASE_URL
  ? `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/news`
  : 'https://ehieqmpmkyouoyjebuqa.supabase.co/functions/v1/news'

const ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY
  || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVoaWVxbXBta3lvdW95amVidXFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4MDg5NTksImV4cCI6MjEwMDM4NDk1OX0.w3X-40as6pVsq9-wI3xoMjx0RKmE_jsmEQ6575gdJSU'

// Only keep items with a real, valid article URL (not a search link)
function isRealArticle(item: NewsItem): boolean {
  if (!item.url || !item.url.startsWith('http')) return false
  // Reject generic search-engine links
  if (item.url.includes('google.com/search')) return false
  return true
}

export function useNews() {
  const [items, setItems] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchNews = useCallback(async () => {
    try {
      setLoading(true)
      const res = await fetch(NEWS_ENDPOINT, {
        headers: { Authorization: `Bearer ${ANON_KEY}` },
      })
      if (!res.ok) throw new Error(`Failed (${res.status})`)
      const data = await res.json()
      if (data.error) {
        setError(data.error)
        setItems([])
        return
      }
      const raw: NewsItem[] = data.items || []
      // Client-side filter: only real articles with valid URLs
      const verified = raw.filter(isRealArticle)
      setItems(verified)
      setError(null)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load news')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    let cancelled = false
    const run = async () => {
      try {
        setLoading(true)
        const res = await fetch(NEWS_ENDPOINT, {
          headers: { Authorization: `Bearer ${ANON_KEY}` },
        })
        if (!res.ok) throw new Error(`Failed (${res.status})`)
        const data = await res.json()
        if (cancelled) return
        if (data.error) {
          setError(data.error)
          setItems([])
          return
        }
        const raw: NewsItem[] = data.items || []
        const verified = raw.filter(isRealArticle)
        setItems(verified)
        setError(null)
      } catch (e) {
        if (cancelled) return
        setError(e instanceof Error ? e.message : 'Failed to load news')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    run()
    const interval = setInterval(run, 5 * 60 * 1000)
    return () => {
      cancelled = true
      clearInterval(interval)
    }
  }, [])

  return { items, loading, error, refetch: fetchNews }
}
