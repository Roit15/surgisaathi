import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone, MapPin, IndianRupee, Clock, BadgeCheck, Star, AlertTriangle } from "lucide-react";
import InlineLeadForm from "../components/InlineLeadForm";
import JsonLd from "../components/JsonLd";
import { medicalProcedureSchema, localBusinessSchemaForCity, faqPageSchema, breadcrumbSchema, LOCATIONS } from "../../lib/seo";

export const metadata = {
  title: "Abscess Drainage Surgery in Mumbai — Cost ₹18K–₹40K | SURGISAATHI",
  description: "Best perianal abscess drainage in Mumbai at ₹18,000–₹40,000. Expert surgeons at NABH hospitals. Same-day discharge, cashless insurance, free consultation. Call +91 70114 73737.",
  alternates: { canonical: "/abscess-surgery-mumbai" },
  openGraph: {
    title: "Perianal Abscess Surgery in Mumbai | SURGISAATHI",
    description: "Expert abscess drainage in Mumbai. Quick relief, verified surgeons, transparent pricing from ₹18K, cashless insurance support.",
    url: "/abscess-surgery-mumbai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Perianal Abscess Surgery in Mumbai | SURGISAATHI",
    description: "Expert abscess drainage in Mumbai. Quick relief, verified surgeons, transparent pricing from ₹18K, cashless insurance support.",
  },
};

const mumbaiLocation = LOCATIONS.find((l) => l.city === "Mumbai");

const faqs = [
  { q: "What is the cost of abscess drainage in Mumbai?", a: "Perianal abscess drainage in Mumbai typically costs between ₹18,000 and ₹40,000 depending on the size, complexity, and hospital. SURGISAATHI provides transparent all-inclusive pricing with no hidden charges. Most cases are covered by health insurance." },
  { q: "Is abscess drainage an emergency surgery?", a: "Yes, perianal abscesses should be treated promptly. Delayed treatment can lead to fistula formation or systemic infection. SURGISAATHI offers same-day or next-day surgery scheduling at our Mumbai partner hospitals." },
  { q: "Can an abscess be treated with antibiotics alone?", a: "Antibiotics alone are usually insufficient for perianal abscesses. Surgical drainage is the gold standard treatment to remove pus and allow proper healing. Antibiotics may be prescribed alongside drainage." },
  { q: "Will I need to stay in hospital after abscess drainage?", a: "Most abscess drainage procedures at our Mumbai hospitals are performed as day-care surgeries. You will typically be discharged within a few hours of the procedure." },
  { q: "Can an abscess turn into a fistula?", a: "Yes, approximately 30–50% of perianal abscesses can develop into an anal fistula. Our surgeons monitor for this and provide proactive treatment if needed. Early and proper drainage reduces this risk." },
];

const mumbaiDoctors = [
  { name: "Dr. Rajesh Sharma", spec: "Senior Proctologist", exp: "18 yrs", rating: "4.9", hospital: "Apollo Hospital, Andheri West, Mumbai", surgeries: "2,400+", regNo: "MCI-27483" },
  { name: "Dr. Priya Mehta", spec: "General & Colorectal Surgeon", exp: "14 yrs", rating: "4.8", hospital: "Fortis Hospital, Mulund, Mumbai", surgeries: "1,800+", regNo: "MCI-31905" },
];

