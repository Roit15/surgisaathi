import HospitalsBrowser from "./HospitalsBrowser";

export const metadata = {
  title: "Best Hospitals for Laser Surgery in Mumbai & Chandigarh | SURGISAATHI",
  description: "Compare NABH-accredited hospitals for laser piles, circumcision, fistula surgery. Transparent pricing, insurance support, and expert surgical teams.",
};

const hospitals = [
  { name: "Apollo Spectra Hospital", city: "Mumbai", area: "Tardeo", rating: "4.8", reviews: 542, beds: 150, accreditation: "NABH", insurance: 25, procedures: ["Piles", "Circumcision", "Fissure", "Fistula", "Abscess"], features: ["Dedicated laser OT", "Day-care facility", "24/7 emergency", "Cashless insurance"] },
  { name: "Fortis Hospital", city: "Mumbai", area: "Mulund", rating: "4.7", reviews: 478, beds: 300, accreditation: "NABH & JCI", insurance: 30, procedures: ["Piles", "Fissure", "Fistula", "Pilonidal Sinus"], features: ["Multi-speciality", "Advanced laser equipment", "Insurance desk", "Post-op care"] },
  { name: "Lilavati Hospital", city: "Mumbai", area: "Bandra", rating: "4.9", reviews: 623, beds: 323, accreditation: "NABH", insurance: 28, procedures: ["Piles", "Circumcision", "Fissure", "Fistula", "Abscess", "Pilonidal Sinus"], features: ["Premium care", "International standards", "Dedicated proctology wing", "Valet parking"] },
  { name: "Max Super Speciality Hospital", city: "Chandigarh", area: "Mohali", rating: "4.8", reviews: 389, beds: 300, accreditation: "NABH", insurance: 22, procedures: ["Piles", "Circumcision", "Fistula", "Pilonidal Sinus"], features: ["State-of-art laser OT", "Day-care center", "Insurance helpdesk", "Post-op monitoring"] },
  { name: "Fortis Hospital", city: "Chandigarh", area: "Mohali Phase 8", rating: "4.7", reviews: 312, beds: 250, accreditation: "NABH", insurance: 20, procedures: ["Piles", "Fissure", "Fistula", "Abscess"], features: ["Expert surgical team", "Modern infrastructure", "Cashless facility", "Recovery lounge"] },
  { name: "Ivy Hospital", city: "Chandigarh", area: "Sector 71, Mohali", rating: "4.6", reviews: 198, beds: 200, accreditation: "NABH", insurance: 18, procedures: ["Circumcision", "Piles", "Abscess", "Pilonidal Sinus"], features: ["Affordable packages", "Laser surgery suite", "Insurance support", "Free parking"] },
];

export default function HospitalsPage() {
  return (
    <div className="pt-16 lg:pt-[72px]">
      <section className="gradient-hero py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3">Partner Hospitals</h1>
          <p className="text-white/80 text-lg max-w-2xl">NABH-accredited hospitals with dedicated laser surgery facilities and transparent pricing.</p>
        </div>
      </section>

      <HospitalsBrowser hospitals={hospitals} />
    </div>
  );
}
