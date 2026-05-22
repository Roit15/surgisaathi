import Link from "next/link";
import Image from "next/image";
import {
  Shield, Heart, Clock, IndianRupee, ChevronRight,
  UserCheck, Building2, Stethoscope, CheckCircle2, ArrowRight,
  Phone, Zap, Award, Users, HeartPulse, Sparkles,
  CircleDot, Star, Lock, Scissors, Activity, Flame, Target, Droplets,
  BadgeCheck, TrendingUp, Smile, CalendarCheck, ChevronDown
} from "lucide-react";
import InlineLeadForm from "./components/InlineLeadForm";
import AnimatedCounter from "./components/AnimatedCounter";

/* ── STATIC DATA ─────────────────────────────────────────── */

const surgeries = [
  { name: "Piles (Haemorrhoids)", slug: "piles", icon: Activity, accentColor: "#F97316", price: "₹36,000", desc: "Painless laser procedure. Most patients go home the same day.", tag: "High Demand" },
  { name: "Circumcision", slug: "circumcision", icon: Scissors, accentColor: "#3B82F6", price: "₹25,000", desc: "Safe, precise laser circumcision with same-day discharge.", tag: "Most Popular" },
  { name: "Fissure-in-Ano", slug: "fissure", icon: Flame, accentColor: "#10B981", price: "₹35,000", desc: "Rapid relief from chronic anal fissure with laser treatment.", tag: null },
  { name: "Fistula-in-Ano", slug: "fistula", icon: Target, accentColor: "#8B5CF6", price: "₹40,000", desc: "Minimal recurrence with advanced laser fistula surgery.", tag: null },
  { name: "Pilonidal Sinus", slug: "pilonidal-sinus", icon: CircleDot, accentColor: "#EC4899", price: "₹35,000", desc: "Laser pilonidal sinus. Lower recurrence than open surgery.", tag: null },
  { name: "Abscess Drainage", slug: "abscess", icon: Droplets, accentColor: "#F59E0B", price: "₹20,000", desc: "Quick drainage with minimal discomfort and fast healing.", tag: null },
];

const steps = [
  { num: "01", title: "Tell Us Your Concern", desc: "Share your condition privately. No judgment, no pressure — just a caring conversation.", icon: HeartPulse },
  { num: "02", title: "Meet Your Care Coordinator", desc: "We match you with the right surgeon based on your condition, city, and insurance.", icon: UserCheck },
  { num: "03", title: "We Handle Everything", desc: "Insurance pre-auth, hospital booking, pre-op tests — all coordinated for you.", icon: CalendarCheck },
  { num: "04", title: "Surgery & Recovery", desc: "Day-care laser surgery. Home the same day. Full post-op support from our team.", icon: Smile },
];

const trustPillars = [
  { icon: Shield, title: "Verified Surgeons Only", desc: "Every surgeon is credential-checked with the State Medical Council before we partner with them.", color: "#0A7A7E" },
  { icon: IndianRupee, title: "No Hidden Costs", desc: "We give you a complete, all-inclusive cost breakdown before you commit to anything.", color: "#10B981" },
  { icon: Heart, title: "We Stay With You", desc: "From your first call to full recovery, a dedicated coordinator is always reachable.", color: "#F07B54" },
  { icon: Zap, title: "Advanced Laser Care", desc: "Minimally invasive. Less pain. Faster return to work. No large incisions.", color: "#8B5CF6" },
  { icon: Award, title: "NABH-Aligned Hospitals", desc: "We only partner with accredited facilities that meet strict quality benchmarks.", color: "#F59E0B" },
  { icon: Users, title: "Insurance & EMI Help", desc: "Cashless insurance at network hospitals. 0% EMI options for those without insurance.", color: "#EC4899" },
];

const stats = [
  { value: "10,000", suffix: "+", label: "Surgeries Done", icon: TrendingUp },
  { value: "100", suffix: "+", label: "Expert Surgeons", icon: UserCheck },
  { value: "4.8", suffix: "", label: "Patient Rating", icon: Star },
  { value: "50", suffix: "+", label: "Partner Hospitals", icon: Building2 },
];

const insurancePartners = [
  "Star Health", "HDFC Ergo", "ICICI Lombard", "Bajaj Allianz",
  "New India Assurance", "Max Bupa", "Care Health", "Niva Bupa",
];

