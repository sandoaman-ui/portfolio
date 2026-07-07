"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CategoryNav({ category }: { category: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 h-16"
      style={{
        background: scrolled ? "rgba(0,0,0,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
        transition: "background 0.4s, backdrop-filter 0.4s, border-color 0.4s",
      }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <a
        href="/#productions"
        className="text-[10px] tracking-[0.25em] uppercase text-white/50 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
        data-cursor="hover"
      >
        <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
        Productions
      </a>

      <a href="/" data-cursor="hover">
        <Image
          src="/logo-white.png"
          alt="Home"
          width={36}
          height={36}
          className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
        />
      </a>

      <a
        href="/#contact"
        className="text-[10px] tracking-[0.25em] uppercase text-white/50 hover:text-white transition-colors duration-300"
        data-cursor="hover"
      >
        Contact
      </a>
    </motion.header>
  );
}
