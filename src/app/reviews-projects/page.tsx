import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { InteriorHero } from "@/components/layout/InteriorHero";
import { Reveal } from "@/components/motion/Reveal";
import { CustomerReviews } from "@/components/sections/CustomerReviews";
import { ProjectGallery } from "@/components/sections/ProjectGallery";

export const metadata: Metadata = {
  title: "Reviews & Latest Projects | Edmonton",
  description: "See the kinds of restoration projects Safe Home Solution & Restoration Inc. handles and read our customer reviews on Google.",
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
        description="Project examples from around Edmonton, plus a link to read our customer reviews on Google."
      />

      <CustomerReviews />

      <section id="project-examples" className="py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-8 max-w-2xl">
            <p className="eyebrow text-[var(--color-accent)]">Project examples</p>
            <h2 className="mt-3 text-3xl font-bold">Examples of the work people call us for.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Real photos from jobs across Edmonton. Filter by category to see examples of common restoration calls.
            </p>
            <Link href="/gallery" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-brand)] hover:underline">
              See the before &amp; after gallery
              <ArrowRight size={14} />
            </Link>
          </Reveal>

          <ProjectGallery initialCategory={category} />
        </div>
      </section>
    </>
  );
}
