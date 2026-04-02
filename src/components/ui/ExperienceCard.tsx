import type { ExperienceCompany } from "@/data/experience";

type ExperienceCardProps = {
  item: ExperienceCompany;
  onOpen: () => void;
};

export default function ExperienceCard({ item, onOpen }: ExperienceCardProps) {
  const currentRole = item.roles.find((role) => role.current) ?? item.roles[0];

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group w-full rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-lg transition hover:border-white/20 hover:bg-white/10"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-semibold text-white">{item.company}</h3>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
              {item.overallStart} — {item.overallEnd}
            </span>
          </div>

          {item.location ? (
            <p className="mt-2 text-sm text-white/45">{item.location}</p>
          ) : null}

          {item.currentHeadline ? (
            <p className="mt-4 text-white/80">{item.currentHeadline}</p>
          ) : null}

          <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-base font-semibold text-white">
                {currentRole.title}
              </p>
              {currentRole.team ? (
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/60">
                  {currentRole.team}
                </span>
              ) : null}
              {currentRole.current ? (
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-xs text-emerald-300">
                  Current
                </span>
              ) : null}
            </div>

            <p className="mt-2 text-sm text-white/50">
              {currentRole.start} — {currentRole.end}
            </p>

            <p className="mt-3 text-white/70">{currentRole.summary}</p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>

        <span className="shrink-0 text-sm text-white/50 transition group-hover:text-white/80">
          View progression +
        </span>
      </div>
    </button>
  );
}