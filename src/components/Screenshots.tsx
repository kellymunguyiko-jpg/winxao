import { useEffect, useState } from "react";
import { SCREENSHOTS } from "../data/site";

export default function Screenshots() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="screenshots" className="relative scroll-mt-20 overflow-hidden px-4 py-20 sm:px-6 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-indigo-200/50 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-200/50 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold tracking-widest text-cyan-700 uppercase">
            Screenshots
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            See <span className="text-gradient">Winx AI</span> in action
          </h2>
          <p className="mt-4 text-slate-600">
            A sleek, modern interface designed for speed and clarity. Click any screenshot
            to view it full screen.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {SCREENSHOTS.map((shot, i) => (
            <button
              key={shot.src}
              type="button"
              onClick={() => setActive(i)}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 text-left shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/70 hover:shadow-[0_16px_50px_rgba(34,211,238,0.18)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
                <img
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-slate-950/70 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-sm font-semibold text-white">{shot.label}</span>
                  <span className="rounded-full bg-white/25 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    View ↗
                  </span>
                </div>
              </div>
              <div className="px-3 py-3">
                <p className="text-sm font-semibold text-slate-900">{shot.label}</p>
                <p className="mt-0.5 text-xs text-slate-500">Winx AI PC Agent {i + 1}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-md"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
          <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={SCREENSHOTS[active].src}
              alt={SCREENSHOTS[active].alt}
              className="max-h-[82vh] w-auto rounded-2xl border border-white/15 shadow-2xl shadow-cyan-500/20"
            />
            <figcaption className="mt-4 text-center text-sm font-medium text-slate-300">
              {SCREENSHOTS[active].label}
              <span className="mx-2 text-slate-600">•</span>
              <span className="text-slate-500">
                {active + 1} / {SCREENSHOTS.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
