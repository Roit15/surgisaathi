/**
 * Cookie / analytics consent state.
 *
 * We follow a simple opt-in model (DPDP-aligned): no analytics tags fire
 * until the user accepts. State is stored in localStorage so the choice
 * persists across visits.
 *
 * - "granted"  — user accepted; load and fire analytics
 * - "denied"   — user rejected; do not load any third-party scripts
 * - null       — no decision yet; show the banner
 */

export const CONSENT_KEY = "ss_consent_v1";

export function readConsent() {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export function writeConsent(value) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
    window.dispatchEvent(new CustomEvent("ss:consent", { detail: value }));
  } catch {
    /* no-op */
  }
}
