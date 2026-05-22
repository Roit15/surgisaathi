"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown, ArrowRight } from "lucide-react";

const surgeries = [
  { name: "Circumcision", href: "/surgeries/circumcision" },
  { name: "Piles", href: "/surgeries/piles" },
  { name: "Fissure", href: "/surgeries/fissure" },
  { name: "Fistula", href: "/surgeries/fistula" },
  { name: "Abscess", href: "/surgeries/abscess" },
  { name: "Pilonidal Sinus", href: "/surgeries/pilonidal-sinus" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-strong shadow-sm"
          : "glass"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/images/logo/logo-icon.png"
              alt="SURGISAATHI logo"
              width={40}
              height={40}
              priority
              className="h-10 w-10 object-contain group-hover:scale-105 transition-transform"
            />
            <span className="text-[var(--color-text-heading)] font-bold text-lg tracking-tight font-[var(--font-display)]">
              SURGI<span className="text-[var(--color-primary)]">SAATHI</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors rounded-lg hover:bg-[var(--color-primary)]/5"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                aria-label="Surgeries menu"
              >
                Surgeries <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-2xl shadow-xl border border-[var(--color-card-border)] py-2 animate-fade-in-down">
                  {surgeries.map((s) => (
                    <Link
                      key={s.name}
                      href={s.href}
                      className="block px-4 py-2.5 text-sm text-[var(--color-text-body)] hover:bg-[var(--color-primary)]/5 hover:text-[var(--color-primary)] transition-colors mx-1 rounded-lg"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {[
              { name: "Doctors", href: "/doctors" },
              { name: "Hospitals", href: "/hospitals" },
              { name: "Insurance", href: "/insurance" },
              { name: "About", href: "/about" },
              { name: "Health Guide", href: "/blog" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors rounded-lg hover:bg-[var(--color-primary)]/5"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+917011473737" className="flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors">
              <Phone size={16} /> +91 70114 73737
            </a>
            <Link href="/book-consultation" className="btn-primary !py-2.5 !px-6 !text-sm !rounded-xl group">
              Book Free Consultation <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-[var(--color-text-heading)] rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-[var(--color-card-border)] animate-fade-in-down shadow-xl">
          <div className="px-4 py-5 space-y-1">
            <p className="text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-widest px-3 pb-2">Surgeries</p>
            {surgeries.map((s) => (
              <Link key={s.name} href={s.href} onClick={() => setOpen(false)} className="block px-3 py-3 text-sm text-[var(--color-text-body)] hover:text-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary)]/5 transition-colors">
                {s.name}
              </Link>
            ))}
            <hr className="my-3 border-[var(--color-card-border)]" />
            {[
              { name: "Doctors", href: "/doctors" },
              { name: "Hospitals", href: "/hospitals" },
              { name: "Insurance", href: "/insurance" },
              { name: "About", href: "/about" },
              { name: "Health Guide", href: "/blog" },
            ].map((item) => (
              <Link key={item.name} href={item.href} onClick={() => setOpen(false)} className="block px-3 py-3 text-sm font-medium text-[var(--color-text-body)] hover:text-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary)]/5 transition-colors">
                {item.name}
              </Link>
            ))}
            <hr className="my-3 border-[var(--color-card-border)]" />
            <Link href="/book-consultation" onClick={() => setOpen(false)} className="btn-primary w-full justify-center !text-sm !rounded-xl">
              Book Free Consultation <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
