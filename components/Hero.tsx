"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrambleText from "./ScrambleText";

const MARQUEE_TEXT =
  "PHOTOGRAPHY · SPORTS · CONCERTS · AUTOMOBILES · FASHION · CINEMATOGRAPHY · ";

const CATEGORY_TAGS = [
  { label: "Concerts",       left: "7%",  top: "22%" },
  { label: "Sports",         left: "80%", top: "26%" },
  { label: "Automobiles",    left: "74%", top: "66%" },
  { label: "Fashion",        left: "9%",  top: "70%" },
  { label: "Cinematography", left: "38%", top: "10%" },
];

const STATS = [
  { value: "57+", label: "Shoots" },
  { value: "06",  label: "Categories" },
  { value: "2026", label: "Season" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y       = useTransform(scrollYProgress, [0, 1], ["0%",  "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const marqY   = useTransform(scrollYProgress, [0, 1], ["0%",  "12%"]);

  return (
    <section
      ref={ref}
      className="relative h-[100dvh] flex flex-col items-center justify-center bg-black overflow-hidden"
    >
      {/* ── GRID BACKGROUND ─────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <svg className="w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="72" height="72" patternUnits="userSpaceOnUse">
              <path d="M 72 0 L 0 0 0 72" fill="none" stroke="white" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* ── RADIAL GOLD PULSE ───────────────────────────────── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.05, 0.11, 0.05] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, #c9a97a 0%, transparent 70%)",
        }}
      />

      {/* ── SCAN LINE ───────────────────────────────────────── */}
      <motion.div
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 50%, transparent 100%)" }}
        initial={{ top: "-2%" }}
        animate={{ top: "102%" }}
        transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 4, ease: "linear" }}
      />

      {/* ── BACKGROUND MARQUEE (huge outline letters) ───────── */}
      <motion.div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden"
        style={{ y: marqY }}
      >
        <motion.div
          className="flex whitespace-nowrap font-display leading-none"
          style={{
            fontSize: "clamp(4rem, 10vw, 11rem)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.045)",
            willChange: "transform",
          }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 55, ease: "linear", repeat: Infinity }}
        >
          {/* Duplicated so -50% loops seamlessly */}
          <span>{MARQUEE_TEXT + MARQUEE_TEXT + MARQUEE_TEXT}</span>
          <span>{MARQUEE_TEXT + MARQUEE_TEXT + MARQUEE_TEXT}</span>
        </motion.div>
      </motion.div>

      {/* ── VERTICAL SIDE TEXT ──────────────────────────────── */}
      <motion.span
        className="absolute left-5 top-1/2 -translate-y-1/2 hidden md:block pointer-events-none select-none
                   text-[9px] tracking-[0.5em] uppercase text-white/15"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg) translateY(50%)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
      >
        AMANVEER SINGH SANDO
      </motion.span>

      <motion.span
        className="absolute right-5 top-1/2 -translate-y-1/2 hidden md:block pointer-events-none select-none
                   text-[9px] tracking-[0.5em] uppercase text-white/15"
        style={{ writingMode: "vertical-rl", transform: "translateY(-50%)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
      >
        EST. 2024 · GUJARAT · INDIA
      </motion.span>

      {/* ── CORNER BRACKETS ─────────────────────────────────── */}
      <motion.div
        className="absolute top-[4.5rem] left-8 md:left-14 w-7 h-7 border-l border-t border-white/[0.12] pointer-events-none"
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.9, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="absolute bottom-14 right-8 md:right-14 w-7 h-7 border-r border-b border-white/[0.12] pointer-events-none"
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.9, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="absolute top-[4.5rem] right-8 md:right-14 w-7 h-7 border-r border-t border-white/[0.06] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 0.6 }}
      />
      <motion.div
        className="absolute bottom-14 left-8 md:left-14 w-7 h-7 border-l border-b border-white/[0.06] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 0.6 }}
      />

      {/* ── FLOATING CATEGORY TAGS (desktop only) ───────────── */}
      {CATEGORY_TAGS.map(({ label, left, top }, i) => (
        <motion.div
          key={label}
          className="absolute hidden md:block pointer-events-none select-none"
          style={{ left, top }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0 + i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            className="block text-[8px] tracking-[0.38em] uppercase text-white/25 px-2.5 py-1"
            style={{ border: "1px solid rgba(255,255,255,0.1)" }}
          >
            {label}
          </span>
        </motion.div>
      ))}

      {/* ── MAIN CONTENT ────────────────────────────────────── */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6"
        style={{ y, opacity }}
      >
        {/* Eyebrow */}
        <motion.p
          className="text-xs tracking-[0.45em] uppercase text-gold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          Portfolio — 2026
        </motion.p>

        {/* Name */}
        <h1 className="font-display leading-none tracking-wider select-none">
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <ScrambleText
                text="AMANVEER"
                delay={600}
                charDelay={55}
                duration={400}
                className="block text-[14vw] md:text-[11vw] lg:text-[10vw] text-white"
              />
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <ScrambleText
                text="SINGH"
                delay={900}
                charDelay={65}
                duration={420}
                className="block text-[14vw] md:text-[11vw] lg:text-[10vw] text-white/10 [-webkit-text-stroke:1px_rgba(255,255,255,0.25)]"
              />
            </motion.div>
          </div>
        </h1>

        {/* Subtitle */}
        <motion.p
          className="mt-8 text-xs md:text-sm tracking-[0.5em] uppercase text-white/40"
          initial={{ opacity: 0, letterSpacing: "0.8em" }}
          animate={{ opacity: 1, letterSpacing: "0.5em" }}
          transition={{ duration: 1.2, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Photography&nbsp;&nbsp;|&nbsp;&nbsp;Cinematography
        </motion.p>

        {/* Gold divider */}
        <motion.div
          className="mt-10 h-px bg-gold"
          initial={{ width: 0 }}
          animate={{ width: 48 }}
          transition={{ duration: 0.9, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Stats row */}
        <motion.div
          className="mt-10 flex items-center gap-10 md:gap-16"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.05, ease: [0.16, 1, 0.3, 1] }}
        >
          {STATS.map(({ value, label }, i) => (
            <div key={label} className="flex flex-col items-center gap-1.5">
              {i > 0 && (
                <div className="absolute -left-5 md:-left-8 w-px h-6 bg-white/10" />
              )}
              <span className="font-display text-2xl md:text-3xl text-white/90 tracking-widest">
                {value}
              </span>
              <span className="text-[8px] tracking-[0.38em] uppercase text-white/30">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── SCROLL INDICATOR ────────────────────────────────── */}
      <motion.div
        className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <span className="text-[9px] tracking-[0.35em] uppercase text-white/25">Scroll</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-white/25 to-transparent"
          animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.25, 0.65, 0.25] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
