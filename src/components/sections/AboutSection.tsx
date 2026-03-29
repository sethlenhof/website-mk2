import SectionHeader from "@/components/ui/SectionHeader";
import { about } from "@/data/about";

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-12">
      <SectionHeader title="About" />

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
        <div className="space-y-4 text-base leading-7 text-white/75 sm:text-lg">
          {about.blurb.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}