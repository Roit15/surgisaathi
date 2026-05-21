import { blogPosts } from "../lib/blog-data";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://surgisaathi.com";

const STATIC_ROUTES = [
  "",
  "/about",
  "/book-consultation",
  "/contact",
  "/doctors",
  "/hospitals",
  "/insurance",
  "/partner",
  "/testimonials",
  "/surgeries",
  "/faq",
  "/blog",
  "/privacy",
  "/terms",
  "/refund",
];

const SURGERY_SLUGS = [
  "circumcision",
  "piles",
  "fissure",
  "fistula",
  "abscess",
  "pilonidal-sinus",
];

// City-specific landing pages — high-priority for SEO
const CITY_PAGES = [
  "/piles-surgery-mumbai",
  "/piles-surgery-chandigarh",
  "/circumcision-surgery-mumbai",
  "/fissure-treatment-chandigarh",
];

export default function sitemap() {
  const now = new Date();

  const staticEntries = STATIC_ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1.0 : 0.7,
  }));

  const surgeryEntries = SURGERY_SLUGS.map((slug) => ({
    url: `${SITE_URL}/surgeries/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // City landing pages — high priority (local SEO targets)
  const cityEntries = CITY_PAGES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // Blog posts — medium priority, highest change frequency
  const blogEntries = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticEntries, ...surgeryEntries, ...cityEntries, ...blogEntries];
}
