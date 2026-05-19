// Minimal in-memory token-bucket rate limiter scoped to the lambda instance.
// On Vercel each instance gets its own bucket, so this isn't a perfect shared
// counter — it's a cheap front-line defence that blocks the obvious abuse
// patterns (a single attacker spamming a single instance). For stronger
// guarantees plug in Upstash Redis later.

const buckets = new Map();
const SWEEP_AFTER_MS = 10 * 60 * 1000;
let lastSweep = Date.now();

function sweep(now) {
  if (now - lastSweep < SWEEP_AFTER_MS) return;
  for (const [key, bucket] of buckets) {
    if (now - bucket.updatedAt > SWEEP_AFTER_MS) buckets.delete(key);
  }
  lastSweep = now;
}

export function clientIp(request) {
  const fwd = request.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return (
    request.headers.get("x-real-ip") ||
    request.headers.get("cf-connecting-ip") ||
    "unknown"
  );
}

// Allow `max` requests per `windowMs` per key. Returns { ok, retryAfter }.
export function rateLimit(key, { max = 5, windowMs = 60_000 } = {}) {
  const now = Date.now();
  sweep(now);

  const bucket = buckets.get(key);
  if (!bucket || now - bucket.startedAt > windowMs) {
    buckets.set(key, { count: 1, startedAt: now, updatedAt: now });
    return { ok: true, retryAfter: 0 };
  }

  bucket.count += 1;
  bucket.updatedAt = now;
  if (bucket.count > max) {
    return {
      ok: false,
      retryAfter: Math.ceil((windowMs - (now - bucket.startedAt)) / 1000),
    };
  }
  return { ok: true, retryAfter: 0 };
}
