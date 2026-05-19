"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { MapPin, Star, Shield, Building2, CheckCircle2, ArrowRight } from "lucide-react";

const CITY_FILTERS = ["All Cities", "Mumbai", "Chandigarh"];

export default function HospitalsBrowser({ hospitals }) {
  const [city, setCity] = useState("All Cities");

  const filtered = useMemo(() => {
    if (city === "All Cities") return hospitals;
    return hospitals.filter((h) => h.city === city);
  }, [hospitals, city]);

  return (
    <section className="section bg-[var(--color-bg-warm)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-2 mb-8 flex-wrap">
          {CITY_FILTERS.map((c) => (
            <button
              key={c}
              onClick={() => setCity(c)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                city === c
                  ? "bg-[var(--color-primary)] text-white"
                  : "bg-white text-[var(--color-text-body)] border border-[var(--color-card-border)] hover:border-[var(--color-primary)]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="card text-center !p-10">
            <p className="text-sm text-[var(--color-text-muted)]">
              No hospitals listed for this city yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filtered.map((h) => (
              <div key={`${h.name}-${h.city}`} className="card">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                      <Building2 size={28} className="text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{h.name}</h3>
                      <p className="flex items-center gap-1 text-sm text-[var(--color-text-muted)]">
                        <MapPin size={14} /> {h.area}, {h.city}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm font-semibold text-amber-500">
                    <Star size={14} fill="currentColor" /> {h.rating}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="trust-badge !text-xs"><Shield size={12} /> {h.accreditation}</span>
                  <span className="trust-badge !text-xs !bg-amber-50 !text-amber-700">{h.insurance}+ insurers</span>
                  <span className="trust-badge !text-xs !bg-blue-50 !text-blue-700">{h.beds} beds</span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {h.procedures.map((p) => (
                    <span key={p} className="text-xs bg-[var(--color-primary)]/5 text-[var(--color-primary)] px-2.5 py-1 rounded-full">{p}</span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  {h.features.map((f) => (
                    <span key={f} className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
                      <CheckCircle2 size={12} className="text-[var(--color-success)]" /> {f}
                    </span>
                  ))}
                </div>

                <Link href="/book-consultation" className="btn-primary w-full justify-center !py-3 !text-sm">
                  Book at {h.name.split(" ")[0]} <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
