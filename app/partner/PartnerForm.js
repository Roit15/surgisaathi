"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const initialForm = {
  name: "",
  type: "doctor",
  phone: "",
  city: "Mumbai",
  specialization: "",
};

export default function PartnerForm() {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [applicationId, setApplicationId] = useState("");

  const update = (key, value) => {
    setForm({ ...form, [key]: value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) return setError("Please enter your name");
    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
      return setError("Please enter a valid 10-digit Indian phone number");
    }
    if (!form.specialization.trim()) {
      return setError("Please describe your specialization or procedures");
    }

    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          type: form.type,
          phone: form.phone.trim(),
          city: form.city,
          specialization: form.specialization.trim(),
        }),
      });
      const data = await res.json();
      if (data.success) {
        setApplicationId(data.applicationId || "");
        setSubmitted(true);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="card !p-8 text-center animate-fade-in-up">
        <div className="w-14 h-14 rounded-full bg-[var(--color-success)]/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={28} className="text-[var(--color-success)]" />
        </div>
        <h2 className="text-xl font-bold mb-2">Application Received</h2>
        <p className="text-sm text-[var(--color-text-muted)] mb-2">
          Thanks, {form.name}. Our partnerships team will reach out within 2 business days.
        </p>
        {applicationId && (
          <p className="text-xs font-mono text-[var(--color-primary)] mb-6">{applicationId}</p>
        )}
        <button
          onClick={() => {
            setSubmitted(false);
            setForm(initialForm);
          }}
          className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <div className="card !p-8">
      <h2 className="text-xl font-bold mb-6">Partner Application</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1.5">Full Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Dr. / Hospital name"
              className="w-full px-4 py-3 rounded-xl border border-[var(--color-card-border)] text-sm outline-none focus:border-[var(--color-primary)]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Type</label>
            <select
              value={form.type}
              onChange={(e) => update("type", e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[var(--color-card-border)] text-sm outline-none focus:border-[var(--color-primary)] bg-white"
            >
              <option value="doctor">Doctor</option>
              <option value="hospital">Hospital / Clinic</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Phone</label>
          <div className="flex items-center gap-2">
            <span className="px-3 py-3 bg-[var(--color-bg-section)] rounded-xl text-sm font-medium border border-[var(--color-card-border)]">
              +91
            </span>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value.replace(/\D/g, "").slice(0, 10))}
              placeholder="10-digit number"
              className="flex-1 px-4 py-3 rounded-xl border border-[var(--color-card-border)] text-sm outline-none focus:border-[var(--color-primary)]"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">City</label>
          <select
            value={form.city}
            onChange={(e) => update("city", e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[var(--color-card-border)] text-sm outline-none focus:border-[var(--color-primary)] bg-white"
          >
            <option value="Mumbai">Mumbai</option>
            <option value="Chandigarh">Chandigarh</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Specialization / Procedures</label>
          <input
            type="text"
            value={form.specialization}
            onChange={(e) => update("specialization", e.target.value)}
            placeholder="e.g., Proctology, Laser Surgery"
            className="w-full px-4 py-3 rounded-xl border border-[var(--color-card-border)] text-sm outline-none focus:border-[var(--color-primary)]"
          />
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm font-medium">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="btn-primary w-full justify-center !py-4 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {submitting ? (
            <>
              <Loader2 size={18} className="animate-spin" /> Submitting...
            </>
          ) : (
            <>
              Submit Application <ArrowRight size={18} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
