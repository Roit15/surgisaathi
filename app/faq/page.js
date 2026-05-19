export const metadata = {
  title: "Frequently Asked Questions | SURGISAATHI",
  description: "Common questions about laser surgery, costs, insurance, recovery, and the SURGISAATHI process.",
};

const faqs = [
  {
    q: "Is the consultation really free?",
    a: "Yes. The first phone or video consultation with our care coordinator is completely free. We'll understand your condition, recommend the right surgeon, and share a transparent cost estimate before you commit to anything.",
  },
  {
    q: "Are laser surgeries safe?",
    a: "Laser surgical procedures are minimally invasive, performed by experienced surgeons in NABH-accredited hospitals, and offer significantly less pain and faster recovery than traditional methods. Risks exist with any surgery, and your surgeon will walk you through them in detail.",
  },
  {
    q: "Will my insurance cover the surgery?",
    a: "Most Indian health insurance policies cover these procedures. Our insurance team checks eligibility, handles pre-authorisation, and coordinates cashless processing wherever possible.",
  },
  {
    q: "How long does recovery take?",
    a: "Most patients return to desk work in 2-4 days. Full recovery depends on the procedure and individual factors and typically takes 1-3 weeks.",
  },
  {
    q: "How private is my information?",
    a: "Your health information is shared only with the treating doctor, the hospital, and our internal care coordinators. We do not sell or share your data with advertisers. See our Privacy Policy for full details.",
  },
  {
    q: "What if I need to cancel or reschedule?",
    a: "Free reschedule any time before 48 hours of the surgery date. Cancellations within 48 hours may incur a hospital charge. Full details are in our Refund Policy.",
  },
];

export default function FAQPage() {
  return (
    <div className="pt-16 lg:pt-[72px]">
      <section className="gradient-hero py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3">Frequently Asked Questions</h1>
          <p className="text-white/80 text-sm">Quick answers about consultations, surgery, insurance, and recovery.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {faqs.map((item) => (
            <details key={item.q} className="card !p-5 group">
              <summary className="cursor-pointer list-none font-semibold flex items-start justify-between gap-4">
                <span>{item.q}</span>
                <span className="text-[var(--color-primary)] text-xl leading-none transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-[var(--color-text-muted)] leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
