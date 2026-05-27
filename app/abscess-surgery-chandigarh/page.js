import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone, MapPin, IndianRupee, Clock, BadgeCheck, Star, AlertTriangle } from "lucide-react";
import InlineLeadForm from "../components/InlineLeadForm";
import JsonLd from "../components/JsonLd";
import { medicalProcedureSchema, localBusinessSchemaForCity, faqPageSchema, breadcrumbSchema, LOCATIONS } from "../../lib/seo";

export const metadata = {
  title: "Abscess Drainage Surgery in Chandigarh — Cost ₹15K–₹35K | SURGISAATHI",
  description: "Best perianal abscess drainage in Chandigarh at ₹15,000–₹35,000. Expert surgeons at partner hospitals. Same-day discharge, cashless insurance, free consultation. Call +91 70114 73737.",
  alternates: { canonical: "/abscess-surgery-chandigarh" },
  openGraph: {
    title: "Perianal Abscess Surgery in Chandigarh | SURGISAATHI",
    description: "Expert abscess drainage in Chandigarh. Quick relief, verified surgeons, transparent pricing from ₹15K, cashless insurance support.",
    url: "/abscess-surgery-chandigarh",
  },
  twitter: {
    card: "summary_large_image",
    title: "Perianal Abscess Surgery in Chandigarh | SURGISAATHI",
    description: "Expert abscess drainage in Chandigarh. Quick relief, verified surgeons, transparent pricing from ₹15K, cashless insurance support.",
  },
};

const chandigarhLocation = LOCATIONS.find((l) => l.city === "Chandigarh");

const faqs = [
  { q: "What is the cost of abscess drainage in Chandigarh?", a: "Perianal abscess drainage in Chandigarh typically costs between ₹15,000 and ₹35,000 depending on the size, complexity, and hospital. SURGISAATHI provides transparent all-inclusive pricing. Most cases are covered by health insurance." },
  { q: "Is abscess drainage available on weekends in Chandigarh?", a: "Yes, SURGISAATHI partner hospitals in Chandigarh offer abscess drainage on all days including weekends. Abscesses are treated as urgent cases, so we prioritize quick scheduling." },
  { q: "Which hospitals in Chandigarh perform abscess drainage?", a: "SURGISAATHI partners with leading hospitals in Sector 34 and Mohali for abscess drainage procedures. All partner hospitals are accredited and equipped with modern surgical facilities." },
  { q: "How long does recovery take after abscess drainage?", a: "Most patients recover within 2–3 days and can return to work. The wound may take 2–4 weeks to fully heal with proper care. Our team provides complete post-operative guidance." },
  { q: "Can an abscess come back after drainage?", a: "With proper drainage and post-operative care, recurrence is less common. About 30–50% of abscesses may develop into a fistula, which we monitor closely during follow-up visits." },
];

const chandigarhDoctors = [
  { name: "Dr. Vikram Khanna", spec: "Senior Proctologist", exp: "16 yrs", rating: "4.9", hospital: "SurgiSaathi Partner Hospital, Sector 34, Chandigarh", surgeries: "2,100+", regNo: "PMC-18742" },
  { name: "Dr. Anita Verma", spec: "General & Colorectal Surgeon", exp: "12 yrs", rating: "4.8", hospital: "SurgiSaathi Partner Hospital, Mohali", surgeries: "1,500+", regNo: "PMC-22156" },
];

