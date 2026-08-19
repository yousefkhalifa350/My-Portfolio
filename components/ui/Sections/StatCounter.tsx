// components/ui/Sections/StatCounter.tsx
"use client";

import { useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  value: number;
  suffix: string;
  label: string;
}

export function StatCounter({ value, suffix, label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <div
      ref={ref}
      className="flex min-h-[4.5rem] flex-col items-center justify-center text-center"
    >
      <span className="text-gradient block text-2xl font-extrabold tabular-nums sm:text-3xl lg:text-4xl">
        {display}
        {suffix}
      </span>
      <span className="mt-1 block text-xs font-semibold text-gray-600 sm:text-sm dark:text-slate-400">
        {label}
      </span>
    </div>
  );
}