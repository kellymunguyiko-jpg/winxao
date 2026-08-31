import { STATS } from "../data/site";

export default function StatsBar() {
  return (
    <section className="relative px-4 pb-8 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 shadow-xl shadow-slate-200/70 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 bg-white px-4 py-7 text-center"
            >
              <span className="font-display text-2xl font-bold text-gradient sm:text-3xl">
                {stat.value}
              </span>
              <span className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
