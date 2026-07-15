import type { Metadata } from "next";
import GalleryPageLayout from "@/components/GalleryPageLayout";
import { concerts } from "@/lib/portfolioData";

export const metadata: Metadata = {
  title: "Concerts — Amanveer Singh Sando",
  description: "Live, Loud, Unfiltered",
};

export default function ConcertsPage() {
  return (
    <>
      {concerts.slice(0, 4).map((src) => (
        <link key={src} rel="preload" as="image"
          href={`/thumbs/${src.match(/\/([0-9a-f-]{36})_rw/)?.[1]}.webp`} />
      ))}
      <GalleryPageLayout title="Concerts" description="Live, Loud, Unfiltered" images={concerts} />
    </>
  );
}
