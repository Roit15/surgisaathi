import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone, IndianRupee, Shield, Star } from "lucide-react";
import JsonLd from "../components/JsonLd";
import { faqPageSchema, breadcrumbSchema, SITE_URL } from "../../lib/seo";
import InlineLeadForm from "../components/InlineLeadForm";

export const metadata = {
  title: "Piles Surgery Cost in India 2026 — Mumbai & Chandigarh Price Guide | SURGISAATHI",
  description: "Complete guide to laser piles surgery cost in India 2026. Mumbai: ₹38K–₹80K. Chandigarh: ₹36K–₹75K. What's included, insurance coverage, and how to get an exact quote.",
  alternates: { canonical: "/piles-treatment-cost" },
  openGraph: {
    title: "Piles Surgery Cost in India 2026 | SURGISAATHI",
    description: "Transparent piles surgery pricing guide for Mumbai and Chandigarh. Know exactly what you'll pay before you book.",
    url: "/piles-treatment-cost",
  },
};

const faqs = [
  { q: "How much does laser piles surgery cost in Mumbai?", a: "Laser piles surgery in Mumbai costs ₹38,000–₹80,000 all-inclusive. The range depends on the grade of piles (Grade I–IV), hospital location, and whether it's day-care or overnight. SURGISAATHI provides a fixed, itemised quote before you commit." },
  { q: "How much does laser piles surgery cost in Chandigarh?", a: "In Chandigarh, laser piles surgery costs ₹36,000–₹75,000. Chandigarh is generally 5–15% less expensive than Mumbai for the same procedure quality at NABH hospitals." },
  { q: "Is piles surgery covered by health insurance in India?", a: "Yes. Haemorrhoid surgery (ICD-10: K64) is covered under all standard Indian health insurance policies that include inpatient surgical coverage. Policies from HDFC Ergo, Star Health, ICICI Lombard, Bajaj Allianz, and government CGHS/ESI cover piles surgery. SURGISAATHI handles cashless pre-authorisation at no charge." },
  { q: "What does the piles surgery cost include?", a: "SURGISAATHI's all-inclusive package covers: surgeon fee, anaesthesiologist fee, OT charges, hospital bed charges, post-op medicines (3-day kit), and one follow-up consultation. There are no hidden charges." },
  { q: "Is laser piles surgery more expensive than open surgery?", a: "Laser surgery may cost ₹5,000–₹15,000 more upfront than open haemorrhoidectomy. However, laser patients return to work 5–7 days sooner, require fewer post-op medications, and have far lower complication rates — making the total economic cost lower." },
  { q: "Can I get piles surgery on EMI?", a: "Yes. SURGISAATHI works with financing partners offering 0% EMI for 3–6 months on surgery packages. Ask your care coordinator for details during your free consultation." },
  { q: "Why do hospitals charge so much more than SURGISAATHI?", a: "Corporate hospitals add overhead costs (brand premium, administrative margin) that can double the actual surgical cost. SURGISAATHI partners with the same NABH-accredited hospitals and surgeons, negotiating bulk rates that we pass on to patients." },
];

const priceRows = [
  { procedure: "Grade I–II Piles (minor)", mumbai: "₹38K – ₹50K", chd: "₹36K – ₹48K", ins: "Covered", surgery: "/surgeries/piles" },
  { procedure: "Grade III–IV Piles (advanced)", mumbai: "₹55K – ₹80K", chd: "₹50K – ₹75K", ins: "Covered", surgery: "/surgeries/piles" },
  { procedure: "Laser Fissure Treatment", mumbai: "₹35K – ₹60K", chd: "₹30K – ₹55K", ins: "Covered", surgery: "/surgeries/fissure" },
  { procedure: "Laser Fistula Surgery", mumbai: "₹40K – ₹85K", chd: "₹38K – ₹80K", ins: "Covered", surgery: "/surgeries/fistula" },
  { procedure: "Laser Circumcision", mumbai: "₹30K – ₹42K", chd: "₹25K – ₹40K", ins: "Conditional", surgery: "/surgeries/circumcision" },
  { procedure: "Abscess Drainage", mumbai: "₹20K – ₹40K", chd: "₹18K – ₹35K", ins: "Covered", surgery: "/surgeries/abscess" },
  { procedure: "Pilonidal Sinus Laser", mumbai: "₹35K – ₹70K", chd: "₹30K – ₹65K", ins: "Covered", surgery: "/surgeries/pilonidal-sinus" },
];

