type GtagFn = (
  command: "event",
  name: string,
  params?: Record<string, string | number>
) => void;

/** Sends a GA4 event. Does nothing until NEXT_PUBLIC_GA_ID is set and GA has loaded. */
export function track(name: string, params: Record<string, string | number> = {}) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: GtagFn }).gtag;
  gtag?.("event", name, params);
}
