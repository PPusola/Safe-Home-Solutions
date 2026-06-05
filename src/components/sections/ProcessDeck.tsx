"use client";

import { useMemo, useState } from "react";
import { ArrowDownRight } from "lucide-react";
import { cn } from "@/lib/cn";
import type { ProcessDeckStep } from "@/lib/content/trust";

interface ProcessDeckProps {
  steps: ProcessDeckStep[];
}

export function ProcessDeck({ steps }: ProcessDeckProps) {
  const [orderedSteps, setOrderedSteps] = useState(steps);

  const activeStep = orderedSteps[0];
  const stackPreview = useMemo(() => orderedSteps.slice(0, 3), [orderedSteps]);

  function moveStepToBottom(index: number) {
    setOrderedSteps((current) => {
      const next = [...current];
      const [selected] = next.splice(index, 1);
      next.push(selected);
      return next;
    });
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
      <div>
        <p className="eyebrow text-[var(--color-accent)]">How we solve the problem</p>
        <h2 className="mt-3 text-3xl font-bold">A card deck you can move through in the order that matters to you.</h2>
        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
          Click any card to send it to the bottom of the deck. The top card is the current focus, and the stack lets people explore the process without reading a long wall of text first.
        </p>

        <div className="mt-6 rounded-[1.75rem] border border-slate-200/80 bg-white/75 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">{activeStep.eyebrow}</p>
          <h3 className="mt-3 text-2xl font-bold">{activeStep.title}</h3>
          <p className="mt-4 text-sm leading-7 text-slate-600">{activeStep.detail}</p>
        </div>
      </div>

      <div className="relative min-h-[430px] sm:min-h-[460px]">
        {orderedSteps.map((step, index) => {
          const previewIndex = stackPreview.findIndex((previewStep) => previewStep.title === step.title);
          const isVisible = previewIndex !== -1;
          const offsetY = previewIndex * 28;
          const offsetX = previewIndex * 18;

          return (
            <button
              key={step.title}
              type="button"
              onClick={() => moveStepToBottom(index)}
              className={cn(
                "absolute left-0 top-0 w-full rounded-[1.9rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,244,238,0.94))] p-6 text-left shadow-[0_18px_44px_rgba(31,42,55,0.08)] transition-all duration-300",
                isVisible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
              )}
              style={{
                transform: `translate(${offsetX}px, ${offsetY}px) scale(${1 - previewIndex * 0.035})`,
                zIndex: steps.length - previewIndex,
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">{step.eyebrow}</p>
                  <h3 className="mt-3 text-2xl font-bold text-[var(--color-ink)]">{step.title}</h3>
                </div>
                <ArrowDownRight className="text-[var(--color-accent)]" />
              </div>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">{step.detail}</p>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Click to move this card to the bottom</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
