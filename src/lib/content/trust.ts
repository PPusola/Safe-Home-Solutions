export interface TrustPoint {
  title: string;
  description: string;
}

export interface ProofSnippet {
  title: string;
  area: string;
  detail: string;
}

export interface CallStep {
  title: string;
  detail: string;
}

export interface ProcessDeckStep {
  title: string;
  eyebrow: string;
  detail: string;
}

export interface ReviewTheme {
  title: string;
  detail: string;
}

export const TRUST_POINTS: TrustPoint[] = [
  {
    title: "24/7 Emergency Response",
    description: "Water damage rarely waits for business hours. Calls are handled with a clear sense of urgency and next steps.",
  },
  {
    title: "Certified Technicians",
    description: "The work follows recognized restoration standards for moisture control, drying, and remediation planning.",
  },
  {
    title: "Insurance Support",
    description: "Documentation is organized so owners have clearer photos, notes, and moisture records when adjuster questions come up.",
  },
  {
    title: "Local and Family Run",
    description: "The tone stays practical and personal, with local service across Edmonton and nearby communities.",
  },
  {
    title: "Professional Equipment",
    description: "Commercial extraction tools, dehumidifiers, air movers, and moisture mapping equipment support the field work.",
  },
  {
    title: "Straightforward Process",
    description: "Every stage is explained in plain language so the job feels more organized and less overwhelming.",
  },
];

export const STATS = [
  { value: "24/7", label: "Emergency response" },
  { value: "1 to 2 hr", label: "Typical local arrival" },
  { value: "Edmonton+", label: "City and nearby communities" },
  { value: "IICRC", label: "Industry-aligned standards" },
];

export const CALL_STEPS: CallStep[] = [
  {
    title: "Quick phone triage",
    detail: "We ask where the water came from, how long it has been there, and whether anything feels unsafe right now.",
  },
  {
    title: "Dispatch and first-visit plan",
    detail: "You get a clearer sense of timing, what to do before arrival, and what the first visit will focus on.",
  },
  {
    title: "On-site assessment",
    detail: "We check visible damage, hidden moisture risk, and what needs to happen first to stabilize the property.",
  },
];

export const PROCESS_DECK_STEPS: ProcessDeckStep[] = [
  {
    eyebrow: "Step 1",
    title: "Call and explain what happened",
    detail: "We start by understanding the source of water, how long it has been present, and whether there are any immediate safety concerns or time-sensitive risks.",
  },
  {
    eyebrow: "Step 2",
    title: "Get the first response plan",
    detail: "You get clearer guidance on what to do before arrival, what equipment may be needed, and what the first visit will focus on once we are on site.",
  },
  {
    eyebrow: "Step 3",
    title: "Inspect, map, and stabilize",
    detail: "We assess visible damage, check for hidden moisture, and prioritize the work that will stop the situation from spreading further through the structure.",
  },
  {
    eyebrow: "Step 4",
    title: "Dry and document properly",
    detail: "Extraction, structural drying, moisture checks, and equipment monitoring are handled as one connected process rather than a rushed one-time visit.",
  },
  {
    eyebrow: "Step 5",
    title: "Organize insurance documentation",
    detail: "Photos, moisture notes, affected-area records, and equipment details are kept organized so you have something clearer to work from if insurance questions come up.",
  },
  {
    eyebrow: "Step 6",
    title: "Move into the next repair step",
    detail: "Once the emergency phase is under control, we help clarify what comes next so the path from mitigation to recovery feels more manageable.",
  },
];

export const PROOF_SNIPPETS: ProofSnippet[] = [
  {
    title: "Basement flood stabilization",
    area: "West Edmonton",
    detail: "Extraction, moisture checks, and a drying plan after water moved through finished basement flooring and storage areas.",
  },
  {
    title: "Hidden leak and mold follow-up",
    area: "Sherwood Park",
    detail: "A moisture-source problem behind bathroom finishes that needed controlled removal and a cleaner rebuild scope.",
  },
  {
    title: "Storm-entry drying setup",
    area: "Northwest Edmonton",
    detail: "Interior drying and documentation after rain affected upper finishes and nearby wall cavities.",
  },
];

export const REVIEW_THEMES: ReviewTheme[] = [
  {
    title: "Clear communication",
    detail: "Clients value knowing what happens first, what can wait, and how the job is progressing without having to chase updates.",
  },
  {
    title: "Fast, calm response",
    detail: "Emergency work feels less stressful when the first call leads to clear direction instead of more confusion.",
  },
  {
    title: "Organized documentation",
    detail: "Homeowners appreciate having cleaner records, photos, and moisture notes when insurance or repair decisions come up later.",
  },
];

export const WHY_HOMEOWNERS_CHOOSE_US = [
  "The process stays simple instead of forcing every message onto one page.",
  "Calls are handled with practical guidance, not pressure-heavy sales language.",
  "Documentation, drying, and repair decisions are explained as one connected process.",
];
