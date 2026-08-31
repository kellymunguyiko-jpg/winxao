import { DOWNLOAD_URL, APP_VERSION, COMPANY_URL, COMPANY_NAME } from "../data/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-white px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <a href="#top" className="flex items-center gap-3">
              <img
                src="/images/winx-ai-logo.png"
                alt="Winx AI PC Agent logo"
                className="h-11 w-11 rounded-xl shadow-md shadow-cyan-500/20"
              />
              <div className="leading-tight">
                <span className="font-display text-lg font-bold text-slate-950">
                  Winx <span className="text-gradient">AI</span> PC Agent
                </span>
                <span className="block text-[10px] font-semibold tracking-[0.22em] text-slate-500 uppercase">
                  Desktop AI Assistant
                </span>
              </div>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
              Your intelligent desktop companion. Smarter work, every day — right on
              your Windows PC.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 md:items-end">
            <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">
              Quick Links
            </p>
            <div className="flex flex-col items-center gap-2 text-sm text-slate-600 md:items-end">
              <a href="#features" className="transition-colors hover:text-cyan-700">Features</a>
              <a href="#screenshots" className="transition-colors hover:text-cyan-700">Screenshots</a>
              <a href="#install" className="transition-colors hover:text-cyan-700">How to Install</a>
              <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-fuchsia-700">
                Download {APP_VERSION}
              </a>
              <a
                href={COMPANY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-700 transition-colors hover:text-cyan-700"
              >
                {COMPANY_NAME} · Official Site ↗
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Winx AI PC Agent. All rights reserved.</p>
          <p>Windows is a trademark of Microsoft Corporation. This site is not affiliated with Microsoft.</p>
        </div>
      </div>
    </footer>
  );
}
