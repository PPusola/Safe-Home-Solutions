// October & November 2026 specials. The homepage section and the site-wide banner
// hide themselves automatically once SPECIALS_END passes.
// 2026-11-30 23:59 America/Edmonton (MST, UTC-7 after DST ends on Nov 1).
export const SPECIALS_END = "2026-11-30T23:59:59-07:00";

export const SPECIALS = {
  title: "October & November specials",
  offers: [
    "Free inspection for mold and basement cracks",
    "Up to 10% off mold remediation, cleanup and removal",
    "Interior polyurethane crack repair: $1,499 + GST*",
  ],
  finePrint:
    "*For cracks already exposed and accessible from the interior. Any demolition needed is extra. Offer valid October 1 – November 30, 2026. GST extra.",
  flyer: "/images/gallery/specials-flyer.png",
};

export function specialsActive(now: Date = new Date()) {
  return now <= new Date(SPECIALS_END);
}
