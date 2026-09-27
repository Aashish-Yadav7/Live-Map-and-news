export type NewsCategory =
  | 'general'
  | 'disaster'
  | 'conflict'
  | 'science'
  | 'technology'
  | 'politics'
  | 'business'
  | 'health'
  | 'environment'

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
  general:     { hex: 0x94a3b8, css: '#94a3b8', label: 'General' },
  disaster:    { hex: 0xef4444, css: '#ef4444', label: 'Disaster' },
  conflict:    { hex: 0xf97316, css: '#f97316', label: 'Conflict' },
  science:     { hex: 0x3b82f6, css: '#3b82f6', label: 'Science' },
  technology:  { hex: 0x06b6d4, css: '#06b6d4', label: 'Technology' },
  politics:    { hex: 0xf59e0b, css: '#f59e0b', label: 'Politics' },
  business:    { hex: 0x10b981, css: '#10b981', label: 'Business' },
  health:      { hex: 0x84cc16, css: '#84cc16', label: 'Health' },
  environment: { hex: 0x14b8a6, css: '#14b8a6', label: 'Environment' },
}

export const CATEGORY_ORDER: NewsCategory[] = [
  'disaster', 'conflict', 'science', 'technology',
  'politics', 'business', 'health', 'environment', 'general',
]

// ── Layer types ──────────────────────────────────────────────────────────────

export type LayerId = 'news' | 'satellites' | 'earthquakes' | 'flights' | 'radio'

export interface LayerMeta {
  id: LayerId
  label: string
  color: string
  hex: number
  icon: string
}

export const LAYER_META: Record<LayerId, LayerMeta> = {
  news:        { id: 'news',        label: 'News',        color: '#3b82f6', hex: 0x3b82f6, icon: 'Newspaper' },
  satellites:  { id: 'satellites',  label: 'Satellites',  color: '#a78bfa', hex: 0xa78bfa, icon: 'Satellite' },
  earthquakes: { id: 'earthquakes', label: 'Earthquakes', color: '#ef4444', hex: 0xef4444, icon: 'Activity' },
  flights:     { id: 'flights',     label: 'Flights',     color: '#fbbf24', hex: 0xfbbf24, icon: 'Plane' },
  radio:       { id: 'radio',       label: 'Radio',       color: '#22d3ee', hex: 0x22d3ee, icon: 'Radio' },
}

export const LAYER_ORDER: LayerId[] = ['news', 'satellites', 'earthquakes', 'flights', 'radio']

// ── Satellite ────────────────────────────────────────────────────────────────

export type SatClass = 'station' | 'starlink' | 'debris' | 'payload' | 'rocket' | 'unknown'

export interface Satellite {
  id: number
  name: string
  satClass: SatClass
  lat: number
  lng: number
  alt: number
  velocity: number
}

export const SAT_CLASS_META: Record<SatClass, { color: string; hex: number; label: string }> = {
  station:  { color: '#22c55e', hex: 0x22c55e, label: 'Space Station' },
  starlink: { color: '#a78bfa', hex: 0xa78bfa, label: 'Starlink' },
  payload:  { color: '#60a5fa', hex: 0x60a5fa, label: 'Payload' },
  rocket:   { color: '#fb923c', hex: 0xfb923c, label: 'Rocket Body' },
  debris:   { color: '#64748b', hex: 0x64748b, label: 'Debris' },
  unknown:  { color: '#94a3b8', hex: 0x94a3b8, label: 'Unknown' },
}

// ── Earthquake ───────────────────────────────────────────────────────────────

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

// ── Flight ───────────────────────────────────────────────────────────────────

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

// ── Radio station ───────────────────────────────────────────────────────────

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
