"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AlertTriangle, CheckCircle } from "lucide-react";
import { cn } from "@/lib/cn";
import { getSubmissionError } from "@/lib/submissionFeedback";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  request: z.string().min(10, "Please tell us how we can help"),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setSubmitting(true);
    setSubmitError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        reset();
      } else {
        setSubmitError(await getSubmissionError(response, "We could not send your message."));
      }
    } catch {
      setSubmitError("Network Error: We could not reach the form server. Please call 780-394-2156 or try again in a moment.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="form-success-panel flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 px-4 py-4 text-sm text-green-800">
        <div className="relative flex h-11 w-11 shrink-0 items-center justify-center">
          <span className="absolute inset-0 rounded-full bg-green-400/25 animate-[success-ring_0.8s_ease-out]" />
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-green-600">
            <CheckCircle size={22} />
          </span>
        </div>
        <div>
          <p className="font-bold">Message sent successfully.</p>
          <p className="mt-1">Thanks. We will reply soon.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input {...register("name")} placeholder="Your name" className={inputClass(!!errors.name)} />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
      </div>
      <div>
        <input {...register("email")} placeholder="Email address" className={inputClass(!!errors.email)} />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
      </div>
      <div>
        <textarea {...register("request")} rows={4} placeholder="How can we help?" className={inputClass(!!errors.request)} />
        {errors.request && <p className="mt-1 text-xs text-red-600">{errors.request.message}</p>}
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-full bg-[var(--color-brand)] py-3 text-sm font-bold text-white hover:bg-[#0f2742] disabled:opacity-60"
      >
        {submitting ? "Sending..." : "Send message"}
      </button>
      {submitError && (
        <div className="form-error-panel flex gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          <AlertTriangle size={18} className="mt-0.5 shrink-0" />
          <div>
            <p className="font-bold">Form submission failed</p>
            <p className="mt-1 break-words">{submitError}</p>
            <p className="mt-1">Please call 780-394-2156 if this is urgent.</p>
          </div>
        </div>
      )}
    </form>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full rounded-2xl border px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500",
    hasError ? "border-red-400 bg-red-50" : "border-gray-300 bg-white",
  );
}
