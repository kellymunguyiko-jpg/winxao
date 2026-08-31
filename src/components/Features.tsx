import { FEATURES } from "../data/site";

export default function Features() {
  return (
    <section id="features" className="relative scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28">
      <div className="pointer-events-none absolute top-0 left-1/2 h-px w-3/4 max-w-3xl -translate-x-1/2 glow-line" />
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-4 py-1.5 text-xs font-bold tracking-widest text-fuchsia-700 uppercase">
            Features
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Everything you need in one{" "}
            <span className="text-gradient">AI agent</span>
          </h2>
          <p className="mt-4 text-slate-600">
            Winx AI PC Agent packs powerful capabilities into a lightweight app that
            stays quietly in your system tray.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/70 hover:shadow-[0_14px_45px_rgba(34,211,238,0.18)]"
            >
              <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-cyan-400/15 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/15 to-fuchsia-500/15 text-3xl ring-1 ring-slate-200 transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-slate-950">
                {feature.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
