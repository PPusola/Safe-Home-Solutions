import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { InteriorHero } from "@/components/layout/InteriorHero";
import { Reveal } from "@/components/motion/Reveal";
import { WhatHappensNext } from "@/components/sections/WhatHappensNext";

export const metadata: Metadata = {
  title: "Our Restoration Process | Safe Home Solution & Restoration Inc. Edmonton",
  description: "Learn how Safe Home Solution & Restoration Inc. handles water damage and restoration work from first call to project closeout.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Process"
        title="Our Restoration Process"
        description="A clear process that keeps you informed from the first call through drying, documentation, and final review."
      />

      <WhatHappensNext />

      <section className="py-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="surface-card rounded-[1rem] border border-slate-200/70 p-8">
            <h2 className="text-3xl font-bold">What clients appreciate most</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "Clear communication at every stage",
                "Moisture tracking and practical documentation",
                "A realistic explanation of timing and next steps",
                "Support that keeps the claim and drying process moving",
              ].map((item) => (
                <div key={item} className="flex gap-3 text-sm text-slate-700">
                  <CheckCircle2 size={16} className="mt-1 shrink-0 text-[var(--color-accent)]" />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
