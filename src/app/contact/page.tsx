import type { Metadata } from "next";
import { AlertTriangle, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { InteriorHero } from "@/components/layout/InteriorHero";
import { EstimateForm } from "@/components/forms/EstimateForm";
import { Reveal } from "@/components/motion/Reveal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Request an Estimate | Safe Home Solution & Restoration Inc. Edmonton",
  description: "Contact Safe Home Solution & Restoration Inc. for a non-urgent estimate or general restoration questions in Edmonton.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Contact"
        title="Request a Non-Urgent Estimate"
        description="Use this page for planned work and general questions. If the damage is active or time-sensitive, call right away instead of waiting on the form."
      />

      <div className="bg-red-600 text-white">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <AlertTriangle size={22} className="shrink-0" />
          <p className="text-sm font-semibold leading-6">
            If water is active in your home right now, don&apos;t fill out the form —{" "}
            <a href={SITE.phoneHref} className="underline underline-offset-2 hover:no-underline">
              call {SITE.phone} immediately
            </a>
            . Every hour matters.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <Reveal className="surface-card rounded-[1rem] border border-slate-200/70 p-8">
            <h2 className="text-3xl font-bold">Tell us about the project</h2>
            <p className="mt-3 text-sm text-slate-600">Share the basics and we will follow up with the right next step for non-urgent work.</p>
            <div className="mt-6">
              <EstimateForm />
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal className="surface-card rounded-[1rem] border border-slate-200/70 p-8" delay={70}>
              <h2 className="text-2xl font-bold">Contact information</h2>
              <div className="mt-6 space-y-5 text-sm text-slate-700">
                <div className="flex gap-3"><Phone size={18} className="mt-1 text-[var(--color-accent)]" /><a href={SITE.phoneHref}>{SITE.phone}</a></div>
                <div className="flex gap-3"><Mail size={18} className="mt-1 text-[var(--color-accent)]" /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
                <div className="flex gap-3"><MapPin size={18} className="mt-1 text-[var(--color-accent)]" /><span>{SITE.address.full}</span></div>
                <div className="flex gap-3"><Clock3 size={18} className="mt-1 text-[var(--color-accent)]" /><span>{SITE.hours}</span></div>
              </div>
            </Reveal>

            <Reveal className="overflow-hidden rounded-[1rem] border border-slate-200/70" delay={100}>
              <iframe
                src="https://maps.google.com/maps?q=9520+174+St+NW+Edmonton+AB+T5T+5Z3&output=embed&z=15"
                width="100%"
                height="220"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Safe Home Solution & Restoration Inc. location map"
              />
            </Reveal>

          </div>
        </div>
      </section>
    </>
  );
}
