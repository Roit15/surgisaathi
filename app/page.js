import Link from "next/link";
import Image from "next/image";
import {
  Shield, Heart, Clock, IndianRupee, ChevronRight,
  UserCheck, Building2, Stethoscope, CheckCircle2, ArrowRight,
  Phone, Zap, Award, Users, HeartPulse, Sparkles,
  CircleDot, Star, Lock, Scissors, Activity, Flame, Target, Droplets,
  BadgeCheck, TrendingUp
} from "lucide-react";
import InlineLeadForm from "./components/InlineLeadForm";
import AnimatedCounter from "./components/AnimatedCounter";

/* ── STATIC DATA ────────────────────────────────────────── */

const surgeries = [
  { name: "Circumcision", slug: "circumcision", icon: Scissors, accentColor: "#3B82F6", price: "₹25,000", desc: "Safe laser circumcision with same-day discharge", tag: "Most Popular" },
  { name: "Piles", slug: "piles", icon: Activity, accentColor: "#F97316", price: "₹36,000", desc: "Minimally invasive laser piles treatment with rapid recovery", tag: "High Demand" },
  { name: "Fissure", slug: "fissure", icon: Flame, accentColor: "#10B981", price: "₹35,000", desc: "Laser fissure surgery with rapid recovery", tag: null },
  { name: "Fistula", slug: "fistula", icon: Target, accentColor: "#EF4444", price: "₹40,000", desc: "Advanced laser fistula treatment by experts", tag: null },
  { name: "Abscess", slug: "abscess", icon: Droplets, accentColor: "#F59E0B", price: "₹20,000", desc: "Quick abscess drainage with minimal discomfort", tag: null },
  { name: "Pilonidal Sinus", slug: "pilonidal-sinus", icon: CircleDot, accentColor: "#8B5CF6", price: "₹35,000", desc: "Laser pilonidal sinus surgery. No recurrence", tag: null },
];

const steps = [
  { num: "01", title: "Share Your Concern", desc: "Tell us about your condition — privately and confidentially.", icon: HeartPulse },
  { num: "02", title: "Get Expert Guidance", desc: "Our care coordinator connects you with the right surgeon.", icon: UserCheck },
  { num: "03", title: "Book & Prepare", desc: "We handle insurance, scheduling, and pre-op preparation.", icon: Clock },
  { num: "04", title: "Surgery & Recovery", desc: "Day-care laser surgery with complete post-op support.", icon: Sparkles },
];

const trustPillars = [
  { icon: Shield, title: "100% Verified Surgeons", desc: "Every surgeon is credential-verified with 10+ years experience", featured: true },
  { icon: IndianRupee, title: "Transparent Pricing", desc: "No hidden costs. All-inclusive packages with upfront pricing", featured: false },
  { icon: Heart, title: "Complete Care Support", desc: "From consultation to recovery — we're with you every step", featured: false },
  { icon: Zap, title: "Advanced Laser Technology", desc: "Minimally invasive procedures with faster recovery", featured: false },
  { icon: Award, title: "NABH Accredited Hospitals", desc: "Partnered only with top-quality accredited facilities", featured: false },
  { icon: Users, title: "Insurance & EMI Support", desc: "Cashless insurance processing and 0% EMI options", featured: false },
];

const stats = [
  { value: "10,000+", label: "Successful Surgeries", icon: TrendingUp },
  { value: "100+", label: "Expert Surgeons", icon: UserCheck },
  { value: "4.8", label: "Patient Rating", icon: Star },
  { value: "50+", label: "Partner Hospitals", icon: Building2 },
];

const insurancePartners = [
  "Star Health", "HDFC Ergo", "ICICI Lombard", "Bajaj Allianz",
  "New India Assurance", "Max Bupa", "Care Health", "Niva Bupa",
];

