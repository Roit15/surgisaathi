import Link from "next/link";
import Image from "next/image";
import {
  Shield, Heart, Clock, IndianRupee, ChevronRight,
  UserCheck, Building2, Stethoscope, CheckCircle2, ArrowRight,
  Phone, Zap, Award, Users, HeartPulse, Sparkles,
  CircleDot, Star, Lock, Scissors, Activity, Flame, Target, Droplets,
  BadgeCheck, TrendingUp, Smile, CalendarCheck
} from "lucide-react";
import InlineLeadForm from "./components/InlineLeadForm";
import AnimatedCounter from "./components/AnimatedCounter";

/* ═══════════════════════════════════════════════════
   STATIC DATA
═══════════════════════════════════════════════════ */

const treatments = [
  {
    name: "Piles (Haemorrhoids)",
    slug: "piles",
    icon: Activity,
    accent: "#EA580C",
    price: "₹36,000",
    desc: "Painless laser treatment. Most patients go home the same day with minimal discomfort.",
    tag: "High Demand",
  },
  {
    name: "Circumcision",
    slug: "circumcision",
    icon: Scissors,
    accent: "#0891B2",
    price: "₹25,000",
    desc: "Safe, precise laser circumcision by specialist surgeons. Same-day discharge.",
    tag: "Most Popular",
  },
  {
    name: "Fissure-in-Ano",
    slug: "fissure",
    icon: Flame,
    accent: "#059669",
    price: "₹35,000",
    desc: "Fast relief from chronic anal fissure. Minimally invasive, rapid recovery.",
    tag: null,
  },
  {
    name: "Fistula-in-Ano",
    slug: "fistula",
    icon: Target,
    accent: "#7C3AED",
    price: "₹40,000",
    desc: "Advanced laser fistula surgery. Significantly lower recurrence than open surgery.",
    tag: null,
  },
  {
    name: "Pilonidal Sinus",
    slug: "pilonidal-sinus",
    icon: CircleDot,
    accent: "#DB2777",
    price: "₹35,000",
    desc: "Laser pilonidal sinus removal with minimal scarring and faster healing.",
    tag: null,
  },
  {
    name: "Abscess Drainage",
    slug: "abscess",
    icon: Droplets,
    accent: "#D97706",
    price: "₹20,000",
    desc: "Quick, clean drainage with minimal post-procedure discomfort.",
    tag: null,
  },
];

const steps = [
  {
    num: "01",
    title: "Tell Us Your Concern",
    desc: "Share your condition privately. No judgment, no rush — just a caring conversation with our coordinator.",
    icon: HeartPulse,
  },
  {
    num: "02",
    title: "Meet Your Surgeon Match",
    desc: "We find the right specialist for your exact condition, location, and insurance — at no cost to you.",
    icon: UserCheck,
  },
  {
    num: "03",
    title: "We Handle Everything",
    desc: "Insurance pre-authorization, hospital booking, pre-op tests — all fully coordinated by our team.",
    icon: CalendarCheck,
  },
  {
    num: "04",
    title: "Surgery & Full Recovery",
    desc: "Day-care laser procedure. Home the same day. Dedicated support until you're fully recovered.",
    icon: Smile,
  },
];

const trustPillars = [
  { icon: Shield,       title: "Verified Surgeons",          desc: "Credential-checked with State Medical Councils. 10+ years experience minimum.",     color: "#0891B2" },
  { icon: IndianRupee,  title: "Zero Hidden Costs",          desc: "Complete all-inclusive cost breakdown before you commit. No surprises.",              color: "#059669" },
  { icon: Heart,        title: "Care from Start to End",     desc: "Your coordinator is reachable from first call through full recovery.",               color: "#EA580C" },
  { icon: Zap,          title: "Advanced Laser Technology",  desc: "Less pain, less scarring, faster return to daily life than traditional surgery.",     color: "#7C3AED" },
  { icon: Award,        title: "NABH-Accredited Hospitals",  desc: "All partner hospitals meet strict quality and infection-control standards.",          color: "#D97706" },
  { icon: Users,        title: "Insurance & EMI Support",    desc: "Cashless processing at network hospitals. 0% EMI for those without coverage.",       color: "#DB2777" },
];

