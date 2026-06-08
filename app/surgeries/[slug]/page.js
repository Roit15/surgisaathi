import Link from "next/link";
import { notFound } from "next/navigation";
import { surgeryContent } from "../../../lib/surgery-content";
import { CheckCircle2, Clock, IndianRupee, ArrowRight, Phone, Zap, ChevronRight, Building2, ShieldCheck } from "lucide-react";
import JsonLd from "../../components/JsonLd";
import {
  medicalProcedureSchema,
  medicalConditionSchema,
  faqPageSchema,
  breadcrumbSchema,
} from "../../../lib/seo";

import { surgeryData } from "../../../lib/surgery-data";

const relatedGuidesBySurgery = {
  piles: [
    { label: "Piles surgery cost in Chandigarh", href: "/blog/piles-surgery-cost-chandigarh-2026", desc: "Tricity pricing, inclusions and insurance support" },
    { label: "Best piles doctor in Mumbai", href: "/blog/best-piles-doctor-mumbai-2026", desc: "How to verify surgeon credentials and hospital access" },
    { label: "External piles treatment at home", href: "/blog/external-piles-treatment-home-remedies", desc: "Home care options and warning signs" },
  ],
  fissure: [
    { label: "Chronic fissure treatment options", href: "/blog/chronic-fissure-treatment-options-india", desc: "Laser, Botox and LIS compared" },
    { label: "Fissure surgery cost in Mumbai & Chandigarh", href: "/blog/fissure-surgery-cost-mumbai-chandigarh", desc: "City-wise cost and recovery expectations" },
    { label: "Can fissure heal on its own?", href: "/blog/can-fissure-heal-on-its-own", desc: "When medicines work and when they do not" },
  ],
  fistula: [
    { label: "Fistula surgery cost in India", href: "/blog/fistula-surgery-cost-india-2026", desc: "FiLaC, VAAFT, LIFT and fistulotomy costs" },
    { label: "What is anal fistula?", href: "/blog/what-is-anal-fistula-causes-symptoms", desc: "Causes, symptoms and diagnosis" },
    { label: "Fistula surgery recovery time", href: "/blog/fistula-surgery-recovery-time-tips", desc: "Recovery timeline and aftercare tips" },
  ],
  circumcision: [
    { label: "Circumcision for phimosis", href: "/blog/circumcision-for-phimosis-complete-guide", desc: "When phimosis needs treatment" },
    { label: "Adult circumcision recovery", href: "/blog/adult-circumcision-recovery-guide", desc: "Day-by-day recovery expectations" },
    { label: "Laser vs traditional circumcision", href: "/blog/laser-vs-traditional-circumcision", desc: "Compare techniques, healing and comfort" },
  ],
  abscess: [
    { label: "Perianal abscess treatment", href: "/blog/perianal-abscess-treatment-guide", desc: "Symptoms, urgency and drainage options" },
    { label: "Abscess drainage surgery", href: "/blog/abscess-drainage-surgery-what-to-expect", desc: "What happens before, during and after drainage" },
    { label: "Anal abscess vs piles", href: "/blog/anal-abscess-vs-piles", desc: "How to tell swelling, pain and bleeding apart" },
  ],
  "pilonidal-sinus": [
    { label: "Pilonidal sinus laser surgery", href: "/blog/pilonidal-sinus-laser-surgery-guide", desc: "Laser treatment and recurrence risk" },
    { label: "Pilonidal sinus causes and prevention", href: "/blog/pilonidal-sinus-causes-prevention-treatment", desc: "Why it happens and how to reduce recurrence" },
    { label: "Pilonidal sinus recovery time", href: "/blog/pilonidal-sinus-recovery-time", desc: "Healing timeline after treatment" },
  ],
};

