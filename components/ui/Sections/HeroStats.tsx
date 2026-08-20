// components/ui/Sections/HeroStats.tsx
interface Stat {
  value: number;
  suffix: string;
  label: string;
}

function StatValue({ stat }: { stat: Stat }) {
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
        <StatValue key={stat.label} stat={stat} />
      ))}
    </>
  );
}