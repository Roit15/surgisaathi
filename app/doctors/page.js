import DoctorsBrowser from "./DoctorsBrowser";

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
      <DoctorsBrowser doctors={doctors} />
    </div>
  );
}
