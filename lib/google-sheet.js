// Server-side relay to the Apps Script webhook. We sign every payload with
// HMAC-SHA256 so the script can reject any caller that doesn't share the
// secret — without this, the "Anyone has access" deployment is a public
// write-API to the operator's sheet and inbox.

import { createHmac } from "node:crypto";
import { harden } from "./sanitize.js";

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || "";
const GOOGLE_SCRIPT_SECRET = process.env.GOOGLE_SCRIPT_SECRET || "";

function sign(body) {
  if (!GOOGLE_SCRIPT_SECRET) return "";
  return createHmac("sha256", GOOGLE_SCRIPT_SECRET).update(body).digest("hex");
}

// Forward a lead to the Apps Script. Returns true on a successful 2xx, false
// otherwise. We deliberately await this in the route so the user only sees a
// success state if the lead is actually durably stored somewhere.
export async function forwardToSheet({ id, source, fields }) {
  if (!GOOGLE_SCRIPT_URL) return false;

  const payload = {
    id,
    source,
    // Apply CSV + HTML escaping in one place so neither Sheets formula injection
    // nor email-HTML injection is possible downstream.
    name: harden(fields.name),
    phone: harden(fields.phone),
    procedure: harden(fields.procedure || ""),
    city: harden(fields.city || ""),
    preferred: harden(fields.preferred || ""),
    message: harden(fields.message || ""),
    specialization: harden(fields.specialization || ""),
    type: harden(fields.type || ""),
    email: harden(fields.email || ""),
  };
  const body = JSON.stringify(payload);
  // Apps Script web apps cannot read HTTP headers — e.headers is always
  // undefined inside doPost. We have to pass the signature as a query
  // parameter so it surfaces in e.parameter.signature.
  const signature = sign(body);
  const url = signature
    ? `${GOOGLE_SCRIPT_URL}${GOOGLE_SCRIPT_URL.includes("?") ? "&" : "?"}signature=${signature}`
    : GOOGLE_SCRIPT_URL;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      // Apps Script can be slow on cold starts but should never take 10s.
      signal: AbortSignal.timeout(10_000),
    });
    // Apps Script ContentService always returns HTTP 200, even on app-level
    // errors (invalid signature, sheet not found, JSON parse failure). The
    // body tells us if the write actually happened — so we MUST check it,
    // otherwise silent data loss masquerades as success.
    if (!res.ok) return false;
    const json = await res.json().catch(() => null);
    return json?.success === true;
  } catch (err) {
    console.error(`Google Sheet relay failed for ${id}:`, err.message);
    return false;
  }
}
