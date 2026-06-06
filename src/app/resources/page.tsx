import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, HelpCircle } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { EmergencyCTA } from "@/components/sections/EmergencyCTA";
import { BLOG_POSTS } from "@/lib/content/blog";
import { FAQS } from "@/lib/content/faqs";

export const metadata: Metadata = {
  title: "Resources | Safe Home Solution & Restoration Inc. Edmonton",
  description: "Helpful articles and answers about water damage restoration, mold remediation, insurance claims, and what to do in an emergency.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  const recentPosts = BLOG_POSTS.slice(0, 3);
  const faqCount = FAQS.length;
  const faqCategories = [...new Set(FAQS.map((f) => f.category))];

  return (
    <>
      {/* Hero */}
      <section className="px-4 pb-0 pt-8 sm:px-6 lg:px-8 lg:pt-10">
        <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.25rem] border border-[var(--color-brand-soft)] bg-[linear-gradient(135deg,#f7f2eb,#efe6d8)]">
          <div className="pointer-events-none absolute inset-0 -z-0">
            <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-[var(--color-accent)]/10 blur-3xl" />
            <div className="absolute -bottom-10 right-10 h-52 w-52 rounded-full bg-[var(--color-brand)]/8 blur-2xl" />
          </div>

          <div className="relative z-10 px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
            <p className="eyebrow text-[var(--color-accent)]">Resources</p>
            <h1 className="mt-3 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
              Practical information<br />
              <span className="text-[var(--color-brand)]">for Edmonton homeowners.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              Articles and answers on water damage, mold, insurance claims, and what to expect during a restoration job, written in plain language.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2.5 rounded-2xl border border-white/80 bg-white/70 px-5 py-3 shadow-sm backdrop-blur-sm">
                <BookOpen size={16} className="text-[var(--color-accent)]" />
                <span className="text-sm font-semibold text-slate-700">{BLOG_POSTS.length} articles published</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-2xl border border-white/80 bg-white/70 px-5 py-3 shadow-sm backdrop-blur-sm">
                <HelpCircle size={16} className="text-[var(--color-accent)]" />
                <span className="text-sm font-semibold text-slate-700">{faqCount} questions answered</span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Blog section */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-6 flex items-end justify-between">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-brand-soft)]">
                  <BookOpen size={17} className="text-[var(--color-brand)]" />
                </div>
                <h2 className="text-2xl font-bold">Blog</h2>
              </div>
              <p className="mt-1.5 text-sm text-slate-500">Guides and articles on restoration, insurance, and prevention.</p>
            </div>
            <Link href="/blog" className="hidden items-center gap-1.5 text-sm font-semibold text-[var(--color-brand)] hover:underline sm:flex">
              All articles <ArrowRight size={13} />
            </Link>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 55}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group surface-card flex flex-col gap-3 rounded-[1rem] border border-slate-200/70 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <p className="text-xs font-semibold text-[var(--color-accent)]">{post.publishedAt}</p>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-bold leading-snug">{post.title}</h3>
                    <ArrowRight size={14} className="mt-0.5 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--color-accent)]" />
                  </div>
                  <p className="text-sm leading-6 text-slate-500 line-clamp-2">{post.metaDescription}</p>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-4 sm:hidden">
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-brand)]">
              All articles <ArrowRight size={13} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ section */}
      <section className="pb-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="surface-card overflow-hidden rounded-[1rem] border border-slate-200/70">
            <div className="grid sm:grid-cols-[1fr_auto]">
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-brand-soft)]">
                    <HelpCircle size={17} className="text-[var(--color-brand)]" />
                  </div>
                  <h2 className="text-2xl font-bold">FAQ</h2>
                </div>
                <p className="mt-3 max-w-lg text-sm leading-7 text-slate-600">
                  Answers to the questions clients ask most, about the process, timing, insurance, costs, and what we actually do on site.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {faqCategories.map((cat) => (
                    <span key={cat} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                      {cat}
                    </span>
                  ))}
                </div>
                <Link
                  href="/faq"
                  className="mt-6 inline-flex items-center gap-2 rounded-[0.95rem] bg-[var(--color-brand)] px-6 py-3 text-sm font-bold text-white hover:bg-[var(--color-brand)]/90"
                >
                  Browse all questions
                  <ArrowRight size={15} />
                </Link>
              </div>
              <div className="hidden items-center justify-center border-l border-slate-200/70 bg-[var(--color-brand-soft)]/40 px-10 sm:flex">
                <div className="text-center">
                  <div className="text-5xl font-extrabold text-[var(--color-brand)]">{faqCount}</div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-widest text-slate-500">Questions answered</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <EmergencyCTA />
    </>
  );
}
