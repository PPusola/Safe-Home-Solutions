import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

import { getService, SERVICES } from "@/lib/content/services";
import { SITE } from "@/lib/site";

export async function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 text-white lg:py-20">
        <Image
          src={service.cardImage}
          alt={service.title}
          fill
          priority
          sizes="100vw"
          className={`${service.imagePosition ?? "object-center"} object-cover`}
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${service.cardTone} opacity-88`} />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                {service.cardLabel}
              </span>
              <h1 className="mt-4 max-w-2xl text-4xl font-bold text-white lg:text-5xl">{service.title}</h1>
              <p className="mt-3 max-w-xl text-base leading-8 text-slate-200">{service.tagline}</p>
            </div>

            <div className="rounded-[1rem] border border-white/12 bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#f6ccb4]">Response</p>
              <p className="mt-2 text-sm leading-7 text-slate-100">{service.responseWindow}</p>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row lg:flex-col">
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-[0.95rem] bg-white px-5 py-3 text-sm font-bold text-[var(--color-brand)]"
                >
                  <Phone size={15} />
                  Call {SITE.phone}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-[0.95rem] border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white"
                >
                  Request estimate
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">

            {/* Left — main */}
            <Reveal className="space-y-6">

              {/* Overview */}
              <div className="surface-card rounded-[1rem] border border-slate-200/70 p-7 sm:p-8">
                <p className="eyebrow text-[var(--color-accent)]">Overview</p>
                <h2 className="mt-2 text-2xl font-bold">What this service covers</h2>
                <p className="mt-4 text-sm leading-8 text-slate-600">{service.description}</p>

                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                      <p className="text-sm leading-6 text-slate-600">{f}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's included */}
              <div className="surface-card rounded-[1rem] border border-slate-200/70 p-7 sm:p-8">
                <p className="eyebrow text-[var(--color-accent)]">What&apos;s included</p>
                <h2 className="mt-2 text-2xl font-bold">Usually part of the job</h2>
                <ul className="mt-5 space-y-3">
                  {service.included.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-600">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                      {item}
                    </li>
                  ))}
                </ul>
                {service.notIncluded.length > 0 && (
                  <>
                    <p className="mt-6 text-xs font-bold uppercase tracking-widest text-slate-400">
                      {service.notIncludedTitle ?? "Not included in initial visit"}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {service.notIncluded.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-500">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              {/* FAQ */}
              <div className="surface-card rounded-[1rem] border border-slate-200/70 p-7 sm:p-8">
                <p className="eyebrow text-[var(--color-accent)]">Common questions</p>
                <h2 className="mt-2 text-2xl font-bold">What homeowners usually ask</h2>
                <div className="mt-5 space-y-3">
                  {service.faqs.map((faq) => (
                    <details key={faq.question} className="group rounded-[0.9rem] border border-slate-200 bg-white/60 p-5">
                      <summary className="cursor-pointer list-none text-sm font-semibold text-[var(--color-ink)]">
                        {faq.question}
                      </summary>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>

            </Reveal>

            {/* Right — sidebar */}
            <Reveal className="space-y-6" delay={70}>

              {/* Project example */}
              <div className="surface-card overflow-hidden rounded-[1rem] border border-slate-200/70">
                <div className="border-b border-slate-100 px-5 py-3.5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">Project Example</p>
                  <h3 className="mt-0.5 text-sm font-bold text-[var(--color-ink)]">{service.projectExample.title}</h3>
                  <p className="mt-0.5 inline-flex items-center gap-1 text-xs text-slate-500">
                    <MapPin size={10} />
                    {service.projectExample.location}
                  </p>
                </div>
                <Link
                  href={`/reviews-projects?category=${encodeURIComponent(service.projectCategory)}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={service.projectExampleImage ?? service.cardImage}
                      alt={`${service.title} project example`}
                      fill
                      sizes="(min-width: 1024px) 320px, 100vw"
                      className={`${service.imagePosition ?? "object-center"} object-cover transition-transform duration-500 group-hover:scale-105`}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.cardTone} opacity-50`} />
                  </div>
                  <div className="flex items-start justify-between gap-3 p-5">
                    <p className="text-sm leading-7 text-slate-600">{service.projectExample.summary}</p>
                    <ArrowRight size={15} className="mt-1 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--color-accent)]" />
                  </div>
                </Link>
              </div>

              {/* Process */}
              <div className="surface-card rounded-[1rem] border border-slate-200/70 p-6">
                <p className="eyebrow text-[var(--color-accent)]">How it starts</p>
                <h3 className="mt-2 text-lg font-bold">First steps on every job</h3>
                <ol className="mt-4 space-y-3">
                  {service.process.map((step, i) => (
                    <li key={step} className="flex items-center gap-3 text-sm text-slate-600">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)] text-[11px] font-bold text-white">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Service areas */}
              <div className="surface-card rounded-[1rem] border border-slate-200/70 p-6">
                <p className="eyebrow text-[var(--color-accent)]">Common areas</p>
                <h3 className="mt-2 text-lg font-bold">Where we do this work</h3>
                <div className="mt-4 grid gap-2">
                  {service.serviceAreaHighlights.map((area) => (
                    <span key={area} className="rounded-[0.75rem] border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-600">
                      {area}
                    </span>
                  ))}
                </div>
                <Link href="/service-areas" className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[var(--color-brand)] hover:underline">
                  View all areas
                  <ArrowRight size={13} />
                </Link>
              </div>

            </Reveal>
          </div>
        </div>
      </section>

    </>
  );
}
