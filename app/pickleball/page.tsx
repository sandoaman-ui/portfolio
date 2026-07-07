import type { Metadata } from "next";
import GalleryPageLayout from "@/components/GalleryPageLayout";
import { pickleball } from "@/lib/portfolioData";

export const metadata: Metadata = {
  title: "Pickleball — Amanveer Singh Sando",
  description: "Pickleball photography",
};

export default function PickleballPage() {
  return (
    <GalleryPageLayout
      title="Pickleball"
      images={pickleball}
    />
  );
}
