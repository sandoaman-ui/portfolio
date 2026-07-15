"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function thumb(src: string, w: number) {
  return `https://wsrv.nl/?url=${encodeURIComponent(src)}&w=${w}&output=webp&q=75`;
}

interface ProjectCardProps {
  title: string;
  year: number;
  href: string;
  imageSrc: string;
  index: number;
}

export default function ProjectCard({
  title,
  year,
  href,
  imageSrc,
  index,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), {
    damping: 25,
    stiffness: 200,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), {
    damping: 25,
    stiffness: 200,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.a
      ref={cardRef}
      href={href}
      className="relative block overflow-hidden aspect-[4/3] group"
      data-cursor="hover"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 800,
      }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.9,
        delay: (index % 2) * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Image */}
      <motion.div
        className="absolute inset-0"
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          backgroundImage: `url(${thumb(imageSrc, 32)}&blur=2)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={thumb(imageSrc, 960)}
          srcSet={`${thumb(imageSrc, 640)} 640w, ${thumb(imageSrc, 960)} 960w, ${thumb(imageSrc, 1280)} 1280w`}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 592px"
          alt={title}
          loading={index < 4 ? "eager" : "lazy"}
          fetchPriority={index < 2 ? "high" : undefined}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </motion.div>

      {/* Dark overlay — always present, deepens on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 group-hover:from-black/85 group-hover:via-black/40 transition-all duration-500" />

      {/* Title reveal from bottom */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <div className="overflow-hidden">
          <motion.div
            className="flex items-end justify-between"
            initial={false}
          >
            <motion.h3
              className="font-display text-3xl md:text-5xl tracking-wider text-white"
              initial={{ y: 0 }}
              whileHover={{ y: 0 }}
            >
              {title}
            </motion.h3>
            <span className="text-xs tracking-[0.2em] text-white/40 mb-1">
              {year}
            </span>
          </motion.div>
        </div>

        {/* Gold underline on hover */}
        <motion.div
          className="h-px bg-gold mt-3"
          initial={{ scaleX: 0, originX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* "View" label */}
        <motion.span
          className="mt-3 text-[10px] tracking-[0.35em] uppercase text-gold/80"
          initial={{ opacity: 0, x: -8 }}
          whileHover={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          View project →
        </motion.span>
      </div>
    </motion.a>
  );
}
