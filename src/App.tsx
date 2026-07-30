import { useState, useCallback } from 'react'
import { Globe as GlobeIcon, AlertTriangle, Microscope, Loader2, X, ExternalLink } from 'lucide-react'
import Globe from './components/Globe'
import { useNews } from './hooks/useNews'
import type { NewsItem } from './types'

export default function App() {
  const { items, loading, error } = useNews()
  const [hovered, setHovered] = useState<NewsItem | null>(null)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })
  const [selected, setSelected] = useState<NewsItem | null>(null)

  const handleHover = useCallback((item: NewsItem | null, x: number, y: number) => {
    setHovered(item)
    setTooltipPos({ x, y })
  }, [])

  const accidentCount = items.filter(i => i.category === 'accident').length
  const researchCount = items.filter(i => i.category === 'research').length

  const openArticle = (item: NewsItem) => {
    window.open(item.url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-neutral-950 via-black to-neutral-950 text-white flex flex-col overflow-hidden">
      {/* Header */}
      <header className="border-b border-neutral-800/60 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between flex-wrap gap-3 flex-shrink-0">
        <div className="flex items-center gap-3">
          <GlobeIcon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" />
          <div>
            <h1 className="text-lg sm:text-xl font-semibold tracking-tight">World News Globe</h1>
            <p className="text-xs text-neutral-500 hidden sm:block">Real-time geo-located news from around the world</p>
          </div>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
              <span className="text-neutral-300 hidden sm:inline">Accidents & Events</span>
              <span className="text-neutral-500 text-xs">({accidentCount})</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
              <span className="text-neutral-300 hidden sm:inline">Research & Tech</span>
              <span className="text-neutral-500 text-xs">({researchCount})</span>
            </div>
          </div>
          {loading && (
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="hidden sm:inline">Fetching news...</span>
            </div>
          )}
        </div>
      </header>

      {/* Main content — stacks vertically on mobile, side-by-side on desktop */}
      <main className="flex-1 flex flex-col sm:flex-row relative overflow-hidden min-h-0">

        {/* Globe — fills space on both layouts */}
        <div className="flex-1 flex items-center justify-center p-2 sm:p-4 relative overflow-hidden min-h-0">
          <Globe
            width={900}
            height={700}
            newsItems={items}
            onNewsHover={handleHover}
            onNewsClick={setSelected}
          />
          {hovered && !selected && (
            <div
              className="fixed z-50 pointer-events-none max-w-xs bg-neutral-900/95 backdrop-blur-md border border-neutral-700 rounded-xl p-3 shadow-2xl animate-fade-in"
              style={{
                left: Math.min(tooltipPos.x + 14, window.innerWidth - 320),
                top: tooltipPos.y + 14,
              }}
            >
              <div className="flex items-start gap-2">
                {hovered.category === 'accident' ? (
                  <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                ) : (
                  <Microscope className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                )}
                <div>
                  <p className="text-xs text-neutral-400 mb-1">
                    {hovered.category === 'accident' ? 'Accident / Event' : 'Research / Tech'}
                  </p>
                  <p className="text-sm text-white leading-snug line-clamp-3">{hovered.title}</p>
                  <p className="text-xs text-neutral-500 mt-1">{hovered.source}</p>
                </div>
              </div>
              <p className="text-xs text-blue-400 mt-2">Tap to open article</p>
            </div>
          )}
          {error && (
            <div className="absolute top-4 right-4 bg-red-950/80 border border-red-800 rounded-lg px-4 py-2 text-sm text-red-300 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              <span>Failed to load news: {error}</span>
            </div>
          )}
        </div>

        {/* News panel — bottom strip on mobile, right sidebar on desktop */}
        <aside className="
          h-44 w-full border-t border-neutral-800/60 bg-neutral-950/80
          sm:h-auto sm:w-80 sm:border-t-0 sm:border-l sm:border-neutral-800/60
          flex flex-col flex-shrink-0 overflow-hidden
        ">
          <div className="px-4 py-2 sm:py-3 border-b border-neutral-800/60 flex items-center justify-between flex-shrink-0">
            <h2 className="text-sm font-semibold text-neutral-200">Latest Reports</h2>
            <span className="text-xs text-neutral-500">{items.length} items</span>
          </div>
          {/* Horizontal scroll on mobile, vertical on desktop */}
          <div className="flex-1 overflow-x-auto sm:overflow-x-hidden overflow-y-hidden sm:overflow-y-auto overscroll-contain min-w-0 min-h-0">
            <div className="flex flex-row sm:flex-col h-full sm:h-auto">
              {items.length === 0 && !loading && (
                <div className="p-4 text-sm text-neutral-500 text-center whitespace-nowrap sm:whitespace-normal">
                  {error ? 'Could not load news data.' : 'No news items found.'}
                </div>
              )}
              {items.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    flex-shrink-0 w-56 sm:w-auto
                    text-left px-3 sm:px-4 py-2 sm:py-3
                    border-r sm:border-r-0 sm:border-b border-neutral-800/40
                    hover:bg-neutral-800/40 active:bg-neutral-800/60
                    transition-colors flex items-start gap-3
                    ${selected?.url === item.url ? 'bg-neutral-800/50' : ''}
                  `}
                  onClick={(e) => {
                    // On desktop, also show the detail panel
                    if (window.innerWidth >= 640) {
                      e.preventDefault()
                      setSelected(item)
                    }
                  }}
                >
                  <div className="mt-1 flex-shrink-0">
                    {item.category === 'accident' ? (
                      <span className="block w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.5)]" />
                    ) : (
                      <span className="block w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_6px_rgba(59,130,246,0.5)]" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-neutral-200 leading-snug line-clamp-2 sm:line-clamp-2">{item.title}</p>
                    <p className="text-xs text-neutral-500 mt-0.5 flex items-center gap-1">
                      {item.source}
                      <ExternalLink className="w-3 h-3 inline-block flex-shrink-0 text-neutral-600" />
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </aside>
      </main>

      {/* Detail panel — opens on desktop when globe dot is clicked */}
      {selected && (
        <div
          className="fixed inset-0 z-40 flex justify-end"
          onClick={() => setSelected(null)}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-md bg-neutral-950 border-l border-neutral-800 h-full overflow-y-auto animate-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800 px-5 py-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                {selected.category === 'accident' ? (
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                ) : (
                  <Microscope className="w-5 h-5 text-blue-400" />
                )}
                <span className="text-sm font-medium text-neutral-300">
                  {selected.category === 'accident' ? 'Accident / Event' : 'Research / Tech'}
                </span>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-neutral-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-neutral-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5 space-y-4">
              <h2 className="text-lg font-semibold leading-tight">{selected.title}</h2>
              <div className="flex items-center gap-3 text-xs text-neutral-400">
                <span className="px-2 py-1 rounded-md bg-neutral-800 text-neutral-300">{selected.source}</span>
                <span>
                  {new Date(selected.publishedAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>
              <div className="text-sm text-neutral-300">
                <p className="text-neutral-500 mb-1">Location</p>
                <p>{selected.lat.toFixed(2)}, {selected.lng.toFixed(2)}</p>
              </div>
              {selected.summary && (
                <div className="text-sm text-neutral-300">
                  <p className="text-neutral-500 mb-1">Summary</p>
                  <p className="leading-relaxed">{selected.summary}</p>
                </div>
              )}
              <a
                href={selected.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition-colors rounded-lg text-sm font-medium text-white"
              >
                Read full article
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={() => openArticle(selected)}
                className="block w-full text-center px-4 py-2.5 border border-neutral-700 hover:border-neutral-500 transition-colors rounded-lg text-sm text-neutral-300 hover:text-white"
              >
                Search on Google
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
