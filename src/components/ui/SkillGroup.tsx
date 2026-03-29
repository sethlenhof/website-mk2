import type { SkillCategory } from "@/data/skills";

type SkillGroupProps = {
  category: SkillCategory;
};

export default function SkillGroup({ category }: SkillGroupProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
      <h3 className="text-xl font-semibold">{category.title}</h3>

      <div className="mt-4 flex flex-wrap gap-2">
        {category.items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/75"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}