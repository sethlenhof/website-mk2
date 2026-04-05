"use client";

import PillButton from "@/components/ui/PillButton";
import { site } from "@/data/site";
import { scrollToSection } from "@/util/ScrollToSection";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto max-w-6xl px-6 py-16 md:py-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
        <div className="hero-glow h-64 w-[520px] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur">
            <p className="hero-fade-1 text-xs uppercase tracking-[0.25em] text-white/50">
              {site.name}
            </p>

            <h1 className="hero-fade-2 mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              {site.headline}
            </h1>

            <p className="hero-fade-3 mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              {site.subheadline}
            </p>

            <div className="hero-fade-4 mt-8 flex flex-wrap gap-3">
              <PillButton
                onClick={() => scrollToSection("experience")}
              >
                View Experience
              </PillButton>

              <PillButton href={site.links.linkedin} external>
                LinkedIn
              </PillButton>

              <PillButton href={`mailto:${site.email}`}>
                Contact
              </PillButton>
            </div>

            <div className="hero-fade-4 mt-6 flex flex-wrap items-center gap-3 text-sm text-white/45">
              <span>{site.location}</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span>Lockheed Martin</span>
            </div>
          </div>
        </div>
        
        <div className="hero-fade-2 flex justify-center lg:justify-end">
          <div className="hero-float relative">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-fuchsia-500/10 via-violet-500/10 to-blue-500/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-xl backdrop-blur">
              <img
                src="/images/profile/me.jpeg"
                alt="Seth Lenhof"
                className="h-[260px] w-[220px] sm:h-[320px] sm:w-[260px] rounded-[1.5rem] object-cover sm:h-[360px] sm:w-[280px] lg:h-[400px] lg:w-[320px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}