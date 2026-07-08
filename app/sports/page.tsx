import type { Metadata } from "next";
import GalleryPageLayout from "@/components/GalleryPageLayout";
import { sports } from "@/lib/portfolioData";

export const metadata: Metadata = {
  title: "Sports — Amanveer Singh Sando",
  description: "The Art of Human Limits",
};

export default function SportsPage() {
  return (
    <>
      {sports.slice(0, 4).map((src) => (
        <link
          key={src}
          rel="preload"
          as="image"
          href={`/_next/image?url=${encodeURIComponent(src)}&w=1080&q=80`}
        />
      ))}
      <GalleryPageLayout
        title="Sports"
        description="The Art of Human Limits"
        images={sports}
      />
    </>
  );
}
