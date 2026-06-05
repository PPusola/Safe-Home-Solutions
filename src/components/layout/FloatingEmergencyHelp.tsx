"use client";

import { useState } from "react";
import { Phone, PhoneCall, X } from "lucide-react";
import { SITE } from "@/lib/site";

export function FloatingEmergencyHelp() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-20 right-4 z-[60] flex flex-col items-end sm:bottom-6 sm:right-6">
      {open && (
        <div className="mb-3 w-[min(320px,calc(100vw-2rem))] overflow-hidden rounded-[1.6rem] border border-stone-200/90 bg-[rgba(251,248,243,0.98)] shadow-[0_24px_60px_rgba(39,34,27,0.16)] backdrop-blur">
          <div className="h-1.5 w-full bg-[var(--color-accent)]" />
          <div className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow text-[var(--color-accent)]">24/7 Emergency Help</p>
                <h2 className="mt-1.5 text-[1.55rem] font-bold leading-tight sm:text-[1.75rem]">Active damage? Call now.</h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-stone-200 bg-white p-2 text-slate-500 transition-colors hover:text-[var(--color-brand)]"
                aria-label="Close emergency help"
              >
                <X size={16} />
              </button>
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Don&apos;t wait on the form — every hour matters. Call us directly for 24/7 emergency response in Edmonton.
            </p>

            <a
              href={SITE.phoneHref}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-[1rem] bg-[var(--color-accent)] px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[var(--color-accent-dark)]"
            >
              <Phone size={16} />
              Call {SITE.phone}
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="group inline-flex items-center gap-3 rounded-full border border-stone-300/90 bg-[rgba(251,248,243,0.96)] px-3 py-3 text-sm font-bold text-[var(--color-ink)] shadow-[0_14px_34px_rgba(39,34,27,0.14)] transition-all hover:-translate-y-0.5"
        aria-expanded={open}
        aria-label="Open emergency help"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-brand)] text-white">
          <PhoneCall size={16} />
        </span>
        <span className="hidden text-left sm:block">
          <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">24/7 Help</span>
          <span className="block text-sm font-bold leading-none text-[var(--color-ink)]">Emergency Call</span>
        </span>
      </button>
    </div>
  );
}
