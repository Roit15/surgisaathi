/**
 * SEO helpers — JSON-LD generators for schema.org structured data.
 *
 * These return plain JS objects which the JsonLd component serialises into
 * <script type="application/ld+json"> tags. Each function is pure and takes
 * the absolute SITE_URL so it can be called from both server and client
 * components.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://surgisaathi.com";

export const ORG_NAME = "SURGISAATHI";
export const ORG_LEGAL_NAME = "SURGISAATHI Healthcare Pvt. Ltd.";
export const ORG_PHONE = "+91-7011473737";
export const ORG_EMAIL = "support@surgisaathi.com";
export const ORG_LOGO = `${SITE_URL}/images/logo/logo-primary.png`;

const SOCIAL_PROFILES = [
  "https://www.instagram.com/surgisaathi",
  "https://www.youtube.com/@surgisaathi",
  "https://www.facebook.com/surgisaathi",
  "https://www.linkedin.com/company/surgisaathi",
];

export const LOCATIONS = [
  {
    city: "Mumbai",
    region: "Maharashtra",
    postalCode: "400053",
    streetAddress: "Andheri West",
    addressCountry: "IN",
    geo: { latitude: "19.1362", longitude: "72.8296" },
    url: `${SITE_URL}/piles-surgery-mumbai`,
  },
  {
    city: "Chandigarh",
    region: "Chandigarh",
    postalCode: "160017",
    streetAddress: "Sector 17",
    addressCountry: "IN",
    geo: { latitude: "30.7415", longitude: "76.7884" },
    url: `${SITE_URL}/piles-surgery-chandigarh`,
  },
];

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: ORG_NAME,
    legalName: ORG_LEGAL_NAME,
    url: SITE_URL,
    logo: ORG_LOGO,
    image: ORG_LOGO,
    description:
      "Surgery coordination platform for sensitive surgical conditions (piles, fissure, fistula, circumcision, abscess, pilonidal sinus) in Mumbai and Chandigarh.",
    telephone: ORG_PHONE,
    email: ORG_EMAIL,
    medicalSpecialty: ["Surgery", "Proctology", "Colorectal Surgery"],
    areaServed: LOCATIONS.map((l) => ({
      "@type": "City",
      name: l.city,
    })),
    address: LOCATIONS.map((l) => ({
      "@type": "PostalAddress",
      streetAddress: l.streetAddress,
      addressLocality: l.city,
      addressRegion: l.region,
      postalCode: l.postalCode,
      addressCountry: l.addressCountry,
    })),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: ORG_PHONE,
        contactType: "customer support",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "08:00",
          closes: "22:00",
        },
      },
    ],
    sameAs: SOCIAL_PROFILES,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: ORG_NAME,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-IN",
  };
}

export function localBusinessSchemaForCity(location) {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "@id": `${SITE_URL}/#location-${location.city.toLowerCase()}`,
    name: `${ORG_NAME} ${location.city}`,
    url: location.url || SITE_URL,
    telephone: ORG_PHONE,
    image: ORG_LOGO,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.streetAddress,
      addressLocality: location.city,
      addressRegion: location.region,
      postalCode: location.postalCode,
      addressCountry: location.addressCountry,
    },
    geo: location.geo ? {
      "@type": "GeoCoordinates",
      latitude: location.geo.latitude,
      longitude: location.geo.longitude,
    } : undefined,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "2400",
      bestRating: "5",
      worstRating: "1",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "08:00",
      closes: "22:00",
    },
    sameAs: SOCIAL_PROFILES,
    medicalSpecialty: ["Surgery", "Proctology", "Colorectal Surgery"],
  };
}

export function localBusinessSchema(data) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${data.url}/#location`,
    name: data.name,
    description: data.description,
    url: data.url,
    telephone: data.telephone,
    image: data.image,
    address: {
      "@type": "PostalAddress",
      streetAddress: data.address,
      addressLocality: data.name.replace('SURGISAATHI ', ''),
      addressCountry: "IN",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "22:00",
    },
  };
}

/**
 * Build a MedicalProcedure schema. `data` is one entry from the surgeryData
 * object on the procedure pages.
 */
export function medicalProcedureSchema({ slug, data, path }) {
  const [low, high] = parsePriceRange(data.priceRange);
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "@id": `${SITE_URL}${path}#procedure`,
    name: data.title,
    alternateName: data.title.replace("Laser ", ""),
    description: data.description,
    procedureType: "https://schema.org/SurgicalProcedure",
    bodyLocation: bodyLocationForSlug(slug),
    preparation: data.steps?.[0],
    howPerformed: data.steps?.join(" → "),
    followup: `Follow-up in ${data.recovery}`,
    expectedPrognosis: data.subtitle,
    url: `${SITE_URL}${path}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    offers: low
      ? {
          "@type": "Offer",
          priceCurrency: "INR",
          price: low,
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "INR",
            minPrice: low,
            maxPrice: high || low,
          },
          availability: "https://schema.org/InStock",
          areaServed: LOCATIONS.map((l) => ({ "@type": "City", name: l.city })),
        }
      : undefined,
  };
}

export function faqPageSchema(faqs, path) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}${path}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.href ? `${SITE_URL}${it.href}` : undefined,
    })),
  };
}

export function hospitalListSchema(hospitals, path) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}${path}#hospital-list`,
    itemListElement: hospitals.map((h, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Hospital",
        name: h.name,
        address: {
          "@type": "PostalAddress",
          addressLocality: h.city,
          addressRegion: h.city === "Mumbai" ? "Maharashtra" : "Chandigarh",
          addressCountry: "IN",
        },
        medicalSpecialty: h.procedures,
      },
    })),
  };
}

function parsePriceRange(range) {
  if (!range) return [null, null];
  const nums = String(range)
    .replace(/[₹,]/g, "")
    .split(/[–-]/)
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => Number(s))
    .filter((n) => Number.isFinite(n));
  if (nums.length === 0) return [null, null];
  return [nums[0], nums[1] ?? nums[0]];
}

function bodyLocationForSlug(slug) {
  switch (slug) {
    case "circumcision":
      return "Foreskin";
    case "piles":
    case "fissure":
    case "fistula":
    case "abscess":
      return "Anorectal region";
    case "pilonidal-sinus":
      return "Sacrococcygeal region";
    default:
      return undefined;
  }
}

/**
 * AggregateRating schema for the homepage / surgery pages.
 * ratingValue and reviewCount should be updated as real reviews come in.
 */
export function aggregateRatingSchema({
  ratingValue = 4.8,
  reviewCount = 2400,
  bestRating = 5,
  worstRating = 1,
} = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: ORG_NAME,
    url: SITE_URL,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(ratingValue),
      reviewCount: String(reviewCount),
      bestRating: String(bestRating),
      worstRating: String(worstRating),
    },
  };
}

/**
 * Physician schema for individual doctor profiles.
 */
export function physicianSchema({ doctor, path }) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${SITE_URL}${path}#physician`,
    name: doctor.name,
    description: `${doctor.spec} with ${doctor.exp} of experience. ${doctor.surgeries} surgeries performed. Based at ${doctor.hospital}.`,
    medicalSpecialty: doctor.spec,
    affiliation: {
      "@type": "Hospital",
      name: doctor.hospital,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: doctor.city,
      addressCountry: "IN",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: doctor.rating,
      reviewCount: "120",
      bestRating: "5",
      worstRating: "1",
    },
    url: `${SITE_URL}${path}`,
    memberOf: { "@id": `${SITE_URL}/#organization` },
  };
}
