import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getBlogPost } from "@/lib/content/blog";
import { EmergencyCTA } from "@/components/sections/EmergencyCTA";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 sm:px-10">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-800"
          >
            <ArrowLeft size={15} />
            Back to blog
          </Link>
        </div>
        <article className="surface-card mx-auto max-w-4xl rounded-[1rem] border border-slate-200/70 px-6 py-10 sm:px-10">
          <p className="text-sm font-semibold text-[var(--color-accent)]">{post.publishedAt}</p>
          <h1 className="mt-2 text-4xl font-bold">{post.title}</h1>
          <div className="prose-content mt-8 space-y-5">
            {post.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </section>
      <EmergencyCTA heading="Have water damage right now?" subtext="Call us any time. We will walk you through the next step." />
    </>
  );
}
