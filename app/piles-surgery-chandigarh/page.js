import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone, MapPin, IndianRupee, Clock, BadgeCheck, Star } from "lucide-react";
import InlineLeadForm from "../components/InlineLeadForm";
import JsonLd from "../components/JsonLd";
import { medicalProcedureSchema, localBusinessSchemaForCity, faqPageSchema, breadcrumbSchema, LOCATIONS } from "../../lib/seo";

export const metadata = {
  title: "Laser Piles Surgery in Chandigarh — Cost ₹36K–₹75K | SURGISAATHI",
  description: "Best laser piles treatment in Chandigarh at ₹36,000–₹75,000. Expert proctologists at Max Hospital & top NABH hospitals. Cashless insurance, same-day discharge. Free consultation: +91 70114 73737.",
  alternates: { canonical: "/piles-surgery-chandigarh" },
  openGraph: {
    title: "Laser Piles Surgery in Chandigarh | SURGISAATHI",
    description: "Expert piles treatment in Chandigarh at ₹36K–₹75K. Verified surgeons, cashless insurance.",
    url: "/piles-surgery-chandigarh",
    images: [
      {
        url: "/images/og/piles-surgery-chandigarh.png",
        width: 1200,
        height: 630,
        alt: "Laser Piles Surgery in Chandigarh — SURGISAATHI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laser Piles Surgery in Chandigarh | SURGISAATHI",
    description: "Expert piles treatment in Chandigarh at ₹36K–₹75K. Hindi/Punjabi support.",
    images: ["/images/og/piles-surgery-chandigarh.png"],
  },
};

const chandigarhLocation = LOCATIONS.find((l) => l.city === "Chandigarh");

const faqs = [
  { q: "What is the cost of laser piles surgery in Chandigarh?", a: "Laser piles surgery in Chandigarh costs between ₹36,000 and ₹75,000 depending on the grade of piles and hospital. Prices in Chandigarh are typically 10–15% lower than Mumbai for equivalent quality care. All SURGISAATHI packages are all-inclusive with no hidden charges." },
  { q: "Which hospitals in Chandigarh do laser piles surgery?", a: "SURGISAATHI partners with Max Hospital Chandigarh (Sector 56), Fortis Hospital Mohali, and other NABH-accredited facilities across the Chandigarh Tricity (Chandigarh, Mohali, Panchkula) for piles procedures." },
  { q: "Is piles surgery available in Mohali and Panchkula too?", a: "Yes. SURGISAATHI covers the entire Chandigarh Tricity — Chandigarh, Mohali, Panchkula, and nearby areas like Zirakpur and Kharar. Our care coordinator will select the most convenient hospital for you." },
  { q: "Does health insurance cover piles surgery in Chandigarh?", a: "Yes. Laser piles surgery is covered by all major health insurance plans in Chandigarh including Star Health, HDFC Ergo, ICICI Lombard, Bajaj Allianz, and New India Assurance. Our team handles cashless pre-authorization." },
  { q: "Can I consult in Hindi / Punjabi?", a: "Absolutely. Our Chandigarh team is fully comfortable in Hindi and Punjabi. Many of our patients prefer to discuss their condition in their native language — we have consultants for both." },
];

const chandigarhDoctors = [
  { name: "Dr. Amandeep Singh", spec: "Colorectal & Proctology Surgeon", exp: "16 yrs", rating: "4.9", hospital: "Max Hospital, Sector 56, Chandigarh", surgeries: "2,100+", regNo: "MCI-22156" },
];

export default function PilesSurgeryChandigarh() {
  return (
    <div className="pt-16 lg:pt-[72px]">
      <JsonLd
        data={[
          medicalProcedureSchema({
            slug: "piles",
            data: {
              title: "Laser Piles Surgery Chandigarh",
              description: "Minimally invasive laser piles treatment at NABH hospitals in Chandigarh",
              priceRange: "₹36,000 – ₹75,000",
              subtitle: "Expert piles treatment with 2–3 day recovery in Chandigarh",
              steps: ["Proctoscopy", "Pre-op assessment", "Laser hemorrhoidoplasty", "Day-care discharge", "Follow-up in 2–3 days"],
              recovery: "2–3 days",
            },
            path: "/piles-surgery-chandigarh",
          }),
          localBusinessSchemaForCity(chandigarhLocation),
          faqPageSchema(faqs, "/piles-surgery-chandigarh"),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Piles Surgery Chandigarh" }]),
        ]}
      />

      {/* HERO */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="trust-badge !bg-white/15 !text-white mb-5 inline-flex">
                <MapPin size={13} /> Chandigarh · Mohali · Panchkula
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Laser Piles Surgery in{" "}
                <span className="text-[var(--color-accent)]">Chandigarh</span>
              </h1>
              <p className="text-lg text-white/80 mb-4 max-w-xl">
                Same-day laser hemorrhoidoplasty at Max Hospital & NABH facilities across Chandigarh Tricity. Prices 10–15% lower than metro cities. Cashless insurance. Hindi/Punjabi support.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="flex items-center gap-1.5 bg-white/10 text-white px-3 py-1.5 rounded-xl text-sm">
                  <IndianRupee size={14} /> Starting ₹36,000
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 text-white px-3 py-1.5 rounded-xl text-sm">
                  <Clock size={14} /> Same-day discharge
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 text-white px-3 py-1.5 rounded-xl text-sm">
                  <BadgeCheck size={14} /> Hindi · Punjabi support
                </span>
              </div>
            </div>
            <div className="hidden lg:flex justify-end">
              <InlineLeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile form */}
      <section className="lg:hidden bg-[var(--color-bg-warm)] py-10">
        <div className="max-w-lg mx-auto px-4">
          <p className="text-center text-lg font-bold mb-4">Book Free Consultation in Chandigarh</p>
          <InlineLeadForm />
        </div>
      </section>

      {/* WHY CHANDIGARH */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Why Get Piles Treatment in Chandigarh with SURGISAATHI?</h2>
          <p className="text-[var(--color-text-muted)] mb-8 max-w-2xl">
            Chandigarh is underserved by national piles surgery chains — meaning you get faster appointments, lower costs, and more personal attention than in Mumbai or Delhi. SURGISAATHI&apos;s Chandigarh team has deep relationships with the city&apos;s best proctologists.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Prices 10–15% lower than Mumbai — same quality care",
              "Max Hospital + Fortis Mohali partnerships",
              "Faster appointments — less waiting than metro hospitals",
              "Covers entire Tricity: Chandigarh, Mohali, Panchkula",
              "Hindi & Punjabi-speaking care coordinators",
              "Cashless insurance — all major TPA partners",
              "Day-care laser surgery — same-day discharge",
              "Private consultation — no embarrassment, no judgment",
            ].map((p) => (
              <div key={p} className="flex items-start gap-3 p-4 rounded-xl bg-[var(--color-bg-warm)]">
                <CheckCircle2 size={18} className="text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-[var(--color-text-body)]">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">Piles Surgery Cost in Chandigarh (2026)</h2>
          <p className="text-[var(--color-text-muted)] mb-8">All-inclusive pricing. No hidden charges.</p>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[var(--color-card-border)]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[var(--color-primary)]/5">
                    <th className="text-left px-6 py-4 text-sm font-semibold">Treatment</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold">Chandigarh Cost</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold">Insurance</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Grade 1–2 Piles (Laser)", cost: "₹36,000 – ₹48,000", ins: "Covered" },
                    { name: "Grade 3 Piles (Laser Hemorrhoidoplasty)", cost: "₹48,000 – ₹62,000", ins: "Covered" },
                    { name: "Grade 4 / Complex Piles", cost: "₹60,000 – ₹75,000", ins: "Covered" },
                    { name: "Consultation + Investigations", cost: "₹0 (Free consultation)", ins: "—" },
                  ].map((r) => (
                    <tr key={r.name} className="border-t border-[var(--color-card-border)]">
                      <td className="px-6 py-4 text-sm font-medium">{r.name}</td>
                      <td className="px-6 py-4 text-sm text-[var(--color-primary)] font-semibold">{r.cost}</td>
                      <td className="px-6 py-4">
                        {r.ins === "Covered" ? (
                          <span className="text-xs font-semibold text-[var(--color-success)] bg-[var(--color-success)]/10 px-2 py-1 rounded-full">✓ {r.ins}</span>
                        ) : <span className="text-xs text-[var(--color-text-muted)]">{r.ins}</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">Top Piles Doctor in Chandigarh</h2>
          <p className="text-[var(--color-text-muted)] mb-8">SURGISAATHI-verified proctologist with over 2,100 laser surgeries performed.</p>
          <div className="max-w-sm">
            {chandigarhDoctors.map((d) => (
              <div key={d.name} className="card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center font-bold text-[var(--color-primary)] text-lg flex-shrink-0 relative">
                    {d.name.split(" ").slice(1).map(n => n[0]).join("")}
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <BadgeCheck size={11} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold">{d.name}</h3>
                    <p className="text-sm text-[var(--color-primary)]">{d.spec}</p>
                    <p className="text-xs text-[var(--color-text-muted)] flex items-center gap-1 mt-0.5"><MapPin size={11} /> {d.hospital}</p>
                  </div>
                </div>
                <div className="flex gap-4 text-sm mb-3">
                  <span className="text-[var(--color-text-muted)] flex items-center gap-1"><Clock size={13} /> {d.exp}</span>
                  <span className="text-amber-500 flex items-center gap-1"><Star size={13} fill="currentColor" /> {d.rating}</span>
                  <span className="text-[var(--color-text-muted)] text-xs">{d.surgeries} surgeries</span>
                </div>
                <p className="text-xs text-[var(--color-text-muted)] mb-4 flex items-center gap-1">
                  <BadgeCheck size={11} className="text-green-500" /> Reg. {d.regNo} · SURGISAATHI verified
                </p>
                <Link href="/book-consultation" className="btn-primary w-full justify-center !py-3 !text-sm">
                  Book with Dr. {d.name.split(" ")[1]}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section gradient-warm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">Piles Surgery Chandigarh — FAQs</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="card group cursor-pointer">
                <summary className="flex items-center justify-between font-semibold list-none">
                  {f.q}
                  <span className="text-[var(--color-text-muted)] ml-3 flex-shrink-0 text-lg group-open:rotate-90 transition-transform">›</span>
                </summary>
                <p className="text-sm text-[var(--color-text-body)] mt-3 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Book Free Piles Consultation in Chandigarh</h2>
          <p className="text-white/80 mb-8">Private, confidential consultation. Hindi & Punjabi support available. Same-day appointments.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-consultation" className="btn-primary !bg-[var(--color-accent)] !py-4 !px-10 animate-pulse-glow">
              Get Free Consultation <ArrowRight size={18} />
            </Link>
            <a href="https://wa.me/917011473737?text=Hi%20SURGISAATHI%2C%20I%27d%20like%20a%20consultation%20for%20Piles%20surgery%20in%20Chandigarh" target="_blank" rel="noopener noreferrer" className="btn-secondary !border-white/30 !text-white hover:!bg-white/10 !py-4 !px-10">
              💬 WhatsApp — Chandigarh
            </a>
          </div>
          <p className="text-white/50 text-xs mt-4">🔒 100% confidential · Hindi/Punjabi support · Same-day callback</p>
        </div>
      </section>
    </div>
  );
}
