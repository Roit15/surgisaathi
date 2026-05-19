import Link from "next/link";
import { Star, Clock, Stethoscope, MapPin, Filter, Search } from "lucide-react";

export const metadata = {
  title: "Best Surgeons for Piles, Circumcision, Fistula & More | SURGISAATHI",
  description: "Find top-rated, verified surgeons for laser piles surgery, circumcision, fissure, fistula, and pilonidal sinus treatment in Mumbai and Chandigarh.",
};

const doctors = [
  { name: "Dr. Rajesh Sharma", spec: "Proctologist", exp: "18 yrs", rating: "4.9", reviews: 324, hospital: "Apollo Hospital", city: "Mumbai", surgeries: "2,400+", procedures: ["Piles", "Fissure", "Fistula"] },
  { name: "Dr. Priya Mehta", spec: "General & Laser Surgeon", exp: "14 yrs", rating: "4.8", reviews: 256, hospital: "Fortis Hospital", city: "Mumbai", surgeries: "1,800+", procedures: ["Circumcision", "Piles", "Abscess"] },
  { name: "Dr. Amandeep Singh", spec: "Colorectal Surgeon", exp: "16 yrs", rating: "4.9", reviews: 298, hospital: "Max Super Speciality", city: "Chandigarh", surgeries: "2,100+", procedures: ["Piles", "Fistula", "Pilonidal Sinus"] },
  { name: "Dr. Vikram Desai", spec: "Proctologist", exp: "20 yrs", rating: "4.9", reviews: 412, hospital: "Lilavati Hospital", city: "Mumbai", surgeries: "3,200+", procedures: ["Piles", "Fissure", "Fistula", "Abscess"] },
  { name: "Dr. Neha Kapoor", spec: "General Surgeon", exp: "12 yrs", rating: "4.7", reviews: 189, hospital: "GMCH Sector 32", city: "Chandigarh", surgeries: "1,200+", procedures: ["Circumcision", "Abscess", "Pilonidal Sinus"] },
  { name: "Dr. Suresh Patel", spec: "Laser Surgeon", exp: "15 yrs", rating: "4.8", reviews: 267, hospital: "Hinduja Hospital", city: "Mumbai", surgeries: "1,900+", procedures: ["Piles", "Fissure", "Circumcision"] },
];

export default function DoctorsPage() {
  return (
    <div className="pt-16 lg:pt-[72px]">
      {/* HERO */}
      <section className="gradient-hero py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3">Find Your Expert Surgeon</h1>
          <p className="text-white/80 text-lg max-w-2xl">100% verified surgeons with 10+ years experience in laser surgical procedures.</p>

          {/* Search Bar */}
          <div className="mt-8 bg-white rounded-2xl p-4 flex flex-col sm:flex-row gap-4 max-w-3xl shadow-lg">
            <div className="flex items-center gap-2 flex-1 px-3">
              <Search size={18} className="text-[var(--color-text-muted)]" />
              <input type="text" placeholder="Search by doctor name or specialization" className="w-full text-sm outline-none text-[var(--color-text-body)]" />
            </div>
            <div className="flex items-center gap-2 px-3 border-l border-[var(--color-card-border)]">
              <MapPin size={18} className="text-[var(--color-text-muted)]" />
              <select className="text-sm outline-none text-[var(--color-text-body)] bg-transparent">
                <option>All Cities</option>
                <option>Mumbai</option>
                <option>Chandigarh</option>
              </select>
            </div>
            <button className="btn-primary !py-3 !px-6 !text-sm">Search</button>
          </div>
        </div>
      </section>

      {/* FILTERS + LISTINGS */}
      <section className="section bg-[var(--color-bg-warm)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="text-sm font-medium text-[var(--color-text-muted)] mr-2 py-2">Filter:</span>
            {["All", "Piles", "Circumcision", "Fissure", "Fistula", "Abscess", "Pilonidal Sinus"].map((f, i) => (
              <button key={f} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${i === 0 ? "bg-[var(--color-primary)] text-white" : "bg-white text-[var(--color-text-body)] border border-[var(--color-card-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"}`}>
                {f}
              </button>
            ))}
          </div>

          {/* Doctor Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {doctors.map((d) => (
              <div key={d.name} className="card flex flex-col sm:flex-row gap-5">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                  <Stethoscope size={36} className="text-[var(--color-primary)]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <h3 className="font-semibold text-lg">{d.name}</h3>
                      <p className="text-sm text-[var(--color-primary)]">{d.spec}</p>
                    </div>
                    <div className="flex items-center gap-1 text-sm font-semibold text-amber-500">
                      <Star size={14} fill="currentColor" /> {d.rating}
                      <span className="text-[var(--color-text-muted)] font-normal">({d.reviews})</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--color-text-muted)] mb-3">
                    {d.hospital}, {d.city} • {d.exp} experience • {d.surgeries} surgeries
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {d.procedures.map((p) => (
                      <span key={p} className="text-xs bg-[var(--color-primary)]/5 text-[var(--color-primary)] px-3 py-1 rounded-full font-medium">{p}</span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Link href="/book-consultation" className="btn-primary !py-2.5 !px-5 !text-sm flex-1 sm:flex-none justify-center">
                      Book Consultation
                    </Link>
                    <button className="btn-secondary !py-2.5 !px-5 !text-sm">View Profile</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
