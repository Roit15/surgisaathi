import Link from "next/link";
import { ArrowRight, CheckCircle2, Building2 } from "lucide-react";
import PartnerForm from "./PartnerForm";

export const metadata = {
  title: "Partner With SURGISAATHI — For Surgeons & Hospitals",
  description: "Partner with SURGISAATHI to grow your practice. Receive qualified patient leads, insurance coordination, and marketing support. Zero upfront costs.",
  alternates: { canonical: "/partner" },
};

export default function PartnerPage() {
  return (
    <div className="pt-16 lg:pt-[72px]">
      <section className="gradient-hero py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="trust-badge !bg-white/15 !text-white mb-6">For Doctors & Hospitals</span>
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">Grow Your Practice with SURGISAATHI</h1>
          <p className="text-lg text-white/80 max-w-2xl mb-8">Get a steady stream of qualified, high-intent surgical patients. Zero upfront costs — you only pay when a surgery happens.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#doctor-form" className="btn-primary !bg-[var(--color-accent)] !py-4 !px-8">
              Join as Doctor <ArrowRight size={18} />
            </Link>
            <Link href="#hospital-form" className="btn-secondary !border-white/30 !text-white hover:!bg-white/10 !py-4 !px-8">
              <Building2 size={18} /> Join as Hospital
            </Link>
          </div>
        </div>
      </section>

      {/* FOR DOCTORS */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">For Doctors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {[
              "Qualified, pre-screened patient leads",
              "Zero marketing spend — we bring patients to you",
              "Complete insurance pre-authorization handled",
              "Dedicated dashboard for lead & appointment management",
              "Performance analytics and revenue tracking",
              "Flexible availability management",
              "Patient follow-up coordination",
              "Brand building through our platform",
            ].map((b) => (
              <div key={b} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-[var(--color-text-body)]">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR HOSPITALS */}
      <section className="section gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">For Hospitals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {[
              "Increase OT utilization with qualified patient demand",
              "Dedicated surgery pipeline management",
              "Insurance claim coordination & cashless processing",
              "Real-time bed and OT availability management",
              "Revenue analytics and commission tracking",
              "Co-branded marketing and patient acquisition",
              "Streamlined admission & discharge workflows",
              "Quality ratings and patient feedback system",
            ].map((b) => (
              <div key={b} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-[var(--color-text-body)]">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP TIERS */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center">Partnership Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { tier: "Silver", surgeries: "1-5 / month", rate: "20%", features: ["Basic listing", "Lead access", "Insurance support"] },
              { tier: "Gold", surgeries: "6-15 / month", rate: "17%", features: ["Featured listing", "Priority leads", "Analytics dashboard", "Dedicated coordinator"] },
              { tier: "Platinum", surgeries: "16+ / month", rate: "14%", features: ["Exclusive leads", "Co-branded marketing", "Dedicated coordinator", "Custom reporting", "Priority OT scheduling"] },
            ].map((t) => (
              <div key={t.tier} className={`card text-center ${t.tier === "Gold" ? "!border-[var(--color-primary)] ring-2 ring-[var(--color-primary)]/20" : ""}`}>
                {t.tier === "Gold" && <span className="text-xs font-semibold text-white bg-[var(--color-primary)] px-3 py-1 rounded-full mb-3 inline-block">Most Popular</span>}
                <h3 className="text-xl font-bold mb-1">{t.tier}</h3>
                <p className="text-sm text-[var(--color-text-muted)] mb-2">{t.surgeries}</p>
                <div className="text-3xl font-bold text-[var(--color-primary)] mb-4">{t.rate}<span className="text-sm font-normal text-[var(--color-text-muted)]"> commission</span></div>
                <ul className="space-y-2 text-left mb-6">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[var(--color-text-body)]">
                      <CheckCircle2 size={14} className="text-[var(--color-success)]" /> {f}
                    </li>
                  ))}
                </ul>
                <button className="btn-secondary w-full justify-center !text-sm">Get Started</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="doctor-form" className="section gradient-warm">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <PartnerForm />
        </div>
      </section>
    </div>
  );
}
