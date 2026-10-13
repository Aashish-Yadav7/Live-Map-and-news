export type NewsCategory =
  | 'general' | 'disaster' | 'conflict' | 'science' | 'technology'
  | 'politics' | 'business' | 'health' | 'environment'

export type LocationPrecision = 'city' | 'country' | 'coordinate'

export interface NewsItem {
  title: string
  source: string
  url: string
  lat: number
  lng: number
  country: string
  category: NewsCategory
  publishedAt: string
  summary?: string
  imageUrl?: string
  locationPrecision?: LocationPrecision
  locationConfidence?: number
}

export const CATEGORY_META: Record<NewsCategory, { hex: number; css: string; label: string }> = {
  general: { hex: 0x94a3b8, css: '#94a3b8', label: 'General' },
  disaster: { hex: 0xef4444, css: '#ef4444', label: 'Disaster' },
  conflict: { hex: 0xf97316, css: '#f97316', label: 'Conflict' },
  science: { hex: 0x3b82f6, css: '#3b82f6', label: 'Science' },
  technology: { hex: 0x06b6d4, css: '#06b6d4', label: 'Technology' },
  politics: { hex: 0xf59e0b, css: '#f59e0b', label: 'Politics' },
  business: { hex: 0x10b981, css: '#10b981', label: 'Business' },
  health: { hex: 0x84cc16, css: '#84cc16', label: 'Health' },
  environment: { hex: 0x14b8a6, css: '#14b8a6', label: 'Environment' },
}

export type LayerId = 'news' | 'earthquakes' | 'flights' | 'radio'

export interface LayerMeta {
  id: LayerId
  label: string
  color: string
  hex: number
  icon: string
}

export const LAYER_META: Record<LayerId, LayerMeta> = {
  news: { id: 'news', label: 'News', color: '#3b82f6', hex: 0x3b82f6, icon: 'Newspaper' },
  earthquakes: { id: 'earthquakes', label: 'Earthquakes', color: '#ef4444', hex: 0xef4444, icon: 'Activity' },
  flights: { id: 'flights', label: 'Flights', color: '#fbbf24', hex: 0xfbbf24, icon: 'Plane' },
  radio: { id: 'radio', label: 'Radio', color: '#22d3ee', hex: 0x22d3ee, icon: 'Radio' },
}

export const LAYER_ORDER: LayerId[] = ['news', 'earthquakes', 'flights', 'radio']

export interface Earthquake {
  id: string
  lat: number
  lng: number
  depth: number
  magnitude: number
  place: string
  time: string
  url: string
}

export interface Flight {
  icao: string
  callsign: string
  origin: string
  lat: number
  lng: number
  altitude: number
  velocity: number
  heading: number
  onGround: boolean
  military: boolean
}

export interface RadioStation {
  id: string
  name: string
  url: string
  lat: number
  lng: number
  country: string
  tags: string[]
  codec: string
  bitrate: number
}
