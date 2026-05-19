// Reject cross-origin POSTs from browsers. Same-site Next.js form posts have
// an Origin header that matches the request's host; everything else gets
// rejected. Server-to-server callers (no Origin header at all) are allowed
// through — they would still need a valid session/HMAC where applicable.

export function isAllowedOrigin(request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  let originHost;
  try {
    originHost = new URL(origin).host;
  } catch {
    return false;
  }

  const host = request.headers.get("host");
  if (host && originHost === host) return true;

  const allowed = (process.env.ALLOWED_ORIGINS || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  return allowed.some((entry) => {
    try {
      return new URL(entry).host === originHost;
    } catch {
      return entry === originHost;
    }
  });
}
