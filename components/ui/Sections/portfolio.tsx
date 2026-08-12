// components/ui/Sections/portfolio.tsx

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "../icons";
import { ScrollReveal } from "../ui/scroll/scroll";
import { projects } from "@/lib/data";

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative z-10 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal direction="up">
          <span className="section-kicker">Projects</span>
        </ScrollReveal>

        <ScrollReveal direction="up">
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Featured <span className="text-gradient">work</span>
          </h2>
          <span
            className="mt-4 block h-1 w-20 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400"
            aria-hidden="true"
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {projects.map((project, i) => (
            <ScrollReveal
              key={project.title}
              direction={i % 2 === 0 ? "left" : "right"}
              className="h-full"
            >
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/95 shadow-2xl shadow-sky-900/20 backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-2 hover:border-sky-400/40 hover:shadow-2xl hover:shadow-sky-500/20">
                {/* Top half — preview image */}
                <div className="relative aspect-[3/2] w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                  {project.badge && (
                    <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Bottom half — info with dark overlay */}
                <div className="relative flex flex-1 flex-col overflow-hidden p-5 sm:p-6">
                  <div
                    className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-sky-600/15 blur-3xl"
                    aria-hidden="true"
                  />
                  <div
                    className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl"
                    aria-hidden="true"
                  />
                  <h3 className="relative text-lg font-extrabold text-white sm:text-xl">
                    {project.title}
                  </h3>
                  {project.description && (
                    <p className="relative mt-2 text-sm leading-relaxed text-white!">
                      {project.description}
                    </p>
                  )}

                  {/* Actions */}
                  <div className="relative mt-4 flex flex-wrap items-center gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open live demo of ${project.title}`}
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#00b4d8] px-5 py-2 text-sm font-semibold text-white shadow-md shadow-cyan-500/25 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#0096c7] hover:shadow-lg hover:shadow-cyan-500/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b4d8] focus-visible:ring-offset-2"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View source code of ${project.title} on GitHub`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-5 py-2 text-sm font-semibold text-slate-200 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-sky-400/50 hover:bg-white/5 hover:text-[#00a8e8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2"
                    >
                      <GithubIcon className="h-4 w-4" />
                      GitHub
                    </a>
                  </div>

                  {/* Tech stack */}
                  <ul className="relative mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-sky-400/30 bg-sky-500/15 px-2.5 py-1 text-xs font-semibold text-sky-200"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}