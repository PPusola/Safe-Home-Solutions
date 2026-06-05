import type { Metadata } from "next";
import { InteriorHero } from "@/components/layout/InteriorHero";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy information for Safe Home Solution & Restoration Inc., an Edmonton-based water damage restoration company.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This page explains what information Safe Home Solution & Restoration Inc. may collect through the website, how it is used, and how to contact the company with privacy questions."
      />

      <section className="py-16">
        <article className="surface-card prose-content mx-auto max-w-4xl rounded-[1rem] border border-slate-200/70 px-6 py-10 sm:px-10">
          <p><strong>Last updated:</strong> June 4, 2026</p>
          <p>
            This Privacy Policy applies to information collected through the <strong>{SITE.legalName}</strong> website, including contact forms, estimate requests, and direct email or phone inquiries that begin from the site.
          </p>

          <h2>Information We May Collect</h2>
          <p>When you contact the company through the website, we may collect:</p>
          <ul>
            <li>Your name, phone number, email address, and property address.</li>
            <li>Details you choose to share about water damage, mold, storm damage, or other service needs.</li>
            <li>Basic technical information such as browser or device data that may be collected through standard website hosting and analytics tools.</li>
          </ul>

          <h2>How We Use Information</h2>
          <p>Information submitted through the website may be used to:</p>
          <ul>
            <li>Respond to emergency and non-urgent service requests.</li>
            <li>Prepare estimates, schedule calls, or coordinate site visits.</li>
            <li>Communicate about projects, documentation, or follow-up questions.</li>
            <li>Improve the website, service communication, and customer support experience.</li>
          </ul>

          <h2>Emergency Calls and Service Requests</h2>
          <p>
            If you submit a form or call the company about active damage, the information you provide may be used to assess urgency, determine service area fit, and guide the next response steps. Please avoid sharing sensitive financial information through standard contact forms.
          </p>

          <h2>Sharing of Information</h2>
          <p>
            The company does not sell personal information. Information may be shared only when reasonably necessary to operate the business, such as with internal staff, service providers supporting email or website systems, or insurance-related parties when you ask for documentation or claim support.
          </p>

          <h2>Data Retention</h2>
          <p>
            Contact and project-related information may be retained for business operations, customer support, documentation, and legal or recordkeeping purposes for a reasonable period of time.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            This website may rely on third-party tools for hosting, forms, analytics, mapping, fonts, or email delivery. Those providers may process limited technical or contact information as part of normal website operations.
          </p>

          <h2>Security</h2>
          <p>
            Reasonable steps are taken to protect submitted information, but no online system can guarantee absolute security. For that reason, please do not send highly sensitive personal, financial, or confidential claim information through general website forms unless specifically requested through a secure process.
          </p>

          <h2>Your Choices</h2>
          <p>
            You may contact the company to ask questions about information you previously submitted or to request updates to contact details associated with your inquiry.
          </p>

          <h2>Contact</h2>
          <p>
            For privacy questions, contact:
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
