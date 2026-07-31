import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface NewsItem {
  title: string;
  source: string;
  url: string;
  lat: number;
  lng: number;
  category: "accident" | "research";
  publishedAt: string;
  summary: string;
}

// Major world cities for geo-coding news by keyword matching
const cityCoords: Record<string, { lat: number; lng: number }> = {
  "new york": { lat: 40.71, lng: -74.01 },
  "los angeles": { lat: 34.05, lng: -118.24 },
  "london": { lat: 51.51, lng: -0.13 },
  "paris": { lat: 48.85, lng: 2.35 },
  "tokyo": { lat: 35.68, lng: 139.69 },
  "beijing": { lat: 39.90, lng: 116.40 },
  "mumbai": { lat: 19.08, lng: 72.88 },
  "delhi": { lat: 28.61, lng: 77.21 },
  "sydney": { lat: -33.87, lng: 151.21 },
  "moscow": { lat: 55.76, lng: 37.62 },
  "berlin": { lat: 52.52, lng: 13.40 },
  "cairo": { lat: 30.04, lng: 31.24 },
  "são paulo": { lat: -23.55, lng: -46.63 },
  "rio de janeiro": { lat: -22.91, lng: -43.17 },
  "mexico city": { lat: 19.43, lng: -99.13 },
  "lagos": { lat: 6.52, lng: 3.38 },
  "istanbul": { lat: 41.01, lng: 28.98 },
  "singapore": { lat: 1.35, lng: 103.82 },
  "dubai": { lat: 25.20, lng: 55.27 },
  "toronto": { lat: 43.65, lng: -79.38 },
  "seoul": { lat: 37.57, lng: 126.98 },
  "buenos aires": { lat: -34.61, lng: -58.38 },
  "jakarta": { lat: -6.21, lng: 106.85 },
  "bangkok": { lat: 13.76, lng: 100.50 },
  "madrid": { lat: 40.42, lng: -3.70 },
  "nairobi": { lat: -1.29, lng: 36.82 },
  "riyadh": { lat: 24.71, lng: 46.68 },
  "amsterdam": { lat: 52.37, lng: 4.90 },
  "vienna": { lat: 48.21, lng: 16.37 },
  "athens": { lat: 37.98, lng: 23.73 },
  "lisbon": { lat: 38.72, lng: -9.14 },
  "warsaw": { lat: 52.23, lng: 21.01 },
  "prague": { lat: 50.08, lng: 14.44 },
  "budapest": { lat: 47.50, lng: 19.04 },
  "dublin": { lat: 53.35, lng: -6.26 },
  "brussels": { lat: 50.85, lng: 4.35 },
  "zurich": { lat: 47.37, lng: 8.55 },
  "manila": { lat: 14.60, lng: 120.98 },
  "hanoi": { lat: 21.03, lng: 105.85 },
  "kuala lumpur": { lat: 3.14, lng: 101.69 },
  "vancouver": { lat: 49.28, lng: -123.12 },
  "montreal": { lat: 45.50, lng: -73.57 },
  "chicago": { lat: 41.88, lng: -87.63 },
  "houston": { lat: 29.76, lng: -95.37 },
  "miami": { lat: 25.76, lng: -80.19 },
  "seattle": { lat: 47.61, lng: -122.33 },
  "san francisco": { lat: 37.77, lng: -122.42 },
  "washington": { lat: 38.90, lng: -77.04 },
  "boston": { lat: 42.36, lng: -71.06 },
  "atlanta": { lat: 33.75, lng: -84.39 },
  "dallas": { lat: 32.78, lng: -96.80 },
  "phoenix": { lat: 33.45, lng: -112.07 },
  "philadelphia": { lat: 39.95, lng: -75.17 },
  "tel aviv": { lat: 32.08, lng: 34.78 },
  "tehran": { lat: 35.69, lng: 51.39 },
  "baghdad": { lat: 33.31, lng: 44.36 },
  "karachi": { lat: 24.86, lng: 67.01 },
  "dhaka": { lat: 23.81, lng: 90.41 },
  "shanghai": { lat: 31.23, lng: 121.47 },
  "hong kong": { lat: 22.32, lng: 114.17 },
  "taipei": { lat: 25.03, lng: 121.57 },
  "osaka": { lat: 34.69, lng: 135.50 },
  "melbourne": { lat: -37.81, lng: 144.96 },
  "cape town": { lat: -33.92, lng: 18.42 },
  "johannesburg": { lat: -26.20, lng: 28.05 },
  "nairobi": { lat: -1.29, lng: 36.82 },
  "casablanca": { lat: 33.57, lng: -7.59 },
  "algiers": { lat: 36.75, lng: 3.06 },
  "helsinki": { lat: 60.17, lng: 24.94 },
  "oslo": { lat: 59.91, lng: 10.75 },
  "stockholm": { lat: 59.33, lng: 18.07 },
  "copenhagen": { lat: 55.68, lng: 12.57 },
  "doha": { lat: 25.29, lng: 51.53 },
  "kuwait city": { lat: 29.38, lng: 47.97 },
  "bogotá": { lat: 4.71, lng: -74.07 },
  "lima": { lat: -12.05, lng: -77.04 },
  "santiago": { lat: -33.45, lng: -70.67 },
  "havana": { lat: 23.13, lng: -82.36 },
  "panama city": { lat: 8.98, lng: -79.52 },
  "kiev": { lat: 50.45, lng: 30.52 },
  "kyiv": { lat: 50.45, lng: 30.52 },
  "minsk": { lat: 53.90, lng: 27.57 },
  "bucharest": { lat: 44.43, lng: 26.10 },
  "sofia": { lat: 42.70, lng: 23.32 },
  "belgrade": { lat: 44.79, lng: 20.46 },
  "zagreb": { lat: 45.81, lng: 15.98 },
  "reykjavik": { lat: 64.13, lng: -21.94 },
  "wellington": { lat: -41.29, lng: 174.78 },
  "auckland": { lat: -36.85, lng: 174.76 },
  "perth": { lat: -31.95, lng: 115.86 },
  "brisbane": { lat: -27.47, lng: 153.02 },
  "adelaide": { lat: -34.93, lng: 138.60 },
  "kabul": { lat: 34.53, lng: 69.17 },
  "damascus": { lat: 33.51, lng: 36.29 },
  "beirut": { lat: 33.89, lng: 35.50 },
  "amman": { lat: 31.95, lng: 35.91 },
  "baku": { lat: 40.37, lng: 49.84 },
  "tbilisi": { lat: 41.69, lng: 44.83 },
  "almaty": { lat: 43.22, lng: 76.85 },
  "tashkent": { lat: 41.31, lng: 69.24 },
  "ulaanbaatar": { lat: 47.92, lng: 106.92 },
  "kathmandu": { lat: 27.71, lng: 85.32 },
  "colombo": { lat: 6.93, lng: 79.86 },
  "yangon": { lat: 16.84, lng: 96.17 },
  "phnom penh": { lat: 11.56, lng: 104.93 },
  "chicago": { lat: 41.88, lng: -87.63 },
  "detroit": { lat: 42.33, lng: -83.05 },
  "san diego": { lat: 32.72, lng: -117.16 },
  "portland": { lat: 45.52, lng: -122.67 },
  "las vegas": { lat: 36.17, lng: -115.14 },
  "barcelona": { lat: 41.39, lng: 2.17 },
  "milan": { lat: 45.46, lng: 9.19 },
  "rome": { lat: 41.90, lng: 12.50 },
  "naples": { lat: 40.85, lng: 14.27 },
  "hamburg": { lat: 53.55, lng: 9.99 },
  "munich": { lat: 48.14, lng: 11.58 },
  "frankfurt": { lat: 50.11, lng: 8.68 },
  "glasgow": { lat: 55.86, lng: -4.25 },
  "manchester": { lat: 53.48, lng: -2.24 },
  "edinburgh": { lat: 55.95, lng: -3.19 },
  "birmingham": { lat: 52.49, lng: -1.90 },
  "liverpool": { lat: 53.41, lng: -2.99 },
  "lyon": { lat: 45.76, lng: 4.84 },
  "marseille": { lat: 43.30, lng: 5.37 },
  "nice": { lat: 43.70, lng: 7.26 },
  "valencia": { lat: 39.47, lng: -0.38 },
  "seville": { lat: 37.39, lng: -5.98 },
  "porto": { lat: 41.16, lng: -8.61 },
  "rotterdam": { lat: 51.92, lng: 4.48 },
  "antwerp": { lat: 51.22, lng: 4.40 },
  "geneva": { lat: 46.20, lng: 6.14 },
  "florence": { lat: 43.77, lng: 11.25 },
  "venice": { lat: 45.44, lng: 12.32 },
  "krakow": { lat: 50.06, lng: 19.94 },
  "st petersburg": { lat: 59.93, lng: 30.34 },
  "yekaterinburg": { lat: 56.84, lng: 60.61 },
  "novosibirsk": { lat: 55.00, lng: 82.93 },
  "vladivostok": { lat: 43.12, lng: 131.89 },
  "chennai": { lat: 13.08, lng: 80.27 },
  "kolkata": { lat: 22.57, lng: 88.36 },
  "bengaluru": { lat: 12.97, lng: 77.59 },
  "hyderabad": { lat: 17.39, lng: 78.49 },
  "ahmedabad": { lat: 23.03, lng: 72.58 },
  "pune": { lat: 18.52, lng: 73.85 },
  "jaipur": { lat: 26.91, lng: 75.79 },
  "lahore": { lat: 31.55, lng: 74.34 },
  "karachi": { lat: 24.86, lng: 67.01 },
  "islamabad": { lat: 33.68, lng: 73.05 },
  "chongqing": { lat: 29.43, lng: 106.91 },
  "guangzhou": { lat: 23.13, lng: 113.26 },
  "shenzhen": { lat: 22.54, lng: 114.06 },
  "chengdu": { lat: 30.57, lng: 104.07 },
  "wuhan": { lat: 30.59, lng: 114.31 },
  "nanjing": { lat: 32.06, lng: 118.80 },
  "hangzhou": { lat: 30.27, lng: 120.15 },
  "qingdao": { lat: 36.07, lng: 120.38 },
  "harbin": { lat: 45.80, lng: 126.53 },
  "fukuoka": { lat: 33.59, lng: 130.40 },
  "sapporo": { lat: 43.06, lng: 141.35 },
  "busan": { lat: 35.18, lng: 129.08 },
  "incheon": { lat: 37.46, lng: 126.70 },
  "bandung": { lat: -6.91, lng: 107.61 },
  "surabaya": { lat: -7.0, lng: 112.75 },
  "medan": { lat: 3.59, lng: 98.67 },
  "chittagong": { lat: 22.34, lng: 91.82 },
  "tehran": { lat: 35.69, lng: 51.39 },
  "riyadh": { lat: 24.71, lng: 46.68 },
  "jeddah": { lat: 21.49, lng: 39.19 },
  "muscat": { lat: 23.59, lng: 58.38 },
  "sanaa": { lat: 15.37, lng: 44.19 },
  "addis ababa": { lat: 9.03, lng: 38.74 },
  "kampala": { lat: 0.35, lng: 32.57 },
  "dar es salaam": { lat: -6.82, lng: 39.28 },
  "accra": { lat: 5.60, lng: -0.19 },
  "dakar": { lat: 14.72, lng: -17.45 },
  "abidjan": { lat: 5.36, lng: -4.01 },
  "maputo": { lat: -25.97, lng: 32.57 },
  "harare": { lat: -17.83, lng: 31.05 },
  "luanda": { lat: -8.84, lng: 13.29 },
  "windhoek": { lat: -22.56, lng: 17.08 },
  "pretoria": { lat: -25.74, lng: 28.19 },
  "durban": { lat: -29.86, lng: 31.03 },
  "antananarivo": { lat: -18.88, lng: 47.52 },
  "hobart": { lat: -42.88, lng: 147.33 },
  "darwin": { lat: -12.46, lng: 130.84 },
};

