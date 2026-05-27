import { blogPosts } from "../lib/blog-data";
import { cityData } from "../lib/city-data";
import { surgeryData } from "../lib/surgery-data";

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
  "/abscess-surgery-mumbai",
  "/abscess-surgery-chandigarh",
  "/pilonidal-sinus-surgery-mumbai",
  "/pilonidal-sinus-surgery-chandigarh",
];

const SURGERY_SLUGS = Object.keys(surgeryData);

export default function sitemap() {
  // Use a stable date for static content so Google doesn't think it changes every crawl
  const staticDate = new Date("2026-05-25T00:00:00Z");

  const staticEntries = STATIC_ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: staticDate,
    changeFrequency: "weekly",
    priority: path === "" ? 1.0 : 0.7,
  }));

  const surgeryEntries = SURGERY_SLUGS.map((slug) => ({
    url: `${SITE_URL}/surgeries/${slug}`,
    lastModified: staticDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Programmatic city landing pages
  const cityEntries = Object.keys(cityData).map((citySlug) => ({
    url: `${SITE_URL}/${citySlug}`,
    lastModified: staticDate,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // Programmatic city + surgery landing pages
  const citySurgeryEntries = [];
  for (const citySlug of Object.keys(cityData)) {
    for (const surgerySlug of Object.keys(surgeryData)) {
      citySurgeryEntries.push({
        url: `${SITE_URL}/${citySlug}/${surgerySlug}`,
        lastModified: staticDate,
        changeFrequency: "monthly",
        priority: 0.9,
      });
    }
  }

  // Blog posts — medium priority, highest change frequency
  const blogEntries = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticEntries, ...surgeryEntries, ...cityEntries, ...citySurgeryEntries, ...blogEntries];
}
