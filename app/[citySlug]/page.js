import Link from "next/link";
import { notFound } from "next/navigation";
import { Activity, Building2, CheckCircle2, CircleDot, Droplets, Flame, Languages, MapPin, Phone, Scissors, ShieldCheck, Star, Target, ArrowRight, ChevronRight } from "lucide-react";
import JsonLd from "../components/JsonLd";
import { ORG_LOGO, localBusinessSchema, breadcrumbSchema } from "../../lib/seo";
import { cityData } from "../../lib/city-data";

const topSurgeries = [
  { slug: "piles", title: "Laser Piles Surgery", icon: Activity },
  { slug: "fissure", title: "Laser Fissure Treatment", icon: Flame },
  { slug: "fistula", title: "Laser Fistula Surgery", icon: Target },
  { slug: "circumcision", title: "Laser Circumcision", icon: Scissors },
  { slug: "abscess", title: "Abscess Drainage Surgery", icon: Droplets },
  { slug: "pilonidal-sinus", title: "Pilonidal Sinus Surgery", icon: CircleDot },
];

const citySurgeryPath = (citySlug, surgerySlug) =>
  `/${surgerySlug}-surgery-${citySlug}`;

const cityHealthGuides = {
  mumbai: [
    { label: "Best piles doctor in Mumbai", href: "/blog/best-piles-doctor-mumbai-2026", desc: "How to compare credentials and hospital access" },
    { label: "Piles surgery cost in Mumbai", href: "/blog/piles-surgery-cost-mumbai-2026", desc: "Cost range, insurance and package inclusions" },
    { label: "Fissure surgery cost in Mumbai & Chandigarh", href: "/blog/fissure-surgery-cost-mumbai-chandigarh", desc: "Laser fissure pricing by city" },
    { label: "Piles operation cost in Mumbai", href: "/piles-treatment-cost", desc: "Full piles cost guide with Mumbai comparison" },
  ],
  chandigarh: [
    { label: "Piles surgery cost in Chandigarh", href: "/blog/piles-surgery-cost-chandigarh-2026", desc: "Tricity price range, insurance and inclusions" },
    { label: "Piles treatment in Chandigarh", href: "/piles-surgery-chandigarh", desc: "Laser piles surgery page for Chandigarh, Mohali and Panchkula" },
    { label: "Fissure surgery cost in Mumbai & Chandigarh", href: "/blog/fissure-surgery-cost-mumbai-chandigarh", desc: "Chandigarh fissure surgery pricing and recovery" },
    { label: "Pilonidal sinus laser surgery", href: "/blog/pilonidal-sinus-laser-surgery-guide", desc: "Laser care, recovery and recurrence prevention" },
  ],
};

export async function generateStaticParams() {
  return Object.keys(cityData).map((slug) => ({ citySlug: slug }));
}

export async function generateMetadata({ params }) {
  const p = await params;
  const data = cityData[p.citySlug];
  if (!data) return {};
  const path = `/${p.citySlug}`;
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: path,
    },
  };
}

