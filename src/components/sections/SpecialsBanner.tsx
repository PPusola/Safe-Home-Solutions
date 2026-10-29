"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tag } from "lucide-react";
import { SpecialsGate } from "@/components/sections/SpecialsGate";
import { SPECIALS } from "@/lib/content/specials";
import { SITE } from "@/lib/site";

// Slim specials strip for every page except the homepage, which has the full section.
// `serverActive` comes from the layout's server-side date check.
export function SpecialsBanner({ serverActive }: { serverActive: boolean }) {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <SpecialsGate serverActive={serverActive}>
      <section aria-label={SPECIALS.title} className="border-b border-[var(--color-accent)]/25 bg-[#f6e7da] text-[var(--color-ink)]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2 text-center text-sm leading-6 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 font-extrabold">
            <Tag size={14} className="shrink-0 text-[var(--color-accent)]" aria-hidden="true" />
            {SPECIALS.title}:
          </span>
          <span className="hidden font-semibold lg:inline">{SPECIALS.offers.join(" · ")}</span>
          <span className="inline-flex items-center gap-3 font-bold">
            <Link href="/#specials" className="text-[var(--color-brand)] underline underline-offset-2 hover:no-underline">
              See the offers
            </Link>
            <a href={SITE.phoneHref} className="text-[var(--color-accent-dark)] underline underline-offset-2 hover:no-underline">
              Call or text {SITE.phone}
            </a>
          </span>
        </div>
      </section>
    </SpecialsGate>
  );
}
