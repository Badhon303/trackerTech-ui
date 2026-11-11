import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const COUNTER_API = "https://countapi.mileshilliard.com/api/v1";
const LIFETIME_KEY = "trackertech_ltd_unique_browsers_2026";

function getDhakaDate() {
  const parts = new Intl.DateTimeFormat("en", {
    timeZone: "Asia/Dhaka",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  return `${values.year}${values.month}${values.day}`;
}

async function counter(action: "get" | "hit", key: string) {
  const response = await fetch(`${COUNTER_API}/${action}/${key}`, { cache: "no-store" });
  if (!response.ok) throw new Error("Shared visitor counter unavailable");
  const payload = await response.json();
  const value = Number(payload.value);
  if (!Number.isFinite(value)) throw new Error("Invalid counter response");
  return value;
}

async function readCounts() {
  const todayKey = `trackertech_ltd_unique_browsers_${getDhakaDate()}`;
  const [today, lifetime] = await Promise.all([
    counter("get", todayKey),
    counter("get", LIFETIME_KEY),
  ]);
  return { today, lifetime };
}

export async function GET() {
  try {
    return NextResponse.json(await readCounts(), { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ error: "Shared visitor counter unavailable" }, { status: 503 });
  }
}

export async function POST(request: Request) {
  let incrementToday = false;
  let incrementLifetime = false;
  try {
    const body = await request.json();
    incrementToday = body.incrementToday === true;
    incrementLifetime = body.incrementLifetime === true;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  try {
    const todayKey = `trackertech_ltd_unique_browsers_${getDhakaDate()}`;
    const increments: Promise<number>[] = [];
    if (incrementToday) increments.push(counter("hit", todayKey));
    if (incrementLifetime) increments.push(counter("hit", LIFETIME_KEY));
    await Promise.all(increments);
    return NextResponse.json(await readCounts(), { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ error: "Shared visitor counter unavailable" }, { status: 503 });
  }
}
