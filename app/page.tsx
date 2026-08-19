import dynamic from "next/dynamic";
import Hero from "@/components/ui/Sections/Hero";

// Hero stays static (above the fold); below-the-fold sections are code-split
// into separate chunks so the initial bundle stays small.
const About = dynamic(() => import("@/components/ui/Sections/about"), { ssr: true });
const Position = dynamic(() => import("@/components/ui/Sections/position"), { ssr: true });
const Skills = dynamic(() => import("@/components/ui/Sections/skills"), { ssr: true });
const Portfolio = dynamic(() => import("@/components/ui/Sections/portfolio"), { ssr: true });
const Contact = dynamic(() => import("@/components/ui/Sections/contact"), { ssr: true });

export default function Home() {
  return (
    <>
      <Hero />

      <main className="mx-auto max-w-6xl px-4 sm:px-8">
        <About />
        <Position />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}