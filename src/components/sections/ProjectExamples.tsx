"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

interface Example {
  title: string;
  location: string;
  service: string;
  summary: string;
  points: string[];
  image: { src: string; alt: string };
}

const EXAMPLES: Example[] = [
  {
    title: "Water-damaged flooring after plumbing leak",
    location: "Edmonton",
    service: "Water Damage Restoration",
    summary: "Extraction, moisture mapping, and a full drying setup after water moved through finished flooring and storage areas.",
    points: [
      "Flooring tiles saturated and peeling from subfloor",
      "Moisture elevated under subfloor and baseboards",
      "Water staining spread across multiple floor sections",
    ],
    image: {
      src: "/photos/case-images/water-damage/corridor-floor-water-damage.jpg",
      alt: "Water damaged flooring before restoration",
    },
  },
  {
    title: "Mold found behind wall after slow leak",
    location: "Sherwood Park",
    service: "Mold Remediation",
    summary: "Moisture-source investigation at wall and floor junction, controlled removal of affected materials, and a clear rebuild scope.",
    points: [
      "Visible mold growth at wall and floor junction",
      "Moisture source traced to a slow pipe fitting leak",
      "Adjacent cavity confirmed affected behind drywall",
    ],
    image: {
      src: "/photos/case-images/mold-remediation/wall-floor-mold-growth.jpg",
      alt: "Mold and moisture damage at wall base before remediation",
    },
  },
  {
    title: "Flood entry at garage door after heavy rain",
    location: "Northwest Edmonton",
    service: "Storm & Flood Damage",
    summary: "Emergency water removal and drying after storm-driven water entered through the garage door threshold and spread across the concrete floor.",
    points: [
      "Water pooled at garage door threshold and floor drain",
      "Storm-driven water spread across concrete floor",
      "Entry point at door seal confirmed compromised",
    ],
    image: {
      src: "/photos/case-images/emergency-water-removal/garage-floor-water-pooling.jpg",
      alt: "Water flooding concrete floor at garage door before restoration",
    },
  },
];

export function ProjectExamples() {
  const [index, setIndex] = useState(0);

  const example = EXAMPLES[index];

  function goTo(i: number) {
    setIndex(i);
  }

  return (
    <Reveal>
      <div className="surface-card overflow-hidden rounded-[1rem] border border-slate-200/70">
        <div className="grid lg:grid-cols-2">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full lg:max-h-[650px] overflow-hidden bg-slate-100">
            <Image
              key={index}
              src={example.image.src}
              alt={example.image.alt}
              fill
              priority={index === 0}
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover animate-[img-fade_0.3s_ease]"
            />

            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />

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
          </div>

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
                What we found
              </p>
              <ul className="space-y-2">
                {example.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center gap-4">
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
