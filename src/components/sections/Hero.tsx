import { site } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto max-w-6xl px-6 py-20 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
        <div className="h-72 w-[600px] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur">
        <p className="text-xs uppercase tracking-[0.25em] text-white/50">
          {site.name}
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-6xl">
          {site.headline}
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          {site.subheadline}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/80 transition hover:bg-white/10"
          >
            GitHub
          </a>

          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/80 transition hover:bg-white/10"
          >
            LinkedIn
          </a>

          <a
            href={`mailto:${site.email}`}
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/80 transition hover:bg-white/10"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}