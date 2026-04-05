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
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17l9.2-9.2M17 17V7H7"/>
            </svg>
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