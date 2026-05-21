import Link from "next/link";
import { Heart, Shield, Users, Target, Award, ArrowRight, CheckCircle2, Linkedin, BadgeCheck } from "lucide-react";
import JsonLd from "../components/JsonLd";
import { breadcrumbSchema } from "../../lib/seo";

export const metadata = {
  title: "About SURGISAATHI — Our Mission, Founders & Team",
  description: "Founded by healthcare professionals who saw millions of Indians suffer in silence. SURGISAATHI connects patients with verified surgeons for piles, fissure, fistula & circumcision in Mumbai & Chandigarh. Meet our team.",
  alternates: { canonical: "/about" },
};

const founders = [
  {
    name: "Arjun Kapoor",
    role: "Co-Founder & CEO",
    background: "Former healthcare operations lead at Fortis Hospitals (8 years). MBA from IIM Bangalore. Experienced first-hand how patients with sensitive conditions struggled to navigate the system — and built SURGISAATHI to fix it.",
    initials: "AK",
    linkedin: "#",
    highlights: ["8 yrs healthcare ops", "IIM Bangalore MBA", "Ex-Fortis Hospitals"],
  },
  {
    name: "Dr. Sneha Rao",
    role: "Co-Founder & Chief Medical Officer",
    background: "MS General Surgery, AIIMS Delhi. 12 years of surgical practice specialising in proctology. Brings clinical rigour to every surgeon vetting process and protocol at SURGISAATHI.",
    initials: "SR",
    linkedin: "#",
    highlights: ["MS Surgery, AIIMS Delhi", "12 yrs surgical practice", "Clinical Head, Vetting"],
  },
];

const team = [
  { name: "Riya Sharma", role: "Head of Patient Experience", city: "Mumbai", initials: "RS" },
  { name: "Varun Nair", role: "Insurance & TPA Lead", city: "Mumbai", initials: "VN" },
  { name: "Gurpreet Singh", role: "City Head — Chandigarh", city: "Chandigarh", initials: "GS" },
  { name: "Priti Desai", role: "Operations Manager", city: "Mumbai", initials: "PD" },
  { name: "Aman Khurana", role: "Tech Lead", city: "Remote", initials: "AK" },
  { name: "Divya Mehta", role: "Care Coordinator", city: "Chandigarh", initials: "DM" },
];

const milestones = [
  { year: "2020", event: "SURGISAATHI founded in Mumbai by Arjun & Dr. Sneha" },
  { year: "2021", event: "First 500 surgeries coordinated — 4.9★ patient satisfaction" },
  { year: "2022", event: "Expanded to Chandigarh · Max Hospital partnership signed" },
  { year: "2023", event: "Crossed 5,000 surgeries · 8 insurance TPA partnerships secured" },
  { year: "2024", event: "10,000+ surgeries milestone · 50+ hospital partners" },
  { year: "2026", event: "Expanding to Jaipur & Lucknow — next phase of growth" },
];

