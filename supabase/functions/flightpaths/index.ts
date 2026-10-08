import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

// Major airport coordinates for route estimation
const AIRPORTS: Record<string, [number, number, string]> = {
  // ICAO -> [lat, lng, city name]
  "ZSPD": [31.14, 121.81, "Shanghai"],
  "ZGGG": [23.39, 113.30, "Guangzhou"],
  "ZGSZ": [22.64, 113.81, "Shenzhen"],
  "ZBNY": [39.51, 116.58, "Beijing"],
  "ZSNJ": [31.74, 118.87, "Nanjing"],
  "ZSNB": [29.82, 121.47, "Ningbo"],
  "ZHHH": [30.78, 115.52, "Wuhan"],
  "ZGHA": [28.19, 113.22, "Changsha"],
  "ZBAA": [40.08, 116.58, "Beijing Capital"],
  "ZBAD": [39.51, 116.41, "Beijing Daxing"],
  "ZUUU": [30.57, 103.95, "Chengdu"],
  "ZWWW": [43.91, 87.47, "Urumqi"],
  "ZXLN": [38.97, 121.54, "Dalian"],
  "ZSQD": [36.27, 120.37, "Qingdao"],
  "ZSAM": [24.54, 118.14, "Xiamen"],
  "ZUCK": [29.72, 106.64, "Chongqing"],
  "ZGSZ": [22.64, 113.81, "Shenzhen"],
  "ZHTW": [30.35, 115.72, "Tianjin"],
  "RKSI": [37.46, 126.44, "Seoul Incheon"],
  "RKSS": [37.56, 126.80, "Seoul Gimpo"],
  "RKPC": [33.51, 126.49, "Jeju"],
  "RJTT": [35.55, 139.78, "Tokyo Haneda"],
  "RJAA": [35.77, 140.39, "Tokyo Narita"],
  "RJBB": [34.79, 135.45, "Osaka Kansai"],
  "RJCC": [42.77, 141.69, "Sapporo"],
  "RJFF": [33.59, 130.45, "Fukuoka"],
  "VTBS": [13.69, 100.75, "Bangkok Suvarnabhumi"],
  "VTBD": [13.91, 100.65, "Bangkok Don Mueang"],
  "WMKK": [2.73, 101.71, "Kuala Lumpur"],
  "WSSS": [1.35, 103.99, "Singapore Changi"],
  "WIII": [-6.13, 106.66, "Jakarta"],
  "VIDP": [28.56, 77.10, "Delhi"],
  "VABB": [19.09, 72.87, "Mumbai"],
  "VOBL": [13.20, 77.70, "Bengaluru"],
  "VOMM": [12.99, 80.17, "Chennai"],
  "VECC": [22.65, 88.45, "Kolkata"],
  "OMDB": [25.25, 55.36, "Dubai"],
  "OMAA": [24.43, 54.65, "Abu Dhabi"],
  "OTHH": [25.41, 51.61, "Doha Hamad"],
  "OERK": [24.96, 46.70, "Riyadh"],
  "LLBG": [32.01, 34.89, "Tel Aviv"],
  "SAWN": [24.96, 46.70, "Riyadh"],
  "EHAM": [52.31, 4.76, "Amsterdam"],
  "EGLL": [51.47, -0.46, "London Heathrow"],
  "EGKK": [51.15, -0.19, "London Gatwick"],
  "LFPG": [49.00, 2.55, "Paris CDG"],
  "LFPO": [48.72, 2.38, "Paris Orly"],
  "EDDF": [50.03, 8.56, "Frankfurt"],
  "EDDM": [48.35, 11.79, "Munich"],
  "EDDB": [52.37, 13.50, "Berlin"],
  "LEMD": [40.47, -3.56, "Madrid"],
  "LEBL": [41.30, 2.08, "Barcelona"],
  "LIRF": [41.80, 12.25, "Rome Fiumicino"],
  "LIMC": [45.63, 8.73, "Milan Malpensa"],
  "LSZH": [47.45, 8.56, "Zurich"],
  "LOWW": [48.11, 16.57, "Vienna"],
  "EKCH": [55.62, 12.65, "Copenhagen"],
  "ESSA": [59.65, 17.92, "Stockholm"],
  "ENGM": [60.19, 11.10, "Oslo"],
  "EFHK": [60.32, 24.96, "Helsinki"],
  "UUEE": [55.97, 37.41, "Moscow Sheremetyevo"],
  "UUDD": [55.41, 37.90, "Moscow Domodedovo"],
  "LTFM": [41.27, 28.73, "Istanbul"],
  "LTBA": [40.98, 28.82, "Istanbul Ataturk"],
  "SBGR": [-23.43, -46.47, "Sao Paulo"],
  "SBGL": [-22.81, -43.25, "Rio de Janeiro"],
  "SAEZ": [-34.82, -58.54, "Buenos Aires"],
  "SCEL": [-33.39, -70.79, "Santiago"],
  "KLAX": [33.94, -118.41, "Los Angeles"],
  "KJFK": [40.64, -73.78, "New York JFK"],
  "KEWR": [40.69, -74.17, "Newark"],
  "KLGA": [40.78, -73.87, "New York LaGuardia"],
  "KORD": [41.98, -87.90, "Chicago O Hare"],
  "KATL": [33.64, -84.43, "Atlanta"],
  "KDFW": [32.90, -97.04, "Dallas"],
  "KDEN": [39.86, -104.67, "Denver"],
  "KSFO": [37.62, -122.38, "San Francisco"],
  "KSEA": [47.45, -122.31, "Seattle"],
  "KMIA": [25.79, -80.29, "Miami"],
  "KBOS": [42.37, -71.01, "Boston"],
  "KIAD": [38.95, -77.45, "Washington Dulles"],
  "KIAH": [29.99, -95.34, "Houston"],
  "KLAS": [36.08, -115.15, "Las Vegas"],
  "KPHX": [33.44, -112.01, "Phoenix"],
  "KPHL": [39.87, -75.24, "Philadelphia"],
  "KCLT": [35.21, -80.94, "Charlotte"],
  "KMEM": [35.04, -89.98, "Memphis"],
  "KANC": [61.17, -149.99, "Anchorage"],
  "CYYZ": [43.68, -79.61, "Toronto"],
  "CYVR": [49.19, -123.18, "Vancouver"],
  "CYUL": [45.47, -73.74, "Montreal"],
  "MMMX": [19.44, -99.07, "Mexico City"],
  "MPTO": [9.05, -79.39, "Panama City"],
  "SKBO": [4.70, -74.14, "Bogota"],
  "SPJC": [-12.02, -77.11, "Lima"],
  "FAOR": [-26.13, 28.24, "Johannesburg"],
  "FACT": [-33.97, 18.60, "Cape Town"],
  "DNMM": [6.58, 3.32, "Lagos"],
  "HECA": [30.12, 31.41, "Cairo"],
  "HKJK": [-1.32, 36.93, "Nairobi"],
  "YSSY": [-33.95, 151.18, "Sydney"],
  "YMML": [-37.67, 144.84, "Melbourne"],
  "YPPH": [-31.94, 115.97, "Perth"],
  "YBBN": [-27.39, 153.12, "Brisbane"],
  "NZAA": [-37.01, 174.79, "Auckland"],
  "NZCH": [-43.49, 172.54, "Christchurch"],
  "VHHH": [22.31, 113.91, "Hong Kong"],
  "RCTP": [25.08, 121.23, "Taipei Taoyuan"],
  "RCKH": [22.58, 120.35, "Kaohsiung"],
  "WADD": [-8.75, 115.17, "Bali Denpasar"],
  "VVTS": [10.82, 106.65, "Ho Chi Minh"],
  "VVNB": [21.22, 105.80, "Hanoi"],
  "VTSP": [18.78, 98.97, "Chiang Mai"],
  "VCBI": [7.18, 79.88, "Colombo"],
  "VNKT": [27.70, 85.36, "Kathmandu"],
  "VGHS": [23.84, 90.40, "Dhaka"],
  "VGEG": [22.25, 91.81, "Chittagong"],
  "OPKC": [24.90, 67.16, "Karachi"],
  "OPLA": [31.51, 74.40, "Lahore"],
  "VOHY": [17.24, 78.43, "Hyderabad"],
  "VOCB": [11.03, 77.02, "Coimbatore"],
};