// Country name to approximate capital coordinates (fallback when city not found)
const countryCoords: Record<string, { lat: number; lng: number }> = {
  "united states": { lat: 39.0, lng: -98.0 },
  "uk": { lat: 54.0, lng: -2.0 },
  "united kingdom": { lat: 54.0, lng: -2.0 },
  "russia": { lat: 61.0, lng: 90.0 },
  "china": { lat: 35.0, lng: 104.0 },
  "india": { lat: 22.0, lng: 79.0 },
  "japan": { lat: 36.0, lng: 138.0 },
  "germany": { lat: 51.0, lng: 10.0 },
  "france": { lat: 46.0, lng: 2.0 },
  "brazil": { lat: -10.0, lng: -55.0 },
  "canada": { lat: 56.0, lng: -106.0 },
  "australia": { lat: -25.0, lng: 134.0 },
  "mexico": { lat: 23.0, lng: -102.0 },
  "south korea": { lat: 36.0, lng: 128.0 },
  "indonesia": { lat: -2.0, lng: 118.0 },
  "turkey": { lat: 39.0, lng: 35.0 },
  "saudi arabia": { lat: 24.0, lng: 45.0 },
  "south africa": { lat: -30.0, lng: 24.0 },
  "nigeria": { lat: 9.0, lng: 8.0 },
  "egypt": { lat: 27.0, lng: 30.0 },
  "iran": { lat: 32.0, lng: 53.0 },
  "pakistan": { lat: 30.0, lng: 70.0 },
  "bangladesh": { lat: 24.0, lng: 90.0 },
  "vietnam": { lat: 16.0, lng: 108.0 },
  "philippines": { lat: 13.0, lng: 122.0 },
  "thailand": { lat: 15.0, lng: 101.0 },
  "malaysia": { lat: 4.0, lng: 102.0 },
  "singapore": { lat: 1.35, lng: 103.82 },
  "spain": { lat: 40.0, lng: -4.0 },
  "italy": { lat: 42.0, lng: 12.0 },
  "netherlands": { lat: 52.0, lng: 5.0 },
  "sweden": { lat: 62.0, lng: 15.0 },
  "norway": { lat: 62.0, lng: 10.0 },
  "finland": { lat: 64.0, lng: 26.0 },
  "denmark": { lat: 56.0, lng: 9.0 },
  "poland": { lat: 52.0, lng: 19.0 },
  "ukraine": { lat: 49.0, lng: 32.0 },
  "argentina": { lat: -34.0, lng: -64.0 },
  "chile": { lat: -35.0, lng: -71.0 },
  "colombia": { lat: 4.0, lng: -73.0 },
  "peru": { lat: -10.0, lng: -76.0 },
  "israel": { lat: 31.0, lng: 35.0 },
  "iraq": { lat: 33.0, lng: 44.0 },
  "afghanistan": { lat: 34.0, lng: 67.0 },
  "kenya": { lat: 0.0, lng: 38.0 },
  "ethiopia": { lat: 9.0, lng: 40.0 },
  "morocco": { lat: 32.0, lng: -6.0 },
  "algeria": { lat: 28.0, lng: 2.0 },
  "greece": { lat: 39.0, lng: 22.0 },
  "portugal": { lat: 39.0, lng: -8.0 },
  "austria": { lat: 47.0, lng: 14.0 },
  "switzerland": { lat: 47.0, lng: 8.0 },
  "belgium": { lat: 50.0, lng: 4.0 },
  "ireland": { lat: 53.0, lng: -8.0 },
  "czech republic": { lat: 49.0, lng: 16.0 },
  "romania": { lat: 46.0, lng: 24.0 },
  "hungary": { lat: 47.0, lng: 19.0 },
  "new zealand": { lat: -42.0, lng: 174.0 },
  "uae": { lat: 24.0, lng: 54.0 },
  "qatar": { lat: 25.0, lng: 51.0 },
  "kuwait": { lat: 29.0, lng: 47.0 },
};

