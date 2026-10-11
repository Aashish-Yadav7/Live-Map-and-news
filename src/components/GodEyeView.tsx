import { useState, useEffect, useCallback } from 'react'
import {
  X, Eye, Plane, Satellite, Radio, Activity, Newspaper, Camera,
  Crosshair, Maximize2, Minimize2, Volume2, VolumeX,
  Signal, Zap, Ship, Route, Globe as GlobeIcon,
  AlertTriangle,
} from 'lucide-react'
import type {
  Flight, Satellite as SatType, RadioStation, NewsItem,
  Earthquake, SeaRoute, FlightPath, LayerId,
} from '../types'
import { CATEGORY_META, SAT_CLASS_META } from '../types'

interface CamFeed {
  id: string
  label: string
  city: string
  country: string
  lat: number
  lng: number
  youtubeId: string
  type: 'traffic' | 'city' | 'nature' | 'airport' | 'space'
}

const CAMERAS: CamFeed[] = [
  { id: 'nyc',       label: 'Times Square',        city: 'New York',     country: 'USA',         lat: 40.758,  lng: -73.985,  youtubeId: 'DXUAy3MTs7c', type: 'city' },
  { id: 'shibuya',   label: 'Shibuya Crossing',    city: 'Tokyo',        country: 'Japan',       lat: 35.659,  lng: 139.700,  youtubeId: 'Eg8pR5ZYo0M', type: 'traffic' },
  { id: 'dubai',     label: 'Dubai Skyline',        city: 'Dubai',        country: 'UAE',         lat: 25.077,  lng: 55.139,   youtubeId: 'gz9lQF8T2xQ', type: 'city' },
  { id: 'paris',     label: 'Eiffel Tower',         city: 'Paris',        country: 'France',      lat: 48.858,  lng: 2.294,    youtubeId: 'XLCMhYSzB8Q', type: 'city' },
  { id: 'sydney',    label: 'Sydney Opera House',   city: 'Sydney',       country: 'Australia',   lat: -33.856, lng: 151.215,  youtubeId: '2XgWJf3sTrc', type: 'city' },
  { id: 'hk',        label: 'Hong Kong Harbour',    city: 'Hong Kong',    country: 'China',       lat: 22.278,  lng: 114.174,  youtubeId: '2Ib5KT4D8ds', type: 'city' },
  { id: 'iss',       label: 'ISS Live View',        city: 'Orbit',        country: 'Space',       lat: 0,       lng: 0,        youtubeId: '21X5lGlDOfg', type: 'space' },
  { id: 'aurora',    label: 'Northern Lights',      city: 'Reykjavik',    country: 'Iceland',     lat: 64.146,  lng: -21.942,  youtubeId: 'gUMrwLyDSfI', type: 'nature' },
  { id: 'singapore', label: 'Marina Bay Sands',     city: 'Singapore',    country: 'Singapore',   lat: 1.283,   lng: 103.860,  youtubeId: 'xcvE9t2oB3M', type: 'city' },
  { id: 'lasvegas',  label: 'Las Vegas Strip',      city: 'Las Vegas',    country: 'USA',         lat: 36.114,  lng: -115.172, youtubeId: 'NCv-WQuj4aI', type: 'city' },
  { id: 'amsterdam', label: 'Amsterdam Canals',     city: 'Amsterdam',    country: 'Netherlands', lat: 52.370,  lng: 4.895,    youtubeId: 'QkbX4K8TBwM', type: 'city' },
  { id: 'cockpit',   label: 'Cockpit View (747)',   city: 'Airborne',     country: 'Sky',         lat: 0,       lng: 0,        youtubeId: 'mnGzlaRSO6E', type: 'airport' },
  { id: 'cabin',     label: 'Cabin Window View',    city: 'Airborne',     country: 'Sky',         lat: 0,       lng: 0,        youtubeId: 'TI_nwKjxU54', type: 'airport' },
  { id: 'earthlive', label: 'Earth from Space',     city: 'Low Orbit',    country: 'Space',       lat: 0,       lng: 0,        youtubeId: 'koWqdSqKBQc', type: 'space' },
  { id: 'africa',    label: 'African Savanna',      city: 'Maasai Mara',  country: 'Kenya',       lat: -1.5,    lng: 35.1,     youtubeId: 'MNs5kVbFZkY', type: 'nature' },
  { id: 'deepspace', label: 'Deep Space Feed',      city: 'Webb Telescope',country: 'Space',      lat: 0,       lng: 0,        youtubeId: 'DDGTkZuaWLI', type: 'space' },
]

