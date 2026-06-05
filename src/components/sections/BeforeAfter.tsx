"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

interface Example {
  title: string;
  location: string;
  service: string;
  summary: string;
  beforePoints: string[];
  afterPoints: string[];
  before: { src: string; alt: string };
  after: { src: string; alt: string };
}

const EXAMPLES: Example[] = [
  {
    title: "Finished basement after plumbing leak",
    location: "West Edmonton",
    service: "Water Damage Restoration",
    summary: "Extraction, moisture mapping, and a full drying setup after water moved through finished flooring and storage areas.",
    beforePoints: [
      "Standing water across finished flooring",
      "Moisture elevated under subfloor and baseboards",
      "Adjacent storage area partially affected",
    ],
    afterPoints: [
      "Full extraction and structural drying completed",
      "Moisture readings verified at baseline",
      "Documentation package prepared for insurance",
    ],
    before: {
      src: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=800&h=600&crop=center&q=80",
      alt: "Damaged basement interior before restoration",
    },
    after: {
      src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&h=600&crop=center&q=80",
      alt: "Clean kitchen and living area after restoration",
    },
  },
  {
    title: "Bathroom wall after hidden moisture leak",
    location: "Sherwood Park",
    service: "Mold Remediation",
    summary: "Moisture-source investigation behind the vanity wall, controlled removal of affected drywall, and a clear rebuild scope.",
    beforePoints: [
      "Visible discoloration and soft drywall at vanity wall",
      "Moisture source traced to a slow pipe fitting leak",
      "Adjacent cavity confirmed affected behind tile",
    ],
    afterPoints: [
      "Affected drywall removed and area dried",
      "Moisture source repaired prior to rebuild",
      "Scope documented clearly for repair contractor",
    ],
    before: {
      src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&h=600&crop=center&q=80",
      alt: "Bathroom with moisture damage before remediation",
    },
    after: {
      src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&h=600&crop=center&q=80",
      alt: "Clean bathroom after mold remediation and repair",
    },
  },
  {
    title: "Upper wall and ceiling after storm entry",
    location: "Northwest Edmonton",
    service: "Storm & Flood Damage",
    summary: "Interior drying and documentation after rain-driven water affected ceiling finishes and adjacent wall cavities.",
    beforePoints: [
      "Rain-driven water entered through roof flashing gap",
      "Ceiling drywall saturated in two rooms",
      "Moisture confirmed inside adjacent wall cavity",
    ],
    afterPoints: [
      "Entry point sealed and interior dried",
      "Ceiling material removed and scope defined",
      "Full moisture log prepared for insurance adjuster",
    ],
    before: {
      src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&h=600&crop=center&q=80",
      alt: "Home exterior during storm showing water entry",
    },
    after: {
      src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&h=600&crop=center&q=80",
      alt: "Restored home exterior after storm damage mitigation",
    },
  },
];

export function BeforeAfter() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"before" | "after">("before");

  const example = EXAMPLES[index];
  const isAfter = phase === "after";

  function goTo(i: number) {
    setIndex(i);
    setPhase("before");
  }

  return (
    <Reveal>
      <div className="surface-card overflow-hidden rounded-[1rem] border border-slate-200/70">
        <div className="grid lg:grid-cols-2">

          {/* ── Image panel ── */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden bg-slate-100">
            <img
              key={`${index}-${phase}`}
              src={example[phase].src}
              alt={example[phase].alt}
              className="h-full w-full object-cover animate-[img-fade_0.3s_ease]"
            />

            {/* Bottom gradient for pill legibility */}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Prev / Next — vertically centred on left/right edges */}
            <button
              onClick={() => goTo((index - 1 + EXAMPLES.length) % EXAMPLES.length)}
              aria-label="Previous example"
              className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm hover:bg-black/65"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => goTo((index + 1) % EXAMPLES.length)}
              aria-label="Next example"
              className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm hover:bg-black/65"
            >
              <ChevronRight size={18} />
            </button>

            {/* Before / After pill — bottom centre */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <div className="flex overflow-hidden rounded-full border border-white/30 bg-black/50 backdrop-blur-md">
                <button
                  onClick={() => setPhase("before")}
                  className={`px-6 py-2 text-xs font-bold uppercase tracking-widest transition-colors duration-200 ${
                    !isAfter ? "bg-[var(--color-accent)] text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  Before
                </button>
                <button
                  onClick={() => setPhase("after")}
                  className={`px-6 py-2 text-xs font-bold uppercase tracking-widest transition-colors duration-200 ${
                    isAfter ? "bg-[var(--color-brand)] text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  After
                </button>
              </div>
            </div>
          </div>

          {/* ── Detail panel ── */}
          <div className="flex flex-col justify-between gap-6 px-7 pt-5 pb-7 sm:p-8">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="eyebrow text-[var(--color-accent)]">{example.service}</span>
                <span className="text-slate-300 select-none">·</span>
                <span className="text-xs text-slate-500">{example.location}</span>
              </div>
              <h3 className="mt-3 text-2xl font-bold leading-snug">{example.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{example.summary}</p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-slate-50/60 p-4">
              <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                {isAfter ? "What was done" : "What we found"}
              </p>
              <ul className="space-y-2">
                {(isAfter ? example.afterPoints : example.beforePoints).map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center gap-4">
              {/* Navigation dots */}
              <div className="flex items-center gap-2">
                {EXAMPLES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to example ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === index ? "w-6 bg-[var(--color-accent)]" : "w-1.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>

              <Link
                href="/reviews-projects"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-600 hover:border-slate-300 hover:text-slate-900 transition-colors"
              >
                See all examples
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </Reveal>
  );
}
