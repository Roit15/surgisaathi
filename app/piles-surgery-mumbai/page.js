import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone, MapPin, IndianRupee, Clock, BadgeCheck, Star } from "lucide-react";
import InlineLeadForm from "../components/InlineLeadForm";
import JsonLd from "../components/JsonLd";
import { medicalProcedureSchema, localBusinessSchemaForCity, faqPageSchema, breadcrumbSchema, LOCATIONS } from "../../lib/seo";

export const metadata = {
  title: "Laser Piles Surgery in Mumbai — Cost ₹38K–₹80K | SURGISAATHI",
  description: "Best laser piles surgery in Mumbai at ₹38,000–₹80,000. Verified proctologists at Apollo, Fortis & top NABH hospitals. Cashless insurance, same-day discharge, free consultation. Call +91 70114 73737.",
  alternates: { canonical: "/piles-surgery-mumbai" },
  openGraph: {
    title: "Laser Piles Surgery in Mumbai | SURGISAATHI",
    description: "Expert laser piles treatment in Mumbai. Verified surgeons, transparent pricing from ₹38K, cashless insurance support.",
    url: "/piles-surgery-mumbai",
    images: [{ url: "/images/og/piles-surgery-mumbai.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laser Piles Surgery in Mumbai | SURGISAATHI",
    description: "Expert laser piles treatment in Mumbai. Verified surgeons, transparent pricing from ₹38K, cashless insurance support.",
    images: ["/images/og/piles-surgery-mumbai.png"],
  },
};

const mumbaiLocation = LOCATIONS.find((l) => l.city === "Mumbai");

const faqs = [
  { q: "What is the cost of laser piles surgery in Mumbai?", a: "Laser piles surgery in Mumbai typically costs between ₹38,000 and ₹80,000 depending on the grade of piles, hospital, and surgeon. SURGISAATHI provides all-inclusive transparent pricing with no hidden charges. Most cases are fully covered by health insurance." },
  { q: "Which hospitals in Mumbai perform laser piles surgery?", a: "SURGISAATHI partners with Apollo Hospital Andheri, Fortis Hospital Mulund, Kokilaben Hospital, and other NABH-accredited hospitals across Mumbai for laser piles procedures." },
  { q: "How long does piles surgery recovery take in Mumbai?", a: "Most patients undergoing laser piles surgery at our Mumbai hospitals recover within 2–3 days and return to work within a week. The procedure itself is typically 30–45 minutes and performed as a day-care surgery." },
  { q: "Is piles surgery covered by insurance in Mumbai?", a: "Yes. Laser piles surgery (hemorrhoidoplasty) is covered by major health insurers in Mumbai including Star Health, HDFC Ergo, ICICI Lombard, Bajaj Allianz, and New India Assurance. Our insurance team handles pre-authorization and cashless processing." },
  { q: "How do I book a free consultation in Mumbai?", a: "Fill the form on this page or WhatsApp us at +91 70114 73737. Our Mumbai care coordinator will call you within 2 hours to discuss your condition confidentially and schedule your consultation." },
];

const mumbaiDoctors = [
  { name: "Dr. Rajesh Sharma", spec: "Senior Proctologist", exp: "18 yrs", rating: "4.9", hospital: "Apollo Hospital, Andheri West, Mumbai", surgeries: "2,400+", regNo: "MCI-27483" },
  { name: "Dr. Priya Mehta", spec: "General & Colorectal Surgeon", exp: "14 yrs", rating: "4.8", hospital: "Fortis Hospital, Mulund, Mumbai", surgeries: "1,800+", regNo: "MCI-31905" },
];

export default function PilesSurgeryMumbai() {
  return (
    <div className="pt-16 lg:pt-[72px]">
      <JsonLd
        data={[
          medicalProcedureSchema({
            slug: "piles",
            data: {
              title: "Laser Piles Surgery Mumbai",
              description: "Minimally invasive laser treatment for hemorrhoids at NABH hospitals in Mumbai",
              priceRange: "₹38,000 – ₹80,000",
              subtitle: "Expert piles treatment with 2–3 day recovery in Mumbai",
              steps: ["Proctoscopy examination", "Pre-operative blood tests", "Laser hemorrhoidoplasty", "Day-care discharge", "Follow-up in 2–3 days"],
              recovery: "2–3 days",
            },
            path: "/piles-surgery-mumbai",
          }),
          localBusinessSchemaForCity(mumbaiLocation),
          faqPageSchema(faqs, "/piles-surgery-mumbai"),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Piles Surgery Mumbai" },
          ]),
        ]}
      />

      {/* HERO */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="trust-badge !bg-white/15 !text-white mb-5 inline-flex">
                <MapPin size={13} /> Mumbai · Verified Proctologists
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Laser Piles Surgery in{" "}
                <span className="text-[var(--color-accent)]">Mumbai</span>
              </h1>
              <p className="text-lg text-white/80 mb-4 max-w-xl">
                Minimally invasive laser hemorrhoidoplasty at NABH-accredited hospitals. Same-day discharge, 2–3 day recovery. Cashless insurance processed.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="flex items-center gap-1.5 bg-white/10 text-white px-3 py-1.5 rounded-xl text-sm">
                  <IndianRupee size={14} /> Starting ₹38,000
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 text-white px-3 py-1.5 rounded-xl text-sm">
                  <Clock size={14} /> Same-day discharge
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 text-white px-3 py-1.5 rounded-xl text-sm">
                  <BadgeCheck size={14} /> Insurance covered
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["R","A","D","S","P"].map((l) => (
                    <div key={l} className="w-8 h-8 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center text-xs font-bold text-white">{l}</div>
                  ))}
                </div>
                <p className="text-white/70 text-sm"><span className="text-white font-semibold">3,500+ Mumbai patients</span> treated successfully</p>
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
          <p className="text-center text-lg font-bold mb-4">Book Free Consultation in Mumbai</p>
          <InlineLeadForm />
        </div>
      </section>

      {/* WHY LASER */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Why Choose Laser Piles Surgery in Mumbai?</h2>
          <p className="text-[var(--color-text-muted)] mb-8 max-w-2xl">
            Traditional piles surgery involves cuts, stitches, and weeks of recovery. Laser hemorrhoidoplasty at our Mumbai hospitals uses focused laser energy to shrink hemorrhoidal tissue — no cuts, minimal bleeding, and you go home the same day.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "No cuts or stitches — laser precision",
              "30–45 minute procedure at NABH hospital",
              "Same-day discharge — go home same evening",
              "Back to work within 2–3 days",
              "Less than 5% recurrence rate with laser",
              "100% cashless insurance processing",
              "Confidential — private consultation available",
              "Spinal or local anesthesia — minimal discomfort",
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
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">Piles Surgery Cost in Mumbai (2026)</h2>
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
                    { name: "Grade 1–2 Piles (Laser)", cost: "₹38,000 – ₹52,000", ins: "Covered" },
                    { name: "Grade 3 Piles (Laser Hemorrhoidoplasty)", cost: "₹52,000 – ₹70,000", ins: "Covered" },
                    { name: "Grade 4 / Complex Piles", cost: "₹65,000 – ₹80,000", ins: "Covered" },
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
          <p className="text-xs text-[var(--color-text-muted)] mt-4">* Prices are indicative and depend on grade of piles, hospital, and surgeon. Our coordinator provides an exact quote after free consultation.</p>
        </div>
      </section>

      {/* DOCTORS */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">Top Piles Surgeons in Mumbai</h2>
          <p className="text-[var(--color-text-muted)] mb-8">Credential-verified proctologists with 10+ years of laser surgery experience.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {mumbaiDoctors.map((d) => (
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
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">Comprehensive Guide to Piles (Hemorrhoids) Treatment in Mumbai</h2>
          
          <p>If you're suffering from piles (hemorrhoids) in Mumbai, you are not alone. It is estimated that nearly 50% of adults experience symptoms of hemorrhoids by age 50. With Mumbai's fast-paced lifestyle, dietary habits, and long commuting hours, the incidence of anorectal conditions is rising. Fortunately, advanced medical treatments have made piles surgery virtually painless, with significantly shorter recovery times.</p>
          
          <h3>What Are Piles?</h3>
          <p>Piles, clinically known as hemorrhoids, are swollen and inflamed veins in your anus and lower rectum, similar to varicose veins. They can develop inside the rectum (internal hemorrhoids) or under the skin around the anus (external hemorrhoids).</p>
          
          <ul>
            <li><strong>Grade 1:</strong> Small swellings inside the lining of the anus. They do not protrude outside.</li>
            <li><strong>Grade 2:</strong> Larger swellings that may come out during a bowel movement but retract naturally.</li>
            <li><strong>Grade 3:</strong> Hemorrhoids that prolapse out but can be pushed back in manually.</li>
            <li><strong>Grade 4:</strong> Permanently prolapsed hemorrhoids that cannot be pushed back inside. These often require immediate surgical intervention.</li>
          </ul>

          <h3>Signs and Symptoms You Shouldn't Ignore</h3>
          <p>Early diagnosis is crucial for effective treatment. You should consult a proctologist in Mumbai if you experience:</p>
          <ul>
            <li>Painless bleeding during bowel movements (bright red blood)</li>
            <li>Itching, irritation, or swelling around your anal region</li>
            <li>Pain or discomfort, especially when sitting or passing stool</li>
            <li>A sensitive or painful lump near your anus</li>
          </ul>

          <h3>Traditional Surgery vs. Laser Hemorrhoidoplasty (LHP)</h3>
          <p>Historically, treating severe piles involved painful open surgery (hemorrhoidectomy) which required a hospital stay of several days, daily dressing changes, and weeks of painful recovery.</p>
          
          <p>At SURGISAATHI, we exclusively recommend <strong>Laser Hemorrhoidoplasty (LHP)</strong>. This state-of-the-art procedure is performed by our expert proctologists at NABH-accredited hospitals in Mumbai.</p>
          
          <p><strong>Benefits of Laser Surgery over Traditional Methods:</strong></p>
          <ul>
            <li><strong>No Cuts or Stitches:</strong> The laser safely shrinks the hemorrhoidal tissue from the inside without cutting healthy tissue.</li>
            <li><strong>Minimal Pain and Bleeding:</strong> Because there are no incisions, post-operative pain is negligible.</li>
            <li><strong>Same-Day Discharge:</strong> You will typically be discharged from the hospital within 12 to 24 hours of the surgery.</li>
            <li><strong>Quick Return to Normalcy:</strong> Most patients resume their desk jobs and regular routines within 2 to 3 days.</li>
            <li><strong>High Success Rate:</strong> Laser surgery has a significantly lower recurrence rate compared to traditional procedures.</li>
          </ul>

          <h3>Preparing for Your Surgery in Mumbai</h3>
          <p>When you book through SURGISAATHI, our care coordinators handle the logistics. Before the surgery, you will undergo basic blood tests and an ECG. The procedure is usually performed under spinal or short general anesthesia, meaning you won't feel any pain during the operation.</p>
          
          <h3>Post-Surgery Care and Diet</h3>
          <p>Recovery is fast, but following your surgeon's advice is vital to prevent recurrence. A high-fiber diet, plenty of water (at least 3-4 liters a day), and avoiding straining during bowel movements are essential. Sitz baths (sitting in warm water) may be recommended to soothe the area.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section gradient-warm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">Piles Surgery Mumbai — FAQs</h2>
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
          <h2 className="text-3xl font-bold text-white mb-4">Book Free Piles Consultation in Mumbai</h2>
          <p className="text-white/80 mb-8">Private, confidential consultation with a verified proctologist. Same-day appointments available.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-consultation" className="btn-primary !bg-[var(--color-accent)] !py-4 !px-10 animate-pulse-glow">
              Get Free Consultation <ArrowRight size={18} />
            </Link>
            <a href="https://wa.me/917011473737?text=Hi%20SURGISAATHI%2C%20I%27d%20like%20a%20consultation%20for%20Piles%20surgery%20in%20Mumbai" target="_blank" rel="noopener noreferrer" className="btn-secondary !border-white/30 !text-white hover:!bg-white/10 !py-4 !px-10">
              💬 WhatsApp — Piles, Mumbai
            </a>
          </div>
          <p className="text-white/50 text-xs mt-4">🔒 100% confidential · No judgment · Same-day callback available</p>
        </div>
      </section>
    </div>
  );
}
