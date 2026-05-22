import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import StickyCTA from "./components/StickyCTA";
import JsonLd from "./components/JsonLd";
import Analytics from "./components/analytics/Analytics";
import ConsentBanner from "./components/analytics/ConsentBanner";
import { organizationSchema, websiteSchema, aggregateRatingSchema, SITE_URL } from "../lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const SITE_TITLE =
  "Laser Piles & Surgery in Mumbai & Chandigarh | SURGISAATHI";
const SITE_DESCRIPTION =
  "Same-day consultation available. Expert laser surgery for piles, circumcision, fissure & fistula in Mumbai & Chandigarh. Verified surgeons, from ₹25,000, cashless insurance. Call +91 70114 73737.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | SURGISAATHI",
  },
  description: SITE_DESCRIPTION,
  applicationName: "SURGISAATHI",
  alternates: { canonical: "/" },
  openGraph: {
    siteName: "SURGISAATHI",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    images: [
      {
        url: "/images/og/og-home.png",
        width: 1200,
        height: 630,
        alt: "SURGISAATHI — Expert Laser Surgery in Mumbai & Chandigarh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/images/og/og-home.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body>
        <JsonLd data={[organizationSchema(), websiteSchema(), aggregateRatingSchema()]} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <StickyCTA />
        <ConsentBanner />
        <Analytics />
      </body>
    </html>
  );
}