const faqs = [
  { q: "Is the consultation really free?", a: "Yes, your initial consultation with our care coordinator is completely free. We'll understand your condition, recommend the right surgeon, and provide a transparent cost estimate — all at no charge." },
  { q: "Are laser surgeries safe?", a: "Absolutely. Laser surgeries are FDA-approved, minimally invasive procedures performed by experienced surgeons. They offer less pain, faster recovery, and minimal scarring compared to traditional methods." },
  { q: "Will my insurance cover the surgery?", a: "Most health insurance policies cover these procedures. Our dedicated insurance team will check your eligibility, handle pre-authorization, and ensure cashless processing at the hospital." },
  { q: "How long is the recovery?", a: "Most laser procedures are day-care surgeries. You can typically return to normal activities within 2-5 days, depending on the procedure. Our team provides a detailed recovery guide." },
  { q: "Is my information kept private?", a: "100%. We follow strict data privacy protocols. Your medical information is encrypted and shared only with your assigned surgeon. We understand the sensitive nature of these conditions." },
];

const pricingRows = [
  { name: "Laser Circumcision", mumbai: "₹30K – ₹42K", chd: "₹25K – ₹40K", ins: "Covered" },
  { name: "Laser Piles Surgery", mumbai: "₹38K – ₹80K", chd: "₹36K – ₹75K", ins: "Covered" },
  { name: "Laser Fissure", mumbai: "₹35K – ₹60K", chd: "₹30K – ₹55K", ins: "Covered" },
  { name: "Laser Fistula", mumbai: "₹40K – ₹85K", chd: "₹38K – ₹80K", ins: "Covered" },
  { name: "Abscess Drainage", mumbai: "₹20K – ₹40K", chd: "₹18K – ₹35K", ins: "Covered" },
  { name: "Pilonidal Sinus", mumbai: "₹35K – ₹70K", chd: "₹30K – ₹65K", ins: "Covered" },
];

/* ── HOMEPAGE COMPONENT ─────────────────────────────────── */

