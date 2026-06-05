"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/cn";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  address: z.string().min(5, "Please enter the property address"),
  service: z.string().min(1, "Please select a service"),
  urgency: z.string().min(1, "Please select urgency"),
  description: z.string().min(10, "Please describe the damage"),
  affectedArea: z.string().optional(),
  roomsAffected: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const SERVICES = [
  "Water Damage Restoration",
  "Emergency Water Removal",
  "Structural Drying & Dehumidification",
  "Mold Remediation",
  "Storm & Flood Damage",
  "Other / Not Sure",
];

const URGENCY_OPTIONS = [
  "Emergency, happening now",
  "Urgent, within 24 hours",
  "Soon, within a few days",
  "Planning ahead",
];

interface Props {
  className?: string;
  compact?: boolean;
}

export function EstimateForm({ className, compact = false }: Props) {
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
      const response = await fetch("/api/estimate", {
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
    return (
      <div className={cn("flex flex-col items-center justify-center px-6 py-10 text-center", className)}>
        <CheckCircle size={48} className="mb-4 text-green-500" />
        <h3 className="text-xl font-bold text-gray-900">We received your request.</h3>
        <p className="mt-2 max-w-sm text-gray-600">
          A member of our team will be in touch shortly. For immediate help, call{" "}
          <a href="tel:7803942156" className="font-semibold text-red-600 hover:underline">
            780-394-2156
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("space-y-4", className)}>
      <div className={cn("grid gap-4", compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2")}>
        <Field label="Full Name" error={errors.name?.message}>
          <input {...register("name")} placeholder="Jane Smith" className={inputClass(!!errors.name)} />
        </Field>
        <Field label="Phone Number" error={errors.phone?.message}>
          <input {...register("phone")} type="tel" placeholder="780-000-0000" className={inputClass(!!errors.phone)} />
        </Field>
      </div>

      <Field label="Email Address" error={errors.email?.message}>
        <input {...register("email")} type="email" placeholder="jane@example.com" className={inputClass(!!errors.email)} />
      </Field>

      <Field label="Property Address" error={errors.address?.message}>
        <input {...register("address")} placeholder="123 Main St, Edmonton, AB" className={inputClass(!!errors.address)} />
      </Field>

      <div className={cn("grid gap-4", compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2")}>
        <Field label="Service Needed" error={errors.service?.message}>
          <select {...register("service")} className={inputClass(!!errors.service)}>
            <option value="">Select a service</option>
            {SERVICES.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Urgency" error={errors.urgency?.message}>
          <select {...register("urgency")} className={inputClass(!!errors.urgency)}>
            <option value="">Select urgency</option>
            {URGENCY_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      {!compact && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Approximate Affected Area">
            <input {...register("affectedArea")} placeholder="e.g. 200 sq ft" className={inputClass(false)} />
          </Field>
          <Field label="Rooms Affected">
            <input {...register("roomsAffected")} placeholder="e.g. basement, laundry room" className={inputClass(false)} />
          </Field>
        </div>
      )}

      <Field label="Describe the Damage" error={errors.description?.message}>
        <textarea
          {...register("description")}
          rows={compact ? 3 : 4}
          placeholder="Tell us what happened and the current condition..."
          className={inputClass(!!errors.description)}
        />
      </Field>

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-full bg-[var(--color-accent)] py-4 text-base font-bold text-white hover:bg-[var(--color-accent-dark)] disabled:opacity-60"
      >
        {submitting ? "Sending..." : "Request My Estimate"}
      </button>

      <p className="text-center text-xs text-gray-500">
        Emergency instead? Call us directly:{" "}
        <a href="tel:7803942156" className="font-semibold text-red-600 hover:underline">
          780-394-2156
        </a>{" "}
        and we answer 24/7.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1 block text-sm font-semibold text-gray-700">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full rounded-2xl border px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition focus:outline-none focus:ring-2 focus:ring-blue-500",
    hasError ? "border-red-400 bg-red-50" : "border-gray-300 bg-white",
  );
}
