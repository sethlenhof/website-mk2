"use client";

import { scrollToSection } from "@/util/ScrollToSection";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Skills", href: "#skills", id: "skills" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 140) {
          current = item.id;
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const linkBase =
  "rounded-xl px-4 py-2 text-white transition-all duration-500";
const activeLink =
  "bg-[rgba(0,0,0,0.55)] shadow-[0_0_24px_rgba(33,38,35,0.9)]";
const mobileActiveLink =
  "rounded-2xl bg-[rgba(0,0,0,0.55)] shadow-[0_0_10px_rgba(33,38,35,0.9)]";
const inactiveLink = "bg-black/20 hover:bg-black/30";

useEffect(() => {
  const hash = window.location.hash.replace("#", "");
  if (!hash) return;

  // wait for layout to fully render
  const timer = setTimeout(() => {
    scrollToSection(hash);
  }, 50);

  return () => clearTimeout(timer);
}, []);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3">
      <nav
        className="mx-auto max-w-6xl rounded-2xl px-4 py-2 text-sm text-white shadow-lg"

        style={{
          background:
            "linear-gradient(45deg, rgba(251,63,220,1) 0%, rgba(105,70,252,1) 100%)",
        }}
      >
        {/* desktop */}
        <div className="hidden items-center justify-between md:flex">
          <div className="flex w-24 items-center">
            <a href="#home" className="flex items-center">
              <img
                src="/logo.svg"
                alt="Logo"
                className="h-8 w-auto max-h-8 object-contain"
              />
            </a>
          </div>

          <div className="flex flex-1 justify-center">
            <div className="flex items-center gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    className={`${linkBase} ${isActive ? activeLink : "hover:bg-black/20"}`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="w-24" />
        </div>

        {/* mobile */}
        <div className="md:hidden">
          <div className="flex items-center justify-between">
            <a href="#home" className="flex items-center">
              <img
                src="/logo.svg"
                alt="Logo"
                className="h-8 w-auto max-h-8 object-contain"
              />
            </a>

            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-black/20 shadow-[0_0_18px_rgba(33,38,35,0.35)] transition hover:bg-black/30"
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 w-5 rounded bg-white transition-all duration-500 ${
                    menuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 rounded bg-white transition-all duration-500 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 rounded bg-white transition-all duration-500 ${
                    menuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>

          <div
            className={`grid transition-all duration-500 ${
              menuOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
                <div className="flex flex-col gap-2 pb-1">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.id;

                    return (
                    <div key={item.href} className="px-2 py-1">
                        <a
                            href={item.href}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(item.id);
                                setMenuOpen(false);
                            }}
                            className={`block rounded-2xl px-4 py-3 text-center text-white transition-all duration-500 ${
                                isActive ? mobileActiveLink : inactiveLink
                            }`}
                            >
                            {item.label}
                        </a>
                    </div>
                    );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}