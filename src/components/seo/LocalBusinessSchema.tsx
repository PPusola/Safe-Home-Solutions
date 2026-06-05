import { SITE } from "@/lib/site";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    name: SITE.name,
    legalName: SITE.legalName,
    alternateName: SITE.shortName,
    telephone: SITE.phone,
    email: SITE.email,
    url: SITE.url,
    openingHours: "Mo-Su 00:00-23:59",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.province,
      postalCode: SITE.address.postal,
      addressCountry: SITE.address.country,
    },
    areaServed: [
      "Edmonton",
      "Sherwood Park",
      "St. Albert",
      "Spruce Grove",
      "Stony Plain",
      "Leduc",
      "Beaumont",
      "Fort Saskatchewan",
    ],
    sameAs: [
      SITE.social.facebook,
      SITE.social.instagram,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Restoration Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Water Damage Restoration" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Water Removal" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Structural Drying & Dehumidification" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mold Remediation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Storm & Flood Damage" } },
      ],
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
