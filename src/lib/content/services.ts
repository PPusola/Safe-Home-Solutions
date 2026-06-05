export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceProjectExample {
  title: string;
  location: string;
  summary: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  cardImage: string;
  cardLabel: string;
  cardTone: string;
  imagePosition?: string;
  features: string[];
  process: string[];
  responseWindow: string;
  whatToExpect: string[];
  insuranceSupport: string[];
  serviceAreaHighlights: string[];
  projectExample: ServiceProjectExample;
  faqs: ServiceFaq[];
  cta: string;
  metaTitle: string;
  metaDescription: string;
}

export const SERVICES: Service[] = [
  {
    slug: "water-damage-restoration",
    title: "Water Damage Restoration",
    shortTitle: "Water Damage",
    tagline: "Fast, calm water damage restoration for Edmonton homes that need structure, not chaos.",
    description:
      "We respond to burst pipes, appliance leaks, overflows, and indoor flooding with extraction, drying, documentation support, and a clear next-step plan.",
    cardImage:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    cardLabel: "Interior recovery",
    cardTone: "from-[#30463f] via-[#58685f] to-[#b17343]",
    imagePosition: "object-center",
    features: [
      "Emergency response across Edmonton",
      "Moisture mapping and damage assessment",
      "Structural drying and monitoring",
      "Selective demolition planning if needed",
      "Insurance documentation support",
    ],
    process: ["Emergency call", "Site assessment", "Water extraction", "Drying plan", "Daily monitoring"],
    responseWindow: "Typical Edmonton dispatch within 1 to 2 hours when conditions allow.",
    whatToExpect: [
      "A quick phone triage to understand the source, timing, and safety concerns.",
      "A room-by-room moisture review so hidden wet areas are not missed.",
      "A practical plan for extraction, drying, documentation, and next repair decisions.",
    ],
    insuranceSupport: [
      "Photo and moisture documentation that helps make adjuster conversations easier.",
      "Clear notes on affected materials, equipment placement, and drying progress.",
      "A straightforward record of what was done first and what may come next.",
    ],
    serviceAreaHighlights: ["West Edmonton", "Terwillegar", "Windermere", "Sherwood Park", "St. Albert"],
    projectExample: {
      title: "Finished basement stabilization after a plumbing leak",
      location: "West Edmonton",
      summary:
        "A lower-level leak affected flooring, drywall edges, and adjacent storage. The first visit focused on extraction, moisture mapping, and setting a drying plan before repair discussions started.",
    },
    faqs: [
      {
        question: "How fast should water damage cleanup start?",
        answer: "As soon as possible. The earlier extraction and drying begin, the better the chance of limiting spread into drywall, insulation, trim, and subfloors.",
      },
      {
        question: "Can you help if the water source is already turned off?",
        answer: "Yes. Many calls happen after the immediate leak is stopped. We can still assess moisture, remove remaining water, and build a proper drying plan.",
      },
    ],
    cta: "Call now for immediate water damage support.",
    metaTitle: "Water Damage Restoration Edmonton | Safe Home Solutions",
    metaDescription: "Professional water damage restoration in Edmonton with fast response, structural drying, and practical claim documentation support.",
  },
  {
    slug: "emergency-water-removal",
    title: "Emergency Water Removal",
    shortTitle: "Emergency Removal",
    tagline: "Immediate extraction when standing water is still active and every hour matters.",
    description:
      "When water is still present, we focus first on safe access, quick extraction, and reducing how far the damage can travel into nearby rooms and materials.",
    cardImage:
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1200&q=80",
    cardLabel: "Rapid response",
    cardTone: "from-[#243f56] via-[#496a7f] to-[#a66845]",
    imagePosition: "object-center",
    features: [
      "Rapid dispatch",
      "Commercial extraction equipment",
      "Basement and crawlspace support",
      "Moisture readings and reporting",
      "Immediate setup for follow-on drying",
    ],
    process: ["Dispatch", "Safety review", "Extraction", "Affected-area checks", "Drying setup"],
    responseWindow: "Best suited for active water situations where immediate extraction changes the outcome.",
    whatToExpect: [
      "A quick check for electrical, slip, and access issues before equipment is brought in.",
      "Priority removal from low points, finished basements, and rooms where spread is accelerating.",
      "A handoff into a drying plan so the job does not stop after extraction.",
    ],
    insuranceSupport: [
      "Fast notes and photos showing water presence on arrival.",
      "Equipment and scope summaries that help document urgent mitigation work.",
      "Practical updates for owners who need to report the first emergency steps taken.",
    ],
    serviceAreaHighlights: ["Central Edmonton", "South Edmonton", "Leduc", "Beaumont"],
    projectExample: {
      title: "Main-floor overflow with water moving toward the basement stairs",
      location: "South Edmonton",
      summary:
        "The priority was stopping spread, removing standing water quickly, and checking the stairwell, flooring transitions, and basement landing before hidden migration created a larger drying scope.",
    },
    faqs: [
      {
        question: "Is water removal different from full restoration?",
        answer: "Yes. Removal is the urgent first phase. Full restoration often continues with drying, demolition decisions, cleaning, and repair planning afterward.",
      },
      {
        question: "Should I start shop-vac cleanup before calling?",
        answer: "Small safe cleanup can help, but it should not delay the call. The bigger risk is hidden moisture that looks minor at first and spreads under finished surfaces.",
      },
    ],
    cta: "Call now if water is still present in the home.",
    metaTitle: "Emergency Water Removal Edmonton | Safe Home Solutions",
    metaDescription: "24/7 emergency water removal in Edmonton for flooded basements, leaks, and urgent extraction needs.",
  },
  {
    slug: "structural-drying-dehumidification",
    title: "Structural Drying & Dehumidification",
    shortTitle: "Structural Drying",
    tagline: "Targeted drying for the moisture that remains after visible water is already gone.",
    description:
      "Once standing water is removed, the deeper job is drying what you cannot easily see. We monitor framing, drywall, insulation, and subfloors so recovery is not rushed.",
    cardImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    cardLabel: "Precision drying",
    cardTone: "from-[#3b332b] via-[#6f6255] to-[#ceb99f]",
    imagePosition: "object-bottom",
    features: [
      "Commercial dehumidifiers and air movers",
      "Moisture tracking",
      "Daily equipment adjustments",
      "Drying records for insurance files",
      "Final verification before equipment removal",
    ],
    process: ["Moisture mapping", "Equipment placement", "Daily monitoring", "Adjustments", "Final verification"],
    responseWindow: "Often starts immediately after extraction or after a delayed leak is discovered.",
    whatToExpect: [
      "Moisture readings that guide where equipment goes instead of guessing by appearance alone.",
      "Daily or scheduled checks to track progress and adjust the setup if needed.",
      "A closeout review so drying decisions are based on readings, not just time passed.",
    ],
    insuranceSupport: [
      "Equipment logs and drying records that support the mitigation timeline.",
      "Clear notes on why certain rooms or assemblies needed longer monitoring.",
      "Documentation that helps explain hidden moisture concerns to third parties.",
    ],
    serviceAreaHighlights: ["Edmonton", "Spruce Grove", "Stony Plain", "Fort Saskatchewan"],
    projectExample: {
      title: "Hidden subfloor moisture after a small kitchen leak",
      location: "St. Albert",
      summary:
        "The visible water looked limited, but readings showed moisture had moved beneath adjacent flooring. Drying focused on the concealed spread so the issue did not return later.",
    },
    faqs: [
      {
        question: "Why is drying still needed if the room looks dry?",
        answer: "Finished surfaces can dry faster than the structure behind them. Readings help confirm whether framing, cavities, or subfloors are still holding moisture.",
      },
      {
        question: "How long does structural drying usually take?",
        answer: "It depends on materials, airflow, temperature, and how long the water sat. Many jobs run for several days, with monitoring in between rather than one fixed timeline.",
      },
    ],
    cta: "Book structural drying before hidden moisture spreads further.",
    metaTitle: "Structural Drying Edmonton | Safe Home Solutions",
    metaDescription: "Structural drying and dehumidification services for Edmonton homes after leaks and indoor flooding.",
  },
  {
    slug: "mold-remediation",
    title: "Mold Remediation",
    shortTitle: "Mold Remediation",
    tagline: "Practical mold remediation that starts with the moisture source, not just the visible growth.",
    description:
      "We help identify where the moisture problem began, contain affected zones, remove damaged materials when needed, and support a cleaner path toward repair.",
    cardImage:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    cardLabel: "Healthy interiors",
    cardTone: "from-[#2f3a34] via-[#61715d] to-[#9c7b5f]",
    imagePosition: "object-center",
    features: [
      "Moisture-source review",
      "Containment planning",
      "Selective material removal",
      "Cleanup and disposal planning",
      "Post-remediation guidance",
    ],
    process: ["Assessment", "Containment", "Selective removal", "Cleanup", "Next-step guidance"],
    responseWindow: "Best when addressed early, especially after unresolved leaks or unfinished drying.",
    whatToExpect: [
      "A practical look at where moisture may still be feeding the issue.",
      "Containment decisions based on location, access, and the amount of affected material.",
      "A realistic explanation of what gets removed, what stays, and what repair work may follow.",
    ],
    insuranceSupport: [
      "Photos and notes that show moisture history and affected areas.",
      "Clear separation between remediation work and later rebuild decisions.",
      "Documentation support for owners sorting through cause, scope, and timeline questions.",
    ],
    serviceAreaHighlights: ["Edmonton", "Sherwood Park", "Beaumont", "Leduc"],
    projectExample: {
      title: "Bathroom wall remediation after a long-running hidden leak",
      location: "Sherwood Park",
      summary:
        "What first looked like paint damage turned into a moisture-source issue behind the vanity wall. The work focused on controlled removal, cleanup, and clarifying the rebuild scope.",
    },
    faqs: [
      {
        question: "Do you just clean the visible mold?",
        answer: "No. The visible growth matters, but the source of moisture matters more. Remediation is most effective when both the cause and the affected materials are addressed.",
      },
      {
        question: "Should I wait and see if the smell goes away?",
        answer: "Persistent musty smells after a leak or humidity issue are worth checking. Waiting can let the affected area expand behind finished surfaces.",
      },
    ],
    cta: "Request a mold assessment before the problem grows.",
    metaTitle: "Mold Remediation Edmonton | Safe Home Solutions",
    metaDescription: "Mold remediation support in Edmonton with moisture-source investigation and practical cleanup planning.",
  },
  {
    slug: "storm-flood-damage",
    title: "Storm & Flood Damage",
    shortTitle: "Storm and Flood",
    tagline: "Emergency help when weather-related water entry disrupts the home all at once.",
    description:
      "Heavy rain, hail, and exterior water entry create fast-moving damage. We help secure the situation, document what happened, and begin mitigation before the interior impact spreads.",
    cardImage:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    cardLabel: "Exterior events",
    cardTone: "from-[#1f3242] via-[#52697d] to-[#be8352]",
    imagePosition: "object-top",
    features: [
      "Emergency storm response",
      "Water entry assessment",
      "Drying and documentation support",
      "Claim-ready reporting",
      "Stabilization planning before repairs",
    ],
    process: ["Initial call", "Site review", "Mitigation", "Drying", "Reporting and next steps"],
    responseWindow: "Especially helpful after severe weather when multiple rooms or entry points may be affected at once.",
    whatToExpect: [
      "A quick review of where water entered and which materials are immediately at risk.",
      "Stabilization work that prioritizes spread control and interior drying.",
      "Documentation that helps owners make sense of a high-stress, weather-driven event.",
    ],
    insuranceSupport: [
      "Photo sets that connect visible entry points to interior effects.",
      "Clear summaries of mitigation measures taken after the event.",
      "Supportive records that help separate urgent drying from later exterior repair work.",
    ],
    serviceAreaHighlights: ["Edmonton", "St. Albert", "Spruce Grove", "Fort Saskatchewan"],
    projectExample: {
      title: "Rain-driven water entry affecting upper wall and ceiling finishes",
      location: "Northwest Edmonton",
      summary:
        "The visible damage was only part of the issue. The first response focused on tracing the entry path, checking adjacent cavities, and getting the drying scope defined quickly.",
    },
    faqs: [
      {
        question: "Can you help even if roof or exterior repair is still pending?",
        answer: "Yes. Interior mitigation and drying often need to start before the full exterior repair plan is finalized, especially to limit secondary damage.",
      },
      {
        question: "What should I document after storm damage?",
        answer: "Take photos early, note when the event happened, and avoid discarding affected materials too quickly. A clear timeline helps later conversations.",
      },
    ],
    cta: "Call us after storm or flood damage for urgent next steps.",
    metaTitle: "Storm and Flood Damage Edmonton | Safe Home Solutions",
    metaDescription: "Storm and flood damage response in Edmonton for urgent drying, cleanup, and restoration planning.",
  },
];

export function getService(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}
