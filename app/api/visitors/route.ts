import { createHmac } from "node:crypto";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const countUniqueVisitor = `
local browser = ARGV[1]
local ip = ARGV[2]
local ttl = tonumber(ARGV[3])

local function hasIdentity(key)
  if redis.call("SISMEMBER", key, browser) == 1 then return true end
  if ip ~= "" and redis.call("SISMEMBER", key, ip) == 1 then return true end
  return false
end

local function saveIdentities(key)
  redis.call("SADD", key, browser)
  if ip ~= "" then redis.call("SADD", key, ip) end
end

if not hasIdentity(KEYS[1]) then redis.call("INCR", KEYS[2]) end
saveIdentities(KEYS[1])

if not hasIdentity(KEYS[3]) then redis.call("INCR", KEYS[4]) end
saveIdentities(KEYS[3])
redis.call("EXPIRE", KEYS[3], ttl)
redis.call("EXPIRE", KEYS[4], ttl)

return {
  tonumber(redis.call("GET", KEYS[4]) or "0"),
  tonumber(redis.call("GET", KEYS[2]) or "0")
}
`;

function hashIdentity(secret: string, type: "browser" | "ip", value: string) {
  return createHmac("sha256", secret).update(`${type}:${value}`).digest("hex");
}

function dhakaDate() {
  const parts = new Intl.DateTimeFormat("en", {
    timeZone: "Asia/Dhaka",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  return `${values.year}-${values.month}-${values.day}`;
}

export async function POST(request: Request) {
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;
  const hashSecret = process.env.VISITOR_HASH_SECRET;
  if (!redisUrl || !redisToken || !hashSecret) {
    return NextResponse.json({ error: "Shared visitor storage is not configured" }, { status: 503 });
  }

  let visitorId = "";
  try {
    const body = await request.json();
    visitorId = typeof body.visitorId === "string" ? body.visitorId : "";
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (!/^[a-zA-Z0-9-]{16,80}$/.test(visitorId)) {
    return NextResponse.json({ error: "Invalid visitor ID" }, { status: 400 });
  }

  const rawIp = request.headers.get("x-vercel-forwarded-for")
    ?? request.headers.get("x-forwarded-for")
    ?? request.headers.get("x-real-ip")
    ?? "";
  const ip = rawIp.split(",")[0].trim();
  const browserHash = hashIdentity(hashSecret, "browser", visitorId);
  const ipHash = ip ? hashIdentity(hashSecret, "ip", ip) : "";
  const date = dhakaDate();
  const keyPrefix = "trackertech:visitors:{unique}";
  const commands = [
    "EVAL",
    countUniqueVisitor,
    "4",
    `${keyPrefix}:lifetime:identities`,
    `${keyPrefix}:lifetime:count`,
    `${keyPrefix}:day:${date}:identities`,
    `${keyPrefix}:day:${date}:count`,
    browserHash,
    ipHash,
    "172800",
  ];

  try {
    const response = await fetch(redisUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${redisToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commands),
      cache: "no-store",
    });
    if (!response.ok) throw new Error("Redis request failed");
    const result = await response.json();
    const [today, lifetime] = result.result as [number, number];
    if (!Number.isFinite(today) || !Number.isFinite(lifetime)) throw new Error("Invalid Redis response");

    return NextResponse.json({ today, lifetime }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ error: "Visitor count unavailable" }, { status: 503 });
  }
}
