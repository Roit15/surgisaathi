import Link from "next/link";
import { Lock, Shield, MessageCircle, ArrowRight, Phone } from "lucide-react";

export const metadata = {
  title: "Patient Stories — Privacy Protected | SURGISAATHI",
  description: "SURGISAATHI does not publish patient testimonials by default. Surgical conditions like piles, circumcision and fistula are sensitive — we share patient stories only with explicit, written consent. If you would like to share or hear from past patients, contact our care team.",
  alternates: { canonical: "/testimonials" },
  robots: { index: false, follow: true },
};

export default function TestimonialsPage() {
  return (
    <div className="pt-16 lg:pt-[72px]">
      {/* HERO */}
      <section className="gradient-hero py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="trust-badge !bg-white/15 !text-white mb-5 inline-flex">
            <Lock size={14} /> Privacy Protected
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Patient Stories on Request
          </h1>
          <p className="text-lg text-white/80">
            We do not publish patient testimonials publicly. Conditions like piles, fistula and circumcision are personal, and we share patient experiences only with written, withdrawable consent — never identifying details.
          </p>
        </div>
      </section>

      {/* WHY */}
      <section className="section bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                  <Shield size={22} className="text-[var(--color-primary)]" />
                </div>
                <div>
                  <h2 className="font-semibold text-lg mb-2">Why we don&rsquo;t publish testimonials</h2>
                  <p className="text-[var(--color-text-body)] leading-relaxed text-sm">
                    Sharing a patient&rsquo;s name, photograph or surgical history alongside a review can identify them indirectly — especially in smaller cities or with rarer conditions. India&rsquo;s DPDP Act 2023, the NMC Code of Ethics, and basic patient dignity all push us toward the same answer: do not publish identifying patient material without explicit, informed, and withdrawable consent.
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={22} className="text-[var(--color-primary)]" />
                </div>
                <div>
                  <h2 className="font-semibold text-lg mb-2">If you want to hear from a past patient</h2>
                  <p className="text-[var(--color-text-body)] leading-relaxed text-sm mb-3">
                    Some of our patients have offered to speak with new patients about their experience. If that would help you decide, mention it during your free consultation and we will see whether a past patient is willing to share — always with their consent and on their terms.
                  </p>
                  <Link href="/book-consultation" className="text-sm font-semibold text-[var(--color-primary)] hover:underline inline-flex items-center gap-1">
                    Ask during a free consultation <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={22} className="text-[var(--color-primary)]" />
                </div>
                <div>
                  <h2 className="font-semibold text-lg mb-2">If you would like to share your story</h2>
                  <p className="text-[var(--color-text-body)] leading-relaxed text-sm">
                    Past patients are welcome to share their experience with us. We will record it only with your written consent, can anonymise it before publishing, and you can withdraw consent at any time. Reach our care team at{" "}
                    <a href="tel:+917011473737" className="text-[var(--color-primary)] font-semibold hover:underline">+91 70114 73737</a>
                    {" "}or{" "}
                    <a href="mailto:support@surgisaathi.com" className="text-[var(--color-primary)] font-semibold hover:underline">support@surgisaathi.com</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to take the first step?</h2>
          <p className="text-white/80 mb-8">A free, private consultation with our care team — no obligation, no judgement.</p>
          <Link
            href="/book-consultation"
            className="btn-primary !bg-[var(--color-accent)] !text-white !py-4 !px-10"
          >
            Book Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