type GridLayout = '1x1' | '2x2' | '3x3' | '2x3'
const LAYOUT_COUNTS: Record<GridLayout, number> = { '1x1': 1, '2x2': 4, '3x3': 9, '2x3': 6 }
const LAYOUT_CLASSES: Record<GridLayout, string> = {
  '1x1': 'grid-cols-1 grid-rows-1',
  '2x2': 'grid-cols-2 grid-rows-2',
  '3x3': 'grid-cols-3 grid-rows-3',
  '2x3': 'grid-cols-3 grid-rows-2',
}

const TAB_LIST = [
  { id: 'cameras',    label: 'Cameras',    Icon: Camera },
  { id: 'flights',    label: 'Flights',    Icon: Plane },
  { id: 'satellites', label: 'Satellites', Icon: Satellite },
  { id: 'news',       label: 'News',       Icon: Newspaper },
  { id: 'events',     label: 'Events',     Icon: Activity },
  { id: 'radio',      label: 'Radio',      Icon: Radio },
  { id: 'shipping',   label: 'Shipping',   Icon: Ship },
] as const
type TabId = typeof TAB_LIST[number]['id']

interface GodEyeViewProps {
  onClose: () => void
  flights: Flight[]
  satellites: SatType[]
  radioStations: RadioStation[]
  newsItems: NewsItem[]
  earthquakes: Earthquake[]
  seaRoutes: SeaRoute[]
  flightPaths: FlightPath[]
  activeLayers: Set<LayerId>
  onToggleLayer: (id: LayerId) => void
  onPlayRadio: (url: string) => void
  playingUrl: string | null
}

function LiveDot() {
  return <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
}

