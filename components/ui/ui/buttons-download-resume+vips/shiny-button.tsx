// components/ui/ShinyButton.tsx
"use client"

import React from "react"
import { motion, type MotionProps } from "motion/react"
import { cn } from "@/lib/utils"

// Light animation from top to bottom (sweep)
const topToBottomAnimation: MotionProps = {
  initial: { "--y": "0%" },
  animate: { "--y": "100%" },
  whileTap: { scale: 0.98 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1.5,
    duration: 1.2,
    ease: "easeInOut",
    scale: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },
}

interface ShinyButtonProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>,
    MotionProps {
  children: React.ReactNode
  className?: string
  gradientColor?: string   // main color for the shine
  gradientOpacity?: string // e.g., "0.2" or "0.4"
}

export const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ children, className, gradientColor = "#ffffff", gradientOpacity = "0.3", ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={cn(
"relative cursor-pointer rounded-xl border-0 px-5 py-2.5 isolate  transition-all duration-200 overflow-hidden",
          "flex items-center justify-center gap-2",
          className
        )}
        {...topToBottomAnimation}
        {...props}
      >
        {/* Text & SVG content */}
        <span className="relative z-10 flex items-center gap-2 text-sm font-medium">
          {children}
        </span>
        
        {/* Top-to-bottom moving shine overlay */}
        <span
          className="absolute inset-0 rounded-[inherit] pointer-events-none"
          style={{
            background: `linear-gradient(to bottom, 
              ${gradientColor}${Math.floor(parseFloat(gradientOpacity) * 100)}%, 
              transparent 50%, 
              ${gradientColor}${Math.floor(parseFloat(gradientOpacity) * 100)}%
            )`,
            transform: `translateY(calc(var(--y) - 100%))`,
            transition: "transform 0s", // controlled by motion
          }}
        />
      </motion.button>
    )
  }
)

ShinyButton.displayName = "ShinyButton"