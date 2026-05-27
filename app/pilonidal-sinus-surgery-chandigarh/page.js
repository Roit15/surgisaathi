import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone, MapPin, IndianRupee, Clock, BadgeCheck, Star, Zap } from "lucide-react";
import InlineLeadForm from "../components/InlineLeadForm";
import JsonLd from "../components/JsonLd";
import { medicalProcedureSchema, localBusinessSchemaForCity, faqPageSchema, breadcrumbSchema, LOCATIONS } from "../../lib/seo";

export const metadata = {
  title: "Pilonidal Sinus Laser Surgery in Chandigarh — Cost ₹25K–₹60K | SURGISAATHI",
  description: "Best pilonidal sinus laser surgery (SiLaC) in Chandigarh at ₹25,000–₹60,000. Minimal scarring, low recurrence. Verified surgeons at partner hospitals. Call +91 70114 73737.",
  alternates: { canonical: "/pilonidal-sinus-surgery-chandigarh" },
  openGraph: {
    title: "Pilonidal Sinus Laser Surgery in Chandigarh | SURGISAATHI",
    description: "Expert laser treatment for pilonidal sinus in Chandigarh. Minimal scarring, low recurrence, top hospitals, transparent pricing from ₹25K.",
    url: "/pilonidal-sinus-surgery-chandigarh",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilonidal Sinus Laser Surgery in Chandigarh | SURGISAATHI",
    description: "Expert laser treatment for pilonidal sinus in Chandigarh. Minimal scarring, low recurrence, top hospitals, transparent pricing from ₹25K.",
  },
};

const chandigarhLocation = LOCATIONS.find((l) => l.city === "Chandigarh");

const faqs = [
  { q: "What is the cost of pilonidal sinus surgery in Chandigarh?", a: "Pilonidal sinus laser surgery (SiLaC) in Chandigarh typically costs between ₹25,000 and ₹60,000 depending on the complexity, number of tracts, and hospital. SURGISAATHI provides transparent all-inclusive pricing." },
  { q: "Is laser surgery better than open surgery for pilonidal sinus?", a: "Yes. Laser surgery (SiLaC) offers significant advantages: minimal cutting, less scarring, lower recurrence rates (5–8% vs 15–30% for open surgery), faster recovery (5–7 days vs 3–6 weeks), and it's a day-care procedure." },
  { q: "Will pilonidal sinus come back after laser surgery?", a: "Laser surgery has a significantly lower recurrence rate (around 5–8%) compared to conventional surgery. Following post-operative hygiene guidelines further reduces this risk." },
  { q: "How long is the recovery after pilonidal sinus surgery in Chandigarh?", a: "Most patients recover within 5–7 days after laser surgery and can return to desk work. Complete healing typically takes 2–3 weeks." },
  { q: "Is pilonidal sinus surgery covered by insurance?", a: "Yes, pilonidal sinus surgery is covered by most health insurance policies. Our team handles pre-authorization and cashless claim processing at our Chandigarh partner hospitals." },
];

const chandigarhDoctors = [
  { name: "Dr. Vikram Khanna", spec: "Senior Proctologist", exp: "16 yrs", rating: "4.9", hospital: "SurgiSaathi Partner Hospital, Sector 34, Chandigarh", surgeries: "2,100+", regNo: "PMC-18742" },
  { name: "Dr. Anita Verma", spec: "General & Colorectal Surgeon", exp: "12 yrs", rating: "4.8", hospital: "SurgiSaathi Partner Hospital, Mohali", surgeries: "1,500+", regNo: "PMC-22156" },
];

