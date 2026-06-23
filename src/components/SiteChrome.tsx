"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingSocialBar from "@/components/FloatingSocialBar";
import ScrollChapterNav from "@/components/ScrollChapterNav";
import WhatsAppButton from "@/components/WhatsAppButton";

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
