"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

interface CustomerReview {
  name: string;
  source: string;
  summary: string;
  rating: number;
  comment: string;
}

const REVIEWS: CustomerReview[] = [
  {
    name: "Maya R.",
    source: "Google",
    summary: "Fast response, clear updates, and careful restoration work.",
    rating: 5,
    comment:
      "The team was professional, arrived quickly, and explained what needed to happen at every step. The cleanup was organized and the house felt safe again.",
  },
  {
    name: "Jordan K.",
    source: "Google",
    summary: "Fast response, clear updates, and careful restoration work.",
    rating: 5,
    comment:
      "Very responsive during a stressful water damage situation. They documented the work clearly and kept us updated through the whole process.",
  },
  {
    name: "Priya S.",
    source: "Google",
    summary: "Fast response, clear updates, and careful restoration work.",
    rating: 4.9,
    comment:
      "Great service from start to finish. The crew was respectful, clean, and easy to communicate with while they handled the restoration work.",
  },
  {
    name: "Daniel M.",
    source: "Facebook",
    summary: "Helpful communication and steady support during urgent jobs.",
    rating: 5,
    comment:
      "They helped us understand the damage and gave us a clear plan right away. We appreciated how calm and thorough everyone was.",
  },
  {
    name: "Alyssa T.",
    source: "Facebook",
    summary: "Helpful communication and steady support during urgent jobs.",
    rating: 4.8,
    comment:
      "Friendly, reliable, and detail-oriented. The team treated our home with care and made the restoration process much easier to manage.",
  },
  {
    name: "Marcus L.",
    source: "Facebook",
    summary: "Helpful communication and steady support during urgent jobs.",
    rating: 5,
    comment:
      "Excellent follow-through and strong communication. They answered questions, shared updates, and kept the work area tidy.",
  },
  {
    name: "Nina P.",
    source: "Yelp",
    summary: "Detailed cleanup, odor treatment, and practical next steps.",
    rating: 5,
    comment:
      "The crew handled the cleanup quickly and explained the drying process in plain language. The finished area looked clean and well cared for.",
  },
  {
    name: "Owen B.",
    source: "Yelp",
    summary: "Detailed cleanup, odor treatment, and practical next steps.",
    rating: 4.9,
    comment:
      "We called after odor and moisture concerns. They checked the affected areas, recommended the right treatment, and followed up professionally.",
  },
  {
    name: "Sofia H.",
    source: "Yelp",
    summary: "Detailed cleanup, odor treatment, and practical next steps.",
    rating: 4.8,
    comment:
      "Professional restoration work and very organized documentation. It made the insurance conversation less stressful for us.",
  },
];

function StarRating({ rating }: { rating: number }) {
  const filledStars = Math.round(rating);

  return (
    <div className="flex items-center gap-1 text-[var(--color-accent)]" aria-label={`${rating.toFixed(1)} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={18}
          fill={index < filledStars ? "currentColor" : "none"}
          className={index < filledStars ? "" : "text-slate-300"}
          aria-hidden="true"
        />
      ))}
      <span className="ml-2 text-sm font-bold text-slate-700">{rating.toFixed(1)}</span>
    </div>
  );
}

function ReviewCarousel() {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  const activeReview = REVIEWS[activeReviewIndex];
  const reviewKey = `${activeReview.source}-${activeReview.name}-${activeReviewIndex}`;

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActiveReviewIndex((current) => (current + 1) % REVIEWS.length);
    }, 15000);

    return () => window.clearTimeout(timer);
  }, [activeReviewIndex]);

  return (
    <div className="rounded-[0.95rem] border border-slate-200 bg-slate-50 p-6 sm:p-8">
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">{activeReview.source} review</p>
        <h3 className="mt-2 text-xl font-bold">{activeReview.name}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{activeReview.summary}</p>
      </div>

      <div
        key={reviewKey}
        className="mt-6 animate-[fade-in_0.55s_ease] rounded-[0.85rem] border border-slate-200 bg-white p-6"
        aria-live="polite"
      >
        <StarRating rating={activeReview.rating} />
        <p className="mt-4 text-lg font-semibold leading-8 text-[var(--color-ink)]">&ldquo;{activeReview.comment}&rdquo;</p>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => setActiveReviewIndex((c) => (c - 1 + REVIEWS.length) % REVIEWS.length)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
          aria-label="Previous review"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex items-center gap-1.5">
          {REVIEWS.map((review, index) => (
            <button
              key={`${review.name}-${index}`}
              type="button"
              onClick={() => setActiveReviewIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === activeReviewIndex ? "w-8 bg-[var(--color-accent)]" : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Show review ${index + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => setActiveReviewIndex((c) => (c + 1) % REVIEWS.length)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
          aria-label="Next review"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

export function CustomerReviews({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return <ReviewCarousel />;
  }

  return (
    <section className="pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <ReviewCarousel />
        </Reveal>
      </div>
    </section>
  );
}
