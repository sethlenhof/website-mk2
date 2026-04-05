import { ReactNode } from "react";

type PillButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  external?: boolean;
  download?: boolean;
};

const base =
  "rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/80";
const transition =
  "transition duration-300 active:scale-[0.95] hover:-translate-y-[1px] hover:bg-white/10 hover:text-white hover:shadow-[0_0_18px_rgba(105,70,252,0.18)]";

export default function PillButton({
  children,
  href,
  onClick,
  external = false,
  download = false,
}: PillButtonProps) {
  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        download={download}
        className={base + " " + transition}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={base + " " + transition}>
      {children}
    </button>
  );
}