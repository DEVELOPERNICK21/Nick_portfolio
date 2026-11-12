"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/** Only numbers that are results ("459K views", "904 likes"), never dates like "30 days". */
const RESULT_NUMBER = /(\d+(?:\.\d+)?)([KM]?\+?)(?=\s+(?:reel\s+)?(?:views|likes|shares))/;

type Piece =
  | { kind: "text"; value: string }
  | { kind: "number"; value: number; suffix: string; decimals: number; final: string };

function parse(text: string): Piece[] {
  const pieces: Piece[] = [];
  let last = 0;
  const pattern = new RegExp(RESULT_NUMBER.source, "g");
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(text)) !== null) {
    const index = match.index;
    if (index > last) pieces.push({ kind: "text", value: text.slice(last, index) });
    const decimals = match[1].includes(".") ? match[1].split(".")[1].length : 0;
    pieces.push({
      kind: "number",
      value: parseFloat(match[1]),
      suffix: match[2],
      decimals,
      final: match[0],
    });
    last = index + match[0].length;
  }
  if (last < text.length) pieces.push({ kind: "text", value: text.slice(last) });
  return pieces;
}

const easeOutExpo = (t: number) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));

/**
 * Counts result numbers up from zero the first time the text scrolls into view.
 * The finished text is what the server renders (and what screen readers read), and each
 * number reserves its final width so nothing around it jumps while it counts.
 */
export default function CountUpText({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const pieces = useMemo(() => parse(text), [text]);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const element = ref.current;
    if (!element || !pieces.some((piece) => piece.kind === "number")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Already on screen when the page loaded: leave the finished numbers alone.
    if (element.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    setProgress(0);
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / 1400, 1);
          setProgress(easeOutExpo(t));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [pieces]);

  return (
    <span ref={ref} aria-label={text}>
      {pieces.map((piece, index) =>
        piece.kind === "text" ? (
          <span key={index} aria-hidden>
            {piece.value}
          </span>
        ) : (
          <span key={index} aria-hidden className="relative inline-block">
            <span
              className="invisible before:content-[attr(data-final)]"
              data-final={piece.final}
            />
            <span className="absolute left-0 top-0 whitespace-nowrap tabular-nums">
              {(piece.value * progress).toFixed(piece.decimals)}
              {piece.suffix}
            </span>
          </span>
        )
      )}
    </span>
  );
}
