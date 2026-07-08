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
        <link
          key={src}
          rel="preload"
          as="image"
          href={`/_next/image?url=${encodeURIComponent(src)}&w=1080&q=80`}
        />
      ))}
      <GalleryPageLayout
        title="Fashion"
        description="Where Style Finds Structure"
        images={fashion}
      />
    </>
  );
}
