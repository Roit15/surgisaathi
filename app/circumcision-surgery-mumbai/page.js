import Link from "next/link";
import { CheckCircle2, ArrowRight, MapPin, IndianRupee, Clock, BadgeCheck, Star } from "lucide-react";
import InlineLeadForm from "../components/InlineLeadForm";
import JsonLd from "../components/JsonLd";
import { medicalProcedureSchema, localBusinessSchemaForCity, faqPageSchema, breadcrumbSchema, LOCATIONS } from "../../lib/seo";

export const metadata = {
  title: "Circumcision Surgery in Mumbai — Cost ₹30K–₹42K | SURGISAATHI",
  description: "Safe laser circumcision surgery in Mumbai at ₹30,000–₹42,000. Day-care procedure, same-day discharge. Verified surgeons at Apollo, Fortis & NABH hospitals. Cashless insurance. Free consultation.",
  alternates: { canonical: "/circumcision-surgery-mumbai" },
  openGraph: {
    title: "Circumcision Surgery in Mumbai | SURGISAATHI",
    description: "Safe laser circumcision in Mumbai at ₹30K–₹42K. Same-day discharge, cashless insurance.",
    url: "/circumcision-surgery-mumbai",
  },
};

const mumbaiLocation = LOCATIONS.find((l) => l.city === "Mumbai");

const faqs = [
  { q: "What is the cost of circumcision surgery in Mumbai?", a: "Laser circumcision in Mumbai costs between ₹30,000 and ₹42,000 all-inclusive. Stapler circumcision is slightly lower at ₹25,000–₹35,000. Prices include surgeon fee, hospital charges, anaesthesia, and post-op dressing. Most cases are covered by health insurance." },
  { q: "Is circumcision surgery painful?", a: "No. The procedure is performed under local or general anaesthesia, so you feel no pain during surgery. Post-operative discomfort is minimal and managed with prescribed medications. Most patients rate pain 1–2 out of 10 after laser circumcision." },
  { q: "How long does circumcision recovery take in Mumbai?", a: "Most patients undergoing laser circumcision at our Mumbai hospitals recover within 3–5 days for light activities and return to work within a week. Complete healing takes 2–3 weeks. Our care coordinator provides a detailed recovery guide." },
  { q: "Is circumcision covered by insurance in Mumbai?", a: "Circumcision for medical reasons (phimosis, balanitis, recurrent infections) is covered by most health insurance policies in Mumbai. Our team verifies your coverage and handles cashless pre-authorization." },
  { q: "Is circumcision surgery private and confidential?", a: "Absolutely. SURGISAATHI is designed for exactly this — sensitive conditions where privacy matters most. All consultations are 100% confidential. Your records are encrypted and shared only with your assigned surgeon. You can also consult via WhatsApp without speaking your condition aloud." },
];

const mumbaiDoctors = [
  { name: "Dr. Priya Mehta", spec: "General & Laparoscopic Surgeon", exp: "14 yrs", rating: "4.8", hospital: "Fortis Hospital, Mulund, Mumbai", surgeries: "1,800+", regNo: "MCI-31905" },
  { name: "Dr. Rajesh Sharma", spec: "Senior Urologist & Proctologist", exp: "18 yrs", rating: "4.9", hospital: "Apollo Hospital, Andheri West, Mumbai", surgeries: "2,400+", regNo: "MCI-27483" },
];

