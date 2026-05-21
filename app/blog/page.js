import Link from "next/link";
import { Clock, Calendar, BadgeCheck, ChevronRight, ArrowRight } from "lucide-react";
import { blogPosts, BLOG_CATEGORIES } from "../../lib/blog-data";
import JsonLd from "../components/JsonLd";
import { breadcrumbSchema } from "../../lib/seo";

export const metadata = {
  title: "Piles & Surgery Health Guide — Expert Articles | SURGISAATHI Blog",
  description: "Expert articles on piles, fissure, fistula, circumcision, and sensitive surgery. Written and reviewed by SURGISAATHI's clinical team. Understand your condition, treatment options, and recovery.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div className="pt-16 lg:pt-[72px]">
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Health Guide" }]),
        ]}
      />

      {/* HERO */}
      <section className="gradient-hero py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="trust-badge !bg-white/15 !text-white mb-4 inline-flex">Evidence-Based Health Information</span>
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">Surgery &amp; Health Guide</h1>
          <p className="text-white/80 max-w-xl mx-auto text-lg">
            Medically reviewed articles on piles, fissure, fistula, and circumcision. Understand your condition before your consultation.
          </p>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="section bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-6">Featured Article</p>
          <Link href={`/blog/${featured.slug}`} className="group block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 card group-hover:border-[var(--color-primary)] transition-colors">
              <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-xl flex items-center justify-center p-12">
                <span className="text-6xl">{featured.category === "Piles" ? "🩺" : "📋"}</span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider mb-3">{featured.category}</span>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-[var(--color-primary)] transition-colors">{featured.title}</h2>
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-[var(--color-text-muted)] mb-4">
                  <span className="flex items-center gap-1"><Clock size={12} /> {featured.readTime}</span>
                  <span className="flex items-center gap-1"><Calendar size={12} /> {new Date(featured.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                  {featured.medicallyReviewed && (
                    <span className="flex items-center gap-1 text-green-600"><BadgeCheck size={12} /> Medically reviewed</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-sm font-bold text-[var(--color-primary)]">
                    {featured.author.split(" ").map(n => n[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{featured.author}</p>
                    <p className="text-xs text-[var(--color-text-muted)]">{featured.authorRole}</p>
                  </div>
                </div>
                <span className="mt-4 flex items-center gap-1 text-sm font-semibold text-[var(--color-accent)] group-hover:gap-2 transition-all">
                  Read Article <ArrowRight size={15} />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ALL ARTICLES */}
      <section className="section gradient-warm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">All Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="group card">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider">{post.category}</span>
                  {post.medicallyReviewed && (
                    <span className="text-xs text-green-600 flex items-center gap-0.5"><BadgeCheck size={11} /> Verified</span>
                  )}
                </div>
                <h3 className="font-semibold text-base mb-2 group-hover:text-[var(--color-primary)] transition-colors line-clamp-3">{post.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-[var(--color-text-muted)] border-t border-[var(--color-card-border)] pt-3 mt-auto">
                  <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                  <span className="flex items-center gap-1 text-[var(--color-accent)] font-medium group-hover:gap-1.5 transition-all">Read <ChevronRight size={12} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Have Questions After Reading?</h2>
          <p className="text-white/80 mb-6">Talk to a care coordinator — free, private, and takes 2 minutes.</p>
          <Link href="/book-consultation" className="btn-primary !bg-[var(--color-accent)] !py-4 !px-10 animate-pulse-glow">
            Book Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
