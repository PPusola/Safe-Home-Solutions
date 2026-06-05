import type { Metadata } from "next";
import Link from "next/link";
import { InteriorHero } from "@/components/layout/InteriorHero";
import { BLOG_POSTS } from "@/lib/content/blog";

export const metadata: Metadata = {
  title: "Blog | Safe Home Solution & Restoration Inc. Edmonton",
  description: "Helpful articles about water damage, drying, mold, and insurance support for Edmonton homeowners.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Resources"
        title="Helpful Articles"
        description="A few practical reads for homeowners dealing with water damage, drying, mold questions, and what usually happens after the first call."
      />

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6">
            {BLOG_POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="surface-card rounded-[1rem] border border-slate-200/70 p-8">
                <p className="text-sm font-semibold text-[var(--color-accent)]">{post.publishedAt}</p>
                <h2 className="mt-2 text-3xl font-bold">{post.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
