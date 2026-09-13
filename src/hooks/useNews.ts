import { useState, useEffect, useCallback } from 'react'
import type { NewsItem } from '../types'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

const NEWS_ENDPOINT = SUPABASE_URL
  ? `${SUPABASE_URL}/functions/v1/news`
  : null

function isRealArticle(item: NewsItem): boolean {
  if (!item.url || !item.url.startsWith('http')) return false
  if (item.url.includes('google.com/search')) return false
  return true
}

export function useNews(country: string = '') {
  const [items, setItems] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchNews = useCallback(async (countryQuery: string) => {
    if (!NEWS_ENDPOINT || !ANON_KEY) {
      setError('Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.')
      setLoading(false)
      return
    }
    try {
      setLoading(true)
      const endpoint = countryQuery
        ? `${NEWS_ENDPOINT}?country=${encodeURIComponent(countryQuery)}`
        : NEWS_ENDPOINT
      const res = await fetch(endpoint, {
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
      if (!NEWS_ENDPOINT || !ANON_KEY) {
        setError('Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.')
        setLoading(false)
        return
      }
      try {
        setLoading(true)
        const endpoint = country
          ? `${NEWS_ENDPOINT}?country=${encodeURIComponent(country)}`
          : NEWS_ENDPOINT
        const res = await fetch(endpoint, {
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
  }, [country])

  return { items, loading, error, refetch: fetchNews }
}
