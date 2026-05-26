/** @type {import('next').NextConfig} */
const SECURITY_HEADERS = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    // Allow Next.js inline runtime scripts/styles (Tailwind injects styles),
    // Google Fonts assets used by next/font, and the analytics tags that
    // load only after the visitor grants cookie consent.
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://www.clarity.ms",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: https:",
      "font-src 'self' https://fonts.gstatic.com data:",
      "connect-src 'self' https://script.google.com https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com https://connect.facebook.net https://www.facebook.com https://www.clarity.ms https://*.clarity.ms",
      "frame-src https://www.googletagmanager.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: SECURITY_HEADERS }];
  },
  async redirects() {
    return [
      // Old hardcoded city pages → new dynamic equivalents (301 permanent)
      { source: "/piles-surgery-mumbai", destination: "/mumbai/piles", permanent: true },
      { source: "/piles-surgery-chandigarh", destination: "/chandigarh/piles", permanent: true },
      { source: "/circumcision-surgery-mumbai", destination: "/mumbai/circumcision", permanent: true },
      { source: "/fissure-surgery-mumbai", destination: "/mumbai/fissure", permanent: true },
      { source: "/fissure-treatment-chandigarh", destination: "/chandigarh/fissure", permanent: true },
      { source: "/fissure-surgery-chandigarh", destination: "/chandigarh/fissure", permanent: true },
      { source: "/fistula-surgery-mumbai", destination: "/mumbai/fistula", permanent: true },
      { source: "/fistula-surgery-chandigarh", destination: "/chandigarh/fistula", permanent: true },
    ];
  },
};

export default nextConfig;
