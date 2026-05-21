import Link from "next/link";
import { notFound } from "next/navigation";
import { surgeryContent } from "../../../lib/surgery-content";
import { CheckCircle2, Clock, IndianRupee, ArrowRight, Phone, Zap, ChevronRight, Building2, ShieldCheck } from "lucide-react";
import JsonLd from "../../components/JsonLd";
import {
  medicalProcedureSchema,
  faqPageSchema,
  breadcrumbSchema,
} from "../../../lib/seo";

import { surgeryData } from "../../../lib/surgery-data";

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

  return (
    <div className="pt-16 lg:pt-[72px]">
      <JsonLd
        data={[
          medicalProcedureSchema({ slug: p.slug, data, path }),
          faqPageSchema(data.faqs, path),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Surgeries", href: "/surgeries" },
            { name: shortName, href: path },
          ]),
        ]}
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
              <a href="tel:+917011473737" className="btn-secondary !border-white/30 !text-white hover:!bg-white/10 !py-4 !px-8">
                <Phone size={18} /> Talk to Expert
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
