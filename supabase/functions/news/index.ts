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

const cities: { name: string; lat: number; lng: number }[] = [
  { name: "New York", lat: 40.71, lng: -74.01 },
  { name: "Los Angeles", lat: 34.05, lng: -118.24 },
  { name: "London", lat: 51.51, lng: -0.13 },
  { name: "Paris", lat: 48.85, lng: 2.35 },
  { name: "Tokyo", lat: 35.68, lng: 139.69 },
  { name: "Beijing", lat: 39.90, lng: 116.40 },
  { name: "Mumbai", lat: 19.08, lng: 72.88 },
  { name: "Sydney", lat: -33.87, lng: 151.21 },
  { name: "Moscow", lat: 55.76, lng: 37.62 },
  { name: "Berlin", lat: 52.52, lng: 13.40 },
  { name: "Cairo", lat: 30.04, lng: 31.24 },
  { name: "São Paulo", lat: -23.55, lng: -46.63 },
  { name: "Mexico City", lat: 19.43, lng: -99.13 },
  { name: "Lagos", lat: 6.52, lng: 3.38 },
  { name: "Istanbul", lat: 41.01, lng: 28.98 },
  { name: "Singapore", lat: 1.35, lng: 103.82 },
  { name: "Dubai", lat: 25.20, lng: 55.27 },
  { name: "Toronto", lat: 43.65, lng: -79.38 },
  { name: "Seoul", lat: 37.57, lng: 126.98 },
  { name: "Buenos Aires", lat: -34.61, lng: -58.38 },
  { name: "Jakarta", lat: -6.21, lng: 106.85 },
  { name: "Bangkok", lat: 13.76, lng: 100.50 },
  { name: "Madrid", lat: 40.42, lng: -3.70 },
  { name: "Nairobi", lat: -1.29, lng: 36.82 },
  { name: "Riyadh", lat: 24.71, lng: 46.68 },
  { name: "Stockholm", lat: 59.33, lng: 18.07 },
  { name: "Amsterdam", lat: 52.37, lng: 4.90 },
  { name: "Vienna", lat: 48.21, lng: 16.37 },
  { name: "Athens", lat: 37.98, lng: 23.73 },
  { name: "Lisbon", lat: 38.72, lng: -9.14 },
  { name: "Helsinki", lat: 60.17, lng: 24.94 },
  { name: "Oslo", lat: 59.91, lng: 10.75 },
  { name: "Copenhagen", lat: 55.68, lng: 12.57 },
  { name: "Warsaw", lat: 52.23, lng: 21.01 },
  { name: "Prague", lat: 50.08, lng: 14.44 },
  { name: "Budapest", lat: 47.50, lng: 19.04 },
  { name: "Dublin", lat: 53.35, lng: -6.26 },
  { name: "Brussels", lat: 50.85, lng: 4.35 },
  { name: "Zurich", lat: 47.37, lng: 8.55 },
  { name: "Manila", lat: 14.60, lng: 120.98 },
  { name: "Hanoi", lat: 21.03, lng: 105.85 },
  { name: "Kuala Lumpur", lat: 3.14, lng: 101.69 },
  { name: "Wellington", lat: -41.29, lng: 174.78 },
  { name: "Auckland", lat: -36.85, lng: 174.76 },
  { name: "Vancouver", lat: 49.28, lng: -123.12 },
  { name: "Montreal", lat: 45.50, lng: -73.57 },
  { name: "Chicago", lat: 41.88, lng: -87.63 },
  { name: "Houston", lat: 29.76, lng: -95.37 },
  { name: "Miami", lat: 25.76, lng: -80.19 },
  { name: "Seattle", lat: 47.61, lng: -122.33 },
  { name: "Denver", lat: 39.74, lng: -104.99 },
  { name: "Boston", lat: 42.36, lng: -71.06 },
  { name: "Atlanta", lat: 33.75, lng: -84.39 },
  { name: "San Francisco", lat: 37.77, lng: -122.42 },
  { name: "Phoenix", lat: 33.45, lng: -112.07 },
  { name: "Dallas", lat: 32.78, lng: -96.80 },
  { name: "Philadelphia", lat: 39.95, lng: -75.17 },
  { name: "Washington DC", lat: 38.90, lng: -77.04 },
  { name: "Las Vegas", lat: 36.17, lng: -115.14 },
  { name: "Detroit", lat: 42.33, lng: -83.05 },
  { name: "Minneapolis", lat: 44.98, lng: -93.27 },
  { name: "San Diego", lat: 32.72, lng: -117.16 },
  { name: "Portland", lat: 45.52, lng: -122.67 },
  { name: "Bogotá", lat: 4.71, lng: -74.07 },
  { name: "Lima", lat: -12.05, lng: -77.04 },
  { name: "Santiago", lat: -33.45, lng: -70.67 },
  { name: "Quito", lat: -0.18, lng: -78.47 },
  { name: "Caracas", lat: 10.49, lng: -66.88 },
  { name: "La Paz", lat: -16.50, lng: -68.13 },
  { name: "Montevideo", lat: -34.90, lng: -56.16 },
  { name: "Asunción", lat: -25.26, lng: -57.57 },
  { name: "Havana", lat: 23.13, lng: -82.36 },
  { name: "Kingston", lat: 17.97, lng: -76.79 },
  { name: "Panama City", lat: 8.98, lng: -79.52 },
  { name: "San José", lat: 9.93, lng: -84.08 },
  { name: "Guatemala City", lat: 14.63, lng: -90.51 },
  { name: "Tegucigalpa", lat: 14.07, lng: -87.21 },
  { name: "Accra", lat: 5.60, lng: -0.19 },
  { name: "Addis Ababa", lat: 9.03, lng: 38.74 },
  { name: "Kampala", lat: 0.35, lng: 32.57 },
  { name: "Dar es Salaam", lat: -6.82, lng: 39.28 },
  { name: "Casablanca", lat: 33.57, lng: -7.59 },
  { name: "Algiers", lat: 36.75, lng: 3.06 },
  { name: "Tunis", lat: 36.81, lng: 10.18 },
  { name: "Dakar", lat: 14.72, lng: -17.45 },
  { name: "Abidjan", lat: 5.36, lng: -4.01 },
  { name: "Maputo", lat: -25.97, lng: 32.57 },
  { name: "Harare", lat: -17.83, lng: 31.05 },
  { name: "Lusaka", lat: -15.39, lng: 28.32 },
  { name: "Kigali", lat: -1.95, lng: 30.06 },
  { name: "Kinshasa", lat: -4.32, lng: 15.31 },
  { name: "Tel Aviv", lat: 32.08, lng: 34.78 },
  { name: "Tehran", lat: 35.69, lng: 51.39 },
  { name: "Baghdad", lat: 33.31, lng: 44.36 },
  { name: "Karachi", lat: 24.86, lng: 67.01 },
  { name: "Dhaka", lat: 23.81, lng: 90.41 },
  { name: "Colombo", lat: 6.93, lng: 79.86 },
  { name: "Kathmandu", lat: 27.71, lng: 85.32 },
  { name: "Yangon", lat: 16.84, lng: 96.17 },
  { name: "Phnom Penh", lat: 11.56, lng: 104.93 },
  { name: "Vientiane", lat: 17.97, lng: 102.63 },
  { name: "Ulaanbaatar", lat: 47.92, lng: 106.92 },
  { name: "Almaty", lat: 43.22, lng: 76.85 },
  { name: "Tashkent", lat: 41.31, lng: 69.24 },
  { name: "Baku", lat: 40.37, lng: 49.84 },
  { name: "Tbilisi", lat: 41.69, lng: 44.83 },
  { name: "Yerevan", lat: 40.18, lng: 44.51 },
  { name: "Beirut", lat: 33.89, lng: 35.50 },
  { name: "Damascus", lat: 33.51, lng: 36.29 },
  { name: "Amman", lat: 31.95, lng: 35.91 },
  { name: "Kuwait City", lat: 29.38, lng: 47.97 },
  { name: "Doha", lat: 25.29, lng: 51.53 },
  { name: "Muscat", lat: 23.59, lng: 58.38 },
  { name: "Sanaa", lat: 15.37, lng: 44.19 },
  { name: "Adelaide", lat: -34.93, lng: 138.60 },
  { name: "Melbourne", lat: -37.81, lng: 144.96 },
  { name: "Brisbane", lat: -27.47, lng: 153.02 },
  { name: "Perth", lat: -31.95, lng: 115.86 },
  { name: "Christchurch", lat: -43.53, lng: 172.64 },
  { name: "Hamilton", lat: -37.79, lng: 175.28 },
  { name: "Reykjavik", lat: 64.13, lng: -21.94 },
  { name: "Riga", lat: 56.95, lng: 24.11 },
  { name: "Tallinn", lat: 59.44, lng: 24.75 },
  { name: "Vilnius", lat: 54.69, lng: 25.28 },
  { name: "Zagreb", lat: 45.81, lng: 15.98 },
  { name: "Ljubljana", lat: 46.06, lng: 14.51 },
  { name: "Sarajevo", lat: 43.85, lng: 18.41 },
  { name: "Belgrade", lat: 44.79, lng: 20.46 },
  { name: "Sofia", lat: 42.70, lng: 23.32 },
  { name: "Bucharest", lat: 44.43, lng: 26.10 },
  { name: "Kyiv", lat: 50.45, lng: 30.52 },
  { name: "Minsk", lat: 53.90, lng: 27.57 },
  { name: "Bergen", lat: 60.39, lng: 5.32 },
  { name: "Gothenburg", lat: 57.71, lng: 11.97 },
  { name: "Malmo", lat: 55.59, lng: 13.00 },
  { name: "Hamburg", lat: 53.55, lng: 9.99 },
  { name: "Munich", lat: 48.14, lng: 11.58 },
  { name: "Frankfurt", lat: 50.11, lng: 8.68 },
  { name: "Cologne", lat: 50.94, lng: 6.96 },
  { name: "Stuttgart", lat: 48.78, lng: 9.18 },
  { name: "Lyon", lat: 45.76, lng: 4.84 },
  { name: "Marseille", lat: 43.30, lng: 5.37 },
  { name: "Nice", lat: 43.70, lng: 7.26 },
  { name: "Barcelona", lat: 41.39, lng: 2.17 },
  { name: "Valencia", lat: 39.47, lng: -0.38 },
  { name: "Seville", lat: 37.39, lng: -5.98 },
  { name: "Bilbao", lat: 43.26, lng: -2.93 },
  { name: "Porto", lat: 41.16, lng: -8.61 },
  { name: "Glasgow", lat: 55.86, lng: -4.25 },
  { name: "Manchester", lat: 53.48, lng: -2.24 },
  { name: "Edinburgh", lat: 55.95, lng: -3.19 },
  { name: "Birmingham", lat: 52.49, lng: -1.90 },
  { name: "Liverpool", lat: 53.41, lng: -2.99 },
  { name: "Bristol", lat: 51.45, lng: -2.59 },
  { name: "Leeds", lat: 53.80, lng: -1.55 },
  { name: "Sheffield", lat: 53.38, lng: -1.47 },
  { name: "Newcastle", lat: 54.97, lng: -1.61 },
  { name: "Nottingham", lat: 52.95, lng: -1.15 },
  { name: "Cardiff", lat: 51.48, lng: -3.18 },
  { name: "Belfast", lat: 54.60, lng: -5.93 },
  { name: "Geneva", lat: 46.20, lng: 6.14 },
  { name: "Basel", lat: 47.56, lng: 7.58 },
  { name: "Lausanne", lat: 46.52, lng: 6.63 },
  { name: "Antwerp", lat: 51.22, lng: 4.40 },
  { name: "Ghent", lat: 51.05, lng: 3.72 },
  { name: "Rotterdam", lat: 51.92, lng: 4.48 },
  { name: "The Hague", lat: 52.07, lng: 4.30 },
  { name: "Utrecht", lat: 52.09, lng: 5.12 },
  { name: "Eindhoven", lat: 51.44, lng: 5.48 },
  { name: "Graz", lat: 47.07, lng: 15.44 },
  { name: "Salzburg", lat: 47.80, lng: 13.04 },
  { name: "Innsbruck", lat: 47.26, lng: 11.39 },
  { name: "Bologna", lat: 44.49, lng: 11.34 },
  { name: "Florence", lat: 43.77, lng: 11.25 },
  { name: "Venice", lat: 45.44, lng: 12.32 },
  { name: "Naples", lat: 40.85, lng: 14.27 },
  { name: "Turin", lat: 45.07, lng: 7.69 },
  { name: "Genoa", lat: 44.41, lng: 8.93 },
  { name: "Palermo", lat: 38.12, lng: 13.36 },
  { name: "Bari", lat: 41.12, lng: 16.87 },
  { name: "Thessaloniki", lat: 40.64, lng: 22.94 },
  { name: "Patras", lat: 38.25, lng: 21.73 },
  { name: "Heraklion", lat: 35.34, lng: 25.13 },
  { name: "Málaga", lat: 36.72, lng: -4.42 },
  { name: "Murcia", lat: 37.99, lng: -1.13 },
  { name: "Zaragoza", lat: 41.65, lng: -0.88 },
  { name: "Astana", lat: 51.13, lng: 71.43 },
  { name: "Novosibirsk", lat: 55.00, lng: 82.93 },
  { name: "Yekaterinburg", lat: 56.84, lng: 60.61 },
  { name: "St Petersburg", lat: 59.93, lng: 30.34 },
  { name: "Kazan", lat: 55.79, lng: 49.12 },
  { name: "Nizhny Novgorod", lat: 56.32, lng: 44.00 },
  { name: "Chelyabinsk", lat: 55.16, lng: 61.40 },
  { name: "Omsk", lat: 54.99, lng: 73.37 },
  { name: "Samara", lat: 53.20, lng: 50.15 },
  { name: "Rostov-on-Don", lat: 47.23, lng: 39.70 },
  { name: "Ufa", lat: 54.74, lng: 55.97 },
  { name: "Krasnoyarsk", lat: 56.01, lng: 92.85 },
  { name: "Vladivostok", lat: 43.12, lng: 131.89 },
  { name: "Sochi", lat: 43.60, lng: 39.73 },
  { name: "Pune", lat: 18.52, lng: 73.85 },
  { name: "Chennai", lat: 13.08, lng: 80.27 },
  { name: "Kolkata", lat: 22.57, lng: 88.36 },
  { name: "Hyderabad", lat: 17.39, lng: 78.49 },
  { name: "Bengaluru", lat: 12.97, lng: 77.59 },
  { name: "Ahmedabad", lat: 23.03, lng: 72.58 },
  { name: "Jaipur", lat: 26.91, lng: 75.79 },
  { name: "Lucknow", lat: 26.85, lng: 80.95 },
  { name: "Kanpur", lat: 26.45, lng: 80.33 },
  { name: "Nagpur", lat: 21.15, lng: 79.09 },
  { name: "Indore", lat: 22.72, lng: 75.86 },
  { name: "Bhopal", lat: 23.26, lng: 77.40 },
  { name: "Patna", lat: 25.61, lng: 85.14 },
  { name: "Surat", lat: 21.17, lng: 72.83 },
  { name: "Visakhapatnam", lat: 17.69, lng: 83.22 },
  { name: "Coimbatore", lat: 11.02, lng: 76.96 },
  { name: "Kochi", lat: 9.93, lng: 76.26 },
  { name: "Guangzhou", lat: 23.13, lng: 113.26 },
  { name: "Shenzhen", lat: 22.54, lng: 114.06 },
  { name: "Shanghai", lat: 31.23, lng: 121.47 },
  { name: "Chongqing", lat: 29.43, lng: 106.91 },
  { name: "Tianjin", lat: 39.34, lng: 117.36 },
  { name: "Wuhan", lat: 30.59, lng: 114.31 },
  { name: "Chengdu", lat: 30.57, lng: 104.07 },
  { name: "Nanjing", lat: 32.06, lng: 118.80 },
  { name: "Hangzhou", lat: 30.27, lng: 120.15 },
  { name: "Xi'an", lat: 34.27, lng: 108.95 },
  { name: "Suzhou", lat: 31.30, lng: 120.62 },
  { name: "Shenyang", lat: 41.81, lng: 123.43 },
  { name: "Qingdao", lat: 36.07, lng: 120.38 },
  { name: "Harbin", lat: 45.80, lng: 126.53 },
  { name: "Dalian", lat: 38.91, lng: 121.60 },
  { name: "Fukuoka", lat: 33.59, lng: 130.40 },
  { name: "Osaka", lat: 34.69, lng: 135.50 },
  { name: "Nagoya", lat: 35.17, lng: 136.88 },
  { name: "Sapporo", lat: 43.06, lng: 141.35 },
  { name: "Yokohama", lat: 35.44, lng: 139.64 },
  { name: "Kobe", lat: 34.69, lng: 135.19 },
  { name: "Kyoto", lat: 35.01, lng: 135.77 },
  { name: "Busan", lat: 35.18, lng: 129.08 },
  { name: "Incheon", lat: 37.46, lng: 126.70 },
  { name: "Daegu", lat: 35.87, lng: 128.60 },
  { name: "Daejeon", lat: 36.35, lng: 127.38 },
  { name: "Gwangju", lat: 35.16, lng: 126.92 },
  { name: "Bandung", lat: -6.91, lng: 107.61 },
  { name: "Medan", lat: 3.59, lng: 98.67 },
  { name: "Surabaya", lat: -7.0, lng: 112.75 },
  { name: "Makassar", lat: -5.15, lng: 119.43 },
  { name: "Chittagong", lat: 22.34, lng: 91.82 },
  { name: "Rawalpindi", lat: 33.60, lng: 73.05 },
  { name: "Lahore", lat: 31.55, lng: 74.34 },
  { name: "Multan", lat: 30.16, lng: 71.52 },
  { name: "Peshawar", lat: 34.02, lng: 71.58 },
  { name: "Faisalabad", lat: 31.25, lng: 73.09 },
  { name: "Kabul", lat: 34.53, lng: 69.17 },
  { name: "Bamako", lat: 12.65, lng: -8.00 },
  { name: "Ouagadougou", lat: 12.37, lng: -1.53 },
  { name: "Niamey", lat: 13.51, lng: 2.11 },
  { name: "Nouakchott", lat: 18.09, lng: -15.98 },
  { name: "Libreville", lat: 0.39, lng: 9.45 },
  { name: "Brazzaville", lat: -4.26, lng: 15.28 },
  { name: "Luanda", lat: -8.84, lng: 13.29 },
  { name: "Windhoek", lat: -22.56, lng: 17.08 },
  { name: "Gaborone", lat: -24.63, lng: 25.91 },
  { name: "Pretoria", lat: -25.74, lng: 28.19 },
  { name: "Cape Town", lat: -33.92, lng: 18.42 },
  { name: "Durban", lat: -29.86, lng: 31.03 },
  { name: "Antananarivo", lat: -18.88, lng: 47.52 },
  { name: "Port Louis", lat: -20.16, lng: 57.50 },
  { name: "Hobart", lat: -42.88, lng: 147.33 },
  { name: "Darwin", lat: -12.46, lng: 130.84 },
  { name: "Townsville", lat: -19.26, lng: 146.78 },
  { name: "Suva", lat: -18.14, lng: 178.44 },
  { name: "Port Moresby", lat: -9.44, lng: 147.18 },
  { name: "Honiara", lat: -9.43, lng: 159.96 },
  { name: "Apia", lat: -13.83, lng: -171.76 },
  { name: "Nuku'alofa", lat: -21.14, lng: -175.20 },
  { name: "Funafuti", lat: -8.52, lng: 179.20 },
];

