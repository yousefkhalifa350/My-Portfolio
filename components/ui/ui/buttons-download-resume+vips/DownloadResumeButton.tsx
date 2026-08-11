// /components/DownloadResumeButton.tsx
"use client";

import React from "react";
import { ShinyButton } from "@/components/ui/ui/buttons-download-resume+vips/shiny-button";
import { profile } from "@/lib/data";

import { cn } from "@/lib/utils"

interface DownloadButtonProps {
  resumeUrl?: string
  fileName?: string
  className?: string
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  resumeUrl = profile.resume.url,
  fileName = profile.resume.fileName,
  className,
}) => {
  const handleDownload = () => {
   const link = document.createElement("a")
    link.href = resumeUrl
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <ShinyButton
      onClick={handleDownload}
      gradientColor="#9ca3af"    // soft gray shine
      gradientOpacity="0.2"      // very light
      className={cn(
        // Subtle border: light gray with low opacity
     "border border-gray-300/40   hover:border-[#a088e0]  hover:shadow-2xs hover:shadow-[#a893d4] transition-all duration-300 ",
        className
      )}
    >
      {/* Your download SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        stroke="currentColor"
        className="size-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
        />
      </svg>
      <span>My Resume</span>
    </ShinyButton>
  )
}