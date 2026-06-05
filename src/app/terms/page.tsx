import type { Metadata } from "next";
import { InteriorHero } from "@/components/layout/InteriorHero";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for the Safe Home Solution & Restoration Inc. website and general service information.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Legal"
        title="Terms of Use"
        description="These terms explain how the website content should be used and what visitors should understand before relying on service information shown online."
      />

      <section className="py-16">
        <article className="surface-card prose-content mx-auto max-w-4xl rounded-[1rem] border border-slate-200/70 px-6 py-10 sm:px-10">
          <p><strong>Last updated:</strong> June 4, 2026</p>
          <p>
            This website is operated by <strong>{SITE.legalName}</strong>. By using this website, you agree to the terms below.
          </p>

          <h2>General Information Only</h2>
          <p>
            Website content is provided for general information about water damage restoration, emergency water removal, structural drying, mold remediation, storm-related mitigation, service areas, and contact methods. It is not a substitute for direct project review, written estimates, emergency call guidance, or a signed service agreement.
          </p>

          <h2>No Guarantee of Immediate Availability</h2>
          <p>
            Emergency response timing, service availability, and project scheduling depend on demand, safety conditions, weather, location, and the specific circumstances of each loss. Statements on the website about response expectations are general, not guaranteed.
          </p>

          <h2>Scope, Pricing, and Timelines</h2>
          <p>
            Any descriptions of services, processes, or timelines are illustrative and may change based on site conditions, moisture spread, material type, safety issues, insurance requirements, or owner decisions. Final scope, timing, and pricing are confirmed through direct communication and written documentation, not by website content alone.
          </p>

          <h2>No Professional or Legal Advice</h2>
          <p>
            The website does not provide legal, insurance, engineering, health, or environmental advice. If you need advice in those areas, you should consult the appropriate qualified professional.
          </p>

          <h2>Emergency Situations</h2>
          <p>
            If damage is active, unsafe, or time-sensitive, visitors should call the company directly instead of relying on contact forms alone. If there is immediate danger involving electricity, fire, structural instability, health risk, or public safety, contact the appropriate emergency services first.
          </p>

          <h2>Third-Party Content and Links</h2>
          <p>
            This website may include links, tools, maps, images, or services provided by third parties. {SITE.legalName} is not responsible for the separate policies, availability, or content of external services beyond its direct control.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            Website text, branding, layout, graphics, and other original content are intended for the business and may not be copied, republished, or reused for commercial purposes without permission, except where outside content is used under its own license or source terms.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            While reasonable care is taken in preparing website content, the company does not guarantee that every page is complete, current, or error-free at all times. Use of the website is at your own discretion.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            These terms may be updated from time to time as the website, business operations, or services change. The current version posted on this page will apply.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms may be directed to:
            <br />
            <strong>{SITE.name}</strong>
            <br />
            {SITE.address.full}
            <br />
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <br />
            <a href={SITE.phoneHref}>{SITE.phone}</a>
          </p>
        </article>
      </section>
    </>
  );
}
