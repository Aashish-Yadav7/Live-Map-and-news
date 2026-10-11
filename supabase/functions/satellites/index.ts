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

function epochYearToJd(year: number): number {
  const fullYear = year < 57 ? 2000 + year : 1900 + year;
  return 1721027.5 + 365 * (fullYear - 1) + Math.floor((fullYear - 1) / 4) - Math.floor((fullYear - 1) / 100) + Math.floor((fullYear - 1) / 400);
}

function dateToJd(date: Date): number {
  return date.getTime() / 86400000 + 2440587.5;
}

function greenwichSiderealTime(date: Date): number {
  const jd = dateToJd(date);
  const t = (jd - 2451545.0) / 36525.0;
  let gmst = 280.46061837 + 360.98564736629 * (jd - 2451545.0) + 0.000387933 * t * t - (t * t * t) / 38710000;
  gmst = gmst % 360;
  if (gmst < 0) gmst += 360;
  return gmst * (Math.PI / 180);
}

function propagateSimple(
  inclo: number, raan: number, ecco: number, argpo: number,
  mo: number, no: number, epochYear: number, epochDay: number, now: Date,
): { lat: number; lng: number; alt: number; velocity: number } {
  const epochJd = epochYearToJd(epochYear) + epochDay;
  const nowJd = dateToJd(now);
  const daysSinceEpoch = nowJd - epochJd;
  const n = no;
  const currentM = mo + n * daysSinceEpoch * 1440;

  let E = currentM;
  for (let i = 0; i < 10; i++) E = currentM + ecco * Math.sin(E);

  const trueAnomaly = 2 * Math.atan2(
    Math.sqrt(1 - ecco * ecco) * Math.sin(E / 2),
    Math.cos(E / 2),
  );

  const nRadPerSec = n / 60;
  const a = Math.pow(398600.4418 / (nRadPerSec * nRadPerSec), 1 / 3);
  const r = a * (1 - ecco * Math.cos(E));
  const xp = r * Math.cos(trueAnomaly);
  const yp = r * Math.sin(trueAnomaly);

  const cosArg = Math.cos(argpo), sinArg = Math.sin(argpo);
  const cosInc = Math.cos(inclo), sinInc = Math.sin(inclo);
  const cosRaan = Math.cos(raan), sinRaan = Math.sin(raan);

  const ecix = (cosArg * cosRaan - sinArg * sinRaan * cosInc) * xp + (-sinArg * cosRaan - cosArg * sinRaan * cosInc) * yp;
  const eciy = (cosArg * sinRaan + sinArg * cosRaan * cosInc) * xp + (-sinArg * sinRaan + cosArg * cosRaan * cosInc) * yp;
  const eciz = (sinArg * sinInc) * xp + (cosArg * sinInc) * yp;

  const gst = greenwichSiderealTime(now);
  const cosGst = Math.cos(gst), sinGst = Math.sin(gst);
  const ecefx = cosGst * ecix + sinGst * eciy;
  const ecefy = -sinGst * ecix + cosGst * eciy;
  const ecefz = eciz;

  const earthR = 6371;
  const lat = Math.atan2(ecefz, Math.sqrt(ecefx * ecefx + ecefy * ecefy)) * (180 / Math.PI);
  let lng = Math.atan2(ecefy, ecefx) * (180 / Math.PI);
  while (lng > 180) lng -= 360;
  while (lng < -180) lng += 360;

  const alt = r - earthR;
  const velocity = Math.sqrt(398600.4418 * (2 / r - 1 / a));

  return { lat, lng, alt: Math.round(alt), velocity: Math.round(velocity * 10) / 10 };
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const group = new URL(req.url).searchParams.get("group") || "active";
    const urls: Record<string, string[]> = {
      active: ["https://celestrak.org/NORAD/elements/gp.php?GROUP=active&FORMAT=tle"],
      stations: ["https://celestrak.org/NORAD/elements/gp.php?GROUP=stations&FORMAT=tle"],
      starlink: ["https://celestrak.org/NORAD/elements/gp.php?GROUP=starlink&FORMAT=tle"],
      visual: ["https://celestrak.org/NORAD/elements/gp.php?GROUP=visual&FORMAT=tle"],
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
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const lines = tleText.trim().split("\n");
    const results: SatResult[] = [];
    const now = new Date();
    let i = 0;
    while (i < lines.length) {
      if (lines[i] && lines[i].startsWith("1 ") && lines[i + 1] && lines[i + 1].startsWith("2 ")) {
        const name = lines[i - 1]?.trim() || "UNKNOWN";
        const line1 = lines[i];
        const line2 = lines[i + 1];
        const satNum = parseInt(line1.substring(2, 7).trim(), 10);
        const epochStr = line1.substring(18, 32).trim();
        const epochYear = parseInt(epochStr.substring(0, 2), 10);
        const epochDay = parseFloat(epochStr.substring(2));

        const inclo = parseFloat(line2.substring(8, 16).trim()) * (Math.PI / 180);
        const raan = parseFloat(line2.substring(17, 25).trim()) * (Math.PI / 180);
        const ecco = parseFloat("0." + line2.substring(26, 33).trim());
        const argpo = parseFloat(line2.substring(34, 42).trim()) * (Math.PI / 180);
        const mo = parseFloat(line2.substring(43, 51).trim()) * (Math.PI / 180);
        const no = parseFloat(line2.substring(52, 63).trim()) * (Math.PI / 180);

        try {
          const pos = propagateSimple(inclo, raan, ecco, argpo, mo, no, epochYear, epochDay, now);
          results.push({ id: satNum, name, satClass: classifySat(name), lat: pos.lat, lng: pos.lng, alt: pos.alt, velocity: pos.velocity });
        } catch { /* skip */ }

        i += 3;
      } else {
        i++;
      }
    }

    return new Response(
      JSON.stringify({ items: results, count: results.length }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Unknown error", items: [] }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
