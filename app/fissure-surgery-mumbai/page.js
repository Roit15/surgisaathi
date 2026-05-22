import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone, Shield, IndianRupee, Clock, Star } from "lucide-react";
import JsonLd from "../components/JsonLd";
import { medicalProcedureSchema, faqPageSchema, breadcrumbSchema, localBusinessSchemaForCity, LOCATIONS } from "../../lib/seo";
import InlineLeadForm from "../components/InlineLeadForm";

export const metadata = {
  title: "Laser Fissure Surgery in Mumbai — Cost, Recovery & Verified Surgeons | SURGISAATHI",
  description: "Laser anal fissure surgery in Mumbai starting ₹30,000. Same-day discharge, cashless insurance, verified proctology surgeons. Book a free consultation: +91 70114 73737.",
  alternates: { canonical: "/fissure-surgery-mumbai" },
  openGraph: {
    title: "Laser Fissure Surgery in Mumbai | SURGISAATHI",
    description: "Minimally invasive laser fissure treatment in Mumbai. Verified surgeons, transparent pricing, cashless insurance.",
    url: "/fissure-surgery-mumbai",
    images: [
      {
        url: "/images/og/fissure-surgery-mumbai.png",
        width: 1200,
        height: 630,
        alt: "Laser Fissure Surgery in Mumbai — SURGISAATHI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laser Fissure Surgery in Mumbai | SURGISAATHI",
    description: "Laser fissure treatment in Mumbai from ₹30,000. Same-day discharge, cashless insurance.",
    images: ["/images/og/fissure-surgery-mumbai.png"],
  },
};

const faqs = [
  { q: "How much does fissure surgery cost in Mumbai?", a: "Laser fissure surgery in Mumbai typically costs ₹30,000–₹60,000 all-inclusive. SURGISAATHI provides a transparent, itemised cost estimate before you commit — no hidden charges." },
  { q: "Is fissure surgery covered by health insurance in Mumbai?", a: "Yes. Anal fissure surgery (ICD-10: K60.0–K60.2) is covered under most standard health insurance policies. Our team handles cashless pre-authorisation at all partner hospitals." },
  { q: "How long is recovery after laser fissure surgery?", a: "Most patients return to desk work within 2–3 days. Full recovery typically takes 2–4 weeks. Laser surgery causes significantly less post-operative pain than conventional open surgery." },
  { q: "Which hospitals in Mumbai perform laser fissure surgery?", a: "SURGISAATHI partners with NABH-accredited hospitals in Andheri, Bandra, and Thane. Your surgeon and hospital are matched based on your location, insurance, and condition severity." },
  { q: "Is laser fissure surgery permanent?", a: "Laser sphincterotomy has a recurrence rate below 3%, making it more effective than non-surgical options. Combined with dietary changes, long-term results are excellent." },
];

const benefits = [
  { icon: Clock,         title: "Same-Day Discharge",      desc: "Most patients go home within 4–6 hours of surgery." },
  { icon: IndianRupee,  title: "All-Inclusive Pricing",   desc: "Surgeon fee, anaesthesia, hospital stay — all included from ₹30,000." },
  { icon: Shield,       title: "Cashless Insurance",      desc: "We handle Star Health, HDFC Ergo, ICICI Lombard and 20+ others." },
  { icon: CheckCircle2, title: "Verified Surgeons",       desc: "Council-registered proctologists with 10+ years specialisation." },
  { icon: Star,         title: "4.8★ Patient Rating",     desc: "Rated by 2,400+ patients who chose SURGISAATHI." },
  { icon: Phone,        title: "Free Consultation",       desc: "Talk to a care coordinator in minutes — private and judgement-free." },
];

export default function FissureSurgeryMumbai() {
  const path = "/fissure-surgery-mumbai";
  const procedureData = {
    title: "Laser Fissure Surgery",
    subtitle: "Minimally invasive laser treatment for anal fissure in Mumbai",
    description: "Anal fissure is a small tear in the lining of the anus causing pain and bleeding during bowel movements. Laser sphincterotomy is the gold-standard treatment with a <3% recurrence rate.",
    priceRange: "₹30,000–₹60,000",
    recovery: "2–4 weeks",
    duration: "30–45 minutes",
    hospital: "Day-care (no overnight stay)",
    symptoms: [],
    steps: ["Pre-operative blood tests and ECG", "Local/spinal anaesthesia administered", "Laser energy applied to relax internal anal sphincter", "Wound sealed — no stitches required", "Recovery observation for 2–4 hours", "Discharge with post-care instructions"],
    treatments: [],
    faqs,
  };

  return (
    <div className="pt-16 lg:pt-[72px]">
      <JsonLd data={[
        medicalProcedureSchema({ slug: "fissure", data: procedureData, path }),
        faqPageSchema(faqs, path),
        breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Fissure Surgery", href: "/surgeries/fissure" },
          { name: "Mumbai", href: path },
        ]),
        localBusinessSchemaForCity(LOCATIONS[0]),
      ]} />

      {/* HERO */}
      <section className="gradient-hero py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/surgeries/fissure" className="hover:text-white">Fissure Surgery</Link>
            <span>/</span>
            <span className="text-white">Mumbai</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="max-w-2xl">
              <div className="trust-badge !bg-white/15 !text-white mb-5">
                <CheckCircle2 size={13} /> Mumbai · NABH Hospitals · Cashless Insurance
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Laser Fissure Surgery in Mumbai
              </h1>
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                Minimally invasive laser treatment for anal fissure — less pain, faster recovery, and same-day discharge. Verified proctologists at NABH-accredited hospitals across Mumbai.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { label: "Starting ₹30,000", icon: IndianRupee },
                  { label: "30–45 min procedure", icon: Clock },
                  { label: "Home same day", icon: CheckCircle2 },
                ].map(({ label, icon: Icon }) => (
                  <span key={label} className="flex items-center gap-1.5 bg-white/10 text-white px-3.5 py-2 rounded-xl text-sm">
                    <Icon size={14} aria-hidden="true" /> {label}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/book-consultation" className="btn-primary !bg-[var(--color-accent)] !py-4 !px-8 animate-pulse-glow">
                  Book Free Consultation <ArrowRight size={16} />
                </Link>
                <a href="tel:+917011473737" className="btn-secondary !border-white/30 !text-white hover:!bg-white/10 !py-4 !px-8">
                  <Phone size={16} /> +91 70114 73737
                </a>
              </div>
            </div>
            <div className="hidden lg:flex justify-end">
              <InlineLeadForm formId="fissure-mumbai-lead-form" />
            </div>
          </div>
          <div className="mt-8 lg:hidden">
            <InlineLeadForm formId="fissure-mumbai-lead-form-mobile" />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="trust-badge mb-4 inline-flex">Why Choose SURGISAATHI</span>
            <h2 className="text-2xl lg:text-3xl font-bold mt-3">Everything Handled. You Just Show Up.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="card">
                <div className="w-11 h-11 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
                  <b.icon size={20} className="text-[var(--color-primary)]" aria-hidden="true" />
                </div>
                <h3 className="font-semibold mb-1">{b.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)]">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PROCEDURE */}
      <section className="section gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">What Is Laser Fissure Surgery?</h2>
          <div className="prose prose-sm max-w-none text-[var(--color-text-body)] leading-relaxed space-y-4">
            <p>An anal fissure is a small, painful tear in the thin tissue lining the anus. It causes sharp pain during bowel movements and bright red bleeding. Chronic fissures — those lasting more than 6–8 weeks — rarely heal with medicines alone and require surgical intervention.</p>
            <p><strong>Laser sphincterotomy</strong> is the gold-standard treatment. A controlled laser beam is used to gently relax the internal anal sphincter muscle, which reduces spasm, improves blood flow to the fissure site, and allows natural healing. The procedure takes 30–45 minutes, requires no stitches, and patients go home the same day.</p>
            <p>Compared to open surgery, laser treatment results in significantly less post-operative pain, lower risk of infection, and a recurrence rate of under 3%.</p>
          </div>
        </div>
      </section>

      {/* PROCEDURE STEPS */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">What Happens on Surgery Day?</h2>
          <div className="space-y-4">
            {procedureData.steps.map((step, i) => (
              <div key={step} className="flex items-start gap-4 bg-[var(--color-bg-warm)] p-5 rounded-xl border border-[var(--color-card-border)]">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{i + 1}</span>
                </div>
                <p className="font-medium pt-2">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COST TABLE */}
      <section className="section gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">Fissure Surgery Cost in Mumbai</h2>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[var(--color-card-border)] mb-6">
            <table className="w-full">
              <thead>
                <tr className="bg-[var(--color-primary)]/5">
                  <th className="text-left px-6 py-4 text-sm font-semibold">Component</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold">Included?</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Surgeon fee", "✓ Included"],
                  ["Anaesthesia charges", "✓ Included"],
                  ["OT / Hospital charges", "✓ Included"],
                  ["Post-op medicines (3 days)", "✓ Included"],
                  ["Follow-up consultation", "✓ Included"],
                  ["Insurance coordination", "✓ Included (free)"],
                ].map(([item, status]) => (
                  <tr key={item} className="border-t border-[var(--color-card-border)]">
                    <td className="px-6 py-4 text-sm text-[var(--color-text-heading)] font-medium">{item}</td>
                    <td className="px-6 py-4 text-sm text-[var(--color-success)] font-semibold">{status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[var(--color-text-muted)]">All-inclusive package starting at <strong className="text-[var(--color-primary)]">₹30,000</strong> in Mumbai. Exact cost depends on hospital, severity, and insurance plan. Get a free, no-obligation quote during your consultation.</p>
        </div>
      </section>

      {/* MEDICALLY REVIEWED BYLINE */}
      <section className="bg-[var(--color-bg-warm)] border-t border-[var(--color-card-border)] py-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-sm text-[var(--color-text-muted)]">
            <CheckCircle2 size={16} className="text-green-600 flex-shrink-0" />
            <span>
              <strong className="text-[var(--color-text-heading)]">Medically reviewed by Dr. Sneha Rao</strong>
              {" — "}
              CMO & Senior Proctologist, SURGISAATHI · MBBS, MS (General Surgery), 12 years experience in laser anorectal surgery.
            </span>
          </div>
          <p className="mt-3 text-xs text-[var(--color-text-muted)] ml-7">
            Last reviewed: May 2026. This page is for informational purposes only. For personalised medical advice,{" "}
            <a href="/book-consultation" className="text-[var(--color-primary)] hover:underline">book a free consultation</a>.
          </p>
        </div>
      </section>

      {/* RELATED PAGES — Internal Linking */}
      <section className="section bg-white border-b border-[var(--color-card-border)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold mb-4">Related Pages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { label: "Piles Surgery in Mumbai", href: "/piles-surgery-mumbai", desc: "Laser piles treatment from ₹38,000" },
              { label: "Fistula Surgery in Mumbai", href: "/fistula-surgery-mumbai", desc: "VAAFT/FiLaC laser from ₹38,000" },
              { label: "Fissure Surgery in Chandigarh", href: "/fissure-surgery-chandigarh", desc: "Same-day discharge from ₹30,000" },
            ].map((link) => (
              <a key={link.href} href={link.href} className="card !p-4 group hover:border-[var(--color-primary)] transition-colors">
                <p className="text-sm font-semibold group-hover:text-[var(--color-primary)] transition-colors">{link.label}</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">{link.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">Frequently Asked Questions</h2>
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
          <h2 className="text-3xl font-bold text-white mb-4">Get Expert Fissure Treatment in Mumbai</h2>
          <p className="text-white/80 mb-8">Free consultation. Cashless insurance. Same-day surgery available. No judgment.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-consultation" className="btn-primary !bg-[var(--color-accent)] !py-4 !px-10 animate-pulse-glow">
              Book Free Consultation <ArrowRight size={18} />
            </Link>
            <a href="tel:+917011473737" className="btn-secondary !border-white/30 !text-white hover:!bg-white/10 !py-4 !px-10">
              <Phone size={18} /> +91 70114 73737
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
