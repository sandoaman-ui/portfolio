"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-white/5">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Left */}
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">
              Start the conversation
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-wider text-white leading-none">
              LET&apos;S CREATE
              <br />
              <span className="text-white/15 [-webkit-text-stroke:1px_rgba(255,255,255,0.2)]">
                SOMETHING
              </span>
            </h2>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4 text-right">
            <a
              href="mailto:work.anzen.studio@gmail.com"
              className="text-sm tracking-widest text-white/50 hover:text-gold transition-colors duration-300"
              data-cursor="hover"
            >
              work.anzen.studio@gmail.com
            </a>
            <a
              href="tel:+919892063070"
              className="text-sm tracking-widest text-white/50 hover:text-gold transition-colors duration-300"
              data-cursor="hover"
            >
              +91 98920 63070
            </a>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-xl tracking-[0.3em] text-white/20">
            AS
          </span>
          <p className="text-[10px] tracking-[0.2em] uppercase text-white/20">
            © 2026 Amanveer Singh Sando. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
