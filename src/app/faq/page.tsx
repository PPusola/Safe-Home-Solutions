import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { EmergencyCTA } from "@/components/sections/EmergencyCTA";
import { FAQS, FAQ_CATEGORIES } from "@/lib/content/faqs";

export const metadata: Metadata = {
  title: "FAQ | Water Damage Restoration Edmonton | Safe Home Solutions",
  description: "Answers to common questions about water damage restoration, drying, and claim support in Edmonton.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <>
      <section className="bg-[var(--color-brand)] py-16 text-white">
        <Reveal className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-slate-200">Straightforward answers about emergency response, drying, insurance support, and service coverage.</p>
        </Reveal>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {FAQ_CATEGORIES.map((category) => (
            <Reveal key={category} className="mb-10">
              <h2 className="mb-4 text-2xl font-bold">{category}</h2>
              <div className="space-y-3">
                {FAQS.filter((faq) => faq.category === category).map((faq) => (
                  <details key={faq.question} className="surface-card rounded-[1.5rem] border border-slate-200/70 px-5 py-4">
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

      <EmergencyCTA heading="Still have questions?" subtext="Call us any time and we will help you understand the next step before you commit to anything." />
    </>
  );
}
