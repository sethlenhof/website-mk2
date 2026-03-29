import { site } from "@/data/site";

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-6 py-20 scroll-mt-24">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl">
        <p className="text-sm uppercase tracking-[0.2em] text-white/60">
          {site.name}
        </p>

        <h1 className="mt-4 text-4xl font-bold sm:text-6xl">
          {site.headline}
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          {site.subheadline}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
          >
            GitHub
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${site.email}`}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}