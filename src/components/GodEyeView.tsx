import { useEffect, useMemo, useState } from 'react'
import { Activity, Camera, Eye, Globe2, Newspaper, Plane, Radio, Signal, Volume2, VolumeX, X } from 'lucide-react'
import type { Earthquake, Flight, LayerId, NewsItem, RadioStation } from '../types'
import { CATEGORY_META } from '../types'

interface GodEyeViewProps {
  onClose: () => void
  flights: Flight[]
  radioStations: RadioStation[]
  newsItems: NewsItem[]
  earthquakes: Earthquake[]
  activeLayers: Set<LayerId>
  onToggleLayer: (id: LayerId) => void
  onPlayRadio: (url: string) => void
  playingUrl: string | null
}

type CameraKind = 'city' | 'cockpit' | 'cabin'
interface CameraPreset { id: string; name: string; place: string; kind: CameraKind; color: string }

const PRESETS: CameraPreset[] = [
  { id: 'new-york', name: 'Urban camera', place: 'New York, USA', kind: 'city', color: '#0e7490' },
  { id: 'tokyo', name: 'Traffic camera', place: 'Tokyo, Japan', kind: 'city', color: '#0369a1' },
  { id: 'london', name: 'Street camera', place: 'London, UK', kind: 'city', color: '#166534' },
  { id: 'dubai', name: 'Skyline camera', place: 'Dubai, UAE', kind: 'city', color: '#9a3412' },
  { id: 'cockpit', name: 'Cockpit camera', place: 'Aircraft forward view', kind: 'cockpit', color: '#14532d' },
  { id: 'cabin', name: 'Cabin camera', place: 'Passenger cabin view', kind: 'cabin', color: '#1e3a8a' },
]

function CameraFeed({ preset, selected, onClick, flight }: { preset: CameraPreset; selected: boolean; onClick: () => void; flight?: Flight }) {
  const title = flight ? `${flight.callsign} · ${preset.name}` : preset.name
  const place = flight ? `${flight.origin || 'Airborne'} · ${flight.altitude} m` : preset.place
  return (
    <button onClick={onClick} className={`relative min-h-0 overflow-hidden rounded border-2 text-left transition-all ${selected ? 'border-emerald-400 shadow-lg shadow-emerald-950' : 'border-neutral-800 hover:border-emerald-700'}`}>
      <div className="absolute inset-0" style={{ background: preset.kind === 'cockpit' ? 'linear-gradient(165deg, #052e16 0%, #0f172a 47%, #020617 48%, #164e63 100%)' : preset.kind === 'cabin' ? 'linear-gradient(120deg, #172554, #0f172a 55%, #1e40af)' : `linear-gradient(145deg, ${preset.color}, #020617 75%)` }} />
      {preset.kind === 'city' && <div className="absolute inset-x-0 bottom-0 h-1/2 opacity-70" style={{ background: 'repeating-linear-gradient(90deg, transparent 0 12%, #facc15 12.5% 13%, transparent 13.5% 22%), linear-gradient(0deg, #020617, transparent)' }} />}
      {preset.kind === 'cockpit' && <div className="absolute left-1/2 top-1/2 w-1 h-1 bg-emerald-200 rounded-full shadow-[0_0_80px_35px_rgba(134,239,172,.25)]" />}
      {preset.kind === 'cabin' && <div className="absolute inset-x-1/4 top-1/4 bottom-0 border-x border-blue-300/20 bg-blue-300/5" />}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent 0 3px, rgba(255,255,255,.12) 4px)' }} />
      <div className="absolute top-2 left-2 right-2 flex items-center justify-between text-[10px] font-mono"><span className="flex items-center gap-1 text-red-300"><span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" /> LIVE</span><span className="text-emerald-200/80">CAM-{preset.id.toUpperCase()}</span></div>
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-3 pt-8"><p className="text-xs text-white font-semibold">{title}</p><p className="text-[10px] text-neutral-300">{place}</p></div>
    </button>
  )
}

