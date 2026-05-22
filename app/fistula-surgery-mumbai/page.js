import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone, Shield, IndianRupee, Clock, Star } from "lucide-react";
import JsonLd from "../components/JsonLd";
import { medicalProcedureSchema, faqPageSchema, breadcrumbSchema, localBusinessSchemaForCity, LOCATIONS } from "../../lib/seo";
import InlineLeadForm from "../components/InlineLeadForm";

export const metadata = {
  title: "Laser Fistula Surgery in Mumbai — Cost, Recovery & Specialists | SURGISAATHI",
  description: "Expert laser fistula surgery in Mumbai from ₹38,000. VAAFT/FiLaC technique, cashless insurance, verified colorectal surgeons. Book free consultation: +91 70114 73737.",
  alternates: { canonical: "/fistula-surgery-mumbai" },
  openGraph: {
    title: "Laser Fistula Surgery in Mumbai | SURGISAATHI",
    description: "Advanced laser fistula treatment in Mumbai. Minimal recurrence, same-day discharge, cashless insurance.",
    url: "/fistula-surgery-mumbai",
  },
};

const faqs = [
  { q: "How much does fistula surgery cost in Mumbai?", a: "Laser fistula surgery in Mumbai ranges from ₹38,000–₹85,000 depending on the type and complexity of the fistula. SURGISAATHI provides an all-inclusive quote after your free consultation." },
  { q: "Is laser fistula surgery better than open surgery?", a: "Yes, for most fistula types. Laser techniques like VAAFT and FiLaC preserve the sphincter muscle, reducing the risk of incontinence to near zero. Recurrence is under 10% vs 25–30% with open surgery in complex cases." },
  { q: "Is fistula surgery covered by insurance in Mumbai?", a: "Anal fistula surgery is covered under most standard Indian health policies. Our team handles pre-authorisation and cashless settlement at all partner hospitals." },
  { q: "How long is recovery from fistula surgery?", a: "Return to desk work in 3–5 days. Full recovery takes 4–6 weeks. Regular follow-up dressings are required for the first 2–3 weeks." },
  { q: "Can a fistula come back after laser surgery?", a: "Recurrence rates depend on fistula complexity. Simple fistulas: <5% recurrence with laser. Complex (transphincteric/horseshoe): 8–12% with advanced laser vs 25–30% with open surgery." },
];

const benefits = [
  { icon: Shield,       title: "Sphincter-Preserving",    desc: "Laser techniques protect continence — no risk of incontinence." },
  { icon: Clock,        title: "Same-Day Discharge",      desc: "Day-care surgery. Home within 6 hours in most cases." },
  { icon: IndianRupee,  title: "All-Inclusive Package",   desc: "From ₹38,000. Surgeon, anaesthesia, hospital all included." },
  { icon: CheckCircle2, title: "Verified Specialists",    desc: "Council-registered colorectal surgeons, 10+ years experience." },
  { icon: Star,         title: "4.8★ Rating",             desc: "Rated by 2,400+ patients across Mumbai and Chandigarh." },
  { icon: Phone,        title: "Free Consultation",       desc: "Talk to a care expert today — private and judgement-free." },
];

export default function FistulaSurgeryMumbai() {
  const path = "/fistula-surgery-mumbai";
  const procedureData = {
    title: "Laser Fistula Surgery",
    subtitle: "Advanced laser treatment for anal fistula in Mumbai",
    description: "An anal fistula is an abnormal tunnel connecting the anal canal to the skin near the anus. Laser surgery (VAAFT / FiLaC) is the safest treatment with minimal recurrence.",
    priceRange: "₹38,000–₹85,000",
    recovery: "4–6 weeks",
    duration: "45–90 minutes",
    hospital: "Day-care (no overnight stay)",
    symptoms: [],
    steps: ["Fistula mapping with MRI/ultrasound pre-op", "Spinal or general anaesthesia", "Laser fibre inserted through fistula tract", "Tract ablated from inside — no external cutting", "Internal opening closed with suture/flap", "Recovery observation 4–6 hours, then discharge"],
    treatments: [],
    faqs,
  };

  return (
    <div className="pt-16 lg:pt-[72px]">
      <JsonLd data={[
        medicalProcedureSchema({ slug: "fistula", data: procedureData, path }),
        faqPageSchema(faqs, path),
        breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Fistula Surgery", href: "/surgeries/fistula" },
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
            <Link href="/surgeries/fistula" className="hover:text-white">Fistula Surgery</Link>
            <span>/</span>
            <span className="text-white">Mumbai</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="max-w-2xl">
              <div className="trust-badge !bg-white/15 !text-white mb-5">
                <CheckCircle2 size={13} /> Mumbai · VAAFT / FiLaC Specialists · Cashless Insurance
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Laser Fistula Surgery in Mumbai
              </h1>
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                Advanced sphincter-preserving laser fistula treatment by verified colorectal surgeons. Minimal recurrence, same-day discharge, and complete insurance coordination.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { label: "From ₹38,000", icon: IndianRupee },
                  { label: "45–90 min surgery", icon: Clock },
                  { label: "Sphincter-safe", icon: Shield },
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
              <InlineLeadForm formId="fistula-mumbai-lead-form" />
            </div>
          </div>
          <div className="mt-8 lg:hidden">
            <InlineLeadForm formId="fistula-mumbai-lead-form-mobile" />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="trust-badge mb-4 inline-flex">Why SURGISAATHI</span>
            <h2 className="text-2xl lg:text-3xl font-bold mt-3">Advanced Fistula Care. Zero Compromise.</h2>
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

      {/* PROCEDURE */}
      <section className="section gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">How Laser Fistula Surgery Works</h2>
          <p className="text-[var(--color-text-body)] mb-6 leading-relaxed">
            Unlike traditional open fistulotomy which cuts the sphincter muscle, laser techniques (VAAFT — Video-Assisted Anal Fistula Treatment, and FiLaC — Fistula-in-Ano Laser Closure) work <em>inside</em> the fistula tract using a laser fibre. The tract is ablated from within and the internal opening is sealed — preserving sphincter integrity and continence.
          </p>
          <div className="space-y-4">
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
          <h2 className="text-3xl font-bold text-white mb-4">Consult a Fistula Specialist in Mumbai — Free</h2>
          <p className="text-white/80 mb-8">Cashless insurance. Day-care surgery. Home the same evening.</p>
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
