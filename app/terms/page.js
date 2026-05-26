import Link from "next/link";

export const metadata = {
  title: "Terms of Service ",
  description: "Terms governing the use of the SURGISAATHI surgery coordination platform, including limitations of liability and user obligations.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="pt-16 lg:pt-[72px]">
      <section className="gradient-hero py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3">Terms of Service</h1>
          <p className="text-white/80 text-sm">Last updated: May 2026</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-sm leading-relaxed text-[var(--color-text-body)]">
          <p>
            By using surgisaathi.com you agree to these Terms of Service. If you do not
            agree, please do not use the site.
          </p>

          <div>
            <h2 className="text-xl font-bold mb-2">1. What SURGISAATHI is</h2>
            <p>
              SURGISAATHI is a surgery coordination platform that connects patients with
              independent, verified surgeons and accredited hospitals for sensitive
              procedures. SURGISAATHI itself does not provide medical advice, diagnosis or
              treatment. All clinical care is delivered by the treating surgeon and
              hospital.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">2. Bookings and consultations</h2>
            <p>
              Information shared on our forms is used to schedule a consultation. Final
              eligibility, treatment plan, and pricing are determined by the consulting
              doctor after physical examination and tests. Quoted price ranges on the site
              are indicative.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">3. Acceptable use</h2>
            <p>
              You agree not to submit false information, automated submissions, abusive
              content, or another person&apos;s details without their consent. We may block
              or rate-limit access to protect the platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">4. Disclaimers</h2>
            <p>
              The site is provided on an &ldquo;as is&rdquo; basis. We do not guarantee
              specific clinical outcomes, recovery times, or insurance approvals. Statistics
              and testimonials reflect historical results and are not a promise of future
              outcomes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">5. Limitation of liability</h2>
            <p>
              To the maximum extent permitted by Indian law, SURGISAATHI is not liable for
              any indirect, incidental, or consequential loss arising from use of the site
              or the underlying clinical services delivered by third-party providers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">6. Intellectual property</h2>
            <p>
              All branding, design and content on the site is owned by SURGISAATHI
              Healthcare Pvt. Ltd. unless otherwise stated. Reproduction without permission
              is prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">7. Governing law</h2>
            <p>
              These terms are governed by the laws of India. Any dispute will be subject to
              the exclusive jurisdiction of the courts at Mumbai.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">8. Contact</h2>
            <p>
              Questions:{" "}
              <a className="text-[var(--color-primary)] underline" href="mailto:support@surgisaathi.com">
                support@surgisaathi.com
              </a>
              .
            </p>
          </div>

          <p className="text-xs text-[var(--color-text-muted)]">
            See also our <Link className="underline" href="/privacy">Privacy Policy</Link> and{" "}
            <Link className="underline" href="/refund">Refund Policy</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
