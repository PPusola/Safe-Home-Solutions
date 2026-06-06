import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { InteriorHero } from "@/components/layout/InteriorHero";
import { Reveal } from "@/components/motion/Reveal";
import { SERVICES } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Restoration Services | Safe Home Solution & Restoration Inc. Edmonton",
  description: "Browse water damage restoration, emergency water removal, structural drying, mold remediation, and related services in Edmonton.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Services"
        title="Restoration Services"
        description="Clear, practical restoration support for Edmontonians and nearby communities (residential, commercial, and industrial), organized by the kind of help you actually need."
      />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10 max-w-2xl">
            <p className="eyebrow text-[var(--color-accent)]">Browse by service</p>
            <h2 className="mt-3 text-3xl font-bold">Start with the type of restoration help you need.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Each service page now carries the deeper information: what the work includes, what usually happens first, and how documentation and next steps are handled.
            </p>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-6">
            {SERVICES.map((service, index) => (
              <Reveal key={service.slug} delay={index * 70} className="w-full md:w-[calc(50%-12px)] xl:w-[calc(33.333%-16px)] h-full">
                <Link
                  href={`/services/${service.slug}`}
                  className="group surface-card h-full flex flex-col overflow-hidden rounded-[1rem] border border-slate-200/70 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={service.cardImage}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className={`transition-transform duration-500 group-hover:scale-105 ${service.imagePosition ?? "object-center"} object-cover`}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.cardTone} opacity-85`} />
                    <div className="absolute inset-x-0 top-0 p-5">
                      <span className="inline-flex rounded-full border border-white/20 bg-white/12 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                        {service.cardLabel}
                      </span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                      <h2 className="max-w-[14rem] text-2xl font-bold leading-tight text-white">{service.title}</h2>
                      <p className="mt-3 max-w-[16rem] text-sm leading-6 text-white/84">{service.tagline}</p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-between gap-4 p-5">
                    <p className="line-clamp-3 text-sm leading-7 text-slate-600">{service.description}</p>
                    <div className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-accent)]">
                      Read more
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
