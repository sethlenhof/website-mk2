import SectionHeader from "@/components/ui/SectionHeader";
import SkillGroup from "@/components/ui/SkillGroup";
import { skills } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-12">
      <SectionHeader title="Skills" />

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {skills.map((category) => (
          <SkillGroup key={category.title} category={category} />
        ))}
      </div>
    </section>
  );
}