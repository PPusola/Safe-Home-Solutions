export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Emergency Call",
    description:
      "Call us any time, day or night. We gather the basics, explain the next steps, and dispatch help quickly.",
  },
  {
    step: 2,
    title: "On-Site Assessment",
    description:
      "We inspect visible and hidden moisture, identify the source of damage, and document the scope for you and your insurer.",
  },
  {
    step: 3,
    title: "Water Extraction",
    description:
      "Standing water is removed with commercial extraction equipment to stop further damage as quickly as possible.",
  },
  {
    step: 4,
    title: "Structural Drying",
    description:
      "Air movers, dehumidifiers, and moisture monitoring bring the structure back to safe and stable readings.",
  },
  {
    step: 5,
    title: "Insurance Coordination",
    description:
      "We provide documentation, drying records, and clear communication to help support your claim.",
  },
  {
    step: 6,
    title: "Restoration Completion",
    description:
      "Once drying and remediation are complete, we review the work with you and outline any next repair steps.",
  },
];
