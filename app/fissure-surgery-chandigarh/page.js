import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone, MapPin, IndianRupee, Clock, BadgeCheck, Star } from "lucide-react";
import InlineLeadForm from "../components/InlineLeadForm";
import JsonLd from "../components/JsonLd";
import { medicalProcedureSchema, localBusinessSchemaForCity, faqPageSchema, breadcrumbSchema, LOCATIONS } from "../../lib/seo";

export const metadata = {
  title: "Laser Fissure Surgery in Chandigarh — Cost ₹30K–₹55K | SURGISAATHI",
  description: "Expert laser anal fissure surgery in Chandigarh at ₹30,000–₹55,000. Same-day discharge, cashless insurance, verified proctologists at Max Hospital & NABH facilities. Free consultation: +91 70114 73737.",
  alternates: { canonical: "/fissure-surgery-chandigarh" },
  openGraph: {
    title: "Laser Fissure Surgery in Chandigarh | SURGISAATHI",
    description: "Expert laser fissure treatment in Chandigarh at ₹30K–₹55K. Verified surgeons, same-day discharge, cashless insurance.",
    url: "/fissure-surgery-chandigarh",
    images: [
      {
        url: "/images/og/fissure-surgery-chandigarh.png",
        width: 1200,
        height: 630,
        alt: "Laser Fissure Surgery in Chandigarh — SURGISAATHI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laser Fissure Surgery in Chandigarh | SURGISAATHI",
    description: "Laser fissure treatment in Chandigarh from ₹30,000. Same-day discharge. Hindi/Punjabi support.",
    images: ["/images/og/fissure-surgery-chandigarh.png"],
  },
};

const chandigarhLocation = LOCATIONS.find((l) => l.city === "Chandigarh");

const faqs = [
  { q: "What is the cost of fissure surgery in Chandigarh?", a: "Laser fissure surgery in Chandigarh costs between ₹30,000 and ₹55,000 all-inclusive — typically 10–15% lower than Mumbai for equivalent care. SURGISAATHI packages include surgeon fee, anaesthesia, OT charges, post-op medicines, and follow-up." },
  { q: "Which hospitals in Chandigarh perform laser fissure surgery?", a: "SURGISAATHI partners with Max Hospital (Sector 56), Fortis Hospital Mohali, and other NABH-accredited hospitals across the Chandigarh Tricity — Chandigarh, Mohali, and Panchkula." },
  { q: "Is fissure surgery covered by health insurance in Chandigarh?", a: "Yes. Anal fissure surgery (ICD-10: K60.0–K60.2) is covered under most standard and corporate health insurance policies in Chandigarh. Our team handles cashless pre-authorisation with all major TPAs including Star Health, HDFC Ergo, and ICICI Lombard." },
  { q: "How long does recovery take after laser fissure surgery in Chandigarh?", a: "Most patients return to desk work within 2–3 days and achieve full recovery in 2–4 weeks. Laser sphincterotomy causes significantly less pain than open surgery, and there are no stitches." },
  { q: "Can I consult in Hindi or Punjabi for fissure treatment in Chandigarh?", a: "Absolutely. Our Chandigarh care coordinators are fluent in Hindi and Punjabi. You can discuss your condition comfortably in your preferred language — no embarrassment, no judgment." },
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

const benefits = [
  { icon: Clock, title: "Same-Day Discharge", desc: "Go home within 4–6 hours of surgery. No overnight hospital stay." },
  { icon: IndianRupee, title: "All-Inclusive Pricing", desc: "Surgeon, anaesthesia, OT charges — everything included from ₹30,000." },
  { icon: BadgeCheck, title: "Cashless Insurance", desc: "Star Health, HDFC Ergo, ICICI Lombard and 20+ others. We handle it all." },
  { icon: CheckCircle2, title: "Verified Surgeons", desc: "MCI-registered proctologists with 10+ years of laser surgery experience." },
  { icon: Star, title: "4.9★ Patient Rating", desc: "Rated by 2,100+ patients across the Chandigarh Tricity." },
  { icon: Phone, title: "Hindi & Punjabi Support", desc: "Talk to our coordinator in your language — free, private, no judgment." },
];

export default function FissureSurgeryChandigarh() {
  const path = "/fissure-surgery-chandigarh";
  const procedureData = {
    title: "Laser Fissure Surgery",
    subtitle: "Minimally invasive laser treatment for anal fissure in Chandigarh",
    description: "Anal fissure is a small tear in the anal lining causing severe pain and bleeding during bowel movements. Laser sphincterotomy is the gold-standard treatment with a <3% recurrence rate.",
    priceRange: "₹30,000–₹55,000",
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
          { name: "Chandigarh", href: path },
        ]),
        localBusinessSchemaForCity(chandigarhLocation),
      ]} />

      {/* HERO */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="flex items-center gap-2 text-white/60 text-sm mb-5" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-white">Home</Link>
                <span>/</span>
                <Link href="/surgeries/fissure" className="hover:text-white">Fissure Surgery</Link>
                <span>/</span>
                <span className="text-white">Chandigarh</span>
              </nav>
              <div className="trust-badge !bg-white/15 !text-white mb-5 inline-flex">
                <MapPin size={13} /> Chandigarh · Mohali · Panchkula
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Laser Fissure Surgery in{" "}
                <span className="text-[var(--color-accent)]">Chandigarh</span>
              </h1>
              <p className="text-lg text-white/80 mb-4 max-w-xl">
                Minimally invasive laser sphincterotomy at Max Hospital & NABH facilities across the Tricity. Same-day discharge, 2–4 week recovery, prices 10–15% lower than Mumbai. Hindi/Punjabi support.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="flex items-center gap-1.5 bg-white/10 text-white px-3 py-1.5 rounded-xl text-sm">
                  <IndianRupee size={14} /> Starting ₹30,000
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 text-white px-3 py-1.5 rounded-xl text-sm">
                  <Clock size={14} /> Same-day discharge
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 text-white px-3 py-1.5 rounded-xl text-sm">
                  <BadgeCheck size={14} /> Hindi · Punjabi support
                </span>
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
              <InlineLeadForm formId="fissure-chandigarh-lead-form" />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile form */}
      <section className="lg:hidden bg-[var(--color-bg-warm)] py-10">
        <div className="max-w-lg mx-auto px-4">
          <p className="text-center text-lg font-bold mb-4">Book Free Consultation in Chandigarh</p>
          <InlineLeadForm formId="fissure-chandigarh-lead-form-mobile" />
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="trust-badge mb-4 inline-flex">Why Choose SURGISAATHI in Chandigarh</span>
            <h2 className="text-2xl lg:text-3xl font-bold mt-3">Prices 10–15% Lower Than Mumbai. Same Quality Care.</h2>
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
            <p>An anal fissure is a small, painful tear in the lining of the anus. It causes sharp pain during and after bowel movements, along with bright red bleeding. Chronic fissures — those lasting more than 6–8 weeks — rarely heal with creams alone and require surgical treatment.</p>
            <p><strong>Laser sphincterotomy</strong> is the gold-standard surgical treatment. A precisely controlled laser beam relaxes the internal anal sphincter muscle, reducing spasm, improving blood flow to the fissure site, and allowing natural healing. The procedure takes 30–45 minutes, requires no stitches, and patients are discharged the same day.</p>
            <p>Compared to open lateral sphincterotomy, laser treatment results in significantly less post-operative pain, lower infection risk, and a recurrence rate below 3%.</p>
            <p>In Chandigarh, SURGISAATHI partners with NABH-accredited hospitals in Chandigarh, Mohali, and Panchkula. Our care coordinators speak Hindi and Punjabi and will match you with the most experienced proctologist close to your location.</p>
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
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">Fissure Surgery Cost in Chandigarh (2026)</h2>
          <p className="text-[var(--color-text-muted)] mb-6">All-inclusive pricing. No hidden charges.</p>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[var(--color-card-border)] mb-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[var(--color-primary)]/5">
                    <th className="text-left px-6 py-4 text-sm font-semibold">Component</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold">Chandigarh Cost</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold">Insurance</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "Acute Fissure (Laser)", cost: "₹30,000 – ₹40,000", ins: "Covered" },
                    { item: "Chronic Fissure + Sentinel Pile", cost: "₹40,000 – ₹55,000", ins: "Covered" },
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
          <p className="text-sm text-[var(--color-text-muted)]">All-inclusive package starting at <strong className="text-[var(--color-primary)]">₹30,000</strong> in Chandigarh. 10–15% lower than equivalent care in Mumbai. Exact cost depends on severity and insurance plan.</p>
        </div>
      </section>

      {/* DOCTOR */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">Top Fissure Surgeon in Chandigarh</h2>
          <p className="text-[var(--color-text-muted)] mb-8">SURGISAATHI-verified proctologist with over 2,100 laser procedures performed.</p>
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
              CMO & Senior Proctologist, SURGISAATHI · MBBS, MS (General Surgery), 12 years experience in laser anorectal surgery.
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
              { label: "Fissure Surgery in Mumbai", href: "/fissure-surgery-mumbai", desc: "Laser sphincterotomy from ₹30,000" },
              { label: "Piles Surgery in Chandigarh", href: "/piles-surgery-chandigarh", desc: "Laser piles treatment from ₹36,000" },
              { label: "Best Ointment for Fissure", href: "/blog/best-ointment-for-fissure-in-india", desc: "Doctor's review of fissure creams" },
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
          <h2 className="text-3xl font-bold text-white mb-4">Get Expert Fissure Treatment in Chandigarh</h2>
          <p className="text-white/80 mb-8">Free consultation. Cashless insurance. Hindi & Punjabi support. No judgment.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-consultation" className="btn-primary !bg-[var(--color-accent)] !py-4 !px-10 animate-pulse-glow">
              Book Free Consultation <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/917011473737?text=Hi%20SURGISAATHI%2C%20I%27d%20like%20a%20consultation%20for%20Fissure%20surgery%20in%20Chandigarh"
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
