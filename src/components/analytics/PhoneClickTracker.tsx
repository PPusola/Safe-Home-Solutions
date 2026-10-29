"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

// Sends a "phone_click" event to GA4 (and "Contact" to the Meta Pixel when it is
// loaded) whenever any tel: link on the site is clicked, so calls can be measured.
export function PhoneClickTracker() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const link = (event.target as Element | null)?.closest?.('a[href^="tel:"]');
      if (!link) return;

      const href = link.getAttribute("href") ?? "";
      window.gtag?.("event", "phone_click", {
        phone_number: href.replace("tel:", ""),
        link_text: link.textContent?.trim().slice(0, 100),
        page_path: window.location.pathname,
      });
      window.fbq?.("track", "Contact");
    }

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
