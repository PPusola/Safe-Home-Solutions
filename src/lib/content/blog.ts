export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  publishedAt: string;
  body: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "what-to-do-after-water-damage",
    title: "What to Do in the First Hour After Water Damage",
    excerpt: "The first hour matters. Here is a practical checklist for Edmonton homeowners dealing with a leak or flood.",
    metaDescription: "A first-hour checklist for Edmonton homeowners after water damage, leaks, or indoor flooding.",
    publishedAt: "2026-06-01",
    body: [
      "Water damage is stressful, but the first steps can make a big difference. If it is safe, stop the water source and move electronics, documents, and valuables out of the affected area.",
      "Avoid using household equipment that is not designed for flood cleanup. Commercial extraction and proper drying help prevent damage from spreading deeper into the structure.",
      "Take photos early, especially before major cleanup begins. Good documentation makes conversations with your insurer much easier.",
    ],
  },
  {
    slug: "signs-of-hidden-mold",
    title: "7 Signs There May Be Hidden Mold in Your Home",
    excerpt: "Mold is not always visible. Watch for these common warning signs after unresolved moisture problems.",
    metaDescription: "Hidden mold warning signs for Edmonton homeowners after leaks, humidity, or unfinished drying.",
    publishedAt: "2026-05-28",
    body: [
      "Persistent musty smells, soft drywall, staining, and recurring condensation can all point to hidden moisture issues.",
      "Mold often grows behind finished surfaces, which is why proper inspection matters after water damage.",
      "If an area never fully dried after a leak, it is worth getting it checked before the problem becomes larger and more expensive.",
    ],
  },
  {
    slug: "water-damage-insurance-claim-tips",
    title: "Tips for a Smoother Water Damage Insurance Claim",
    excerpt: "Good documentation and quick action can reduce stress when you are dealing with a claim.",
    metaDescription: "Practical insurance claim tips after water damage in Edmonton, including documentation and timing.",
    publishedAt: "2026-05-20",
    body: [
      "Report the loss promptly, keep photos, and save notes on what happened and when you found it.",
      "Ask questions about what your insurer needs from the restoration side so there are fewer surprises later.",
      "A clear drying record and a practical scope of work often help keep the process moving more smoothly.",
    ],
  },
];

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
