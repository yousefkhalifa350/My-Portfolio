// components/ui/Sections/contact.tsx
"use client";

import { useId, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../icons";
import { ScrollReveal } from "../ui/scroll/scroll";
import { contact, footer } from "@/lib/data";

export default function Contact() {
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();
  const [sent, setSent] = useState(false);

  const socialIcons: Record<string, typeof GithubIcon> = {
    github: GithubIcon,
    linkedin: LinkedinIcon,
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white/90 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm transition-all focus:border-[#00a8e8] focus:outline-none dark:bg-[#00171f]/80 dark:border-[#003459] dark:text-white dark:placeholder-slate-400";

  return (
    <>
      <section id="contact" className="relative z-10 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <ScrollReveal direction="up">
            <span className="section-kicker">Contact</span>
          </ScrollReveal>
          <ScrollReveal direction="up">
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl lg:text-5xl dark:text-white">
              Get in <span className="text-[#00a8e8]">Touch</span>
            </h2>
            <p className="mt-3 text-sm font-light text-gray-600 sm:text-base dark:text-slate-300">
              Feel free to drop me a line below!
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" className="mt-10">
            <div className="relative mx-auto max-w-4xl rounded-2xl border border-[#003459]/60 bg-[#002233]/40 p-8 shadow-2xl backdrop-blur-md dark:bg-[#002233]/40">
              {/* LEFT — info pane (overlapping on desktop) */}
              <div className="rounded-xl border border-[#007ea7]/30 bg-[#003459] p-8 text-white shadow-2xl md:absolute md:-left-12 md:top-8 md:w-[42%]">
                <h3 className="border-b border-[#00a8e8] pb-3 text-2xl font-bold">
                  Contact Info
                </h3>
                <ul className="mt-6 space-y-5">
                  <li className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 shrink-0 text-[#00a8e8]" aria-hidden="true" />
                    <span className="text-sm text-slate-200 sm:text-base">
                      {contact.location}
                    </span>
                  </li>
                  <li>
                    <a
                      href={`mailto:${contact.email}`}
                      className="flex items-center gap-3 transition-colors hover:text-[#00a8e8]"
                    >
                      <Mail className="h-5 w-5 shrink-0 text-[#00a8e8]" aria-hidden="true" />
                      <span className="text-sm break-all text-slate-200 sm:text-base">
                        {contact.email}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${contact.phone}`}
                      className="flex items-center gap-3 transition-colors hover:text-[#00a8e8]"
                    >
                      <Phone className="h-5 w-5 shrink-0 text-[#00a8e8]" aria-hidden="true" />
                      <span className="text-sm text-slate-200 sm:text-base">
                        {contact.phoneDisplay}
                      </span>
                    </a>
                  </li>
                </ul>

                {/* Socials */}
                <div className="mt-8 flex gap-3 border-t border-[#007ea7]/30 pt-6">
                  {contact.socials.map((social) => {
                    const Icon = socialIcons[social.icon] ?? GithubIcon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit my ${social.label} profile`}
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#00a8e8]/30 text-[#00a8e8] transition-all duration-300 hover:-translate-y-1 hover:border-[#00a8e8] hover:bg-[#00a8e8] hover:text-white"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Form */}
              <form
                className="md:ms-[42%] w-full md:w-[58%]"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="mb-4">
                  <label
                    htmlFor={nameId}
                    className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200"
                  >
                    Your Name
                  </label>
                  <input
                    id={nameId}
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Your Name"
                    className={inputClass}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor={emailId}
                    className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200"
                  >
                    Your Email
                  </label>
                  <input
                    id={emailId}
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="Your Email"
                    className={inputClass}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor={messageId}
                    className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200"
                  >
                    Your Message
                  </label>
                  <textarea
                    id={messageId}
                    name="message"
                    required
                    rows={4}
                    placeholder="Your Message"
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="mt-5 rounded-xl border border-[#00a8e8]/30 bg-[#007ea7] px-8 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:border-[#00a8e8] hover:bg-[#003459] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00a8e8] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#00171f]"
                >
                  {sent ? "Message Sent — Thank You!" : "Send Message"}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <footer className="border-t border-border py-6 text-center text-sm text-gray-500 dark:text-slate-400">
        {footer.line}
      </footer>
    </>
  );
}