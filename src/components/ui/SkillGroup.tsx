import type { SkillCategory } from "@/data/skills";

type SkillGroupProps = {
  category: SkillCategory;
};

export default function SkillGroup({ category }: SkillGroupProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
      <h3 className="text-xl font-semibold">{category.title}</h3>

      <div className="mt-4 flex flex-wrap gap-2">
        {category.items.map((item) =>
          item.href ? (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/75 transition hover:bg-white/10 hover:text-white"
          >
            {item.label}

            <span className="text-[11px] opacity-60 transition group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:opacity-100">
              ↗
            </span>
          </a>
          ) : (
            <span
              key={item.label}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/75"
            >
              {item.label}
            </span>
          )
        )}
      </div>
    </article>
  );
}