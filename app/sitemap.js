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
];

const SURGERY_SLUGS = Object.keys(surgeryData);

// Old hardcoded city pages (still useful for redirects, but keeping them just in case)
const OLD_CITY_PAGES = [
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

  // Old hardcoded city landing pages
  const oldCityEntries = OLD_CITY_PAGES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Programmatic city landing pages
  const cityEntries = Object.keys(cityData).map((citySlug) => ({
    url: `${SITE_URL}/${citySlug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // Programmatic city + surgery landing pages
  const citySurgeryEntries = [];
  for (const citySlug of Object.keys(cityData)) {
    for (const surgerySlug of Object.keys(surgeryData)) {
      citySurgeryEntries.push({
        url: `${SITE_URL}/${citySlug}/${surgerySlug}`,
        lastModified: now,
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

  return [...staticEntries, ...surgeryEntries, ...oldCityEntries, ...cityEntries, ...citySurgeryEntries, ...blogEntries];
}
