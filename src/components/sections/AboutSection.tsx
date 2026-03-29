import SectionHeader from "@/components/ui/SectionHeader";
import { about } from "@/data/about";

export default function AboutSection() {
  const resumeHref = "/resume/SethLenhofResume.pdf";

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-12">
      <SectionHeader title="About" />

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
          <div className="space-y-4 text-base leading-7 text-white/75 sm:text-lg">
            {about.blurb.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-white">Resume</h3>

          <p className="mt-3 leading-7 text-white/70">
            For a concise overview of my experience, projects, and technical
            background, you can view or download my resume below.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={resumeHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm text-white transition hover:bg-white/20"
            >
              View Resume
            </a>

            <a
              href={resumeHref}
              download
              className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/80 transition hover:bg-white/10"
            >
              Download PDF
            </a>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/20 block">
            <iframe
              src={resumeHref}
              title="Resume Preview"
              className="w-full h-[400px] sm:h-[500px] lg:h-[420px] bg-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}