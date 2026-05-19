"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Star, Stethoscope, MapPin, Search } from "lucide-react";

const PROCEDURE_FILTERS = ["All", "Piles", "Circumcision", "Fissure", "Fistula", "Abscess", "Pilonidal Sinus"];
const CITY_FILTERS = ["All Cities", "Mumbai", "Chandigarh"];

export default function DoctorsBrowser({ doctors }) {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("All Cities");
  const [procedure, setProcedure] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return doctors.filter((d) => {
      if (city !== "All Cities" && d.city !== city) return false;
      if (procedure !== "All" && !d.procedures.includes(procedure)) return false;
      if (!q) return true;
      return (
        d.name.toLowerCase().includes(q) ||
        d.spec.toLowerCase().includes(q) ||
        d.hospital.toLowerCase().includes(q)
      );
    });
  }, [doctors, query, city, procedure]);

  return (
    <>
      <section className="gradient-hero py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3">Find Your Expert Surgeon</h1>
          <p className="text-white/80 text-lg max-w-2xl">100% verified surgeons with 10+ years experience in laser surgical procedures.</p>

          <div className="mt-8 bg-white rounded-2xl p-4 flex flex-col sm:flex-row gap-4 max-w-3xl shadow-lg">
            <div className="flex items-center gap-2 flex-1 px-3">
              <Search size={18} className="text-[var(--color-text-muted)]" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by doctor name, specialization, or hospital"
                className="w-full text-sm outline-none text-[var(--color-text-body)]"
              />
            </div>
            <div className="flex items-center gap-2 px-3 border-l border-[var(--color-card-border)]">
              <MapPin size={18} className="text-[var(--color-text-muted)]" />
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="text-sm outline-none text-[var(--color-text-body)] bg-transparent"
              >
                {CITY_FILTERS.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[var(--color-bg-warm)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="text-sm font-medium text-[var(--color-text-muted)] mr-2 py-2">Filter:</span>
            {PROCEDURE_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setProcedure(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  procedure === f
                    ? "bg-[var(--color-primary)] text-white"
                    : "bg-white text-[var(--color-text-body)] border border-[var(--color-card-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="card text-center !p-10">
              <p className="text-sm text-[var(--color-text-muted)]">
                No surgeons match those filters. Try a different city or procedure.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filtered.map((d) => (
                <div key={d.name} className="card flex flex-col sm:flex-row gap-5">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                    <Stethoscope size={36} className="text-[var(--color-primary)]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <div>
                        <h3 className="font-semibold text-lg">{d.name}</h3>
                        <p className="text-sm text-[var(--color-primary)]">{d.spec}</p>
                      </div>
                      <div className="flex items-center gap-1 text-sm font-semibold text-amber-500">
                        <Star size={14} fill="currentColor" /> {d.rating}
                        <span className="text-[var(--color-text-muted)] font-normal">({d.reviews})</span>
                      </div>
                    </div>
                    <p className="text-sm text-[var(--color-text-muted)] mb-3">
                      {d.hospital}, {d.city} • {d.exp} experience • {d.surgeries} surgeries
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {d.procedures.map((p) => (
                        <span key={p} className="text-xs bg-[var(--color-primary)]/5 text-[var(--color-primary)] px-3 py-1 rounded-full font-medium">
                          {p}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Link
                        href="/book-consultation"
                        className="btn-primary !py-2.5 !px-5 !text-sm flex-1 sm:flex-none justify-center"
                      >
                        Book Consultation
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
