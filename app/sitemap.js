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
  return [...staticEntries, ...surgeryEntries];
}