export default function Home() {
  return (
    <div className="pt-16 lg:pt-[72px]">

      {/* ─── HERO ──────────────────────────────────────── */}
      <section className="hero-mesh relative min-h-[600px] lg:min-h-[680px]">
        {/* Animated orbs */}
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        {/* Grid pattern */}
        <div className="hero-grid" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left — Text */}
            <div className="animate-slide-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
                <BadgeCheck size={16} className="text-green-400" />
                <span>Trusted by <strong className="text-white">10,000+</strong> patients across India</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                Expert Care for{" "}
                <span className="text-gradient">Sensitive Surgeries</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-white/70 mb-8 max-w-xl leading-relaxed">
                Advanced laser treatments for Piles, Circumcision, Fissure, Fistula & more — with transparent pricing, insurance support, and complete care coordination.
              </p>

              {/* Trust chips */}
              <div className="flex flex-wrap gap-3 mb-8">
                {["Free Consultation", "Insurance Support", "Day-care Surgery"].map((label) => (
                  <span key={label} className="flex items-center gap-1.5 bg-white/8 border border-white/10 text-white/80 px-3.5 py-2 rounded-xl text-sm font-medium backdrop-blur-sm">
                    <CheckCircle2 size={14} className="text-green-400 flex-shrink-0" />
                    {label}
                  </span>
                ))}
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2.5">
                  {["A","P","S","R","M"].map((l, i) => (
                    <div
                      key={l}
                      className="w-9 h-9 rounded-full border-2 border-white/30 flex items-center justify-center text-xs font-bold text-white/90 backdrop-blur-sm"
                      style={{ background: `hsla(${170 + i * 30}, 50%, 45%, 0.5)` }}
                    >
                      {l}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-[var(--color-gold)] fill-[var(--color-gold)]" />
                    ))}
                    <span className="text-white/90 text-sm font-semibold ml-1">4.8</span>
                  </div>
                  <p className="text-white/50 text-xs mt-0.5">Based on patient reviews</p>
                </div>
              </div>
            </div>

            {/* Right — Lead Form (Desktop) */}
            <div className="hidden lg:flex justify-end animate-slide-right">
              <InlineLeadForm />
            </div>
          </div>

          {/* Mobile Form */}
          <div className="mt-12 lg:hidden flex justify-center animate-fade-in-up">
            <InlineLeadForm />
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─────────────────────────────────── */}
      <section className="gradient-stats relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvc3ZnPg==')] opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={s.label} className="text-center group">
                <div className="w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center mx-auto mb-3 group-hover:bg-white/12 transition-colors">
                  <s.icon size={20} className="text-white/60" />
                </div>
                <div className="text-3xl lg:text-4xl font-extrabold text-white flex items-center justify-center gap-1.5 mb-1">
                  <AnimatedCounter value={s.value} duration={1600 + i * 200} />
                  {s.label === "Patient Rating" && <Star size={22} className="text-[var(--color-gold)] fill-[var(--color-gold)]" />}
                </div>
                <div className="text-sm text-white/50 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ──────────────────────────────── */}
      <section className="section bg-[var(--color-bg-warm)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="trust-badge mb-4 inline-flex">Simple 4-Step Process</span>
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mt-4 leading-tight">
              How <span className="text-[var(--color-primary)]">SURGISAATHI</span> Works
            </h2>
            <p className="text-[var(--color-text-muted)] mt-4 max-w-xl mx-auto text-base leading-relaxed">
              From your first call to full recovery — we handle everything so you can focus on healing.
            </p>
          </div>

          {/* Desktop timeline */}
          <div className="hidden lg:block relative">
            {/* Connector line */}
            <div className="absolute top-[38px] left-[12.5%] right-[12.5%] h-[3px] bg-gradient-to-r from-[var(--color-primary)]/20 via-[var(--color-accent)]/30 to-[var(--color-primary)]/20 rounded-full" />
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <div key={step.num} className="text-center relative group">
                  {/* Step circle */}
                  <div className="timeline-step-circle mx-auto mb-6">
                    <step.icon size={24} className="text-white" />
                  </div>
                  {/* Content */}
                  <div className="bg-white rounded-2xl p-6 border border-[var(--color-card-border)] group-hover:border-[var(--color-primary-light)] group-hover:shadow-lg transition-all">
                    <span className="text-xs font-bold text-[var(--color-accent)] tracking-wider">STEP {step.num}</span>
                    <h3 className="text-lg font-bold mb-2 mt-2">{step.title}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, i) => (
              <div key={step.num} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <step.icon size={20} className="text-white" />
                  </div>
                  {i < steps.length - 1 && <div className="w-[2px] flex-1 bg-gradient-to-b from-[var(--color-primary)]/30 to-transparent mt-2" />}
                </div>
                <div className="bg-white rounded-2xl p-5 border border-[var(--color-card-border)] flex-1 mb-2">
                  <span className="text-xs font-bold text-[var(--color-accent)] tracking-wider">STEP {step.num}</span>
                  <h3 className="text-base font-bold mb-1 mt-1">{step.title}</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SURGERY CATEGORIES ────────────────────────── */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="trust-badge mb-4 inline-flex">Specialized Procedures</span>
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mt-4 leading-tight">
              Surgeries We <span className="text-[var(--color-primary)]">Specialize</span> In
            </h2>
            <p className="text-[var(--color-text-muted)] mt-4 max-w-xl mx-auto text-base">
              Advanced laser treatments performed by India&apos;s top surgeons at accredited hospitals.
            </p>
          </div>

          {/* Bento-style grid: first 2 cards larger, rest smaller */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {surgeries.map((s, i) => (
              <Link
                href={`/surgeries/${s.slug}`}
                key={s.slug}
                className={`card-surgery group ${i < 2 ? "lg:row-span-1" : ""}`}
                style={{ "--accent-color": s.accentColor }}
              >
                <div className="p-6 lg:p-7">
                  {/* Tag */}
                  {s.tag && (
                    <span
                      className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full mb-4"
                      style={{ background: `${s.accentColor}14`, color: s.accentColor }}
                    >
                      <Sparkles size={10} /> {s.tag}
                    </span>
                  )}

                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                    style={{ background: `${s.accentColor}12` }}
                  >
                    <s.icon size={26} style={{ color: s.accentColor }} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {s.name}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] mb-5 leading-relaxed">{s.desc}</p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-xs text-[var(--color-text-muted)]">Starting from</span>
                      <span className="block text-lg font-bold text-[var(--color-primary)]">{s.price}</span>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-semibold text-[var(--color-accent)] group-hover:gap-2 transition-all">
                      Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY SURGISAATHI ───────────────────────────── */}
      <section className="section gradient-dark relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMS41IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+PC9zdmc+')] opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="trust-badge !bg-white/10 !text-white/80 !border-white/15 mb-4 inline-flex">Why Choose Us</span>
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mt-4 text-white leading-tight">
              Your Surgery, Our <span className="text-gradient">Responsibility</span>
            </h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto">
              Every aspect of your surgical journey — from consultation to recovery — is coordinated with care.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustPillars.map((p, i) => (
              <div
                key={p.title}
                className={`card-glass-dark group ${p.featured ? "sm:col-span-2 lg:col-span-1 ring-1 ring-white/10" : ""}`}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all group-hover:scale-110"
                  style={{ background: "rgba(20, 145, 155, 0.15)" }}
                >
                  <p.icon size={26} className="text-[var(--color-primary-light)]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{p.desc}</p>
                {p.featured && (
                  <div className="mt-4 flex items-center gap-2 text-[var(--color-accent)] text-sm font-semibold">
                    <BadgeCheck size={16} /> Our core promise
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SURGEON NETWORK ──────────────────────────── */}
      <section className="section bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="trust-badge mb-4 inline-flex">Our Surgeon Network</span>
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mt-4 leading-tight">
              Verified Surgeons Across <span className="text-[var(--color-primary)]">Mumbai &amp; Chandigarh</span>
            </h2>
            <p className="text-[var(--color-text-muted)] mt-4 max-w-2xl mx-auto leading-relaxed">
              We do not publish surgeon profiles publicly — instead we match each patient privately with the right surgeon for their case during the consultation. Every partner surgeon is credential-verified with the relevant State Medical Council and operates at NABH-aligned hospitals.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {[
              { icon: UserCheck, title: "Credential-verified", desc: "MBBS, MS / MCh registration confirmed with State Medical Council." },
              { icon: Stethoscope, title: "Procedure-specialised", desc: "Matched to your condition — proctology, laser surgery, general surgery." },
              { icon: Award, title: "Accredited hospitals", desc: "NABH-aligned facilities with current infection-control standards." },
            ].map((item) => (
              <div key={item.title} className="card text-center group">
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary)]/8 flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                  <item.icon size={24} className="text-[var(--color-primary)] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-base mb-1">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/doctors" className="text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] inline-flex items-center gap-1 transition-colors">
              How we vet surgeons <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── COST TRANSPARENCY ─────────────────────────── */}
      <section className="section bg-[var(--color-bg-warm)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="trust-badge mb-4 inline-flex">Transparent Pricing</span>
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mt-4 leading-tight">
              Know Your Surgery Cost <span className="text-[var(--color-primary)]">Upfront</span>
            </h2>
            <p className="text-[var(--color-text-muted)] mt-4">No hidden charges. All-inclusive packages.</p>
          </div>

          <div className="relative">
            {/* Callout */}
            <div className="hidden lg:flex absolute -top-4 right-0 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 text-[var(--color-accent)] text-sm font-semibold px-5 py-2.5 rounded-full items-center gap-2 z-10">
              <IndianRupee size={14} /> Most procedures covered under cashless insurance
            </div>

            <div className="table-premium bg-white">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left">Surgery</th>
                      <th className="text-left">Mumbai</th>
                      <th className="text-left">Chandigarh</th>
                      <th className="text-left">Insurance</th>
                      <th className="text-right"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingRows.map((r) => (
                      <tr key={r.name}>
                        <td className="font-semibold text-[var(--color-text-heading)]">{r.name}</td>
                        <td className="text-[var(--color-text-body)]">{r.mumbai}</td>
                        <td className="text-[var(--color-text-body)]">{r.chd}</td>
                        <td>
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-[var(--color-success)] bg-[var(--color-success)]/10 px-3 py-1.5 rounded-full">
                            <CheckCircle2 size={12} /> {r.ins}
                          </span>
                        </td>
                        <td className="text-right">
                          <Link href="/book-consultation" className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors">
                            Get Exact Cost <ArrowRight size={14} />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRIVACY FIRST ─────────────────────────────── */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary)]/8 flex items-center justify-center mx-auto mb-6">
            <Lock size={28} className="text-[var(--color-primary)]" />
          </div>
          <span className="trust-badge mb-4 inline-flex">Privacy First</span>
          <h2 className="text-3xl lg:text-[2.75rem] font-bold mt-4 leading-tight">Your Story Stays Yours</h2>
          <p className="text-[var(--color-text-muted)] mt-5 leading-relaxed max-w-2xl mx-auto">
            We do not publish patient testimonials by default. Conditions like piles, fistula and circumcision are personal, and we share patient experiences only with explicit, withdrawable consent — never identifying details. If you would like to hear from a past patient before deciding, ask during your free consultation and we will see whether someone is willing to talk on their terms.
          </p>
          <div className="mt-6">
            <Link href="/testimonials" className="text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] inline-flex items-center gap-1 transition-colors">
              How we handle patient stories <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── INSURANCE PARTNERS ────────────────────────── */}
      <section className="py-14 bg-[var(--color-bg-section)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-[var(--color-text-muted)] mb-8 uppercase tracking-widest">
            Insurance Partners
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {insurancePartners.map((p) => (
              <div key={p} className="bg-white px-6 py-3.5 rounded-xl text-sm font-semibold text-[var(--color-text-body)] shadow-sm border border-[var(--color-card-border)] hover:border-[var(--color-primary-light)] hover:shadow-md transition-all">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ───────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="trust-badge mb-4 inline-flex">Got Questions?</span>
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mt-4 leading-tight">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={f.q} className="faq-item group">
                <summary>
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-bold text-[var(--color-primary)]/60 w-6">{String(i + 1).padStart(2, "0")}</span>
                    <span>{f.q}</span>
                  </span>
                  <ChevronRight size={18} className="faq-chevron text-[var(--color-text-muted)]" />
                </summary>
                <div className="faq-answer">
                  <p className="text-sm text-[var(--color-text-body)] leading-relaxed pl-9">{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─────────────────────────────────── */}
      <section className="hero-mesh relative overflow-hidden py-24 lg:py-28">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-grid" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Testimonial snippet */}
          <div className="inline-flex items-center gap-2 bg-white/8 border border-white/10 text-white/70 px-4 py-2 rounded-full text-sm mb-8 backdrop-blur-sm">
            <Star size={14} className="text-[var(--color-gold)] fill-[var(--color-gold)]" />
            <span>&quot;Best decision for my health&quot; — <em className="text-white/90 not-italic font-medium">Verified patient</em></span>
          </div>

          <h2 className="text-3xl lg:text-[2.75rem] font-extrabold text-white mb-5 leading-tight">
            Take the First Step Towards <span className="text-gradient">Relief</span>
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Book a free, private consultation with our care experts. No obligation, no judgment — just trusted guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-consultation" className="btn-primary !bg-gradient-to-r !from-[var(--color-accent)] !to-[var(--color-accent-hover)] !text-white !text-base !py-4 !px-10 animate-pulse-glow">
              Book Free Consultation <ArrowRight size={18} />
            </Link>
            <a href="tel:+917011473737" className="btn-secondary !border-white/20 !text-white hover:!bg-white/10 !text-base !py-4 !px-10">
              <Phone size={18} /> Call Now
            </a>
          </div>
          <p className="text-white/40 text-sm mt-8 flex items-center justify-center gap-2">
            <Shield size={14} className="text-white/30" /> Your information is 100% confidential
          </p>
        </div>
      </section>
    </div>
  );
}
