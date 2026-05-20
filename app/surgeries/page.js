import Link from "next/link";
import { ArrowRight, IndianRupee, Clock } from "lucide-react";
import JsonLd from "../components/JsonLd";
import { breadcrumbSchema } from "../../lib/seo";

export const metadata = {
  title: "Laser Surgery Procedures — Costs, Recovery & Verified Surgeons",
  description: "Compare laser surgical procedures for piles, fissure, fistula, circumcision, abscess, and pilonidal sinus. Transparent pricing, verified surgeons, day-care recovery in Mumbai & Chandigarh.",
  alternates: { canonical: "/surgeries" },
};

const surgeries = [
  { name: "Laser Circumcision", slug: "circumcision", price: "₹25,000 – ₹42,500", recovery: "3-5 days", desc: "Safe laser circumcision with same-day discharge and minimal discomfort." },
  { name: "Laser Piles Surgery", slug: "piles", price: "₹36,000 – ₹80,000", recovery: "2-3 days", desc: "Minimally invasive laser treatment for hemorrhoids with rapid recovery." },
  { name: "Laser Fissure Treatment", slug: "fissure", price: "₹30,000 – ₹60,000", recovery: "3-5 days", desc: "Advanced laser surgery for anal fissure with minimal discomfort." },
  { name: "Laser Fistula Surgery", slug: "fistula", price: "₹38,000 – ₹85,000", recovery: "5-7 days", desc: "Sphincter-preserving FiLaC laser fistula treatment with low recurrence." },
  { name: "Abscess Drainage", slug: "abscess", price: "₹18,000 – ₹40,000", recovery: "2-4 days", desc: "Quick abscess drainage with minimal discomfort." },
  { name: "Pilonidal Sinus Surgery", slug: "pilonidal-sinus", price: "₹30,000 – ₹70,000", recovery: "5-7 days", desc: "Laser pilonidal sinus surgery with low recurrence." },
];

export default function SurgeriesIndexPage() {
  return (
    <div className="pt-16 lg:pt-[72px]">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Surgeries", href: "/surgeries" },
        ])}
      />
      <section className="gradient-hero py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3">Surgeries We Cover</h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Sensitive surgical procedures performed by verified surgeons. Transparent pricing,
            insurance support, and end-to-end care coordination.
          </p>
        </div>
      </section>

      <section className="section bg-[var(--color-bg-warm)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {surgeries.map((s) => (
              <Link key={s.slug} href={`/surgeries/${s.slug}`} className="card hover:shadow-lg transition-shadow group">
                <h2 className="text-lg font-semibold mb-1.5 group-hover:text-[var(--color-primary)] transition-colors">{s.name}</h2>
                <p className="text-sm text-[var(--color-text-muted)] mb-4">{s.desc}</p>
                <div className="flex items-center gap-4 text-xs text-[var(--color-text-muted)] mb-4">
                  <span className="flex items-center gap-1"><IndianRupee size={12} /> {s.price}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {s.recovery}</span>
                </div>
                <span className="text-sm font-semibold text-[var(--color-primary)] inline-flex items-center gap-1">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
