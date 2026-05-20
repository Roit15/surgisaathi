import Link from "next/link";

export const metadata = {
  title: "Refund & Cancellation Policy | SURGISAATHI",
  description: "How refunds, cancellations, and reschedules work at SURGISAATHI — timelines, processing details, and exceptions.",
  alternates: { canonical: "/refund" },
};

export default function RefundPage() {
  return (
    <div className="pt-16 lg:pt-[72px]">
      <section className="gradient-hero py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3">Refund &amp; Cancellation Policy</h1>
          <p className="text-white/80 text-sm">Last updated: May 2026</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-sm leading-relaxed text-[var(--color-text-body)]">
          <p>
            We want every patient to feel safe choosing SURGISAATHI. This page explains how
            consultations, deposits, and surgery payments can be refunded or rescheduled.
          </p>

          <div>
            <h2 className="text-xl font-bold mb-2">1. Free initial consultation</h2>
            <p>
              The first phone or video consultation with our care coordinator is free.
              There is nothing to refund at this stage.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">2. Booking deposit</h2>
            <p>
              Any booking deposit collected to confirm a surgery slot is fully refundable
              if you cancel at least 48 hours before the scheduled date. Cancellations
              within 48 hours may be subject to a hospital cancellation charge that we will
              communicate to you up front.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">3. Surgery package</h2>
            <p>
              If surgery is cancelled by the doctor on medical grounds, you receive a full
              refund of any pre-paid amount. If you cancel for personal reasons before
              admission, refunds are processed less any pre-operative investigations
              already completed.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">4. Refund timelines</h2>
            <p>
              Refunds are initiated within 3 business days of approval and typically reach
              your account within 7-10 business days, depending on your bank or card
              issuer.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">5. How to request a refund</h2>
            <p>
              Email{" "}
              <a className="text-[var(--color-primary)] underline" href="mailto:support@surgisaathi.com">
                support@surgisaathi.com
              </a>{" "}
              with your booking ID. Our team will respond within 1 business day.
            </p>
          </div>

          <p className="text-xs text-[var(--color-text-muted)]">
            See also our <Link className="underline" href="/privacy">Privacy Policy</Link> and{" "}
            <Link className="underline" href="/terms">Terms of Service</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
