import type { Metadata } from "next";
import GalleryPageLayout from "@/components/GalleryPageLayout";
import { fashion } from "@/lib/portfolioData";

export const metadata: Metadata = {
  title: "Fashion — Amanveer Singh Sando",
  description: "Where Style Finds Structure",
};

export default function FashionPage() {
  return (
    <GalleryPageLayout
      title="Fashion"
      description="Where Style Finds Structure"
      images={fashion}
    />
  );
}
