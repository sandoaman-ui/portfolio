import type { Metadata } from "next";
import GalleryPageLayout from "@/components/GalleryPageLayout";
import { fashion } from "@/lib/portfolioData";

export const metadata: Metadata = {
  title: "Fashion — Amanveer Singh Sando",
  description: "Where Style Finds Structure",
};

export default function FashionPage() {
  return (
    <>
      {fashion.slice(0, 4).map((src) => (
        <link key={src} rel="preload" as="image"
          href={`https://wsrv.nl/?url=${encodeURIComponent(src)}&w=828&output=webp&q=75`} />
      ))}
      <GalleryPageLayout title="Fashion" description="Where Style Finds Structure" images={fashion} />
    </>
  );
}
