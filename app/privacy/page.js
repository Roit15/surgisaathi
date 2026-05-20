import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | SURGISAATHI",
  description: "How SURGISAATHI collects, uses, stores, and protects your personal and health information under the DPDP Act 2023.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="pt-16 lg:pt-[72px]">
      <section className="gradient-hero py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3">Privacy Policy</h1>
          <p className="text-white/80 text-sm">Last updated: May 2026</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-sm prose-stone">
          <p>
            SURGISAATHI Healthcare Pvt. Ltd. (&ldquo;SURGISAATHI&rdquo;, &ldquo;we&rdquo;,
            &ldquo;our&rdquo;) is committed to protecting the privacy of the people who
            entrust us with sensitive health information. This Privacy Policy explains what
            personal data we collect, why we collect it, and the choices you have. It is
            written to comply with the Digital Personal Data Protection Act, 2023 of India.
          </p>

          <h2 className="mt-8 mb-3 text-xl font-bold">1. Information we collect</h2>
          <p>When you use our consultation or contact forms we collect:</p>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>Your name and phone number.</li>
            <li>Optional email address.</li>
            <li>The procedure you are enquiring about and your city.</li>
            <li>Your preferred contact channel (call, WhatsApp, or email).</li>
            <li>The free-text message you submit, if any.</li>
          </ul>

          <h2 className="mt-8 mb-3 text-xl font-bold">2. How we use it</h2>
          <p>
            We use your information solely to respond to your enquiry, coordinate your
            consultation, manage your surgery (if you proceed), and follow up after care.
            We never sell your data or use it for unrelated marketing without your explicit
            opt-in.
          </p>

          <h2 className="mt-8 mb-3 text-xl font-bold">3. Sharing</h2>
          <p>
            We share only the minimum information required with the surgeon and hospital
            you choose. Our internal coordinators may also see your lead so they can call
            you. We do not share your data with advertisers or data brokers.
          </p>

          <h2 className="mt-8 mb-3 text-xl font-bold">4. Storage and security</h2>
          <p>
            Your data is stored in operationally-controlled systems with access limited to
            authorised staff. We use HTTPS in transit, signed webhooks to our internal
            tooling, and least-privilege access controls. We retain leads only as long as
            necessary to coordinate your care and meet regulatory obligations, after which
            we delete them.
          </p>

          <h2 className="mt-8 mb-3 text-xl font-bold">5. Your rights</h2>
          <p>
            Under the DPDP Act, 2023 you have the right to access, correct, and erase your
            personal data, and to withdraw consent at any time. Write to{" "}
            <a className="text-[var(--color-primary)] underline" href="mailto:support@surgisaathi.com">
              support@surgisaathi.com
            </a>{" "}
            and we will respond within 30 days.
          </p>

          <h2 className="mt-8 mb-3 text-xl font-bold">6. Children</h2>
          <p>
            Our services are intended for adults aged 18 and over. If you believe a minor
            has submitted a form, contact us immediately and we will delete the record.
          </p>

          <h2 className="mt-8 mb-3 text-xl font-bold">7. Updates to this policy</h2>
          <p>
            We may update this policy from time to time. Material changes will be flagged
            on this page with a new &ldquo;Last updated&rdquo; date.
          </p>

          <h2 className="mt-8 mb-3 text-xl font-bold">8. Contact</h2>
          <p>
            Privacy questions:{" "}
            <a className="text-[var(--color-primary)] underline" href="mailto:support@surgisaathi.com">
              support@surgisaathi.com
            </a>{" "}
            · Phone:{" "}
            <a className="text-[var(--color-primary)] underline" href="tel:+917011473737">
              +91 70114 73737
            </a>
            .
          </p>

          <p className="mt-10 text-xs text-[var(--color-text-muted)]">
            See also our{" "}
            <Link className="underline" href="/terms">Terms of Service</Link> and{" "}
            <Link className="underline" href="/refund">Refund Policy</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
