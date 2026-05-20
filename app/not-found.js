import Link from "next/link";
import { ArrowRight, Home, Search, Phone } from "lucide-react";

export const metadata = {
  title: "Page Not Found | SURGISAATHI",
  description:
    "The page you're looking for has moved or doesn't exist. Browse our surgeries, talk to a care expert, or return to the homepage.",
  robots: { index: false, follow: true },
};

const popularLinks = [
  { href: "/surgeries/piles", label: "Laser Piles Surgery" },
  { href: "/surgeries/circumcision", label: "Laser Circumcision" },
  { href: "/surgeries/fissure", label: "Laser Fissure Treatment" },
  { href: "/surgeries/fistula", label: "Laser Fistula Surgery" },
  { href: "/surgeries/abscess", label: "Abscess Drainage" },
  { href: "/surgeries/pilonidal-sinus", label: "Pilonidal Sinus Surgery" },
];

export default function NotFound() {
  return (
    <div className="pt-16 lg:pt-[72px] min-h-[80vh] bg-[var(--color-bg-warm)]">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
        <p className="text-sm font-semibold tracking-wide text-[var(--color-primary)] uppercase mb-3">
          404 — Page not found
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text-heading)] mb-4">
          We can&apos;t find that page
        </h1>
        <p className="text-[var(--color-text-muted)] max-w-xl mx-auto mb-10">
          The link you followed may be broken or the page may have moved.
          Try one of the popular procedures below, or talk to a care expert
          directly.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          <Link href="/" className="btn-primary !px-6">
            <Home size={18} /> Back to Home
          </Link>
          <Link href="/surgeries" className="btn-secondary !px-6">
            <Search size={18} /> Browse Surgeries
          </Link>
          <a href="tel:+917011473737" className="btn-secondary !px-6">
            <Phone size={18} /> Call +91 70114 73737
          </a>
        </div>

        <div className="bg-white border border-[var(--color-card-border)] rounded-2xl p-6 sm:p-8 text-left">
          <h2 className="font-semibold text-[var(--color-text-heading)] mb-4">
            Popular surgeries
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
            {popularLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-[var(--color-primary)] hover:underline inline-flex items-center gap-1"
                >
                  {l.label} <ArrowRight size={14} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
