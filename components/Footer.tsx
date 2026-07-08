"use client";

import { motion } from "framer-motion";

const LINE1 = "LET'S CREATE";
const LINE2 = "SOMETHING";

function StaggeredHeading({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="block overflow-hidden" aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: "110%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: delay + i * 0.035,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-white/5">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
          {/* Left */}
          <div>
            <motion.p
              className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Start the conversation
            </motion.p>

            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-wider text-white leading-none">
              <StaggeredHeading text={LINE1} delay={0.1} />
              <StaggeredHeading
                text={LINE2}
                delay={0.25}
              />
            </h2>

            {/* Outline version of SOMETHING */}
            {/* (handled inline via text-white/15 below) */}
          </div>

          {/* Right */}
          <motion.div
            className="flex flex-col gap-4 text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="mailto:work.anzen.studio@gmail.com"
              className="text-sm tracking-widest text-white/50 hover:text-gold transition-colors duration-300 group flex items-center gap-2 justify-end"
            >
              <motion.span
                className="block h-px bg-gold/50 group-hover:bg-gold transition-all duration-300"
                initial={{ width: 0 }}
                whileInView={{ width: 24 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5 }}
              />
              work.anzen.studio@gmail.com
            </a>
            <a
              href="tel:+919892063070"
              className="text-sm tracking-widest text-white/50 hover:text-gold transition-colors duration-300 group flex items-center gap-2 justify-end"
            >
              <motion.span
                className="block h-px bg-gold/50 group-hover:bg-gold transition-all duration-300"
                initial={{ width: 0 }}
                whileInView={{ width: 24 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
              />
              +91 98920 63070
            </a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="font-display text-xl tracking-[0.3em] text-white/20">AS</span>
          <p className="text-[10px] tracking-[0.2em] uppercase text-white/20">
            © 2026 Amanveer Singh Sando. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
