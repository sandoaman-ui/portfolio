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
          href={`/thumbs/${src.match(/\/([0-9a-f-]{36})_rw/)?.[1]}.webp`} />
      ))}
      <GalleryPageLayout title="Pickleball" images={pickleball} />
    </>
  );
}
