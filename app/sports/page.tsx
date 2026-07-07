import type { Metadata } from "next";
import GalleryPageLayout from "@/components/GalleryPageLayout";
import { sports } from "@/lib/portfolioData";

export const metadata: Metadata = {
  title: "Sports — Amanveer Singh Sando",
  description: "The Art of Human Limits",
};

export default function SportsPage() {
  return (
    <GalleryPageLayout
      title="Sports"
      description="The Art of Human Limits"
      images={sports}
    />
  );
}
