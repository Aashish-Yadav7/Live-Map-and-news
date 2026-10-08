import { useState, useEffect } from 'react'
import type { SeaRoute } from '../types'

// Major global maritime shipping routes with real port coordinates
const SEA_ROUTES: SeaRoute[] = [
  // Trans-Pacific
  { id: 'tp-1', name: 'Shanghai — Los Angeles', fromName: 'Shanghai', toName: 'Los Angeles', fromLat: 31.23, fromLng: 121.47, toLat: 33.73, toLng: -118.27, traffic: 'high' },
  { id: 'tp-2', name: 'Shenzhen — Long Beach', fromName: 'Shenzhen', toName: 'Long Beach', fromLat: 22.54, fromLng: 114.06, toLat: 33.75, toLng: -118.19, traffic: 'high' },
  { id: 'tp-3', name: 'Busan — Seattle', fromName: 'Busan', toName: 'Seattle', fromLat: 35.08, fromLng: 129.04, toLat: 47.65, toLng: -122.33, traffic: 'medium' },
  { id: 'tp-4', name: 'Yokohama — Oakland', fromName: 'Yokohama', toName: 'Oakland', fromLat: 35.45, fromLng: 139.65, toLat: 37.80, toLng: -122.28, traffic: 'medium' },

  // Asia-Europe (Suez)
  { id: 'suez-1', name: 'Shanghai — Rotterdam', fromName: 'Shanghai', toName: 'Rotterdam', fromLat: 31.23, fromLng: 121.47, toLat: 51.95, toLng: 4.14, traffic: 'high' },
  { id: 'suez-2', name: 'Singapore — Rotterdam', fromName: 'Singapore', toName: 'Rotterdam', fromLat: 1.29, fromLng: 103.85, toLat: 51.95, toLng: 4.14, traffic: 'high' },
  { id: 'suez-3', name: 'Ningbo — Hamburg', fromName: 'Ningbo', toName: 'Hamburg', fromLat: 29.87, fromLng: 121.54, toLat: 53.55, toLng: 9.99, traffic: 'high' },
  { id: 'suez-4', name: 'Jebel Ali — Antwerp', fromName: 'Jebel Ali (Dubai)', toName: 'Antwerp', fromLat: 25.01, fromLng: 55.06, toLat: 51.22, toLng: 4.40, traffic: 'medium' },
  { id: 'suez-5', name: 'Port Klang — Felixstowe', fromName: 'Port Klang', toName: 'Felixstowe', fromLat: 3.00, fromLng: 101.39, toLat: 51.96, toLng: 1.31, traffic: 'medium' },

  // Trans-Atlantic
  { id: 'ta-1', name: 'Rotterdam — New York', fromName: 'Rotterdam', toName: 'New York', fromLat: 51.95, fromLng: 4.14, toLat: 40.67, toLng: -74.04, traffic: 'high' },
  { id: 'ta-2', name: 'Hamburg — Savannah', fromName: 'Hamburg', toName: 'Savannah', fromLat: 53.55, fromLng: 9.99, toLat: 32.08, toLng: -81.09, traffic: 'medium' },
  { id: 'ta-3', name: 'Antwerp — Houston', fromName: 'Antwerp', toName: 'Houston', fromLat: 51.22, fromLng: 4.40, toLat: 29.73, toLng: -95.07, traffic: 'medium' },
  { id: 'ta-4', name: 'Liverpool — New York', fromName: 'Liverpool', toName: 'New York', fromLat: 53.41, fromLng: -2.99, toLat: 40.67, toLng: -74.04, traffic: 'low' },

  // Asia-Mediterranean
  { id: 'am-1', name: 'Shanghai — Genoa', fromName: 'Shanghai', toName: 'Genoa', fromLat: 31.23, fromLng: 121.47, toLat: 44.41, toLng: 8.76, traffic: 'medium' },
  { id: 'am-2', name: 'Singapore — Valencia', fromName: 'Singapore', toName: 'Valencia', fromLat: 1.29, fromLng: 103.85, toLat: 39.45, toLng: -0.31, traffic: 'medium' },

  // Intra-Asia
  { id: 'ia-1', name: 'Shanghai — Singapore', fromName: 'Shanghai', toName: 'Singapore', fromLat: 31.23, fromLng: 121.47, toLat: 1.29, toLng: 103.85, traffic: 'high' },
  { id: 'ia-2', name: 'Hong Kong — Busan', fromName: 'Hong Kong', toName: 'Busan', fromLat: 22.32, fromLng: 114.17, toLat: 35.08, toLng: 129.04, traffic: 'high' },
  { id: 'ia-3', name: 'Singapore — Port Klang', fromName: 'Singapore', toName: 'Port Klang', fromLat: 1.29, fromLng: 103.85, toLat: 3.00, toLng: 101.39, traffic: 'medium' },
  { id: 'ia-4', name: 'Kaohsiung — Manila', fromName: 'Kaohsiung', toName: 'Manila', fromLat: 22.62, fromLng: 120.31, toLat: 14.60, toLng: 120.97, traffic: 'low' },

  // Cape of Good Hope (Africa bypass)
  { id: 'cape-1', name: 'Shanghai — Rotterdam (Cape)', fromName: 'Shanghai', toName: 'Cape Town', fromLat: 31.23, fromLng: 121.47, toLat: -33.91, toLng: 18.42, traffic: 'low' },
  { id: 'cape-2', name: 'Cape Town — Rotterdam', fromName: 'Cape Town', toName: 'Rotterdam', fromLat: -33.91, fromLng: 18.42, toLat: 51.95, toLng: 4.14, traffic: 'low' },

  // South America
  { id: 'sa-1', name: 'Santos — Rotterdam', fromName: 'Santos', toName: 'Rotterdam', fromLat: -23.96, fromLng: -46.33, toLat: 51.95, toLng: 4.14, traffic: 'medium' },
  { id: 'sa-2', name: 'Callao — Shanghai', fromName: 'Callao', toName: 'Shanghai', fromLat: -12.06, fromLng: -77.15, toLat: 31.23, toLng: 121.47, traffic: 'low' },
  { id: 'sa-3', name: 'Santos — New York', fromName: 'Santos', toName: 'New York', fromLat: -23.96, fromLng: -46.33, toLat: 40.67, toLng: -74.04, traffic: 'medium' },

  // Middle East / India
  { id: 'me-1', name: 'Jebel Ali — Mumbai', fromName: 'Jebel Ali', toName: 'Mumbai (JNPT)', fromLat: 25.01, fromLng: 55.06, toLat: 18.95, toLng: 72.95, traffic: 'medium' },
  { id: 'me-2', name: 'Jebel Ali — Singapore', fromName: 'Jebel Ali', toName: 'Singapore', fromLat: 25.01, fromLng: 55.06, toLat: 1.29, toLng: 103.85, traffic: 'medium' },

  // Australia
  { id: 'au-1', name: 'Shanghai — Sydney', fromName: 'Shanghai', toName: 'Sydney', fromLat: 31.23, fromLng: 121.47, toLat: -33.86, toLng: 151.21, traffic: 'medium' },
  { id: 'au-2', name: 'Singapore — Melbourne', fromName: 'Singapore', toName: 'Melbourne', fromLat: 1.29, fromLng: 103.85, toLat: -37.81, toLng: 144.96, traffic: 'low' },

  // Africa
  { id: 'af-1', name: 'Singapore — Durban', fromName: 'Singapore', toName: 'Durban', fromLat: 1.29, fromLng: 103.85, toLat: -29.86, toLng: 31.03, traffic: 'low' },
  { id: 'af-2', name: 'Rotterdam — Lagos', fromName: 'Rotterdam', toName: 'Lagos (Tin Can)', fromLat: 51.95, fromLng: 4.14, toLat: 6.45, toLng: 3.35, traffic: 'low' },
]

export function useSeaRoutes(enabled: boolean) {
  const [items] = useState<SeaRoute[]>(SEA_ROUTES)
  const [loading] = useState(false)
  const [error] = useState<string | null>(null)

  useEffect(() => {
    // Static data, no fetch needed
  }, [enabled])

  return { items, loading, error }
}
