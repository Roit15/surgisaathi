import Link from "next/link";
import Image from "next/image";
import {
  Shield, Heart, Clock, IndianRupee, ChevronRight,
  UserCheck, Building2, Stethoscope, CheckCircle2, ArrowRight,
  Phone, Zap, Award, Users, HeartPulse, Sparkles,
  CircleDot, Star, Lock, Scissors, Activity, Flame, Target, Droplets
} from "lucide-react";
import InlineLeadForm from "./components/InlineLeadForm";
import JsonLd from "./components/JsonLd";
import { faqPageSchema, breadcrumbSchema, SITE_URL } from "../lib/seo";

/* ── STATIC DATA ────────────────────────────────────────── */

const surgeries = [
  { name: "Circumcision", slug: "circumcision", icon: Scissors, iconColor: "text-blue-500", price: "₹25,000", desc: "Safe laser circumcision with same-day discharge", tag: "Most Popular" },
  { name: "Piles", slug: "piles", icon: Activity, iconColor: "text-orange-500", price: "₹36,000", desc: "Minimally invasive laser piles treatment with rapid recovery", tag: "High Demand" },
  { name: "Fissure", slug: "fissure", icon: Flame, iconColor: "text-emerald-500", price: "₹35,000", desc: "Laser fissure surgery with rapid recovery", tag: null },
  { name: "Fistula", slug: "fistula", icon: Target, iconColor: "text-red-500", price: "₹40,000", desc: "Advanced laser fistula treatment by experts", tag: null },
  { name: "Abscess", slug: "abscess", icon: Droplets, iconColor: "text-amber-500", price: "₹20,000", desc: "Quick abscess drainage with minimal discomfort", tag: null },
  { name: "Pilonidal Sinus", slug: "pilonidal-sinus", icon: CircleDot, iconColor: "text-purple-500", price: "₹35,000", desc: "Laser pilonidal sinus surgery with lower recurrence risk", tag: null },
];

const moneyPages = [
  { label: "Piles surgery in Mumbai", href: "/piles-surgery-mumbai", desc: "Cost, recovery, insurance and consultation options" },
  { label: "Piles surgery in Chandigarh", href: "/piles-surgery-chandigarh", desc: "Tricity care, Hindi/Punjabi support and package pricing" },
  { label: "Fissure surgery in Mumbai", href: "/fissure-surgery-mumbai", desc: "Laser fissure treatment cost and recovery guide" },
  { label: "Fissure surgery in Chandigarh", href: "/fissure-surgery-chandigarh", desc: "Chandigarh fissure treatment and insurance support" },
  { label: "Fistula surgery in Mumbai", href: "/fistula-surgery-mumbai", desc: "FiLaC/VAAFT options, cost and hospital coordination" },
  { label: "Fistula surgery in Chandigarh", href: "/fistula-surgery-chandigarh", desc: "Tricity fistula surgery cost and care coordination" },
  { label: "Circumcision surgery in Mumbai", href: "/circumcision-surgery-mumbai", desc: "Private urology consultation and package pricing" },
  { label: "Piles treatment cost", href: "/piles-treatment-cost", desc: "Mumbai vs Chandigarh cost comparison" },
];

const steps = [
  { num: "01", title: "Share Your Concern", desc: "Tell us about your condition — privately and confidentially.", icon: HeartPulse },
  { num: "02", title: "Get Expert Guidance", desc: "Our care coordinator connects you with the right surgeon.", icon: UserCheck },
  { num: "03", title: "Book & Prepare", desc: "We handle insurance, scheduling, and pre-op preparation.", icon: Clock },
  { num: "04", title: "Surgery & Recovery", desc: "Day-care laser surgery with complete post-op support.", icon: Sparkles },
];

const trustPillars = [
  { icon: Shield, title: "100% Verified Surgeons", desc: "Every surgeon is credential-verified with 10+ years experience" },
  { icon: IndianRupee, title: "Transparent Pricing", desc: "No hidden costs. All-inclusive packages with upfront pricing" },
  { icon: Heart, title: "Complete Care Support", desc: "From consultation to recovery — we're with you every step" },
  { icon: Zap, title: "Advanced Laser Technology", desc: "Minimally invasive procedures with faster recovery" },
  { icon: Award, title: "NABH Accredited Hospitals", desc: "Partnered only with top-quality accredited facilities" },
  { icon: Users, title: "Insurance & EMI Support", desc: "Cashless insurance processing and 0% EMI options" },
];

