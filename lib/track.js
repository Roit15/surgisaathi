/**
 * Client-side analytics dispatcher.
 *
 * Writes events to `window.dataLayer` (GA4 + GTM compatible) and to Meta
 * Pixel via `fbq` when present. Safe to call even when no analytics is
 * configured — it's a no-op.
 */

export function track(eventName, params = {}) {
  if (typeof window === "undefined") return;

  // Push to dataLayer (consumed by GA4 + GTM)
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: eventName, ...params });
  } catch {
    /* no-op */
  }

  // Mirror standard conversion events to Meta Pixel when loaded
  if (typeof window.fbq === "function") {
    try {
      if (eventName === "lead_submitted") {
        window.fbq("track", "Lead", params);
      } else if (eventName === "contact_submitted") {
        window.fbq("track", "Contact", params);
      } else if (eventName === "phone_click" || eventName === "whatsapp_click") {
        window.fbq("trackCustom", eventName, params);
      }
    } catch {
      /* no-op */
    }
  }
}
