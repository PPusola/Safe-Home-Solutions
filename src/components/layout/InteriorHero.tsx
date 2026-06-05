"use client";

import { Reveal } from "@/components/motion/Reveal";

interface InteriorHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
}

export function InteriorHero({ eyebrow, title, description }: InteriorHeroProps) {
  return (
    <section className="px-4 pb-6 pt-8 sm:px-6 lg:px-8 lg:pb-8 lg:pt-10">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.25rem] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(247,241,233,0.92))] px-6 py-10 shadow-[0_22px_60px_rgba(39,34,27,0.08)] sm:px-10 lg:px-14 lg:py-14">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(177,115,67,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(47,58,52,0.1),transparent_28%)]" />
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow ? <p className="eyebrow text-[var(--color-accent)]">{eyebrow}</p> : null}
          <h1 className="mt-3 text-4xl font-bold tracking-[-0.03em] sm:text-5xl">{title}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">{description}</p>
        </div>
      </Reveal>
    </section>
  );
}