const stats = [
  { value: "10,000+", label: "Successful Surgeries" },
  { value: "100+", label: "Expert Surgeons" },
  { value: "4.8", label: "Patient Rating" },
  { value: "50+", label: "Partner Hospitals" },
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

/* ── TESTIMONIALS DATA ───────────────────────────────── */
const testimonials = [
  {
    quote: "I was embarrassed to discuss this with anyone, even family. The SURGISAATHI coordinator made it feel completely normal. Surgery was done in 45 minutes, I was home by evening.",
    name: "Priya M.",
    city: "Mumbai",
    procedure: "Laser Piles Surgery",
    rating: 5,
  },
  {
    quote: "Fully cashless through my HDFC Ergo policy. No paperwork from my side at all. The coordinator handled everything — I just showed up on the day of surgery.",
    name: "Sandeep K.",
    city: "Chandigarh",
    procedure: "Laser Fissure Treatment",
    rating: 5,
  },
  {
    quote: "I had put off this surgery for 2 years out of fear. Recovery was much easier than I expected. Back to work in 3 days. Should have done this sooner.",
    name: "Amit R.",
    city: "Mumbai",
    procedure: "Laser Circumcision",
    rating: 5,
  },
];

/* ── HOMEPAGE COMPONENT ─────────────────────────────────── */

function howItWorksSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Book Laser Surgery with SURGISAATHI",
    description: "Step-by-step guide to booking your laser surgery through SURGISAATHI — from first contact to full recovery.",
    step: [
      { "@type": "HowToStep", position: 1, name: "Share Your Concern", text: "Tell us about your condition privately and confidentially via phone or form." },
      { "@type": "HowToStep", position: 2, name: "Get Expert Guidance", text: "Our care coordinator connects you with the right verified surgeon for your condition." },
      { "@type": "HowToStep", position: 3, name: "Book & Prepare", text: "We handle insurance pre-authorization, hospital booking, and pre-op tests." },
      { "@type": "HowToStep", position: 4, name: "Surgery & Recovery", text: "Day-care laser surgery at an NABH-accredited hospital. Complete post-op support." },
    ],
  };
}


