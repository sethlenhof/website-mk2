import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-12">
      <SectionHeader title="Projects" />

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {projects.map((item) => (
          <ProjectCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}