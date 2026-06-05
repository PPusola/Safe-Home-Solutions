"use client";

import { useState } from "react";
import { AlertTriangle, Phone, Waves, X } from "lucide-react";
import { SITE } from "@/lib/site";

export function FloatingEmergencyHelp() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-20 right-4 z-[60] flex flex-col items-end sm:bottom-6 sm:right-6">
      {open && (
        <div className="mb-3 w-[min(340px,calc(100vw-2rem))] rounded-[1.75rem] border border-slate-200 bg-[rgba(251,248,243,0.98)] p-5 shadow-[0_24px_60px_rgba(16,35,61,0.2)] backdrop-blur">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="eyebrow text-[var(--color-accent)]">Emergency help</p>
              <h2 className="mt-2 text-2xl font-bold">Call now for urgent damage.</h2>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full border border-slate-200 bg-white p-2 text-slate-600 hover:text-[var(--color-brand)]"
              aria-label="Close emergency help"
            >
              <X size={16} />
            </button>
          </div>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            If water damage or another urgent issue is happening now, call right away instead of using the estimate form. We handle 24/7 emergency response across Edmonton and nearby communities.
          </p>

          <a
            href={SITE.phoneHref}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-bold text-white hover:bg-[var(--color-accent-dark)]"
          >
            <Phone size={16} />
            Call {SITE.phone}
          </a>

          <div className="mt-4 rounded-[1.25rem] bg-[var(--color-brand-soft)] px-4 py-3 text-sm text-[var(--color-brand)]">
            {"24/7 emergency response \u2022 Edmonton and nearby communities"}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="group inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#c88346_0%,#9d6032_100%)] px-4 py-3 text-sm font-bold text-white shadow-[0_20px_40px_rgba(157,96,50,0.32)] transition-transform hover:scale-105"
        aria-expanded={open}
        aria-label="Open emergency help"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/16">
          <Waves size={18} />
        </span>
        <span className="hidden sm:inline">Emergency</span>
        <AlertTriangle size={14} className="hidden sm:inline opacity-80" />
      </button>
    </div>
  );
}