interface FlightPathResult {
  icao: string;
  callsign: string;
  fromLat: number;
  fromLng: number;
  toLat: number;
  toLng: number;
  fromName: string;
  toName: string;
  military: boolean;
}

const MIL_PREFIXES = ["RCH", "RRR", "SAM", "AF", "NAVY", "ARMY", "RFF", "FOR", "EVAC", "REACH", "CNV", "PAT", "RFR", "RRS", "RMM", "ROYAL", "RAF", "LUFT", "GAF", "JASDF", "RDAF", "RNLAF", "RNOAF", "RSAF", "RTAF", "ROKAF", "IAF", "PAF", "PLAAF", "RUAF", "VVS", "TUDM", "AMIA", "HAF"];

function isMilitary(callsign: string): boolean {
  const cs = callsign.toUpperCase().trim();
  if (MIL_PREFIXES.some(p => cs.startsWith(p))) return true;
  if (/^(R|A|C|G|P|V)\d{2,}/.test(cs)) return true;
  return false;
}

// Find nearest airport to a given lat/lng
function nearestAirport(lat: number, lng: number): [number, number, string] | null {
  let best: [number, number, string] | null = null;
  let bestDist = Infinity;
  for (const [_, coords] of Object.entries(AIRPORTS)) {
    const dLat = lat - coords[0];
    const dLng = lng - coords[1];
    const d = dLat * dLat + dLng * dLng;
    if (d < bestDist) {
      bestDist = d;
      best = coords;
    }
  }
  return best;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const url = "https://opensky-network.org/api/states/all";
    const res = await fetch(url, {
      headers: { "User-Agent": "WorldNewsGlobe/1.0" },
      signal: AbortSignal.timeout(15000),
    });

    if (!res.ok) {
      return new Response(
        JSON.stringify({ error: `OpenSky returned ${res.status}`, items: [] }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await res.json();
    const states = data.states || [];
    const items: FlightPathResult[] = [];
    const seenRoutes = new Set<string>();

    for (const s of states) {
      const icao = s[0] as string;
      const callsign = (s[1] as string || "").trim();
      const origin = s[2] as string || "";
      const lon = s[5] as number | null;
      const lat = s[6] as number | null;
      const onGround = s[8] as boolean;

      if (lat === null || lon === null) continue;
      if (onGround) continue;
      if (!callsign) continue;

      // Estimate origin and destination from nearest airports
      const origAirport = origin && AIRPORTS[origin] ? AIRPORTS[origin] : nearestAirport(lat, lon);
      const destAirport = nearestAirport(lat, lon);

      if (!origAirport || !destAirport) continue;
      if (origAirport[2] === destAirport[2]) continue;

      // Deduplicate by route pair
      const routeKey = `${origAirport[2]}->${destAirport[2]}`;
      if (seenRoutes.has(routeKey)) continue;
      seenRoutes.add(routeKey);

      items.push({
        icao,
        callsign: callsign || icao,
        fromLat: origAirport[0],
        fromLng: origAirport[1],
        fromName: origAirport[2],
        toLat: destAirport[0],
        toLng: destAirport[1],
        toName: destAirport[2],
        military: isMilitary(callsign),
      });

      if (items.length >= 200) break;
    }

    return new Response(
      JSON.stringify({ items, count: items.length }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Unknown error", items: [] }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
// trigger redeploy