function CamTile({ cam, selected, onSelect }: { cam: CamFeed | null; selected: boolean; onSelect: () => void }) {
  if (!cam) {
    return (
      <div onClick={onSelect} className="relative bg-neutral-900 border border-neutral-800 rounded flex items-center justify-center cursor-pointer hover:border-emerald-700 transition-colors group h-full">
        <Camera className="w-8 h-8 text-neutral-700 group-hover:text-emerald-600 transition-colors" />
        <span className="absolute bottom-2 left-2 text-xs text-neutral-700">No feed</span>
      </div>
    )
  }
  return (
    <div className={`relative bg-black rounded overflow-hidden cursor-pointer h-full border-2 transition-colors ${selected ? 'border-emerald-500' : 'border-transparent hover:border-emerald-800'}`} onClick={onSelect}>
      <iframe
        src={`https://www.youtube.com/embed/${cam.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${cam.youtubeId}&rel=0&modestbranding=1`}
        className="w-full h-full pointer-events-none"
        allow="autoplay; encrypted-media"
        title={cam.label}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-2 py-1.5 pointer-events-none">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-white font-medium leading-tight truncate">{cam.label}</p>
            <p className="text-[10px] text-neutral-400">{cam.city}, {cam.country}</p>
          </div>
          <span className="flex items-center gap-1 text-[10px] text-red-400"><LiveDot />LIVE</span>
        </div>
      </div>
      {selected && <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50" />}
    </div>
  )
}

export default function GodEyeView({
  onClose, flights, satellites, radioStations, newsItems, earthquakes,
  seaRoutes, flightPaths, activeLayers, onToggleLayer, onPlayRadio, playingUrl,
}: GodEyeViewProps) {
  const [tab, setTab] = useState<TabId>('cameras')
  const [layout, setLayout] = useState<GridLayout>('2x2')
  const [slots, setSlots] = useState<(CamFeed | null)[]>(CAMERAS.slice(0, 4))
  const [selectedSlot, setSelectedSlot] = useState(0)
  const [fullscreenSlot, setFullscreenSlot] = useState<number | null>(null)
  const [muteAll, setMuteAll] = useState(true)
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null)
  const [selectedSat, setSelectedSat] = useState<SatType | null>(null)
  const [clock, setClock] = useState(new Date())

  useEffect(() => {
    const t = setInterval(() => setClock(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const count = LAYOUT_COUNTS[layout]
    setSlots(prev => {
      if (prev.length === count) return prev
      return Array.from({ length: count }, (_, i) => prev[i] ?? CAMERAS[i] ?? null)
    })
  }, [layout])

  const assignCamera = useCallback((cam: CamFeed) => {
    setSlots(prev => {
      const next = [...prev]
      next[selectedSlot] = cam
      return next
    })
  }, [selectedSlot])

  const milFlights = flights.filter(f => f.military)
  const civFlights = flights.filter(f => !f.military)
  const fullCam = fullscreenSlot !== null ? slots[fullscreenSlot] : null

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col">
      {/* Top bar */}
      <header className="flex-shrink-0 flex items-center justify-between px-4 py-2 bg-neutral-950 border-b border-emerald-900/40">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-bold tracking-widest uppercase">God's Eye</span>
            <span className="flex items-center gap-1 text-xs text-red-400 ml-2"><LiveDot /> SURVEILLANCE ACTIVE</span>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-xs text-neutral-500 border-l border-neutral-800 pl-3">
            <span className="flex items-center gap-1"><Signal className="w-3 h-3 text-emerald-500" />{flights.length} FLIGHTS</span>
            <span className="flex items-center gap-1"><Satellite className="w-3 h-3 text-violet-400" />{satellites.length} SATs</span>
            <span className="flex items-center gap-1"><Activity className="w-3 h-3 text-red-400" />{earthquakes.length} EVENTS</span>
            <span className="flex items-center gap-1"><Ship className="w-3 h-3 text-cyan-400" />{seaRoutes.length} ROUTES</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-emerald-500 tabular-nums hidden sm:block">{clock.toUTCString().slice(0, -4)} UTC</span>
          <button onClick={() => setMuteAll(!muteAll)} className="p-1.5 rounded hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors" title={muteAll ? 'Unmute all' : 'Mute all'}>
            {muteAll ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          <button onClick={onClose} className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs transition-colors">
            <X className="w-4 h-4" /> EXIT
          </button>
        </div>
      </header>

      {/* Main area */}
      <div className="flex-1 flex min-h-0">
        {/* Camera grid */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="flex items-center gap-2 px-3 py-2 bg-neutral-950/80 border-b border-neutral-900 flex-shrink-0">
            <span className="text-xs text-neutral-500 mr-1">LAYOUT</span>
            {(['1x1', '2x2', '2x3', '3x3'] as GridLayout[]).map(l => (
              <button key={l} onClick={() => setLayout(l)}
                className={`px-2 py-1 rounded text-xs transition-colors ${layout === l ? 'bg-emerald-700/40 text-emerald-300 border border-emerald-700/60' : 'text-neutral-500 hover:text-neutral-300 border border-transparent'}`}>
                {l}
              </button>
            ))}
            <div className="flex-1" />
            <span className="text-xs text-neutral-600">Click slot then pick camera from right panel</span>
          </div>

          <div className={`flex-1 grid gap-1 p-1 min-h-0 ${LAYOUT_CLASSES[layout]}`}>
            {slots.map((cam, i) => (
              <CamTile key={i} cam={cam} selected={selectedSlot === i} onSelect={() => { setSelectedSlot(i); setFullscreenSlot(null) }} />
            ))}
          </div>
        </div>

        {/* Right panel */}
        <div className="w-72 xl:w-80 flex-shrink-0 flex flex-col bg-neutral-950 border-l border-neutral-900 min-h-0">
          {/* Tab bar */}
          <div className="flex-shrink-0 flex overflow-x-auto border-b border-neutral-900">
            {TAB_LIST.map(({ id, label, Icon }) => (
              <button key={id} onClick={() => setTab(id)}
                className={`flex items-center gap-1 px-3 py-2 text-xs whitespace-nowrap transition-colors border-b-2 ${tab === id ? 'border-emerald-500 text-emerald-400 bg-emerald-950/20' : 'border-transparent text-neutral-500 hover:text-neutral-300'}`}>
                <Icon className="w-3 h-3" /><span className="hidden sm:inline">{label}</span>
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto min-h-0">
            {/* Cameras */}
            {tab === 'cameras' && (
              <>
                <div className="px-3 py-2 text-xs text-neutral-600 uppercase tracking-widest border-b border-neutral-900">
                  Select feed for slot {selectedSlot + 1}
                </div>
                {CAMERAS.map(cam => {
                  const isCurrent = slots[selectedSlot]?.id === cam.id
                  return (
                    <button key={cam.id} onClick={() => assignCamera(cam)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 border-b border-neutral-900/60 transition-colors text-left ${isCurrent ? 'bg-emerald-950/30' : 'hover:bg-neutral-900/40'}`}>
                      <div className={`w-8 h-8 rounded flex items-center justify-center flex-shrink-0 ${cam.type === 'space' ? 'bg-violet-950/60' : cam.type === 'airport' ? 'bg-amber-950/60' : cam.type === 'nature' ? 'bg-green-950/60' : 'bg-neutral-800'}`}>
                        {cam.type === 'space' ? <GlobeIcon className="w-4 h-4 text-violet-400" /> : cam.type === 'airport' ? <Plane className="w-4 h-4 text-amber-400" /> : cam.type === 'nature' ? <Zap className="w-4 h-4 text-green-400" /> : <Camera className="w-4 h-4 text-emerald-400" />}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-white truncate">{cam.label}</p>
                        <p className="text-[10px] text-neutral-500">{cam.city} · {cam.country}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        {isCurrent && <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />}
                        <button onClick={e => { e.stopPropagation(); assignCamera(cam); setFullscreenSlot(selectedSlot) }} className="text-[10px] text-neutral-600 hover:text-emerald-400 transition-colors">
                          <Maximize2 className="w-3 h-3" />
                        </button>
                      </div>
                    </button>
                  )
                })}
              </>
            )}

            {/* Flights */}
            {tab === 'flights' && (
              <>
                {milFlights.length > 0 && (
                  <div className="px-3 py-1.5 text-[10px] text-orange-400 uppercase tracking-widest border-b border-neutral-900 bg-orange-950/10">
                    MILITARY — {milFlights.length} aircraft
                  </div>
                )}
                {milFlights.slice(0, 30).map(f => (
                  <button key={f.icao} onClick={() => setSelectedFlight(f)}
                    className={`w-full flex items-start gap-2 px-3 py-2 border-b border-neutral-900/60 text-left transition-colors ${selectedFlight?.icao === f.icao ? 'bg-orange-950/20' : 'hover:bg-neutral-900/40'}`}>
                    <Plane className="w-3.5 h-3.5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-white font-medium">{f.callsign}</p>
                      <p className="text-[10px] text-neutral-500">{f.origin || '?'} · {f.altitude}m · {f.velocity}m/s</p>
                      <p className="text-[10px] text-neutral-600">{f.lat.toFixed(2)}, {f.lng.toFixed(2)}</p>
                    </div>
                    <span className="text-[10px] text-orange-400 flex-shrink-0">MIL</span>
                  </button>
                ))}
                <div className="px-3 py-1.5 text-[10px] text-amber-400 uppercase tracking-widest border-b border-neutral-900 bg-amber-950/10">
                  CIVILIAN — {civFlights.length} aircraft
                </div>
                {civFlights.slice(0, 60).map(f => (
                  <button key={f.icao} onClick={() => setSelectedFlight(f)}
                    className={`w-full flex items-start gap-2 px-3 py-2 border-b border-neutral-900/60 text-left transition-colors ${selectedFlight?.icao === f.icao ? 'bg-amber-950/20' : 'hover:bg-neutral-900/40'}`}>
                    <Plane className="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-white">{f.callsign}</p>
                      <p className="text-[10px] text-neutral-500">{f.origin || '?'} · {f.altitude}m</p>
                    </div>
                    <span className="text-[10px] text-neutral-600">{f.heading}°</span>
                  </button>
                ))}
                {flights.length === 0 && <div className="p-4 text-xs text-neutral-600 text-center">Enable the Flights layer on the globe.</div>}
                {selectedFlight && (
                  <div className="border-t border-emerald-900/40 bg-neutral-950 p-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-emerald-400 font-bold">{selectedFlight.callsign}</span>
                      <button onClick={() => setSelectedFlight(null)} className="text-neutral-600 hover:text-white"><X className="w-3.5 h-3.5" /></button>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 text-[10px]">
                      <div className="bg-neutral-900 rounded p-2"><p className="text-neutral-500">ALTITUDE</p><p className="text-white">{selectedFlight.altitude} m</p></div>
                      <div className="bg-neutral-900 rounded p-2"><p className="text-neutral-500">VELOCITY</p><p className="text-white">{selectedFlight.velocity} m/s</p></div>
                      <div className="bg-neutral-900 rounded p-2"><p className="text-neutral-500">HEADING</p><p className="text-white">{selectedFlight.heading}°</p></div>
                      <div className="bg-neutral-900 rounded p-2"><p className="text-neutral-500">TYPE</p><p className={selectedFlight.military ? 'text-orange-400' : 'text-amber-400'}>{selectedFlight.military ? 'MILITARY' : 'CIVIL'}</p></div>
                      <div className="bg-neutral-900 rounded p-2 col-span-2"><p className="text-neutral-500">POSITION</p><p className="text-white">{selectedFlight.lat.toFixed(4)}, {selectedFlight.lng.toFixed(4)}</p></div>
                    </div>
                    <button
                      onClick={() => { assignCamera(selectedFlight.military ? CAMERAS.find(c => c.id === 'cockpit')! : CAMERAS.find(c => c.id === 'cabin')!); setFullscreenSlot(selectedSlot) }}
                      className="w-full text-xs bg-emerald-800/30 hover:bg-emerald-700/30 text-emerald-400 rounded py-1.5 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Camera className="w-3.5 h-3.5" /> Enter Cabin View
                    </button>
                  </div>
                )}
              </>
            )}

            {/* Satellites */}
            {tab === 'satellites' && (
              <>
                <div className="px-3 py-1.5 text-[10px] text-violet-400 uppercase tracking-widest border-b border-neutral-900">
                  {satellites.length} OBJECTS TRACKED
                </div>
                {satellites.slice(0, 150).map(s => (
                  <button key={s.id} onClick={() => setSelectedSat(s)}
                    className={`w-full flex items-start gap-2 px-3 py-2 border-b border-neutral-900/60 text-left transition-colors ${selectedSat?.id === s.id ? 'bg-violet-950/20' : 'hover:bg-neutral-900/40'}`}>
                    <Satellite className="w-3.5 h-3.5 text-violet-400 mt-0.5 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-white truncate">{s.name}</p>
                      <p className="text-[10px] text-neutral-500">{s.alt} km · {s.velocity} km/s</p>
                    </div>
                    <span className="text-[10px] flex-shrink-0" style={{ color: SAT_CLASS_META[s.satClass]?.color ?? '#94a3b8' }}>
                      {s.satClass.toUpperCase().slice(0, 3)}
                    </span>
                  </button>
                ))}
                {satellites.length === 0 && <div className="p-4 text-xs text-neutral-600 text-center">Enable the Satellites layer.</div>}
                {selectedSat && (
                  <div className="border-t border-violet-900/40 bg-neutral-950 p-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-violet-400 font-bold truncate">{selectedSat.name}</span>
                      <button onClick={() => setSelectedSat(null)} className="text-neutral-600 hover:text-white flex-shrink-0"><X className="w-3.5 h-3.5" /></button>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 text-[10px]">
                      <div className="bg-neutral-900 rounded p-2"><p className="text-neutral-500">ALTITUDE</p><p className="text-white">{selectedSat.alt} km</p></div>
                      <div className="bg-neutral-900 rounded p-2"><p className="text-neutral-500">VELOCITY</p><p className="text-white">{selectedSat.velocity} km/s</p></div>
                      <div className="bg-neutral-900 rounded p-2"><p className="text-neutral-500">LAT</p><p className="text-white">{selectedSat.lat.toFixed(3)}°</p></div>
                      <div className="bg-neutral-900 rounded p-2"><p className="text-neutral-500">LNG</p><p className="text-white">{selectedSat.lng.toFixed(3)}°</p></div>
                      <div className="bg-neutral-900 rounded p-2 col-span-2"><p className="text-neutral-500">CLASS</p><p style={{ color: SAT_CLASS_META[selectedSat.satClass]?.color }}>{SAT_CLASS_META[selectedSat.satClass]?.label}</p></div>
                    </div>
                    <button
                      onClick={() => { assignCamera(CAMERAS.find(c => c.id === 'earthlive')!); setFullscreenSlot(selectedSlot) }}
                      className="w-full text-xs bg-violet-800/30 hover:bg-violet-700/30 text-violet-400 rounded py-1.5 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Camera className="w-3.5 h-3.5" /> View From Orbit
                    </button>
                  </div>
                )}
              </>
            )}

            {/* News */}
            {tab === 'news' && (
              <>
                <div className="px-3 py-1.5 text-[10px] text-blue-400 uppercase tracking-widest border-b border-neutral-900">
                  {newsItems.length} LIVE DISPATCHES
                </div>
                {newsItems.slice(0, 80).map((item, i) => {
                  const meta = CATEGORY_META[item.category]
                  return (
                    <a key={i} href={item.url} target="_blank" rel="noopener noreferrer"
                      className="flex items-start gap-2 px-3 py-2.5 border-b border-neutral-900/60 hover:bg-neutral-900/40 transition-colors">
                      <span className="w-2 h-2 rounded-full flex-shrink-0 mt-1" style={{ backgroundColor: meta.css }} />
                      <div className="min-w-0">
                        <p className="text-xs text-neutral-200 line-clamp-2 leading-snug">{item.title}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-[10px] text-neutral-600">{meta.label}</span>
                          <span className="text-[10px] text-neutral-600">·</span>
                          <span className="text-[10px] text-neutral-500">{item.source}</span>
                        </div>
                      </div>
                    </a>
                  )
                })}
                {newsItems.length === 0 && <div className="p-4 text-xs text-neutral-600 text-center">No news loaded.</div>}
              </>
            )}

            {/* Events */}
            {tab === 'events' && (
              <>
                <div className="px-3 py-1.5 text-[10px] text-red-400 uppercase tracking-widest border-b border-neutral-900">
                  {earthquakes.length} SEISMIC EVENTS
                </div>
                {earthquakes.map(eq => (
                  <a key={eq.id} href={eq.url} target="_blank" rel="noopener noreferrer"
                    className="flex items-start gap-2 px-3 py-2.5 border-b border-neutral-900/60 hover:bg-neutral-900/40 transition-colors">
                    <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: eq.magnitude >= 6 ? '#ef4444' : eq.magnitude >= 4.5 ? '#f97316' : '#fbbf24' }} />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-white">M{eq.magnitude} — {eq.place}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[10px] text-neutral-500">{eq.depth} km depth</span>
                        <span className="text-[10px] text-neutral-600">{new Date(eq.time).toLocaleTimeString()}</span>
                      </div>
                    </div>
                  </a>
                ))}
                {earthquakes.length === 0 && <div className="p-4 text-xs text-neutral-600 text-center">No events. Enable Earthquakes layer.</div>}
              </>
            )}

            {/* Radio */}
            {tab === 'radio' && (
              <>
                <div className="px-3 py-1.5 text-[10px] text-cyan-400 uppercase tracking-widest border-b border-neutral-900">
                  {radioStations.length} STATIONS
                </div>
                {radioStations.slice(0, 100).map(s => {
                  const isPlaying = playingUrl === s.url
                  return (
                    <button key={s.id} onClick={() => onPlayRadio(s.url)}
                      className={`w-full flex items-center gap-2 px-3 py-2.5 border-b border-neutral-900/60 text-left transition-colors ${isPlaying ? 'bg-cyan-950/20' : 'hover:bg-neutral-900/40'}`}>
                      <Radio className={`w-3.5 h-3.5 flex-shrink-0 ${isPlaying ? 'text-cyan-400 animate-pulse' : 'text-neutral-500'}`} />
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-white truncate">{s.name}</p>
                        <p className="text-[10px] text-neutral-500">{s.country} · {s.bitrate}kbps</p>
                      </div>
                      {isPlaying && <span className="text-[10px] text-cyan-400 flex-shrink-0 flex items-center gap-1"><LiveDot />ON AIR</span>}
                    </button>
                  )
                })}
                {radioStations.length === 0 && <div className="p-4 text-xs text-neutral-600 text-center">Enable the Radio layer.</div>}
              </>
            )}

            {/* Shipping */}
            {tab === 'shipping' && (
              <>
                <div className="px-3 py-1.5 text-[10px] text-cyan-400 uppercase tracking-widest border-b border-neutral-900">
                  {seaRoutes.length} SEA LANES · {flightPaths.length} FLIGHT PATHS
                </div>
                {seaRoutes.map(r => (
                  <div key={r.id} className="flex items-start gap-2 px-3 py-2.5 border-b border-neutral-900/60">
                    <Ship className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-white truncate">{r.name}</p>
                      <p className="text-[10px] text-neutral-500">{r.fromName} to {r.toName}</p>
                    </div>
                    <span className={`text-[10px] flex-shrink-0 ${r.traffic === 'high' ? 'text-red-400' : r.traffic === 'medium' ? 'text-amber-400' : 'text-neutral-500'}`}>
                      {r.traffic.toUpperCase()}
                    </span>
                  </div>
                ))}
                {flightPaths.slice(0, 40).map((fp, i) => (
                  <div key={i} className="flex items-start gap-2 px-3 py-2.5 border-b border-neutral-900/60">
                    <Route className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${fp.military ? 'text-orange-400' : 'text-amber-400'}`} />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-white truncate">{fp.fromName} to {fp.toName}</p>
                      <p className="text-[10px] text-neutral-500">{fp.callsign}{fp.military ? ' - MILITARY' : ''}</p>
                    </div>
                  </div>
                ))}
                {seaRoutes.length === 0 && flightPaths.length === 0 && <div className="p-4 text-xs text-neutral-600 text-center">Enable Sea Routes and Flight Paths layers.</div>}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Fullscreen camera overlay */}
      {fullscreenSlot !== null && fullCam && (
        <div className="absolute inset-0 z-30 bg-black flex flex-col" style={{ top: '41px' }}>
          <div className="flex items-center justify-between px-4 py-2 bg-black/80 border-b border-neutral-800 flex-shrink-0">
            <div className="flex items-center gap-2">
              <Camera className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-white">{fullCam.label}</span>
              <span className="text-xs text-neutral-500">{fullCam.city}, {fullCam.country}</span>
              <span className="flex items-center gap-1 text-xs text-red-400 ml-2"><LiveDot />LIVE</span>
            </div>
            <button onClick={() => setFullscreenSlot(null)} className="p-1.5 hover:bg-neutral-800 rounded text-neutral-400">
              <Minimize2 className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1 relative">
            <iframe
              src={`https://www.youtube.com/embed/${fullCam.youtubeId}?autoplay=1&mute=${muteAll ? 1 : 0}&controls=1&rel=0`}
              className="w-full h-full"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              title={fullCam.label}
            />
          </div>
          <div className="flex items-center gap-4 px-4 py-2 bg-black/80 border-t border-neutral-800 text-xs text-neutral-400">
            <span className="flex items-center gap-1"><Crosshair className="w-3 h-3" />{fullCam.lat.toFixed(3)}, {fullCam.lng.toFixed(3)}</span>
            <span className="flex items-center gap-1"><Camera className="w-3 h-3" />{fullCam.type.toUpperCase()}</span>
            <span className="flex items-center gap-1 text-emerald-400"><LiveDot />STREAM OK</span>
          </div>
        </div>
      )}

      {/* Status bar */}
      <footer className="flex-shrink-0 flex items-center gap-4 px-4 py-1.5 bg-neutral-950 border-t border-emerald-900/30 text-[10px] text-neutral-600">
        <span className="flex items-center gap-1 text-emerald-500"><Zap className="w-3 h-3" />SYSTEM OK</span>
        <span>GRID: {layout}</span>
        <span>SLOT: {selectedSlot + 1}/{LAYOUT_COUNTS[layout]}</span>
        <span>MUTE: {muteAll ? 'ON' : 'OFF'}</span>
        <div className="flex-1" />
        <span className="text-neutral-700 hidden sm:block">LAYERS: {[...activeLayers].join(' · ')}</span>
      </footer>
    </div>
  )
}