export default function GodEyeView({ onClose, flights, radioStations, newsItems, earthquakes, activeLayers, onToggleLayer, onPlayRadio, playingUrl }: GodEyeViewProps) {
  const [tab, setTab] = useState<'cameras' | 'flights' | 'news' | 'events' | 'radio'>('cameras')
  const [selectedCamera, setSelectedCamera] = useState<CameraPreset>(PRESETS[0])
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null)
  const [mute, setMute] = useState(true)
  const [clock, setClock] = useState(new Date())

  useEffect(() => {
    const interval = window.setInterval(() => setClock(new Date()), 1000)
    return () => window.clearInterval(interval)
  }, [])

  const displayedPresets = useMemo(() => [PRESETS[0], PRESETS[1], PRESETS[2], selectedFlight?.military ? PRESETS[4] : PRESETS[5]], [selectedFlight])
  const activePlane = selectedFlight ?? flights[0]

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#030608] text-white">
      <header className="flex shrink-0 items-center justify-between border-b border-emerald-900/60 bg-neutral-950 px-4 py-3">
        <div className="flex items-center gap-3"><Eye className="h-5 w-5 text-emerald-400" /><div><h1 className="text-sm font-bold tracking-[.25em] text-emerald-300">GOD'S EYE</h1><p className="text-[10px] uppercase tracking-widest text-neutral-500">Global surveillance view</p></div><span className="ml-2 flex items-center gap-1 text-xs text-red-400"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" /> SYSTEM LIVE</span></div>
        <div className="flex items-center gap-3"><span className="hidden text-xs tabular-nums text-emerald-400 sm:block">{clock.toUTCString().slice(0, -4)} UTC</span><button onClick={() => setMute(!mute)} className="rounded p-2 text-neutral-400 hover:bg-neutral-800 hover:text-white">{mute ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}</button><button onClick={onClose} className="flex items-center gap-1.5 rounded bg-neutral-800 px-3 py-2 text-xs text-neutral-200 hover:bg-neutral-700"><X className="h-4 w-4" /> EXIT</button></div>
      </header>

      <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
        <section className="flex min-h-0 flex-1 flex-col">
          <div className="flex shrink-0 items-center gap-3 border-b border-neutral-900 px-3 py-2 text-xs text-neutral-500"><Signal className="h-3.5 w-3.5 text-emerald-400" /> {flights.length} aircraft <span>·</span> {newsItems.length} dispatches <span>·</span> {earthquakes.length} events <span className="ml-auto text-neutral-600">Select a tile to inspect</span></div>
          <div className="grid min-h-0 flex-1 grid-cols-2 grid-rows-2 gap-1 p-1">
            {displayedPresets.map((preset, index) => <CameraFeed key={`${preset.id}-${index}`} preset={preset} flight={preset.kind !== 'city' ? activePlane : undefined} selected={selectedCamera.id === preset.id} onClick={() => setSelectedCamera(preset)} />)}
          </div>
          <div className="flex shrink-0 items-center gap-3 border-t border-neutral-900 px-3 py-2 text-[10px] text-neutral-600"><Globe2 className="h-3.5 w-3.5 text-blue-400" /> Earth layer active <span className="text-emerald-500">● signal stable</span><span className="ml-auto">CAMERA: {selectedCamera.name.toUpperCase()}</span></div>
        </section>

        <aside className="flex min-h-0 w-full flex-col border-t border-neutral-900 bg-neutral-950 lg:w-80 lg:border-l lg:border-t-0">
          <nav className="flex shrink-0 overflow-x-auto border-b border-neutral-900">{([['cameras', Camera, 'Cameras'], ['flights', Plane, 'Planes'], ['news', Newspaper, 'News'], ['events', Activity, 'Events'], ['radio', Radio, 'Radio']] as const).map(([id, Icon, label]) => <button key={id} onClick={() => setTab(id)} className={`flex items-center gap-1.5 whitespace-nowrap border-b-2 px-3 py-3 text-xs ${tab === id ? 'border-emerald-500 text-emerald-300' : 'border-transparent text-neutral-500 hover:text-neutral-300'}`}><Icon className="h-3.5 w-3.5" /> {label}</button>)}</nav>
          {tab === 'cameras' && <div className="min-h-0 flex-1 overflow-y-auto p-3"><p className="mb-3 text-xs text-neutral-500">Camera views are ready to inspect. Select a city, cockpit, or cabin panel.</p>{PRESETS.map(preset => <button key={preset.id} onClick={() => setSelectedCamera(preset)} className={`mb-2 flex w-full items-center gap-3 rounded border px-3 py-2 text-left ${selectedCamera.id === preset.id ? 'border-emerald-700 bg-emerald-950/30' : 'border-neutral-800 hover:border-neutral-700'}`}><Camera className="h-4 w-4 text-emerald-400" /><span className="min-w-0 flex-1"><span className="block truncate text-xs text-white">{preset.name}</span><span className="block text-[10px] text-neutral-500">{preset.place}</span></span><span className="text-[10px] text-red-400">LIVE</span></button>)}</div>}
          {tab === 'flights' && <div className="min-h-0 flex-1 overflow-y-auto">{flights.length === 0 ? <p className="p-4 text-xs text-neutral-500">Turn on the Planes layer to load aircraft.</p> : flights.map(flight => <button key={flight.icao} onClick={() => { setSelectedFlight(flight); setTab('cameras') }} className="flex w-full items-start gap-3 border-b border-neutral-900 px-3 py-3 text-left hover:bg-neutral-900"><Plane className={`mt-0.5 h-4 w-4 ${flight.military ? 'text-orange-400' : 'text-amber-400'}`} /><span className="min-w-0 flex-1"><span className="block text-xs font-semibold text-white">{flight.callsign || flight.icao}</span><span className="block text-[10px] text-neutral-500">{flight.origin || 'Airborne'} · {flight.altitude} m · {flight.velocity} m/s</span><span className="block text-[10px] text-neutral-600">{flight.lat.toFixed(2)}, {flight.lng.toFixed(2)}</span></span><span className="text-[10px] text-emerald-400">ENTER</span></button>)}</div>}
          {tab === 'news' && <div className="min-h-0 flex-1 overflow-y-auto">{newsItems.length === 0 ? <p className="p-4 text-xs text-neutral-500">No news is available yet.</p> : newsItems.map((item, index) => { const meta = CATEGORY_META[item.category]; return <a key={`${item.url}-${index}`} href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 border-b border-neutral-900 px-3 py-3 hover:bg-neutral-900"><span className="mt-1 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: meta.css }} /><span><span className="block text-xs leading-snug text-neutral-200">{item.title}</span><span className="mt-1 block text-[10px] text-neutral-500">{meta.label} · {item.source}</span></span></a>})}</div>}
          {tab === 'events' && <div className="min-h-0 flex-1 overflow-y-auto">{earthquakes.map(eq => <a key={eq.id} href={eq.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 border-b border-neutral-900 px-3 py-3 hover:bg-neutral-900"><Activity className="h-4 w-4 text-red-400" /><span><span className="block text-xs text-white">M{eq.magnitude} — {eq.place}</span><span className="text-[10px] text-neutral-500">{eq.depth} km deep</span></span></a>)}{earthquakes.length === 0 && <p className="p-4 text-xs text-neutral-500">No earthquake events loaded.</p>}</div>}
          {tab === 'radio' && <div className="min-h-0 flex-1 overflow-y-auto">{radioStations.map(station => <button key={station.id} onClick={() => onPlayRadio(station.url)} className="flex w-full items-center gap-2 border-b border-neutral-900 px-3 py-3 text-left hover:bg-neutral-900"><Radio className={`h-4 w-4 ${playingUrl === station.url ? 'animate-pulse text-cyan-400' : 'text-neutral-500'}`} /><span className="min-w-0 flex-1"><span className="block truncate text-xs text-white">{station.name}</span><span className="text-[10px] text-neutral-500">{station.country}</span></span>{playingUrl === station.url && <span className="text-[10px] text-cyan-400">ON AIR</span>}</button>)}{radioStations.length === 0 && <p className="p-4 text-xs text-neutral-500">Turn on the Radio layer to load stations.</p>}</div>}
        </aside>
      </div>

      <div className="flex shrink-0 items-center gap-3 border-t border-emerald-900/50 bg-neutral-950 px-4 py-2 text-[10px] text-neutral-600"><span className="text-emerald-400">● SYSTEM OK</span><span>EARTH ONLY</span><span className="hidden sm:inline">NO SATELLITE ORBIT DATA</span><span className="ml-auto">{selectedFlight ? `ENTERED: ${selectedFlight.callsign}` : 'GLOBAL VIEW'}</span></div>
    </div>
  )
}
