import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone, Shield, IndianRupee, Clock, Star } from "lucide-react";
import JsonLd from "../components/JsonLd";
import { medicalProcedureSchema, faqPageSchema, breadcrumbSchema, localBusinessSchemaForCity, LOCATIONS } from "../../lib/seo";
import InlineLeadForm from "../components/InlineLeadForm";

export const metadata = {
  title: "Laser Circumcision Surgery in Chandigarh — Cost & Verified Surgeons | SURGISAATHI",
  description: "Adult circumcision surgery in Chandigarh from ₹25,000. Laser technique, same-day discharge, cashless insurance. Free consultation: +91 70114 73737.",
  alternates: { canonical: "/circumcision-surgery-chandigarh" },
  openGraph: {
    title: "Laser Circumcision Surgery in Chandigarh | SURGISAATHI",
    description: "Private, professional circumcision surgery in Chandigarh. Laser technique, 30-min procedure, home the same day.",
    url: "/circumcision-surgery-chandigarh",
  },
};

const faqs = [
  { q: "How much does circumcision surgery cost in Chandigarh?", a: "Laser circumcision in Chandigarh costs ₹25,000–₹40,000 all-inclusive at SURGISAATHI partner hospitals. The cost includes surgeon fee, anaesthesia, hospital charges, and one follow-up." },
  { q: "Is circumcision covered by health insurance in Chandigarh?", a: "Circumcision for medical conditions (phimosis, recurrent balanitis, paraphimosis) is generally covered by health insurance. Cosmetic/religious circumcision may not be. Our team confirms coverage before booking." },
  { q: "How long does laser circumcision surgery take?", a: "The procedure takes 20–35 minutes. Patients rest in the recovery area for 2–3 hours and are discharged the same day." },
  { q: "Is laser circumcision better than conventional surgery?", a: "Yes. Laser circumcision causes minimal bleeding, requires no stitches (in most cases), has a lower infection risk, and heals faster — typically 2–3 weeks vs 4–6 weeks for conventional technique." },
  { q: "Can adults have circumcision surgery in Chandigarh?", a: "Absolutely. Adult circumcision is performed routinely for medical conditions like phimosis (tight foreskin), balanitis, and foreskin infections. Our verified surgeons are experienced with adult procedures." },
  { q: "How private is the consultation and procedure?", a: "Completely private. SURGISAATHI handles all coordination discreetly. No public patient profiles, no sharing of information without your explicit consent. Your condition remains between you and your surgeon." },
];

const benefits = [
  { icon: Shield,       title: "100% Private",           desc: "Discreet booking, confidential consultation, no public profiles." },
  { icon: Clock,        title: "30-Min Procedure",       desc: "Laser circumcision — fast, precise, minimal bleeding." },
  { icon: IndianRupee,  title: "From ₹25,000",           desc: "All-inclusive. Surgeon, anaesthesia, hospital, follow-up." },
  { icon: CheckCircle2, title: "Verified Surgeons",      desc: "MBBS/MS-registered urologists and general surgeons." },
  { icon: Star,         title: "4.8★ Patient Rating",    desc: "Rated by 2,400+ patients who chose SURGISAATHI." },
  { icon: Phone,        title: "Free Consultation",      desc: "Speak to a care coordinator today — no judgment, no obligation." },
];

export default function CircumcisionChandigarh() {
  const path = "/circumcision-surgery-chandigarh";
  const procedureData = {
    title: "Laser Circumcision Surgery",
    subtitle: "Safe, private circumcision by verified surgeons in Chandigarh",
    description: "Circumcision is the surgical removal of the foreskin. Performed for medical conditions (phimosis, balanitis) or by choice. Laser technique minimises bleeding and speeds recovery.",
    priceRange: "₹25,000–₹40,000",
    recovery: "2–3 weeks",
    duration: "20–35 minutes",
    hospital: "Day-care",
    symptoms: [],
    steps: ["Private consultation — medical or choice-based circumcision confirmed", "Pre-operative blood tests (if required)", "Local anaesthesia administered", "Laser used to excise foreskin with precision", "Edges sealed — minimal or no stitches", "Discharge after 2–3 hours with post-care kit"],
    treatments: [],
    faqs,
  };

  return (
    <div className="pt-16 lg:pt-[72px]">
      <JsonLd data={[
        medicalProcedureSchema({ slug: "circumcision", data: procedureData, path }),
        faqPageSchema(faqs, path),
        breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Circumcision Surgery", href: "/surgeries/circumcision" },
          { name: "Chandigarh", href: path },
        ]),
        localBusinessSchemaForCity(LOCATIONS[1]),
      ]} />

      {/* HERO */}
      <section className="gradient-hero py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/surgeries/circumcision" className="hover:text-white">Circumcision Surgery</Link>
            <span>/</span>
            <span className="text-white">Chandigarh</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="max-w-2xl">
              <div className="trust-badge !bg-white/15 !text-white mb-5">
                <Shield size={13} /> Chandigarh · 100% Private · Cashless Insurance
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Laser Circumcision Surgery in Chandigarh
              </h1>
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                Safe, professional circumcision by verified surgeons at NABH-accredited hospitals in Chandigarh. Laser technique — 30 minutes, minimal discomfort, home the same day.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { label: "From ₹25,000", icon: IndianRupee },
                  { label: "30 min procedure", icon: Clock },
                  { label: "100% confidential", icon: Shield },
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
              <InlineLeadForm formId="circumcision-chandigarh-lead-form" />
            </div>
          </div>
          <div className="mt-8 lg:hidden">
            <InlineLeadForm formId="circumcision-chandigarh-lead-form-mobile" />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="trust-badge mb-4 inline-flex">Why SURGISAATHI</span>
            <h2 className="text-2xl lg:text-3xl font-bold mt-3">Private. Professional. Painless.</h2>
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

      {/* ABOUT */}
      <section className="section gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">Circumcision Surgery in Chandigarh — What to Expect</h2>
          <div className="prose prose-sm max-w-none text-[var(--color-text-body)] leading-relaxed space-y-4">
            <p>Circumcision is one of the most commonly performed surgical procedures worldwide. In adults, it is done to treat medical conditions including <strong>phimosis</strong> (inability to retract foreskin), recurrent balanitis (inflammation of the glans), paraphimosis, and foreskin infections.</p>
            <p>SURGISAATHI&apos;s partner surgeons in Chandigarh use <strong>laser circumcision</strong> — a precise technique that significantly reduces bleeding, post-operative pain, and healing time compared to conventional surgical methods. There are no stitches to remove in most cases, and patients return home the same day.</p>
            <p>We understand this is a private and sensitive procedure. Every consultation and surgery booking is handled with complete discretion.</p>
          </div>
          <div className="mt-8 space-y-4">
            <h3 className="text-xl font-semibold">What Happens on Surgery Day</h3>
            {procedureData.steps.map((step, i) => (
              <div key={step} className="flex items-start gap-4 bg-white p-5 rounded-xl border border-[var(--color-card-border)]">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{i + 1}</span>
                </div>
                <p className="font-medium pt-2">{step}</p>
              </div>
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
          <h2 className="text-3xl font-bold text-white mb-4">Book Private Circumcision Consultation in Chandigarh</h2>
          <p className="text-white/80 mb-8">Free. Confidential. No obligation. Talk to a care coordinator today.</p>
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
