import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Calendar, BadgeCheck, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { blogPosts, getBlogPost } from "../../../lib/blog-data";
import JsonLd from "../../components/JsonLd";
import { breadcrumbSchema, SITE_URL } from "../../../lib/seo";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | SURGISAATHI Health Guide`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      url: `/blog/${slug}`,
    },
  };
}

function articleSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${SITE_URL}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.excerpt,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": post.medicallyReviewed ? "Physician" : "Person",
      name: post.author,
      jobTitle: post.authorRole,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    medicalAudience: {
      "@type": "MedicalAudience",
      audienceType: "Patient",
    },
  };
}

function faqSchema(faqs, slug) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/blog/${slug}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prev = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const next = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="pt-16 lg:pt-[72px]">
      <JsonLd
        data={[
          articleSchema(post),
          post.faqs ? faqSchema(post.faqs, slug) : null,
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Health Guide", href: "/blog" },
            { name: post.title },
          ]),
        ].filter(Boolean)}
      />

      {/* ARTICLE HEADER */}
      <section className="bg-white border-b border-[var(--color-card-border)] py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] mb-6">
            <Link href="/" className="hover:text-[var(--color-primary)]">Home</Link>
            <ChevronRight size={12} />
            <Link href="/blog" className="hover:text-[var(--color-primary)]">Health Guide</Link>
            <ChevronRight size={12} />
            <span className="text-[var(--color-text-body)] truncate max-w-[200px]">{post.title}</span>
          </nav>

          <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider mb-4 inline-block">{post.category}</span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">{post.title}</h1>
          <p className="text-lg text-[var(--color-text-muted)] mb-6 leading-relaxed">{post.excerpt}</p>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--color-text-muted)] mb-6">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-sm font-bold text-[var(--color-primary)]">
                {post.author.split(" ").map(n => n[0]).join("").slice(0, 2)}
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--color-text-heading)]">{post.author}</p>
                <p className="text-xs">{post.authorRole}</p>
              </div>
            </div>
            <span className="flex items-center gap-1"><Clock size={13} /> {post.readTime}</span>
            <span className="flex items-center gap-1"><Calendar size={13} /> {new Date(post.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
            {post.medicallyReviewed && (
              <span className="flex items-center gap-1 text-green-600 font-medium"><BadgeCheck size={14} /> Medically reviewed</span>
            )}
          </div>

          {/* Medical disclaimer banner */}
          <div className="bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/20 rounded-xl px-4 py-3">
            <p className="text-xs text-[var(--color-text-muted)]">
              <strong className="text-[var(--color-text-heading)]">Medical Disclaimer:</strong> This article is for informational purposes only and does not constitute medical advice. Always consult a qualified surgeon for diagnosis and treatment. SURGISAATHI connects patients with verified surgeons — <Link href="/book-consultation" className="text-[var(--color-primary)] hover:underline">book a free consultation →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="section bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </div>
      </section>

      {/* FAQ */}
      {post.faqs && post.faqs.length > 0 && (
        <section className="section gradient-warm">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {post.faqs.map((f) => (
                <details key={f.q} className="card group cursor-pointer">
                  <summary className="flex items-center justify-between font-semibold list-none text-[var(--color-text-heading)]">
                    {f.q}
                    <span className="text-[var(--color-text-muted)] ml-3 flex-shrink-0 text-lg group-open:rotate-90 transition-transform">›</span>
                  </summary>
                  <p className="text-sm text-[var(--color-text-body)] mt-3 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* INLINE CTA */}
      <section className="bg-[var(--color-primary)] py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Ready to Take the Next Step?</h3>
            <p className="text-white/75 text-sm">Free private consultation — talk to a care coordinator in 2 minutes.</p>
          </div>
          <Link href="/book-consultation" className="btn-primary !bg-[var(--color-accent)] whitespace-nowrap flex-shrink-0">
            Book Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* NAVIGATION & RELATED */}
      <section className="section bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Prev / Next */}
          <div className="flex justify-between gap-4 mb-12">
            {prev ? (
              <Link href={`/blog/${prev.slug}`} className="group flex-1 card max-w-xs">
                <p className="text-xs text-[var(--color-text-muted)] flex items-center gap-1 mb-2">
                  <ChevronLeft size={12} /> Previous
                </p>
                <p className="text-sm font-semibold group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">{prev.title}</p>
              </Link>
            ) : <div />}
            {next ? (
              <Link href={`/blog/${next.slug}`} className="group flex-1 card max-w-xs text-right">
                <p className="text-xs text-[var(--color-text-muted)] flex items-center justify-end gap-1 mb-2">
                  Next <ChevronRight size={12} />
                </p>
                <p className="text-sm font-semibold group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">{next.title}</p>
              </Link>
            ) : <div />}
          </div>

          {/* Related */}
          <h3 className="text-xl font-bold mb-6">More Health Articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((r) => (
              <Link href={`/blog/${r.slug}`} key={r.slug} className="group card !p-4">
                <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider mb-2 block">{r.category}</span>
                <p className="text-sm font-semibold group-hover:text-[var(--color-primary)] transition-colors line-clamp-3 mb-2">{r.title}</p>
                <p className="text-xs text-[var(--color-text-muted)] flex items-center gap-1"><Clock size={11} /> {r.readTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
