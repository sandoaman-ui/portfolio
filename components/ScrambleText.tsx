"use client";

import { useState, useEffect } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@!$%&";

function rand() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

interface Props {
  text: string;
  delay?: number;
  charDelay?: number;
  duration?: number;
  className?: string;
}

export default function ScrambleText({
  text,
  delay = 0,
  charDelay = 55,
  duration = 380,
  className,
}: Props) {
  const [display, setDisplay] = useState(text);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Set random chars immediately on mount
    setDisplay(
      text
        .split("")
        .map((c) => (c === " " ? " " : rand()))
        .join("")
    );

    let frameId: number;
    let startTime: number;

    const startTimer = setTimeout(() => {
      startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const chars = text.split("");

        const next = chars
          .map((char, i) => {
            if (char === " ") return " ";
            const settleAt = i * charDelay + duration;
            return elapsed >= settleAt ? char : rand();
          })
          .join("");

        setDisplay(next);

        const maxTime = (chars.length - 1) * charDelay + duration + 30;
        if (elapsed < maxTime) {
          frameId = requestAnimationFrame(animate);
        } else {
          setDisplay(text);
        }
      };

      frameId = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(startTimer);
      cancelAnimationFrame(frameId);
    };
  }, [mounted, text, delay, charDelay, duration]);

  return <span className={className}>{display}</span>;
}
