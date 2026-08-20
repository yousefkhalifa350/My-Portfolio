// components/ui/Sections/skills.tsx

import type { CSSProperties } from "react";
import {
  LayoutTemplate,
  Wrench,
  Server,
  Database,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "../ui/scroll/scroll";
import { skillCategories } from "@/lib/data";

const icons: Record<string, LucideIcon> = {
  layout: LayoutTemplate,
  tools: Wrench,
  backend: Server,
  enterprise: Database,
};

const accents = [
  "from-sky-500 to-blue-600",
  "from-cyan-500 to-sky-600",
  "from-blue-500 to-indigo-600",
  "from-sky-400 to-cyan-500",
];

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal direction="up">
          <span className="section-kicker">Tech toolbox</span>
        </ScrollReveal>
        <ScrollReveal direction="up">
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl lg:text-5xl dark:text-white">
            My <span className="text-gradient">toolbox</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base dark:text-slate-300">
            The tools and technologies I use to ship fast, reliable, and
            maintainable web experiences — from interface design to enterprise
            systems.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillCategories.map((cat, i) => {
            const Icon = icons[cat.icon] ?? LayoutTemplate;
            const accent = accents[i % accents.length];
            return (
              <ScrollReveal key={cat.id} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/95 p-6 shadow-2xl shadow-sky-900/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-400/40 hover:shadow-2xl hover:shadow-sky-500/20 sm:p-7">
                  {/* Ambient gradient blobs */}
                  <div
                    className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-sky-600/30 blur-3xl"
                    aria-hidden="true"
                  />
                  <div
                    className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl"
                    aria-hidden="true"
                  />
                  {/* Top accent line */}
                  <div
                    className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400"
                    aria-hidden="true"
                  />
                  {/* soft accent wash on hover */}
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent} opacity-0 transition-opacity duration-500 group-hover:opacity-[0.08]`}
                    aria-hidden="true"
                  />

                  {/* header */}
                  <div className="relative flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-lg shadow-sky-500/30 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}
                      >
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <h3 className="text-lg font-extrabold text-white">
                        {cat.title}
                      </h3>
                    </div>
                    <span className="rounded-full border border-sky-400/30 bg-sky-500/15 px-2.5 py-1 text-xs font-bold text-sky-200">
                      {cat.skills.length} tools
                    </span>
                  </div>

                  {/* skills chips */}
                  <div className="relative mt-5 flex flex-wrap gap-2">
                    {cat.skills.map((skill, j) => (
                      <span
                        key={skill}
                        style={
                          {
                            "--chip-delay": `${i * 0.05 + j * 0.04}s`,
                            "--chip-from": 0.85,
                          } as CSSProperties
                        }
                        className="reveal-chip inline-flex cursor-default items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-400/50 hover:bg-sky-500/10 hover:text-[#00a8e8]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}