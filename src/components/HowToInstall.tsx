import { INSTALL_STEPS } from "../data/site";

export default function HowToInstall() {
  return (
    <section id="install" className="relative scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28">
      <div className="pointer-events-none absolute top-0 left-1/2 h-px w-3/4 max-w-3xl -translate-x-1/2 glow-line" />
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-bold tracking-widest text-violet-700 uppercase">
            Getting Started
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Install in <span className="text-gradient">4 easy steps</span>
          </h2>
          <p className="mt-4 text-slate-600">
            From download to your first AI conversation in less than a minute.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INSTALL_STEPS.map((item, i) => (
            <div key={item.step} className="relative">
              {i < INSTALL_STEPS.length - 1 && (
                <div className="absolute top-9 left-[calc(50%+3rem)] hidden h-px w-[calc(100%-6rem)] bg-gradient-to-r from-cyan-400/50 to-transparent lg:block" />
              )}
              <div className="relative flex h-full flex-col items-center rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-violet-400/70 hover:shadow-[0_14px_45px_rgba(139,92,246,0.15)]">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-fuchsia-500 font-display text-xl font-bold text-white shadow-lg shadow-cyan-500/30">
                  {item.step}
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
