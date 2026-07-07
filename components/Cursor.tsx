"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const springCfg = { damping: 30, stiffness: 350, mass: 0.4 };
  const x = useSpring(mouseX, springCfg);
  const y = useSpring(mouseY, springCfg);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest("[data-cursor='hover']")) setHovered(true);
    };

    const onOut = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest("[data-cursor='hover']")) setHovered(false);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
    };
  }, [mouseX, mouseY, visible]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      style={{ x, y, opacity: visible ? 1 : 0 }}
    >
      <motion.div
        className="rounded-full bg-white mix-blend-difference"
        animate={{
          width: hovered ? 56 : 12,
          height: hovered ? 56 : 12,
        }}
        transition={{ type: "spring", damping: 22, stiffness: 300, mass: 0.3 }}
      />
    </motion.div>
  );
}