const stats = [
  { value: "10,000", suffix: "+", label: "Surgeries Completed", icon: TrendingUp },
  { value: "100",    suffix: "+", label: "Expert Surgeons",     icon: UserCheck   },
  { value: "4.8",    suffix: "",  label: "Patient Rating",      icon: Star        },
  { value: "50",     suffix: "+", label: "Partner Hospitals",   icon: Building2   },
];

const testimonials = [
  {
    quote: "I kept delaying this for over a year out of embarrassment. My SurgiSaathi coordinator made me feel completely at ease. Surgery was done in under an hour, and I was home that evening.",
    name: "Priya M.",
    city: "Mumbai",
    procedure: "Laser Piles Surgery",
  },
  {
    quote: "Transparent pricing from day one. No hidden charges, and my insurance was handled cashlessly without any paperwork from my side. Exactly how healthcare should work.",
    name: "Sandeep K.",
    city: "Chandigarh",
    procedure: "Laser Fissure Treatment",
  },
  {
    quote: "I had been putting off circumcision surgery for two years due to fear. Recovery was so much easier than I'd imagined. The whole experience was private and professional.",
    name: "Amit R.",
    city: "Mumbai",
    procedure: "Laser Circumcision",
  },
];

const insurers = [
  "Star Health", "HDFC Ergo", "ICICI Lombard", "Bajaj Allianz",
  "New India Assurance", "Max Bupa", "Care Health", "Niva Bupa",
];

const faqs = [
  {
    q: "Is the consultation really free — no strings attached?",
    a: "Yes, completely free. Our care coordinator will understand your condition, explain your options, and give you a transparent cost estimate. No pressure, no obligation.",
  },
  {
    q: "Are laser surgeries safe? What is the recovery like?",
    a: "Laser procedures are FDA-approved and performed by experienced surgeons. They involve less pain, smaller incisions, and faster recovery than traditional surgery. Most patients return to normal activities within 2–5 days.",
  },
  {
    q: "Will my insurance cover this surgery?",
    a: "Most standard health policies cover all these procedures. Our team verifies your benefits, handles pre-authorization, and arranges cashless treatment at partner hospitals — no paperwork from your side.",
  },
  {
    q: "My condition is embarrassing. Will you keep this private?",
    a: "Absolutely. These conditions are personal, and we treat them that way. Your information is encrypted and shared only with your assigned surgeon. We never contact you through shared channels without explicit consent.",
  },
  {
    q: "Which cities do you serve?",
    a: "We currently have specialist surgeon networks in Mumbai and Chandigarh with multiple accredited partner hospitals in each city. Call us to confirm availability for your specific location.",
  },
];

const pricingRows = [
  { name: "Laser Piles Surgery",  mumbai: "₹38K – ₹80K", chd: "₹36K – ₹75K" },
  { name: "Laser Circumcision",   mumbai: "₹30K – ₹42K", chd: "₹25K – ₹40K" },
  { name: "Laser Fissure",        mumbai: "₹35K – ₹60K", chd: "₹30K – ₹55K" },
  { name: "Laser Fistula",        mumbai: "₹40K – ₹85K", chd: "₹38K – ₹80K" },
  { name: "Pilonidal Sinus",      mumbai: "₹35K – ₹70K", chd: "₹30K – ₹65K" },
  { name: "Abscess Drainage",     mumbai: "₹20K – ₹40K", chd: "₹18K – ₹35K" },
];

/* ═══════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════ */

