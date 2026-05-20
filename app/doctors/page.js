import Link from "next/link";
import { Shield, UserCheck, Stethoscope, Award, Lock, ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import JsonLd from "../components/JsonLd";
import { breadcrumbSchema } from "../../lib/seo";

export const metadata = {
  title: "Verified Surgeons for Piles, Circumcision, Fistula & More in Mumbai & Chandigarh",
  description: "SURGISAATHI partners with credential-verified surgeons in Mumbai and Chandigarh for laser piles, circumcision, fissure, fistula and pilonidal sinus surgery. Book a free consultation to be matched with the right surgeon for your case.",
  alternates: { canonical: "/doctors" },
};

const trust = [
  {
    icon: UserCheck,
    title: "Credential-verified",
    desc: "We verify MBBS, MS/MCh registration, and current practice details with the relevant State Medical Council before adding any surgeon to our network.",
  },
  {
    icon: Award,
    title: "Procedure-specialised",
    desc: "Every partner surgeon is selected for proven experience with the specific procedure you need — proctology, laser surgery, or general surgery as appropriate.",
  },
  {
    icon: Shield,
    title: "Accredited hospitals only",
    desc: "Operations are performed at NABH-aligned or comparable hospitals in Mumbai and Chandigarh that meet our infection-control and post-op safety standards.",
  },
  {
    icon: Lock,
    title: "Privacy by default",
    desc: "We do not publish surgeon-patient relationships, individual ratings, or identifying details on this page. Match details are shared with you privately during your consultation.",
  },
];

export default function DoctorsPage() {
  return (
    <div className="pt-16 lg:pt-[72px]">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Doctors", href: "/doctors" },
        ])}
      />

      {/* HERO */}
      <section className="gradient-hero py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="trust-badge !bg-white/15 !text-white mb-5">
            <CheckCircle2 size={14} /> Mumbai &amp; Chandigarh
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Verified Surgeons Available on Consultation
          </h1>
          <p className="text-lg text-white/80 max-w-3xl">
            Rather than list profiles publicly, we match each patient with the right surgeon for their case during a private consultation. This protects both patient and surgeon privacy and lets us confirm credentials and availability in real time.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/book-consultation"
              className="btn-primary !bg-[var(--color-accent)] !text-white !py-4 !px-8"
            >
              Book Free Consultation <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+917011473737"
              className="btn-secondary !border-white/30 !text-white hover:!bg-white/10 !py-4 !px-8"
            >
              <Phone size={18} /> Talk to Care Expert
            </a>
          </div>
        </div>
      </section>

      {/* HOW WE PICK SURGEONS */}
      <section className="section bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="trust-badge mb-4 inline-flex">How We Vet Surgeons</span>
            <h2 className="text-3xl font-bold mt-3">Our Surgeon Network Standard</h2>
            <p className="text-[var(--color-text-muted)] mt-3 max-w-2xl mx-auto">
              We only refer patients to surgeons who meet every point below. If you have specific requirements (gender of surgeon, specific hospital, language), tell us during the consultation and we will match accordingly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trust.map((t) => (
              <div key={t.title} className="card">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
                  <t.icon size={22} className="text-[var(--color-primary)]" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{t.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCEDURES SHORTCUT */}
      <section className="section bg-[var(--color-bg-warm)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="trust-badge mb-4 inline-flex">Procedures We Match For</span>
            <h2 className="text-3xl font-bold mt-3">Tell us your condition — we&rsquo;ll match the right surgeon</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { name: "Piles (Hemorrhoids)", slug: "piles" },
              { name: "Circumcision", slug: "circumcision" },
              { name: "Fissure", slug: "fissure" },
              { name: "Fistula", slug: "fistula" },
              { name: "Abscess", slug: "abscess" },
              { name: "Pilonidal Sinus", slug: "pilonidal-sinus" },
            ].map((p) => (
              <Link
                key={p.slug}
                href={`/surgeries/${p.slug}`}
                className="card text-center hover:shadow-md hover:border-[var(--color-primary)]/40 transition-all"
              >
                <Stethoscope size={20} className="text-[var(--color-primary)] mx-auto mb-2" />
                <p className="font-medium text-sm">{p.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="gradient-hero py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to be matched with a surgeon?</h2>
          <p className="text-white/80 mb-8">
            Share your condition privately. Our care coordinator will recommend the right surgeon and confirm cost, hospital and timeline before you commit to anything.
          </p>
          <Link
            href="/book-consultation"
            className="btn-primary !bg-[var(--color-accent)] !text-white !py-4 !px-10"
          >
            Book Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
