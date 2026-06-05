import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { InteriorHero } from "@/components/layout/InteriorHero";
import { Reveal } from "@/components/motion/Reveal";
import { FOUNDERS } from "@/lib/content/founders";
import { TRUST_POINTS, WHY_HOMEOWNERS_CHOOSE_US } from "@/lib/content/trust";
import { EmergencyCTA } from "@/components/sections/EmergencyCTA";

export const metadata: Metadata = {
  title: "About Safe Home Solution & Restoration Inc. | Edmonton",
  description: "Learn about Safe Home Solution & Restoration Inc., an Edmonton-based restoration company focused on water damage, structural drying, and mold remediation.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Company"
        title="About Safe Home Solution & Restoration Inc."
        description="Safe Home Solution & Restoration Inc. is an Edmonton restoration company built around clear communication, practical support, and careful work."
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal className="surface-card rounded-[1rem] border border-slate-200/70 p-8">
            <h2 className="text-3xl font-bold">Our approach</h2>
            <p className="mt-4 text-sm leading-8 text-slate-600">
              Water damage is stressful because it disrupts daily life quickly and often comes with insurance questions, drying concerns, and repair decisions at the same time. We built the company around making that experience feel more structured and more manageable.
            </p>
            <p className="mt-4 text-sm leading-8 text-slate-600">
              Our goal is simple: respond quickly, explain the work clearly, document the loss carefully, and help clients move from emergency to recovery without adding confusion.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="max-w-2xl">
              <p className="eyebrow text-[var(--color-accent)]">Why homeowners choose us</p>
              <h2 className="mt-3 text-3xl font-bold">The company is built to make a stressful situation feel more manageable.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {WHY_HOMEOWNERS_CHOOSE_US.map((item) => (
                <div key={item} className="surface-card rounded-[0.95rem] border border-slate-200/70 p-5">
                  <CheckCircle2 size={18} className="text-[var(--color-accent)]" />
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold">Meet the founders</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {FOUNDERS.map((founder, index) => (
              <Reveal key={founder.name} delay={index * 80}>
              <div className="surface-card rounded-[1rem] border border-slate-200/70 p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-brand)] text-lg font-bold text-white">
                  {founder.name.split(" ").map((part) => part[0]).join("")}
                </div>
                <h3 className="mt-4 text-2xl font-bold">{founder.name}</h3>
                <p className="mt-1 text-sm font-semibold text-[var(--color-accent)]">{founder.role}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{founder.bio}</p>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold">What clients can count on</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {TRUST_POINTS.map((point, index) => (
              <Reveal key={point.title} delay={index * 60}>
              <div className="surface-card rounded-[0.95rem] border border-slate-200/70 p-6">
                <h3 className="text-xl font-bold">{point.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{point.description}</p>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <EmergencyCTA heading="Need restoration help in Edmonton?" subtext="Call us any time and we will walk you through the next step." />
    </>
  );
}
