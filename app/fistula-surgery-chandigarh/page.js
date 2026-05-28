import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone, Shield, IndianRupee, Clock, Star, MapPin, BadgeCheck } from "lucide-react";
import JsonLd from "../components/JsonLd";
import { medicalProcedureSchema, faqPageSchema, breadcrumbSchema, localBusinessSchemaForCity, LOCATIONS } from "../../lib/seo";
import InlineLeadForm from "../components/InlineLeadForm";

export const metadata = {
  title: "Laser Fistula Surgery in Chandigarh — Cost, Recovery & Specialists | SURGISAATHI",
  description: "Expert laser fistula surgery in Chandigarh from ₹35,000. VAAFT/FiLaC technique, cashless insurance, verified colorectal surgeons at Max Hospital & NABH facilities. Book free consultation: +91 70114 73737.",
  alternates: { canonical: "/fistula-surgery-chandigarh" },
  openGraph: {
    title: "Laser Fistula Surgery in Chandigarh | SURGISAATHI",
    description: "Advanced laser fistula treatment in Chandigarh. Sphincter-preserving, same-day discharge, cashless insurance. Hindi/Punjabi support.",
    url: "/fistula-surgery-chandigarh",
    images: [
      {
        url: "/images/og/fistula-surgery-chandigarh.png",
        width: 1200,
        height: 630,
        alt: "Laser Fistula Surgery in Chandigarh — SURGISAATHI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laser Fistula Surgery in Chandigarh | SURGISAATHI",
    description: "Advanced laser fistula treatment in Chandigarh from ₹35,000. Same-day discharge. Hindi/Punjabi support.",
    images: ["/images/og/fistula-surgery-chandigarh.png"],
  },
};

const chandigarhLocation = LOCATIONS.find((l) => l.city === "Chandigarh");

const faqs = [
  { q: "How much does fistula surgery cost in Chandigarh?", a: "Laser fistula surgery in Chandigarh ranges from ₹35,000–₹75,000 depending on fistula type and complexity. Prices in Chandigarh are typically 10–15% lower than Mumbai for equivalent quality care. SURGISAATHI provides an all-inclusive quote during your free consultation — no hidden charges." },
  { q: "Which hospitals in Chandigarh perform laser fistula surgery?", a: "SURGISAATHI partners with Max Hospital (Sector 56), Fortis Hospital Mohali, and other NABH-accredited facilities across the Chandigarh Tricity. Our coordinator selects the most convenient hospital based on your location, insurance, and fistula type." },
  { q: "Is laser fistula surgery (VAAFT/FiLaC) better than open surgery?", a: "Yes, for most fistula types. Laser techniques like VAAFT and FiLaC preserve the sphincter muscle — reducing the risk of incontinence to near zero. Recurrence with advanced laser techniques is under 10%, compared to 25–30% with open surgery for complex cases." },
  { q: "Is fistula surgery covered by health insurance in Chandigarh?", a: "Yes. Anal fistula surgery is covered under most standard Indian health insurance policies and corporate group plans. Our Chandigarh team handles pre-authorisation and cashless settlement with all major TPAs including Star Health, HDFC Ergo, and ICICI Lombard." },
  { q: "Can I consult about fistula treatment in Hindi or Punjabi?", a: "Absolutely. Our Chandigarh care coordinators are fluent in Hindi and Punjabi. Fistula is a sensitive condition — our team ensures complete privacy and handles your case with the utmost discretion in your preferred language." },
];

const benefits = [
  { icon: Shield, title: "Sphincter-Preserving", desc: "VAAFT & FiLaC laser techniques protect continence — no risk of incontinence." },
  { icon: Clock, title: "Same-Day Discharge", desc: "Day-care surgery at NABH hospitals. Home within 6 hours in most cases." },
  { icon: IndianRupee, title: "All-Inclusive Package", desc: "From ₹35,000 in Chandigarh. Surgeon, anaesthesia, hospital all included." },
  { icon: CheckCircle2, title: "Verified Specialists", desc: "MCI-registered colorectal surgeons with 10+ years laser surgery experience." },
  { icon: Star, title: "4.9★ Rating", desc: "Rated by 2,100+ patients across Chandigarh, Mohali, and Panchkula." },
  { icon: Phone, title: "Hindi & Punjabi Support", desc: "Our Chandigarh team speaks your language — private and judgement-free." },
];

const chandigarhDoctors = [
  {
    name: "Dr. Amandeep Singh",
    spec: "Colorectal & Proctology Surgeon",
    exp: "16 yrs",
    rating: "4.9",
    hospital: "Max Hospital, Sector 56, Chandigarh",
    surgeries: "2,100+",
    regNo: "MCI-22156",
  },
];

export default function FistulaSurgeryChandigarh() {
  const path = "/fistula-surgery-chandigarh";
  const procedureData = {
    title: "Laser Fistula Surgery",
    subtitle: "Minimally invasive sphincter-preserving fistula treatment in Chandigarh",
    description: "An anal fistula is an abnormal tunnel between the anal canal and skin near the anus. VAAFT (Video-Assisted Anal Fistula Treatment) and FiLaC (Fistula-tract Laser Closure) are the gold-standard laser procedures with sphincter preservation and recurrence rates under 10%.",
    priceRange: "₹35,000–₹75,000",
    recovery: "4–6 weeks",
    duration: "45–90 minutes",
    hospital: "Day-care to overnight",
    symptoms: [],
    steps: [
      "Pre-operative assessment and proctoscopy",
      "Pre-op blood tests and ECG",
      "Spinal or general anaesthesia administered",
      "VAAFT scope inserted to map fistula tract",
      "Laser energy delivered to obliterate the internal opening",
      "Tract sealed using biological glue or laser closure",
      "Recovery observation for 4–6 hours",
      "Discharge with wound care and diet instructions",
    ],
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
          { name: "Chandigarh", href: path },
        ]),
        localBusinessSchemaForCity(chandigarhLocation),
      ]} />

      {/* HERO */}
      <section className="gradient-hero py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/surgeries/fistula" className="hover:text-white">Fistula Surgery</Link>
            <span>/</span>
            <span className="text-white">Chandigarh</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="max-w-2xl">
              <div className="trust-badge !bg-white/15 !text-white mb-5">
                <MapPin size={13} /> Chandigarh · Mohali · Panchkula · NABH Hospitals
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Laser Fistula Surgery in Chandigarh
              </h1>
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                Sphincter-preserving VAAFT & FiLaC laser fistula treatment at NABH-accredited hospitals across the Chandigarh Tricity. Prices 10–15% lower than Mumbai. Same-day discharge. Hindi & Punjabi support.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { label: "Starting ₹35,000", icon: IndianRupee },
                  { label: "45–90 min procedure", icon: Clock },
                  { label: "Sphincter preserved", icon: Shield },
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
              <InlineLeadForm formId="fistula-chandigarh-lead-form" />
            </div>
          </div>
          <div className="mt-8 lg:hidden">
            <InlineLeadForm formId="fistula-chandigarh-lead-form-mobile" />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="trust-badge mb-4 inline-flex">Why Choose SURGISAATHI in Chandigarh</span>
            <h2 className="text-2xl lg:text-3xl font-bold mt-3">Expert Fistula Treatment. Prices 10–15% Lower. Your Language.</h2>
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
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">What Is Laser Fistula Surgery? (VAAFT & FiLaC)</h2>
          <div className="prose prose-sm max-w-none text-[var(--color-text-body)] leading-relaxed space-y-4">
            <p>An anal fistula is an abnormal tunnel (tract) that forms between the inside of the anal canal and the skin near the anus. It almost always results from a perianal abscess that didn&apos;t heal properly. Symptoms include persistent discharge of pus or blood, pain, and skin irritation near the anus.</p>
            <p><strong>Traditional open fistulotomy</strong> involves cutting the fistula tract open — which carries a risk of damaging the anal sphincter muscle and causing incontinence.</p>
            <p><strong>VAAFT (Video-Assisted Anal Fistula Treatment)</strong> uses a miniature camera to visualise the entire fistula tract from the inside, followed by laser energy to destroy and seal the internal opening — without cutting any muscle.</p>
            <p><strong>FiLaC (Fistula-tract Laser Closure)</strong> uses a radial laser probe to deliver controlled energy along the fistula wall, causing it to contract and close from the inside. Both techniques preserve the sphincter completely.</p>
            <p>In Chandigarh, SURGISAATHI&apos;s partner proctologists perform both VAAFT and FiLaC at NABH-accredited hospitals across the Tricity — Chandigarh, Mohali, and Panchkula. Our Hindi/Punjabi-speaking care team handles everything from consultation to insurance clearance.</p>
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
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">Fistula Surgery Cost in Chandigarh (2026)</h2>
          <p className="text-[var(--color-text-muted)] mb-6">All-inclusive pricing. No hidden charges.</p>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[var(--color-card-border)] mb-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[var(--color-primary)]/5">
                    <th className="text-left px-6 py-4 text-sm font-semibold">Fistula Type</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold">Chandigarh Cost</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold">Insurance</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "Simple Intersphincteric Fistula", cost: "₹35,000 – ₹50,000", ins: "Covered" },
                    { item: "Transphincteric Fistula (VAAFT)", cost: "₹50,000 – ₹65,000", ins: "Covered" },
                    { item: "Complex / Recurrent Fistula", cost: "₹60,000 – ₹75,000", ins: "Covered" },
                    { item: "Consultation + Investigations", cost: "₹0 (Free consultation)", ins: "—" },
                  ].map((r) => (
                    <tr key={r.item} className="border-t border-[var(--color-card-border)]">
                      <td className="px-6 py-4 text-sm font-medium">{r.item}</td>
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
          <p className="text-sm text-[var(--color-text-muted)]">All-inclusive packages from <strong className="text-[var(--color-primary)]">₹35,000</strong> in Chandigarh — 10–15% lower than Mumbai for equivalent care. Exact cost depends on fistula type and insurance coverage.</p>
        </div>
      </section>

      {/* DOCTOR */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">Top Fistula Surgeon in Chandigarh</h2>
          <p className="text-[var(--color-text-muted)] mb-8">SURGISAATHI-verified colorectal surgeon with 2,100+ laser procedures and expertise in VAAFT & FiLaC.</p>
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
                  Book Consultation
                </Link>
              </div>
            ))}
          </div>
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
              CMO & Senior Proctologist, SURGISAATHI · MBBS, MS (General Surgery), 12 years experience in laser colorectal surgery.
            </span>
          </div>
          <p className="mt-3 text-xs text-[var(--color-text-muted)] ml-7">
            Last reviewed: May 2026. This page is for informational purposes only. For personalised medical advice,{" "}
            <Link href="/book-consultation" className="text-[var(--color-primary)] hover:underline">book a free consultation</Link>.
          </p>
        </div>
      </section>

      {/* RELATED PAGES — Internal Linking */}
      <section className="section bg-white border-b border-[var(--color-card-border)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold mb-4">Related Pages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { label: "Fistula Surgery in Mumbai", href: "/fistula-surgery-mumbai", desc: "VAAFT/FiLaC laser from ₹38,000" },
              { label: "Piles Surgery in Chandigarh", href: "/piles-surgery-chandigarh", desc: "Laser piles treatment from ₹36,000" },
              { label: "Piles vs Fissure vs Fistula", href: "/blog/difference-between-piles-fissure-fistula", desc: "Understand your condition" },
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
          <h2 className="text-3xl font-bold text-white mb-4">Get Expert Fistula Treatment in Chandigarh</h2>
          <p className="text-white/80 mb-8">Free consultation. Cashless insurance. Hindi & Punjabi support. Same-day surgery available.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-consultation" className="btn-primary !bg-[var(--color-accent)] !py-4 !px-10 animate-pulse-glow">
              Book Free Consultation <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/917011473737?text=Hi%20SURGISAATHI%2C%20I%27d%20like%20a%20consultation%20for%20Fistula%20surgery%20in%20Chandigarh"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !border-white/30 !text-white hover:!bg-white/10 !py-4 !px-10"
            >
              💬 WhatsApp — Chandigarh
            </a>
          </div>
          <p className="text-white/50 text-xs mt-4">🔒 100% confidential · Hindi/Punjabi support · Same-day callback</p>
        </div>
      </section>
    </div>
  );
}
