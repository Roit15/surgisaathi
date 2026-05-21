import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Clock, IndianRupee, ArrowRight, Phone, Zap, ChevronRight, Building2, ShieldCheck, Languages } from "lucide-react";
import JsonLd from "../../components/JsonLd";
import { medicalProcedureSchema, faqPageSchema, breadcrumbSchema } from "../../../lib/seo";
import { cityData } from "../../../lib/city-data";
import { surgeryData } from "../../../lib/surgery-data";
import { surgeryContent } from "../../../lib/surgery-content";

// A basic translation for Chandigarh Piles page (demo purposes)
const hindiContent = {
  piles: {
    title: "लेज़र बवासीर (Piles) सर्जरी",
    subtitle: "चंडीगढ़ में बवासीर का सबसे सुरक्षित और दर्द रहित लेज़र इलाज",
    description: `
      <h3>बवासीर (Piles) क्या है?</h3>
      <p>बवासीर, जिसे पाइल्स या हेमरॉइड्स भी कहा जाता है, गुदा (anus) और निचले मलाशय (rectum) में सूजी हुई नसें होती हैं। जब इन नसों पर दबाव पड़ता है, तो वे सूज जाती हैं और दर्द, खुजली या खून बहने का कारण बनती हैं।</p>
      <h3>लेज़र सर्जरी क्यों चुनें?</h3>
      <ul>
        <li><strong>कोई चीर-फाड़ नहीं:</strong> लेज़र तकनीक में कोई कट या टांके नहीं लगते।</li>
        <li><strong>कम दर्द:</strong> पारंपरिक सर्जरी की तुलना में दर्द न के बराबर होता है।</li>
        <li><strong>जल्दी रिकवरी:</strong> मरीज उसी दिन घर जा सकते हैं और 48 घंटे में काम पर लौट सकते हैं।</li>
      </ul>
      <p>चंडीगढ़ में हमारे विशेषज्ञ डॉक्टर अत्याधुनिक USFDA प्रमाणित लेज़र तकनीक का उपयोग करते हैं, जिससे बवासीर का जड़ से इलाज संभव है।</p>
    `
  }
};

export async function generateStaticParams() {
  const params = [];
  for (const citySlug of Object.keys(cityData)) {
    for (const surgerySlug of Object.keys(surgeryData)) {
      params.push({ citySlug, surgerySlug });
    }
  }
  return params;
}

export async function generateMetadata({ params, searchParams }) {
  const p = await params;
  const city = cityData[p.citySlug];
  const surgery = surgeryData[p.surgerySlug];
  
  if (!city || !surgery) return {};
  
  const path = `/${p.citySlug}/${p.surgerySlug}`;
  
  return {
    title: `${surgery.title} in ${city.name} | Top Surgeons | SURGISAATHI`,
    description: `Get the best ${surgery.title.toLowerCase()} in ${city.name}. ${surgery.subtitle}. Starting at ${surgery.priceRange}. Book free consultation.`,
    alternates: { canonical: path },
    openGraph: {
      title: `${surgery.title} in ${city.name}`,
      description: `Get the best ${surgery.title.toLowerCase()} in ${city.name}. Starting at ${surgery.priceRange}.`,
      url: path,
    },
  };
}

