// components/ui/Sections/HeroStats.tsx
"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

// StatCounter (and its framer-motion dependency) is split into a separate
// chunk and loaded only on the client — it never blocks the initial HTML,
// which is what paints the LCP element (the H1).
const AnimatedStatCounter = dynamic(
  () => import("./StatCounter").then((m) => m.StatCounter),
  { ssr: false }
);

// Static fallback (final values) keeps the grid at its final size while the
// animated counter chunk loads — no CLS, and no harm if it never loads.
function StatFallback({ stat }: { stat: Stat }) {
  return (
    <div className="flex min-h-[4.5rem] flex-col items-center justify-center text-center">
      <span className="text-gradient block text-2xl font-extrabold tabular-nums sm:text-3xl lg:text-4xl">
        {stat.value}
        {stat.suffix}
      </span>
      <span className="mt-1 block text-xs font-semibold text-gray-600 sm:text-sm dark:text-slate-400">
        {stat.label}
      </span>
    </div>
  );
}

export default function HeroStats({ stats }: { stats: Stat[] }) {
  return (
    <>
      {stats.map((stat) => (
        <Suspense key={stat.label} fallback={<StatFallback stat={stat} />}>
          <AnimatedStatCounter {...stat} />
        </Suspense>
      ))}
    </>
  );
}