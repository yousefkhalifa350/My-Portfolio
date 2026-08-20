// components/ui/Sections/StatCounter.tsx
"use client";

import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  value: number;
  suffix: string;
  label: string;
}

export function StatCounter({ value, suffix, label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === "undefined") {
      const frameId = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(frameId);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-30px", threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    const start = performance.now();
    const duration = 1600;
    let frameId = 0;

    const update = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 3;
      setDisplay(Math.round(easedProgress * value));

      if (progress < 1) {
        frameId = requestAnimationFrame(update);
      }
    };

    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
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