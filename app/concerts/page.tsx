import type { Metadata } from "next";
import GalleryPageLayout from "@/components/GalleryPageLayout";
import { concerts } from "@/lib/portfolioData";

export const metadata: Metadata = {
  title: "Concerts — Amanveer Singh Sando",
  description: "Live, Loud, Unfiltered",
};

export default function ConcertsPage() {
  return (
    <GalleryPageLayout
      title="Concerts"
      description="Live, Loud, Unfiltered"
      images={concerts}
    />
  );
}
