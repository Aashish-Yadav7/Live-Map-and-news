import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface FlightResult {
  icao: string;
  callsign: string;
  origin: string;
  lat: number;
  lng: number;
  altitude: number;
  velocity: number;
  heading: number;
  onGround: boolean;
  military: boolean;
}

const MIL_PREFIXES = ["RCH", "RRR", "SAM", "AF", "NAVY", "ARMY", "RFF", "RRR", "CASA", "CASA", "FOR", "EVAC", "REACH", "CNV", "PAT", "RFR", "RRS", "RMM", "RCH", "ROYAL", "RAF", "LUFT", "GAF", "JASDF", "RDAF", "RNLAF", "RNOAF", "RSAF", "RTAF", "ROKAF", "IAF", "PAF", "PLAAF", "RUAF", "VVS", "TUDM", "AMIA", "HAF", "BAF", "DAF", "SAAF", "NGAF", "KAF", "UAEAF", "RSAF", "QAF", "BAF", "LAF", "SLOV", "BUL", "HUN", "CZE", "POL", "RRA", "RZY", "RFR"];

function isMilitary(callsign: string, icao: string): boolean {
  const cs = callsign.toUpperCase().trim();
  if (MIL_PREFIXES.some(p => cs.startsWith(p))) return true;
  if (/^(R|A|C|G|P|V)\d{2,}/.test(cs)) return true;
  return false;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const bounds = new URL(req.url).searchParams.get("bounds") || "";
    const lamin = new URL(req.url).searchParams.get("lamin");
    const lomin = new URL(req.url).searchParams.get("lomin");
    const lamax = new URL(req.url).searchParams.get("lamax");
    const lomax = new URL(req.url).searchParams.get("lomax");

    let url: string;
    if (lamin && lomin && lamax && lomax) {
      url = `https://opensky-network.org/api/states/inside?lamin=${lamin}&lomin=${lomin}&lamax=${lamax}&lomax=${lomax}`;
    } else {
      url = "https://opensky-network.org/api/states/all";
    }

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
    const items: FlightResult[] = [];

    for (const s of states) {
      const icao = s[0] as string;
      const callsign = (s[1] as string || "").trim();
      const origin = s[2] as string || "";
      const lon = s[5] as number | null;
      const lat = s[6] as number | null;
      const onGround = s[8] as boolean;
      const velocity = s[9] as number | null;
      const heading = s[10] as number | null;
      const altitude = s[13] as number | null;

      if (lat === null || lon === null) continue;
      if (onGround) continue;

      items.push({
        icao,
        callsign: callsign || icao,
        origin,
        lat,
        lng: lon,
        altitude: altitude ? Math.round(altitude) : 0,
        velocity: velocity ? Math.round(velocity) : 0,
        heading: heading ? Math.round(heading) : 0,
        onGround,
        military: isMilitary(callsign, icao),
      });
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
