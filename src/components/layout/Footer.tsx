import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0f2742] text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 border-b border-white/10 pb-6 lg:grid-cols-[minmax(220px,280px)_minmax(320px,1fr)] lg:items-start">
          <div className="min-w-0">
            <div className="font-display text-xl font-bold text-white sm:text-2xl">Safe Home Solutions</div>
            <div className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-accent)]">
              Restoration and Rebuild
            </div>
            <p className="mt-3 text-xs leading-5 text-slate-400">{SITE.legalName}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            <a href={SITE.phoneHref} className="inline-flex min-w-0 items-center gap-3 text-sm leading-6 text-slate-300 hover:text-white">
              <Phone size={16} className="text-[var(--color-accent)]" />
              {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="inline-flex min-w-0 items-center gap-3 text-sm leading-6 text-slate-300 hover:text-white">
              <Mail size={16} className="text-[var(--color-accent)]" />
              {SITE.email}
            </a>
            <span className="inline-flex min-w-0 items-start gap-3 text-sm leading-6 text-slate-300">
              <MapPin size={16} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
              {SITE.address.full}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>{"\u00A9"} {year} {SITE.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Use</Link>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 border-t border-slate-200 bg-[var(--color-surface)] lg:hidden">
        <a href={SITE.phoneHref} className="inline-flex items-center justify-center gap-2 bg-[var(--color-accent)] px-3 py-4 text-sm font-bold text-white">
          <Phone size={17} />
          Call now
        </a>
        <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--color-brand)] px-3 py-4 text-sm font-bold text-white">
          Estimate
        </Link>
      </div>
    </footer>
  );
}
