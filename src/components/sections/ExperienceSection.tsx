import ExperienceCard from "@/components/ui/ExperienceCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { experience } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-12 scroll-mt-24">
      <SectionHeader title="Experience" />

      <div className="mt-6 grid gap-6">
        {experience.map((item) => (
          <ExperienceCard
            key={`${item.company}-${item.role}-${item.start}`}
            item={item}
          />
        ))}
      </div>
    </section>
  );
}