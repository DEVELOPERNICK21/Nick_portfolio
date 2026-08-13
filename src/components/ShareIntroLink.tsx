"use client";

import { useState } from "react";
import { FaCheck, FaLink } from "react-icons/fa";
import { site } from "@/config/site";

const INTRO_SHARE_URL = `${site.siteUrl}/intro`;

export default function ShareIntroLink({
  variant = "premium",
}: {
  variant?: "premium" | "editorial";
}) {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(INTRO_SHARE_URL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy this intro video link:", INTRO_SHARE_URL);
    }
  };

  const buttonClass =
    variant === "editorial"
      ? "ed-button-secondary inline-flex items-center gap-2"
      : "premium-button-secondary inline-flex items-center gap-2";

  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
      <a
        href="/intro"
        className={
          variant === "editorial"
            ? "ed-button inline-flex items-center gap-2"
            : "premium-button inline-flex items-center gap-2"
        }
      >
        Open intro page
      </a>
      <button type="button" onClick={copyLink} className={buttonClass}>
        {copied ? <FaCheck /> : <FaLink />}
        {copied ? "Link copied" : "Copy share link"}
      </button>
    </div>
  );
}
