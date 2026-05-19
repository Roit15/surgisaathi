// Server-only string hardening helpers.
// - htmlEscape: for any user-controlled string later interpolated into HTML
//   (we use this in the Apps Script email template via the relay payload).
// - csvSafe: prefix the leading character of a string that Sheets would
//   otherwise interpret as a formula. The leading apostrophe is the standard
//   CSV-injection mitigation and renders invisibly in Google Sheets.

const FORMULA_PREFIX = /^[=+\-@\t\r]/;

export function htmlEscape(value) {
  if (value == null) return "";
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function csvSafe(value) {
  if (value == null) return "";
  const s = String(value);
  return FORMULA_PREFIX.test(s) ? `'${s}` : s;
}

// One-stop hardening for any free-text field we send to the webhook.
export function harden(value) {
  return csvSafe(htmlEscape(value));
}