export default function Home() {
  const homeFaqSchema = faqPageSchema(faqs, "/");
  const crumbSchema = breadcrumbSchema([{ name: "Home", href: "/" }]);
  return (
    <div className="pt-16 lg:pt-[72px]">
      {/* JSON-LD: FAQ + HowTo + Breadcrumb */}
      <JsonLd data={[homeFaqSchema, howItWorksSchema(), crumbSchema]} />

      {/* ─── HERO ──────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[560px] sm:min-h-[620px] lg:min-h-[680px]">

        {/* Background photo — doctor + patient (hero-recovery.png) */}
        <Image
          src="/images/hero/hero-recovery.png"
          alt="Doctor attending to a patient at a SurgiSaathi partner hospital"
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1920px"
        />

        {/* Multi-layer overlay — ensures text is readable at all viewports */}
        {/* Mobile: heavy full-bleed teal so white text pops */}
        {/* Desktop: left-heavy so photo peeks through on right */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A4A6E]/92 via-[#0A4A6E]/85 to-[#0A4A6E]/95 lg:bg-none" />
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-[#0A4A6E]/95 via-[#0A4A6E]/80 to-[#0A4A6E]/40" />

        {/* Subtle decorative blobs — keep the original aesthetic */}
        <div className="absolute top-16 right-16 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none hidden lg:block" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left — Text */}
            <div>
              <div className="trust-badge !bg-white/15 !text-white mb-6">
                <CheckCircle2 size={14} /> Verified surgeons · Mumbai & Chandigarh
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Expert Laser Surgery for{" "}
                <span className="text-[var(--color-accent)]">Piles, Circumcision, Fissure & More</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
                Expert laser treatments for Piles, Circumcision, Fissure, Fistula & more.
                Transparent pricing. Insurance support. Complete care coordination.
              </p>

              <div className="flex items-center gap-3 mb-4">
                <div className="flex -space-x-2">
                  {["A","P","S","R","M"].map((l) => (
                    <div key={l} className="w-8 h-8 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center text-xs font-bold text-white">{l}</div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" aria-hidden="true" />
                    ))}
                    <span className="text-white font-bold text-sm ml-1">4.8</span>
                  </div>
                  <p className="text-white/70 text-xs"><span className="text-white font-semibold">10,000+ patients</span> treated • 2,400+ reviews</p>
                </div>
              </div>

              {/* Urgency pill */}
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                6 consultations booked today in Mumbai
              </div>

              {/* Mobile CTA buttons — sit below text, above form */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8 lg:hidden">
                <Link href="/book-consultation" className="btn-primary flex-1 justify-center text-center">
                  Book Free Consultation <ArrowRight size={16} />
                </Link>
                <a href="tel:+917011473737" className="btn-secondary flex-1 justify-center !border-white/30 !text-white hover:!bg-white hover:!text-[var(--color-primary)]">
                  <Phone size={15} /> Call Now
                </a>
              </div>
            </div>

            {/* Right — Lead Form (Desktop only) */}
            <div className="hidden lg:flex justify-end">
            <InlineLeadForm formId="hero-lead-form-desktop" />
            </div>
          </div>

          {/* Mobile Form */}
          <div className="mt-8 lg:hidden flex justify-center">
            <InlineLeadForm formId="hero-lead-form-mobile" />
          </div>
        </div>

        {/* Bottom fade into the next section */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* ─── STATS BAR ─────────────────────────────────── */}
      <section className="bg-white border-b border-[var(--color-card-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-[var(--color-primary)] flex items-center justify-center gap-1">
                  {s.value}
                  {s.label === "Patient Rating" && <Star size={20} fill="currentColor" />}
                </div>
                <div className="text-sm text-[var(--color-text-muted)] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ──────────────────────────────── */}
      <section className="section bg-[var(--color-bg-warm)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="trust-badge mb-4 inline-flex">Simple 4-Step Process</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3">How SURGISAATHI Works</h2>
            <p className="text-[var(--color-text-muted)] mt-3 max-w-xl mx-auto">
              From your first call to full recovery — we handle everything so you can focus on healing.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="card text-center relative group">
                <div className="text-xs font-bold text-[var(--color-accent)] mb-3">{step.num}</div>
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                  <step.icon size={24} className="text-[var(--color-primary)] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SURGERY CATEGORIES ────────────────────────── */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="trust-badge mb-4 inline-flex">Specialized Procedures</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3">Surgeries We Specialize In</h2>
            <p className="text-[var(--color-text-muted)] mt-3 max-w-xl mx-auto">
              Advanced laser treatment options coordinated with credential-checked surgeons at accredited hospitals.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {surgeries.map((s) => (
              <Link href={`/surgeries/${s.slug}`} key={s.slug} className="card group relative overflow-hidden">
                {s.tag && (
                  <span className="absolute top-4 right-4 bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-semibold px-3 py-1 rounded-full">
                    {s.tag}
                  </span>
                )}
                <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-warm)] flex items-center justify-center mb-4">
                  <s.icon size={24} className={s.iconColor} />
                </div>
                <h3 className="text-xl font-semibold mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                  {s.name}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] mb-4">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[var(--color-primary)]">
                    Starting {s.price}
                  </span>
                  <span className="flex items-center text-sm text-[var(--color-accent)] font-medium gap-1 group-hover:gap-2 transition-all">
                    Learn more <ChevronRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CITY SURGERY GUIDES ──────────────────────── */}
      <section className="section bg-[var(--color-bg-warm)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="trust-badge mb-4 inline-flex">City Cost Guides</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3">Mumbai &amp; Chandigarh Surgery Pages</h2>
            <p className="text-[var(--color-text-muted)] mt-3 max-w-2xl mx-auto">
              Compare procedure costs, recovery timelines, insurance support and private consultation options by city.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {moneyPages.map((page) => (
              <Link key={page.href} href={page.href} className="bg-white border border-[var(--color-card-border)] rounded-lg p-5 hover:border-[var(--color-primary)] hover:shadow-sm transition-all group">
                <h3 className="font-semibold text-[var(--color-text-heading)] group-hover:text-[var(--color-primary)] transition-colors">{page.label}</h3>
                <p className="text-sm text-[var(--color-text-muted)] mt-2">{page.desc}</p>
                <span className="text-sm font-semibold text-[var(--color-primary)] inline-flex items-center gap-1 mt-4">
                  View guide <ChevronRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY SURGISAATHI ───────────────────────────── */}
      <section className="section gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="trust-badge mb-4 inline-flex">Why Choose Us</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3">Your Surgery, Our Responsibility</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustPillars.map((p) => (
              <div key={p.title} className="card">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
                  <p.icon size={22} className="text-[var(--color-primary)]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SURGEON NETWORK ──────────────────────────── */}
      <section className="section bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="trust-badge mb-4 inline-flex">Our Surgeon Network</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3">Verified Surgeons Across Mumbai &amp; Chandigarh</h2>
            <p className="text-[var(--color-text-muted)] mt-3 max-w-2xl mx-auto">
              We do not publish surgeon profiles publicly — instead we match each patient privately with the right surgeon for their case during the consultation. Every partner surgeon is credential-verified with the relevant State Medical Council and operates at NABH-aligned hospitals.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="card text-center">
              <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-3">
                <UserCheck size={22} className="text-[var(--color-primary)]" />
              </div>
              <h3 className="font-semibold text-base">Credential-verified</h3>
              <p className="text-sm text-[var(--color-text-muted)] mt-1">MBBS, MS / MCh registration confirmed with State Medical Council.</p>
            </div>
            <div className="card text-center">
              <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-3">
                <Stethoscope size={22} className="text-[var(--color-primary)]" />
              </div>
              <h3 className="font-semibold text-base">Procedure-specialised</h3>
              <p className="text-sm text-[var(--color-text-muted)] mt-1">Matched to your condition — proctology, laser surgery, general surgery.</p>
            </div>
            <div className="card text-center">
              <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-3">
                <Award size={22} className="text-[var(--color-primary)]" />
              </div>
              <h3 className="font-semibold text-base">Accredited hospitals</h3>
              <p className="text-sm text-[var(--color-text-muted)] mt-1">NABH-aligned facilities with current infection-control standards.</p>
            </div>
          </div>
          <div className="text-center">
            <Link href="/doctors" className="text-sm font-semibold text-[var(--color-primary)] hover:underline inline-flex items-center gap-1">
              How we vet surgeons <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── COST TRANSPARENCY ─────────────────────────── */}
      <section className="section gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="trust-badge mb-4 inline-flex">Transparent Pricing</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3">Know Your Surgery Cost Upfront</h2>
            <p className="text-[var(--color-text-muted)] mt-3">No hidden charges. All-inclusive packages.</p>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[var(--color-card-border)]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[var(--color-primary)]/5">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-[var(--color-text-heading)]">Surgery</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-[var(--color-text-heading)]">Mumbai</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-[var(--color-text-heading)]">Chandigarh</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-[var(--color-text-heading)]">Insurance</th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Laser Circumcision", mumbai: "₹30K – ₹42K", chd: "₹25K – ₹40K", ins: "Covered" },
                    { name: "Laser Piles Surgery", mumbai: "₹38K – ₹80K", chd: "₹36K – ₹75K", ins: "Covered" },
                    { name: "Laser Fissure", mumbai: "₹35K – ₹60K", chd: "₹30K – ₹55K", ins: "Covered" },
                    { name: "Laser Fistula", mumbai: "₹40K – ₹85K", chd: "₹38K – ₹80K", ins: "Covered" },
                    { name: "Abscess Drainage", mumbai: "₹20K – ₹40K", chd: "₹18K – ₹35K", ins: "Covered" },
                    { name: "Pilonidal Sinus", mumbai: "₹35K – ₹70K", chd: "₹30K – ₹65K", ins: "Covered" },
                  ].map((r) => (
                    <tr key={r.name} className="border-t border-[var(--color-card-border)] hover:bg-[var(--color-primary)]/[0.02] transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-[var(--color-text-heading)]">{r.name}</td>
                      <td className="px-6 py-4 text-sm text-[var(--color-text-body)]">{r.mumbai}</td>
                      <td className="px-6 py-4 text-sm text-[var(--color-text-body)]">{r.chd}</td>
                      <td className="px-6 py-4">
                        <span className="text-xs font-semibold text-[var(--color-success)] bg-[var(--color-success)]/10 px-2 py-1 rounded-full">
                          ✓ {r.ins}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <Link href="/book-consultation" className="text-sm font-semibold text-[var(--color-accent)] hover:underline">
                          Get Exact Cost →
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

      {/* ─── TESTIMONIALS ────────────────────────────── */}
      <section className="section bg-[var(--color-bg-warm)]" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="trust-badge mb-4 inline-flex">Patient Stories</span>
            <h2 id="testimonials-heading" className="text-3xl lg:text-4xl font-bold mt-3">
              Real Patients. <span className="text-[var(--color-primary)]">Real Relief.</span>
            </h2>
            <p className="text-[var(--color-text-muted)] text-sm mt-2 max-w-sm mx-auto">
              Shared with explicit consent. Identifying details withheld by patient request.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure key={t.name} className="card flex flex-col">
                <div className="flex gap-0.5 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="text-sm text-[var(--color-text-body)] leading-relaxed italic flex-1 mb-4">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3 pt-4 border-t border-[var(--color-card-border)]">
                  <div
                    className="w-9 h-9 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-sm font-bold text-[var(--color-primary)] flex-shrink-0"
                    aria-hidden="true"
                  >
                    {t.name[0]}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm text-[var(--color-text-heading)] truncate">{t.name}</div>
                    <div className="text-xs text-[var(--color-text-muted)] truncate">{t.procedure} · {t.city}</div>
                  </div>
                  <CheckCircle2 size={15} className="text-[var(--color-success)] ml-auto flex-shrink-0" aria-label="Verified patient" />
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/testimonials" className="text-sm font-semibold text-[var(--color-primary)] hover:underline inline-flex items-center gap-1">
              Read more patient stories <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PRIVACY FIRST ────────────────────────────── */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="trust-badge mb-4 inline-flex">Privacy First</span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3">Your Story Stays Yours</h2>
          <p className="text-[var(--color-text-muted)] mt-4 leading-relaxed">
            We do not publish patient testimonials by default. Conditions like piles, fistula and circumcision are personal, and we share patient experiences only with explicit, withdrawable consent — never identifying details. If you would like to hear from a past patient before deciding, ask during your free consultation and we will see whether someone is willing to talk on their terms.
          </p>
          <div className="mt-6">
            <Link href="/testimonials" className="text-sm font-semibold text-[var(--color-primary)] hover:underline inline-flex items-center gap-1">
              How we handle patient stories <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── INSURANCE PARTNERS ────────────────────────── */}
      <section className="py-12 bg-[var(--color-bg-section)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-[var(--color-text-muted)] mb-6 uppercase tracking-wider">Insurance Partners</p>
          <div className="flex flex-wrap justify-center gap-6">
            {insurancePartners.map((p) => (
              <div key={p} className="bg-white px-5 py-3 rounded-xl text-sm font-medium text-[var(--color-text-body)] shadow-sm border border-[var(--color-card-border)]">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CITIES WE SERVE ──────────────────────────── */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="trust-badge mb-4 inline-flex"><Building2 size={14} /> Nationwide Network</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3">Cities We Serve</h2>
            <p className="text-[var(--color-text-muted)] mt-3 max-w-xl mx-auto">
              Expert laser surgery in major cities across India — same quality care, same transparent pricing.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Mumbai", slug: "mumbai", hospitals: 3, tag: "Top City" },
              { name: "Chandigarh", slug: "chandigarh", hospitals: 2, tag: null },
            ].map((city) => (
              <div key={city.slug} className="card relative overflow-hidden">
                {city.tag && (
                  <span className="absolute top-4 right-4 bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-semibold px-3 py-1 rounded-full">
                    {city.tag}
                  </span>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <Building2 size={20} className="text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <Link href={`/${city.slug}`} className="text-lg font-semibold hover:text-[var(--color-primary)] transition-colors">
                      {city.name}
                    </Link>
                    <p className="text-xs text-[var(--color-text-muted)]">{city.hospitals} partner hospitals</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Piles", href: `/${city.slug === "mumbai" ? "piles-surgery-mumbai" : "piles-surgery-chandigarh"}` },
                    { label: "Fissure", href: `/${city.slug === "mumbai" ? "fissure-surgery-mumbai" : "fissure-surgery-chandigarh"}` },
                    { label: "Fistula", href: `/${city.slug === "mumbai" ? "fistula-surgery-mumbai" : "fistula-surgery-chandigarh"}` },
                    { label: "Circumcision", href: `/${city.slug === "mumbai" ? "circumcision-surgery-mumbai" : "circumcision-surgery-chandigarh"}` },
                  ].map((surgery) => (
                    <Link
                      key={surgery.label}
                      href={surgery.href}
                      className="text-xs bg-[var(--color-bg-warm)] text-[var(--color-text-body)] px-3 py-1.5 rounded-full hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] transition-colors capitalize"
                    >
                      {surgery.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ───────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
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

      {/* ─── FINAL CTA ─────────────────────────────────── */}
      <section className="gradient-hero py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Take the First Step Towards Relief
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Book a free, private consultation with our care experts. No obligation, no judgment — just trusted guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-consultation" className="btn-primary !bg-[var(--color-accent)] !text-white !text-base !py-4 !px-10 animate-pulse-glow">
              Book Free Consultation <ArrowRight size={18} />
            </Link>
            <a href="tel:+917011473737" className="btn-secondary !border-white/30 !text-white hover:!bg-white/10 !text-base !py-4 !px-10">
              <Phone size={18} /> Call Now
            </a>
          </div>
          <p className="text-white/50 text-sm mt-6 flex items-center justify-center gap-1.5"><Lock size={14} /> Your information is 100% confidential</p>
        </div>
      </section>
    </div>
  );
}
