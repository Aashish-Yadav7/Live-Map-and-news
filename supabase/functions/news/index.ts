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

// ── Geo-coding tables ─────────────────────────────────────────────────────────

const CITIES: [string, number, number][] = [
  // [name, lat, lng] — longer names first for better specificity
  ["new york city", 40.71, -74.01], ["new york", 40.71, -74.01],
  ["los angeles", 34.05, -118.24], ["san francisco", 37.77, -122.42],
  ["washington dc", 38.90, -77.04], ["washington", 38.90, -77.04],
  ["chicago", 41.88, -87.63], ["houston", 29.76, -95.37],
  ["miami", 25.76, -80.19], ["boston", 42.36, -71.06],
  ["seattle", 47.61, -122.33], ["atlanta", 33.75, -84.39],
  ["dallas", 32.78, -96.80], ["phoenix", 33.45, -112.07],
  ["philadelphia", 39.95, -75.17], ["san diego", 32.72, -117.16],
  ["las vegas", 36.17, -115.14], ["portland", 45.52, -122.67],
  ["detroit", 42.33, -83.05], ["minneapolis", 44.98, -93.27],
  ["denver", 39.74, -104.98], ["baltimore", 39.29, -76.61],
  ["kansas city", 39.10, -94.58], ["nashville", 36.16, -86.78],
  ["london", 51.51, -0.13], ["paris", 48.85, 2.35],
  ["berlin", 52.52, 13.40], ["madrid", 40.42, -3.70],
  ["barcelona", 41.39, 2.17], ["rome", 41.90, 12.50],
  ["milan", 45.46, 9.19], ["amsterdam", 52.37, 4.90],
  ["brussels", 50.85, 4.35], ["vienna", 48.21, 16.37],
  ["zurich", 47.37, 8.55], ["geneva", 46.20, 6.14],
  ["stockholm", 59.33, 18.07], ["oslo", 59.91, 10.75],
  ["helsinki", 60.17, 24.94], ["copenhagen", 55.68, 12.57],
  ["dublin", 53.35, -6.26], ["lisbon", 38.72, -9.14],
  ["athens", 37.98, 23.73], ["warsaw", 52.23, 21.01],
  ["prague", 50.08, 14.44], ["budapest", 47.50, 19.04],
  ["bucharest", 44.43, 26.10], ["kyiv", 50.45, 30.52],
  ["kiev", 50.45, 30.52], ["moscow", 55.76, 37.62],
  ["st. petersburg", 59.93, 30.34], ["st petersburg", 59.93, 30.34],
  ["minsk", 53.90, 27.57], ["belgrade", 44.79, 20.46],
  ["zagreb", 45.81, 15.98], ["sofia", 42.70, 23.32],
  ["frankfurt", 50.11, 8.68], ["hamburg", 53.55, 9.99],
  ["munich", 48.14, 11.58], ["glasgow", 55.86, -4.25],
  ["manchester", 53.48, -2.24], ["birmingham", 52.49, -1.90],
  ["liverpool", 53.41, -2.99], ["edinburgh", 55.95, -3.19],
  ["lyon", 45.76, 4.84], ["marseille", 43.30, 5.37],
  ["naples", 40.85, 14.27], ["venice", 45.44, 12.32],
  ["florence", 43.77, 11.25], ["rotterdam", 51.92, 4.48],
  ["tokyo", 35.68, 139.69], ["osaka", 34.69, 135.50],
  ["sapporo", 43.06, 141.35], ["fukuoka", 33.59, 130.40],
  ["beijing", 39.90, 116.40], ["shanghai", 31.23, 121.47],
  ["guangzhou", 23.13, 113.26], ["shenzhen", 22.54, 114.06],
  ["hong kong", 22.32, 114.17], ["chengdu", 30.57, 104.07],
  ["wuhan", 30.59, 114.31], ["chongqing", 29.43, 106.91],
  ["nanjing", 32.06, 118.80], ["xi'an", 34.27, 108.95],
  ["taipei", 25.03, 121.57], ["seoul", 37.57, 126.98],
  ["busan", 35.18, 129.08], ["incheon", 37.46, 126.70],
  ["mumbai", 19.08, 72.88], ["delhi", 28.61, 77.21],
  ["new delhi", 28.61, 77.21], ["bangalore", 12.97, 77.59],
  ["bengaluru", 12.97, 77.59], ["hyderabad", 17.39, 78.49],
  ["chennai", 13.08, 80.27], ["kolkata", 22.57, 88.36],
  ["ahmedabad", 23.03, 72.58], ["pune", 18.52, 73.85],
  ["jaipur", 26.91, 75.79],
  ["sydney", -33.87, 151.21], ["melbourne", -37.81, 144.96],
  ["brisbane", -27.47, 153.02], ["perth", -31.95, 115.86],
  ["adelaide", -34.93, 138.60], ["auckland", -36.85, 174.76],
  ["wellington", -41.29, 174.78],
  ["toronto", 43.65, -79.38], ["montreal", 45.50, -73.57],
  ["vancouver", 49.28, -123.12], ["calgary", 51.05, -114.06],
  ["mexico city", 19.43, -99.13], ["guadalajara", 20.68, -103.35],
  ["sao paulo", -23.55, -46.63], ["são paulo", -23.55, -46.63],
  ["rio de janeiro", -22.91, -43.17], ["brasilia", -15.78, -47.93],
  ["buenos aires", -34.61, -58.38], ["santiago", -33.45, -70.67],
  ["bogota", 4.71, -74.07], ["bogotá", 4.71, -74.07],
  ["lima", -12.05, -77.04], ["caracas", 10.49, -66.88],
  ["havana", 23.13, -82.36],
  ["istanbul", 41.01, 28.98], ["ankara", 39.92, 32.85],
  ["dubai", 25.20, 55.27], ["abu dhabi", 24.47, 54.37],
  ["riyadh", 24.71, 46.68], ["jeddah", 21.49, 39.19],
  ["doha", 25.29, 51.53], ["kuwait city", 29.38, 47.97],
  ["muscat", 23.59, 58.38], ["tel aviv", 32.08, 34.78],
  ["jerusalem", 31.78, 35.22], ["amman", 31.95, 35.91],
  ["beirut", 33.89, 35.50], ["damascus", 33.51, 36.29],
  ["baghdad", 33.31, 44.36], ["tehran", 35.69, 51.39],
  ["cairo", 30.04, 31.24], ["alexandria", 31.20, 29.92],
  ["lagos", 6.52, 3.38], ["abuja", 9.07, 7.40],
  ["nairobi", -1.29, 36.82], ["addis ababa", 9.03, 38.74],
  ["johannesburg", -26.20, 28.05], ["cape town", -33.92, 18.42],
  ["pretoria", -25.74, 28.19], ["durban", -29.86, 31.03],
  ["dar es salaam", -6.82, 39.28], ["kampala", 0.35, 32.57],
  ["accra", 5.60, -0.19], ["dakar", 14.72, -17.45],
  ["casablanca", 33.57, -7.59], ["algiers", 36.75, 3.06],
  ["tunis", 36.82, 10.17],
  ["singapore", 1.35, 103.82], ["kuala lumpur", 3.14, 101.69],
  ["jakarta", -6.21, 106.85], ["bangkok", 13.76, 100.50],
  ["hanoi", 21.03, 105.85], ["ho chi minh", 10.82, 106.63],
  ["manila", 14.60, 120.98], ["yangon", 16.84, 96.17],
  ["phnom penh", 11.56, 104.93], ["dhaka", 23.81, 90.41],
  ["karachi", 24.86, 67.01], ["lahore", 31.55, 74.34],
  ["islamabad", 33.68, 73.05], ["kabul", 34.53, 69.17],
  ["kathmandu", 27.71, 85.32], ["colombo", 6.93, 79.86],
  ["baku", 40.37, 49.84], ["tbilisi", 41.69, 44.83],
  ["yerevan", 40.18, 44.51], ["tashkent", 41.31, 69.24],
  ["almaty", 43.22, 76.85], ["astana", 51.19, 71.45],
  ["ulaanbaatar", 47.92, 106.92], ["vladivostok", 43.12, 131.89],
  ["novosibirsk", 55.00, 82.93],
  ["reykjavik", 64.13, -21.94],
];

