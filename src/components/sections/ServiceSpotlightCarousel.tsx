"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/content/services";

const ROTATION_MS = 20000;

const SPOTLIGHT_SLUGS = [
  "basement-crack-repair",
  "water-damage-restoration",
  "emergency-water-removal",
  "structural-drying-dehumidification",
  "mold-remediation",
  "storm-flood-damage",
  "oxidizing-services",
];

function getWhySafeHomeItems(service: (typeof SERVICES)[number]) {
  if (service.notIncludedTitle === "Why SafeHome Solutions") {
    return service.notIncluded;
  }

  return [
    service.features[0],
    service.features[1],
    service.insuranceSupport[0] ?? "Clear communication and documentation for the next steps.",
  ].filter(Boolean);
}

export function ServiceSpotlightCarousel() {
  const slides = useMemo(
    () =>
      SPOTLIGHT_SLUGS.map((slug) => SERVICES.find((service) => service.slug === slug)).filter(
        Boolean,
      ) as typeof SERVICES,
    [],
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = slides[activeIndex] ?? slides[0];

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, ROTATION_MS);

    return () => window.clearInterval(interval);
  }, [slides.length]);

  if (!activeService) return null;

  const detailItems = getWhySafeHomeItems(activeService);

  return (
    <div className="mb-10 overflow-hidden rounded-[1rem] border border-[var(--color-brand-soft)] bg-[linear-gradient(135deg,#fbf8f3,#f1e8dc)] shadow-[0_18px_48px_rgba(39,34,27,0.1)]">
      <div key={activeService.slug} className="grid animate-[service-spotlight_0.45s_ease] gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="p-7 sm:p-8 lg:p-10">
          <p className="eyebrow text-[var(--color-accent)]">{activeService.title}</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight text-[var(--color-ink)] sm:text-4xl">
            {activeService.tagline}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
            {activeService.description}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/services/${activeService.slug}`}
              className="inline-flex items-center justify-center gap-2 rounded-[0.95rem] bg-[var(--color-accent)] px-5 py-3 text-sm font-bold text-white hover:bg-[var(--color-accent-dark)]"
            >
              View service
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-[0.95rem] border border-[var(--color-brand)]/15 bg-white/55 px-5 py-3 text-sm font-bold text-[var(--color-brand)] hover:bg-white"
            >
              Request estimate
              <ArrowRight size={15} />
            </Link>
          </div>
          <div className="mt-6 flex items-center gap-2" aria-label="Featured service slides">
            {slides.map((service, index) => (
              <button
                key={service.slug}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-7 bg-[var(--color-accent)]" : "w-2.5 bg-[var(--color-brand)]/20 hover:bg-[var(--color-brand)]/35"
                }`}
                aria-label={`Show ${service.title}`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>
        </div>
        <div className="border-t border-[var(--color-brand-soft)] bg-white/45 p-7 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            Why SafeHome Solutions
          </p>
          <ul className="mt-4 space-y-3">
            {detailItems.slice(0, 4).map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-600">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
