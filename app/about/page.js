import Link from "next/link";
import { Heart, Shield, Users, Target, Award, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About SURGISAATHI — Our Mission, Team & Commitment",
  description: "SURGISAATHI is a surgery coordination platform for sensitive procedures (piles, fissure, fistula, circumcision) in Mumbai and Chandigarh. Learn about our mission, values, and commitment to patient privacy and care.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="pt-16 lg:pt-[72px]">
      {/* HERO */}
      <section className="gradient-hero py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">Your Trusted Saathi in Healthcare</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">We believe no one should suffer in silence because of stigma. SURGISAATHI exists to make healthcare for sensitive conditions accessible, private, and trustworthy.</p>
        </div>
      </section>

      {/* MISSION */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <span className="trust-badge mb-4 inline-flex">Our Mission</span>
              <h2 className="text-2xl lg:text-3xl font-bold mt-3 mb-4">Breaking the Stigma Around Sensitive Surgeries</h2>
              <p className="text-[var(--color-text-body)] leading-relaxed mb-4">Millions of Indians suffer from conditions like piles, fissures, and fistulas in silence — delaying treatment for years due to embarrassment and lack of reliable information.</p>
              <p className="text-[var(--color-text-body)] leading-relaxed">SURGISAATHI was founded to change this. We provide a safe, private, and judgment-free platform where patients can access expert surgical care with complete transparency and support.</p>
            </div>
            <div className="space-y-4">
              {[
                { icon: Heart, title: "Patient First", desc: "Every decision starts with the patient's well-being" },
                { icon: Shield, title: "Trust & Privacy", desc: "Your medical information is always confidential" },
                { icon: Target, title: "Quality Obsessed", desc: "Only verified surgeons at accredited hospitals" },
                { icon: Users, title: "Complete Support", desc: "From consultation to recovery, we're with you" },
              ].map((v) => (
                <div key={v.title} className="flex items-start gap-4 p-4 rounded-xl bg-[var(--color-bg-warm)]">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                    <v.icon size={20} className="text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{v.title}</h3>
                    <p className="text-sm text-[var(--color-text-muted)]">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "10,000+", label: "Patients Helped" },
              { value: "100+", label: "Expert Surgeons" },
              { value: "50+", label: "Partner Hospitals" },
              { value: "2", label: "Cities & Growing" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)]">{s.value}</div>
                <div className="text-sm text-[var(--color-text-muted)] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DIFFERENT */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center">What Makes Us Different</h2>
          <div className="space-y-4">
            {[
              "We focus ONLY on sensitive surgical conditions — no dilution, just deep expertise",
              "Every surgeon is personally vetted with verified credentials and track record",
              "Transparent, all-inclusive pricing — no hidden charges, ever",
              "Dedicated care coordinator assigned to every patient",
              "Complete insurance and financing support built into the platform",
              "Privacy-first design — we understand the sensitive nature of these conditions",
              "Post-surgery follow-up and recovery support at no extra cost",
            ].map((p) => (
              <div key={p} className="flex items-start gap-3 p-4 rounded-xl bg-[var(--color-bg-warm)]">
                <CheckCircle2 size={20} className="text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-[var(--color-text-body)]">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience Better Healthcare?</h2>
          <p className="text-white/80 mb-8">Talk to our care experts — it&apos;s free, private, and takes just 2 minutes.</p>
          <Link href="/book-consultation" className="btn-primary !bg-[var(--color-accent)] !py-4 !px-10 animate-pulse-glow">
            Book Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
