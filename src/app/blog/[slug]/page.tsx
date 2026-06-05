import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getBlogPost } from "@/lib/content/blog";

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
    <section className="py-16">
      <article className="surface-card mx-auto max-w-4xl rounded-[2rem] border border-slate-200/70 px-6 py-10 sm:px-10">
        <p className="text-sm font-semibold text-[var(--color-accent)]">{post.publishedAt}</p>
        <h1 className="mt-2 text-4xl font-bold">{post.title}</h1>
        <div className="prose-content mt-8 space-y-5">
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </section>
  );
}
