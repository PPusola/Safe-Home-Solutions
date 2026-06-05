import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, MapPin, Phone, Users } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { EmergencyCTA } from "@/components/sections/EmergencyCTA";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Company | Safe Home Solution & Restoration Inc. Edmonton",
  description: "Learn about Safe Home Solution & Restoration Inc. — our team, our process, the areas we serve, and how to get in touch.",
  alternates: { canonical: "/company" },
};

const STATS = [
  { value: "24/7", label: "Emergency response" },
  { value: "IICRC", label: "WRT certified" },
  { value: "Local", label: "Edmonton based" },
  { value: "Insured", label: "Fully covered" },
];

const PAGES = [
  {
    label: "About Us",
    href: "/about",
    icon: Users,
    description: "Who we are, how we work, and why we built the company around clear communication and practical restoration support.",
  },
  {
    label: "Our Process",
    href: "/process",
    icon: ArrowRight,
    description: "A step-by-step look at how we handle every job — from the first call through drying, documentation, and final review.",
  },
  {
    label: "Service Areas",
    href: "/service-areas",
    icon: MapPin,
    description: "We cover Edmonton and nearby communities including Sherwood Park, St. Albert, Spruce Grove, Leduc, and more.",
  },
  {
    label: "Reviews & Projects",
    href: "/reviews-projects",
    icon: Award,
    description: "Client feedback and before/after examples from real restoration jobs across the Edmonton area.",
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Phone,
    description: "Send a non-urgent estimate request or find our phone number and address for emergency response.",
  },
];

export default function CompanyPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-4 pb-0 pt-8 sm:px-6 lg:px-8 lg:pt-10">
        <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.25rem] border border-[var(--color-brand-soft)] bg-[linear-gradient(135deg,#f7f2eb,#efe6d8)]">
          {/* Decorative blobs */}
          <div className="pointer-events-none absolute inset-0 -z-0">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[var(--color-accent)]/10 blur-3xl" />
            <div className="absolute -bottom-10 left-10 h-56 w-56 rounded-full bg-[var(--color-brand)]/8 blur-2xl" />
          </div>

          <div className="relative z-10 grid gap-10 px-6 py-12 sm:px-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16 lg:px-14 lg:py-16">
            <div>
              <p className="eyebrow text-[var(--color-accent)]">Company</p>
              <h1 className="mt-3 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
                Edmonton restoration,<br />
                <span className="text-[var(--color-brand)]">built around the homeowner.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                {SITE.name} is a locally owned Edmonton company focused on water damage restoration, structural drying, and mold remediation — with clear communication at every stage.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-[0.95rem] bg-[var(--color-brand)] px-6 py-3 text-sm font-bold text-white hover:bg-[var(--color-brand)]/90"
                >
                  Learn about us
                  <ArrowRight size={15} />
                </Link>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center gap-2 rounded-[0.95rem] border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700 hover:border-slate-400"
                >
                  <Phone size={15} />
                  {SITE.phone}
                </a>
              </div>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-3 lg:w-64 lg:grid-cols-1">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/80 bg-white/70 px-5 py-4 shadow-sm backdrop-blur-sm"
                >
                  <div className="text-2xl font-extrabold tracking-tight text-[var(--color-brand)]">{stat.value}</div>
                  <div className="mt-0.5 text-xs font-semibold uppercase tracking-widest text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Sub-page cards */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-8">
            <h2 className="text-2xl font-bold">Explore the company</h2>
            <p className="mt-2 text-sm leading-7 text-slate-500">Everything you need to know about who we are and how we work.</p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PAGES.map((page, i) => {
              const Icon = page.icon;
              return (
                <Reveal key={page.href} delay={i * 55}>
                  <Link
                    href={page.href}
                    className="group surface-card flex flex-col gap-4 rounded-[1rem] border border-slate-200/70 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-brand-soft)]">
                      <Icon size={18} className="text-[var(--color-brand)]" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-bold">{page.label}</h3>
                        <ArrowRight size={14} className="shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--color-accent)]" />
                      </div>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{page.description}</p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <EmergencyCTA />
    </>
  );
}
