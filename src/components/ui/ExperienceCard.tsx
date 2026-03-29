import type { ExperienceItem } from "@/data/experience";

type ExperienceCardProps = {
  item: ExperienceItem;
};

export default function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold">{item.role}</h3>
          <p className="text-white/70">{item.company}</p>
          {item.location ? (
            <p className="mt-1 text-sm text-white/50">{item.location}</p>
          ) : null}
        </div>

        <p className="text-sm text-white/50">
          {item.start} — {item.end}
        </p>
      </div>

      <ul className="mt-5 space-y-2 text-white/80">
        {item.bullets.map((bullet) => (
          <li key={bullet} className="leading-7">
            • {bullet}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}