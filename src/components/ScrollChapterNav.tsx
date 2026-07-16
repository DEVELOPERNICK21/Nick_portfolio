"use client";

import { useEffect, useMemo, useState } from "react";
import { useScrollSignals } from "@/hooks/useScrollSignals";

interface Chapter {
  id: string;
  label: string;
}

export default function ScrollChapterNav() {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [active, setActive] = useState<string>("");
  const { direction } = useScrollSignals();

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-chapter]"));
    const next = nodes.map((node, index) => ({
      id: node.id || `chapter-${index}`,
      label: node.dataset.chapter || `Section ${index + 1}`,
    }));

    nodes.forEach((node, index) => {
      if (!node.id) node.id = `chapter-${index}`;
    });
    setChapters(next);

    if (next[0]) setActive(next[0].id);
  }, []);

  useEffect(() => {
    if (!chapters.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const topVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (topVisible?.target?.id) setActive(topVisible.target.id);
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: "-20% 0px -55% 0px" }
    );

    chapters.forEach((chapter) => {
      const node = document.getElementById(chapter.id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, [chapters]);

  const visibilityClass = useMemo(
    () => (direction === "down" ? "translate-x-0 opacity-100" : "translate-x-2 opacity-80"),
    [direction]
  );

  if (chapters.length < 2) return null;

  return (
    <nav
      aria-label='Section progress'
      className={`fixed right-3 top-1/2 z-50 hidden -translate-y-1/2 lg:flex flex-col gap-2 rounded-2xl border border-zinc-700/80 bg-black/55 p-3 backdrop-blur transition-all duration-300 ${visibilityClass}`}
    >
      {chapters.map((chapter) => (
        <button
          key={chapter.id}
          type='button'
          onClick={() =>
            document.getElementById(chapter.id)?.scrollIntoView({ behavior: "smooth" })
          }
          className={`text-left rounded-full px-3 py-2 text-[10px] uppercase tracking-[0.2em] transition-colors ${
            active === chapter.id
              ? "bg-amber-300 text-black"
              : "text-zinc-300 hover:bg-zinc-800"
          }`}
        >
          {chapter.label}
        </button>
      ))}
    </nav>
  );
}
