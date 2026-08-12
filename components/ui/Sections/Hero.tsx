// components/ui/Sections/Hero.tsx
import Image from "next/image";
import { Download, Eye } from "lucide-react";
import { ShineBorder } from "../ui/card/shine-border";
import { StatCounter } from "./StatCounter";
import { profile, heroStats } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 flex min-h-[calc(100vh-80px)] items-center overflow-hidden px-4 pt-16 pb-10 sm:px-6"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          {/* ============ TEXT (top on mobile) ============ */}
          <div className="hero-in-left order-1 text-center lg:order-1 lg:text-left">
            <h3 className="mb-2 text-lg font-bold uppercase tracking-wider text-[#00a8e8] md:text-xl">
              Developer
            </h3>

            <h1 className="text-4xl font-extrabold text-slate-800 sm:text-5xl lg:text-6xl dark:text-white">
              Hello, I&apos;m{" "}
              <span className="text-sky-600 dark:text-[#00a8e8]">
                {profile.fullName}
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-gray-600 sm:text-base lg:mx-0 dark:text-slate-300">
              {profile.tagline}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-nowrap items-center justify-center gap-4 lg:justify-start">
              <a
                href={profile.resume.url}
                download
                className="inline-flex items-center gap-2 rounded-lg border border-[#00a8e8]/30 bg-[#007ea7] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00a8e8] hover:bg-[#003459] hover:shadow-[#00a8e8]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00a8e8] focus-visible:ring-offset-2"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download CV
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-lg border border-[#00a8e8] px-6 py-3 text-sm font-semibold text-[#00a8e8] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00a8e8] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00a8e8] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#00171f]"
              >
                <Eye className="h-4 w-4" aria-hidden="true" />
                View My Work
              </a>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-3 rounded-2xl border border-white/60 bg-white/60 p-5 shadow-lg shadow-sky-900/5 backdrop-blur-xl sm:gap-4 sm:p-6 dark:border-[#003459]/60 dark:bg-[#002233]/40">
              {heroStats.map((stat) => (
                <StatCounter key={stat.label} {...stat} />
              ))}
            </div>
          </div>

          {/* ============ PROFILE CARD (right on desktop) ============ */}
          <div className="hero-in-right order-2 flex justify-center lg:order-2 lg:mt-8">
            <div className="hero-bob mx-auto w-full max-w-[320px] rounded-[30px] border border-sky-200 bg-white p-3 shadow-sm sm:max-w-[460px] sm:p-6 md:p-8 dark:border-[#003459] dark:bg-[#002233]/60">
              <div className="relative mx-auto w-full overflow-hidden rounded-xl">
                <ShineBorder shineColor={["#38bdf8", "#00a8e8", "#0284c7"]} />

                <div className="group relative aspect-square w-full overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-[0_0_35px_rgba(0,168,232,0.4)]">
                  <Image
                    src={profile.photo}
                    alt={`${profile.fullName} — ${profile.role}`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 460px"
                    quality={80}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </div>

              <div className="mt-5 text-center sm:mt-6">
                <span className="text-xl font-Inter font-bold text-slate-800 sm:text-2xl dark:text-white">
                  {profile.fullName}
                </span>
                <span className="mt-2 flex items-center justify-center gap-3 text-sm font-medium text-sky-600 sm:text-base dark:text-[#00a8e8]">
                  {profile.role}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}