import type { Metadata } from "next";
import GalleryPageLayout from "@/components/GalleryPageLayout";
import { pickleball } from "@/lib/portfolioData";

export const metadata: Metadata = {
  title: "Pickleball — Amanveer Singh Sando",
  description: "Pickleball photography",
};

export default function PickleballPage() {
  return (
    <>
      {pickleball.slice(0, 4).map((src) => (
        <link key={src} rel="preload" as="image"
          href={`/_next/image?url=${encodeURIComponent(src)}&w=828&q=80`} />
      ))}
      <GalleryPageLayout title="Pickleball" images={pickleball} />
    </>
  );
}
