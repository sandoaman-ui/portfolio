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
          href={`https://wsrv.nl/?url=${encodeURIComponent(src)}&w=828&output=webp&q=75`} />
      ))}
      <GalleryPageLayout title="Concerts" description="Live, Loud, Unfiltered" images={concerts} />
    </>
  );
}
