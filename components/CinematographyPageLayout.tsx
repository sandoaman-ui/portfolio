"use client";

import { motion } from "framer-motion";
import CategoryNav from "./CategoryNav";
import Footer from "./Footer";
import { cinematographyVideos } from "@/lib/portfolioData";

export default function CinematographyPageLayout() {
  return (
    <main className="bg-black min-h-screen">
      <CategoryNav category="Cinematography" />

      {/* Header */}
      <div className="pt-28 pb-10 md:pt-36 md:pb-14 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[10px] tracking-[0.45em] uppercase text-gold mb-4">2026</p>
          <h1 className="font-display text-[15vw] md:text-[10vw] lg:text-[8vw] tracking-wider text-white leading-none mb-5">
            CINEMATOGRAPHY
          </h1>
          <p className="text-xs md:text-sm tracking-[0.25em] text-white/35">
            Composed Between Cuts
          </p>
        </motion.div>
      </div>

      {/* Videos */}
      <div className="px-[2px] pb-[2px] space-y-[2px]">
        {cinematographyVideos.map((id, i) => (
          <motion.div
            key={id}
            className="relative w-full bg-black"
            style={{ paddingBottom: "56.25%" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <iframe
              src={`https://www-ccv.adobe.io/v1/player/ccv/${id}/embed?bgcolor=%23000000&lazyLoading=true&api_key=BehancePro2View`}
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allowFullScreen
              title={`Cinematography video ${i + 1}`}
            />
          </motion.div>
        ))}
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </main>
  );
}
