type ExperienceItem = {
  company: string;
  role: string;
  start: string;
  end: string;
  location?: string;
  summary: string;
  bullets: string[];
  tags: string[];
};

type ExperienceCardProps = {
  item: ExperienceItem;
  onOpen: () => void;
};

export default function ExperienceCard2({ item, onOpen }: ExperienceCardProps) {
  return (
    <button
      onClick={onOpen}
      className="group w-full rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-lg transition hover:border-white/20 hover:bg-white/10"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white">{item.role}</h3>
          <p className="text-white/70">{item.company}</p>
          {item.location ? (
            <p className="mt-1 text-sm text-white/45">{item.location}</p>
          ) : null}
        </div>

        <div className="text-sm text-white/45">
          {item.start} — {item.end}
        </div>
      </div>

      <p className="mt-4 text-white/70">{item.summary}</p>

      <div className="mt-5 flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {item.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>

        <span className="text-sm text-white/50 transition group-hover:text-white/80">
          View more +
        </span>
      </div>
    </button>
  );
}