// Countries — requires word-boundary match to avoid false positives (e.g. "iran" inside "ukrainIAN")
const COUNTRIES: [string, number, number][] = [
  ["united states", 39.0, -98.0], ["united kingdom", 54.0, -2.0],
  ["united arab emirates", 24.0, 54.0],
  ["russia", 61.0, 90.0], ["china", 35.0, 104.0],
  ["india", 22.0, 79.0], ["japan", 36.0, 138.0],
  ["germany", 51.0, 10.0], ["france", 46.0, 2.0],
  ["brazil", -10.0, -55.0], ["canada", 56.0, -106.0],
  ["australia", -25.0, 134.0], ["mexico", 23.0, -102.0],
  ["south korea", 36.0, 128.0], ["north korea", 40.0, 127.0],
  ["indonesia", -2.0, 118.0], ["turkey", 39.0, 35.0],
  ["saudi arabia", 24.0, 45.0], ["south africa", -30.0, 24.0],
  ["nigeria", 9.0, 8.0], ["egypt", 27.0, 30.0],
  ["iran", 32.0, 53.0], ["iraq", 33.0, 44.0],
  ["pakistan", 30.0, 70.0], ["bangladesh", 24.0, 90.0],
  ["vietnam", 16.0, 108.0], ["philippines", 13.0, 122.0],
  ["thailand", 15.0, 101.0], ["malaysia", 4.0, 102.0],
  ["spain", 40.0, -4.0], ["italy", 42.0, 12.0],
  ["netherlands", 52.0, 5.0], ["sweden", 62.0, 15.0],
  ["norway", 62.0, 10.0], ["finland", 64.0, 26.0],
  ["denmark", 56.0, 9.0], ["poland", 52.0, 19.0],
  ["ukraine", 49.0, 32.0], ["argentina", -34.0, -64.0],
  ["chile", -35.0, -71.0], ["colombia", 4.0, -73.0],
  ["peru", -10.0, -76.0], ["israel", 31.0, 35.0],
  ["afghanistan", 34.0, 67.0], ["kenya", 0.0, 38.0],
  ["ethiopia", 9.0, 40.0], ["morocco", 32.0, -6.0],
  ["algeria", 28.0, 2.0], ["greece", 39.0, 22.0],
  ["portugal", 39.0, -8.0], ["austria", 47.0, 14.0],
  ["switzerland", 47.0, 8.0], ["belgium", 50.0, 4.0],
  ["ireland", 53.0, -8.0], ["czech", 49.0, 16.0],
  ["romania", 46.0, 24.0], ["hungary", 47.0, 19.0],
  ["new zealand", -42.0, 174.0], ["qatar", 25.0, 51.0],
  ["kuwait", 29.0, 47.0], ["taiwan", 23.5, 121.0],
  ["myanmar", 17.0, 96.0], ["cambodia", 12.0, 105.0],
  ["nepal", 28.0, 84.0], ["sri lanka", 7.0, 81.0],
  ["georgia", 42.0, 43.5], ["armenia", 40.0, 45.0],
  ["azerbaijan", 40.0, 47.5], ["syria", 35.0, 38.0],
  ["lebanon", 33.9, 35.5], ["jordan", 31.0, 36.0],
  ["yemen", 15.0, 48.0], ["oman", 22.0, 57.0],
  ["bahrain", 26.0, 50.5], ["libya", 27.0, 17.0],
  ["tunisia", 34.0, 9.0], ["sudan", 15.0, 30.0],
  ["somalia", 6.0, 46.0], ["ghana", 8.0, -1.0],
  ["cameroon", 6.0, 12.0], ["senegal", 14.0, -14.0],
  ["tanzania", -6.0, 35.0], ["uganda", 1.0, 32.0],
  ["zimbabwe", -20.0, 30.0], ["mozambique", -18.0, 35.0],
  ["angola", -12.0, 18.0], ["zambia", -13.0, 30.0],
  ["kazakh", 48.0, 68.0], ["uzbek", 41.0, 64.0],
];

