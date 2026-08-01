/**
 * Meta (Facebook) Pixel lead reporting. Fires the standard `Lead` event in
 * code on form success — never via a URL rule — so an inline success panel
 * (which never changes the URL) or a client-side navigation can't make a lead
 * go uncounted. Every call is a no-op until the Pixel base code has loaded
 * (see app/layout.tsx) and NEXT_PUBLIC_META_PIXEL_ID is set, so it is always
 * safe to call.
 *
 *   NEXT_PUBLIC_META_PIXEL_ID   e.g. 123456789012345  (from Meta Events Manager)
 */
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

type FbqFn = (...args: unknown[]) => void;

/**
 * Returns the Pixel's `fbq` function, or null if the base code hasn't executed
 * yet. The base snippet in layout.tsx installs an `fbq` stub that queues calls
 * until fbevents.js loads, so once `fbq` exists a call is never dropped. Leads
 * only fire after a user submits a form, long after load, so `fbq` is reliably
 * present by then.
 */
function fbq(): FbqFn | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as { fbq?: FbqFn };
  return typeof w.fbq === "function" ? w.fbq : null;
}

/**
 * Whether a lead of this `context` was already reported this browser session.
 * Guards against inflating conversions on a resubmit or refresh. If
 * sessionStorage is unavailable we treat it as not-yet-reported, preferring a
 * possible double-count over losing the conversion.
 */
function alreadyReported(context: string): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.sessionStorage.getItem(`safehome_lead_${context}`) !== null;
  } catch {
    return false;
  }
}

function markReported(context: string) {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(`safehome_lead_${context}`, "1");
  } catch {
    // sessionStorage unavailable — a later call may report again, which is
    // preferable to dropping the conversion.
  }
}

/**
 * A unique id for one lead event, used as Meta's deduplication key between the
 * browser Pixel and a (future) server-side Conversions API. If CAPI is added,
 * the server must send this same id for the same lead.
 */
function newEventID(context: string): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `${context}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

/**
 * Fire a Meta `Lead` event. `context` distinguishes the source (e.g.
 * "estimate", "contact") and is sent as `content_name`. Counted at most once
 * per browser session per context.
 */
export function reportMetaLead(context: string) {
  const track = fbq();
  if (!track || !PIXEL_ID) return;
  if (alreadyReported(context)) return;

  track("track", "Lead", { content_name: context }, { eventID: newEventID(context) });
  markReported(context);
}
