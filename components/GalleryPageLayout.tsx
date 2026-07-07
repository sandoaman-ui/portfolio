"use client";

import { motion } from "framer-motion";
import CategoryNav from "./CategoryNav";
import PhotoGallery from "./PhotoGallery";
import Footer from "./Footer";

interface Props {
  title: string;
  description?: string;
  images: string[];
  year?: string;
}

export default function GalleryPageLayout({
  title,
  description,
  images,
  year = "2026",
}: Props) {
  return (
    <main className="bg-black min-h-screen">
      <CategoryNav category={title} />

      {/* Page header */}
      <div className="pt-28 pb-10 md:pt-36 md:pb-14 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[10px] tracking-[0.45em] uppercase text-gold mb-4">{year}</p>
          <h1 className="font-display text-[15vw] md:text-[10vw] lg:text-[8vw] tracking-wider text-white leading-none mb-5">
            {title.toUpperCase()}
          </h1>
          {description && (
            <p className="text-xs md:text-sm tracking-[0.25em] text-white/35">
              {description}
            </p>
          )}
        </motion.div>
      </div>

      {/* Gallery */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <PhotoGallery images={images} title={title} />
      </motion.div>

      <div className="mt-20">
        <Footer />
      </div>
    </main>
  );
}
