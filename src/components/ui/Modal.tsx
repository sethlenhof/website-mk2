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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let openTimer: ReturnType<typeof setTimeout> | null = null;
    let closeTimer: ReturnType<typeof setTimeout> | null = null;

    if (isOpen) {
      setMounted(true);
      setScrolled(false);
      openTimer = setTimeout(() => {
        setVisible(true);
      }, 20);
    } else if (mounted) {
      setVisible(false);
      closeTimer = setTimeout(() => {
        setMounted(false);
        setScrolled(false);
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
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 transition-all duration-500 ${
        visible ? "bg-black/60 backdrop-blur-md" : "bg-black/0 backdrop-blur-0"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-4xl rounded-3xl border border-white/10 bg-[#1a1f1d] shadow-2xl transition-all duration-500 overflow-y-hidden ${
          visible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-2 scale-[0.98] opacity-0"
        }`}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-6 top-6 z-50 flex items-center rounded-full border border-red-500 bg-[#1a1f1d]/90 px-3 py-1 text-sm text-white/70 transition hover:bg-red-500/10 hover:text-white"
        >
          <span
            className={`inline-block overflow-hidden whitespace-nowrap transition-all duration-500 ease-out ${
              scrolled
                ? "mr-0 max-w-0 opacity-0"
                : "mr-2 max-w-16 opacity-100"
            }`}
          >
            Close
          </span>
          <span className="text-lg leading-none">X</span>
        </button>

        <div
          className="modal-scrollbar max-h-[90vh] overflow-y-auto rounded-3xl p-6"
          onScroll={(e) => {
            setScrolled(e.currentTarget.scrollTop > 20);
          }}
        >
          <div className="mb-6 border-b border-white/10 pb-4 pr-28">
            <div
              className={`min-w-0 ${
                headerLogoMode === "wide"
                  ? "flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
                  : "flex min-w-0 items-center gap-4"
              }`}
            >
              {headerLogo ? (
                <div
                  className={`flex shrink-0 items-center justify-center overflow-hidden ${
                    headerLogoMode === "wide" ? "w-fit" : "h-16 w-16 rounded-2xl border border-white/10 bg-black/20"
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
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}