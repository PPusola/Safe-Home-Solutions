import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { InteriorHero } from "@/components/layout/InteriorHero";
import { BeforeAfterGallery } from "@/components/sections/BeforeAfterGallery";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Before & After Gallery | Edmonton",
  description:
    "Before and after photos of foundation crack repair, bathroom water and mold damage, and basement work by Safe Home Solution & Restoration Inc.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Gallery"
        title="Before & After"
        description="Photos from our jobs: foundation cracks, water and mold damage, and basement rebuilds."
      />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <BeforeAfterGallery />

          <div className="mt-14 flex flex-col items-center gap-4 rounded-[1rem] border border-slate-200 bg-white p-6 text-center shadow-[0_14px_38px_rgba(39,34,27,0.07)] sm:p-8">
            <h2 className="text-2xl font-bold">Seeing something similar at home?</h2>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center gap-2.5 rounded-[0.85rem] bg-[var(--color-accent)] px-6 py-3.5 text-base font-extrabold text-white hover:bg-[var(--color-accent-dark)]"
            >
              <Phone size={18} className="shrink-0" />
              Call or text {SITE.phone}, day or night
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
