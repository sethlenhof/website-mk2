import type { SkillCategory } from "@/data/skills";
import Chip from "@/components/ui/Chip";

type SkillGroupProps = {
  category: SkillCategory;
};

export default function SkillGroup({ category }: SkillGroupProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
      <h3 className="text-xl font-semibold text-white">{category.title}</h3>

      <div className="mt-4 flex flex-wrap gap-2">
        {category.items.map((item) => (
          <Chip key={item.label} href={item.href}>
            {item.label}
          </Chip>
        ))}
      </div>
    </article>
  );
}