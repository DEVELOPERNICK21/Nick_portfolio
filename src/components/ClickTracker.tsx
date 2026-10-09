"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

/** Maps the clicks that matter for bookings to GA4 events (one listener, no per-button wiring). */
function classify(href: string): string | null {
  if (href.includes("wa.me")) return "click_whatsapp";
  if (href.startsWith("mailto:")) return "click_email";
  if (href.toLowerCase().split("?")[0].endsWith(".pdf")) return "download_comp_card";
  if (href.includes("instagram.com/themontelo")) return "click_agency_montelo";
  if (href.includes("castyou.in")) return "click_agency_castyou";
  return null;
}

export default function ClickTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest?.("a");
      const href = anchor?.getAttribute("href");
      if (!href) return;
      const name = classify(href);
      if (name) track(name, { link_url: href, page_path: window.location.pathname });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
