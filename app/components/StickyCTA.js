"use client";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function StickyCTA() {
  return (
    <div className="sticky-cta glass border-t border-[var(--color-card-border)]">
      <a href="tel:+917011473737" className="btn-secondary flex-1 justify-center !py-3 !px-4 !text-sm !border-[var(--color-primary)]">
        <Phone size={16} /> Call Now
      </a>
      <Link href="/book-consultation" className="btn-primary flex-1 justify-center !py-3 !px-4 !text-sm animate-pulse-glow">
        Book Free Consult
      </Link>
    </div>
  );
}
