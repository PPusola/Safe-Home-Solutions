import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for the Safe Home Solutions & Restorations website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="py-16">
      <article className="surface-card prose-content mx-auto max-w-4xl rounded-[2rem] border border-slate-200/70 px-6 py-10 sm:px-10">
        <h1>Terms of Use</h1>
        <p>This website is provided for general information about Safe Home Solutions & Restorations and our services.</p>
        <p>Project timelines, scope, and pricing are confirmed through direct communication and written estimates, not by website content alone.</p>
      </article>
    </section>
  );
}
