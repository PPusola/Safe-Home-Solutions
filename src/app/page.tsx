import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Phone, Tag } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectExamples } from "@/components/sections/ProjectExamples";
import { CustomerReviews } from "@/components/sections/CustomerReviews";
import { ServiceSpotlightCarousel } from "@/components/sections/ServiceSpotlightCarousel";
import { SpecialsGate } from "@/components/sections/SpecialsGate";
import { SpecialsSection } from "@/components/sections/SpecialsSection";
import { SPECIALS, specialsActive } from "@/lib/content/specials";
import { SERVICES } from "@/lib/content/services";
import { STATS } from "@/lib/content/trust";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Edmonton Water Damage Restoration | 24/7 Emergency Response | Safe Home Solution & Restoration Inc.",
  description:
    "Safe Home Solution & Restoration Inc. helps Edmontonians and nearby communities with emergency water damage restoration, drying, mold remediation, and practical insurance documentation support. We serve residential, commercial, and industrial properties.",
  alternates: { canonical: "/" },
};

// Re-render hourly so the specials section disappears on its own after its end date.
export const revalidate = 3600;

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <Image
          src="/images/gallery/drying-equipment.webp"
          alt="Drying equipment set up in a basement after water damage"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(177,115,67,0.16),transparent_26%),linear-gradient(135deg,rgba(19,45,73,0.8)_0%,rgba(16,37,62,0.6)_48%,rgba(31,53,47,0.55)_100%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:grid lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-center lg:gap-10 lg:px-8 lg:py-22 xl:grid-cols-[minmax(0,1fr)_26rem] xl:gap-12">
          <Reveal className="text-white">
            {specialsActive() && (
              <SpecialsGate serverActive>
                <a
                  href="#specials"
                  className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f6ccb4]/40 bg-white/10 px-4 py-1.5 text-sm font-bold text-white backdrop-blur-sm hover:bg-white/18"
                >
                  <Tag size={14} className="shrink-0 text-[#f6ccb4]" aria-hidden="true" />
                  {SPECIALS.title}: free inspection
                  <ArrowRight size={14} className="shrink-0" />
                </a>
              </SpecialsGate>
            )}
            <p className="eyebrow text-[#f6ccb4]">Edmonton water damage restoration</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight !text-white sm:text-5xl lg:text-6xl">
              Calm, organized restoration support when your property takes on water.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Safe Home Solution & Restoration Inc. is here for Edmontonians and nearby communities. Whether it is a home, a business, or an industrial property, we guide you from the first emergency call through a clear drying and recovery plan with local response, practical communication, and organized documentation.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a href={SITE.phoneHref} className="inline-flex items-center justify-center gap-3 rounded-[1rem] bg-[var(--color-accent)] px-6 py-4 text-center text-lg font-extrabold text-white hover:bg-[var(--color-accent-dark)] sm:px-8">
                <Phone size={22} className="shrink-0" />
                Call or text {SITE.phone}, day or night
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-[1rem] border border-white/20 bg-white/10 px-8 py-4 text-lg font-bold text-white hover:bg-white/18">
                Book a free inspection
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="mt-8 max-w-xl grid gap-px sm:grid-cols-3 overflow-hidden rounded border border-white/10">
              {STATS.slice(0, 3).map((stat, i) => (
                <div key={stat.label} className={`bg-white/8 px-5 py-4 backdrop-blur-sm ${i < 2 ? "sm:border-r border-white/10" : ""}`}>
                  <div className="text-2xl font-extrabold tracking-tight text-white">{stat.value}</div>
                  <div className="mt-0.5 text-xs font-medium uppercase tracking-widest text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 max-w-xl lg:hidden">
              <CustomerReviews compact />
            </div>
          </Reveal>

          <div className="hidden lg:block">
            <CustomerReviews compact />
          </div>
        </div>
      </section>

      <SpecialsSection />

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-8 max-w-2xl">
            <p className="eyebrow text-[var(--color-accent)]">Project examples</p>
            <h2 className="mt-3 text-3xl font-bold">Real job photos from properties across the communities we serve.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              A look at the kinds of damage and site conditions our team is called to assess and restore.
            </p>
          </Reveal>
          <ProjectExamples />
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <ServiceSpotlightCarousel />
          </Reveal>

          <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow text-[var(--color-accent)]">Services</p>
              <h2 className="mt-3 text-3xl font-bold">Focused on the work people usually need most.</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                From water extraction and structural drying to mold remediation and storm recovery. Each service page explains the scope, timeline, and what to expect in plain language.
              </p>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-brand)]">
              View all services
              <ArrowRight size={14} />
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((service, index) => (
              <Reveal key={service.slug} delay={index * 65}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group surface-card block overflow-hidden rounded-[1rem] border border-slate-200/70 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={service.cardImage}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                      className={`transition-transform duration-500 group-hover:scale-105 ${service.imagePosition ?? "object-center"} object-cover`}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.cardTone} opacity-85`} />
                    <div className="absolute inset-x-0 top-0 p-4">
                      <span className="inline-flex rounded-full border border-white/20 bg-white/12 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                        {service.cardLabel}
                      </span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                      <h3 className="max-w-[12rem] text-2xl font-bold leading-tight text-white">{service.shortTitle}</h3>
                      <p className="mt-2 max-w-[15rem] text-sm leading-6 text-white/84">{service.tagline}</p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 pt-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="surface-card overflow-hidden rounded-[1rem] border border-slate-200 shadow-sm">
            <div className="grid lg:grid-cols-2">

              {/* Service areas */}
              <div className="border-b border-slate-200/70 p-8 lg:border-b-0 lg:border-r">
                <p className="eyebrow text-[var(--color-accent)]">Service area</p>
                <h2 className="mt-2 text-3xl font-bold leading-snug">Edmonton first, nearby communities covered too.</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  If you are unsure whether we cover your area, call anyway. There is a strong chance we can help quickly.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Edmonton", "Sherwood Park", "St. Albert", "Spruce Grove", "Stony Plain", "Leduc", "Beaumont", "Fort Saskatchewan"].map((area) => (
                    <span key={area} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                      {area}
                    </span>
                  ))}
                </div>
                <Link href="/service-areas" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-brand)] hover:underline">
                  View all service areas
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* Certification */}
              <div className="grid gap-8 p-8 xl:grid-cols-[1fr_220px] xl:items-start overflow-hidden">
                <div>
                  <p className="eyebrow text-[var(--color-accent)]">Certification</p>
                  <h2 className="mt-2 text-3xl font-bold leading-snug">IICRC WRT certified.</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    Safe Home Solution & Restoration Inc. holds IICRC WRT certification, meaning the company follows recognized water restoration and structural drying standards on every job.
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Drying decisions, moisture tracking, and equipment use are guided by trained process, not guesswork.
                  </p>
                  <Link href="/about" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-brand)] hover:underline">
                    Learn about our approach
                    <ArrowRight size={14} />
                  </Link>
                </div>

                <div className="w-full max-w-[220px] overflow-hidden rounded-[0.95rem] border border-[var(--color-brand)]/12 bg-[linear-gradient(160deg,#f8f3eb,#ede5d6)] p-3 shadow-[0_12px_32px_rgba(39,34,27,0.09)]">
                  <div className="overflow-hidden rounded-[0.7rem] bg-white shadow-sm">
                    <Image
                      src="/photos/iicrc-cert.jpg"
                      alt="IICRC WRT certificate"
                      width={220}
                      height={293}
                      className="h-auto w-full object-contain"
                      sizes="220px"
                    />
                  </div>
                  <div className="mt-3 flex items-center gap-2.5 px-1">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)]">
                      <Award size={15} className="text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-accent)]">IICRC</p>
                      <p className="text-xs font-semibold text-[var(--color-ink)]">Water Restoration Technician</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col gap-5 rounded-[1rem] border border-slate-200 bg-white p-6 shadow-[0_14px_38px_rgba(39,34,27,0.07)] sm:p-7 lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <div className="text-center lg:text-left">
              <p className="eyebrow text-[var(--color-accent)]">Ready for the next step?</p>
              <h2 className="mt-2 text-2xl font-bold leading-tight">
                Ready to restore your property?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                Tell us what happened and where you are located. We will help you understand the next practical step.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-[0.85rem] bg-[var(--color-accent)] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(177,115,67,0.18)] hover:bg-[var(--color-accent-dark)]"
            >
              Contact us
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
