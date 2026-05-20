"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, CheckCircle2, Phone, Shield, Lock, Loader2, PartyPopper, MessageCircle } from "lucide-react";
import { track } from "../../lib/track";

const procedures = [
  "Circumcision", "Piles (Hemorrhoids)", "Fissure", "Fistula", "Abscess", "Pilonidal Sinus", "Not sure — need guidance"
];

const cities = ["Mumbai", "Chandigarh"];

export default function BookConsultation() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ procedure: "", city: "", name: "", phone: "", preferred: "call" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [consultationId, setConsultationId] = useState("");

  const handleChange = (key, val) => {
    setForm({ ...form, [key]: val });
    setError("");
  };

  const handleSubmit = async () => {
    // Client-side validation
    if (!form.name.trim()) {
      setError("Please enter your name");
      return;
    }
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone.trim())) {
      setError("Please enter a valid 10-digit phone number");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          procedure: form.procedure,
          city: form.city,
          preferred: form.preferred,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setConsultationId(data.consultationId);
        setSubmitted(true);
        track("lead_submitted", {
          procedure: form.procedure,
          city: form.city,
          preferred: form.preferred,
          consultation_id: data.consultationId,
        });
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // Success state
  if (submitted) {
    return (
      <div className="pt-16 lg:pt-[72px] min-h-screen bg-[var(--color-bg-warm)]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 lg:py-20">
          <div className="card !p-10 lg:!p-14 text-center animate-fade-in-up">
            <div className="w-20 h-20 rounded-full bg-[var(--color-success)]/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} className="text-[var(--color-success)]" />
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold mb-3">Consultation Booked!</h1>
            <p className="text-[var(--color-text-muted)] mb-8 max-w-md mx-auto">
              Thank you, <strong className="text-[var(--color-text-heading)]">{form.name}</strong>! Our care expert will
              reach out to you within <strong className="text-[var(--color-primary)]">30 minutes</strong> via {form.preferred}.
            </p>

            <div className="bg-[var(--color-bg-warm)] rounded-2xl p-6 mb-8 text-left space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-[var(--color-text-muted)]">Booking ID</span>
                <span className="font-semibold font-mono text-[var(--color-primary)]">{consultationId}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[var(--color-text-muted)]">Procedure</span>
                <span className="font-medium">{form.procedure}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[var(--color-text-muted)]">City</span>
                <span className="font-medium">{form.city}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[var(--color-text-muted)]">Phone</span>
                <span className="font-medium">+91 {form.phone}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[var(--color-text-muted)]">Contact via</span>
                <span className="font-medium capitalize">{form.preferred}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/917011473737?text=Hi%20SURGISAATHI%2C%20I%20just%20booked%20consultation%20${consultationId}%20for%20${encodeURIComponent(form.procedure)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 justify-center !bg-[#25D366] hover:!bg-[#20BD5A]"
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
              <Link href="/" className="btn-secondary flex-1 justify-center">
                Back to Home
              </Link>
            </div>

            <p className="text-xs text-[var(--color-text-muted)] mt-6">
              🔒 Your information is encrypted and 100% confidential
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 lg:pt-[72px] min-h-screen bg-[var(--color-bg-warm)]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 lg:py-20">
        {/* Progress */}
        <div className="flex items-center gap-2 mb-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2 flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${step >= s ? "bg-[var(--color-primary)] text-white" : "bg-[var(--color-card-border)] text-[var(--color-text-muted)]"}`}>
                {step > s ? <CheckCircle2 size={16} /> : s}
              </div>
              {s < 3 && <div className={`flex-1 h-1 rounded-full transition-colors ${step > s ? "bg-[var(--color-primary)]" : "bg-[var(--color-card-border)]"}`} />}
            </div>
          ))}
        </div>

        <div className="card !p-8 lg:!p-10">
          {step === 1 && (
            <div className="animate-fade-in-up">
              <h1 className="text-2xl lg:text-3xl font-bold mb-2">What do you need help with?</h1>
              <p className="text-[var(--color-text-muted)] mb-8">Select your condition. Don&apos;t worry — everything is confidential.</p>
              <div className="space-y-3">
                {procedures.map((p) => (
                  <button key={p} onClick={() => handleChange("procedure", p)} className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all text-sm font-medium ${form.procedure === p ? "border-[var(--color-primary)] bg-[var(--color-primary)]/5 text-[var(--color-primary)]" : "border-[var(--color-card-border)] hover:border-[var(--color-primary-light)] text-[var(--color-text-body)]"}`}>
                    {p}
                  </button>
                ))}
              </div>
              <button onClick={() => form.procedure && setStep(2)} disabled={!form.procedure} className="btn-primary w-full justify-center mt-8 disabled:opacity-50 disabled:cursor-not-allowed">
                Continue <ArrowRight size={18} />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in-up">
              <button onClick={() => setStep(1)} className="flex items-center gap-1 text-sm text-[var(--color-text-muted)] mb-6 hover:text-[var(--color-primary)]">
                <ArrowLeft size={14} /> Back
              </button>
              <h1 className="text-2xl lg:text-3xl font-bold mb-2">Choose your city</h1>
              <p className="text-[var(--color-text-muted)] mb-8">We&apos;ll connect you with the best surgeons in your area.</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {cities.map((c) => (
                  <button key={c} onClick={() => handleChange("city", c)} className={`px-5 py-6 rounded-xl border-2 transition-all font-semibold text-center ${form.city === c ? "border-[var(--color-primary)] bg-[var(--color-primary)]/5 text-[var(--color-primary)]" : "border-[var(--color-card-border)] hover:border-[var(--color-primary-light)] text-[var(--color-text-body)]"}`}>
                    {c}
                  </button>
                ))}
              </div>
              <button onClick={() => form.city && setStep(3)} disabled={!form.city} className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                Continue <ArrowRight size={18} />
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="animate-fade-in-up">
              <button onClick={() => setStep(2)} className="flex items-center gap-1 text-sm text-[var(--color-text-muted)] mb-6 hover:text-[var(--color-primary)]">
                <ArrowLeft size={14} /> Back
              </button>
              <h1 className="text-2xl lg:text-3xl font-bold mb-2">Almost there!</h1>
              <p className="text-[var(--color-text-muted)] mb-8">Share your details and our care expert will reach out within 30 minutes.</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-heading)] mb-1.5">Full Name</label>
                  <input type="text" value={form.name} onChange={(e) => handleChange("name", e.target.value)} placeholder="Your full name" className="w-full px-4 py-3 rounded-xl border border-[var(--color-card-border)] text-sm outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-heading)] mb-1.5">Phone Number</label>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-3 bg-[var(--color-bg-section)] rounded-xl text-sm font-medium border border-[var(--color-card-border)]">+91</span>
                    <input type="tel" value={form.phone} onChange={(e) => handleChange("phone", e.target.value.replace(/\D/g, "").slice(0, 10))} placeholder="Your phone number" className="flex-1 px-4 py-3 rounded-xl border border-[var(--color-card-border)] text-sm outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-heading)] mb-1.5">Preferred Contact</label>
                  <div className="flex gap-3">
                    {["Call", "WhatsApp", "Email"].map((m) => (
                      <button key={m} onClick={() => handleChange("preferred", m.toLowerCase())} className={`flex-1 px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all ${form.preferred === m.toLowerCase() ? "border-[var(--color-primary)] bg-[var(--color-primary)]/5 text-[var(--color-primary)]" : "border-[var(--color-card-border)] text-[var(--color-text-body)]"}`}>
                        {m}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {error && (
                <div className="mt-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm font-medium animate-fade-in-up">
                  {error}
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="btn-primary w-full justify-center mt-8 animate-pulse-glow !py-4 disabled:opacity-70 disabled:cursor-not-allowed disabled:animate-none"
              >
                {submitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Booking...
                  </>
                ) : (
                  <>
                    Book Free Consultation <ArrowRight size={18} />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-4 mt-6 text-xs text-[var(--color-text-muted)]">
                <span className="flex items-center gap-1"><Lock size={12} /> 100% Private</span>
                <span className="flex items-center gap-1"><Shield size={12} /> No Spam</span>
                <span className="flex items-center gap-1"><Phone size={12} /> Free Call</span>
              </div>
            </div>
          )}
        </div>

        {/* Trust elements */}
        <div className="text-center mt-8">
          <p className="text-sm text-[var(--color-text-muted)]">
            🔒 Your information is encrypted and confidential
          </p>
          <p className="text-xs text-[var(--color-text-muted)] mt-2">
            Trusted by 10,000+ patients • 4.8★ average rating
          </p>
        </div>
      </div>
    </div>
  );
}
