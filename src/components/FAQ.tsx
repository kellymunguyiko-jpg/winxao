import { useState } from "react";
import { FAQS } from "../data/site";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28">
      <div className="pointer-events-none absolute top-0 left-1/2 h-px w-3/4 max-w-3xl -translate-x-1/2 glow-line" />
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="inline-block rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-4 py-1.5 text-xs font-bold tracking-widest text-fuchsia-700 uppercase">
            FAQ
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Frequently asked <span className="text-gradient">questions</span>
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.q}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-cyan-400/70 bg-cyan-50/60 shadow-lg shadow-cyan-500/10"
                    : "border-slate-200 bg-white shadow-sm hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-sm font-semibold text-slate-950 sm:text-base">
                    {faq.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white transition-all duration-300 ${
                      isOpen ? "rotate-45 bg-gradient-to-br from-cyan-500 to-fuchsia-500" : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
