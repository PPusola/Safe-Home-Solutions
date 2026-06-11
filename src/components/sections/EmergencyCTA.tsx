import { AlertTriangle } from "lucide-react";
import { SITE } from "@/lib/site";

export function EmergencyCTA() {
  return (
    <div className="bg-red-600 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <AlertTriangle size={18} className="shrink-0" />
        <p className="text-center text-sm font-semibold leading-6">
          Active water or mold emergency?{" "}
          <a href={SITE.phoneHref} className="font-extrabold underline underline-offset-2 hover:no-underline">
            Call {SITE.phone} now
          </a>{" "}
          — we answer 24/7. Every hour matters.
        </p>
      </div>
    </div>
  );
}
