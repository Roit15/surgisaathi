import Link from "next/link";
import { MapPin, Star, Shield, Building2, CheckCircle2, ArrowRight, Phone } from "lucide-react";

export const metadata = {
  title: "Best Hospitals for Laser Surgery in Mumbai & Chandigarh | SURGISAATHI",
  description: "Compare NABH-accredited hospitals for laser piles, circumcision, fistula surgery. Transparent pricing, insurance support, and expert surgical teams.",
};

const hospitals = [
  { name: "Apollo Spectra Hospital", city: "Mumbai", area: "Tardeo", rating: "4.8", reviews: 542, beds: 150, accreditation: "NABH", insurance: 25, procedures: ["Piles", "Circumcision", "Fissure", "Fistula", "Abscess"], features: ["Dedicated laser OT", "Day-care facility", "24/7 emergency", "Cashless insurance"] },
  { name: "Fortis Hospital", city: "Mumbai", area: "Mulund", rating: "4.7", reviews: 478, beds: 300, accreditation: "NABH & JCI", insurance: 30, procedures: ["Piles", "Fissure", "Fistula", "Pilonidal Sinus"], features: ["Multi-speciality", "Advanced laser equipment", "Insurance desk", "Post-op care"] },
  { name: "Lilavati Hospital", city: "Mumbai", area: "Bandra", rating: "4.9", reviews: 623, beds: 323, accreditation: "NABH", insurance: 28, procedures: ["Piles", "Circumcision", "Fissure", "Fistula", "Abscess", "Pilonidal Sinus"], features: ["Premium care", "International standards", "Dedicated proctology wing", "Valet parking"] },
  { name: "Max Super Speciality Hospital", city: "Chandigarh", area: "Mohali", rating: "4.8", reviews: 389, beds: 300, accreditation: "NABH", insurance: 22, procedures: ["Piles", "Circumcision", "Fistula", "Pilonidal Sinus"], features: ["State-of-art laser OT", "Day-care center", "Insurance helpdesk", "Post-op monitoring"] },
  { name: "Fortis Hospital", city: "Chandigarh", area: "Mohali Phase 8", rating: "4.7", reviews: 312, beds: 250, accreditation: "NABH", insurance: 20, procedures: ["Piles", "Fissure", "Fistula", "Abscess"], features: ["Expert surgical team", "Modern infrastructure", "Cashless facility", "Recovery lounge"] },
  { name: "Ivy Hospital", city: "Chandigarh", area: "Sector 71, Mohali", rating: "4.6", reviews: 198, beds: 200, accreditation: "NABH", insurance: 18, procedures: ["Circumcision", "Piles", "Abscess", "Pilonidal Sinus"], features: ["Affordable packages", "Laser surgery suite", "Insurance support", "Free parking"] },
];

export default function HospitalsPage() {
  return (
    <div className="pt-16 lg:pt-[72px]">
      <section className="gradient-hero py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3">Partner Hospitals</h1>
          <p className="text-white/80 text-lg max-w-2xl">NABH-accredited hospitals with dedicated laser surgery facilities and transparent pricing.</p>
        </div>
      </section>

      <section className="section bg-[var(--color-bg-warm)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* City Tabs */}
          <div className="flex gap-2 mb-8">
            {["All Cities", "Mumbai", "Chandigarh"].map((c, i) => (
              <button key={c} className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${i === 0 ? "bg-[var(--color-primary)] text-white" : "bg-white text-[var(--color-text-body)] border border-[var(--color-card-border)] hover:border-[var(--color-primary)]"}`}>
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {hospitals.map((h, i) => (
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
        </div>
      </section>
    </div>
  );
}
