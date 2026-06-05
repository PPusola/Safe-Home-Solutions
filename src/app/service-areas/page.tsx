import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { EmergencyCTA } from "@/components/sections/EmergencyCTA";
import { SERVICE_AREAS } from "@/lib/content/areas";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas | Edmonton Water Damage Restoration | Safe Home Solutions",
  description: "Service coverage for Edmonton, Sherwood Park, St. Albert, Spruce Grove, Stony Plain, Leduc, Beaumont, and Fort Saskatchewan.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  const primaryArea = SERVICE_AREAS.find((area) => area.isPrimary);
  const nearbyAreas = SERVICE_AREAS.filter((area) => !area.isPrimary);
  const creditedAreas = SERVICE_AREAS.filter((area) => area.photoCredit && area.photoLicense && area.photoSourceHref);

  return (
    <>
      <section className="bg-[var(--color-brand)] py-16 text-white">
        <Reveal className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Service Areas</h1>
          <p className="mt-4 text-lg text-slate-200">24/7 restoration coverage across Edmonton and nearby communities.</p>
        </Reveal>
      </section>

      {primaryArea && (
        <section className="py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <Reveal className="surface-card overflow-hidden rounded-[2rem] border border-slate-200/70">
              <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                <div className="p-8">
                  <div className="flex items-start gap-3">
                    <MapPin size={24} className="mt-1 text-[var(--color-accent)]" />
                    <div>
                      <h2 className="text-3xl font-bold">{primaryArea.name}</h2>
                      <p className="mt-3 text-sm leading-8 text-slate-600">{primaryArea.description}</p>
                    </div>
                  </div>
                  <a href={SITE.phoneHref} className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-bold text-white hover:bg-[var(--color-accent-dark)]">
                    <Phone size={16} />
                    {SITE.phone}
                  </a>
                </div>
                <div className="relative min-h-[280px]">
                  {primaryArea.cardImage && (
                    <>
                      <Image
                        src={primaryArea.cardImage}
                        alt={primaryArea.name}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className={`${primaryArea.imagePosition ?? "object-center"} object-cover`}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-tr ${primaryArea.cardTone ?? "from-[#20313b]/20 via-transparent to-[#20313b]/70"}`} />
                    </>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <section className="py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {nearbyAreas.map((area, index) => (
              <Reveal key={area.slug} delay={index * 60}>
              <div className="surface-card overflow-hidden rounded-[1.75rem] border border-slate-200/70">
                <div className="relative aspect-[1/1]">
                  {area.cardImage && (
                    <>
                      <Image
                        src={area.cardImage}
                        alt={area.name}
                        fill
                        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className={`${area.imagePosition ?? "object-center"} object-cover`}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${area.cardTone ?? "from-[#20313b]/20 via-transparent to-[#20313b]/75"}`} />
                    </>
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-white/90" />
                      <h3 className="text-xl font-bold text-white">{area.name}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-7 text-slate-600">{area.description}</p>
                </div>
              </div>
              </Reveal>
            ))}
          </div>

          {creditedAreas.length > 0 && (
            <Reveal className="mt-10 rounded-[1.5rem] border border-slate-200/70 bg-white/70 p-5 text-sm text-slate-600">
              <p className="font-semibold text-slate-800">Area photo credits</p>
              <div className="mt-3 grid gap-2 md:grid-cols-2">
                {creditedAreas.map((area) => (
                  <p key={area.slug}>
                    <span className="font-medium text-slate-800">{area.name}</span>
                    {" · "}
                    <a href={area.photoSourceHref} target="_blank" rel="noreferrer" className="text-[var(--color-accent-dark)] hover:underline">
                      {area.photoCredit}
                    </a>
                    {" · "}
                    {area.photoLicense}
                  </p>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <EmergencyCTA heading="Not sure if you are in our service area?" subtext="Call us anyway. If we can help, we will." />
    </>
  );
}
