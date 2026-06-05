export interface FAQ {
  category: string;
  question: string;
  answer: string;
}

export const FAQS: FAQ[] = [
  {
    category: "Emergency Response",
    question: "How quickly can you respond to water damage?",
    answer:
      "In many Edmonton calls we can arrive within roughly 1 to 2 hours, depending on location, weather, and demand.",
  },
  {
    category: "Emergency Response",
    question: "What should I do while waiting for help?",
    answer:
      "If it is safe, stop the water source, protect valuables, and avoid contaminated standing water. We can guide you by phone on the next safe step.",
  },
  {
    category: "Insurance",
    question: "Do you work with insurance companies?",
    answer:
      "Yes. We help with moisture records, photos, scope notes, and other documentation commonly needed for a claim.",
  },
  {
    category: "Restoration Process",
    question: "How long does drying usually take?",
    answer:
      "Drying often takes around 3 to 5 days, depending on the amount of water, the affected materials, and site conditions.",
  },
  {
    category: "Mold",
    question: "How quickly can mold start after water damage?",
    answer:
      "Mold can begin growing within about 24 to 48 hours when moisture remains trapped in the structure.",
  },
  {
    category: "About Safe Home Solutions",
    question: "Do you serve areas outside Edmonton?",
    answer:
      "Yes. We also work in communities such as Sherwood Park, St. Albert, Spruce Grove, Stony Plain, Beaumont, Leduc, and Fort Saskatchewan.",
  },
];

export const FAQ_CATEGORIES = [...new Set(FAQS.map((faq) => faq.category))];
