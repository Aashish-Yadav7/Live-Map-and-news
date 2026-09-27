import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface EarthquakeResult {
  id: string;
  lat: number;
  lng: number;
  depth: number;
  magnitude: number;
  place: string;
  time: string;
  url: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const minMag = new URL(req.url).searchParams.get("minmag") || "2.5";
    const feedUrl = `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${minMag}_day.geojson`;

    const res = await fetch(feedUrl, { signal: AbortSignal.timeout(10000) });
    if (!res.ok) {
      return new Response(
        JSON.stringify({ error: "Failed to fetch USGS data", items: [] }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await res.json();
    const items: EarthquakeResult[] = [];

    for (const feature of (data.features || [])) {
      const props = feature.properties;
      const coords = feature.geometry?.coordinates;
      if (!props || !coords || coords.length < 3) continue;
      items.push({
        id: feature.id || String(props.code || ""),
        lat: coords[1],
        lng: coords[0],
        depth: coords[2],
        magnitude: props.mag || 0,
        place: props.place || "Unknown",
        time: props.time ? new Date(props.time).toISOString() : new Date().toISOString(),
        url: props.url || `https://earthquake.usgs.gov/earthquakes/eventpage/${feature.id}`,
      });
    }

    items.sort((a, b) => b.magnitude - a.magnitude);

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
