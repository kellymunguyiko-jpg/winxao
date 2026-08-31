import { APP_VERSION } from "../data/site";
import DownloadButton from "./DownloadButton";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16 text-center"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-cyan-300/30 blur-[130px] animate-pulse-glow" />
        <div className="absolute -right-40 -bottom-40 h-[480px] w-[480px] rounded-full bg-fuchsia-300/30 blur-[130px] animate-pulse-glow [animation-delay:1.4s]" />
        <div className="absolute top-1/3 left-1/2 h-[380px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-300/20 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.045) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
          }}
        />
      </div>

      {/* Logo */}
      <div className="relative animate-float">
        <div className="absolute inset-0 scale-110 rounded-[2rem] bg-cyan-400/40 blur-3xl" />
        <img
          src="/images/winx-ai-logo.png"
          alt="Winx AI PC Agent logo"
          className="relative h-40 w-40 rounded-[2rem] shadow-[0_20px_60px_rgba(34,211,238,0.35)] sm:h-52 sm:w-52"
        />
      </div>

      {/* Badge */}
      <div className="relative mt-10 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-cyan-800 sm:text-sm">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-500 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
        </span>
        Version {APP_VERSION} · Now available for Windows
      </div>

      {/* Headline */}
      <h1 className="relative mt-6 max-w-4xl font-display text-4xl leading-[1.08] font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
        Meet <span className="text-gradient">Winx AI</span> — your intelligent PC{" "}
        <span className="relative whitespace-nowrap">
          Agent
          <svg
            className="absolute -bottom-2 left-0 w-full text-cyan-500/60"
            viewBox="0 0 220 12"
            fill="none"
          >
            <path
              d="M3 9C60 3 160 3 217 9"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </h1>

      <p className="relative mt-7 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
        Supercharge your Windows PC with a smart, lightweight AI companion. Chat, automate
        tasks and boost your productivity — right from your desktop. Free to download, easy
        to install.
      </p>

      {/* CTA */}
      <div id="download" className="relative mt-10 flex flex-col items-center gap-4">
        <DownloadButton size="lg" />
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-slate-500">
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Free download
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Virus-free &amp; secure
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Works on Windows 10 / 11
          </span>
        </div>
      </div>
    </section>
  );
}
