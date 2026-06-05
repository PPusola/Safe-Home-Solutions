import Link from "next/link";
import { cn } from "@/lib/cn";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "primary" | "secondary";
}

export function Button({ href, className, variant = "primary", children, ...props }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-[0.95rem] px-5 py-3 text-sm font-bold transition-colors",
        variant === "primary"
          ? "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-dark)]"
          : "bg-[var(--color-brand)] text-white hover:bg-[#0f2742]",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