function findCoords(text: string): { lat: number; lng: number } | null {
  const lower = text.toLowerCase();
  // Try city match first (longer names first for specificity)
  const cityNames = Object.keys(cityCoords).sort((a, b) => b.length - a.length);
  for (const city of cityNames) {
    if (lower.includes(city)) return cityCoords[city];
  }
  // Try country match
  for (const country of Object.keys(countryCoords)) {
    if (lower.includes(country)) return countryCoords[country];
  }
  return null;
}

function categorize(text: string): "accident" | "research" {
  const lower = text.toLowerCase();
  const accidentWords = [
    "accident", "crash", "collision", "fire", "explosion", "flood", "earthquake",
    "storm", "hurricane", "eruption", "attack", "blast", "wreck", "derail",
    "collapse", "landslide", "tsunami", "tornado", "wildfire", "casualt",
    "dead", "killed", "injured", "wounded", "disaster", "emergency", "evacuat",
    "outage", "leak", "spill", "crisis", "violence", "shooting", "bomb",
    "strike", "protest", "clash", "raid", "siege", "hostage",
  ];
  const researchWords = [
    "research", "study", "science", "technology", "ai", "quantum", "space",
    "satellite", "launch", "discovery", "innovation", "breakthrough", "lab",
    "university", "scientists", "medical", "treatment", "vaccine", "genome",
    "robotics", "battery", "solar", "hydrogen", "fusion", "biotech", "nanotech",
    "climate study", "renewable", "carbon capture", "deep-sea", "neuroscience",
  ];
  let accScore = 0;
  let resScore = 0;
  for (const w of accidentWords) if (lower.includes(w)) accScore++;
  for (const w of researchWords) if (lower.includes(w)) resScore++;
  return accScore >= resScore ? "accident" : "research";
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  const GNEWS_API_KEY = Deno.env.get("GNEWS_API_KEY");

  // If no API key configured, return empty with a helpful message
  if (!GNEWS_API_KEY) {
    return new Response(
      JSON.stringify({
        items: [],
        error: "GNEWS_API_KEY not configured. Add it in Supabase Edge Function secrets.",
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    // Fetch breaking news + world news from GNews (free tier: 100 requests/day)
    // "breaking-news" and "world" topics give us real, current articles with URLs
    const topics = ["breaking-news", "world", "nation", "technology", "science"];
    const allItems: NewsItem[] = [];
    const seenUrls = new Set<string>();

    for (const topic of topics) {
      if (allItems.length >= 80) break;
      try {
        const url = `https://gnews.io/api/v4/top-headlines?topic=${topic}&lang=en&max=30&apikey=${GNEWS_API_KEY}`;
        const res = await fetch(url);
        if (!res.ok) continue;
        const data = await res.json();
        if (!data.articles) continue;

        for (const article of data.articles) {
          if (allItems.length >= 80) break;
          // MUST have a real article URL — skip if missing or invalid
          if (!article.url || !article.url.startsWith("http")) continue;
          // Deduplicate
          if (seenUrls.has(article.url)) continue;
          seenUrls.add(article.url);

          // Build text for geo-coding: title + description + source name
          const geoText = `${article.title} ${article.description || ""} ${article.source?.name || ""}`;
          const coords = findCoords(geoText);
          if (!coords) continue; // Skip items we can't geo-locate

          const fullText = `${article.title} ${article.description || ""}`;
          const category = categorize(fullText);

          allItems.push({
            title: article.title,
            source: article.source?.name || "Unknown",
            url: article.url,
            lat: coords.lat,
            lng: coords.lng,
            category,
            publishedAt: article.publishedAt || new Date().toISOString(),
            summary: (article.description || "").slice(0, 300),
          });
        }
      } catch {
        // Individual topic fetch failure — continue to next topic
      }
    }

    return new Response(
      JSON.stringify({ items: allItems, count: allItems.length }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
