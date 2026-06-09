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
  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [{ source: "/:path*", headers: SECURITY_HEADERS }];
  },
  async redirects() {
    return [
      { source: "/mumbai/piles", destination: "/piles-surgery-mumbai", permanent: true },
      { source: "/chandigarh/piles", destination: "/piles-surgery-chandigarh", permanent: true },
      { source: "/mumbai/fissure", destination: "/fissure-surgery-mumbai", permanent: true },
      { source: "/chandigarh/fissure", destination: "/fissure-surgery-chandigarh", permanent: true },
      { source: "/mumbai/fistula", destination: "/fistula-surgery-mumbai", permanent: true },
      { source: "/chandigarh/fistula", destination: "/fistula-surgery-chandigarh", permanent: true },
      { source: "/mumbai/circumcision", destination: "/circumcision-surgery-mumbai", permanent: true },
      { source: "/chandigarh/circumcision", destination: "/circumcision-surgery-chandigarh", permanent: true },
      { source: "/mumbai/abscess", destination: "/abscess-surgery-mumbai", permanent: true },
      { source: "/chandigarh/abscess", destination: "/abscess-surgery-chandigarh", permanent: true },
      { source: "/mumbai/pilonidal-sinus", destination: "/pilonidal-sinus-surgery-mumbai", permanent: true },
      { source: "/chandigarh/pilonidal-sinus", destination: "/pilonidal-sinus-surgery-chandigarh", permanent: true },
      { source: "/fissure-treatment-chandigarh", destination: "/fissure-surgery-chandigarh", permanent: true },
    ];
  },
};

export default nextConfig;
