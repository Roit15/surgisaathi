import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import StickyCTA from "./components/StickyCTA";

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

export const metadata = {
  title: "SURGISAATHI — Trusted Care for Sensitive Surgeries",
  description:
    "India's trusted surgery coordination platform for Circumcision, Piles, Fissure, Fistula, Abscess & Pilonidal Sinus. Expert surgeons, transparent pricing, complete support.",
  keywords:
    "laser piles surgery, circumcision surgery, fistula treatment, fissure surgery, pilonidal sinus treatment, best piles doctor, laser surgery India",
  icons: {
    icon: "/images/logo/logo-icon.png",
    apple: "/images/logo/logo-icon.png",
  },
  openGraph: {
    title: "SURGISAATHI — Trusted Care for Sensitive Surgeries",
    description:
      "Book consultations with expert surgeons for Piles, Circumcision, Fissure, Fistula & more. Transparent pricing. Insurance support. Complete care.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/logo/logo-primary.png",
        width: 1024,
        height: 1024,
        alt: "SURGISAATHI Logo",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <StickyCTA />
      </body>
    </html>
  );
}
