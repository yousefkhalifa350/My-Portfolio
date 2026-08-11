// Navbar.tsx
"use client"
import { useEffect, useState } from "react";
import Link from "next/link"
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/components/ui/theme-provider";
import { Button } from "../buttons-download-resume+vips/Buttonflasher";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scrollspy — highlight the section currently in view
  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full border-b transition-all duration-300 ${
          scrolled
            ? "border-slate-200/70 bg-white/75 shadow-lg shadow-slate-900/5 backdrop-blur-xl dark:border-[#003459] dark:bg-[#00171f]/95 dark:shadow-2xl"
            : "border-transparent bg-white/55 backdrop-blur-md dark:border-transparent dark:bg-[#00171f]/70"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
          <nav
            className="grid h-16 grid-cols-[auto_1fr_auto] items-center md:h-[72px]"
            aria-label="Main navigation"
          >
            {/* LEFT: logo */}
            <Link
              href="#home"
              aria-label="Yousef Hesham — back to top"
              onClick={() => setActive("#home")}
              className="group flex items-center gap-2 hover:opacity-90"
            >
              <span className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                <span className="inline-block text-black transition-all duration-300 group-hover:-translate-y-1 dark:text-white">
                  Y
                </span>
                <span className="ml-1 inline-block text-sky-500 transition-all duration-300 group-hover:translate-y-1 group-hover:text-[#00a8e8] dark:text-[#00a8e8]">
                  H
                </span>
              </span>
            </Link>

            {/* CENTER: section links */}
            <div className="hidden items-center justify-center gap-1 md:flex">
              {links.map((link) => {
                const isActive = active === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setActive(link.href)}
                    aria-current={isActive ? "page" : undefined}
                    className={`group relative rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                      isActive
                        ? "text-sky-700 dark:text-[#00a8e8]"
                        : "text-slate-500 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white"
                    }`}
                  >
                    {link.label}
                    {/* animated underline / active pill */}
                    <span
                      className={`absolute inset-x-4 -bottom-0.5 h-0.5 origin-left rounded-full bg-gradient-to-r from-[#00a8e8] to-[#007ea7] transition-transform duration-300 ease-out ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                );
              })}
            </div>

            {/* RIGHT: theme toggle + contact */}
            <div className="flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to night mode"}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/70 bg-white/70 text-slate-500 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-600 dark:border-[#003459]/70 dark:bg-[#00171f]/70 dark:text-[#00a8e8] dark:hover:border-[#00a8e8]/60 dark:hover:bg-[#003459]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                {theme === "dark" ? (
                  <Sun className="h-[18px] w-[18px]" aria-hidden="true" />
                ) : (
                  <Moon className="h-[18px] w-[18px]" aria-hidden="true" />
                )}
              </button>
              <div className="hidden md:block">
                <Link href="#contact" onClick={() => setActive("#contact")}>
                  <Button>Contact</Button>
                </Link>
              </div>
              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/70 bg-white/70 text-slate-500 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-sky-300 hover:text-sky-600 md:hidden dark:border-[#003459]/70 dark:bg-[#00171f]/70 dark:text-[#00a8e8] dark:hover:border-[#00a8e8]/60"
              >
                {menuOpen ? (
                  <X className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <Menu className="h-5 w-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </nav>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="pb-4 md:hidden">
              <div className="flex flex-col gap-1 rounded-2xl border border-slate-200/70 bg-white/90 p-3 shadow-xl shadow-slate-900/5 backdrop-blur-xl dark:border-[#003459]/70 dark:bg-[#00171f]/95">
                {links.map((link) => {
                  const isActive = active === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => {
                        setActive(link.href);
                        setMenuOpen(false);
                      }}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                        isActive
                          ? "bg-sky-50 text-sky-700 dark:bg-[#003459]/60 dark:text-[#00a8e8]"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-800 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span
                          className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#00a8e8] to-[#007ea7]"
                          aria-hidden="true"
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </header>
      {/* Spacer matching the fixed header height */}
      <div className="h-16 md:h-[72px]" />
    </>
  );
}
