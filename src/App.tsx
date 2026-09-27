import { useState, useCallback, useMemo } from 'react'
import { Loader2, X, ExternalLink, Search, MapPin, ChevronUp, ChevronDown, Satellite, Activity, Plane, Radio, Volume2 } from 'lucide-react'
import Globe from './components/Globe'
import LayerPanel from './components/LayerPanel'
import { useNews } from './hooks/useNews'
import { useSatellites } from './hooks/useSatellites'
import { useEarthquakes } from './hooks/useEarthquakes'
import { useFlights } from './hooks/useFlights'
import { useRadio } from './hooks/useRadio'
import { CATEGORY_META, CATEGORY_ORDER, LAYER_META, SAT_CLASS_META } from './types'
import type { NewsItem, NewsCategory, LayerId } from './types'
import type { GlobeHoverData } from './components/Globe'

export default function App() {
  const [countryInput, setCountryInput] = useState('')
  const [countrySearch, setCountrySearch] = useState('')
  const { items: newsItems, loading: newsLoading, error: newsError } = useNews(countrySearch)

  // Layer toggle state — news is on by default
  const [activeLayers, setActiveLayers] = useState<Set<LayerId>>(new Set(['news']))

  const satellitesEnabled = activeLayers.has('satellites')
  const earthquakesEnabled = activeLayers.has('earthquakes')
  const flightsEnabled = activeLayers.has('flights')
  const radioEnabled = activeLayers.has('radio')

  const { items: satellites, loading: satLoading, error: satError } = useSatellites(satellitesEnabled)
  const { items: earthquakes, loading: eqLoading, error: eqError } = useEarthquakes(earthquakesEnabled)
  const { items: flights, loading: flightLoading, error: flightError } = useFlights(flightsEnabled)
  const { items: radioStations, loading: radioLoading, error: radioError } = useRadio(radioEnabled)

  const [hovered, setHovered] = useState<GlobeHoverData | null>(null)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })
  const [selected, setSelected] = useState<GlobeHoverData | null>(null)
  const [globeExpanded, setGlobeExpanded] = useState(false)
  const [playingStation, setPlayingStation] = useState<string | null>(null)
  const [audioEl, setAudioEl] = useState<HTMLAudioElement | null>(null)

  const toggleLayer = useCallback((id: LayerId) => {
    setActiveLayers(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  const handleHover = useCallback((data: GlobeHoverData | null, x: number, y: number) => {
    setHovered(data)
    setTooltipPos({ x, y })
  }, [])

  const handleCountrySearch = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    setCountrySearch(countryInput.trim())
    setSelected(null)
  }, [countryInput])

  const clearCountrySearch = useCallback(() => {
    setCountryInput('')
    setCountrySearch('')
    setSelected(null)
  }, [])

  const handleClick = useCallback((data: GlobeHoverData) => {
    setSelected(data)
    if (data.layer === 'radio' && data.url) {
      // Play radio station
      try {
        const audio = new Audio(data.url)
        audio.volume = 0.7
        audio.play().catch(() => {})
        setPlayingStation(data.url)
        setAudioEl(audio)
      } catch { /* ignore */ }
    }
  }, [])

  const categoryCounts = newsItems.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1
    return acc
  }, {} as Record<NewsCategory, number>)

  const layerCounts = useMemo(() => ({
    news: newsItems.length,
    satellites: satellites.length,
    earthquakes: earthquakes.length,
    flights: flights.length,
    radio: radioStations.length,
  }), [newsItems, satellites, earthquakes, flights, radioStations])

  const googleSearch = (query: string) => {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank', 'noopener,noreferrer')
  }

  const isLayerLoading = newsLoading || satLoading || eqLoading || flightLoading || radioLoading

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-neutral-950 via-black to-neutral-950 text-white flex flex-col overflow-hidden">
      {/* Header */}
      <header className="border-b border-neutral-800/60 px-4 sm:px-6 py-3 flex items-center justify-between gap-3 flex-shrink-0">
        <div className="flex items-center gap-2">
          <img
            src="/images/world_logo copy copy copy.png"
            alt="World News Globe"
            className="h-16 sm:h-20 w-auto object-contain"
            style={{ mixBlendMode: 'multiply' }}
          />
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          {isLayerLoading && (
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="hidden sm:inline">Loading...</span>
            </div>
          )}
        </div>
      </header>

      {/* Country search bar */}
      <div className="px-4 pt-3 pb-3 border-b border-neutral-800/60">
        <form onSubmit={handleCountrySearch} className="flex items-center gap-2">
          <div className="relative flex-1">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <input
              type="text"
              value={countryInput}
              onChange={(e) => setCountryInput(e.target.value)}
              placeholder="Search by country (e.g. Japan, Brazil, France)..."
              className="w-full pl-9 pr-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <button
            type="submit"
            className="px-3 py-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition-colors rounded-lg text-sm font-medium text-white flex items-center gap-1.5 flex-shrink-0"
          >
            <Search className="w-4 h-4" />
            <span className="hidden sm:inline">Filter</span>
          </button>
          {countrySearch && (
            <button
              type="button"
              onClick={clearCountrySearch}
              className="px-2.5 py-2 bg-neutral-800 hover:bg-neutral-700 transition-colors rounded-lg text-sm text-neutral-300 flex items-center gap-1 flex-shrink-0"
              title="Clear filter"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </form>
        {countrySearch && (
          <div className="mt-2 flex items-center gap-1.5 text-xs text-blue-300">
            <MapPin className="w-3.5 h-3.5" />
            <span>Showing news for: <span className="font-medium capitalize">{countrySearch}</span></span>
          </div>
        )}
      </div>

      {/* Main content */}
      <main className="flex-1 flex flex-col sm:flex-row relative overflow-hidden min-h-0">

        {/* Globe */}
        <div
          className={`relative overflow-hidden flex-shrink-0 transition-all duration-300 ease-in-out sm:h-full sm:flex-1 ${globeExpanded ? 'h-[40vh]' : 'h-[28vh]'}`}
        >
          <Globe
            newsItems={newsItems}
            satellites={satellites}
            earthquakes={earthquakes}
            flights={flights}
            radioStations={radioStations}
            activeLayers={activeLayers}
            onHover={handleHover}
            onClick={handleClick}
          />
          <LayerPanel
            activeLayers={activeLayers}
            onToggle={toggleLayer}
            counts={layerCounts}
          />
          {/* Mobile expand/collapse toggle */}
          <button
            onClick={() => setGlobeExpanded(!globeExpanded)}
            className="sm:hidden absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-neutral-700 text-xs text-neutral-300 hover:bg-black/80 transition-colors"
          >
            {globeExpanded ? (
              <><ChevronDown className="w-3.5 h-3.5" /> Less map</>
            ) : (
              <><ChevronUp className="w-3.5 h-3.5" /> More map</>
            )}
          </button>
          {hovered && !selected && (
            <div
              className="fixed z-50 pointer-events-none max-w-xs bg-neutral-900/95 backdrop-blur-md border border-neutral-700 rounded-xl p-3 shadow-2xl animate-fade-in"
              style={{
                left: Math.min(tooltipPos.x + 14, window.innerWidth - 320),
                top: tooltipPos.y + 14,
              }}
            >
              <div className="flex items-start gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full mt-1 flex-shrink-0"
                  style={{ backgroundColor: LAYER_META[hovered.layer].color }}
                />
                <div>
                  <p className="text-xs text-neutral-400 mb-1">
                    {LAYER_META[hovered.layer].label}
                  </p>
                  <p className="text-sm text-white leading-snug line-clamp-3">{hovered.title}</p>
                  {hovered.subtitle && <p className="text-xs text-neutral-400 mt-1">{hovered.subtitle}</p>}
                  {hovered.meta && <p className="text-xs text-neutral-500 mt-0.5">{hovered.meta}</p>}
                </div>
              </div>
              <p className="text-xs text-blue-400 mt-2">
                {hovered.layer === 'radio' ? 'Tap to listen' : 'Tap for details'}
              </p>
            </div>
          )}
          {/* Error indicators */}
          {(satError || eqError || flightError || radioError) && (
            <div className="absolute top-3 right-3 bg-red-950/80 border border-red-800 rounded-lg px-3 py-2 text-xs text-red-300 max-w-xs space-y-1">
              {satError && <div>Satellites: {satError}</div>}
              {eqError && <div>Earthquakes: {eqError}</div>}
              {flightError && <div>Flights: {flightError}</div>}
              {radioError && <div>Radio: {radioError}</div>}
            </div>
          )}
        </div>

        {/* Side panel */}
        <aside className="flex flex-col flex-shrink-0 overflow-hidden
                          flex-1 sm:flex-none sm:w-80
                          border-t sm:border-t-0 sm:border-l border-neutral-800/60
                          bg-neutral-950/80 min-h-0
                          transition-all duration-300 ease-in-out">
          <div className="px-4 py-3 border-b border-neutral-800/60 flex items-center justify-between flex-shrink-0">
            <h2 className="text-sm font-semibold text-neutral-200">
              {selected ? 'Details' : 'Live Feed'}
            </h2>
            {!selected && (
              <span className="text-xs text-neutral-500">
                {layerCounts.news + layerCounts.satellites + layerCounts.earthquakes + layerCounts.flights + layerCounts.radio} items
              </span>
            )}
          </div>

          {/* Detail view when a marker is selected */}
          {selected ? (
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: LAYER_META[selected.layer].color }}
                />
                <span className="text-sm font-medium text-neutral-300">
                  {LAYER_META[selected.layer].label}
                </span>
              </div>
              <h2 className="text-xl font-semibold leading-tight text-white">{selected.title}</h2>
              {selected.subtitle && <p className="text-sm text-neutral-400">{selected.subtitle}</p>}
              {selected.meta && <p className="text-xs text-neutral-500">{selected.meta}</p>}
              <div className="text-xs text-neutral-500">
                {selected.lat.toFixed(2)}, {selected.lng.toFixed(2)}
              </div>

              {selected.layer === 'radio' && selected.url && (
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      try {
                        const audio = new Audio(selected.url!)
                        audio.volume = 0.7
                        audio.play().catch(() => {})
                        setPlayingStation(selected.url)
                      } catch { /* ignore */ }
                    }}
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-cyan-600 hover:bg-cyan-500 active:bg-cyan-700 transition-colors rounded-lg text-sm font-medium text-white"
                  >
                    <Volume2 className="w-4 h-4" />
                    Play station
                  </button>
                </div>
              )}

              {selected.url && selected.layer !== 'radio' && (
                <a
                  href={selected.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition-colors rounded-lg text-sm font-medium text-white"
                >
                  {selected.layer === 'news' ? 'Read full article' : 'View details'}
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              <button
                onClick={() => googleSearch(selected.title)}
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 border border-neutral-700 hover:border-neutral-500 transition-colors rounded-lg text-sm text-neutral-300 hover:text-white"
              >
                <Search className="w-4 h-4" />
                Search on Google
              </button>

              <button
                onClick={() => setSelected(null)}
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-neutral-800 hover:bg-neutral-700 transition-colors rounded-lg text-sm text-neutral-300"
              >
                <X className="w-4 h-4" />
                Close
              </button>
            </div>
          ) : (
            /* Live feed list */
            <div className="flex-1 overflow-y-auto overscroll-contain min-h-0">
              {/* News items */}
              {activeLayers.has('news') && newsItems.map((item, idx) => {
                const meta = CATEGORY_META[item.category]
                return (
                  <button
                    key={`news-${idx}`}
                    className="w-full text-left px-4 py-3 border-b border-neutral-800/40 hover:bg-neutral-800/40 active:bg-neutral-800/60 transition-colors flex items-start gap-3"
                    onClick={() => setSelected({
                      layer: 'news', title: item.title, subtitle: item.source,
                      meta: meta.label, url: item.url, lat: item.lat, lng: item.lng,
                    })}
                  >
                    <div className="mt-1 flex-shrink-0">
                      <span className="block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: meta.css, boxShadow: `0 0 6px ${meta.css}80` }} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-neutral-200 leading-snug line-clamp-2">{item.title}</p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-xs text-neutral-600">{meta.label}</span>
                        <span className="text-neutral-700">·</span>
                        <p className="text-xs text-neutral-500 flex items-center gap-1">
                          {item.source}
                          <ExternalLink className="w-3 h-3 inline-block flex-shrink-0 text-neutral-600" />
                        </p>
                      </div>
                    </div>
                  </button>
                )
              })}

              {/* Earthquakes */}
              {activeLayers.has('earthquakes') && earthquakes.map((eq) => (
                <button
                  key={`eq-${eq.id}`}
                  className="w-full text-left px-4 py-3 border-b border-neutral-800/40 hover:bg-neutral-800/40 transition-colors flex items-start gap-3"
                  onClick={() => setSelected({
                    layer: 'earthquakes', title: `M${eq.magnitude} Earthquake`, subtitle: eq.place,
                    meta: `${eq.depth} km deep`, url: eq.url, lat: eq.lat, lng: eq.lng,
                  })}
                >
                  <div className="mt-1 flex-shrink-0">
                    <span className="block w-2.5 h-2.5 rounded-full" style={{
                      backgroundColor: eq.magnitude >= 6 ? '#ef4444' : eq.magnitude >= 4.5 ? '#f97316' : '#fbbf24',
                      boxShadow: `0 0 6px ${eq.magnitude >= 6 ? '#ef4444' : '#f97316'}80`,
                    }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-neutral-200 leading-snug">M{eq.magnitude} — {eq.place}</p>
                    <p className="text-xs text-neutral-500 mt-0.5">{eq.depth} km deep · {new Date(eq.time).toLocaleTimeString()}</p>
                  </div>
                </button>
              ))}

              {/* Satellites summary */}
              {activeLayers.has('satellites') && satellites.length > 0 && (
                <div className="px-4 py-3 border-b border-neutral-800/40">
                  <div className="flex items-center gap-2 mb-2">
                    <Satellite className="w-4 h-4 text-violet-400" />
                    <span className="text-sm text-neutral-200">{satellites.length} satellites tracked</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(SAT_CLASS_META).map(([cls, meta]) => {
                      const count = satellites.filter(s => s.satClass === cls).length
                      if (count === 0) return null
                      return (
                        <div key={cls} className="flex items-center gap-1.5 text-xs">
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: meta.color }} />
                          <span className="text-neutral-400">{meta.label}</span>
                          <span className="text-neutral-600">{count}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Flights summary */}
              {activeLayers.has('flights') && flights.length > 0 && (
                <div className="px-4 py-3 border-b border-neutral-800/40">
                  <div className="flex items-center gap-2">
                    <Plane className="w-4 h-4 text-amber-400" />
                    <span className="text-sm text-neutral-200">{flights.length} flights in the air</span>
                    <span className="text-xs text-neutral-500">
                      ({flights.filter(f => f.military).length} military)
                    </span>
                  </div>
                </div>
              )}

              {/* Radio summary */}
              {activeLayers.has('radio') && radioStations.length > 0 && (
                <div className="px-4 py-3 border-b border-neutral-800/40">
                  <div className="flex items-center gap-2">
                    <Radio className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-neutral-200">{radioStations.length} radio stations</span>
                  </div>
                </div>
              )}

              {/* Empty state */}
              {layerCounts.news + layerCounts.satellites + layerCounts.earthquakes + layerCounts.flights + layerCounts.radio === 0 && !isLayerLoading && (
                <div className="p-4 text-sm text-neutral-500 text-center">
                  No layers active. Toggle a layer from the panel on the globe.
                </div>
              )}
            </div>
          )}
        </aside>
      </main>
    </div>
  )
}