const accidentHeadlines = [
  "Major highway collision leaves several injured near {city}",
  "Industrial fire breaks out at warehouse in {city}",
  "Flooding displaces hundreds of families in {city}",
  "Earthquake tremors felt across {city} region",
  "Building collapse reported in downtown {city}",
  "Chemical spill forces evacuation in {city}",
  "Train derailment causes major disruption near {city}",
  "Severe storm damages homes across {city}",
  "Power outage affects thousands in {city}",
  "Traffic accident closes main road in {city}",
  "Wildfire spreads toward residential area near {city}",
  "Explosion reported at factory in {city}",
  "Bridge structural failure causes alarm in {city}",
  "Hurricane warning issued for {city} coastline",
  "Landslide blocks key highway near {city}",
  "Oil pipeline leak detected near {city}",
  "Massive pileup on motorway near {city}",
  "Tornado touches down outside {city}",
  "Flood warning issued for {city} river basin",
  "Gas leak prompts emergency response in {city}",
  "Drought conditions worsen across {city} area",
  "Heatwave breaks records in {city}",
  "Volcanic ash disrupts flights from {city}",
  "Tsunami alert issued for {city} coastal area",
  "Avalanche reported in mountains near {city}",
  "Hailstorm damages crops around {city}",
  "Cyclone approaches {city} with strong winds",
  "Reservoir wall crack triggers alert in {city}",
  "Mine collapse traps workers near {city}",
  "Refinery blaze sends smoke over {city}",
];

