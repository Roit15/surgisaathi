import Link from "next/link";
import { Shield, CheckCircle2, ArrowRight, Phone, FileCheck, Clock, HelpCircle, ChevronRight } from "lucide-react";
import InsuranceChecker from "../components/InsuranceChecker";

export const metadata = {
  title: "Cashless Insurance for Surgery — Claims & Pre-Authorisation",
  description: "Cashless insurance support for laser piles, circumcision, fistula and pilonidal sinus surgery. Pre-authorisation, claim assistance, and tie-ups with leading Indian insurers.",
  alternates: { canonical: "/insurance" },
};

const insurers = [
  "Star Health", "HDFC Ergo", "ICICI Lombard", "Bajaj Allianz", "New India Assurance",
  "Max Bupa", "Care Health", "Niva Bupa", "Aditya Birla Health", "ManipalCigna",
  "Tata AIG", "Cholamandalam", "National Insurance", "United India Insurance",
];

const covered = [
  { name: "Laser Piles Surgery", status: "Covered", note: "Grade 2-4 hemorrhoids" },
  { name: "Laser Circumcision", status: "Covered", note: "Medical necessity (phimosis)" },
  { name: "Laser Fissure Surgery", status: "Covered", note: "Chronic fissure" },
  { name: "Laser Fistula Surgery", status: "Covered", note: "All types" },
  { name: "Abscess Drainage", status: "Covered", note: "Emergency/elective" },
  { name: "Pilonidal Sinus Surgery", status: "Covered", note: "All cases" },
];

export default function InsurancePage() {
  return (
    <div className="pt-16 lg:pt-[72px]">
      <section className="gradient-hero py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">Complete Insurance Support</h1>
          <p className="text-lg text-white/80 max-w-2xl">Don't pay out of pocket. Most surgeries are covered by insurance. We handle the entire claim process — from pre-auth to settlement.</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="tel:+917011473737" className="btn-secondary !border-white/30 !text-white hover:!bg-white/10 !py-4 !px-8 inline-flex justify-center items-center gap-2">
              <Phone size={18} /> Talk to Insurance Expert
            </a>
          </div>
        </div>
      </section>

      {/* INSURANCE CHECKER WIDGET */}
      <section className="section bg-[var(--color-bg-warm)] -mt-12 relative z-10 pb-0">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <InsuranceChecker />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center">How Insurance Works with SURGISAATHI</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Share Your Policy Details", desc: "Tell us your insurer and policy number during booking", icon: FileCheck },
              { step: "2", title: "We Check Eligibility", desc: "Our team verifies coverage for your specific procedure", icon: Shield },
              { step: "3", title: "Pre-Authorization Filed", desc: "We submit pre-auth to your TPA before surgery", icon: Clock },
              { step: "4", title: "Cashless Surgery", desc: "Walk in, get treated. We handle the paperwork", icon: CheckCircle2 },
            ].map((s) => (
              <div key={s.step} className="flex items-start gap-4 p-5 bg-[var(--color-bg-warm)] rounded-xl">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{s.step}</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE TABLE */}
      <section className="section gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center">Surgery Insurance Coverage</h2>
          <div className="bg-white rounded-2xl overflow-hidden border border-[var(--color-card-border)]">
            <table className="w-full">
              <thead>
                <tr className="bg-[var(--color-primary)]/5">
                  <th className="text-left px-6 py-4 text-sm font-semibold">Surgery</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold">Status</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold">Condition</th>
                </tr>
              </thead>
              <tbody>
                {covered.map((c) => (
                  <tr key={c.name} className="border-t border-[var(--color-card-border)]">
                    <td className="px-6 py-4 text-sm font-medium">{c.name}</td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-semibold text-[var(--color-success)] bg-[var(--color-success)]/10 px-3 py-1 rounded-full">✓ {c.status}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-[var(--color-text-muted)]">{c.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* INSURER PARTNERS */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Insurance Partners</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {insurers.map((p) => (
              <div key={p} className="bg-[var(--color-bg-warm)] px-5 py-3 rounded-xl text-sm font-medium text-[var(--color-text-body)] border border-[var(--color-card-border)]">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not Sure About Your Insurance?</h2>
          <p className="text-white/80 mb-8">Our insurance experts will check your policy and guide you through the entire process — absolutely free.</p>
          <Link href="/book-consultation" className="btn-primary !bg-[var(--color-accent)] !py-4 !px-10 animate-pulse-glow">
            Check My Insurance Free <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
