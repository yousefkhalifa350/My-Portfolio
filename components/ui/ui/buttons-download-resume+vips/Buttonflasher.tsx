"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { GlareHover } from "@/components/ui/ui/flasher-button-config/glare-hover" // adjust the import path
import { ArrowRight } from "lucide-react"
export interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  direction?: "right" | "left"
  position?: "left" | "right"
  showArrow?: boolean
}

export const Button
 = React.forwardRef<HTMLButtonElement, Button>(
  (
    { children, position = "right", showArrow = false, className, ...props },
    ref,
  ) => {
     const arrow = (
        <ArrowRight />
      )

    return (
      <GlareHover
        // --- Flasher / glare configuration (same as before) ---
        color="#ffffff"
        opacity={0.25}
        angle={-45}
        size={180}
        duration={600}
        playOnce={false}
        background="transparent"
        className="rounded-[inherit]"
      >
        <button
          className={cn(
            "group relative inline-flex items-center justify-center gap-2",
            "h-10 px-7 text-sm font-bold tracking-wide",
            "rounded-full",
            "hero-gradient",
            "cursor-pointer overflow-hidden",
            "text-white",
            "shadow-lg shadow-[#007ea7]/25",
            "hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#00a8e8]/40",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00a8e8] focus-visible:ring-offset-2",
            "disabled:pointer-events-none disabled:opacity-50",
            "transition-all duration-300",
            className,
          )}
          ref={ref}
          {...props}
        >
          {position === "left" && (
            <span
              className={cn(
                "transition-all duration-200",
                showArrow
                  ? "opacity-100 w-4"
                  : "opacity-0 w-0 group-hover:opacity-100 group-hover:w-4",
              )}
            >
             {arrow}
            </span>
          )}

          <span>{children}</span>

          {position === "right" && (
            <span
              className={cn(
                "transition-all duration-200",
                showArrow
                  ? "opacity-100 w-4"
                  : "opacity-0 w-0 group-hover:opacity-100 group-hover:w-4",
              )}
            >
          {arrow  }
            </span>
          )}
        </button>
      </GlareHover>
    )
  },
)

Button.displayName = "Button"

export default Button