export default function CircumcisionSurgeryMumbai() {
  return (
    <div className="pt-16 lg:pt-[72px]">
      <JsonLd
        data={[
          medicalProcedureSchema({
            slug: "circumcision",
            data: {
              title: "Laser Circumcision Surgery Mumbai",
              description: "Safe laser circumcision at NABH hospitals in Mumbai with same-day discharge",
              priceRange: "₹30,000 – ₹42,000",
              subtitle: "Private circumcision surgery options with typical 3–5 day recovery in Mumbai",
              steps: ["Consultation & assessment", "Pre-operative tests", "Local/general anaesthesia", "Laser circumcision", "Same-day discharge", "Follow-up in 3–5 days"],
              recovery: "3–5 days",
            },
            path: "/circumcision-surgery-mumbai",
          }),
          localBusinessSchemaForCity(mumbaiLocation),
          faqPageSchema(faqs, "/circumcision-surgery-mumbai"),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Circumcision Surgery Mumbai" }]),
        ]}
      />

      {/* HERO */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="trust-badge !bg-white/15 !text-white mb-5 inline-flex">
                <MapPin size={13} /> Mumbai · Private & Confidential
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Circumcision Surgery in{" "}
                <span className="text-[var(--color-accent)]">Mumbai</span>
              </h1>
              <p className="text-lg text-white/80 mb-4 max-w-xl">
                Safe laser and stapler circumcision at NABH hospitals in Mumbai. Same-day discharge, 3–5 day recovery. 100% private consultation via phone or WhatsApp.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="flex items-center gap-1.5 bg-white/10 text-white px-3 py-1.5 rounded-xl text-sm"><IndianRupee size={14} /> Starting ₹30,000</span>
                <span className="flex items-center gap-1.5 bg-white/10 text-white px-3 py-1.5 rounded-xl text-sm"><Clock size={14} /> Same-day discharge</span>
                <span className="flex items-center gap-1.5 bg-white/10 text-white px-3 py-1.5 rounded-xl text-sm"><BadgeCheck size={14} /> 100% confidential</span>
              </div>
            </div>
            <div className="hidden lg:flex justify-end"><InlineLeadForm /></div>
          </div>
        </div>
      </section>

      <section className="lg:hidden bg-[var(--color-bg-warm)] py-10">
        <div className="max-w-lg mx-auto px-4">
          <p className="text-center text-lg font-bold mb-4">Book Private Consultation in Mumbai</p>
          <InlineLeadForm />
        </div>
      </section>

      {/* WHY */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Laser vs Stapler Circumcision in Mumbai — Which is Better?</h2>
          <p className="text-[var(--color-text-muted)] mb-8 max-w-2xl">
            SURGISAATHI offers both techniques. Your surgeon will recommend a suitable option based on your anatomy and medical history during the free consultation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="card border-[var(--color-primary)] ring-2 ring-[var(--color-primary)]/20">
              <span className="text-xs font-bold text-white bg-[var(--color-primary)] px-3 py-1 rounded-full mb-3 inline-block">✓ Most Recommended</span>
              <h3 className="font-bold text-lg mb-3">Laser Circumcision</h3>
              <ul className="space-y-2">
                {["Minimal bleeding — laser seals as it cuts","Faster healing — 3–5 days","Less post-op pain","Precise, cosmetically superior result","Same-day discharge"].map(p => (
                  <li key={p} className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]"><CheckCircle2 size={14} className="text-[var(--color-success)]" />{p}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3 className="font-semibold text-lg mb-3 mt-7">Stapler Circumcision</h3>
              <ul className="space-y-2">
                {["Quick procedure — 15–20 minutes","Uniform, neat cut","Good cosmetic result","Slightly lower cost"].map(p => (
                  <li key={p} className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]"><CheckCircle2 size={14} className="text-[var(--color-success)]" />{p}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">Circumcision Surgery Cost in Mumbai (2026)</h2>
          <p className="text-[var(--color-text-muted)] mb-8">All-inclusive pricing. No hidden charges.</p>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[var(--color-card-border)]">
            <table className="w-full">
              <thead>
                <tr className="bg-[var(--color-primary)]/5">
                  <th className="text-left px-6 py-4 text-sm font-semibold">Procedure</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold">Mumbai Cost</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold">Insurance</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Laser Circumcision", cost: "₹30,000 – ₹42,000", ins: "Covered (medical)" },
                  { name: "Stapler Circumcision", cost: "₹25,000 – ₹35,000", ins: "Covered (medical)" },
                  { name: "Pre-op tests + consultation", cost: "₹0 (Free)", ins: "—" },
                ].map((r) => (
                  <tr key={r.name} className="border-t border-[var(--color-card-border)]">
                    <td className="px-6 py-4 text-sm font-medium">{r.name}</td>
                    <td className="px-6 py-4 text-sm text-[var(--color-primary)] font-semibold">{r.cost}</td>
                    <td className="px-6 py-4">
                      {r.ins !== "—" ? (
                        <span className="text-xs font-semibold text-[var(--color-success)] bg-[var(--color-success)]/10 px-2 py-1 rounded-full">✓ {r.ins}</span>
                      ) : <span className="text-xs text-[var(--color-text-muted)]">{r.ins}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[var(--color-text-muted)] mt-4">* Insurance covers circumcision for medical indications (phimosis, balanitis, recurrent infections). Our team verifies your eligibility for free.</p>
        </div>
      </section>

      {/* DOCTORS */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">Circumcision Surgeons in Mumbai</h2>
          <p className="text-[var(--color-text-muted)] mb-8">Verified surgeons with experience in both laser and stapler techniques.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {mumbaiDoctors.map((d) => (
              <div key={d.name} className="card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center font-bold text-[var(--color-primary)] text-lg flex-shrink-0 relative">
                    {d.name.split(" ").slice(1).map(n => n[0]).join("")}
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center"><BadgeCheck size={11} className="text-white" /></div>
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
                </div>
                <Link href="/book-consultation" className="btn-primary w-full justify-center !py-3 !text-sm">Book Consultation</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section gradient-warm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">Circumcision in Mumbai — FAQs</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="card group cursor-pointer">
                <summary className="flex items-center justify-between font-semibold list-none">
                  {f.q}<span className="text-[var(--color-text-muted)] ml-3 flex-shrink-0 text-lg group-open:rotate-90 transition-transform">›</span>
                </summary>
                <p className="text-sm text-[var(--color-text-body)] mt-3 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="gradient-hero py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Book Private Circumcision Consultation in Mumbai</h2>
          <p className="text-white/80 mb-8">100% confidential. Our team will never ask you to speak your condition aloud if you prefer WhatsApp.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-consultation" className="btn-primary !bg-[var(--color-accent)] !py-4 !px-10 animate-pulse-glow">
              Get Free Consultation <ArrowRight size={18} />
            </Link>
            <a href="https://wa.me/917011473737?text=Hi%20SURGISAATHI%2C%20I%27d%20like%20a%20private%20consultation%20for%20Circumcision%20in%20Mumbai" target="_blank" rel="noopener noreferrer" className="btn-secondary !border-white/30 !text-white hover:!bg-white/10 !py-4 !px-10">
              💬 WhatsApp — Private & Confidential
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
