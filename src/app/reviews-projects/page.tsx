import type { Metadata } from "next";
import { MessageSquare } from "lucide-react";
import { InteriorHero } from "@/components/layout/InteriorHero";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { REVIEW_THEMES } from "@/lib/content/trust";

export const metadata: Metadata = {
  title: "Reviews & Latest Projects | Safe Home Solution & Restoration Inc. Edmonton",
  description: "See the kinds of restoration projects Safe Home Solution & Restoration Inc. handles and the client experience themes people value most.",
  alternates: { canonical: "/reviews-projects" },
};

export default async function ReviewsProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
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
              Read what clients value most and see examples of the kinds of jobs we handle across Edmonton and nearby communities.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {REVIEW_THEMES.map((item, index) => (
              <Reveal key={item.title} delay={index * 70} className="h-full">
                <div className="surface-card h-full rounded-[0.95rem] border border-slate-200/70 p-6">
                  <MessageSquare className="text-[var(--color-accent)]" />
                  <h3 className="mt-4 text-2xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="project-examples" className="py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-8 max-w-2xl">
            <p className="eyebrow text-[var(--color-accent)]">Project examples</p>
            <h2 className="mt-3 text-3xl font-bold">Examples of the work people call us for.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Real photos from jobs across Edmonton. Filter by category to see examples of common restoration calls.
            </p>
          </Reveal>

          <ProjectGallery initialCategory={category} />
        </div>
      </section>
    </>
  );
}
