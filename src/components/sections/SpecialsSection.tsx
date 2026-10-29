import Image from "next/image";
import { BadgePercent, FileImage, Phone, SearchCheck, Wrench } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SpecialsGate } from "@/components/sections/SpecialsGate";
import { SPECIALS, specialsActive } from "@/lib/content/specials";
import { SITE } from "@/lib/site";

const OFFER_ICONS = [SearchCheck, BadgePercent, Wrench];

export function SpecialsSection() {
  if (!specialsActive()) {
    return null;
  }

  return (
    <SpecialsGate serverActive>
      <section id="specials" className="scroll-mt-28 pt-12" aria-labelledby="specials-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="surface-card overflow-hidden rounded-[1rem] border border-slate-200 shadow-sm">
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_240px] lg:items-start">
              <div className="min-w-0">
                <p className="eyebrow text-[var(--color-accent)]">Limited time only</p>
                <h2 id="specials-heading" className="mt-2 text-3xl font-bold leading-snug">
                  {SPECIALS.title}
                </h2>

                <ul className="mt-6 grid gap-3">
                  {SPECIALS.offers.map((offer, index) => {
                    const Icon = OFFER_ICONS[index] ?? SearchCheck;
                    return (
                      <li
                        key={offer}
                        className="flex items-start gap-3 rounded-[0.85rem] border border-slate-200 bg-white px-4 py-3.5 text-base font-bold leading-6 text-[var(--color-ink)]"
                      >
                        <Icon size={20} className="mt-0.5 shrink-0 text-[var(--color-accent)]" aria-hidden="true" />
                        {offer}
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={SITE.phoneHref}
                    className="inline-flex items-center justify-center gap-2.5 rounded-[0.85rem] bg-[var(--color-accent)] px-6 py-3.5 text-center text-base font-extrabold text-white shadow-[0_10px_24px_rgba(177,115,67,0.18)] hover:bg-[var(--color-accent-dark)]"
                  >
                    <Phone size={18} className="shrink-0" />
                    Call or text {SITE.phone}, day or night
                  </a>
                  <a
                    href={SPECIALS.flyer}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center justify-center gap-2 rounded-[0.85rem] border border-[var(--color-brand)]/15 bg-white/55 px-6 py-3.5 text-sm font-bold text-[var(--color-brand)] hover:bg-white"
                  >
                    <FileImage size={16} />
                    View the flyer
                  </a>
                </div>

                <p className="mt-5 text-xs leading-5 text-slate-500">{SPECIALS.finePrint}</p>
              </div>

              <a
                href={SPECIALS.flyer}
                target="_blank"
                rel="noopener"
                className="mx-auto hidden w-full max-w-[240px] overflow-hidden rounded-[0.85rem] border border-slate-200 bg-white shadow-[0_12px_32px_rgba(39,34,27,0.09)] transition-transform hover:-translate-y-1 lg:block"
                aria-label="View the October and November specials flyer"
              >
                <Image
                  src={SPECIALS.flyer}
                  alt="October and November specials flyer from Safe Home Solution & Restoration Inc."
                  width={1700}
                  height={2200}
                  loading="lazy"
                  sizes="240px"
                  className="h-auto w-full"
                />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </SpecialsGate>
  );
}
