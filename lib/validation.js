// Lightweight schema validation tuned for the lead-capture forms.
// Returns { ok: true, value } on success or { ok: false, message } on failure
// so callers can return a 400 with the same shape the UI already expects.

const PHONE_RE = /^[6-9]\d{9}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const PROCEDURE_ALLOWLIST = new Set([
  "Circumcision",
  "Piles (Hemorrhoids)",
  "Fissure",
  "Fistula",
  "Abscess",
  "Pilonidal Sinus",
  "Not sure — need guidance",
]);

const CITY_ALLOWLIST = new Set(["Mumbai", "Chandigarh"]);
const PREFERRED_ALLOWLIST = new Set(["call", "whatsapp", "email"]);
const PARTNER_TYPE_ALLOWLIST = new Set(["doctor", "hospital"]);

const LIMITS = {
  name: 80,
  email: 120,
  message: 2000,
  specialization: 120,
};

function trimStr(v, max) {
  if (typeof v !== "string") return "";
  return v.trim().slice(0, max);
}

export function validateConsultation(input) {
  if (!input || typeof input !== "object") {
    return { ok: false, message: "Invalid request body" };
  }
  const name = trimStr(input.name, LIMITS.name);
  const phone = trimStr(input.phone, 10);
  const procedure = trimStr(input.procedure, 80);
  const city = trimStr(input.city, 40);
  const preferred = trimStr(input.preferred || "call", 16).toLowerCase();

  if (!name) return { ok: false, message: "Please enter your name" };
  if (!PHONE_RE.test(phone)) {
    return { ok: false, message: "Please enter a valid 10-digit Indian phone number" };
  }
  if (!PROCEDURE_ALLOWLIST.has(procedure)) {
    return { ok: false, message: "Please choose a valid procedure" };
  }
  if (!CITY_ALLOWLIST.has(city)) {
    return { ok: false, message: "Please choose a valid city" };
  }
  if (!PREFERRED_ALLOWLIST.has(preferred)) {
    return { ok: false, message: "Please choose a valid contact preference" };
  }
  return { ok: true, value: { name, phone, procedure, city, preferred } };
}

export function validateContact(input) {
  if (!input || typeof input !== "object") {
    return { ok: false, message: "Invalid request body" };
  }
  const name = trimStr(input.name, LIMITS.name);
  const phone = trimStr(input.phone, 16).replace(/\D/g, "").slice(-10);
  const email = trimStr(input.email, LIMITS.email);
  const message = trimStr(input.message, LIMITS.message);

  if (!name) return { ok: false, message: "Please enter your name" };
  if (!PHONE_RE.test(phone)) {
    return { ok: false, message: "Please enter a valid 10-digit Indian phone number" };
  }
  if (email && !EMAIL_RE.test(email)) {
    return { ok: false, message: "Please enter a valid email address" };
  }
  if (!message) return { ok: false, message: "Please enter a message" };
  return { ok: true, value: { name, phone, email, message } };
}

export function validatePartner(input) {
  if (!input || typeof input !== "object") {
    return { ok: false, message: "Invalid request body" };
  }
  const name = trimStr(input.name, LIMITS.name);
  const type = trimStr(input.type, 16).toLowerCase();
  const phone = trimStr(input.phone, 16).replace(/\D/g, "").slice(-10);
  const city = trimStr(input.city, 40);
  const specialization = trimStr(input.specialization, LIMITS.specialization);

  if (!name) return { ok: false, message: "Please enter your name" };
  if (!PARTNER_TYPE_ALLOWLIST.has(type)) {
    return { ok: false, message: "Please choose Doctor or Hospital" };
  }
  if (!PHONE_RE.test(phone)) {
    return { ok: false, message: "Please enter a valid 10-digit Indian phone number" };
  }
  if (!CITY_ALLOWLIST.has(city)) {
    return { ok: false, message: "Please choose a valid city" };
  }
  if (!specialization) {
    return { ok: false, message: "Please describe your specialization or procedures" };
  }
  return { ok: true, value: { name, type, phone, city, specialization } };
}
