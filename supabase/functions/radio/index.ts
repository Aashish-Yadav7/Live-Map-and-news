import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface RadioResult {
  id: string;
  name: string;
  url: string;
  lat: number;
  lng: number;
  country: string;
  tags: string[];
  codec: string;
  bitrate: number;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const limit = parseInt(new URL(req.url).searchParams.get("limit") || "500", 10);
    const url = `https://de1.api.radio-browser.info/json/stations/topclick/${limit}`;

    const res = await fetch(url, { signal: AbortSignal.timeout(12000) });
    if (!res.ok) {
      return new Response(
        JSON.stringify({ error: "Failed to fetch radio data", items: [] }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await res.json();
    const items: RadioResult[] = [];

    for (const s of data) {
      const lat = parseFloat(s.geo_lat);
      const lng = parseFloat(s.geo_long);
      if (isNaN(lat) || isNaN(lng)) continue;
      const streamUrl = s.url_resolved || s.url;
      if (!streamUrl || !streamUrl.startsWith("http")) continue;
      items.push({
        id: String(s.stationuuid || s.id || ""),
        name: s.name?.trim() || "Unknown",
        url: streamUrl,
        lat,
        lng,
        country: s.country || "",
        tags: (s.tags || "").split(",").map((t: string) => t.trim()).filter(Boolean).slice(0, 5),
        codec: s.codec || "",
        bitrate: parseInt(s.bitrate, 10) || 0,
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
