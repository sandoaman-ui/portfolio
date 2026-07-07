"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "Productions", href: "#productions" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 md:px-12 h-16 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(0,0,0,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
    >
      {/* Logo */}
      <motion.a
        href="#"
        className="block"
        data-cursor="hover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src="/logo-white.png"
          alt="Amanveer Singh Sando"
          width={44}
          height={44}
          className="object-contain"
          priority
        />
      </motion.a>

      {/* Links */}
      <nav className="flex items-center gap-10">
        {navLinks.map((link, i) => (
          <motion.a
            key={link.href}
            href={link.href}
            className="relative text-xs tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors duration-300 group"
            data-cursor="hover"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
          >
            {link.label}
            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold group-hover:w-full transition-all duration-300" />
          </motion.a>
        ))}
      </nav>
    </motion.header>
  );
}
