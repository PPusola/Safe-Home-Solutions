"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Star } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { GOOGLE_REVIEWS } from "@/lib/content/reviews";
import { GOOGLE_RATING, SITE } from "@/lib/site";

// Only real Google reviews, quoted word for word from src/lib/content/reviews.ts.
// Never write or paraphrase review text here.
const HAS_REVIEWS_URL = SITE.googleReviewsUrl.startsWith("https://");
const ROTATE_MS = 8000;

function FiveStars({ size = 16 }: { size?: number }) {
  return (
    <span className="flex items-center gap-0.5 text-[var(--color-accent)]" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={size} fill="currentColor" />
      ))}
    </span>
  );
}

function GoogleLink() {
  if (!HAS_REVIEWS_URL) return null;
  return (
    <a
      href={SITE.googleReviewsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 text-sm font-bold text-[var(--color-brand)] hover:underline"
    >
      See all our reviews on Google
      <ExternalLink size={14} />
    </a>
  );
}

// Hero card: one review at a time, auto-advancing, with manual controls.
function ReviewCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = GOOGLE_REVIEWS.length;

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => setActive((i) => (i + 1) % count), ROTATE_MS);
    return () => window.clearTimeout(timer);
  }, [active, paused, count]);

  const go = (index: number) => {
    setPaused(true);
    setActive((index + count) % count);
  };

  return (
    <div className="rounded-[0.95rem] border border-slate-200 bg-slate-50 p-6 sm:p-7">
      <div className="flex items-center gap-2 text-sm font-bold text-[var(--color-ink)]">
        <FiveStars />
        {GOOGLE_RATING ? `${GOOGLE_RATING} on Google` : "Google reviews"}
      </div>

      {/* All reviews share one grid cell so the card keeps the height of the longest one. */}
      <div className="mt-4 grid">
        {GOOGLE_REVIEWS.map((review, index) => (
          <figure
            key={review.name + review.text.slice(0, 20)}
            aria-hidden={index !== active}
            className={`[grid-area:1/1] transition-opacity duration-500 ${index === active ? "opacity-100" : "invisible opacity-0"}`}
          >
            <blockquote className="text-base font-semibold leading-7 text-[var(--color-ink)]">&ldquo;{review.text}&rdquo;</blockquote>
            <figcaption className="mt-3 text-sm font-bold text-slate-600">&ndash; {review.name}</figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => go(active - 1)}
          aria-label="Previous review"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:text-[var(--color-brand)]"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex items-center">
          {GOOGLE_REVIEWS.map((review, index) => (
            <button
              key={review.name + index}
              type="button"
              onClick={() => go(index)}
              aria-label={`Show review ${index + 1} of ${count}`}
              aria-current={index === active}
              className="group flex h-6 min-w-6 items-center justify-center"
            >
              <span
                className={`h-1.5 rounded-full transition-all ${index === active ? "w-6 bg-[var(--color-accent)]" : "w-1.5 bg-slate-300 group-hover:bg-slate-400"}`}
              />
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(active + 1)}
          aria-label="Next review"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:text-[var(--color-brand)]"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="mt-5 border-t border-slate-200 pt-4 text-center">
        <GoogleLink />
      </div>
    </div>
  );
}

export function CustomerReviews({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return <ReviewCarousel />;
  }

  return (
    <section className="py-16" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow text-[var(--color-accent)]">Google reviews</p>
            <h2 id="reviews-heading" className="mt-2 text-3xl font-bold">See what our customers say</h2>
            {GOOGLE_RATING && (
              <p className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-ink)]">
                <FiveStars />
                {GOOGLE_RATING} on Google
              </p>
            )}
          </div>
          <GoogleLink />
        </Reveal>

        <div className="mt-8 gap-5 md:columns-2 lg:columns-3">
          {GOOGLE_REVIEWS.map((review) => (
            <figure
              key={review.name + review.text.slice(0, 20)}
              className="mb-5 break-inside-avoid rounded-[0.95rem] border border-slate-200 bg-white p-6 shadow-[0_10px_28px_rgba(39,34,27,0.05)]"
            >
              <FiveStars size={15} />
              <span className="sr-only">5 out of 5 stars</span>
              <blockquote className="mt-3 text-base leading-7 text-[var(--color-ink)]">&ldquo;{review.text}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm font-bold text-slate-700">
                {review.name}
                <span className="font-semibold text-slate-500"> · Google review</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
