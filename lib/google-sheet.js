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

  try {
    const res = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Signature": sign(body),
      },
      body,
      // Apps Script can be slow on cold starts but should never take 10s.
      signal: AbortSignal.timeout(10_000),
    });
    return res.ok;
  } catch (err) {
    console.error(`Google Sheet relay failed for ${id}:`, err.message);
    return false;
  }
}