function findCoords(text: string): { lat: number; lng: number } | null {
  const lower = text.toLowerCase();
  // Cities: sorted longest-first for specificity (already ordered above)
  for (const [name, lat, lng] of CITIES) {
    if (lower.includes(name)) return { lat, lng };
  }
  // Countries: use word-boundary match to avoid false positives
  for (const [name, lat, lng] of COUNTRIES) {
    const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    if (new RegExp(`\\b${escaped}\\b`, "i").test(lower)) return { lat, lng };
  }
  return null;
}

function categorize(text: string): "accident" | "research" {
  const lower = text.toLowerCase();
  let acc = 0, res = 0;
  for (const w of ["accident","crash","collision","fire","explosion","flood","earthquake","storm","hurricane","eruption","attack","blast","derail","collapse","landslide","tsunami","tornado","wildfire","dead","killed","injured","wounded","disaster","emergency","evacuat","shooting","bomb","conflict","war","battle","airstrike","strike","siege","hostage","drought","famine","chemical","nuclear","fallout"]) {
    if (lower.includes(w)) acc++;
  }
  for (const w of ["research","study","science","technology"," ai ","artificial intelligence","quantum","space","satellite","launch","discovery","innovation","breakthrough","laboratory","university","scientists","medical","treatment","vaccine","genome","robotics","solar","fusion","biotech","nanotech","climate","renewable","carbon","neuroscience","telescope","probe","experiment","trial"]) {
    if (lower.includes(w)) res++;
  }
  return acc >= res ? "accident" : "research";
}

