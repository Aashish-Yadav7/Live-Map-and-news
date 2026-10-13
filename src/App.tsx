import { useState, useCallback, useMemo, useRef } from 'react'
import { Loader2, X, ExternalLink, Search, MapPin, ChevronUp, ChevronDown, Activity, Plane, Radio, Volume2, Globe as GlobeIcon, Eye } from 'lucide-react'
import Globe from './components/Globe'
import LayerPanel from './components/LayerPanel'
import GodEyeView from './components/GodEyeView'
import { useNews } from './hooks/useNews'
import { useEarthquakes } from './hooks/useEarthquakes'
import { useFlights } from './hooks/useFlights'
import { useRadio } from './hooks/useRadio'
import { CATEGORY_META, LAYER_META } from './types'
import type { LayerId } from './types'
import type { GlobeHoverData } from './components/Globe'

export default function App() {
  const [countryInput, setCountryInput] = useState('')
  const [countrySearch, setCountrySearch] = useState('')
  const { items: newsItems, loading: newsLoading } = useNews(countrySearch)
  const [activeLayers, setActiveLayers] = useState<Set<LayerId>>(new Set(['news']))
  const { items: earthquakes, loading: earthquakeLoading, error: earthquakeError } = useEarthquakes(activeLayers.has('earthquakes'))
  const { items: flights, loading: flightLoading, error: flightError } = useFlights(activeLayers.has('flights'))
  const { items: radioStations, loading: radioLoading, error: radioError } = useRadio(activeLayers.has('radio'))
  const [hovered, setHovered] = useState<GlobeHoverData | null>(null)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })
  const [selected, setSelected] = useState<GlobeHoverData | null>(null)
  const [globeExpanded, setGlobeExpanded] = useState(false)
  const [godEyeMode, setGodEyeMode] = useState(false)
  const [playingStation, setPlayingStation] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const toggleLayer = useCallback((id: LayerId) => {
    setActiveLayers(previous => {
      const next = new Set(previous)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  const playRadio = useCallback((url: string) => {
    audioRef.current?.pause()
    if (playingStation === url) {
      audioRef.current = null
      setPlayingStation(null)
      return
    }
    const audio = new Audio(url)
    audio.volume = 0.7
    audio.play().catch(() => {})
    audioRef.current = audio
    setPlayingStation(url)
  }, [playingStation])

  const handleClick = useCallback((data: GlobeHoverData) => {
    setSelected(data)
    if (data.layer === 'radio' && data.url) playRadio(data.url)
  }, [playRadio])

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault()
    setCountrySearch(countryInput.trim())
    setSelected(null)
  }

  const clearSearch = () => {
    setCountryInput('')
    setCountrySearch('')
    setSelected(null)
  }

  const counts = useMemo<Record<LayerId, number>>(() => ({
    news: newsItems.length,
    earthquakes: earthquakes.length,
    flights: flights.length,
    radio: radioStations.length,
  }), [newsItems, earthquakes, flights, radioStations])

  const isLoading = newsLoading || earthquakeLoading || flightLoading || radioLoading

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-neutral-950 via-black to-neutral-950 text-white flex flex-col overflow-hidden">
      <header className="border-b border-neutral-800/60 px-4 sm:px-6 py-3 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-3">
          <GlobeIcon className="w-7 h-7 text-blue-400" />
          <div>
            <h1 className="text-sm font-semibold tracking-wide">WORLD EYE</h1>
            <p className="text-[10px] text-neutral-500 uppercase tracking-widest">Live Earth intelligence</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {isLoading && <span className="flex items-center gap-2 text-xs text-neutral-400"><Loader2 className="w-4 h-4 animate-spin" /> Updating</span>}
          <button onClick={() => setGodEyeMode(true)} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-700/30 border border-emerald-600/50 text-emerald-300 hover:bg-emerald-700/50 transition-colors text-xs font-medium">
            <Eye className="w-4 h-4" /> God’s Eye
          </button>
        </div>
      </header>

      <div className="px-4 pt-3 pb-3 border-b border-neutral-800/60">
        <form onSubmit={handleSearch} className="flex items-center gap-2">
          <div className="relative flex-1">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <input value={countryInput} onChange={event => setCountryInput(event.target.value)} placeholder="Search news by country..." className="w-full pl-9 pr-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-blue-500" />
          </div>
          <button type="submit" className="px-3 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-medium flex items-center gap-1.5"><Search className="w-4 h-4" /> <span className="hidden sm:inline">Filter</span></button>
          {countrySearch && <button type="button" onClick={clearSearch} className="px-2.5 py-2 bg-neutral-800 rounded-lg text-neutral-300"><X className="w-4 h-4" /></button>}
        </form>
        {countrySearch && <p className="mt-2 flex items-center gap-1.5 text-xs text-blue-300"><MapPin className="w-3.5 h-3.5" /> Showing news for {countrySearch}</p>}
      </div>

      <main className="flex-1 flex flex-col sm:flex-row relative overflow-hidden min-h-0">
        <div className={`relative overflow-hidden flex-shrink-0 transition-all sm:h-full sm:flex-1 ${globeExpanded ? 'h-[40vh]' : 'h-[30vh]'}`}>
          <Globe newsItems={newsItems} earthquakes={earthquakes} flights={flights} radioStations={radioStations} activeLayers={activeLayers} godEyeMode={godEyeMode} onHover={(data, x, y) => { setHovered(data); setTooltipPos({ x, y }) }} onClick={handleClick} />
          <LayerPanel activeLayers={activeLayers} onToggle={toggleLayer} counts={counts} />
          <button onClick={() => setGodEyeMode(true)} className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-3 py-2 rounded-xl border border-emerald-500/50 bg-emerald-700/30 text-emerald-300 shadow-2xl text-xs"><Eye className="w-3.5 h-3.5" /> God’s Eye</button>
          <button onClick={() => setGlobeExpanded(!globeExpanded)} className="sm:hidden absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/70 border border-neutral-700 text-xs text-neutral-300">
            {globeExpanded ? <><ChevronDown className="w-3.5 h-3.5" /> Less map</> : <><ChevronUp className="w-3.5 h-3.5" /> More map</>}
          </button>
          {hovered && !selected && <div className="fixed z-50 pointer-events-none max-w-xs bg-neutral-900/95 border border-neutral-700 rounded-xl p-3 shadow-2xl" style={{ left: Math.min(tooltipPos.x + 14, window.innerWidth - 320), top: tooltipPos.y + 14 }}><p className="text-xs text-neutral-400">{LAYER_META[hovered.layer].label}</p><p className="text-sm text-white mt-1">{hovered.title}</p><p className="text-xs text-neutral-400 mt-1">{hovered.subtitle}</p></div>}
          {(earthquakeError || flightError || radioError) && <div className="absolute top-16 right-3 bg-red-950/90 border border-red-800 rounded-lg px-3 py-2 text-xs text-red-300 space-y-1">{earthquakeError && <div>Earthquakes: {earthquakeError}</div>}{flightError && <div>Flights: {flightError}</div>}{radioError && <div>Radio: {radioError}</div>}</div>}
        </div>

        <aside className="flex flex-col flex-1 sm:flex-none sm:w-80 border-t sm:border-t-0 sm:border-l border-neutral-800/60 bg-neutral-950/80 min-h-0">
          <div className="px-4 py-3 border-b border-neutral-800/60 flex items-center justify-between"><h2 className="text-sm font-semibold text-neutral-200">{selected ? 'Details' : 'Live News'}</h2>{!selected && <span className="text-xs text-neutral-500">{counts.news} stories</span>}</div>
          {selected ? <div className="flex-1 overflow-y-auto p-4 space-y-4"><p className="text-sm text-neutral-400">{LAYER_META[selected.layer].label}</p><h2 className="text-xl font-semibold leading-tight">{selected.title}</h2><p className="text-sm text-neutral-400">{selected.subtitle}</p>{selected.meta && <p className="text-xs text-neutral-500">{selected.meta}</p>}{selected.url && <a href={selected.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-blue-600 rounded-lg text-sm font-medium">Open details <ExternalLink className="w-4 h-4" /></a>}{selected.layer === 'radio' && selected.url && <button onClick={() => playRadio(selected.url!)} className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-cyan-600 rounded-lg text-sm font-medium"><Volume2 className="w-4 h-4" /> Play station</button>}<button onClick={() => setSelected(null)} className="w-full px-4 py-2.5 bg-neutral-800 rounded-lg text-sm text-neutral-300"><X className="w-4 h-4 inline mr-2" /> Close</button></div> : <div className="flex-1 overflow-y-auto">{activeLayers.has('news') && newsItems.map((item, index) => { const meta = CATEGORY_META[item.category]; return <button key={`${item.url}-${index}`} onClick={() => setSelected({ layer: 'news', title: item.title, subtitle: item.source, meta: meta.label, url: item.url, lat: item.lat, lng: item.lng })} className="w-full text-left px-4 py-3 border-b border-neutral-800/40 hover:bg-neutral-800/40 flex items-start gap-3"><span className="mt-1 w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: meta.css }} /><div className="min-w-0"><p className="text-sm text-neutral-200 line-clamp-2">{item.title}</p><p className="text-xs text-neutral-500 mt-1">{meta.label} · {item.source}</p></div></button>})}{activeLayers.has('earthquakes') && earthquakes.map(eq => <button key={eq.id} onClick={() => setSelected({ layer: 'earthquakes', title: `M${eq.magnitude} Earthquake`, subtitle: eq.place, meta: `${eq.depth} km deep`, url: eq.url, lat: eq.lat, lng: eq.lng })} className="w-full text-left px-4 py-3 border-b border-neutral-800/40 hover:bg-neutral-800/40 flex items-start gap-3"><Activity className="w-4 h-4 text-red-400 mt-0.5" /><div><p className="text-sm text-neutral-200">M{eq.magnitude} — {eq.place}</p><p className="text-xs text-neutral-500">{eq.depth} km deep</p></div></button>)}{activeLayers.has('flights') && <div className="px-4 py-3 border-b border-neutral-800/40 flex items-center gap-2"><Plane className="w-4 h-4 text-amber-400" /><span className="text-sm text-neutral-200">{flights.length} planes in the air</span></div>}{activeLayers.has('radio') && <div className="px-4 py-3 border-b border-neutral-800/40 flex items-center gap-2"><Radio className="w-4 h-4 text-cyan-400" /><span className="text-sm text-neutral-200">{radioStations.length} radio stations</span></div>}</div>}
        </aside>
      </main>

      {godEyeMode && <GodEyeView onClose={() => setGodEyeMode(false)} flights={flights} radioStations={radioStations} newsItems={newsItems} earthquakes={earthquakes} activeLayers={activeLayers} onToggleLayer={toggleLayer} onPlayRadio={playRadio} playingUrl={playingStation} />}
    </div>
  )
}
