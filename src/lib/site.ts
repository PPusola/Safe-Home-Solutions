export const SITE = {
  name: "Safe Home Solution & Restoration Inc.",
  shortName: "Safe Home Solution & Restoration Inc.",
  legalName: "Safe Home Solution & Restoration Inc.",
  tagline: "Edmonton's 24/7 Emergency Restoration Experts",
  description:
    "Safe Home Solution & Restoration Inc. helps Edmonton homeowners with water damage restoration, structural drying, mold remediation, and emergency response.",
  url: "https://www.safehomesolutions.ca",
  phone: "780-394-2156",
  phoneHref: "tel:7803942156",
  email: "info@safehomesolutions.ca",
  estimateEmail: "safehomesolutionrestorations@gmail.com",
  address: {
    street: "9520 174 St NW",
    city: "Edmonton",
    province: "AB",
    postal: "T5T 5Z3",
    country: "Canada",
    full: "9520 174 St NW, Edmonton, AB T5T 5Z3",
  },
  hours: "24/7 Emergency Response",
  license: "Fully Insured & Certified",
  social: {
    facebook: "https://www.facebook.com/safehomesolutionsedmonton",
    instagram: "https://www.instagram.com/safehomesolutionsca",
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Water Damage Restoration", href: "/services/water-damage-restoration" },
      { label: "Emergency Water Removal", href: "/services/emergency-water-removal" },
      { label: "Structural Drying", href: "/services/structural-drying-dehumidification" },
      { label: "Mold Remediation", href: "/services/mold-remediation" },
      { label: "Storm and Flood Damage", href: "/services/storm-flood-damage" },
    ],
  },
  {
    label: "Company",
    href: "/company",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Our Process", href: "/process" },
      { label: "Service Areas", href: "/service-areas" },
      { label: "Reviews & Projects", href: "/reviews-projects" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];