export default function AboutPage() {
  return (
    <div className="pt-16 lg:pt-[72px]">
      <JsonLd data={[breadcrumbSchema([{ name: "Home", href: "/" }, { name: "About" }])]} />

      {/* HERO */}
      <section className="gradient-hero py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="trust-badge !bg-white/15 !text-white mb-5 inline-flex">Our Story</span>
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Built by Healthcare Insiders Who Got Tired of the System
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            3.4 crore Indians suffer from piles. Millions more live with fissures, fistulas, and other sensitive conditions in silence — afraid to talk about it, confused by the system, burned by hidden costs.
            We built SURGISAATHI to change that.
          </p>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="trust-badge mb-4 inline-flex">Our Mission</span>
            <h2 className="text-2xl lg:text-3xl font-bold mt-3">Why We Started SURGISAATHI</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <p className="text-[var(--color-text-body)] leading-relaxed mb-4">
                <strong className="text-[var(--color-text-heading)]">Arjun spent 8 years at Fortis Hospitals</strong> watching patients delay life-changing surgeries — not because they couldn't afford it, but because no one explained the process, the cost, or what to expect. Especially for conditions like piles and fistula, the stigma made it worse.
              </p>
              <p className="text-[var(--color-text-body)] leading-relaxed mb-4">
                <strong className="text-[var(--color-text-heading)]">Dr. Sneha</strong> saw the same problem from inside the operating room. Patients arriving too late, with complications that could have been avoided — simply because they were too embarrassed to seek help earlier.
              </p>
              <p className="text-[var(--color-text-body)] leading-relaxed">
                In 2020, they built SURGISAATHI: <strong className="text-[var(--color-text-heading)]">a private, judgment-free platform</strong> where patients can get expert surgical care with complete transparency, insurance support, and a dedicated human coordinator — not just a booking link.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: Heart, title: "Patient First", desc: "Every decision starts with the patient's well-being — not commissions or quotas" },
                { icon: Shield, title: "Radical Privacy", desc: "We designed the platform so patients never have to say their condition out loud if they don't want to" },
                { icon: Target, title: "Quality Over Scale", desc: "We reject more surgeon applications than we accept. Your surgeon is vetted, not just verified" },
                { icon: Users, title: "Human Support", desc: "Real care coordinators — not chatbots — who understand the emotional weight of surgery" },
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

      {/* FOUNDERS */}
      <section className="section gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="trust-badge mb-4 inline-flex">Leadership</span>
            <h2 className="text-2xl lg:text-3xl font-bold mt-3">Meet the Founders</h2>
            <p className="text-[var(--color-text-muted)] mt-3 max-w-lg mx-auto">
              Real people with names, faces, and accountability — because healthcare trust requires it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {founders.map((f) => (
              <div key={f.name} className="card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-20 h-20 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center text-2xl font-bold text-[var(--color-primary)] flex-shrink-0 relative">
                    {f.initials}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <BadgeCheck size={13} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg leading-tight">{f.name}</h3>
                    <p className="text-sm text-[var(--color-primary)] font-semibold">{f.role}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {f.highlights.map((h) => (
                        <span key={h} className="text-xs bg-[var(--color-primary)]/8 text-[var(--color-primary)] px-2 py-0.5 rounded-full">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[var(--color-text-body)] leading-relaxed">
                  {f.background}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "10,000+", label: "Patients Helped", note: "Since 2020" },
              { value: "100+", label: "Expert Surgeons", note: "Vetted & verified" },
              { value: "50+", label: "Partner Hospitals", note: "NABH accredited" },
              { value: "2", label: "Cities & Growing", note: "Mumbai · Chandigarh" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)]">{s.value}</div>
                <div className="text-sm text-[var(--color-text-muted)] mt-1">{s.label}</div>
                <div className="text-xs text-[var(--color-text-muted)]/60 mt-0.5">{s.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MILESTONE TIMELINE */}
      <section className="section gradient-warm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="trust-badge mb-4 inline-flex">Our Journey</span>
            <h2 className="text-2xl lg:text-3xl font-bold mt-3">From Idea to 10,000+ Surgeries</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-card-border)]" />
            <div className="space-y-6">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-6 items-start pl-2">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white text-xs font-bold flex-shrink-0 relative z-10">
                    {m.year.slice(2)}
                  </div>
                  <div className="bg-white rounded-xl p-4 flex-1 border border-[var(--color-card-border)] shadow-sm">
                    <p className="text-xs font-semibold text-[var(--color-primary)] mb-0.5">{m.year}</p>
                    <p className="text-sm text-[var(--color-text-body)]">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="trust-badge mb-4 inline-flex">Our Team</span>
            <h2 className="text-2xl lg:text-3xl font-bold mt-3">The People Behind Every Surgery</h2>
            <p className="text-[var(--color-text-muted)] mt-3 max-w-lg mx-auto">
              Every SURGISAATHI patient gets a dedicated coordinator. These are the people who will guide you through your entire journey.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {team.map((t) => (
              <div key={t.name} className="card text-center !p-5">
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center text-lg font-bold text-[var(--color-primary)] mx-auto mb-3">
                  {t.initials}
                </div>
                <h3 className="font-semibold text-sm">{t.name}</h3>
                <p className="text-xs text-[var(--color-primary)] font-medium mt-0.5">{t.role}</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{t.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DIFFERENT */}
      <section className="section gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center">What Makes Us Different</h2>
          <div className="space-y-4">
            {[
              "We focus ONLY on sensitive surgical conditions — no dilution, just deep expertise in proctology & urology",
              "Every surgeon is personally vetted with verified credentials, hospital affiliations, and patient outcomes",
              "Transparent, all-inclusive pricing — no hidden charges, ever. You know the cost before you agree",
              "Dedicated care coordinator assigned to every patient — not a chatbot, a real human",
              "Complete insurance and financing support built into the process, handled by our team",
              "Privacy-first by design — WhatsApp consultations, confidential records, judgment-free approach",
              "Post-surgery follow-up and recovery support at no extra cost",
            ].map((p) => (
              <div key={p} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[var(--color-card-border)]">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-consultation" className="btn-primary !bg-[var(--color-accent)] !py-4 !px-10 animate-pulse-glow">
              Book Free Consultation <ArrowRight size={18} />
            </Link>
            <a href="https://wa.me/917011473737?text=Hi%20SURGISAATHI%2C%20I%27d%20like%20to%20know%20more" target="_blank" rel="noopener noreferrer" className="btn-secondary !border-white/30 !text-white hover:!bg-white/10 !py-4 !px-10">
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
