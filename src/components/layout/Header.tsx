"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Clock3, MapPin, Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { NAV_LINKS, SITE } from "@/lib/site";
import logo from "../../../safe-home-logo.png";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <>
      <div className="border-b border-white/10 bg-[#27221c] text-white">
        <div className="hidden items-center justify-end gap-4 px-4 py-2 text-sm text-white/75 sm:flex sm:px-6 xl:px-10">
          <div className="flex flex-wrap items-center justify-end gap-4">
            <span className="inline-flex items-center gap-1.5">
              <Clock3 size={14} />
              By appointment and emergency response
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} />
              Edmonton and surrounding area
            </span>
            <a href={SITE.phoneHref} className="inline-flex items-center gap-2 font-semibold text-white hover:text-[var(--color-accent)]">
              <Phone size={14} />
              {SITE.phone}
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center px-4 py-2 text-center text-sm sm:hidden">
          <a href={SITE.phoneHref} className="inline-flex items-center gap-2 font-semibold text-white">
            <Phone size={14} />
            {"24/7 emergency response \u2022 "}{SITE.phone}
          </a>
        </div>
      </div>

      <header
        className="sticky top-0 z-50 border-b border-[#d5ccbe] bg-[rgba(251,248,243,0.94)] backdrop-blur"
        style={{ viewTransitionName: "site-header" }}
      >
        <div className="px-4 sm:px-6 xl:px-10">
          <div className="flex h-20 items-center justify-between gap-4">
            <Link
              href="/"
              className="flex min-w-0 items-center gap-3 pr-2"
              onClick={() => {
                setMobileOpen(false);
                setOpenGroup(null);
              }}
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#1c1b1a] p-1 shadow-[0_10px_24px_rgba(15,39,66,0.16)] sm:h-16 sm:w-16">
                <Image
                  src={logo}
                  alt="Safe Home Solution &amp; Restoration Inc. logo"
                  width={56}
                  height={56}
                  className="h-12 w-12 object-contain sm:h-14 sm:w-14"
                  priority
                />
              </div>
              <div className="min-w-0">
                <div className="font-display text-xl font-bold tracking-tight text-[var(--color-ink)] sm:text-2xl">
                  Safe Home Solution &amp; Restoration Inc.
                </div>
                <div className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-accent)]">
                  Restoration and Rebuild
                </div>
              </div>
            </Link>

            <div className="ml-auto hidden items-center gap-2 lg:flex">
              <nav className="flex items-center gap-0.5">
                {NAV_LINKS.map((link) => {
                  const hasChildren = !!link.children?.length;
                  const isActive = !!(
                    link.href &&
                    (pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href)))
                  );

                  if (!hasChildren) {
                    return (
                      <Link
                        key={link.label}
                        href={link.href!}
                        className={cn(
                          "rounded-[0.95rem] px-4 py-2 text-sm font-semibold transition-colors",
                          isActive
                            ? "bg-[var(--color-brand)] text-white"
                            : "text-slate-700 hover:bg-white hover:text-[var(--color-brand)]",
                        )}
                      >
                        {link.label}
                      </Link>
                    );
                  }

                  return (
                    <div key={link.label} className="group relative">
                      <Link
                        href={link.href ?? "#"}
                        className={cn(
                          "flex items-center gap-1 rounded-[0.95rem] px-4 py-2 text-sm font-semibold transition-colors",
                          link.href && (pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href)))
                            ? "bg-[var(--color-brand)] text-white"
                            : "text-slate-700 hover:bg-white hover:text-[var(--color-brand)]",
                        )}
                      >
                        {link.label}
                        <ChevronDown size={15} className="transition-transform group-hover:rotate-180" />
                      </Link>
                      <div className="invisible absolute left-1/2 top-full mt-2 w-72 -translate-x-1/2 rounded-[1rem] border border-slate-200 bg-[var(--color-surface)] p-2 opacity-0 shadow-[0_24px_60px_rgba(16,35,61,0.16)] transition-all duration-150 group-hover:visible group-hover:opacity-100">
                        {link.children?.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-[0.8rem] px-4 py-3 text-sm text-slate-700 hover:bg-slate-100 hover:text-[var(--color-brand)]"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </nav>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-[0.95rem] bg-[var(--color-accent)] px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(177,115,67,0.2)] hover:bg-[var(--color-accent-dark)]"
              >
                Request Estimate
              </Link>
            </div>

            <button
              className="rounded-[0.95rem] border border-slate-200 bg-white p-2.5 text-slate-700 lg:hidden"
              onClick={() => setMobileOpen((value) => !value)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-slate-200 bg-[var(--color-surface)] px-4 pb-5 lg:hidden">
            <div className="mx-auto max-w-7xl space-y-2 pt-4">
              {NAV_LINKS.map((link) => {
                const isParentActive = !!(
                  link.href &&
                  (pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href)))
                );

                if (!link.children?.length) {
                  return (
                    <Link
                      key={link.label}
                      href={link.href!}
                      className={cn(
                        "block rounded-[1rem] px-4 py-3 text-sm font-semibold",
                        isParentActive
                          ? "bg-[var(--color-brand)] text-white"
                          : "text-slate-800 hover:bg-white",
                      )}
                      onClick={() => {
                        setMobileOpen(false);
                        setOpenGroup(null);
                      }}
                    >
                      {link.label}
                    </Link>
                  );
                }

                const expanded = openGroup === link.label;

                return (
                  <div key={link.label} className="overflow-hidden rounded-[1rem] border border-slate-200 bg-white">
                    <div className="flex items-center">
                      <Link
                        href={link.href!}
                        className={cn(
                          "flex-1 px-4 py-3 text-sm font-semibold",
                          isParentActive ? "text-[var(--color-brand)]" : "text-slate-800",
                        )}
                        onClick={() => {
                          setMobileOpen(false);
                          setOpenGroup(null);
                        }}
                      >
                        {link.label}
                      </Link>
                      <button
                        className="px-3 py-3 text-slate-400"
                        onClick={() => setOpenGroup(expanded ? null : link.label)}
                        aria-label={`Toggle ${link.label} submenu`}
                      >
                        <ChevronDown size={16} className={cn("transition-transform", expanded && "rotate-180")} />
                      </button>
                    </div>
                    {expanded && (
                      <div className="space-y-1 border-t border-slate-100 px-2 py-2">
                        {link.children.map((child) => {
                          const isChildActive = pathname === child.href;
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                "block rounded-[0.8rem] px-3 py-2 text-sm font-medium",
                                isChildActive
                                  ? "bg-[var(--color-brand)]/10 text-[var(--color-brand)]"
                                  : "text-slate-700 hover:bg-slate-50",
                              )}
                              onClick={() => {
                                setMobileOpen(false);
                                setOpenGroup(null);
                              }}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mx-auto mt-4 grid max-w-7xl gap-3">
              <a href={SITE.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-[0.95rem] bg-[var(--color-accent)] px-4 py-3 font-bold text-white">
                <Phone size={18} />
                {SITE.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-[0.95rem] bg-[var(--color-brand)] px-4 py-3 font-bold text-white"
                onClick={() => {
                  setMobileOpen(false);
                  setOpenGroup(null);
                }}
              >
                Non-Urgent Estimate
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
