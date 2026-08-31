import { APP_NAME } from "../data/site";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <img
            src="/images/winx-ai-logo.png"
            alt={`${APP_NAME} logo`}
            className="h-10 w-10 rounded-xl shadow-md shadow-cyan-500/20"
          />
          <div className="leading-tight">
            <span className="font-display text-lg font-bold tracking-tight text-slate-950">
              Winx <span className="text-gradient">AI</span>
            </span>
            <span className="block text-[10px] font-semibold tracking-[0.22em] text-slate-500 uppercase">
              PC Agent
            </span>
          </div>
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#features" className="transition-colors hover:text-cyan-700">
            Features
          </a>
          <a href="#screenshots" className="transition-colors hover:text-cyan-700">
            Screenshots
          </a>
          <a href="#install" className="transition-colors hover:text-cyan-700">
            How to Install
          </a>
          <a href="#faq" className="transition-colors hover:text-cyan-700">
            FAQ
          </a>
        </div>

        <a
          href="#download"
          className="rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-cyan-500/30 transition-all hover:shadow-fuchsia-500/40 hover:brightness-110"
        >
          Download
        </a>
      </nav>
    </header>
  );
}
