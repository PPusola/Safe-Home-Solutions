import { Reveal } from "@/components/motion/Reveal";

const STEPS = [
  {
    step: "01",
    heading: "You call — we answer",
    body: "We pick up 24/7. We ask: where is the water, how long has it been there, and is it still active? Most calls take under five minutes to triage.",
  },
  {
    step: "02",
    heading: "We arrive on-site",
    body: "For active emergencies we aim to be on-site within a few hours. We bring extraction equipment, moisture meters, and drying gear on the first visit.",
  },
  {
    step: "03",
    heading: "Inspection and moisture mapping",
    body: "We locate all affected areas — visible and hidden. Floors, walls, cavities, and subfloors are checked with thermal imaging and moisture meters to define the true scope.",
  },
  {
    step: "04",
    heading: "Extraction and drying setup",
    body: "Standing water is removed first. Then we place industrial air movers and dehumidifiers for structural drying, with daily moisture readings to track progress.",
  },
  {
    step: "05",
    heading: "Documentation for insurance",
    body: "We photograph and log every stage — moisture readings, affected areas, and equipment placement — so you have a clear, timestamped record for your insurer.",
  },
];

export function WhatHappensNext() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 max-w-2xl">
          <p className="eyebrow text-[var(--color-accent)]">What happens next</p>
          <h2 className="mt-3 text-3xl font-bold">When you call, here is exactly what to expect.</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Most people have never dealt with serious water or mold damage before. Here is how we work, from the first call through drying and documentation.
          </p>
        </Reveal>

        <div className="relative">
          <div className="absolute left-[1.375rem] top-3 hidden h-[calc(100%-3rem)] w-px bg-slate-200 lg:block" />

          <ol className="space-y-8">
            {STEPS.map((step, i) => (
              <Reveal key={step.step} delay={i * 70}>
                <li className="flex gap-6">
                  <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] text-xs font-extrabold text-white shadow-[0_0_0_4px_rgb(248_245_240),0_0_0_5px_var(--color-accent)]">
                    {step.step}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-lg font-bold">{step.heading}</h3>
                    <p className="mt-1.5 max-w-2xl text-sm leading-7 text-slate-600">{step.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

      </div>
    </section>
  );
}
