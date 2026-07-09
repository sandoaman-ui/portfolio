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
          href={`https://wsrv.nl/?url=${encodeURIComponent(src)}&w=828&output=webp&q=75`} />
      ))}
      <GalleryPageLayout title="Pickleball" images={pickleball} />
    </>
  );
}