const faqs = [
  { q: "Is the consultation really free?", a: "Yes — completely. Your first call with our care coordinator costs nothing. We'll listen, explain your options, and give you a transparent estimate with zero obligation." },
  { q: "Is laser surgery safe? What about recovery?", a: "Laser procedures are FDA-approved and performed by experienced surgeons. Most patients experience significantly less pain than with traditional surgery and can return to normal activities in 2–5 days." },
  { q: "Will my insurance cover this?", a: "Most standard health policies cover these procedures. Our team will verify your benefits, handle pre-authorization, and arrange cashless treatment at partner hospitals." },
  { q: "I'm embarrassed about my condition. Is this really private?", a: "Completely. We understand these are sensitive conditions. Your information is encrypted, shared only with your assigned surgeon, and we never contact you on shared numbers or email addresses without your consent." },
  { q: "What cities do you currently serve?", a: "We currently have specialist networks in Mumbai and Chandigarh, with partner hospitals across both cities. Call us to confirm availability for your specific location." },
];

const pricingRows = [
  { name: "Laser Piles Surgery",   mumbai: "₹38K – ₹80K", chd: "₹36K – ₹75K" },
  { name: "Laser Circumcision",    mumbai: "₹30K – ₹42K", chd: "₹25K – ₹40K" },
  { name: "Laser Fissure",         mumbai: "₹35K – ₹60K", chd: "₹30K – ₹55K" },
  { name: "Laser Fistula",         mumbai: "₹40K – ₹85K", chd: "₹38K – ₹80K" },
  { name: "Pilonidal Sinus",       mumbai: "₹35K – ₹70K", chd: "₹30K – ₹65K" },
  { name: "Abscess Drainage",      mumbai: "₹20K – ₹40K", chd: "₹18K – ₹35K" },
];

const patientWords = [
  { quote: "I was nervous and embarrassed. My coordinator made me feel completely at ease. The surgery was over in an hour and I was home by evening.", name: "Priya M.", city: "Mumbai", condition: "Piles surgery" },
  { quote: "Transparent pricing, no pressure, and my insurance handled cashlessly. This is how healthcare should feel.", name: "Sandeep K.", city: "Chandigarh", condition: "Fissure treatment" },
  { quote: "I had been delaying this for 2 years due to fear. Wished I had called SurgiSaathi sooner. Recovery was so much easier than I expected.", name: "Amit R.", city: "Mumbai", condition: "Circumcision" },
];

