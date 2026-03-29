import type { ProjectItem } from "@/data/projects";

type ProjectCardProps = {
  item: ProjectItem;
};

export default function ProjectCard({ item }: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg transition hover:bg-white/10">
      <div className="flex h-full flex-col">
        <div>
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <p className="mt-3 text-white/70">{item.shortDescription}</p>
          <p className="mt-4 text-sm leading-7 text-white/60">
            {item.description}
          </p>
        </div>

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

        {item.links && (item.links.github || item.links.live) ? (
          <div className="mt-6 flex gap-3">
            {item.links.github ? (
              <a
                href={item.links.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
              >
                GitHub
              </a>
            ) : null}

            {item.links.live ? (
              <a
                href={item.links.live}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
              >
                Live Demo
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}