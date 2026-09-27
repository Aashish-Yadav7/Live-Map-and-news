import { Layers, Satellite, Activity, Plane, Radio, Newspaper, X } from 'lucide-react'
import type { LayerId } from '../types'
import { LAYER_META, LAYER_ORDER } from '../types'

interface LayerPanelProps {
  activeLayers: Set<LayerId>
  onToggle: (id: LayerId) => void
  counts: Record<LayerId, number>
}

const ICONS: Record<string, typeof Layers> = {
  Newspaper,
  Satellite,
  Activity,
  Plane,
  Radio,
}

export default function LayerPanel({ activeLayers, onToggle, counts }: LayerPanelProps) {
  return (
    <div className="absolute top-3 left-3 z-10">
      <div className="bg-black/70 backdrop-blur-md border border-neutral-700/60 rounded-xl overflow-hidden shadow-2xl">
        <div className="px-3 py-2 border-b border-neutral-800/60 flex items-center gap-2">
          <Layers className="w-4 h-4 text-neutral-400" />
          <span className="text-xs font-medium text-neutral-300">Layers</span>
        </div>
        <div className="p-1.5 space-y-1">
          {LAYER_ORDER.map(id => {
            const meta = LAYER_META[id]
            const Icon = ICONS[meta.icon] || Layers
            const active = activeLayers.has(id)
            const count = counts[id] || 0
            return (
              <button
                key={id}
                onClick={() => onToggle(id)}
                className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg transition-all duration-200 group ${
                  active
                    ? 'bg-neutral-800/80 hover:bg-neutral-700/80'
                    : 'hover:bg-neutral-800/40 opacity-50 hover:opacity-80'
                }`}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0 transition-all duration-200"
                  style={{
                    backgroundColor: active ? meta.color : '#4b5563',
                    boxShadow: active ? `0 0 8px ${meta.color}80` : 'none',
                  }}
                />
                <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: active ? meta.color : '#9ca3af' }} />
                <span className={`text-xs flex-1 text-left ${active ? 'text-neutral-200' : 'text-neutral-500'}`}>
                  {meta.label}
                </span>
                {active && count > 0 && (
                  <span className="text-xs text-neutral-500 tabular-nums">
                    {count > 999 ? '999+' : count}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