export default function AbscessSurgeryMumbai() {
  return (
    <div className="pt-16 lg:pt-[72px]">
      <JsonLd
        data={[
          medicalProcedureSchema({
            slug: "abscess",
            data: {
              title: "Abscess Drainage Surgery Mumbai",
              description: "Quick, safe perianal abscess drainage at NABH hospitals in Mumbai with same-day discharge",
              priceRange: "₹18,000 – ₹40,000",
              subtitle: "Expert abscess treatment with immediate pain relief in Mumbai",
              steps: ["Emergency assessment", "Imaging if needed", "Local/general anesthesia", "Incision and drainage", "Wound packing & dressing", "Follow-up in 2–3 days"],
              recovery: "2–3 days",
            },
            path: "/abscess-surgery-mumbai",
          }),
          localBusinessSchemaForCity(mumbaiLocation),
          faqPageSchema(faqs, "/abscess-surgery-mumbai"),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Abscess Surgery Mumbai" },
          ]),
        ]}
      />

      {/* HERO */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="trust-badge !bg-white/15 !text-white mb-5 inline-flex">
                <MapPin size={13} /> Mumbai · Expert Surgeons
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Perianal Abscess Surgery in{" "}
                <span className="text-[var(--color-accent)]">Mumbai</span>
              </h1>
              <p className="text-lg text-white/80 mb-4 max-w-xl">
                Fast, safe abscess drainage at NABH-accredited hospitals. Immediate pain relief, same-day discharge, expert surgical care. Insurance processed.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="flex items-center gap-1.5 bg-white/10 text-white px-3 py-1.5 rounded-xl text-sm">
                  <IndianRupee size={14} /> Starting ₹18,000
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 text-white px-3 py-1.5 rounded-xl text-sm">
                  <Clock size={14} /> Same-day discharge
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 text-white px-3 py-1.5 rounded-xl text-sm">
                  <BadgeCheck size={14} /> Insurance covered
                </span>
                <span className="flex items-center gap-1.5 bg-red-500/20 text-white px-3 py-1.5 rounded-xl text-sm">
                  <AlertTriangle size={14} /> Urgent care available
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["R","A","D","S","P"].map((l) => (
                    <div key={l} className="w-8 h-8 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center text-xs font-bold text-white">{l}</div>
                  ))}
                </div>
                <p className="text-white/70 text-sm"><span className="text-white font-semibold">3,500+ Mumbai patients</span> treated successfully</p>
              </div>
            </div>
            <div className="hidden lg:flex justify-end">
              <InlineLeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile form */}
      <section className="lg:hidden bg-[var(--color-bg-warm)] py-10">
        <div className="max-w-lg mx-auto px-4">
          <p className="text-center text-lg font-bold mb-4">Book Urgent Consultation in Mumbai</p>
          <InlineLeadForm />
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Why Choose SURGISAATHI for Abscess Drainage in Mumbai?</h2>
          <p className="text-[var(--color-text-muted)] mb-8 max-w-2xl">
            A perianal abscess requires prompt surgical drainage. Delaying treatment can lead to fistula formation, sepsis, or recurring infections. Our Mumbai hospitals provide same-day or next-day surgery scheduling.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Same-day or next-day surgery scheduling",
              "15–20 minute procedure under anesthesia",
              "Same-day discharge — go home same evening",
              "Immediate pain relief after drainage",
              "Fistula prevention monitoring included",
              "100% cashless insurance processing",
              "Confidential — private consultation available",
              "Follow-up wound care guidance",
            ].map((p) => (
              <div key={p} className="flex items-start gap-3 p-4 rounded-xl bg-[var(--color-bg-warm)]">
                <CheckCircle2 size={18} className="text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-[var(--color-text-body)]">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">Abscess Surgery Cost in Mumbai (2026)</h2>
          <p className="text-[var(--color-text-muted)] mb-8">All-inclusive pricing. No hidden charges.</p>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[var(--color-card-border)]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[var(--color-primary)]/5">
                    <th className="text-left px-6 py-4 text-sm font-semibold">Treatment</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold">Cost Range</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold">Insurance</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Simple Abscess Drainage", cost: "₹18,000 – ₹25,000", ins: "Covered" },
                    { name: "Complex / Large Abscess", cost: "₹25,000 – ₹35,000", ins: "Covered" },
                    { name: "Recurrent Abscess + Fistula Assessment", cost: "₹30,000 – ₹40,000", ins: "Covered" },
                    { name: "Consultation + Investigations", cost: "₹0 (Free consultation)", ins: "—" },
                  ].map((r) => (
                    <tr key={r.name} className="border-t border-[var(--color-card-border)]">
                      <td className="px-6 py-4 text-sm font-medium">{r.name}</td>
                      <td className="px-6 py-4 text-sm text-[var(--color-primary)] font-semibold">{r.cost}</td>
                      <td className="px-6 py-4">
                        {r.ins === "Covered" ? (
                          <span className="text-xs font-semibold text-[var(--color-success)] bg-[var(--color-success)]/10 px-2 py-1 rounded-full">✓ {r.ins}</span>
                        ) : <span className="text-xs text-[var(--color-text-muted)]">{r.ins}</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-[var(--color-text-muted)] mt-4">* Prices are indicative and depend on abscess size, complexity, hospital, and surgeon. Our coordinator provides an exact quote after free consultation.</p>
        </div>
      </section>

      {/* DOCTORS */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">Abscess Surgeons in Mumbai</h2>
          <p className="text-[var(--color-text-muted)] mb-8">Credential-verified surgeons with extensive experience in anorectal procedures.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {mumbaiDoctors.map((d) => (
              <div key={d.name} className="card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center font-bold text-[var(--color-primary)] text-lg flex-shrink-0 relative">
                    {d.name.split(" ").slice(1).map(n => n[0]).join("")}
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <BadgeCheck size={11} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold">{d.name}</h3>
                    <p className="text-sm text-[var(--color-primary)]">{d.spec}</p>
                    <p className="text-xs text-[var(--color-text-muted)] flex items-center gap-1 mt-0.5"><MapPin size={11} /> {d.hospital}</p>
                  </div>
                </div>
                <div className="flex gap-4 text-sm mb-3">
                  <span className="text-[var(--color-text-muted)] flex items-center gap-1"><Clock size={13} /> {d.exp}</span>
                  <span className="text-amber-500 flex items-center gap-1"><Star size={13} fill="currentColor" /> {d.rating}</span>
                  <span className="text-[var(--color-text-muted)] text-xs">{d.surgeries} surgeries</span>
                </div>
                <p className="text-xs text-[var(--color-text-muted)] mb-4 flex items-center gap-1">
                  <BadgeCheck size={11} className="text-green-500" /> Reg. {d.regNo} · SURGISAATHI verified
                </p>
                <Link href="/book-consultation" className="btn-primary w-full justify-center !py-3 !text-sm">
                  Book with Dr. {d.name.split(" ")[1]}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE CONTENT */}
      <section className="section bg-[var(--color-bg-warm)] border-t border-[var(--color-card-border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 article-body">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">Complete Guide to Perianal Abscess Treatment in Mumbai</h2>
          
          <p>A perianal abscess is a painful, pus-filled cavity that develops near the anus or rectum. It occurs when bacteria infect the small glands that line the anal canal, leading to inflammation and pus accumulation. In Mumbai&apos;s humid climate and fast-paced lifestyle, delayed toilet habits and sedentary work culture can increase the risk of anorectal conditions including abscesses.</p>
          
          <h3>What Causes a Perianal Abscess?</h3>
          <p>Most perianal abscesses originate from infected anal glands. Common contributing factors include:</p>
          <ul>
            <li><strong>Blocked anal glands:</strong> The most common cause — bacteria get trapped and multiply.</li>
            <li><strong>Anal fissures:</strong> Tears in the anal lining can become entry points for infection.</li>
            <li><strong>Inflammatory bowel disease:</strong> Conditions like Crohn&apos;s disease increase abscess risk.</li>
            <li><strong>Diabetes:</strong> Impaired immunity makes individuals more susceptible.</li>
            <li><strong>Weakened immune system:</strong> Due to medications, HIV, or other conditions.</li>
          </ul>

          <h3>When Is Abscess Drainage Urgent?</h3>
          <p>A perianal abscess is considered a <strong>surgical urgency</strong>. Unlike many anorectal conditions that can be planned and scheduled, abscesses often require prompt intervention. Warning signs that you should seek immediate medical care:</p>
          <ul>
            <li>Severe, throbbing pain near the anus that worsens with sitting</li>
            <li>Visible swelling, redness, or a hard lump near the anus</li>
            <li>Fever, chills, or feeling generally unwell</li>
            <li>Pus or foul-smelling discharge from the area</li>
          </ul>
          <p>At SURGISAATHI, we understand the urgency. Our Mumbai care coordinators can arrange same-day or next-day surgery appointments at our partner NABH hospitals.</p>

          <h3>The Drainage Procedure</h3>
          <p>Abscess drainage (incision and drainage, or I&D) is a straightforward surgical procedure typically lasting 15–20 minutes. Here&apos;s what to expect:</p>
          <ol>
            <li><strong>Assessment:</strong> Your surgeon examines the abscess to determine its size and location.</li>
            <li><strong>Anesthesia:</strong> Local or short general anesthesia is administered so you feel no pain.</li>
            <li><strong>Incision:</strong> A small cut is made over the abscess to allow the pus to drain completely.</li>
            <li><strong>Irrigation:</strong> The cavity is cleaned to remove all infected material.</li>
            <li><strong>Packing:</strong> The wound may be lightly packed with gauze to promote healing from the inside out.</li>
          </ol>
          <p>You will typically go home within a few hours of the procedure.</p>

          <h3>Abscess vs. Fistula — Understanding the Connection</h3>
          <p>It&apos;s important to understand that <strong>30–50% of perianal abscesses can develop into an anal fistula</strong> — an abnormal tunnel between the anal canal and the skin. This is why expert surgical drainage and follow-up monitoring are crucial. Our surgeons assess for any early signs of fistula tract formation during the drainage procedure itself.</p>

          <h3>Recovery After Abscess Drainage</h3>
          <p>Recovery is typically swift. Most patients return to normal activities within 2–3 days. Key post-operative care includes:</p>
          <ul>
            <li>Sitz baths (warm water soaks) 2–3 times daily to keep the area clean</li>
            <li>Taking prescribed antibiotics and pain medication as directed</li>
            <li>Keeping the wound clean and dry between baths</li>
            <li>Eating a high-fiber diet to prevent constipation</li>
            <li>Attending follow-up appointments for wound check and fistula monitoring</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="section gradient-warm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">Abscess Surgery Mumbai — FAQs</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="card group cursor-pointer">
                <summary className="flex items-center justify-between font-semibold list-none">
                  {f.q}
                  <span className="text-[var(--color-text-muted)] ml-3 flex-shrink-0 text-lg group-open:rotate-90 transition-transform">›</span>
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
          <h2 className="text-3xl font-bold text-white mb-4">Don&apos;t Delay — Get Expert Abscess Treatment in Mumbai</h2>
          <p className="text-white/80 mb-8">Prompt drainage prevents complications. Private, confidential consultation with a verified surgeon.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-consultation" className="btn-primary !bg-[var(--color-accent)] !py-4 !px-10 animate-pulse-glow">
              Get Free Consultation <ArrowRight size={18} />
            </Link>
            <a href="https://wa.me/917011473737?text=Hi%20SURGISAATHI%2C%20I%27d%20like%20an%20urgent%20consultation%20for%20Abscess%20in%20Mumbai" target="_blank" rel="noopener noreferrer" className="btn-secondary !border-white/30 !text-white hover:!bg-white/10 !py-4 !px-10">
              💬 WhatsApp — Abscess, Mumbai
            </a>
          </div>
          <p className="text-white/50 text-xs mt-4">🔒 100% confidential · No judgment · Same-day callback available</p>
        </div>
      </section>
    </div>
  );
}