function processArticle(
  title: string,
  description: string,
  url: string,
  sourceName: string,
  publishedAt: string
): NewsItem | null {
  if (!title || !url || !url.startsWith("http")) return null;
  // Reject generic search-engine links
  if (url.includes("google.com/search") || url.includes("bing.com/search")) return null;
  const geoText = `${title} ${description} ${sourceName}`;
  const coords = findCoords(geoText);
  if (!coords) return null;
  return {
    title: title.trim(),
    source: sourceName,
    url,
    lat: coords.lat,
    lng: coords.lng,
    category: categorize(`${title} ${description}`),
    publishedAt: publishedAt || new Date().toISOString(),
    summary: description ? description.slice(0, 300) : "",
  };
}

// ── API fetchers ──────────────────────────────────────────────────────────────

async function fetchGNews(apiKey: string): Promise<NewsItem[]> {
  // GNews v4 uses "token" param (NOT "apikey") — free tier: 100 req/day, 10 articles/req
  const topics = ["world", "breaking-news", "technology", "science", "nation"];
  const results: NewsItem[] = [];
  const seen = new Set<string>();
  for (const topic of topics) {
    if (results.length >= 60) break;
    try {
      const res = await fetch(
        `https://gnews.io/api/v4/top-headlines?topic=${topic}&lang=en&max=10&token=${apiKey}`
      );
      if (!res.ok) continue;
      const data = await res.json();
      for (const a of (data.articles || [])) {
        if (seen.has(a.url)) continue;
        seen.add(a.url);
        const item = processArticle(a.title, a.description || "", a.url, a.source?.name || "GNews", a.publishedAt);
        if (item) results.push(item);
      }
    } catch { /* skip failed topic */ }
  }
  return results;
}

async function fetchGuardian(apiKey: string): Promise<NewsItem[]> {
  // The Guardian Open Platform — free, unlimited, excellent quality
  const sections = ["world", "technology", "science", "us-news", "uk-news", "environment"];
  const results: NewsItem[] = [];
  const seen = new Set<string>();
  for (const section of sections) {
    if (results.length >= 40) break;
    try {
      const res = await fetch(
        `https://content.guardianapis.com/search?api-key=${apiKey}&section=${section}&show-fields=trailText&page-size=15&order-by=newest`
      );
      if (!res.ok) continue;
      const data = await res.json();
      for (const a of (data.response?.results || [])) {
        if (seen.has(a.webUrl)) continue;
        seen.add(a.webUrl);
        const desc = a.fields?.trailText || "";
        const item = processArticle(a.webTitle, desc, a.webUrl, "The Guardian", a.webPublicationDate);
        if (item) results.push(item);
      }
    } catch { /* skip */ }
  }
  return results;
}