export default function Home() {
  return (
    <div className="pt-16 lg:pt-[72px]">

      {/* ════════════════════════════════════════════
          HERO
          Layout (desktop): [Dark text panel] | [Doctor photo] | [Lead form]
          The photo and form are SEPARATE columns — form never overlaps photo.
          Mobile: Stack vertically in order: headline → photo → form
          ════════════════════════════════════════════ */}
      <section aria-label="Hero — book a consultation">
        <div className="lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,4fr)_minmax(0,4fr)] min-h-[580px] lg:min-h-[640px]">

          {/* COL 1 — Dark teal text */}
          <div className="hero-dark flex flex-col justify-center px-6 sm:px-10 lg:px-12 xl:px-16 py-14 lg:py-0">
            <div className="relative z-10 max-w-lg">

              <div className="badge mb-6 anim-fade-up !bg-white/15 !text-white !border-white/20">
                <BadgeCheck size={14} className="text-emerald-400" />
                Trusted by 10,000+ patients · India
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3rem] font-extrabold text-white leading-[1.1] mb-5 tracking-tight anim-slide-left">
                Sensitive Surgeries,{" "}
                <span className="text-grad-warm">Handled With Care</span>
              </h1>

              <p className="text-base lg:text-lg text-white/75 mb-8 leading-relaxed anim-fade-up delay-200">
                Laser treatment for Piles, Circumcision, Fissure, Fistula & more — with verified surgeons, insurance support, and complete care coordination.
              </p>

              {/* Trust chips */}
              <div className="flex flex-wrap gap-2.5 mb-8 anim-fade-up delay-300">
                {[
                  { label: "Free Consultation", icon: HeartPulse },
                  { label: "Insurance Covered",  icon: Shield     },
                  { label: "Home Same Day",       icon: Smile      },
                ].map(({ label, icon: Icon }) => (
                  <span
                    key={label}
                    className="flex items-center gap-1.5 bg-white/12 border border-white/18 text-white/90 px-3.5 py-2 rounded-xl text-sm font-semibold"
                  >
                    <Icon size={13} className="text-emerald-400 flex-shrink-0" aria-hidden="true" />
                    {label}
                  </span>
                ))}
              </div>

              {/* Star rating */}
              <div className="flex items-center gap-3.5 mb-9 anim-fade-up delay-400">
                <div className="flex -space-x-2">
                  {["P","S","R","A","M"].map((l, i) => (
                    <div
                      key={l}
                      aria-hidden="true"
                      className="w-8 h-8 rounded-full border-2 border-white/30 flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: `hsla(${195 + i * 20}, 60%, 38%, 0.8)` }}
                    >
                      {l}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-0.5" aria-label="4.8 out of 5 stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" aria-hidden="true" />
                    ))}
                    <span className="text-white font-bold text-sm ml-1.5">4.8</span>
                  </div>
                  <p className="text-white/45 text-xs">Verified patient reviews</p>
                </div>
              </div>

              {/* Desktop CTAs */}
              <div className="hidden lg:flex gap-3 anim-fade-up delay-500">
                <Link href="/book-consultation" className="btn-cta anim-pulse-glow">
                  Talk to a Care Expert — Free <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <a href="tel:+917011473737" className="btn-outline-white">
                  <Phone size={15} aria-hidden="true" /> Call Us
                </a>
              </div>
            </div>
          </div>

          {/* COL 2 — Doctor photo, properly framed, NO form overlay */}
          <div className="relative hidden lg:block">
            <Image
              src="/images/hero/hero-doctor.png"
              alt="Experienced SurgiSaathi doctor ready to help patients"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1280px) 33vw, 500px"
            />
            {/* Gradient blends left edge into dark panel */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(to right, rgba(3,65,78,0.75) 0%, rgba(3,65,78,0.15) 35%, transparent 60%)",
              }}
            />
            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#ECFEFF] to-transparent pointer-events-none" />
          </div>

          {/* COL 3 — Lead form, its own column */}
          <div className="bg-[#ECFEFF] hidden lg:flex items-center justify-center px-6 xl:px-10 py-10">
            <div className="w-full max-w-[360px]">
              <InlineLeadForm />
            </div>
          </div>

        </div>

        {/* Mobile — photo then form below hero */}
        <div className="lg:hidden">
          {/* Mobile photo strip */}
          <div className="relative h-52 sm:h-64">
            <Image
              src="/images/hero/hero-consultation.png"
              alt="Doctor consulting a patient warmly"
              fill
              priority
              className="object-cover object-[center_20%]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#ECFEFF] via-transparent to-transparent" />
          </div>
          {/* Mobile form */}
          <div className="bg-[#ECFEFF] px-4 pb-8 pt-4 flex justify-center">
            <div className="w-full max-w-md">
              <InlineLeadForm />
            </div>
          </div>
          {/* Mobile CTAs */}
          <div className="bg-[#ECFEFF] px-4 pb-10 flex flex-col sm:flex-row gap-3">
            <Link href="/book-consultation" className="btn-cta flex-1 justify-center">
              Free Consultation <ArrowRight size={15} />
            </Link>
            <a href="tel:+917011473737" className="btn-outline flex-1 justify-center">
              <Phone size={15} /> +91 70114 73737
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          STATS BAR
          ════════════════════════════════════════════ */}
      <section className="stats-bar" aria-label="Key statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={s.label} className="text-center group">
                <div
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-white/16 transition-colors"
                  aria-hidden="true"
                >
                  <s.icon size={19} className="text-white/65" />
                </div>
                <div className="text-3xl lg:text-[2.5rem] font-extrabold text-white flex items-center justify-center gap-1 mb-1">
                  <AnimatedCounter value={`${s.value}${s.suffix}`} duration={1300 + i * 200} />
                  {s.label === "Patient Rating" && (
                    <Star size={20} className="text-yellow-400 fill-yellow-400 ml-1" aria-hidden="true" />
                  )}
                </div>
                <p className="text-sm text-white/55 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          HOW IT WORKS
          ════════════════════════════════════════════ */}
      <section className="section bg-white" aria-labelledby="how-it-works-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge mb-5">Your Journey With Us</span>
            <h2 id="how-it-works-heading" className="text-3xl lg:text-[2.6rem] font-bold mt-4">
              Simple 4 Steps to <span className="text-grad-teal">Relief</span>
            </h2>
            <p className="text-[var(--color-muted)] mt-4 max-w-md mx-auto text-base">
              We coordinate every step. You focus on getting better.
            </p>
          </div>

          {/* Desktop — horizontal with connector line */}
          <div className="hidden lg:block relative">
            <div className="absolute top-[26px] left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-[2px] bg-gradient-to-r from-[var(--color-primary-light)]/20 via-[var(--color-primary)]/30 to-[var(--color-primary-light)]/20" />
            <div className="grid grid-cols-4 gap-6">
              {steps.map((step) => (
                <div key={step.num} className="flex flex-col items-center">
                  <div className="step-circle mb-6">
                    <step.icon size={22} className="text-white" aria-hidden="true" />
                  </div>
                  <div className="card text-center w-full">
                    <span className="text-xs font-bold tracking-widest text-[var(--color-accent)] mb-2 block">
                      STEP {step.num}
                    </span>
                    <h3 className="font-bold text-[var(--color-heading)] mb-2 text-sm lg:text-base">
                      {step.title}
                    </h3>
                    <p className="text-xs lg:text-sm text-[var(--color-muted)] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile — vertical */}
          <div className="lg:hidden space-y-4">
            {steps.map((step, i) => (
              <div key={step.num} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="step-circle !w-11 !h-11">
                    <step.icon size={18} className="text-white" aria-hidden="true" />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-[2px] flex-1 bg-gradient-to-b from-[var(--color-primary)]/25 to-transparent mt-2" />
                  )}
                </div>
                <div className="card flex-1 mb-2">
                  <span className="text-xs font-bold tracking-widest text-[var(--color-accent)] mb-1 block">
                    STEP {step.num}
                  </span>
                  <h3 className="font-bold text-sm text-[var(--color-heading)] mb-1">{step.title}</h3>
                  <p className="text-xs text-[var(--color-muted)] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          WHAT WE TREAT
          ════════════════════════════════════════════ */}
      <section className="section bg-[#ECFEFF]" aria-labelledby="treatments-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge mb-5">Specialised Laser Treatments</span>
            <h2 id="treatments-heading" className="text-3xl lg:text-[2.6rem] font-bold mt-4">
              Conditions We <span className="text-grad-teal">Specialize In</span>
            </h2>
            <p className="text-[var(--color-muted)] mt-4 max-w-md mx-auto">
              Advanced laser procedures by verified specialists at accredited hospitals.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {treatments.map((t) => (
              <Link
                key={t.slug}
                href={`/surgeries/${t.slug}`}
                className="card-treatment group"
                style={{ "--accent": t.accent }}
                aria-label={`Learn about ${t.name} — starting at ${t.price}`}
              >
                <div className="p-6 lg:p-7">
                  {t.tag && (
                    <span
                      className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-full mb-4"
                      style={{ background: `${t.accent}14`, color: t.accent }}
                    >
                      <Sparkles size={10} aria-hidden="true" /> {t.tag}
                    </span>
                  )}
                  <div
                    className="w-13 h-13 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                    style={{ background: `${t.accent}12` }}
                    aria-hidden="true"
                  >
                    <t.icon size={24} style={{ color: t.accent }} />
                  </div>
                  <h3 className="font-bold text-lg text-[var(--color-heading)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {t.name}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-5">{t.desc}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-[var(--color-card-border)]">
                    <div>
                      <span className="text-xs text-[var(--color-subtle)]">Starting at</span>
                      <span className="block font-bold text-lg text-[var(--color-primary-dark)]">{t.price}</span>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-semibold text-[var(--color-cta)] group-hover:gap-2 transition-all">
                      Know more <ArrowRight size={13} aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          PATIENT CTA BANNER — recovery photo
          ════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" aria-label="Get started — confidential consultation">
        <div className="lg:grid lg:grid-cols-2 min-h-[400px]">
          {/* Photo — full left column, zero overlay on right so it's visible */}
          <div className="relative h-56 lg:h-auto">
            <Image
              src="/images/hero/hero-recovery.png"
              alt="Smiling patient receiving attentive care from a SurgiSaathi nurse"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0C4A6E]/10 lg:hidden" />
          </div>

          {/* Text */}
          <div className="hero-dark flex flex-col justify-center px-8 lg:px-14 xl:px-20 py-14">
            <div className="relative z-10 max-w-lg">
              <span className="badge mb-5 !bg-white/15 !text-white !border-white/20">
                Judgment-Free Care
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
                Been putting this off?<br />
                <span className="text-grad-warm">We understand.</span>
              </h2>
              <p className="text-white/70 leading-relaxed mb-8">
                Piles, fistula, circumcision — these conditions are personal and often painful to discuss. Our care coordinators are trained to make this conversation easy, private, and completely judgment-free.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/book-consultation" className="btn-cta">
                  Start a Confidential Chat <ArrowRight size={15} aria-hidden="true" />
                </Link>
                <a href="tel:+917011473737" className="btn-outline-white">
                  <Phone size={15} aria-hidden="true" /> +91 70114 73737
                </a>
              </div>
              <p className="text-white/40 text-xs mt-5 flex items-center gap-1.5">
                <Lock size={12} aria-hidden="true" /> Your privacy is guaranteed. No shared contacts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          WHY SURGISAATHI
          ════════════════════════════════════════════ */}
      <section
        className="section"
        style={{ background: "linear-gradient(135deg, #0C4A6E, #0369A1, #0891B2)" }}
        aria-labelledby="why-heading"
      >
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <span className="badge mb-5 !bg-white/15 !text-white !border-white/20">
              Why Patients Choose Us
            </span>
            <h2 id="why-heading" className="text-3xl lg:text-[2.6rem] font-bold mt-4 text-white">
              Your Surgery.<br className="sm:hidden" /> Our{" "}
              <span className="text-grad-warm">Responsibility.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {trustPillars.map((p) => (
              <div key={p.title} className="card-dark">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform hover:scale-105"
                  style={{ background: `${p.color}20` }}
                  aria-hidden="true"
                >
                  <p.icon size={22} style={{ color: p.color }} />
                </div>
                <h3 className="font-bold text-white text-base mb-2">{p.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          TESTIMONIALS
          ════════════════════════════════════════════ */}
      <section className="section bg-white" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge mb-5">Patient Stories</span>
            <h2 id="testimonials-heading" className="text-3xl lg:text-[2.6rem] font-bold mt-4">
              Real People. <span className="text-grad-teal">Real Relief.</span>
            </h2>
            <p className="text-[var(--color-muted)] mt-3 text-sm max-w-sm mx-auto">
              Shared with explicit consent. Identifying details withheld by request.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure key={t.name} className="card flex flex-col">
                <div className="flex gap-0.5 mb-4" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="text-sm text-[var(--color-body)] leading-relaxed italic flex-1 mb-5">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3 pt-4 border-t border-[var(--color-card-border)]">
                  <div
                    className="w-9 h-9 rounded-full bg-[var(--color-primary)]/12 flex items-center justify-center text-sm font-bold text-[var(--color-primary-dark)] flex-shrink-0"
                    aria-hidden="true"
                  >
                    {t.name[0]}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm text-[var(--color-heading)] truncate">{t.name}</div>
                    <div className="text-xs text-[var(--color-muted)] truncate">
                      {t.procedure} · {t.city}
                    </div>
                  </div>
                  <BadgeCheck size={16} className="text-[var(--color-success)] ml-auto flex-shrink-0" aria-label="Verified patient" />
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SURGEON NETWORK
          ════════════════════════════════════════════ */}
      <section className="section bg-[#ECFEFF]" aria-labelledby="surgeons-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge mb-5">Our Surgeon Network</span>
          <h2 id="surgeons-heading" className="text-3xl lg:text-[2.6rem] font-bold mt-4 mb-6">
            Verified Specialists in{" "}
            <span className="text-[var(--color-primary-dark)]">Mumbai & Chandigarh</span>
          </h2>
          <p className="text-[var(--color-body)] max-w-2xl mx-auto leading-relaxed mb-12">
            We match each patient privately based on their condition and insurance — not a public directory. Every surgeon is credential-verified with their State Medical Council before joining our network.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
            {[
              { icon: UserCheck,     title: "Council Verified",  desc: "MBBS + MS/MCh confirmed with State Medical Councils." },
              { icon: Stethoscope,   title: "Condition-matched", desc: "We find the right specialist — not a general surgeon." },
              { icon: Award,         title: "NABH Hospitals",    desc: "All surgeries at accredited, infection-safe facilities." },
            ].map((item) => (
              <div key={item.title} className="card text-center">
                <div
                  className="w-12 h-12 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-4"
                  aria-hidden="true"
                >
                  <item.icon size={22} className="text-[var(--color-primary)]" />
                </div>
                <h3 className="font-bold text-sm text-[var(--color-heading)] mb-1">{item.title}</h3>
                <p className="text-xs text-[var(--color-muted)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <Link
            href="/doctors"
            className="text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] inline-flex items-center gap-1.5 transition-colors"
          >
            How we vet our surgeons <ChevronRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          PRICING TABLE
          ════════════════════════════════════════════ */}
      <section className="section bg-white" aria-labelledby="pricing-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge mb-5">Transparent Pricing</span>
            <h2 id="pricing-heading" className="text-3xl lg:text-[2.6rem] font-bold mt-4">
              Know Your Cost <span className="text-grad-teal">Upfront</span>
            </h2>
            <p className="text-[var(--color-muted)] mt-3 max-w-sm mx-auto">No surprises. All-inclusive packages.</p>
          </div>

          {/* Insurance note */}
          <div className="flex items-start gap-3 bg-[var(--color-success)]/8 border border-[var(--color-success)]/20 rounded-2xl px-6 py-4 mb-6 max-w-2xl mx-auto">
            <CheckCircle2 size={19} className="text-[var(--color-success)] flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-sm text-[var(--color-body)]">
              <strong className="text-[var(--color-heading)]">All listed procedures are covered</strong> under most standard health insurance policies. Our team handles paperwork and pre-authorization.
            </p>
          </div>

          <div className="table-premium">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left" scope="col">Surgery</th>
                    <th className="text-left" scope="col">Mumbai</th>
                    <th className="text-left" scope="col">Chandigarh</th>
                    <th className="text-right" scope="col">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricingRows.map((r) => (
                    <tr key={r.name}>
                      <td className="font-semibold text-[var(--color-heading)]">{r.name}</td>
                      <td className="text-[var(--color-body)]">{r.mumbai}</td>
                      <td className="text-[var(--color-body)]">{r.chd}</td>
                      <td className="text-right">
                        <Link
                          href="/book-consultation"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-cta)] hover:text-[var(--color-cta-hover)] transition-colors"
                        >
                          Get exact quote <ArrowRight size={11} aria-hidden="true" />
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

      {/* ════════════════════════════════════════════
          INSURANCE LOGOS
          ════════════════════════════════════════════ */}
      <section className="py-12 bg-[#ECFEFF]" aria-label="Accepted insurance partners">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold text-[var(--color-muted)] mb-7 uppercase tracking-[0.15em]">
            Accepted Insurance Partners
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {insurers.map((p) => (
              <div
                key={p}
                className="bg-white px-5 py-3 rounded-xl text-sm font-semibold text-[var(--color-body)] shadow-sm border border-[var(--color-card-border)] hover:border-[var(--color-primary-light)] hover:shadow-md transition-all cursor-default"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          PRIVACY NOTE
          ════════════════════════════════════════════ */}
      <section className="section bg-white" aria-labelledby="privacy-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="w-14 h-14 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-6"
            aria-hidden="true"
          >
            <Lock size={24} className="text-[var(--color-primary)]" />
          </div>
          <span className="badge mb-5">Your Privacy Matters</span>
          <h2 id="privacy-heading" className="text-2xl lg:text-3xl font-bold mt-4 mb-5">
            Your Story Stays Yours
          </h2>
          <p className="text-[var(--color-body)] leading-relaxed">
            We do not publish patient testimonials without explicit, withdrawable consent. Your data is encrypted and shared only with your assigned surgeon. We never contact you through shared numbers or emails without permission.
          </p>
          <Link
            href="/testimonials"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors"
          >
            How we handle patient stories <ChevronRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          FAQ
          ════════════════════════════════════════════ */}
      <section className="section bg-[#ECFEFF]" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge mb-5">Got Questions?</span>
            <h2 id="faq-heading" className="text-3xl lg:text-[2.6rem] font-bold mt-4">
              Things People Ask Us
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={f.q} className="faq-item">
                <summary>
                  <span className="flex items-center gap-3">
                    <span
                      className="text-xs font-bold text-[var(--color-primary)]/50 w-6 flex-shrink-0"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{f.q}</span>
                  </span>
                  <ChevronRight
                    size={16}
                    className="faq-chevron text-[var(--color-muted)] flex-shrink-0"
                    aria-hidden="true"
                  />
                </summary>
                <div className="faq-answer">
                  <p className="text-sm text-[var(--color-body)] leading-relaxed pl-9">{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          FINAL CTA — team photo background
          ════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-24 lg:py-32" aria-label="Final call to action">
        <Image
          src="/images/hero/hero-team.png"
          alt="The SurgiSaathi specialist surgical team"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay — sufficient contrast for white text (WCAG AA) */}
        <div className="absolute inset-0 bg-[#0C4A6E]/90" />
        {/* Subtle radial highlight */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,145,178,0.2)_0%,transparent_70%)]" />

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Testimonial pill */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/80 px-5 py-2.5 rounded-full text-sm mb-8 backdrop-blur-sm">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" aria-hidden="true" />
            ))}
            <span className="ml-1">
              &quot;Best healthcare decision I ever made&quot; —{" "}
              <em className="text-white not-italic font-semibold">Verified patient</em>
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-5 leading-tight">
            You Deserve Care{" "}
            <span className="text-grad-warm">Without Compromise</span>
          </h2>
          <p className="text-white/65 text-lg mb-10 leading-relaxed">
            Talk to a real care coordinator in minutes — privately, judgment-free. We&apos;ll handle everything.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-consultation" className="btn-cta anim-pulse-glow !text-base !py-4 !px-10">
              Talk to a Care Expert — It&apos;s Free <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a href="tel:+917011473737" className="btn-outline-white !text-base !py-4 !px-10">
              <Phone size={18} aria-hidden="true" /> +91 70114 73737
            </a>
          </div>

          <p className="text-white/35 text-sm mt-8 flex items-center justify-center gap-2">
            <Shield size={13} className="text-white/30" aria-hidden="true" />
            100% private · No spam · No pressure
          </p>
        </div>
      </section>

    </div>
  );
}
