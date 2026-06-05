import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/cn";

export function PhoneButton({ className }: { className?: string }) {
  return (
    <a
      href={SITE.phoneHref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-bold text-white hover:bg-[var(--color-accent-dark)]",
        className,
      )}
    >
      <Phone size={16} />
      {SITE.phone}
    </a>
  );
}
