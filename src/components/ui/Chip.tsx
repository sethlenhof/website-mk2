import { ReactNode } from "react";

type ChipProps = {
  children: ReactNode;
  href?: string;
};

export default function Chip({ children, href }: ChipProps) {
  const baseClassName =
    "inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/20 px-3.5 py-1.5 text-sm text-white/70 transition";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`${baseClassName} group hover:bg-white/10 hover:text-white`}
      >
        <span>{children}</span>

        <svg
          className="h-3.5 w-3.5 opacity-60 transition group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:opacity-100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M7 17L17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </a>
    );
  }

  return <span className={baseClassName}>{children}</span>;
}