async function fetchNYT(apiKey: string): Promise<NewsItem[]> {
  // NYT Top Stories API — free: 4000 req/day
  const sections = ["world", "technology", "science", "us", "health"];
  const results: NewsItem[] = [];
  const seen = new Set<string>();
  for (const section of sections) {
    if (results.length >= 40) break;
    try {
      const res = await fetch(
        `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`
      );
      if (!res.ok) continue;
      const data = await res.json();
      for (const a of (data.results || []).slice(0, 15)) {
        if (!a.url || seen.has(a.url)) continue;
        seen.add(a.url);
        const desc = a.abstract || a.summary || "";
        const item = processArticle(a.title, desc, a.url, "New York Times", a.published_date);
        if (item) results.push(item);
      }
    } catch { /* skip */ }
  }
  return results;
}

async function fetchNewsAPI(apiKey: string): Promise<NewsItem[]> {
  // NewsAPI.org — free developer tier: 100 req/day
  const results: NewsItem[] = [];
  const seen = new Set<string>();
  try {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&language=en&pageSize=50`
    );
    if (!res.ok) return results;
    const data = await res.json();
    for (const a of (data.articles || [])) {
      if (!a.url || seen.has(a.url)) continue;
      // NewsAPI sometimes returns "[Removed]" placeholder articles
      if (a.title === "[Removed]" || !a.url.startsWith("http")) continue;
      seen.add(a.url);
      const item = processArticle(a.title, a.description || "", a.url, a.source?.name || "NewsAPI", a.publishedAt);
      if (item) results.push(item);
    }
  } catch { /* skip */ }
  return results;
}

// ── Main handler ──────────────────────────────────────────────────────────────

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  const GNEWS_KEY = Deno.env.get("GNEWS_API_KEY");
  const GUARDIAN_KEY = Deno.env.get("GUARDIAN_API_KEY");
  const NYT_KEY = Deno.env.get("NYT_API_KEY");
  const NEWSAPI_KEY = Deno.env.get("NEWSAPI_KEY");

  // Need at least one key
  if (!GNEWS_KEY && !GUARDIAN_KEY && !NYT_KEY && !NEWSAPI_KEY) {
    return new Response(
      JSON.stringify({ items: [], error: "No news API keys configured. Add GNEWS_API_KEY, GUARDIAN_API_KEY, NYT_API_KEY, or NEWSAPI_KEY in Supabase secrets." }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    // Fetch from all configured sources in parallel
    const fetchers: Promise<NewsItem[]>[] = [];
    if (GNEWS_KEY) fetchers.push(fetchGNews(GNEWS_KEY));
    if (GUARDIAN_KEY) fetchers.push(fetchGuardian(GUARDIAN_KEY));
    if (NYT_KEY) fetchers.push(fetchNYT(NYT_KEY));
    if (NEWSAPI_KEY) fetchers.push(fetchNewsAPI(NEWSAPI_KEY));

    const batches = await Promise.allSettled(fetchers);

    const allItems: NewsItem[] = [];
    const seenUrls = new Set<string>();
    for (const batch of batches) {
      if (batch.status !== "fulfilled") continue;
      for (const item of batch.value) {
        if (!seenUrls.has(item.url)) {
          seenUrls.add(item.url);
          allItems.push(item);
        }
      }
    }

    // Shuffle so different sources are interleaved on the globe
    for (let i = allItems.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allItems[i], allItems[j]] = [allItems[j], allItems[i]];
    }

    return new Response(
      JSON.stringify({ items: allItems.slice(0, 120), count: allItems.length }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Unknown error", items: [] }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
