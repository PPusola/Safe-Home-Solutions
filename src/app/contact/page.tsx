import type { Metadata } from "next";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { EstimateForm } from "@/components/forms/EstimateForm";
import { Reveal } from "@/components/motion/Reveal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Request an Estimate | Safe Home Solutions Edmonton",
  description: "Contact Safe Home Solutions for a non-urgent estimate or general restoration questions in Edmonton.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-[var(--color-brand)] py-16 text-white">
        <Reveal className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Request a Non-Urgent Estimate</h1>
          <p className="mt-4 text-lg text-slate-200">
            Fill out the form below for non-urgent work and general questions. If the damage is active or time-sensitive, call us now because we answer 24/7.
          </p>
        </Reveal>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <Reveal className="surface-card rounded-[2rem] border border-slate-200/70 p-8">
            <h2 className="text-3xl font-bold">Tell us about the project</h2>
            <p className="mt-3 text-sm text-slate-600">Share the basics and we will follow up with the right next step for non-urgent work.</p>
            <div className="mt-6">
              <EstimateForm />
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal className="surface-card rounded-[2rem] border border-slate-200/70 p-8" delay={70}>
              <h2 className="text-2xl font-bold">Contact information</h2>
              <div className="mt-6 space-y-5 text-sm text-slate-700">
                <div className="flex gap-3"><Phone size={18} className="mt-1 text-[var(--color-accent)]" /><a href={SITE.phoneHref}>{SITE.phone}</a></div>
                <div className="flex gap-3"><Mail size={18} className="mt-1 text-[var(--color-accent)]" /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
                <div className="flex gap-3"><MapPin size={18} className="mt-1 text-[var(--color-accent)]" /><span>{SITE.address.full}</span></div>
                <div className="flex gap-3"><Clock3 size={18} className="mt-1 text-[var(--color-accent)]" /><span>{SITE.hours}</span></div>
              </div>
            </Reveal>

            <Reveal className="surface-card rounded-[2rem] border border-slate-200/70 p-8" delay={130}>
              <h3 className="text-2xl font-bold">Quick message</h3>
              <p className="mt-3 text-sm text-slate-600">Not an emergency? Send us a note and we will reply soon.</p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
