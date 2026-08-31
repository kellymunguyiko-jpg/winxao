import { DOWNLOAD_URL } from "../data/site";

interface DownloadButtonProps {
  size?: "lg" | "md";
  label?: string;
  className?: string;
}

export default function DownloadButton({
  size = "lg",
  label = "Download for Windows",
  className = "",
}: DownloadButtonProps) {
  return (
    <a
      href={DOWNLOAD_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 font-display font-bold text-white shadow-[0_12px_35px_rgba(34,211,238,0.35)] transition-all duration-300 hover:shadow-[0_16px_50px_rgba(217,70,239,0.45)] hover:scale-[1.03] active:scale-[0.98] ${
        size === "lg" ? "px-8 py-4 text-lg" : "px-6 py-3 text-sm"
      } ${className}`}
    >
      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
        <span className="absolute top-0 left-0 h-full w-1/3 bg-white/30 blur-md animate-shine" />
      </span>
      <svg
        className={size === "lg" ? "h-6 w-6" : "h-5 w-5"}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
      </svg>
      {label}
      <span className="hidden rounded-lg bg-white/20 px-2 py-0.5 text-xs font-semibold sm:inline">
        .exe
      </span>
    </a>
  );
}
