import DownloadButton from "./DownloadButton";
import { COMPANY_URL, COMPANY_NAME } from "../data/site";

export default function CTASection() {
  return (
    <section className="relative px-4 py-20 sm:px-6 sm:py-24">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white px-6 py-16 text-center shadow-2xl shadow-slate-300/50 sm:px-12 sm:py-20">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 via-white to-fuchsia-100" />
          <div className="absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-cyan-300/40 blur-[100px] animate-pulse-glow" />
          <div className="absolute -bottom-24 right-1/4 h-64 w-64 rounded-full bg-fuchsia-300/40 blur-[100px] animate-pulse-glow [animation-delay:1.4s]" />
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "linear-gradient(rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.05) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
              maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
            }}
          />
        </div>

        <div className="relative">
          <img
            src="/images/winx-ai-logo.png"
            alt="Winx AI PC Agent"
            className="mx-auto h-24 w-24 rounded-3xl shadow-[0_18px_50px_rgba(34,211,238,0.4)] animate-float"
          />
          <h2 className="mt-8 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Ready to meet your new{" "}
            <span className="text-gradient">AI PC Agent</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            Download Winx AI PC Agent v1.0.0.0 now — free, fast and secure. Join
            thousands of users already working smarter with AI on their desktop.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <DownloadButton size="lg" />
            <a
              href="#screenshots"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-8 py-4 font-display text-lg font-bold text-slate-900 transition-all hover:border-slate-400 hover:bg-slate-50"
            >
              View screenshots
            </a>
          </div>
          <p className="mt-6 text-xs text-slate-500">
            AI_PC_Agent_Setup_v1.0.0.0.exe · 40 MB · Windows 10 / 11
          </p>
          <a
            href={COMPANY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2 text-xs font-semibold text-slate-700 shadow-sm transition-all hover:border-cyan-500/60 hover:text-cyan-700"
          >
            🏢 Visit {COMPANY_NAME} — official site
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
