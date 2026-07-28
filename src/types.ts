export interface NewsItem {
  title: string
  source: string
  url: string
  lat: number
  lng: number
  category: 'accident' | 'research'
  publishedAt: string
  summary?: string
}
