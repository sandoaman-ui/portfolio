import type { Metadata } from "next";
import GalleryPageLayout from "@/components/GalleryPageLayout";
import { automobiles } from "@/lib/portfolioData";

export const metadata: Metadata = {
  title: "Automobiles — Amanveer Singh Sando",
  description: "Where Machines Find Poetry",
};

export default function AutomobilesPage() {
  return (
    <GalleryPageLayout
      title="Automobiles"
      description="Where Machines Find Poetry"
      images={automobiles}
    />
  );
}
