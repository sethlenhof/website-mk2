import type { ProjectItem } from "@/data/projects";

type ProjectCardProps = {
  item: ProjectItem;
  onOpen: () => void;
};

export default function ProjectCard({ item, onOpen }: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="w-full rounded-2xl border border-white/10 bg-white/5 p-0 text-left shadow-lg transition hover:bg-white/10"
    >
      <div className="overflow-hidden rounded-t-2xl border-b border-white/10 bg-black/20">
        <img
          src={item.logo}
          alt={`${item.title} cover`}
          className="h-44 w-full object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{item.title}</h3>

        <p className="mt-3 text-white/70">{item.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {item.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 text-sm text-white/50">View more +</div>
      </div>
    </button>
  );
}