const inclusions = [
  "Surgeon's fee",
  "Anaesthesiologist's fee",
  "OT and hospital charges",
  "Laser equipment usage",
  "Post-operative medicines (3-day kit)",
  "One follow-up consultation",
  "Insurance pre-authorisation (cashless)",
  "Care coordinator support throughout",
];

export default function PilesTreatmentCost() {
  const path = "/piles-treatment-cost";
  const costFaqSchema = faqPageSchema(faqs, path);
  const crumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Piles Surgery", href: "/surgeries/piles" },
    { name: "Cost Guide", href: path },
  ]);

  return (
    <div className="pt-16 lg:pt-[72px]">
      <JsonLd data={[costFaqSchema, crumbs]} />

      {/* HERO */}
      <section className="gradient-hero py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/surgeries/piles" className="hover:text-white">Piles Surgery</Link>
            <span>/</span>
            <span className="text-white">Cost Guide 2026</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="max-w-2xl">
              <div className="trust-badge !bg-white/15 !text-white mb-5">
                <IndianRupee size={13} /> Transparent Pricing · No Hidden Charges
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Piles Surgery Cost in India 2026
              </h1>
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                A complete, honest guide to laser piles surgery pricing in Mumbai and Chandigarh — what's included, what insurance covers, and how to get an exact quote for your case.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { label: "Mumbai from ₹38,000" },
                  { label: "Chandigarh from ₹36,000" },
                  { label: "Insurance covered" },
                ].map(({ label }) => (
                  <span key={label} className="flex items-center gap-1.5 bg-white/10 text-white px-3.5 py-2 rounded-xl text-sm">
                    <CheckCircle2 size={13} aria-hidden="true" /> {label}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/book-consultation" className="btn-primary !bg-[var(--color-accent)] !py-4 !px-8 animate-pulse-glow">
                  Get My Cost Estimate <ArrowRight size={16} />
                </Link>
                <a href="tel:+917011473737" className="btn-secondary !border-white/30 !text-white hover:!bg-white/10 !py-4 !px-8">
                  <Phone size={16} /> +91 70114 73737
                </a>
              </div>
            </div>
            <div className="hidden lg:flex justify-end">
              <InlineLeadForm formId="cost-page-lead-form" />
            </div>
          </div>
          <div className="mt-8 lg:hidden">
            <InlineLeadForm formId="cost-page-lead-form-mobile" />
          </div>
        </div>
      </section>

      {/* PRICE TABLE */}
      <section className="section bg-white" aria-labelledby="price-table-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="trust-badge mb-4 inline-flex">2026 Price Guide</span>
            <h2 id="price-table-heading" className="text-2xl lg:text-3xl font-bold mt-3">All-Inclusive Surgery Costs</h2>
            <p className="text-[var(--color-text-muted)] mt-2 text-sm">Prices are indicative ranges. Exact cost depends on grade, hospital, and insurance plan.</p>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[var(--color-card-border)] mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[var(--color-primary)]/5">
                    <th className="text-left px-5 py-4 text-sm font-semibold text-[var(--color-text-heading)]">Surgery / Procedure</th>
                    <th className="text-left px-5 py-4 text-sm font-semibold text-[var(--color-text-heading)]">Mumbai</th>
                    <th className="text-left px-5 py-4 text-sm font-semibold text-[var(--color-text-heading)]">Chandigarh</th>
                    <th className="text-left px-5 py-4 text-sm font-semibold text-[var(--color-text-heading)]">Insurance</th>
                    <th className="px-5 py-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {priceRows.map((r) => (
                    <tr key={r.procedure} className="border-t border-[var(--color-card-border)] hover:bg-[var(--color-primary)]/[0.02] transition-colors">
                      <td className="px-5 py-4 text-sm font-medium text-[var(--color-text-heading)]">{r.procedure}</td>
                      <td className="px-5 py-4 text-sm text-[var(--color-text-body)]">{r.mumbai}</td>
                      <td className="px-5 py-4 text-sm text-[var(--color-text-body)]">{r.chd}</td>
                      <td className="px-5 py-4">
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${r.ins === "Covered" ? "text-[var(--color-success)] bg-[var(--color-success)]/10" : "text-orange-600 bg-orange-50"}`}>
                          {r.ins === "Covered" ? "✓" : "⚠"} {r.ins}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <Link href={r.surgery} className="text-sm font-semibold text-[var(--color-accent)] hover:underline whitespace-nowrap">
                          Learn more →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-[var(--color-primary)]/5 rounded-xl p-5 border border-[var(--color-primary)]/10">
            <p className="text-sm text-[var(--color-text-body)]">
              <strong className="text-[var(--color-primary)]">Note on pricing:</strong> Corporate hospitals often charge ₹80,000–₹1,50,000 for the same procedures. SURGISAATHI negotiates institutional rates at the same NABH hospitals — saving patients ₹20,000–₹60,000 on average.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="section gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">What's Included in the Price?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {inclusions.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[var(--color-card-border)]">
                <CheckCircle2 size={16} className="text-[var(--color-success)] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm font-medium text-[var(--color-text-heading)]">{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl border border-red-100 p-5">
            <h3 className="font-semibold text-[var(--color-text-heading)] mb-3">What is NOT included?</h3>
            <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
              <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> Pre-operative tests (blood, ECG) — typically ₹1,500–₹4,000 separately at diagnostic centres</li>
              <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> Overnight hospital stay (if required for complex cases — rare)</li>
              <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> Prescription medicines beyond the 3-day kit</li>
            </ul>
          </div>
        </div>
      </section>

      {/* INSURANCE SECTION */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">Is Piles Surgery Covered by Insurance in India?</h2>
          <div className="prose prose-sm max-w-none text-[var(--color-text-body)] leading-relaxed space-y-4 mb-8">
            <p>Yes. Haemorrhoid surgery (piles surgery) is classified under ICD-10 code K64 and is covered under virtually all standard Indian health insurance policies that include inpatient surgical coverage.</p>
            <p>The following major insurers cover piles surgery with cashless facility at SURGISAATHI partner hospitals:</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-6">
            {["Star Health", "HDFC Ergo", "ICICI Lombard", "Bajaj Allianz", "New India Assurance", "Niva Bupa", "Care Health", "CGHS / ESI"].map((ins) => (
              <div key={ins} className="bg-[var(--color-bg-warm)] border border-[var(--color-card-border)] rounded-xl px-4 py-3 text-sm font-medium text-center text-[var(--color-text-body)]">
                {ins}
              </div>
            ))}
          </div>
          <div className="bg-[var(--color-primary)]/5 rounded-xl p-5 border border-[var(--color-primary)]/10">
            <div className="flex items-start gap-3">
              <Shield size={18} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm text-[var(--color-text-body)]">
                <strong className="text-[var(--color-text-heading)]">SURGISAATHI handles all insurance paperwork at no charge.</strong>{" "}
                We obtain your insurer&apos;s pre-authorisation letter, coordinate cashless settlement with the hospital, and follow up on any reimbursements. You focus on recovery — we handle the administration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section gradient-warm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">Frequently Asked Questions — Piles Surgery Cost</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="card group cursor-pointer">
                <summary className="flex items-center justify-between font-semibold text-[var(--color-text-heading)] list-none">
                  {f.q}
                  <ArrowRight size={16} className="text-[var(--color-text-muted)] group-open:rotate-90 transition-transform" />
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
          <h2 className="text-3xl font-bold text-white mb-4">Get Your Exact Surgery Cost — Free</h2>
          <p className="text-white/80 mb-8">
            Our care coordinator will review your condition and insurance policy and give you a precise, all-inclusive quote within 2 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-consultation" className="btn-primary !bg-[var(--color-accent)] !py-4 !px-10 animate-pulse-glow">
              Get Free Cost Estimate <ArrowRight size={18} />
            </Link>
            <a href="tel:+917011473737" className="btn-secondary !border-white/30 !text-white hover:!bg-white/10 !py-4 !px-10">
              <Phone size={18} /> +91 70114 73737
            </a>
          </div>
          <p className="text-white/50 text-xs mt-4">No commitment required. Response within 2 hours during 8am–10pm.</p>
        </div>
      </section>
    </div>
  );
}
