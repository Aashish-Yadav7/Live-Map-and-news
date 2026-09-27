import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface SatResult {
  id: number;
  name: string;
  satClass: string;
  lat: number;
  lng: number;
  alt: number;
  velocity: number;
}

function classifySat(name: string): string {
  const n = name.toUpperCase();
  if (n.includes("ISS") || n.includes("STATION") || n.includes("CSS") || n.includes("TIANGONG")) return "station";
  if (n.includes("STARLINK")) return "starlink";
  if (n.includes("DEB") || n.includes("DEBRIS")) return "debris";
  if (n.includes("R/B") || n.includes("ROCKET") || n.includes("SL-")) return "rocket";
  if (n.includes("PAYLOAD") || n.includes("SAT")) return "payload";
  return "unknown";
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const group = new URL(req.url).searchParams.get("group") || "active";
    const urls: Record<string, string[]> = {
      active: [
        "https://celestrak.org/NORAD/elements/gp.php?GROUP=active&FORMAT=tle",
      ],
      stations: [
        "https://celestrak.org/NORAD/elements/gp.php?GROUP=stations&FORMAT=tle",
      ],
      starlink: [
        "https://celestrak.org/NORAD/elements/gp.php?GROUP=starlink&FORMAT=tle",
      ],
      visual: [
        "https://celestrak.org/NORAD/elements/gp.php?GROUP=visual&FORMAT=tle",
      ],
    };
    const targets = urls[group] || urls.active;

    let tleText = "";
    for (const url of targets) {
      try {
        const res = await fetch(url, { signal: AbortSignal.timeout(12000) });
        if (res.ok) {
          tleText = await res.text();
          break;
        }
      } catch { /* try next */ }
    }

    if (!tleText) {
      return new Response(
        JSON.stringify({ error: "Failed to fetch TLE data from CelesTrak", items: [] }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const lines = tleText.trim().split("\n");
    const results: SatResult[] = [];
    let i = 0;
    while (i < lines.length) {
      if (lines[i] && lines[i].startsWith("1 ") && lines[i + 1] && lines[i + 1].startsWith("2 ")) {
        const name = lines[i - 1]?.trim() || "UNKNOWN";
        const line1 = lines[i];
        const line2 = lines[i + 1];
        const satNum = parseInt(line1.substring(2, 7).trim(), 10);
        const inclo = parseFloat(line2.substring(8, 16).trim());
        const no = parseFloat(line2.substring(52, 63).trim());
        const ecco = parseFloat("0." + line2.substring(26, 33).trim());
        const meanMotion = no;
        const alt = Math.pow(3.986e5 / (meanMotion * meanMotion * 4 * Math.PI * Math.PI / (86400 * 86400)), 1 / 3) - 6371;
        const velocity = Math.sqrt(3.986e5 / (alt + 6371));
        results.push({
          id: satNum,
          name,
          satClass: classifySat(name),
          lat: 0,
          lng: 0,
          alt: Math.round(alt),
          velocity: Math.round(velocity * 10) / 10,
        });
        i += 3;
      } else {
        i++;
      }
    }

    return new Response(
      JSON.stringify({ items: results, count: results.length }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Unknown error", items: [] }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
