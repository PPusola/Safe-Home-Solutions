import type { Metadata } from "next";
import { Camera, MessageSquare, Phone } from "lucide-react";
import { InteriorHero } from "@/components/layout/InteriorHero";
import { Reveal } from "@/components/motion/Reveal";
import { EmergencyCTA } from "@/components/sections/EmergencyCTA";
import { PROOF_SNIPPETS, REVIEW_THEMES } from "@/lib/content/trust";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reviews & Latest Projects | Safe Home Solution & Restoration Inc. Edmonton",
  description: "See the kinds of restoration projects Safe Home Solution & Restoration Inc. handles and the client experience themes people value most.",
  alternates: { canonical: "/reviews-projects" },
};

export default function ReviewsProjectsPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Proof"
        title="Reviews & Latest Projects"
        description="A cleaner place for project examples, client experience themes, and the kind of work the company handles around Edmonton."
      />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-8 max-w-2xl">
            <p className="eyebrow text-[var(--color-accent)]">Review themes</p>
            <h2 className="mt-3 text-3xl font-bold">What people tend to value most.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Read what homeowners value most and see examples of the kinds of jobs we handle across Edmonton and nearby communities.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {REVIEW_THEMES.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <div className="surface-card rounded-[0.95rem] border border-slate-200/70 p-6">
                  <MessageSquare className="text-[var(--color-accent)]" />
                  <h3 className="mt-4 text-2xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-8 max-w-2xl">
            <p className="eyebrow text-[var(--color-accent)]">Latest project types</p>
            <h2 className="mt-3 text-3xl font-bold">Examples of the work people call us for.</h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {PROOF_SNIPPETS.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <div className="surface-card overflow-hidden rounded-[1rem] border border-slate-200/70">
                  <div className="flex h-44 items-center justify-center bg-[linear-gradient(135deg,#dce6f4_0%,#bfd3ee_100%)]">
                    <Camera size={42} className="text-[var(--color-brand)]" />
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-accent)]">{item.area}</div>
                    <h3 className="mt-2 text-2xl font-bold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-[0.95rem] bg-[var(--color-accent)] px-6 py-3 text-sm font-bold text-white hover:bg-[var(--color-accent-dark)]">
              <Phone size={16} />
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      <EmergencyCTA />
    </>
  );
}
