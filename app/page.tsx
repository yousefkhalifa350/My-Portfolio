import Hero from "@/components/ui/Sections/Hero";
import About from "@/components/ui/Sections/about";
import Position from "@/components/ui/Sections/position";
import Skills from "@/components/ui/Sections/skills";
import Portfolio from "@/components/ui/Sections/portfolio";
import Contact from "@/components/ui/Sections/contact";

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