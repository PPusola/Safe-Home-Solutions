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
    category: "Emergency Response",
    question: "Should I call right away even if the damage looks small?",
    answer:
      "Yes. Even smaller leaks can hide moisture inside walls, flooring, or insulation, so it is better to call early than wait for the damage to spread.",
  },
  {
    category: "Emergency Response",
    question: "Do you handle after-hours or overnight emergencies?",
    answer:
      "Yes. The company offers 24/7 emergency response, so you can call at night, on weekends, or during holidays when urgent damage happens.",
  },
  {
    category: "Insurance",
    question: "Do you work with insurance companies?",
    answer:
      "Yes. We help with moisture records, photos, scope notes, and other documentation commonly needed for a claim.",
  },
  {
    category: "Insurance",
    question: "Can you help if I have not spoken to my insurance company yet?",
    answer:
      "Yes. We can stabilize the property first and help you understand what documentation is useful before or while you start the claim process.",
  },
  {
    category: "Insurance",
    question: "What kind of documentation do you provide?",
    answer:
      "Depending on the job, documentation can include moisture readings, photos, drying logs, equipment records, and notes about the affected areas.",
  },
  {
    category: "Restoration Process",
    question: "How long does drying usually take?",
    answer:
      "Drying often takes around 3 to 5 days, depending on the amount of water, the affected materials, and site conditions.",
  },
  {
    category: "Restoration Process",
    question: "What happens during the first visit?",
    answer:
      "The first visit usually focuses on identifying the source, checking visible and hidden moisture, documenting damage, and putting the first drying or stabilization steps in motion.",
  },
  {
    category: "Restoration Process",
    question: "Will you need to remove damaged materials?",
    answer:
      "Sometimes, yes. That depends on the water category, how long materials were exposed, and whether affected materials can still be safely dried and cleaned.",
  },
  {
    category: "Restoration Process",
    question: "Will there be drying equipment left in the home?",
    answer:
      "In many water damage jobs, yes. Air movers, dehumidifiers, and monitoring equipment are often needed for several days to bring materials back to safe readings.",
  },
  {
    category: "Mold",
    question: "How quickly can mold start after water damage?",
    answer:
      "Mold can begin growing within about 24 to 48 hours when moisture remains trapped in the structure.",
  },
  {
    category: "Mold",
    question: "How do I know if hidden mold may be present?",
    answer:
      "Warning signs can include musty odours, staining, swelling materials, repeated moisture issues, or symptoms that seem worse in a specific part of the home.",
  },
  {
    category: "Mold",
    question: "Do all wet areas automatically need mold remediation?",
    answer:
      "Not always. If the issue is addressed quickly and materials dry properly, full mold remediation may not be needed. The decision depends on what is found on site.",
  },
  {
    category: "About Safe Home Solution & Restoration Inc.",
    question: "Do you serve areas outside Edmonton?",
    answer:
      "Yes. We also work in communities such as Sherwood Park, St. Albert, Spruce Grove, Stony Plain, Beaumont, Leduc, and Fort Saskatchewan.",
  },
  {
    category: "About Safe Home Solution & Restoration Inc.",
    question: "Is Safe Home Solution & Restoration Inc. IICRC WRT certified?",
    answer:
      "Yes. Safe Home Solution & Restoration Inc. is IICRC WRT certified, which supports recognized water restoration and structural drying practices during response work.",
  },
  {
    category: "About Safe Home Solution & Restoration Inc.",
    question: "Do you only handle water damage?",
    answer:
      "The current focus is water damage restoration, emergency water removal, structural drying, mold remediation, and storm or flood-related damage support.",
  },
];

export const FAQ_CATEGORIES = [...new Set(FAQS.map((faq) => faq.category))];
