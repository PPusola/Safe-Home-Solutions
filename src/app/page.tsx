import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Phone, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { EmergencyCTA } from "@/components/sections/EmergencyCTA";
import { ProcessDeck } from "@/components/sections/ProcessDeck";
import { SERVICES } from "@/lib/content/services";
import { PROCESS_DECK_STEPS, STATS } from "@/lib/content/trust";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Edmonton Water Damage Restoration | 24/7 Emergency Response | Safe Home Solutions",
  description:
    "Safe Home Solutions helps Edmonton homeowners with emergency water damage restoration, drying, mold remediation, and practical insurance documentation support.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <Image
          src="https://commons.wikimedia.org/wiki/Special:FilePath/Edmonton%20Skyline.jpg"
          alt="Edmonton skyline"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(177,115,67,0.16),transparent_26%),linear-gradient(135deg,rgba(19,45,73,0.9)_0%,rgba(16,37,62,0.82)_48%,rgba(31,53,47,0.84)_100%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-22">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal className="text-white">
              <p className="eyebrow text-[#f6ccb4]">Edmonton water damage restoration</p>
              <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight !text-white sm:text-5xl lg:text-6xl">
                Calm, organized restoration support when your home takes on water.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                Safe Home Solutions helps Edmonton homeowners move from the first emergency call into a clear drying and recovery plan with local response, practical communication, and organized documentation.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href={SITE.phoneHref} className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-accent)] px-8 py-4 text-lg font-extrabold text-white hover:bg-[var(--color-accent-dark)]">
                  <Phone size={22} />
                  Call {SITE.phone}
                </a>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-lg font-bold text-white hover:bg-white/18">
                  Request an estimate
                  <ArrowRight size={18} />
                </Link>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {STATS.slice(0, 3).map((stat) => (
                  <div key={stat.label} className="rounded-[1.5rem] border border-white/10 bg-white/10 px-4 py-4 backdrop-blur-sm">
                    <div className="text-2xl font-extrabold text-white">{stat.value}</div>
                    <div className="mt-1 text-sm text-slate-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="hidden lg:block" delay={90}>
              <div className="min-h-[340px]" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="-mt-6 py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="surface-card rounded-[2rem] border border-slate-200/70 p-6 sm:p-8">
            <ProcessDeck steps={PROCESS_DECK_STEPS} />
          </Reveal>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow text-[var(--color-accent)]">Services</p>
              <h2 className="mt-3 text-3xl font-bold">Focused on the work people usually need most.</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                The homepage stays tighter now. Deeper explanations, scope details, and service FAQs live inside the individual service pages.
              </p>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-brand)]">
              View all services
              <ArrowRight size={14} />
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {SERVICES.slice(0, 4).map((service, index) => (
              <Reveal key={service.slug} delay={index * 65}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group surface-card block overflow-hidden rounded-[2rem] border border-slate-200/70 transition-transform duration-300 hover:-translate-y-1"
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

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="surface-card overflow-hidden rounded-[2rem] border border-slate-200/70">
            <div className="grid lg:grid-cols-2">
              <div className="border-b border-slate-200/70 p-7 sm:p-8 lg:border-b-0 lg:border-r">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 text-[var(--color-accent)]" />
                  <div>
                    <p className="eyebrow text-[var(--color-accent)]">Service area confidence</p>
                    <h2 className="mt-3 text-3xl font-bold">Edmonton first, with nearby communities covered too.</h2>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      If you are in Edmonton, Sherwood Park, St. Albert, Spruce Grove, Stony Plain, Leduc, Beaumont, or Fort Saskatchewan, there is a strong chance we can help quickly. If you are unsure, call anyway.
                    </p>
                    <Link href="/service-areas" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-brand)]">
                      View service areas
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="p-7 sm:p-8">
                <div className="flex items-start gap-3">
                  <Award className="mt-1 text-[var(--color-accent)]" />
                  <div>
                    <p className="eyebrow text-[var(--color-accent)]">Certification</p>
                    <h2 className="mt-3 text-3xl font-bold">IICRC WRT certified water restoration support.</h2>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      Safe Home Solutions is IICRC WRT certified, which means the company follows recognized water restoration and structural drying standards when responding to property damage.
                    </p>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      That matters because drying decisions, moisture tracking, and equipment use should be guided by trained process instead of guesswork when the home is under stress.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <EmergencyCTA />
    </>
  );
}
