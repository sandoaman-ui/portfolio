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

export default function ProjectGrid() {
  return (
    <section id="productions" className="bg-black py-24 md:py-32">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="flex items-end justify-between mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-3">
              Selected Work
            </p>
            <h2 className="font-display text-5xl md:text-7xl tracking-wider text-white">
              PRODUCTIONS
            </h2>
          </motion.div>

          <motion.p
            className="hidden md:block text-xs tracking-[0.15em] text-white/30 text-right max-w-[200px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Photography & Cinematography
            <br />
            2025 — 2026
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
