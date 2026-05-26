const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://surgisaathi.com";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/*?lang="],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
