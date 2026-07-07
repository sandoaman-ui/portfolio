"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  images: string[];
  title: string;
}

export default function PhotoGallery({ images, title }: Props) {
  const [selected, setSelected] = useState<number | null>(null);

  const close = useCallback(() => setSelected(null), []);
  const prev = useCallback(
    () => setSelected((s) => (s !== null ? (s - 1 + images.length) % images.length : s)),
    [images.length]
  );
  const next = useCallback(
    () => setSelected((s) => (s !== null ? (s + 1) % images.length : s)),
    [images.length]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close, prev, next]);

  useEffect(() => {
    document.body.style.overflow = selected !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <>
      {/* Masonry grid using CSS columns */}
      <div className="columns-2 md:columns-3 gap-[2px] px-[2px] pb-[2px]">
        {images.map((src, i) => (
          <div
            key={src}
            className="break-inside-avoid mb-[2px] overflow-hidden group relative"
            onClick={() => setSelected(i)}
            data-cursor="hover"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.03, 1) }}
              className="overflow-hidden"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`${title} ${i + 1}`}
                className="w-full block group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                loading={i < 9 ? "eager" : "lazy"}
              />
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-400" />
            </motion.div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-[9000] bg-black/97 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
          >
            {/* Image */}
            <motion.img
              key={selected}
              src={images[selected]}
              alt={`${title} ${selected + 1}`}
              className="max-h-[88vh] max-w-[88vw] object-contain select-none"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              draggable={false}
            />

            {/* Prev */}
            <button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/30 hover:text-white transition-colors duration-200"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              data-cursor="hover"
              aria-label="Previous"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Next */}
            <button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/30 hover:text-white transition-colors duration-200"
              onClick={(e) => { e.stopPropagation(); next(); }}
              data-cursor="hover"
              aria-label="Next"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.35em] text-white/25">
              {selected + 1}&nbsp;/&nbsp;{images.length}
            </div>

            {/* Close */}
            <button
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center text-white/30 hover:text-white transition-colors duration-200"
              onClick={close}
              data-cursor="hover"
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