export default async function CitySurgeryPage({ params, searchParams }) {
  const p = await params;
  const sp = await searchParams;
  
  const city = cityData[p.citySlug];
  const surgery = surgeryData[p.surgerySlug];

  if (!city || !surgery) {
    notFound();
  }

  const path = `/${p.citySlug}/${p.surgerySlug}`;
  const shortName = surgery.title.replace("Laser ", "").replace(" Surgery", "");
  
  const isHindi = sp.lang === 'hi';
  const hasHindiTranslation = hindiContent[p.surgerySlug] !== undefined;

  const displayTitle = isHindi && hasHindiTranslation ? hindiContent[p.surgerySlug].title : `${surgery.title} in ${city.name}`;
  const displaySubtitle = isHindi && hasHindiTranslation ? hindiContent[p.surgerySlug].subtitle : `${surgery.subtitle} by top surgeons in ${city.name}`;
  const displayContent = isHindi && hasHindiTranslation ? hindiContent[p.surgerySlug].description : (surgeryContent[p.surgerySlug] || surgery.description);

  return (
    <div className="pt-16 lg:pt-[72px]">
      <JsonLd
        data={[
          medicalProcedureSchema({ slug: p.surgerySlug, data: surgery, path }),
          faqPageSchema(surgery.faqs, path),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: city.name, href: `/${p.citySlug}` },
            { name: shortName, href: path },
          ]),
        ]}
      />
      
      {/* HERO */}
      <section className="gradient-hero py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight size={14} />
            <Link href={`/${p.citySlug}`} className="hover:text-white">{city.name}</Link>
            <ChevronRight size={14} />
            <span className="text-white">{shortName}</span>
          </nav>
          
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {displayTitle}
            </h1>
            <p className="text-lg text-white/80 mb-6">{displaySubtitle}</p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-xl text-sm">
                <IndianRupee size={16} /> {surgery.priceRange}
              </span>
              <span className="flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-xl text-sm">
                <Clock size={16} /> Recovery: {surgery.recovery}
              </span>
              <span className="flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-xl text-sm">
                <Building2 size={16} /> Partner Hospitals: {city.hospitals.length}
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Link href="/book-consultation" className="btn-primary !bg-[var(--color-accent)] animate-pulse-glow !py-4 !px-8 w-full sm:w-auto text-center">
                {isHindi ? "मुफ्त परामर्श बुक करें" : `Book Consultation in ${city.name}`} <ArrowRight size={18} className="inline ml-2" />
              </Link>
              
              {hasHindiTranslation && (
                <Link 
                  href={`${path}${isHindi ? '' : '?lang=hi'}`}
                  className="btn-secondary !border-white/30 !text-white hover:!bg-white/10 !py-4 !px-6 flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  <Languages size={18} />
                  {isHindi ? "Read in English" : "हिंदी में पढ़ें"}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {!isHindi && (
            <h2 className="text-2xl lg:text-3xl font-bold mb-6">What is {shortName} Surgery?</h2>
          )}
          <div 
            className="article-body prose-headings:mb-4 prose-headings:text-2xl prose-headings:font-bold prose-p:mb-4 prose-ul:list-disc prose-ul:pl-5 prose-ul:mb-6 prose-li:mb-2 text-[var(--color-text-body)] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: displayContent }} 
          />
        </div>
      </section>

      {/* WHY SURGISAATHI IN THIS CITY */}
      <section className="section gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center">
            {isHindi ? `${city.name} में SURGISAATHI क्यों चुनें?` : `Why Choose SURGISAATHI for ${shortName} in ${city.name}?`}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[var(--color-card-border)]">
              <CheckCircle2 className="text-[var(--color-primary)] mb-4" size={28} />
              <h3 className="font-bold text-lg mb-2">Expert Surgeons</h3>
              <p className="text-[var(--color-text-muted)]">Our partnered surgeons in {city.name} have performed thousands of successful {shortName.toLowerCase()} surgeries.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[var(--color-card-border)]">
              <Zap className="text-[var(--color-accent)] mb-4" size={28} />
              <h3 className="font-bold text-lg mb-2">USFDA Approved Tech</h3>
              <p className="text-[var(--color-text-muted)]">We use the latest minimally invasive laser technology for faster recovery and less pain.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* HOSPITALS */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">Our Partner Hospitals in {city.name}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {city.hospitals.map((hospital) => (
              <div key={hospital} className="bg-[var(--color-bg-warm)] px-6 py-4 rounded-xl font-medium border border-[var(--color-card-border)] flex items-center gap-3">
                <Building2 size={20} className="text-[var(--color-primary)]" />
                {hospital}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEDICAL REVIEW */}
      <section className="bg-[var(--color-bg-warm)] border-t border-[var(--color-card-border)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-[var(--color-text-muted)] space-y-3">
          <p className="flex items-start gap-2">
            <ShieldCheck size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
            <span>
              <strong className="text-[var(--color-text-heading)]">Medically reviewed by</strong>{" "}
              the SURGISAATHI clinical team.
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}