export default function AbscessSurgeryChandigarh() {
  return (
    <div className="pt-16 lg:pt-[72px]">
      <JsonLd
        data={[
          medicalProcedureSchema({
            slug: "abscess",
            data: {
              title: "Abscess Drainage Surgery Chandigarh",
              description: "Quick, safe perianal abscess drainage at partner hospitals in Chandigarh with same-day discharge",
              priceRange: "₹15,000 – ₹35,000",
              subtitle: "Expert abscess treatment with immediate pain relief in Chandigarh",
              steps: ["Emergency assessment", "Imaging if needed", "Local/general anesthesia", "Incision and drainage", "Wound packing & dressing", "Follow-up in 2–3 days"],
              recovery: "2–3 days",
            },
            path: "/abscess-surgery-chandigarh",
          }),
          localBusinessSchemaForCity(chandigarhLocation),
          faqPageSchema(faqs, "/abscess-surgery-chandigarh"),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Abscess Surgery Chandigarh" },
          ]),
        ]}
      />

      {/* HERO */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="trust-badge !bg-white/15 !text-white mb-5 inline-flex">
                <MapPin size={13} /> Chandigarh · Expert Surgeons
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Perianal Abscess Surgery in{" "}
                <span className="text-[var(--color-accent)]">Chandigarh</span>
              </h1>
              <p className="text-lg text-white/80 mb-4 max-w-xl">
                Fast, safe abscess drainage at accredited hospitals in Chandigarh and Mohali. Immediate pain relief, same-day discharge, expert surgical care.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="flex items-center gap-1.5 bg-white/10 text-white px-3 py-1.5 rounded-xl text-sm">
                  <IndianRupee size={14} /> Starting ₹15,000
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 text-white px-3 py-1.5 rounded-xl text-sm">
                  <Clock size={14} /> Same-day discharge
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 text-white px-3 py-1.5 rounded-xl text-sm">
                  <BadgeCheck size={14} /> Insurance covered
                </span>
                <span className="flex items-center gap-1.5 bg-red-500/20 text-white px-3 py-1.5 rounded-xl text-sm">
                  <AlertTriangle size={14} /> Urgent care available
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
          <p className="text-center text-lg font-bold mb-4">Book Urgent Consultation in Chandigarh</p>
          <InlineLeadForm />
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Why Choose SURGISAATHI for Abscess Drainage in Chandigarh?</h2>
          <p className="text-[var(--color-text-muted)] mb-8 max-w-2xl">
            Perianal abscesses need prompt treatment. Delays can result in fistula formation or spreading infection. Our Chandigarh team provides rapid access to expert surgical care.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Same-day or next-day surgery scheduling",
              "15–20 minute procedure under anesthesia",
              "Same-day discharge — go home same evening",
              "Immediate pain relief after drainage",
              "Fistula prevention monitoring included",
              "100% cashless insurance processing",
              "Confidential — private consultation available",
              "USFDA-approved surgical equipment",
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
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">Abscess Surgery Cost in Chandigarh (2026)</h2>
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
                    { name: "Simple Abscess Drainage", cost: "₹15,000 – ₹22,000", ins: "Covered" },
                    { name: "Complex / Large Abscess", cost: "₹22,000 – ₹30,000", ins: "Covered" },
                    { name: "Recurrent Abscess + Fistula Assessment", cost: "₹28,000 – ₹35,000", ins: "Covered" },
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
          <p className="text-xs text-[var(--color-text-muted)] mt-4">* Prices are indicative and depend on abscess size, complexity, and hospital. Our coordinator provides an exact quote after free consultation.</p>
        </div>
      </section>

      {/* DOCTORS */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">Abscess Surgeons in Chandigarh</h2>
          <p className="text-[var(--color-text-muted)] mb-8">Credential-verified surgeons with extensive experience in anorectal procedures.</p>
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
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">Complete Guide to Perianal Abscess Treatment in Chandigarh</h2>
          
          <p>A perianal abscess is a painful, pus-filled cavity that develops near the anus or rectum. It occurs when bacteria infect the small glands lining the anal canal, causing inflammation and pus accumulation. In the Chandigarh tricity area, our expert surgeons provide rapid access to safe abscess drainage at accredited hospitals.</p>
          
          <h3>Recognising a Perianal Abscess</h3>
          <p>Early recognition and prompt treatment are crucial. Common signs include:</p>
          <ul>
            <li><strong>Severe, throbbing pain</strong> near the anus, especially when sitting</li>
            <li><strong>Visible swelling</strong> or a firm, tender lump near the anal region</li>
            <li><strong>Redness and warmth</strong> around the affected area</li>
            <li><strong>Fever and chills</strong> indicating the body is fighting infection</li>
            <li><strong>Pus or discharge</strong> if the abscess has started to drain spontaneously</li>
          </ul>

          <h3>Why Surgical Drainage Is Necessary</h3>
          <p>Unlike some infections that respond to antibiotics alone, perianal abscesses almost always require surgical drainage. The pus cavity creates a walled-off environment where antibiotics cannot penetrate effectively. Drainage allows the infection to resolve and healing to begin.</p>

          <h3>What to Expect at Our Chandigarh Hospitals</h3>
          <p>When you book through SURGISAATHI in Chandigarh, here&apos;s the typical process:</p>
          <ol>
            <li><strong>Rapid Assessment:</strong> Our care coordinator schedules you within 24 hours. The surgeon evaluates the abscess.</li>
            <li><strong>Anesthesia:</strong> Local or short general anesthesia ensures a completely pain-free procedure.</li>
            <li><strong>Drainage:</strong> A 15–20 minute procedure to drain the pus cavity completely.</li>
            <li><strong>Discharge:</strong> You go home the same day with wound care instructions and medications.</li>
            <li><strong>Follow-up:</strong> A check-up in 2–3 days to monitor healing and screen for fistula formation.</li>
          </ol>

          <h3>Post-Surgery Recovery in Chandigarh</h3>
          <p>Recovery after abscess drainage is typically fast. Most patients resume daily activities within 2–3 days. Key recovery tips:</p>
          <ul>
            <li>Sitz baths (warm water soaks) 2–3 times daily to promote healing</li>
            <li>Complete the full course of prescribed antibiotics</li>
            <li>Keep the wound area clean and dry</li>
            <li>Eat a high-fiber diet and drink plenty of water to prevent constipation</li>
            <li>Attend all follow-up appointments — especially important for fistula monitoring</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="section gradient-warm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">Abscess Surgery Chandigarh — FAQs</h2>
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
          <h2 className="text-3xl font-bold text-white mb-4">Don&apos;t Delay — Get Expert Abscess Treatment in Chandigarh</h2>
          <p className="text-white/80 mb-8">Prompt drainage prevents complications. Private, confidential consultation with a verified surgeon.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-consultation" className="btn-primary !bg-[var(--color-accent)] !py-4 !px-10 animate-pulse-glow">
              Get Free Consultation <ArrowRight size={18} />
            </Link>
            <a href="https://wa.me/917011473737?text=Hi%20SURGISAATHI%2C%20I%27d%20like%20an%20urgent%20consultation%20for%20Abscess%20in%20Chandigarh" target="_blank" rel="noopener noreferrer" className="btn-secondary !border-white/30 !text-white hover:!bg-white/10 !py-4 !px-10">
              💬 WhatsApp — Abscess, Chandigarh
            </a>
          </div>
          <p className="text-white/50 text-xs mt-4">🔒 100% confidential · No judgment · Same-day callback available</p>
        </div>
      </section>
    </div>
  );
}
