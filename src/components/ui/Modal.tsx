"use client";

import { ReactNode, useEffect, useState } from "react";

type HeaderLogoMode = "square" | "contain" | "wide";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAfterClose?: () => void;
  title: string;
  children: ReactNode;

  headerLogo?: string;
  headerLogoAlt?: string;
  headerLogoMode?: HeaderLogoMode;
};

function getHeaderLogoClass(mode: HeaderLogoMode = "square") {
  switch (mode) {
    case "wide":
      return "h-10 w-auto max-w-[220px] object-contain";
    case "contain":
      return "h-full w-full object-contain";
    case "square":
    default:
      return "h-full w-full object-cover";
  }
}

export default function Modal({
  isOpen,
  onClose,
  onAfterClose,
  title,
  children,
  headerLogo,
  headerLogoAlt,
  headerLogoMode = "square",
}: ModalProps) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let openTimer: ReturnType<typeof setTimeout> | null = null;
    let closeTimer: ReturnType<typeof setTimeout> | null = null;

    if (isOpen) {
      setMounted(true);
      openTimer = setTimeout(() => {
        setVisible(true);
      }, 20);
    } else if (mounted) {
      setVisible(false);
      closeTimer = setTimeout(() => {
        setMounted(false);
        onAfterClose?.();
      }, 500);
    }

    return () => {
      if (openTimer) clearTimeout(openTimer);
      if (closeTimer) clearTimeout(closeTimer);
    };
  }, [isOpen, mounted, onAfterClose]);

  useEffect(() => {
    if (!mounted) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mounted, onClose]);

  if (!mounted) return null;

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ${
        visible ? "bg-black/60" : "bg-black/0"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-[#1a1f1d] p-6 shadow-2xl transition-all duration-500 ${
          visible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-2 scale-[0.98] opacity-0"
        }`}
      >
        <div className="mb-6 flex items-start justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex min-w-0 items-center gap-4">
            {headerLogo ? (
              <div
                className={`flex shrink-0 items-center justify-center overflow-hidden ${
                  headerLogoMode === "wide" ? "px-3 py-2" : "h-16 w-16 rounded-2xl border border-white/10 bg-black/20"
                }`}
              >
                <img
                  src={headerLogo}
                  alt={headerLogoAlt ?? `${title} logo`}
                  className={getHeaderLogoClass(headerLogoMode)}
                />
              </div>
            ) : null}

            <h3 className="min-w-0 text-2xl font-semibold text-white">
              {title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="shrink-0 rounded-full border border-white/10 px-3 py-1 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            Close
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}