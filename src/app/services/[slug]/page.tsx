import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, FileText, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { EmergencyCTA } from "@/components/sections/EmergencyCTA";
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

  if (!service) {
    return {};
  }

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

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="relative overflow-hidden py-16 text-white lg:py-24">
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
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                {service.cardLabel}
              </span>
              <h1 className="mt-4 max-w-3xl text-4xl font-bold text-white lg:text-5xl">{service.title}</h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-100">{service.tagline}</p>
            </div>

            <div className="rounded-[1.75rem] border border-white/12 bg-white/10 p-5 backdrop-blur-sm">
              <p className="eyebrow text-[#f6ccb4]">Response expectation</p>
              <p className="mt-3 text-sm leading-7 text-slate-100">{service.responseWindow}</p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a href={SITE.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[var(--color-brand)]">
                  <Phone size={16} />
                  Call now
                </a>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white">
                  Free estimate
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <Reveal className="space-y-8">
              <div className="surface-card rounded-[2rem] border border-slate-200/70 p-7 sm:p-8">
                <p className="eyebrow text-[var(--color-accent)]">Overview</p>
                <h2 className="mt-3 text-3xl font-bold">What this service is really for.</h2>
                <p className="mt-4 text-sm leading-8 text-slate-600">{service.description}</p>
              </div>

              <div className="surface-card rounded-[2rem] border border-slate-200/70 p-7 sm:p-8">
                <p className="eyebrow text-[var(--color-accent)]">Scope of work</p>
                <h2 className="mt-3 text-3xl font-bold">What we typically handle.</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="rounded-[1.4rem] border border-slate-200/80 bg-white/70 p-4">
                      <div className="flex gap-3">
                        <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                        <p className="text-sm leading-7 text-slate-600">{feature}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="surface-card rounded-[2rem] border border-slate-200/70 p-7">
                  <p className="eyebrow text-[var(--color-accent)]">Before the first visit</p>
                  <h3 className="mt-3 text-2xl font-bold">What homeowners are usually dealing with.</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    Uncertainty, active water or lingering moisture, questions about safety, and not knowing how much of the damage is visible versus hidden.
                  </p>
                </div>
                <div className="surface-card rounded-[2rem] border border-slate-200/70 p-7">
                  <p className="eyebrow text-[var(--color-accent)]">After stabilization starts</p>
                  <h3 className="mt-3 text-2xl font-bold">What the job should feel like.</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    A clearer scope, a defined drying or remediation plan, better documentation, and a more practical sense of what happens next.
                  </p>
                </div>
              </div>

              <div className="surface-card rounded-[2rem] border border-slate-200/70 p-7 sm:p-8">
                <p className="eyebrow text-[var(--color-accent)]">Service FAQ</p>
                <h2 className="mt-3 text-3xl font-bold">Common questions on this kind of job.</h2>
                <div className="mt-6 space-y-4">
                  {service.faqs.map((faq) => (
                    <details key={faq.question} className="rounded-[1.25rem] border border-slate-200 bg-white/70 p-5">
                      <summary className="cursor-pointer text-base font-semibold text-[var(--color-ink)]">{faq.question}</summary>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal className="space-y-6" delay={80}>
              <div className="surface-card overflow-hidden rounded-[2rem] border border-slate-200/70">
                <div className="relative aspect-[4/3] sm:aspect-square">
                  <Image
                    src={service.cardImage}
                    alt={`${service.title} project example`}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className={`${service.imagePosition ?? "object-center"} object-cover`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.cardTone} opacity-60`} />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/80">Project example</p>
                    <h2 className="mt-2 text-2xl font-bold text-white">{service.projectExample.title}</h2>
                    <p className="mt-2 inline-flex items-center gap-2 text-sm text-white/84">
                      <MapPin size={14} />
                      {service.projectExample.location}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-7 text-slate-600">{service.projectExample.summary}</p>
                </div>
              </div>

              <div className="surface-card rounded-[2rem] border border-slate-200/70 p-7 sm:p-8">
                <p className="eyebrow text-[var(--color-accent)]">What happens first</p>
                <h2 className="mt-3 text-2xl font-bold">The early-phase plan.</h2>
                <ol className="mt-5 space-y-4">
                  {service.process.map((step, index) => (
                    <li key={step} className="grid grid-cols-[auto_1fr] gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-brand)] text-sm font-bold text-white">
                        {index + 1}
                      </div>
                      <p className="pt-1 text-sm leading-7 text-slate-600">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="surface-card rounded-[2rem] border border-slate-200/70 p-7 sm:p-8">
                <div className="flex items-start gap-3">
                  <FileText className="mt-1 text-[var(--color-accent)]" />
                  <div>
                    <p className="eyebrow text-[var(--color-accent)]">Insurance and records</p>
                    <h2 className="mt-3 text-2xl font-bold">Helpful documentation support.</h2>
                  </div>
                </div>
                <div className="mt-5 space-y-3">
                  {service.insuranceSupport.map((item) => (
                    <div key={item} className="rounded-[1.25rem] border border-slate-200 bg-white/70 p-4 text-sm leading-7 text-slate-600">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="surface-card rounded-[2rem] border border-slate-200/70 p-7 sm:p-8">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 text-[var(--color-accent)]" />
                  <div>
                    <p className="eyebrow text-[var(--color-accent)]">Service area confidence</p>
                    <h2 className="mt-3 text-2xl font-bold">Common nearby areas for this work.</h2>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      Calls for this service commonly come from the following Edmonton neighbourhoods and surrounding communities:
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.serviceAreaHighlights.map((area) => (
                    <span key={area} className="rounded-full bg-[var(--color-brand-soft)] px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-brand)]">
                      {area}
                    </span>
                  ))}
                </div>
                <Link href="/service-areas" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-brand)]">
                  Explore service areas
                  <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="surface-card rounded-[2rem] border border-slate-200/70 p-7 sm:p-8">
            <p className="eyebrow text-[var(--color-accent)]">What to expect from the first call</p>
            <h2 className="mt-3 text-3xl font-bold">Clear guidance, then a calmer job site.</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {service.whatToExpect.map((item) => (
                <div key={item} className="rounded-[1.4rem] border border-slate-200/80 bg-white/70 p-5">
                  <p className="text-sm leading-7 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm font-semibold text-[var(--color-accent)]">{service.cta}</p>
          </Reveal>
        </div>
      </section>

      <EmergencyCTA />
    </>
  );
}
