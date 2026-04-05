"use client";

import { site } from "@/data/site";
import { scrollToSection } from "@/util/ScrollToSection";
import PillButton from "@/components/ui/PillButton";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto max-w-6xl px-6 py-20 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
        <div className="hero-glow h-72 w-[600px] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur">
          <p className="hero-fade-1 text-xs uppercase tracking-[0.25em] text-white/50">
            {site.name}
          </p>

          <h1 className="hero-fade-2 mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {site.headline}
          </h1>

          <p className="hero-fade-3 mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
            {site.subheadline}
          </p>

          <div className="hero-fade-4 mt-8 flex flex-wrap gap-3">
            {/* <PillButton href={site.links.github} external>
              GitHub
            </PillButton> */}
            <PillButton onClick={() => scrollToSection("experience")}>
              View Experience
            </PillButton>

            <PillButton href={site.links.linkedin} external>
              LinkedIn
            </PillButton>

            <PillButton href={`mailto:${site.email}`}>
              Contact
            </PillButton>
          </div>
        </div>

        <div className="hero-fade-3 flex justify-center lg:justify-end">
          <div className="hero-float overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 shadow-xl backdrop-blur">
            <img
              src="/images/profile/me.jpeg"
              alt="Seth Lenhof"
              className="h-[320px] w-[260px] rounded-[1.25rem] object-cover sm:h-[380px] sm:w-[300px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}