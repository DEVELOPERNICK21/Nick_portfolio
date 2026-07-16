"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const FloatingSocialBar = dynamic(
  () => import("@/components/FloatingSocialBar"),
  { ssr: false }
);
const ScrollChapterNav = dynamic(
  () => import("@/components/ScrollChapterNav"),
  { ssr: false }
);

export default function SiteChrome() {
  const pathname = usePathname();
  const isImmersive =
    pathname === "/premium" || pathname === "/cinematic";

  if (isImmersive) {
    return <WhatsAppButton />;
  }

  return (
    <>
      <Navbar />
      <ScrollChapterNav />
      <Footer />
      <FloatingSocialBar />
      <WhatsAppButton />
    </>
  );
}
