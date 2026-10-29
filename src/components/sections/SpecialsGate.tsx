"use client";

import { useSyncExternalStore } from "react";
import { specialsActive } from "@/lib/content/specials";

const noopSubscribe = () => () => {};

// Static pages are rendered at build time, so the server-side date check alone
// would keep an expired offer on screen until the next deploy. This re-checks
// the date in the browser and removes the offer once it has ended.
// `serverActive` is the server's answer, reused during hydration so the markup matches.
export function SpecialsGate({ serverActive, children }: { serverActive: boolean; children: React.ReactNode }) {
  const active = useSyncExternalStore(noopSubscribe, () => specialsActive(), () => serverActive);

  return active ? <>{children}</> : null;
}
