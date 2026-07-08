"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Concerts",
    year: 2026,
    href: "/concerts",
    imageSrc:
      "https://cdn.myportfolio.com/93a04739-6d1d-4270-a5ba-8671ee9e78bb/23ef10e2-4064-4393-8ef1-6444d7a4ede3_rwc_217x0x3413x2560x1920.jpg?h=48be531c07d3eee37b3c8b652310d774",
  },
  {
    title: "Pickleball",
    year: 2026,
    href: "/pickleball",
    imageSrc:
      "https://cdn.myportfolio.com/93a04739-6d1d-4270-a5ba-8671ee9e78bb/fd06e664-8c2c-48a9-a060-8e12fb7c0efa_rwc_217x0x3413x2560x1920.jpg?h=1b5bc6597ebf09e3d543130d52de4aad",
  },
  {
    title: "Automobiles",
    year: 2026,
    href: "/automobiles",
    imageSrc:
      "https://cdn.myportfolio.com/93a04739-6d1d-4270-a5ba-8671ee9e78bb/0aead3ff-efe4-44a4-ae03-548cbae95ecf_rwc_431x0x6774x5081x1920.jpg?h=da8a05ac6b0815693d1e4ee0e7002b13",
  },
  {
    title: "Sports",
    year: 2026,
    href: "/sports",
    imageSrc:
      "https://cdn.myportfolio.com/93a04739-6d1d-4270-a5ba-8671ee9e78bb/078df6fa-4f69-498c-b9f4-e71d1e2da46f_rwc_357x0x5613x4210x1920.jpg?h=785be27ed024f62194c864663d754818",
  },
  {
    title: "Cinematography",
    year: 2026,
    href: "/cinematography",
    imageSrc:
      "https://cdn.myportfolio.com/93a04739-6d1d-4270-a5ba-8671ee9e78bb/bf10f026-3f17-4173-b95d-0753c999bb5c_rwc_308x0x4848x3636x1920.jpg?h=fb0280226837ea21041850be120b9a28",
  },
  {
    title: "Fashion",
    year: 2026,
    href: "/fashion",
    imageSrc:
      "https://cdn.myportfolio.com/93a04739-6d1d-4270-a5ba-8671ee9e78bb/ba9f986e-21ed-458d-b3e4-8c9a133d62af_rwc_217x0x3413x2560x1920.jpg?h=7f7ba406c8cd1146525db4a465364a53",
  },
];

const TICKER_TEXT = "SELECTED WORK · 2025—2026 · PHOTOGRAPHY · CINEMATOGRAPHY · ";

function TickerStrip({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="overflow-hidden border-y border-white/[0.06] py-3 pointer-events-none select-none">
      <motion.div
        className="flex whitespace-nowrap text-[10px] tracking-[0.35em] uppercase text-white/25"
        style={{ willChange: "transform" }}
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        <span>{TICKER_TEXT.repeat(8)}</span>
        <span>{TICKER_TEXT.repeat(8)}</span>
      </motion.div>
    </div>
  );
}

export default function ProjectGrid() {
  const heading = "PRODUCTIONS";

  return (
    <section id="productions" className="bg-black py-24 md:py-32">
      {/* Ticker strip */}
      <TickerStrip />

      <div className="max-w-screen-xl mx-auto px-6 md:px-12 mt-20 md:mt-24">
        {/* Section header */}
        <div className="flex items-end justify-between mb-16 md:mb-20">
          <div>
            <motion.p
              className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Selected Work
            </motion.p>

            {/* Letter-by-letter heading */}
            <h2
              className="font-display text-5xl md:text-7xl tracking-wider text-white"
              aria-label={heading}
            >
              {heading.split("").map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block overflow-hidden"
                  initial={{ y: "110%", opacity: 0 }}
                  whileInView={{ y: "0%", opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    delay: i * 0.04,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </h2>
          </div>

          <motion.div
            className="hidden md:flex flex-col items-end gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-xs tracking-[0.15em] text-white/25 text-right">
              Photography & Cinematography
            </p>
            <p className="text-xs tracking-[0.15em] text-white/25">2025 — 2026</p>
            <div className="mt-3 flex items-center gap-1.5">
              {projects.map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 h-1 rounded-full bg-gold/40"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.07, duration: 0.4 }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </div>

      {/* Bottom ticker (reversed direction) */}
      <div className="mt-24 md:mt-32">
        <TickerStrip reverse />
      </div>
    </section>
  );
}
