import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { EmergencyCTA } from "@/components/sections/EmergencyCTA";
import { PROCESS_STEPS } from "@/lib/content/process";

export const metadata: Metadata = {
  title: "Our Restoration Process | Safe Home Solutions Edmonton",
  description: "Learn how Safe Home Solutions handles water damage and restoration work from first call to project closeout.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <>
      <section className="bg-[var(--color-brand)] py-16 text-white">
        <Reveal className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Our Restoration Process</h1>
          <p className="mt-4 text-lg text-slate-200">A clear process that keeps you informed from the first call through final review.</p>
        </Reveal>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {PROCESS_STEPS.map((step, index) => (
              <Reveal key={step.step} delay={index * 70}>
              <div className="surface-card rounded-[2rem] border border-slate-200/70 p-6 sm:p-8">
                <div className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">Step {step.step}</div>
                <h2 className="mt-2 text-3xl font-bold">{step.title}</h2>
                <p className="mt-3 text-sm leading-8 text-slate-600">{step.description}</p>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="surface-card rounded-[2rem] border border-slate-200/70 p-8">
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

      <EmergencyCTA />
    </>
  );
}
