import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import { InteriorHero } from "@/components/layout/InteriorHero";
import { Reveal } from "@/components/motion/Reveal";

import { FAQS, FAQ_CATEGORIES } from "@/lib/content/faqs";

export const metadata: Metadata = {
  title: "FAQ | Water Damage Restoration Edmonton | Safe Home Solution & Restoration Inc.",
  description: "Answers to common questions about water damage restoration, drying, and claim support in Edmonton.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <>
      <InteriorHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Straightforward answers about emergency response, drying, insurance support, and service coverage, without making you dig through the whole site."
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {FAQ_CATEGORIES.map((category) => (
            <Reveal key={category} className="mb-10">
              <h2 className="mb-4 text-2xl font-bold">{category}</h2>
              <div className="space-y-3">
                {FAQS.filter((faq) => faq.category === category).map((faq) => (
                  <details key={faq.question} className="surface-card rounded-[0.95rem] border border-slate-200/70 px-5 py-4">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-sm font-bold text-[var(--color-brand)]">
                      {faq.question}
                      <ChevronDown size={18} className="shrink-0 text-slate-500" />
                    </summary>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

    </>
  );
}