export default function PilonidalSinusSurgeryChandigarh() {
  return (
    <div className="pt-16 lg:pt-[72px]">
      <JsonLd
        data={[
          medicalProcedureSchema({
            slug: "pilonidal-sinus",
            data: {
              title: "Pilonidal Sinus Laser Surgery Chandigarh",
              description: "Advanced SiLaC laser treatment for pilonidal sinus at partner hospitals in Chandigarh with minimal scarring",
              priceRange: "₹25,000 – ₹60,000",
              subtitle: "Expert pilonidal sinus treatment with 5–7 day recovery in Chandigarh",
              steps: ["Clinical examination", "Pre-operative assessment", "Anesthesia administration", "Laser ablation of sinus tract", "Minimal wound closure", "Follow-up in 5–7 days"],
              recovery: "5–7 days",
            },
            path: "/pilonidal-sinus-surgery-chandigarh",
          }),
          localBusinessSchemaForCity(chandigarhLocation),
          faqPageSchema(faqs, "/pilonidal-sinus-surgery-chandigarh"),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Pilonidal Sinus Surgery Chandigarh" },
          ]),
        ]}
      />

      {/* HERO */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="trust-badge !bg-white/15 !text-white mb-5 inline-flex">
                <MapPin size={13} /> Chandigarh · Laser Specialists
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Pilonidal Sinus Laser Surgery in{" "}
                <span className="text-[var(--color-accent)]">Chandigarh</span>
              </h1>
              <p className="text-lg text-white/80 mb-4 max-w-xl">
                Advanced SiLaC laser treatment for pilonidal sinus at top hospitals in Chandigarh. Minimal scarring, low recurrence, day-care procedure. Insurance processed.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="flex items-center gap-1.5 bg-white/10 text-white px-3 py-1.5 rounded-xl text-sm">
                  <IndianRupee size={14} /> Starting ₹25,000
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 text-white px-3 py-1.5 rounded-xl text-sm">
                  <Clock size={14} /> Day-care procedure
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 text-white px-3 py-1.5 rounded-xl text-sm">
                  <BadgeCheck size={14} /> Insurance covered
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 text-white px-3 py-1.5 rounded-xl text-sm">
                  <Zap size={14} /> Low recurrence rate
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["V","A","K","M","S"].map((l) => (
                    <div key={l} className="w-8 h-8 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center text-xs font-bold text-white">{l}</div>
                  ))}
                </div>
                <p className="text-white/70 text-sm"><span className="text-white font-semibold">1,800+ Chandigarh patients</span> treated successfully</p>
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

      {/* WHY LASER */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Why Choose Laser Surgery for Pilonidal Sinus in Chandigarh?</h2>
          <p className="text-[var(--color-text-muted)] mb-8 max-w-2xl">
            Traditional open excision of pilonidal sinus involves large wounds and weeks of dressing changes. SiLaC laser surgery destroys the sinus tract from the inside — preserving surrounding tissue and dramatically reducing recovery time.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Minimal incision — no large wound or stitches",
              "30–45 minute day-care procedure",
              "Return to desk work within 5–7 days",
              "Low recurrence rate (5–8%) vs open surgery (15–30%)",
              "Less scarring — laser preserves healthy tissue",
              "100% cashless insurance processing",
              "Confidential — private consultation available",
              "USFDA-approved laser technology",
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
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">Pilonidal Sinus Surgery Cost in Chandigarh (2026)</h2>
          <p className="text-[var(--color-text-muted)] mb-8">All-inclusive pricing. No hidden charges.</p>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[var(--color-card-border)]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[var(--color-primary)]/5">
                    <th className="text-left px-6 py-4 text-sm font-semibold">Treatment</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold">Cost Range</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold">Insurance</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Simple Pilonidal Sinus (SiLaC Laser)", cost: "₹25,000 – ₹40,000", ins: "Covered" },
                    { name: "Complex / Multi-Tract Sinus (Laser)", cost: "₹40,000 – ₹55,000", ins: "Covered" },
                    { name: "Recurrent Sinus (Laser + Flap)", cost: "₹50,000 – ₹60,000", ins: "Covered" },
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
          <p className="text-xs text-[var(--color-text-muted)] mt-4">* Prices depend on sinus complexity, number of tracts, and hospital. Our coordinator provides an exact quote after free consultation.</p>
        </div>
      </section>

      {/* DOCTORS */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">Pilonidal Sinus Surgeons in Chandigarh</h2>
          <p className="text-[var(--color-text-muted)] mb-8">Credential-verified surgeons experienced in SiLaC laser treatment.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

      {/* COMPREHENSIVE CONTENT */}
      <section className="section bg-[var(--color-bg-warm)] border-t border-[var(--color-card-border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 article-body">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">Complete Guide to Pilonidal Sinus Treatment in Chandigarh</h2>
          
          <p>Pilonidal sinus is a chronic condition that commonly affects young adults, particularly those who sit for long periods. It manifests as an abnormal skin growth or cyst near the tailbone that contains hair and debris. In Chandigarh, our expert surgeons offer the most advanced treatments to ensure quick recovery and low recurrence.</p>
          
          <h3>What Causes Pilonidal Sinus?</h3>
          <p>The exact cause involves loose hairs penetrating the skin in the natal cleft, creating a foreign body reaction. Contributing factors include:</p>
          <ul>
            <li><strong>Prolonged sitting:</strong> Desk jobs and long commutes</li>
            <li><strong>Excessive body hair:</strong> Particularly in the sacrococcygeal area</li>
            <li><strong>Deep natal cleft:</strong> Anatomical predisposition</li>
            <li><strong>Obesity:</strong> Increased pressure and moisture</li>
            <li><strong>Poor hygiene:</strong> Infrequent cleaning of the area</li>
          </ul>

          <h3>SiLaC Laser Treatment — The Modern Approach</h3>
          <p>SiLaC (Sinus Laser Closure) is a state-of-the-art technique that uses a radial-firing laser fibre to destroy the sinus tract from the inside.</p>
          <ol>
            <li><strong>Preparation:</strong> The sinus cavity is cleaned under anesthesia.</li>
            <li><strong>Laser insertion:</strong> A thin laser fibre is introduced.</li>
            <li><strong>Ablation:</strong> The laser fires radially, destroying the lining and sealing it shut.</li>
            <li><strong>Closure:</strong> The entry point is left to heal or secured with a small suture.</li>
          </ol>

          <h3>Post-Surgery Care and Prevention</h3>
          <p>Following these guidelines helps ensure complete healing and prevents recurrence:</p>
          <ul>
            <li>Keep the area clean and dry</li>
            <li>Hair removal around the surgical site</li>
            <li>Avoid prolonged sitting for 2–3 weeks</li>
            <li>Wear loose, breathable clothing</li>
            <li>Attend follow-up appointments</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="section gradient-warm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">Pilonidal Sinus Surgery Chandigarh — FAQs</h2>
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
          <h2 className="text-3xl font-bold text-white mb-4">Book Pilonidal Sinus Consultation in Chandigarh</h2>
          <p className="text-white/80 mb-8">Advanced laser treatment with minimal scarring. Private, confidential consultation with a verified surgeon.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-consultation" className="btn-primary !bg-[var(--color-accent)] !py-4 !px-10 animate-pulse-glow">
              Get Free Consultation <ArrowRight size={18} />
            </Link>
            <a href="https://wa.me/917011473737?text=Hi%20SURGISAATHI%2C%20I%27d%20like%20a%20consultation%20for%20Pilonidal%20Sinus%20surgery%20in%20Chandigarh" target="_blank" rel="noopener noreferrer" className="btn-secondary !border-white/30 !text-white hover:!bg-white/10 !py-4 !px-10">
              💬 WhatsApp — Pilonidal Sinus, Chandigarh
            </a>
          </div>
          <p className="text-white/50 text-xs mt-4">🔒 100% confidential · No judgment · Same-day callback available</p>
        </div>
      </section>
    </div>
  );
}
