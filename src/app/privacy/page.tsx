import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy information for Safe Home Solutions & Restorations.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="py-16">
      <article className="surface-card prose-content mx-auto max-w-4xl rounded-[2rem] border border-slate-200/70 px-6 py-10 sm:px-10">
        <h1>Privacy Policy</h1>
        <p>We use the information you share through this website to respond to your request, coordinate service, and communicate about your project.</p>
        <p>We do not sell personal information. If you contact us with questions about your data, we will do our best to respond promptly.</p>
      </article>
    </section>
  );
}
