import Link from "next/link";
import { Clock3, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { SITE } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0f2742] text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[minmax(240px,300px)_1fr_minmax(200px,260px)] lg:gap-16 lg:items-start">

          {/* Brand column */}
          <div className="min-w-0">
            <div className="font-display text-xl font-bold !text-white sm:text-2xl">Safe Home Solution &amp; Restoration Inc.</div>
            <div className="mt-1 text-xs font-bold uppercase tracking-[0.28em] text-slate-400">
              Restoration and Rebuild
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Water damage restoration, emergency water removal, structural drying, mold remediation, and storm-related interior mitigation support across Edmonton and nearby communities.
            </p>
          </div>

          {/* Contact column */}
          <div className="grid gap-4 sm:grid-cols-2 lg:pt-14">
            <a href={SITE.phoneHref} className="inline-flex min-w-0 items-center gap-3 text-sm leading-6 text-slate-300 hover:text-white">
              <Phone size={16} className="shrink-0 text-[var(--color-accent)]" />
              {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="inline-flex min-w-0 items-center gap-3 text-sm leading-6 text-slate-300 hover:text-white">
              <Mail size={16} className="shrink-0 text-[var(--color-accent)]" />
              {SITE.email}
            </a>
            <span className="inline-flex min-w-0 items-start gap-3 text-sm leading-6 text-slate-300">
              <MapPin size={16} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
              {SITE.address.full}
            </span>
            <span className="inline-flex min-w-0 items-start gap-3 text-sm leading-6 text-slate-300">
              <Clock3 size={16} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
              {SITE.hours}
            </span>
            <span className="inline-flex min-w-0 items-start gap-3 text-sm leading-6 text-slate-300 sm:col-span-2">
              <ShieldCheck size={16} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
              {SITE.license}
            </span>
          </div>

          {/* Quick access column */}
          <div className="flex flex-col gap-3">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-accent)]">Quick Access</div>
            <Link href="/services" className="text-base text-slate-300 hover:text-white">Services</Link>
            <Link href="/service-areas" className="text-base text-slate-300 hover:text-white">Service Areas</Link>
            <Link href="/faq" className="text-base text-slate-300 hover:text-white">FAQ</Link>
            <Link href="/contact" className="text-base text-slate-300 hover:text-white">Non-Urgent Estimate</Link>
            <a href={SITE.phoneHref} className="text-base font-semibold text-white hover:text-[var(--color-accent)]">Emergency Call: {SITE.phone}</a>
            <div className="mt-2 flex items-center gap-4 border-t border-white/10 pt-3">
              <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="inline-flex items-center gap-2 text-slate-300 hover:text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                <span className="text-sm">Facebook</span>
              </a>
              <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex items-center gap-2 text-slate-300 hover:text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                <span className="text-sm">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-6 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between">
          <p>&copy; {year} {SITE.name}. All rights reserved.</p>
          <div className="flex items-center divide-x divide-slate-600">
            <Link href="/privacy" className="pr-3 hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="pl-3 hover:text-white">Terms of Use</Link>
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
