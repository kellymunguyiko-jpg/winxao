import { REQUIREMENTS } from "../data/site";

const ICONS: Record<string, string> = {
  os: "🖥️",
  cpu: "⚙️",
  ram: "🧠",
  storage: "💾",
  network: "🌐",
  display: "🖼️",
};

export default function Requirements() {
  return (
    <section className="relative px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
          <div className="grid lg:grid-cols-[1fr_1.4fr]">
            <div className="relative flex flex-col justify-center gap-4 overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-fuchsia-50 p-8 sm:p-12 lg:border-r lg:border-slate-200">
              <div className="pointer-events-none absolute -top-20 -left-20 h-56 w-56 rounded-full bg-cyan-300/30 blur-3xl" />
              <span className="relative inline-block w-fit rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold tracking-widest text-cyan-700 uppercase">
                System Requirements
              </span>
              <h2 className="relative font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Runs on almost <span className="text-gradient">any PC</span>
              </h2>
              <p className="relative text-sm leading-relaxed text-slate-600">
                Winx AI PC Agent is lightweight and optimized — no powerful gaming rig
                needed. Check the specs below to make sure your system is ready.
              </p>
              <img
                src="/images/winx-ai-logo.png"
                alt="Winx AI PC Agent"
                className="relative mt-2 h-20 w-20 rounded-2xl opacity-90 shadow-lg shadow-cyan-500/25 animate-float-slow"
              />
            </div>

            <ul className="divide-y divide-slate-100">
              {Object.entries(REQUIREMENTS).map(([key, value]) => (
                <li
                  key={key}
                  className="flex items-center gap-4 px-8 py-5 transition-colors hover:bg-slate-50 sm:px-12"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 text-xl ring-1 ring-slate-200">
                    {ICONS[key] ?? "✅"}
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                      {key}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-slate-800">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