/* ── HOMEPAGE ─────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="pt-16 lg:pt-[72px]">

      {/* ══════════════════════════════════
          HERO — SPLIT LAYOUT
          Left: dark teal panel with text
          Right: warm doctor photo, properly framed
          ══════════════════════════════════ */}
      <section className="relative overflow-hidden min-h-[600px] lg:min-h-[680px]">
        <div className="flex flex-col lg:flex-row min-h-[600px] lg:min-h-[680px]">

          {/* LEFT — Dark teal text panel */}
          <div className="hero-panel flex-1 relative flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-16 lg:py-0 lg:max-w-[55%]">
            <div className="relative z-10 max-w-xl">
              {/* Trust pill */}
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in-up">
                <BadgeCheck size={15} className="text-emerald-400" />
                <span>Trusted by <strong className="text-white">10,000+</strong> patients · India</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.1] mb-5 tracking-tight animate-slide-left">
                Sensitive Surgeries,{" "}
                <span className="text-gradient">Handled With Care</span>
              </h1>

              <p className="text-lg text-white/70 mb-8 leading-relaxed animate-fade-in-up delay-200">
                Laser treatment for Piles, Circumcision, Fissure, Fistula & more. Verified surgeons. Insurance support. Full care coordination — so you can focus on getting better.
              </p>

              {/* Trust chips */}
              <div className="flex flex-wrap gap-3 mb-8 animate-fade-in-up delay-300">
                {[
                  { label: "Free Consultation", icon: HeartPulse },
                  { label: "Insurance Covered", icon: Shield },
                  { label: "Home Same Day", icon: Smile },
                ].map(({ label, icon: Icon }) => (
                  <span key={label} className="flex items-center gap-1.5 bg-white/10 border border-white/15 text-white/85 px-4 py-2 rounded-xl text-sm font-semibold">
                    <Icon size={13} className="text-emerald-400" />
                    {label}
                  </span>
                ))}
              </div>

              {/* Stars + avatars */}
              <div className="flex items-center gap-4 animate-fade-in-up delay-400">
                <div className="flex -space-x-2.5">
                  {["P","S","R","A","M"].map((l, i) => (
                    <div
                      key={l}
                      className="w-9 h-9 rounded-full border-2 border-white/30 flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: `hsla(${165 + i * 25}, 45%, 42%, 0.75)` }}
                    >
                      {l}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />)}
                    <span className="text-white font-bold text-sm ml-1.5">4.8 / 5</span>
                  </div>
                  <p className="text-white/45 text-xs mt-0.5">From verified patient reviews</p>
                </div>
              </div>

              {/* Desktop CTA */}
              <div className="hidden lg:flex gap-4 mt-10 animate-fade-in-up delay-400">
                <Link href="/book-consultation" className="btn-primary animate-pulse-glow">
                  Talk to a Care Expert — Free <ArrowRight size={16} />
                </Link>
                <a href="tel:+917011473737" className="btn-secondary !border-white/25 !text-white hover:!bg-white hover:!text-[var(--color-primary)]">
                  <Phone size={16} /> Call Us
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — Photo + Form overlay */}
          <div className="relative flex-1 hidden lg:block min-h-[680px]">
            {/* Photo fills the right panel */}
            <Image
              src="/images/hero/hero-doctor.png"
              alt="Smiling SurgiSaathi doctor ready to help you"
              fill
              priority
              className="object-cover object-[center_15%]"
              sizes="45vw"
            />
            {/* Fade left edge to blend with dark panel */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#044042]/60 via-[#044042]/10 to-transparent" />
            {/* Fade bottom slightly */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />

            {/* Floating form card */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-8">
              <div className="w-[340px]">
                <InlineLeadForm />
              </div>
            </div>
          </div>

        </div>

        {/* Mobile form — below hero panel */}
        <div className="lg:hidden hero-panel px-5 pb-10">
          <div className="max-w-md mx-auto">
            <InlineLeadForm />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          STATS BAR
          ══════════════════════════════════ */}
      <section className="gradient-stats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {stats.map((s, i) => (
              <div key={s.label} className="text-center group">
                <div className="w-11 h-11 rounded-xl bg-white/8 flex items-center justify-center mx-auto mb-3 group-hover:bg-white/14 transition-colors">
                  <s.icon size={20} className="text-white/60" />
                </div>
                <div className="text-3xl lg:text-4xl font-extrabold text-white stat-value flex items-center justify-center gap-1 mb-1">
                  <AnimatedCounter value={`${s.value}${s.suffix}`} duration={1400 + i * 200} />
                  {s.label === "Patient Rating" && <Star size={20} className="text-yellow-400 fill-yellow-400" />}
                </div>
                <div className="text-sm text-white/50 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          HOW IT WORKS
          ══════════════════════════════════ */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="trust-badge mb-5">Simple 4-Step Journey</span>
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mt-4 leading-tight">
              We Make It <span className="text-gradient-teal">Effortless</span> For You
            </h2>
            <p className="text-[var(--color-text-muted)] mt-4 max-w-lg mx-auto">
              From your first call to full recovery — we coordinate everything. You just need to show up.
            </p>
          </div>

          {/* Desktop horizontal timeline */}
          <div className="hidden lg:block relative">
            <div className="absolute top-7 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-transparent via-[var(--color-primary)]/20 to-transparent" />
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <div key={step.num} className="text-center">
                  <div className="timeline-step-circle mx-auto mb-6">
                    <step.icon size={22} className="text-white" />
                  </div>
                  <div className="card-warm text-left group">
                    <span className="text-xs font-bold text-[var(--color-accent)] tracking-widest mb-2 block">STEP {step.num}</span>
                    <h3 className="font-bold text-base text-[var(--color-text-heading)] mb-2">{step.title}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="lg:hidden space-y-5">
            {steps.map((step, i) => (
              <div key={step.num} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="timeline-step-circle w-12 h-12">
                    <step.icon size={18} className="text-white" />
                  </div>
                  {i < steps.length - 1 && <div className="w-[2px] flex-1 bg-gradient-to-b from-[var(--color-primary)]/25 to-transparent mt-2" />}
                </div>
                <div className="card-warm flex-1 mb-2">
                  <span className="text-xs font-bold text-[var(--color-accent)] tracking-widest mb-1 block">STEP {step.num}</span>
                  <h3 className="font-bold text-sm text-[var(--color-text-heading)] mb-1">{step.title}</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          WHAT WE TREAT — Surgery Cards
          ══════════════════════════════════ */}
      <section className="section bg-[var(--color-bg-warm)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="trust-badge mb-5">Specialised Procedures</span>
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mt-4 leading-tight">
              Conditions We <span className="text-gradient-teal">Treat</span>
            </h2>
            <p className="text-[var(--color-text-muted)] mt-4 max-w-lg mx-auto">
              All procedures performed using advanced laser technology by verified specialist surgeons.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {surgeries.map((s) => (
              <Link
                href={`/surgeries/${s.slug}`}
                key={s.slug}
                className="card-surgery group"
                style={{ "--accent-color": s.accentColor }}
              >
                <div className="p-6 lg:p-7">
                  {s.tag && (
                    <span
                      className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-full mb-4"
                      style={{ background: `${s.accentColor}15`, color: s.accentColor }}
                    >
                      <Sparkles size={10} /> {s.tag}
                    </span>
                  )}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                    style={{ background: `${s.accentColor}12` }}
                  >
                    <s.icon size={26} style={{ color: s.accentColor }} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors">{s.name}</h3>
                  <p className="text-sm text-[var(--color-text-muted)] mb-5 leading-relaxed">{s.desc}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-[var(--color-warm-200)]">
                    <div>
                      <span className="text-xs text-[var(--color-text-muted)]">Starting at</span>
                      <span className="block text-lg font-bold text-[var(--color-primary)]">{s.price}</span>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-semibold text-[var(--color-accent)] group-hover:gap-2 transition-all">
                      Know more <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          CONSULTATION BANNER — Photo + CTA
          ══════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left: warm recovery photo */}
          <div className="relative h-64 lg:h-auto lg:flex-1">
            <Image
              src="/images/hero/hero-recovery.png"
              alt="Patient smiling after successful recovery at SurgiSaathi partner hospital"
              fill
              className="object-cover object-center"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#FDF8F5]/20" />
            <div className="absolute inset-0 lg:bg-gradient-to-r lg:from-transparent lg:to-[#FDF8F5]" />
          </div>

          {/* Right: CTA text */}
          <div className="bg-[var(--color-bg-warm)] flex-1 px-8 lg:px-14 py-14 lg:py-20 flex flex-col justify-center max-w-xl">
            <span className="trust-badge mb-6 self-start">Free & Confidential</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-text-heading)] mb-5 leading-tight">
              Been putting this off?<br />
              <span className="text-[var(--color-primary)]">We understand.</span>
            </h2>
            <p className="text-[var(--color-text-body)] leading-relaxed mb-8">
              Conditions like piles, fistula, and fissure are often painful and embarrassing to discuss. Our care coordinators are trained to make this conversation easy and judgment-free. You&apos;ll feel heard.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/book-consultation" className="btn-primary">
                Start a Confidential Chat <ArrowRight size={16} />
              </Link>
              <a href="tel:+917011473737" className="btn-secondary">
                <Phone size={16} /> +91 70114 73737
              </a>
            </div>
            <p className="text-xs text-[var(--color-text-muted)] mt-5 flex items-center gap-1.5">
              <Lock size={12} /> Your privacy is guaranteed. We never share your details.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          WHY SURGISAATHI — dark trust section
          ══════════════════════════════════ */}
      <section className="section gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(15,165,171,0.15)_0%,transparent_60%)]" />
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <span className="trust-badge !bg-white/10 !text-white/80 !border-white/15 mb-5">Why Patients Choose Us</span>
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mt-4 text-white leading-tight">
              Your Surgery.<br className="sm:hidden" /> Our <span className="text-gradient">Responsibility.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {trustPillars.map((p) => (
              <div key={p.title} className="card-glass-dark group">
                <div
                  className="w-13 h-13 w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-105"
                  style={{ background: `${p.color}20` }}
                >
                  <p.icon size={24} style={{ color: p.color }} />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          PATIENT WORDS
          ══════════════════════════════════ */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="trust-badge mb-5">Patient Stories</span>
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mt-4 leading-tight">
              Real People. <span className="text-gradient-teal">Real Relief.</span>
            </h2>
            <p className="text-[var(--color-text-muted)] mt-4 max-w-lg mx-auto text-sm">
              Shared with explicit consent. Names are real; identifying details withheld by request.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {patientWords.map((t) => (
              <div key={t.name} className="card group relative">
                {/* Quote mark */}
                <div className="absolute top-5 right-6 text-6xl leading-none text-[var(--color-primary)]/8 font-serif select-none">&ldquo;</div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-[var(--color-text-body)] text-sm leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-warm-200)]">
                  <div className="w-9 h-9 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-sm font-bold text-[var(--color-primary)]">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[var(--color-text-heading)]">{t.name}</div>
                    <div className="text-xs text-[var(--color-text-muted)]">{t.condition} · {t.city}</div>
                  </div>
                  <BadgeCheck size={16} className="text-[var(--color-success)] ml-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SURGEON NETWORK
          ══════════════════════════════════ */}
      <section className="section bg-[var(--color-bg-warm)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="trust-badge mb-5">Our Surgeon Network</span>
          <h2 className="text-3xl lg:text-[2.75rem] font-bold mt-4 leading-tight mb-6">
            Verified Surgeons in <span className="text-[var(--color-primary)]">Mumbai & Chandigarh</span>
          </h2>
          <p className="text-[var(--color-text-body)] max-w-2xl mx-auto leading-relaxed mb-12">
            We don&apos;t publish surgeon profiles publicly — we match each patient privately based on their specific condition and insurance. Every surgeon in our network is credential-verified with their State Medical Council.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {[
              { icon: UserCheck, title: "Council Verified", desc: "MBBS + MS/MCh confirmed with State Medical Councils." },
              { icon: Stethoscope, title: "Condition-matched", desc: "We match you to a specialist — not a generalist." },
              { icon: Award, title: "NABH Hospitals", desc: "All surgeries at accredited, infection-safe facilities." },
            ].map((item) => (
              <div key={item.title} className="card text-center">
                <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary)]/8 flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                  <item.icon size={22} className="text-[var(--color-primary)]" />
                </div>
                <h3 className="font-bold text-sm mb-1 text-[var(--color-text-heading)]">{item.title}</h3>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/doctors" className="text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] inline-flex items-center gap-1.5 transition-colors">
            How we vet our surgeons <ChevronRight size={14} />
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════
          COST TRANSPARENCY
          ══════════════════════════════════ */}
      <section className="section bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="trust-badge mb-5">No Surprises</span>
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mt-4 leading-tight">
              Upfront Pricing. <span className="text-gradient-teal">Always.</span>
            </h2>
            <p className="text-[var(--color-text-muted)] mt-4 max-w-md mx-auto">
              Estimated cost ranges. Most procedures are covered by standard health insurance.
            </p>
          </div>

          {/* Insurance callout */}
          <div className="flex items-center gap-3 bg-[var(--color-success)]/8 border border-[var(--color-success)]/20 rounded-2xl px-6 py-4 mb-6 max-w-2xl mx-auto">
            <CheckCircle2 size={20} className="text-[var(--color-success)] flex-shrink-0" />
            <p className="text-sm font-medium text-[var(--color-text-body)]">
              <strong className="text-[var(--color-text-heading)]">Insurance covered</strong> — All procedures on this list are covered under most health policies. Our team handles the paperwork.
            </p>
          </div>

          <div className="table-premium">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left">Surgery</th>
                    <th className="text-left">Mumbai</th>
                    <th className="text-left">Chandigarh</th>
                    <th className="text-right"></th>
                  </tr>
                </thead>
                <tbody>
                  {pricingRows.map((r) => (
                    <tr key={r.name}>
                      <td className="font-semibold text-[var(--color-text-heading)]">{r.name}</td>
                      <td className="text-[var(--color-text-body)]">{r.mumbai}</td>
                      <td className="text-[var(--color-text-body)]">{r.chd}</td>
                      <td className="text-right">
                        <Link href="/book-consultation" className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors">
                          Get exact quote <ArrowRight size={12} />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          INSURANCE PARTNERS
          ══════════════════════════════════ */}
      <section className="py-14 bg-[var(--color-bg-warm)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold text-[var(--color-text-muted)] mb-8 uppercase tracking-[0.15em]">
            Accepted Insurance Partners
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {insurancePartners.map((p) => (
              <div key={p} className="bg-white px-5 py-3 rounded-xl text-sm font-semibold text-[var(--color-text-body)] shadow-sm border border-[var(--color-card-border)] hover:border-[var(--color-primary-light)] hover:shadow-md transition-all">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          PRIVACY STATEMENT
          ══════════════════════════════════ */}
      <section className="section bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary)]/8 flex items-center justify-center mx-auto mb-6">
            <Lock size={24} className="text-[var(--color-primary)]" />
          </div>
          <span className="trust-badge mb-5">Your Privacy Matters</span>
          <h2 className="text-3xl font-bold mt-4 leading-tight">Your Story Stays Yours</h2>
          <p className="text-[var(--color-text-body)] mt-5 leading-relaxed">
            We do not publish patient testimonials without explicit, withdrawable consent. Conditions like piles, fissure, and circumcision are deeply personal. We treat them that way. Your data is encrypted, and we will never contact you through shared numbers or emails without your permission.
          </p>
          <Link href="/testimonials" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors">
            How we handle patient stories <ChevronRight size={14} />
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════
          FAQ
          ══════════════════════════════════ */}
      <section className="section bg-[var(--color-bg-warm)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="trust-badge mb-5">Common Questions</span>
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mt-4 leading-tight">Things People Ask Us</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={f.q} className="faq-item group">
                <summary>
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-bold text-[var(--color-primary)]/50 w-6 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-sm sm:text-base">{f.q}</span>
                  </span>
                  <ChevronRight size={16} className="faq-chevron text-[var(--color-text-muted)] flex-shrink-0" />
                </summary>
                <div className="faq-answer">
                  <p className="text-sm text-[var(--color-text-body)] leading-relaxed pl-9">{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          FINAL CTA — Team photo background
          ══════════════════════════════════ */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <Image
          src="/images/hero/hero-team.png"
          alt="SurgiSaathi specialist surgical team"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#033436]/90 via-[#044042]/88 to-[#033436]/95" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-accent)]/8 via-transparent to-[var(--color-primary)]/15" />

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/80 px-5 py-2.5 rounded-full text-sm mb-8 backdrop-blur-sm">
            {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />)}
            <span className="ml-1">&quot;Best healthcare decision I made&quot; — <em className="text-white not-italic font-semibold">Verified patient</em></span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-5 leading-tight">
            You Deserve Care <span className="text-gradient">Without Compromise</span>
          </h2>
          <p className="text-white/65 text-lg mb-10 leading-relaxed">
            Talk to a real coordinator in minutes. Privately. No judgment. We&apos;ll handle the rest.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-consultation" className="btn-primary animate-pulse-glow !text-base !py-4 !px-10">
              Talk to a Care Expert — It&apos;s Free <ArrowRight size={18} />
            </Link>
            <a href="tel:+917011473737" className="btn-secondary !border-white/25 !text-white hover:!bg-white/10 !text-base !py-4 !px-10">
              <Phone size={18} /> +91 70114 73737
            </a>
          </div>

          <p className="text-white/35 text-sm mt-8 flex items-center justify-center gap-2">
            <Shield size={13} className="text-white/30" /> 100% private · No spam · No pressure
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════
          STICKY MOBILE CTA
          ══════════════════════════════════ */}
      <div className="sticky-cta bg-white border-t border-[var(--color-card-border)] safe-area-bottom">
        <Link href="/book-consultation" className="btn-primary flex-1 justify-center !text-sm !py-3.5">
          Free Consultation <ArrowRight size={15} />
        </Link>
        <a href="tel:+917011473737" className="btn-secondary flex-1 justify-center !text-sm !py-3.5">
          <Phone size={15} /> Call
        </a>
      </div>
    </div>
  );
}
