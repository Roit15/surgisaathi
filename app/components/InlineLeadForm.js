"use client";
import { useState } from "react";
import { ArrowRight, Phone, ChevronDown, Loader2 } from "lucide-react";
import { track } from "../../lib/track";

const CONDITIONS = [
  "Piles (Hemorrhoids)",
  "Anal Fissure",
  "Anal Fistula",
  "Circumcision",
  "Perianal Abscess",
  "Pilonidal Sinus",
  "Not Sure — Need Guidance",
];

const WHATSAPP_NUMBER = "917011473737";

function buildWhatsAppUrl(name, phone, condition, city) {
  const msg = encodeURIComponent(
    `Hi SURGISAATHI, I'd like a free consultation.\n\nName: ${name}\nPhone: ${phone}\nCondition: ${condition}\nCity: ${city}\n\nPlease connect me with a care coordinator.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

export default function InlineLeadForm({ className = "" }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("Mumbai");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  function validate() {
    const e = {};
    if (!name.trim() || name.trim().length < 2) e.name = "Please enter your name";
    if (!/^[6-9]\d{9}$/.test(phone.trim())) e.phone = "Enter a valid 10-digit mobile number";
    if (!condition) e.condition = "Please select your condition";
    return e;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);

    track("lead_form_submit", { condition, city, source: "hero_inline" });

    // Post to Google Sheets via existing API route if available
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, condition, city, source: "hero_inline" }),
      });
    } catch (_) {
      // Silently continue — WhatsApp fallback always fires
    }

    // Open WhatsApp (primary conversion channel)
    window.open(buildWhatsAppUrl(name.trim(), phone.trim(), condition, city), "_blank");
    setSubmitting(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md ${className}`}
      id="hero-lead-form"
      aria-label="Book Free Consultation"
    >
      <p className="text-sm font-semibold text-[var(--color-primary)] mb-4 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-ping inline-block" />
        Free consultation — takes 2 minutes
      </p>

      {/* Name */}
      <div className="mb-4">
        <label htmlFor="lead-name" className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">
          Your Name
        </label>
        <input
          id="lead-name"
          type="text"
          placeholder="e.g. Rahul Sharma"
          value={name}
          onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: "" })); }}
          className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-all
            ${errors.name ? "border-red-400 bg-red-50 focus:ring-2 ring-red-200" : "border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 ring-[var(--color-primary)]/20"}`}
          autoComplete="name"
        />
        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
      </div>

      {/* Phone */}
      <div className="mb-4">
        <label htmlFor="lead-phone" className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">
          Mobile Number
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-400">+91</span>
          <input
            id="lead-phone"
            type="tel"
            placeholder="10-digit number"
            value={phone}
            onChange={(e) => { setPhone(e.target.value.replace(/\D/g, "").slice(0, 10)); setErrors((p) => ({ ...p, phone: "" })); }}
            className={`w-full border rounded-xl pl-12 pr-4 py-3 text-sm outline-none transition-all
              ${errors.phone ? "border-red-400 bg-red-50 focus:ring-2 ring-red-200" : "border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 ring-[var(--color-primary)]/20"}`}
            autoComplete="tel"
            inputMode="numeric"
          />
        </div>
        {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
      </div>

      {/* Condition */}
      <div className="mb-4">
        <label htmlFor="lead-condition" className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">
          Condition / Surgery
        </label>
        <div className="relative">
          <select
            id="lead-condition"
            value={condition}
            onChange={(e) => { setCondition(e.target.value); setErrors((p) => ({ ...p, condition: "" })); }}
            className={`w-full border rounded-xl px-4 py-3 text-sm outline-none appearance-none bg-white transition-all
              ${errors.condition ? "border-red-400 bg-red-50 focus:ring-2 ring-red-200" : "border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 ring-[var(--color-primary)]/20"}
              ${!condition ? "text-gray-400" : "text-gray-800"}`}
          >
            <option value="" disabled>Select your condition</option>
            {CONDITIONS.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
        {errors.condition && <p className="text-xs text-red-500 mt-1">{errors.condition}</p>}
      </div>

      {/* City Toggle */}
      <div className="mb-5">
        <p className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Your City</p>
        <div className="flex gap-2">
          {["Mumbai", "Chandigarh"].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCity(c)}
              className={`flex-1 py-2.5 rounded-xl text-sm font-semibold border transition-all
                ${city === c
                  ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-md"
                  : "bg-white text-gray-600 border-gray-200 hover:border-[var(--color-primary)]/40"
                }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        id="hero-lead-submit"
        className="w-full py-4 rounded-xl font-bold text-white text-sm flex items-center justify-center gap-2 transition-all
          bg-[var(--color-accent)] hover:bg-[var(--color-accent)]/90 shadow-lg hover:shadow-xl disabled:opacity-70"
      >
        {submitting ? (
          <><Loader2 size={18} className="animate-spin" /> Connecting you...</>
        ) : (
          <><Phone size={16} /> Get Free Consultation <ArrowRight size={16} /></>
        )}
      </button>

      <p className="text-center text-xs text-gray-400 mt-3 flex items-center justify-center gap-1">
        🔒 100% private &amp; confidential
      </p>
    </form>
  );
}
