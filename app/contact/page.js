"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, ArrowRight, CheckCircle2, Loader2, ShieldCheck } from "lucide-react";
import { track } from "../../lib/track";

const contactMethods = [
  { icon: Phone, title: "Call Us", value: "+91 70114 73737", subtitle: "Available 8 AM - 10 PM", href: "tel:+917011473737", event: "phone_click" },
  { icon: MessageCircle, title: "WhatsApp", value: "+91 70114 73737", subtitle: "Quick replies, 24/7", href: "https://wa.me/917011473737", event: "whatsapp_click" },
  { icon: Mail, title: "Email", value: "support@surgisaathi.com", subtitle: "Response within 4 hours", href: "mailto:support@surgisaathi.com", event: "email_click" },
];

const offices = [
  { city: "Mumbai", address: "Andheri West, Mumbai, Maharashtra 400053" },
  { city: "Chandigarh", address: "Sector 17, Chandigarh 160017" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (key, val) => {
    setForm({ ...form, [key]: val });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim()) { setError("Please enter your name"); return; }
    if (!form.phone.trim()) { setError("Please enter your phone number"); return; }
    if (!form.message.trim()) { setError("Please enter a message"); return; }

    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        track("contact_submitted", {});
      } else {
        setError(data.message || "Something went wrong.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-16 lg:pt-[72px]">
      <section className="gradient-hero py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">We&apos;re Here to Help</h1>
          <p className="text-lg text-white/80">Have a question? Need help booking? Our care team is available 7 days a week.</p>
        </div>
      </section>

      <section className="section bg-[var(--color-bg-warm)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Methods */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Get in Touch</h2>
              {contactMethods.map((m) => (
                <a
                  key={m.title}
                  href={m.href}
                  onClick={() => track(m.event, { source: "contact_page" })}
                  className="card flex items-start gap-4 !p-5 hover:!border-[var(--color-primary)]"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                    <m.icon size={22} className="text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{m.title}</h3>
                    <p className="text-[var(--color-primary)] font-medium text-sm">{m.value}</p>
                    <p className="text-xs text-[var(--color-text-muted)]">{m.subtitle}</p>
                  </div>
                </a>
              ))}

              {/* Office Locations */}
              <h3 className="text-lg font-semibold pt-4">Our Offices</h3>
              {offices.map((o) => (
                <div key={o.city} className="flex items-start gap-3">
                  <MapPin size={18} className="text-[var(--color-primary)] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm">{o.city}</p>
                    <p className="text-sm text-[var(--color-text-muted)]">{o.address}</p>
                  </div>
                </div>
              ))}

              {/* Grievance Officer — IT Rules 2021 / DPDP 2023 compliance */}
              <div className="card !p-5 !bg-[var(--color-bg-warm)]">
                <div className="flex items-start gap-3">
                  <ShieldCheck size={18} className="text-[var(--color-primary)] flex-shrink-0 mt-1" />
                  <div className="text-sm">
                    <p className="font-semibold mb-1">Grievance Officer</p>
                    <p className="text-[var(--color-text-muted)] leading-relaxed">
                      For complaints relating to content, services, or data
                      protection, write to{" "}
                      <a
                        href="mailto:grievance@surgisaathi.com"
                        className="text-[var(--color-primary)] underline"
                      >
                        grievance@surgisaathi.com
                      </a>
                      . We acknowledge complaints within 48 hours and resolve
                      them within 15 days as required under the IT Rules
                      2021 and the DPDP Act 2023.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card !p-8">
              {submitted ? (
                <div className="text-center py-8 animate-fade-in-up">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-success)]/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} className="text-[var(--color-success)]" />
                  </div>
                  <h2 className="text-xl font-bold mb-2">Message Sent!</h2>
                  <p className="text-sm text-[var(--color-text-muted)] mb-6">
                    Thank you, {form.name}! We&apos;ll respond within 4 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", message: "" }); }}
                    className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-text-heading)] mb-1.5">Name</label>
                      <input type="text" value={form.name} onChange={(e) => handleChange("name", e.target.value)} placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-[var(--color-card-border)] text-sm outline-none focus:border-[var(--color-primary)] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-text-heading)] mb-1.5">Phone</label>
                      <input type="tel" value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} placeholder="+91 XXXXX XXXXX" className="w-full px-4 py-3 rounded-xl border border-[var(--color-card-border)] text-sm outline-none focus:border-[var(--color-primary)] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-text-heading)] mb-1.5">Email</label>
                      <input type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl border border-[var(--color-card-border)] text-sm outline-none focus:border-[var(--color-primary)] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-text-heading)] mb-1.5">Message</label>
                      <textarea rows={4} value={form.message} onChange={(e) => handleChange("message", e.target.value)} placeholder="How can we help?" className="w-full px-4 py-3 rounded-xl border border-[var(--color-card-border)] text-sm outline-none focus:border-[var(--color-primary)] transition-colors resize-none" />
                    </div>

                    {error && (
                      <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm font-medium">
                        {error}
                      </div>
                    )}

                    <button type="submit" disabled={submitting} className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed">
                      {submitting ? (
                        <><Loader2 size={18} className="animate-spin" /> Sending...</>
                      ) : (
                        <>Send Message <ArrowRight size={18} /></>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
