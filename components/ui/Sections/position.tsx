// components/ui/Sections/position.tsx
"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, CalendarDays, CheckCircle2, Cpu, Rocket } from "lucide-react";
import { ScrollReveal } from "../ui/scroll/scroll";
import { experience, careerGoal } from "@/lib/data";

export default function Position() {
  return (
    <section id="experience" className="relative z-10 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal direction="up">
          <span className="section-kicker">Current position</span>
        </ScrollReveal>
        <ScrollReveal direction="up">
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Where I <span className="text-gradient">work now</span>
          </h2>
        </ScrollReveal>

        {/* Dark glass card */}
        <ScrollReveal direction="up" className="mt-10">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/95 p-6 shadow-2xl shadow-sky-900/20 sm:p-10 backdrop-blur-xl">
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

            {/* Vertical timeline */}
            <div
              className="pointer-events-none absolute bottom-6 left-6 top-16 hidden w-px bg-gradient-to-b from-sky-400 via-blue-500/60 to-transparent sm:left-10 sm:block"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute left-[21px] top-[74px] hidden h-3.5 w-3.5 rounded-full border-2 border-sky-300 bg-sky-500 shadow-[0_0_16px_rgba(0,168,232,0.8)] sm:left-[37px] sm:block"
              aria-hidden="true"
            />

            <div className="relative grid gap-10 md:grid-cols-2 md:gap-8">
              {/* LEFT — role & company */}
              <div className="pl-1 sm:pl-8">
                {/* Company icon placeholder */}
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 shadow-lg shadow-sky-500/30">
                    <Building2 className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-sky-500/15 px-3 py-1 text-xs font-semibold text-sky-200">
                      {experience.company}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/15 px-3 py-1 text-xs font-semibold text-cyan-200">
                      <Cpu className="h-3.5 w-3.5" aria-hidden="true" />
                      {experience.system}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">
                      <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                      {experience.period}
                    </span>
                  </div>
                </div>

                <h3 className="mt-6 text-2xl font-extrabold text-white sm:text-3xl">
                  {experience.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-white! sm:text-base">
                  {experience.summary}
                </p>
              </div>

              {/* RIGHT — responsibilities */}
              <div className="flex h-full flex-col sm:pl-8">
                <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-400">
                  <Briefcase className="h-4 w-4 text-sky-400" aria-hidden="true" />
                  Key responsibilities
                </h4>
                <ul className="mt-5 space-y-3.5">
                  {experience.responsibilities.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07, duration: 0.4 }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 shadow-md shadow-sky-500/30">
                        <CheckCircle2 className="h-3 w-3 text-white" aria-hidden="true" />
                      </span>
                      <span className="text-sm font-medium leading-snug text-slate-200 transition-colors duration-200 hover:text-white sm:text-[15px]">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Career goal banner */}
        <ScrollReveal direction="up" className="mt-8">
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 p-[1.5px] shadow-xl shadow-sky-500/20 transition-shadow duration-300 hover:shadow-2xl hover:shadow-sky-500/30">
            <div className="relative flex flex-col items-start gap-4 overflow-hidden rounded-[calc(1.5rem-1.5px)] bg-slate-900/95 p-6 sm:p-8 md:flex-row md:items-center">
              <div
                className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-sky-600/25 blur-3xl"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-cyan-500/15 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 shadow-lg shadow-sky-500/30">
                <Rocket
                  className="h-7 w-7 text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </div>
              <div className="relative">
                <h3 className="text-lg font-extrabold text-white sm:text-xl">
                  Career Goal
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-white! sm:text-base">
                  {careerGoal.text}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}