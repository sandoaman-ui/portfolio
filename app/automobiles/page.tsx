import type { Metadata } from "next";
import GalleryPageLayout from "@/components/GalleryPageLayout";
import { automobiles } from "@/lib/portfolioData";

export const metadata: Metadata = {
  title: "Automobiles — Amanveer Singh Sando",
  description: "Where Machines Find Poetry",
};

export default function AutomobilesPage() {
  return (
    <>
      {automobiles.slice(0, 4).map((src) => (
        <link key={src} rel="preload" as="image"
          href={`/_next/image?url=${encodeURIComponent(src)}&w=828&q=75`} />
      ))}
      <GalleryPageLayout title="Automobiles" description="Where Machines Find Poetry" images={automobiles} />
    </>
  );
}