export default async function CityPage({ params }) {
  const p = await params;
  const data = cityData[p.citySlug];

  if (!data) {
    notFound();
  }

  const path = `/${p.citySlug}`;
  const guides = cityHealthGuides[p.citySlug] || [];

  return (
    <div className="pt-16 lg:pt-[72px]">
      <JsonLd
        data={[
          localBusinessSchema({
            name: `SURGISAATHI ${data.name}`,
            description: data.description,
            url: path,
            telephone: data.phone,
            address: data.address,
            image: ORG_LOGO,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: data.name, href: path },
          ]),
        ]}
      />
      {/* HERO */}
      <section className="gradient-hero py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white">{data.name}</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin size={16} className="text-[var(--color-accent)]" /> Serving {data.name} & nearby areas
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              {data.title}
            </h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              {data.subtitle}. {data.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book-consultation" className="btn-primary !bg-[var(--color-accent)] animate-pulse-glow !py-4 !px-8">
                Book Free Consultation in {data.name}
              </Link>
              <a href={`tel:${data.phone}`} className="btn-secondary !border-white/30 !text-white hover:!bg-white/10 !py-4 !px-8">
                <Phone size={18} /> Call {data.phone}
              </a>
            </div>
            <div className="flex flex-wrap gap-2 mt-8">
              {data.nearbyAreas.map((area) => (
                <span key={area} className="bg-white/10 border border-white/15 text-white/85 px-3 py-1.5 rounded-full text-sm">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US IN THIS CITY */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose SURGISAATHI in {data.name}?</h2>
            <p className="text-[var(--color-text-body)]">{data.marketPosition}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center p-8">
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center mx-auto mb-6">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Verified Surgical Network</h3>
              <p className="text-[var(--color-text-body)]">We help you shortlist surgeons and hospitals suited to your condition, location, budget, and insurance network.</p>
            </div>
            <div className="card text-center p-8">
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Private Coordination</h3>
              <p className="text-[var(--color-text-body)]">WhatsApp-first support, discreet callbacks, and no-pressure guidance before you decide on consultation or surgery.</p>
            </div>
            <div className="card text-center p-8">
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-success)]/10 text-[var(--color-success)] flex items-center justify-center mx-auto mb-6">
                <Building2 size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cost & Insurance Help</h3>
              <p className="text-[var(--color-text-body)]">You get indicative package ranges, policy checks, and help understanding what may be cashless or reimbursable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL PROOF */}
      <section className="section bg-[var(--color-bg-warm)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div>
              <span className="trust-badge mb-4 inline-flex">Local care model</span>
              <h2 className="text-3xl font-bold mb-4">Built for how patients choose surgery in {data.name}</h2>
              <p className="text-[var(--color-text-body)] leading-relaxed">
                Sensitive conditions need privacy, clear costs, and a coordinator who can reduce hospital friction. SurgiSaathi keeps the first step simple: share your concern, understand your options, then choose the surgeon and hospital that fits your case.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.localProof.map((item) => (
                <div key={item} className="bg-white border border-[var(--color-card-border)] rounded-lg p-5">
                  <ShieldCheck size={22} className="text-[var(--color-primary)] mb-3" />
                  <p className="font-medium text-[var(--color-text-heading)]">{item}</p>
                </div>
              ))}
              <div className="bg-white border border-[var(--color-card-border)] rounded-lg p-5">
                <Languages size={22} className="text-[var(--color-primary)] mb-3" />
                <p className="font-medium text-[var(--color-text-heading)]">
                  Support in {data.languages.join(", ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOP SURGERIES IN THIS CITY */}
      <section className="section gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">Top Treatments We Offer in {data.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topSurgeries.map((surgery) => (
              <Link href={citySurgeryPath(p.citySlug, surgery.slug)} key={surgery.slug} className="card group hover:-translate-y-1 transition-all">
                <surgery.icon size={32} className="text-[var(--color-primary)] mb-4" />
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--color-primary)] transition-colors">{surgery.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] flex items-center gap-1 font-medium mt-4">
                  View {data.name} cost guide <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CITY HEALTH GUIDES */}
      {guides.length > 0 && (
        <section className="section bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="trust-badge mb-4 inline-flex">Local Health Guides</span>
              <h2 className="text-3xl font-bold mt-3">{data.name} Cost &amp; Treatment Guides</h2>
              <p className="text-[var(--color-text-muted)] mt-3 max-w-2xl mx-auto">
                City-specific explainers for symptoms, pricing, insurance, recovery and when to consult a surgeon.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {guides.map((guide) => (
                <Link key={guide.href} href={guide.href} className="border border-[var(--color-card-border)] rounded-lg p-5 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/[0.02] transition-colors group">
                  <h3 className="font-semibold text-[var(--color-text-heading)] group-hover:text-[var(--color-primary)] transition-colors">{guide.label}</h3>
                  <p className="text-sm text-[var(--color-text-muted)] mt-2">{guide.desc}</p>
                  <span className="text-sm font-semibold text-[var(--color-primary)] inline-flex items-center gap-1 mt-4">
                    Read guide <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* OUR HOSPITALS IN CITY */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Partner Hospitals in {data.name}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {data.hospitals.map((hospital) => (
              <div key={hospital} className="bg-[var(--color-bg-warm)] px-6 py-4 rounded-xl font-medium border border-[var(--color-card-border)] flex items-center gap-3">
                <Building2 size={20} className="text-[var(--color-primary)]" />
                {hospital}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="gradient-hero py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don&apos;t Delay Your Treatment</h2>
          <p className="text-white/80 mb-8">Book a private consultation in {data.name}. Our team will help you understand the likely cost, hospital options, and insurance process before you commit.</p>
          <Link href="/book-consultation" className="btn-primary !bg-[var(--color-accent)] !py-4 !px-10 animate-pulse-glow">
            Book Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
