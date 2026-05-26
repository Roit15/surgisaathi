import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, MapPin, Phone, Building2, ChevronRight, Star, ArrowRight } from "lucide-react";
import JsonLd from "../components/JsonLd";
import { localBusinessSchema, breadcrumbSchema } from "../../lib/seo";
import { cityData } from "../../lib/city-data";
import { surgeryData } from "../../lib/surgery-data";

// If surgeryData is not exported, we can just define a minimal array here for the UI
const topSurgeries = [
  { slug: "piles", title: "Laser Piles Surgery", icon: "🩺" },
  { slug: "fissure", title: "Laser Fissure Treatment", icon: "🩺" },
  { slug: "fistula", title: "Laser Fistula Surgery", icon: "🩺" },
  { slug: "circumcision", title: "Laser Circumcision", icon: "🩺" },
];

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
            image: "https://surgisaathi.com/logo.png",
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
              <MapPin size={16} className="text-[var(--color-accent)]" /> Serving {data.name} & Surrounding Areas
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
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US IN THIS CITY */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose SURGISAATHI in {data.name}?</h2>
            <p className="text-[var(--color-text-body)]">We partner with the best hospitals and surgeons in {data.name} to bring you safe, painless, and affordable laser treatments.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center p-8">
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center mx-auto mb-6">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Surgeons</h3>
              <p className="text-[var(--color-text-body)]">Highly qualified and verified proctologists based in {data.name} with 10+ years of experience.</p>
            </div>
            <div className="card text-center p-8">
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">USFDA Approved Laser</h3>
              <p className="text-[var(--color-text-body)]">Advanced laser technology for minimally invasive, bloodless procedures.</p>
            </div>
            <div className="card text-center p-8">
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-success)]/10 text-[var(--color-success)] flex items-center justify-center mx-auto mb-6">
                <Building2 size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Top Hospitals</h3>
              <p className="text-[var(--color-text-body)]">Partnered with {data.name}'s leading multi-specialty hospitals for your care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TOP SURGERIES IN THIS CITY */}
      <section className="section gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">Top Treatments We Offer in {data.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topSurgeries.map((surgery) => (
              <Link href={`/${p.citySlug}/${surgery.slug}`} key={surgery.slug} className="card group hover:-translate-y-1 transition-all">
                <div className="text-4xl mb-4">{surgery.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--color-primary)] transition-colors">{surgery.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] flex items-center gap-1 font-medium mt-4">
                  View details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
          <p className="text-white/80 mb-8">Book a free consultation with {data.name}'s best surgeons today. We handle your insurance claims seamlessly.</p>
          <Link href="/book-consultation" className="btn-primary !bg-[var(--color-accent)] !py-4 !px-10 animate-pulse-glow">
            Book Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
