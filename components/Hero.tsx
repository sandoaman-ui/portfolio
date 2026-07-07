"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrambleText from "./ScrambleText";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[100dvh] flex flex-col items-center justify-center bg-black overflow-hidden"
    >
      {/* Background accent lines */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      </div>

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
          Portfolio
        </motion.p>

        {/* Main name — scramble effect */}
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
          animate={{ width: 60 }}
          transition={{ duration: 0.8, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/30">Scroll</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent"
          animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
