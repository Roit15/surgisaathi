import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Clock, IndianRupee, ArrowRight, Phone, Zap, ChevronRight, Building2, ShieldCheck } from "lucide-react";
import JsonLd from "../../components/JsonLd";
import {
  medicalProcedureSchema,
  faqPageSchema,
  breadcrumbSchema,
} from "../../../lib/seo";

const surgeryData = {
  circumcision: {
    title: "Laser Circumcision Surgery",
    subtitle: "Safe laser circumcision with same-day discharge and minimal discomfort",
    priceRange: "₹25,000 – ₹42,500",
    recovery: "3-5 days",
    duration: "20-30 minutes",
    hospital: "Day-care procedure",
    description: "Circumcision is the surgical removal of the foreskin covering the tip of the penis. Laser circumcision is a modern, minimally invasive technique that uses laser energy for precise cutting with minimal bleeding and faster healing.",
    symptoms: ["Phimosis (tight foreskin)", "Paraphimosis", "Recurrent infections", "Balanitis", "Difficulty in hygiene maintenance", "Religious or cultural reasons"],
    treatments: [
      { name: "Laser Circumcision", pros: ["Minimal bleeding", "Faster healing", "Less pain", "Same-day discharge"], recommended: true },
      { name: "Stapler Circumcision", pros: ["Quick procedure", "Uniform cut", "Less pain", "Good cosmetic result"], recommended: false },
      { name: "Conventional Surgery", pros: ["Lower cost", "Widely available"], recommended: false },
    ],
    steps: ["Consultation & Assessment", "Pre-operative tests", "Local/general anesthesia", "Laser removal of foreskin", "Dressing & discharge (same day)", "Follow-up in 3-5 days"],
    faqs: [
      { q: "Is laser circumcision painful?", a: "The procedure is performed under anesthesia, so you won't feel pain during surgery. Post-operative discomfort is minimal and managed with prescribed medications." },
      { q: "How long does recovery take?", a: "Most patients recover within 3-5 days and can resume normal activities. Complete healing typically takes 2-3 weeks." },
      { q: "Is it covered by insurance?", a: "Yes, circumcision for medical reasons (phimosis, recurrent infections) is covered by most health insurance policies." },
      { q: "What is the success rate?", a: "Laser circumcision is a well-established technique with a high success rate when performed by experienced surgeons. Complication rates are low, but every surgery carries some risk — your surgeon will explain risks specific to your case during consultation." },
    ],
  },
  piles: {
    title: "Laser Piles Surgery",
    subtitle: "Minimally invasive laser treatment for hemorrhoids with rapid recovery",
    priceRange: "₹36,000 – ₹80,000",
    recovery: "2-3 days",
    duration: "30-45 minutes",
    hospital: "Day-care procedure",
    description: "Piles (hemorrhoids) are swollen blood vessels in the rectal area. Laser piles surgery uses focused laser energy to shrink hemorrhoidal tissue with minimal pain and bleeding, offering a significantly faster recovery than traditional surgery.",
    symptoms: ["Bleeding during bowel movements", "Itching or irritation around the anus", "Pain or discomfort while sitting", "Swelling around the anus", "A lump near the anus", "Mucus discharge"],
    treatments: [
      { name: "Laser Hemorrhoidoplasty", pros: ["Minimal pain", "No cuts or stitches", "30-min procedure", "Same-day discharge"], recommended: true },
      { name: "Stapler Hemorrhoidopexy", pros: ["Less post-op pain", "Quick recovery", "Good for prolapsed piles"], recommended: false },
      { name: "Open Hemorrhoidectomy", pros: ["Lower cost", "Suitable for grade 4"], recommended: false },
    ],
    steps: ["Proctoscopy examination", "Pre-operative blood tests", "Spinal/local anesthesia", "Laser shrinkage of hemorrhoids", "Observation & discharge (same day)", "Follow-up in 2-3 days"],
    faqs: [
      { q: "Can piles be treated without surgery?", a: "Grade 1-2 piles can often be managed with lifestyle changes and medication. Grade 3-4 piles typically require surgical intervention for lasting relief." },
      { q: "Will piles come back after laser surgery?", a: "Laser surgery has a very low recurrence rate (less than 5%) when performed by experienced surgeons and combined with lifestyle modifications." },
      { q: "Is laser piles surgery covered by insurance?", a: "Yes, piles surgery is covered by most health insurance policies as it is considered a medically necessary procedure." },
      { q: "How soon can I return to work?", a: "Most patients return to desk work within 2-3 days. Physical labor may require 1-2 weeks of rest." },
    ],
  },
  fissure: {
    title: "Laser Fissure Treatment",
    subtitle: "Advanced laser surgery for anal fissure with minimal discomfort",
    priceRange: "₹30,000 – ₹60,000",
    recovery: "3-5 days",
    duration: "20-30 minutes",
    hospital: "Day-care procedure",
    description: "An anal fissure is a small tear in the lining of the anus. Laser fissure treatment uses controlled laser energy to heal the fissure and relax the internal sphincter muscle, providing lasting relief with minimal pain.",
    symptoms: ["Sharp pain during bowel movements", "Bleeding with stools", "Visible crack or tear", "Itching around the anus", "Muscle spasm after passing stool", "Pain lasting hours after bowel movement"],
    treatments: [
      { name: "Laser Sphincterotomy", pros: ["Minimal pain", "Precise treatment", "Fast recovery", "Low recurrence"], recommended: true },
      { name: "Lateral Internal Sphincterotomy", pros: ["Well-established technique", "Widely available"], recommended: false },
      { name: "Medical Management", pros: ["Non-surgical", "First-line treatment"], recommended: false },
    ],
    steps: ["Clinical examination", "Pre-operative assessment", "Anesthesia administration", "Laser treatment of fissure", "Same-day discharge", "Follow-up in 3-5 days"],
    faqs: [
      { q: "When should I consider surgery for fissure?", a: "Surgery is recommended for chronic fissures (lasting more than 6-8 weeks) that haven't responded to medication and dietary changes." },
      { q: "Is the laser treatment permanent?", a: "Laser treatment offers a high success rate for chronic fissures when combined with post-operative dietary changes. Recurrence is uncommon but not impossible; your surgeon will explain expected outcomes for your specific case." },
      { q: "Will I have incontinence after surgery?", a: "No. Laser sphincterotomy is precisely controlled, preserving sphincter function. The risk of incontinence is extremely low with experienced surgeons." },
      { q: "Is it covered by insurance?", a: "Yes, fissure surgery is covered by most health insurance plans when deemed medically necessary." },
    ],
  },
  fistula: {
    title: "Laser Fistula Surgery",
    subtitle: "Sphincter-preserving laser treatment for anal fistula",
    priceRange: "₹40,000 – ₹85,000",
    recovery: "5-7 days",
    duration: "45-60 minutes",
    hospital: "Day-care / 1-day stay",
    description: "An anal fistula is an abnormal tunnel between the anal canal and the skin near the anus. Laser fistula surgery (FiLaC) uses radial laser energy to close the fistula tract from inside, preserving sphincter muscle and reducing recurrence.",
    symptoms: ["Persistent anal pain", "Swelling near the anus", "Pus or blood discharge", "Recurrent abscess", "Fever with anal symptoms", "Difficulty sitting"],
    treatments: [
      { name: "FiLaC (Laser Fistula)", pros: ["Sphincter-preserving", "Minimal scarring", "Low recurrence", "Quick recovery"], recommended: true },
      { name: "VAAFT", pros: ["Video-assisted", "Precise identification", "Sphincter-sparing"], recommended: false },
      { name: "Fistulotomy", pros: ["Simple technique", "High success for simple fistula"], recommended: false },
    ],
    steps: ["MRI fistulogram (if needed)", "Pre-operative blood work", "Anesthesia administration", "Laser closure of fistula tract", "Monitoring & discharge", "Follow-up in 5-7 days"],
    faqs: [
      { q: "Can fistula heal without surgery?", a: "Unfortunately, anal fistulas rarely heal on their own. Surgery is the most effective treatment for permanent resolution." },
      { q: "What's the advantage of laser over conventional surgery?", a: "Laser treatment preserves the sphincter muscle (reducing incontinence risk), causes less pain, and has faster recovery compared to traditional fistulotomy." },
      { q: "Will the fistula come back?", a: "With advanced laser techniques like FiLaC, recurrence rates are significantly lower (5-10%) compared to traditional methods." },
      { q: "Is insurance applicable?", a: "Yes, fistula surgery is covered under most insurance policies. Our team handles the complete insurance process for you." },
    ],
  },
  abscess: {
    title: "Abscess Drainage Surgery",
    subtitle: "Quick, safe abscess drainage with expert surgical care",
    priceRange: "₹18,000 – ₹40,000",
    recovery: "2-3 days",
    duration: "15-20 minutes",
    hospital: "Day-care procedure",
    description: "A perianal abscess is a painful, pus-filled cavity near the anus. Surgical drainage is the standard treatment, providing immediate pain relief. Modern techniques ensure minimal scarring and faster healing.",
    symptoms: ["Severe pain near the anus", "Swelling and redness", "Fever and chills", "Pus discharge", "Difficulty sitting", "General malaise"],
    treatments: [
      { name: "Incision & Drainage", pros: ["Immediate relief", "Quick procedure", "Outpatient"], recommended: true },
      { name: "Drainage with Fistula Prevention", pros: ["Reduces fistula risk", "Comprehensive treatment"], recommended: false },
    ],
    steps: ["Emergency assessment", "Imaging if needed", "Local/general anesthesia", "Incision and drainage", "Wound packing & dressing", "Follow-up in 2-3 days"],
    faqs: [
      { q: "Is abscess drainage urgent?", a: "Yes, perianal abscesses should be treated promptly to prevent complications. Delayed treatment can lead to fistula formation or systemic infection." },
      { q: "Can an abscess be treated with antibiotics alone?", a: "Antibiotics alone are usually insufficient. Surgical drainage is necessary to remove the pus and allow healing." },
      { q: "Will the abscess come back?", a: "With proper drainage and post-operative care, recurrence is less common. About 30-50% of abscesses may develop into a fistula, which we monitor and treat proactively." },
      { q: "Is insurance applicable?", a: "Yes, abscess drainage is covered by most insurance policies, especially when deemed medically urgent." },
    ],
  },
  "pilonidal-sinus": {
    title: "Pilonidal Sinus Laser Surgery",
    subtitle: "Advanced laser treatment for pilonidal sinus with no recurrence",
    priceRange: "₹30,000 – ₹70,000",
    recovery: "5-7 days",
    duration: "30-45 minutes",
    hospital: "Day-care procedure",
    description: "A pilonidal sinus is an abnormal skin growth containing hair and debris, usually near the tailbone. Laser surgery (SiLaC) uses radial laser energy to destroy the sinus tract without extensive cutting, resulting in minimal scarring.",
    symptoms: ["Pain at the tailbone area", "Swelling above the buttocks", "Redness and tenderness", "Pus or blood drainage", "Foul-smelling discharge", "Recurrent infections"],
    treatments: [
      { name: "SiLaC (Laser Treatment)", pros: ["Minimal incision", "Low recurrence", "Quick recovery", "Less scarring"], recommended: true },
      { name: "Excision with Flap", pros: ["Comprehensive removal", "Suitable for complex cases"], recommended: false },
      { name: "Open Excision", pros: ["Simple technique", "Widely available"], recommended: false },
    ],
    steps: ["Clinical examination", "Pre-operative assessment", "Anesthesia administration", "Laser ablation of sinus tract", "Minimal wound closure", "Follow-up in 5-7 days"],
    faqs: [
      { q: "Can pilonidal sinus heal without surgery?", a: "While small, early-stage cases may respond to conservative treatment, most pilonidal sinuses require surgical intervention for permanent resolution." },
      { q: "What's the advantage of laser treatment?", a: "Laser treatment involves minimal cutting, preserves surrounding tissue, has lower recurrence rates, and allows faster return to daily activities compared to open surgery." },
      { q: "Will it recur after laser surgery?", a: "Laser surgery has a significantly lower recurrence rate (around 5-8%) compared to conventional surgery (15-30%). Following post-operative hygiene advice further reduces this risk." },
      { q: "Is insurance applicable?", a: "Yes, pilonidal sinus surgery is covered by most health insurance policies. Our insurance desk manages the entire claim process." },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(surgeryData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const p = await params;
  const data = surgeryData[p.slug];
  if (!data) return {};
  const path = `/surgeries/${p.slug}`;
  return {
    title: `${data.title} — Cost ${data.priceRange}, Recovery & Verified Surgeons`,
    description: `${data.subtitle}. Starting at ${data.priceRange}. Book a free consultation with verified surgeons in Mumbai & Chandigarh. Cashless insurance support. ☎ +91 70114 73737`,
    alternates: { canonical: path },
    openGraph: {
      title: `${data.title} | SURGISAATHI`,
      description: `${data.subtitle}. Starting at ${data.priceRange}.`,
      url: path,
    },
  };
}

export default async function SurgeryPage({ params }) {
  const p = await params;
  const data = surgeryData[p.slug];

  if (!data) {
    notFound();
  }

  const path = `/surgeries/${p.slug}`;
  const shortName = data.title.replace("Laser ", "").replace(" Surgery", "");

  return (
    <div className="pt-16 lg:pt-[72px]">
      <JsonLd
        data={[
          medicalProcedureSchema({ slug: p.slug, data, path }),
          faqPageSchema(data.faqs, path),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Surgeries", href: "/surgeries" },
            { name: shortName, href: path },
          ]),
        ]}
      />
      {/* HERO */}
      <section className="gradient-hero py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight size={14} />
            <Link href="/surgeries" className="hover:text-white">Surgeries</Link>
            <ChevronRight size={14} />
            <span className="text-white">{data.title.replace("Laser ", "").replace(" Surgery", "")}</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">{data.title}</h1>
            <p className="text-lg text-white/80 mb-6">{data.subtitle}</p>
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-xl text-sm">
                <IndianRupee size={16} /> {data.priceRange}
              </span>
              <span className="flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-xl text-sm">
                <Clock size={16} /> Recovery: {data.recovery}
              </span>
              <span className="flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-xl text-sm">
                <Zap size={16} /> {data.duration}
              </span>
              <span className="flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-xl text-sm">
                <Building2 size={16} /> {data.hospital}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book-consultation" className="btn-primary !bg-[var(--color-accent)] animate-pulse-glow !py-4 !px-8">
                Book Free Consultation <ArrowRight size={18} />
              </Link>
              <a href="tel:+917011473737" className="btn-secondary !border-white/30 !text-white hover:!bg-white/10 !py-4 !px-8">
                <Phone size={18} /> Talk to Expert
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">What is {data.title.replace("Laser ", "").replace(" Surgery", "")}?</h2>
          <p className="text-[var(--color-text-body)] leading-relaxed">{data.description}</p>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="section gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">Common Symptoms</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.symptoms.map((s) => (
              <div key={s} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[var(--color-card-border)]">
                <CheckCircle2 size={20} className="text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                <span className="text-sm">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TREATMENT OPTIONS */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">Treatment Options</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.treatments.map((t) => (
              <div key={t.name} className={`card ${t.recommended ? "!border-[var(--color-primary)] ring-2 ring-[var(--color-primary)]/20" : ""}`}>
                {t.recommended && (
                  <span className="text-xs font-semibold text-white bg-[var(--color-primary)] px-3 py-1 rounded-full mb-3 inline-block">
                    ✓ Recommended
                  </span>
                )}
                <h3 className="font-semibold text-lg mb-3">{t.name}</h3>
                <ul className="space-y-2">
                  {t.pros.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                      <CheckCircle2 size={14} className="text-[var(--color-success)]" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCEDURE STEPS */}
      <section className="section gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">Procedure Steps</h2>
          <div className="space-y-4">
            {data.steps.map((step, i) => (
              <div key={step} className="flex items-start gap-4 bg-white p-5 rounded-xl border border-[var(--color-card-border)]">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{i + 1}</span>
                </div>
                <div>
                  <p className="font-medium">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {data.faqs.map((f) => (
              <details key={f.q} className="card group cursor-pointer">
                <summary className="flex items-center justify-between font-semibold text-[var(--color-text-heading)] list-none">
                  {f.q}
                  <ChevronRight size={18} className="text-[var(--color-text-muted)] group-open:rotate-90 transition-transform" />
                </summary>
                <p className="text-sm text-[var(--color-text-body)] mt-3 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Expert Treatment?</h2>
          <p className="text-white/80 mb-8">Book a free consultation and get a personalised treatment plan from a verified surgeon.</p>
          <Link href="/book-consultation" className="btn-primary !bg-[var(--color-accent)] !py-4 !px-10 animate-pulse-glow">
            Book Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* MEDICAL REVIEW + DISCLAIMER */}
      <section className="bg-[var(--color-bg-warm)] border-t border-[var(--color-card-border)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-[var(--color-text-muted)] space-y-3">
          <p className="flex items-start gap-2">
            <ShieldCheck size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
            <span>
              <strong className="text-[var(--color-text-heading)]">Medically reviewed by</strong>{" "}
              the SURGISAATHI clinical team. <strong>Last updated:</strong> May 2026.
            </span>
          </p>
          <p className="text-xs leading-relaxed">
            This information is for educational purposes only and is not a
            substitute for professional medical advice, diagnosis, or treatment.
            Surgical outcomes, recovery times, and costs vary by individual
            case. Always consult a qualified surgeon for advice tailored to
            your condition. Prices shown are indicative ranges, may change
            without notice, and depend on the hospital, surgeon, and complexity
            of the procedure.
          </p>
        </div>
      </section>
    </div>
  );
}
