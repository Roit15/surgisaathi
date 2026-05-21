import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";


const surgeryLinks = [
  { name: "Circumcision", href: "/surgeries/circumcision" },
  { name: "Piles Treatment", href: "/surgeries/piles" },
  { name: "Fissure Surgery", href: "/surgeries/fissure" },
  { name: "Fistula Surgery", href: "/surgeries/fistula" },
  { name: "Abscess Drainage", href: "/surgeries/abscess" },
  { name: "Pilonidal Sinus", href: "/surgeries/pilonidal-sinus" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Partner With Us", href: "/partner" },
  { name: "Contact", href: "/contact" },
  { name: "FAQ", href: "/faq" },
];

const patientLinks = [
  { name: "Find Doctors", href: "/doctors" },
  { name: "Find Hospitals", href: "/hospitals" },
  { name: "Surgeries", href: "/surgeries" },
  { name: "Insurance Support", href: "/insurance" },
  { name: "Health Guide (Blog)", href: "/blog" },
  { name: "Book Consultation", href: "/book-consultation" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary-dark)] text-white/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <Image
                src="/images/logo/logo-icon.png"
                alt="SURGISAATHI logo"
                width={40}
                height={40}
                className="h-10 w-10 rounded-xl object-contain"
              />
              <span className="font-bold text-xl tracking-tight text-white font-[var(--font-display)]">
                SURGI<span className="text-[var(--color-accent)]">SAATHI</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-white/60">
              Trusted Care for Sensitive Surgeries. Expert surgeons, transparent pricing, and complete surgery coordination.
            </p>
            <div className="space-y-3">
              <a href="tel:+917011473737" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <Phone size={14} /> +91 70114 73737
              </a>
              <a href="mailto:support@surgisaathi.com" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <Mail size={14} /> support@surgisaathi.com
              </a>
              <span className="flex items-center gap-2 text-sm">
                <MapPin size={14} /> Mumbai & Chandigarh
              </span>
            </div>
          </div>

          {/* Surgeries */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Surgeries</h4>
            <ul className="space-y-3">
              {surgeryLinks.map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="text-sm hover:text-white transition-colors">{l.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Patients */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">For Patients</h4>
            <ul className="space-y-3">
              {patientLinks.map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="text-sm hover:text-white transition-colors">{l.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="text-sm hover:text-white transition-colors">{l.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">© 2026 SURGISAATHI Healthcare Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-white/40">
            <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/60 transition-colors">Terms of Service</Link>
            <Link href="/refund" className="hover:text-white/60 transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