export async function generateStaticParams() {
  return Object.keys(surgeryData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const p = await params;
  const data = surgeryData[p.slug];
  if (!data) return {};
  const path = `/surgeries/${p.slug}`;
  return {
    title: `${data.title} — Cost ${data.priceRange}, Recovery & Verified Surgeons`,
    description: `${data.subtitle}. Starting at ${data.priceRange}. Book a free consultation with verified surgeons in Mumbai & Chandigarh. Cashless insurance support. ☎ +91 70114 73737`,
    alternates: { canonical: path },
    openGraph: {
      title: `${data.title} | SURGISAATHI`,
      description: `${data.subtitle}. Starting at ${data.priceRange}.`,
      url: path,
    },
  };
}

export default async function SurgeryPage({ params }) {
  const p = await params;
  const data = surgeryData[p.slug];

  if (!data) {
    notFound();
  }

  const path = `/surgeries/${p.slug}`;
  const shortName = data.title.replace("Laser ", "").replace(" Surgery", "");
  const relatedGuides = relatedGuidesBySurgery[p.slug] || [];

  return (
    <div className="pt-16 lg:pt-[72px]">
      <JsonLd
        data={[
          medicalProcedureSchema({ slug: p.slug, data, path }),
          medicalConditionSchema({ data, path }),
          faqPageSchema(data.faqs, path),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Surgeries", href: "/surgeries" },
            { name: shortName, href: path },
          ]),
        ].filter(Boolean)}
      />
      {/* HERO */}
      <section className="gradient-hero py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight size={14} />
            <Link href="/surgeries" className="hover:text-white">Surgeries</Link>
            <ChevronRight size={14} />
            <span className="text-white">{data.title.replace("Laser ", "").replace(" Surgery", "")}</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">{data.title}</h1>
            <p className="text-lg text-white/80 mb-6">{data.subtitle}</p>
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-xl text-sm">
                <IndianRupee size={16} /> {data.priceRange}
              </span>
              <span className="flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-xl text-sm">
                <Clock size={16} /> Recovery: {data.recovery}
              </span>
              <span className="flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-xl text-sm">
                <Zap size={16} /> {data.duration}
              </span>
              <span className="flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-xl text-sm">
                <Building2 size={16} /> {data.hospital}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book-consultation" className="btn-primary !bg-[var(--color-accent)] animate-pulse-glow !py-4 !px-8">
                Book Free Consultation <ArrowRight size={18} />
              </Link>
              <a
                href={`https://wa.me/917011473737?text=${encodeURIComponent(`Hi SURGISAATHI, I'd like a free consultation for ${shortName}. Please connect me with a specialist.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !border-white/30 !text-white hover:!bg-white/10 !py-4 !px-8"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.553 4.109 1.514 5.836L.057 23.997l6.305-1.655A11.948 11.948 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.803 9.803 0 01-5.034-1.396l-.361-.214-3.741.981.998-3.648-.235-.374A9.808 9.808 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
                WhatsApp Us
              </a>
              <a href="tel:+917011473737" className="btn-secondary !border-white/30 !text-white hover:!bg-white/10 !py-4 !px-8">
                <Phone size={18} /> Call Expert
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">What is {data.title.replace("Laser ", "").replace(" Surgery", "")}?</h2>
          {surgeryContent[p.slug] ? (
            <div 
              className="article-body prose-headings:mb-4 prose-p:mb-4 prose-ul:list-disc prose-ul:pl-5 prose-ul:mb-6 prose-li:mb-2"
              dangerouslySetInnerHTML={{ __html: surgeryContent[p.slug] }} 
            />
          ) : (
            <p className="text-[var(--color-text-body)] leading-relaxed">{data.description}</p>
          )}
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="section gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">Common Symptoms</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.symptoms.map((s) => (
              <div key={s} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[var(--color-card-border)]">
                <CheckCircle2 size={20} className="text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                <span className="text-sm">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TREATMENT OPTIONS */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">Treatment Options</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.treatments.map((t) => (
              <div key={t.name} className={`card ${t.recommended ? "!border-[var(--color-primary)] ring-2 ring-[var(--color-primary)]/20" : ""}`}>
                {t.recommended && (
                  <span className="text-xs font-semibold text-white bg-[var(--color-primary)] px-3 py-1 rounded-full mb-3 inline-block">
                    ✓ Recommended
                  </span>
                )}
                <h3 className="font-semibold text-lg mb-3">{t.name}</h3>
                <ul className="space-y-2">
                  {t.pros.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                      <CheckCircle2 size={14} className="text-[var(--color-success)]" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCEDURE STEPS */}
      <section className="section gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">Procedure Steps</h2>
          <div className="space-y-4">
            {data.steps.map((step, i) => (
              <div key={step} className="flex items-start gap-4 bg-white p-5 rounded-xl border border-[var(--color-card-border)]">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{i + 1}</span>
                </div>
                <div>
                  <p className="font-medium">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED HEALTH GUIDES */}
      {relatedGuides.length > 0 && (
        <section className="section bg-[var(--color-bg-warm)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="trust-badge mb-4 inline-flex">Health Guide</span>
              <h2 className="text-2xl lg:text-3xl font-bold mt-3">Read More About {shortName}</h2>
              <p className="text-[var(--color-text-muted)] mt-3 max-w-2xl mx-auto">
                Cost, symptoms, recovery and treatment explainers reviewed for patients comparing surgery options.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedGuides.map((guide) => (
                <Link key={guide.href} href={guide.href} className="bg-white border border-[var(--color-card-border)] rounded-lg p-5 hover:border-[var(--color-primary)] hover:shadow-sm transition-all group">
                  <h3 className="font-semibold text-[var(--color-text-heading)] group-hover:text-[var(--color-primary)] transition-colors">{guide.label}</h3>
                  <p className="text-sm text-[var(--color-text-muted)] mt-2">{guide.desc}</p>
                  <span className="text-sm font-semibold text-[var(--color-primary)] inline-flex items-center gap-1 mt-4">
                    Read guide <ChevronRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {data.faqs.map((f) => (
              <details key={f.q} className="card group cursor-pointer">
                <summary className="flex items-center justify-between font-semibold text-[var(--color-text-heading)] list-none">
                  {f.q}
                  <ChevronRight size={18} className="text-[var(--color-text-muted)] group-open:rotate-90 transition-transform" />
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Expert Treatment?</h2>
          <p className="text-white/80 mb-8">Book a free consultation and get a personalised treatment plan from a verified surgeon.</p>
          <Link href="/book-consultation" className="btn-primary !bg-[var(--color-accent)] !py-4 !px-10 animate-pulse-glow">
            Book Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* MEDICAL REVIEW + DISCLAIMER */}
      <section className="bg-[var(--color-bg-warm)] border-t border-[var(--color-card-border)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-[var(--color-text-muted)] space-y-3">
          <p className="flex items-start gap-2">
            <ShieldCheck size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
            <span>
              <strong className="text-[var(--color-text-heading)]">Medically reviewed by</strong>{" "}
              the SURGISAATHI clinical team. <strong>Last updated:</strong> May 2026.
            </span>
          </p>
          <p className="text-xs leading-relaxed">
            This information is for educational purposes only and is not a
            substitute for professional medical advice, diagnosis, or treatment.
            Surgical outcomes, recovery times, and costs vary by individual
            case. Always consult a qualified surgeon for advice tailored to
            your condition. Prices shown are indicative ranges, may change
            without notice, and depend on the hospital, surgeon, and complexity
            of the procedure.
          </p>
        </div>
      </section>
    </div>
  );
}
