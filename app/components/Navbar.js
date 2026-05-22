"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/images/logo/logo-icon.png"
              alt="SURGISAATHI logo"
              width={40}
              height={40}
              priority
              className="h-10 w-10 object-contain"
            />
            <span className="text-[var(--color-text-heading)] font-bold text-lg tracking-tight font-[var(--font-display)]">
              SURGI<span className="text-[var(--color-primary)]">SAATHI</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
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
                Surgeries <ChevronDown size={14} />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-[var(--color-card-border)] py-2 animate-fade-in-up">
                  {surgeries.map((s) => (
                    <Link
                      key={s.name}
                      href={s.href}
                      className="block px-4 py-2.5 text-sm text-[var(--color-text-body)] hover:bg-[var(--color-primary)]/5 hover:text-[var(--color-primary)] transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/doctors" className="px-4 py-2 text-sm font-medium text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors rounded-lg hover:bg-[var(--color-primary)]/5">
              Doctors
            </Link>
            <Link href="/hospitals" className="px-4 py-2 text-sm font-medium text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors rounded-lg hover:bg-[var(--color-primary)]/5">
              Hospitals
            </Link>
            <Link href="/insurance" className="px-4 py-2 text-sm font-medium text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors rounded-lg hover:bg-[var(--color-primary)]/5">
              Insurance
            </Link>
            <Link href="/about" className="px-4 py-2 text-sm font-medium text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors rounded-lg hover:bg-[var(--color-primary)]/5">
              About
            </Link>
            <Link href="/blog" className="px-4 py-2 text-sm font-medium text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors rounded-lg hover:bg-[var(--color-primary)]/5">
              Health Guide
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+917011473737" className="flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]">
              <Phone size={16} /> +91 70114 73737
            </a>
            <Link href="/book-consultation" className="btn-primary !py-2.5 !px-6 !text-sm">
              Book Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-[var(--color-text-heading)]" aria-label="Toggle menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-[var(--color-card-border)] animate-fade-in-up">
          <div className="px-4 py-4 space-y-1">
            <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider px-3 pb-2">Surgeries</p>
            {surgeries.map((s) => (
              <Link key={s.name} href={s.href} onClick={() => setOpen(false)} className="block px-3 py-3 text-sm text-[var(--color-text-body)] hover:text-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary)]/5">
                {s.name}
              </Link>
            ))}
            <hr className="my-3 border-[var(--color-card-border)]" />
            <Link href="/doctors" onClick={() => setOpen(false)} className="block px-3 py-3 text-sm font-medium text-[var(--color-text-body)]">Doctors</Link>
            <Link href="/hospitals" onClick={() => setOpen(false)} className="block px-3 py-3 text-sm font-medium text-[var(--color-text-body)]">Hospitals</Link>
            <Link href="/insurance" onClick={() => setOpen(false)} className="block px-3 py-3 text-sm font-medium text-[var(--color-text-body)]">Insurance</Link>
            <Link href="/about" onClick={() => setOpen(false)} className="block px-3 py-3 text-sm font-medium text-[var(--color-text-body)]">About</Link>
            <Link href="/blog" onClick={() => setOpen(false)} className="block px-3 py-3 text-sm font-medium text-[var(--color-text-body)]">Health Guide</Link>
            <hr className="my-3 border-[var(--color-card-border)]" />
            <Link href="/book-consultation" onClick={() => setOpen(false)} className="btn-primary w-full justify-center !text-sm">
              Book Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