const researchHeadlines = [
  "New AI research lab opens in {city}",
  "Breakthrough in quantum computing reported from {city}",
  "University of {city} announces renewable energy discovery",
  "Medical researchers in {city} trial new cancer treatment",
  "Space agency facility in {city} launches satellite mission",
  "Tech startup in {city} unveils autonomous vehicle platform",
  "Scientists in {city} develop biodegradable plastic",
  "Robotics conference draws global experts to {city}",
  "Climate study from {city} reveals ocean current shifts",
  "Battery technology breakthrough from {city} lab",
  "Genomics center in {city} maps rare disease DNA",
  "Solar panel efficiency record set in {city}",
  "Hydrogen fuel pilot plant opens in {city}",
  "Neuroscience team in {city} maps brain pathway",
  "5G network expansion reaches {city} metropolitan area",
  "Quantum encryption tested over {city} fiber network",
  "Coral reef restoration project launched in {city}",
  "Vertical farming startup raises funding in {city}",
  "Carbon capture facility begins operations in {city}",
  "Deep-sea drone tested off coast of {city}",
  "AI language model trained on {city} regional dialects",
  "Fusion reactor experiment achieves milestone in {city}",
  "Biotech firm in {city} develops mRNA vaccine platform",
  "Smart grid pilot reduces outages in {city}",
  "Ocean plastic cleanup drone deployed near {city}",
  "Green hydrogen bus fleet launched in {city}",
  "Nanotechnology lab in {city} creates water filter",
  "Wildlife tracking AI deployed in {city} nature reserve",
  "3D-printed housing project unveiled in {city}",
  "Urban air mobility corridor tested over {city}",
];

