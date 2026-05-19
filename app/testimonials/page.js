import Link from "next/link";
import { Star, ChevronRight, ArrowRight, Quote } from "lucide-react";

export const metadata = {
  title: "Patient Testimonials — Real Stories, Real Results | SURGISAATHI",
  description: "Read verified patient stories and testimonials from people who chose SURGISAATHI for their surgery. 4.8★ average rating across 10,000+ patients.",
};

const testimonials = [
  { name: "Rahul M.", age: 34, city: "Mumbai", surgery: "Laser Piles Surgery", rating: 5, text: "I suffered from piles for almost 3 years but was too embarrassed to seek help. SURGISAATHI made the entire process so comfortable — from the first WhatsApp message to post-surgery follow-ups. The laser surgery was painless, and I was back at work in just 3 days. The care coordinator was like having a friend in the hospital.", doctor: "Dr. Rajesh Sharma" },
  { name: "Amit K.", age: 29, city: "Chandigarh", surgery: "Laser Circumcision", rating: 5, text: "I was nervous about circumcision surgery. The SURGISAATHI team answered all my questions patiently and connected me with an excellent surgeon. The procedure took just 20 minutes, and the recovery was much smoother than I expected. Their insurance team even got my claim approved within 48 hours!", doctor: "Dr. Amandeep Singh" },
  { name: "Deepak S.", age: 42, city: "Mumbai", surgery: "Laser Fistula Treatment", rating: 5, text: "After suffering from a recurring fistula for 2 years and two failed surgeries elsewhere, SURGISAATHI connected me with a specialist who performed FiLaC laser treatment. It's been 8 months now with zero recurrence. I can't thank them enough for giving me my life back.", doctor: "Dr. Vikram Desai" },
  { name: "Priya T.", age: 31, city: "Mumbai", surgery: "Fissure Surgery", rating: 5, text: "As a woman, discussing these issues felt very uncomfortable. The female care coordinator at SURGISAATHI made me feel completely at ease. The entire process was handled with utmost privacy and professionalism. The surgery was quick, and recovery was faster than expected.", doctor: "Dr. Priya Mehta" },
  { name: "Gurmeet S.", age: 38, city: "Chandigarh", surgery: "Pilonidal Sinus", rating: 5, text: "I had a pilonidal sinus that kept getting infected. SURGISAATHI's laser treatment was a game-changer — minimal cutting, no big wound, and I was walking normally within a week. The follow-up care was exceptional. Every patient should know about this platform.", doctor: "Dr. Amandeep Singh" },
  { name: "Vikash R.", age: 45, city: "Mumbai", surgery: "Abscess Drainage", rating: 4, text: "When I developed a perianal abscess, I was in severe pain. SURGISAATHI arranged an emergency consultation within 2 hours and surgery the same evening. The quick response probably saved me from developing a fistula. Grateful for the prompt care.", doctor: "Dr. Suresh Patel" },
];

export default function TestimonialsPage() {
  return (
    <div className="pt-16 lg:pt-[72px]">
      <section className="gradient-hero py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">Patient Stories</h1>
          <p className="text-lg text-white/80">Real experiences from real patients. Every review is from a verified SURGISAATHI patient.</p>
          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">4.8★</div>
              <div className="text-sm text-white/60">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10,000+</div>
              <div className="text-sm text-white/60">Patients Treated</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="text-sm text-white/60">Would Recommend</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[var(--color-bg-warm)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card !p-8 relative">
                <Quote size={40} className="absolute top-6 right-6 text-[var(--color-primary)]/10" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={18} className="text-amber-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-[var(--color-text-body)] leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center justify-between border-t border-[var(--color-card-border)] pt-4">
                  <div>
                    <p className="font-semibold">{t.name}, {t.age}</p>
                    <p className="text-sm text-[var(--color-text-muted)]">{t.surgery} • {t.city}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-[var(--color-text-muted)]">Treated by</p>
                    <p className="text-sm font-medium text-[var(--color-primary)]">{t.doctor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join 10,000+ Happy Patients</h2>
          <p className="text-white/80 mb-8">Your story of relief starts with a free consultation.</p>
          <Link href="/book-consultation" className="btn-primary !bg-[var(--color-accent)] !py-4 !px-10 animate-pulse-glow">
            Book Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
