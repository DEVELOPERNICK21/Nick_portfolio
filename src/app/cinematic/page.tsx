import type { Metadata } from "next";
import GtaCinematicLanding from "@/components/GtaCinematicLanding";

export const metadata: Metadata = {
  title: "Cinematic Experience",
  description:
    "Scroll-driven cinematic portfolio experience for Nikhil Kubde — fashion, editorial, and commercial modeling.",
};

export default function CinematicPage() {
  return <GtaCinematicLanding />;
}
