// components/ui/Sections/about.tsx
"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "../ui/scroll/scroll";
import { about } from "@/lib/data";

const highlights = [
  {
    title: "Front-End Engineering",
    text: "Clean, scalable interfaces built with React.js & Next.js",
  },
  {
    title: "Performance & SEO",
    text: "Fast loads, Core Web Vitals and SSR/SSG-first architecture",
  },
  {
    title: "APIs & State",
    text: "REST integration, TanStack Query, Context API and Zod validation",
  },
  {
    title: "Team & Process",
    text: "Agile development, Git workflows and maintainable codebases",
  },
];

export default function About() {
  return (
    <section id="about" className="relative z-10 overflow-hidden py-20 sm:py-24">
      {/* Ambient gradient background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-gradient-to-br from-sky-200/60 via-blue-200/40 to-cyan-200/50 blur-3xl dark:from-[#007ea7]/15 dark:via-[#00a8e8]/10 dark:to-[#00a8e8]/10" />
        <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-200/50 via-sky-100/40 to-blue-100/50 blur-3xl dark:from-[#00a8e8]/10 dark:via-[#007ea7]/10 dark:to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 blur-3xl dark:bg-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal direction="up">
          <span className="section-kicker">About me</span>
        </ScrollReveal>

        <ScrollReveal direction="up">
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl lg:text-5xl dark:text-white">
            Who <span className="text-gradient">I am</span>
          </h2>
        </ScrollReveal>

        {/* Who I'm — full width glass panel */}
        <ScrollReveal direction="up" className="mt-10">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/95 p-6 shadow-2xl shadow-sky-900/20 backdrop-blur-xl sm:p-10">
            {/* Ambient gradient blobs */}
            <div
              className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-600/30 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl"
              aria-hidden="true"
            />
            {/* Top accent line */}
            <div
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400"
              aria-hidden="true"
            />

            <p className="relative text-sm leading-relaxed text-white! sm:text-base">
              {about.paragraph}
            </p>

            <h3 className="relative mb-4 mt-10 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-400">
              <span
                className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600"
                aria-hidden="true"
              />
              My stack
            </h3>
            <div className="flex flex-wrap gap-2 ">
              {about.technologies.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03, duration: 0.3 }}
                  className="relative cursor-default rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-200 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-400/50 hover:bg-sky-500/10 hover:text-[#00a8e8] sm:text-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* What I do */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <ScrollReveal key={h.title} direction="up">
              <div
                style={{ transitionDelay: `${i * 60}ms` }}
                className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 p-5 shadow-2xl shadow-sky-900/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-400/40 hover:shadow-xl hover:shadow-sky-500/15"
              >
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400"
                  aria-hidden="true"
                />
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500 to-blue-600 opacity-0 transition-opacity duration-500 group-hover:opacity-[0.08]`}
                  aria-hidden="true"
                />
                <span className="text-gradient relative block text-2xl font-extrabold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="relative mt-2 text-sm font-bold text-white sm:text-base">
                  {h.title}
                </h3>
                <p className="relative mt-1.5 text-xs leading-relaxed text-white! sm:text-sm">
                  {h.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}