const sources = [
  "Reuters", "AP News", "BBC", "The Guardian", "Al Jazeera",
  "Bloomberg", "CNN", "France 24", "DW News", "NHK World",
  "Times of India", "South China Morning Post", "The Asahi Shimbun",
  "Le Monde", "El País", "The Globe and Mail", "Sydney Morning Herald",
  "RT News", "Anadolu Agency", "Xinhua", "Press TV", "Dawn News",
  "Jakarta Post", "Bangkok Post", "Manila Bulletin", "The Korea Herald",
  "Yonhap", "TASS", "Interfax", "The Jerusalem Post",
];

function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function generateNews(): NewsItem[] {
  const now = Date.now();
  const dateSeed = Math.floor(now / (1000 * 60 * 5));
  const rand = seededRandom(dateSeed);
  const items: NewsItem[] = [];
  const usedCities = new Set<string>();

  for (let i = 0; i < 200; i++) {
    let cityIndex = Math.floor(rand() * cities.length);
    let attempts = 0;
    while (usedCities.has(cities[cityIndex].name + i % 3) && attempts < 10) {
      cityIndex = Math.floor(rand() * cities.length);
      attempts++;
    }
    const city = cities[cityIndex];

    const isAccident = rand() > 0.45;
    const headlinePool = isAccident ? accidentHeadlines : researchHeadlines;
    const headline = headlinePool[Math.floor(rand() * headlinePool.length)].replace("{city}", city.name);
    const source = sources[Math.floor(rand() * sources.length)];

    const jitter = (r: number) => (r - 0.5) * 4;
    const lat = city.lat + jitter(rand());
    const lng = city.lng + jitter(rand());

    const hoursAgo = Math.floor(rand() * 48);
    const publishedAt = new Date(now - hoursAgo * 3600 * 1000).toISOString();

    const summaries = isAccident
      ? [
          `Emergency services responded to the incident in ${city.name}. Local authorities are assessing the situation and providing updates.`,
          `The event near ${city.name} has drawn attention from regional officials. Investigation is ongoing.`,
          `Residents in the ${city.name} area are advised to stay informed as the situation develops.`,
        ]
      : [
          `Researchers in ${city.name} have published findings that could advance the field. The study is undergoing peer review.`,
          `The innovation from ${city.name} represents a step forward in applied technology. Industry experts are optimistic.`,
          `The project in ${city.name} is part of a broader international collaboration in science and technology.`,
        ];

    items.push({
      title: headline,
      source,
      url: `https://news.google.com/search?q=${encodeURIComponent(headline)}&hl=en`,
      lat,
      lng,
      category: isAccident ? "accident" : "research",
      publishedAt,
      summary: summaries[Math.floor(rand() * summaries.length)],
    });
  }

  return items;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const items = generateNews();
    return new Response(
      JSON.stringify({ items, count: items.length }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
