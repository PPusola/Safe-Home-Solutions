"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/cn";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  request: z.string().min(10, "Please tell us how we can help"),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        reset();
      }
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return <p className="rounded-2xl bg-green-50 px-4 py-3 text-sm text-green-700">Thanks. We will reply soon.</p>;
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
    </form>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full rounded-2xl border px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500",
    hasError ? "border-red-400 bg-red-50" : "border-gray-300 bg-white",
  );
}
