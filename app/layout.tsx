import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/ui/ui/navbar/navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";

const siteUrl = "https://yousef-hesham.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yousef Hesham — Front-End Developer",
    template: "%s | Yousef Hesham",
  },
  description:
    "Frontend Developer specializing in responsive, scalable, high-performance web applications using React.js, Next.js, and TypeScript. Fast loading, SEO-friendly, production-ready projects.",
  keywords: [
    "Yousef Hesham",
    "Front-End Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
  ],
  authors: [{ name: "Yousef Hesham" }],
  creator: "Yousef Hesham",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Yousef Hesham — Front-End Developer",
    title: "Yousef Hesham — Front-End Developer",
    description:
      "Frontend Developer building fast, scalable and high-performance web applications with React, Next.js and TypeScript.",
    locale: "en_US",
    images: [{ url: "/Yousef_Img.webp", width: 640, height: 640, alt: "Yousef Hesham" }],
  },
  twitter: {
    card: "summary",
    title: "Yousef Hesham — Front-End Developer",
    description:
      "Frontend Developer building fast, scalable and high-performance web applications with React, Next.js and TypeScript.",
    images: ["/Yousef_Img.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#00171f" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="relative">
        {/* Ambient background: light beams & floating particles */}
        <div className="global-bg" aria-hidden="true">
          <div className="global-beam global-beam--1"></div>
          <div className="global-beam global-beam--2"></div>
          <div className="global-beam global-beam--3"></div>
          <div className="global-beam global-beam--4"></div>
          <div className="global-beam global-beam--5"></div>
          <div className="global-particle global-particle--1"></div>
          <div className="global-particle global-particle--2"></div>
          <div className="global-particle global-particle--3"></div>
          <div className="global-particle global-particle--4"></div>
          <div className="global-particle global-particle--5"></div>
          <div className="global-particle global-particle--6"></div>
        </div>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}