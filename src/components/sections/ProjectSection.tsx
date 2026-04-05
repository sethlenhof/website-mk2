"use client";

import { useEffect, useState } from "react";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeader from "@/components/ui/SectionHeader";
import Modal from "@/components/ui/Modal";
import Chip from "@/components/ui/Chip";
import PillButton from "@/components/ui/PillButton";
import { projects, type ProjectItem } from "@/data/projects";

export default function ProjectsSection() {
  const [selected, setSelected] = useState<ProjectItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const mediaCount = selected?.media?.length ?? 0;

  const openModal = (item: ProjectItem) => {
    setSelected(item);
    setCurrentSlide(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const clearSelected = () => {
    setSelected(null);
    setCurrentSlide(0);
  };

  const nextSlide = () => {
    if (!mediaCount) return;
    setCurrentSlide((prev) => (prev + 1) % mediaCount);
  };

  const prevSlide = () => {
    if (!mediaCount) return;
    setCurrentSlide((prev) => (prev - 1 + mediaCount) % mediaCount);
  };

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") nextSlide();
      if (event.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, mediaCount]);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-12">
      <SectionHeader title="Projects" />

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {projects.map((item) => (
          <ProjectCard
            key={item.title}
            item={item}
            onOpen={() => openModal(item)}
          />
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onAfterClose={clearSelected}
        title={selected?.title ?? ""}
        headerLogo={selected?.logo}
        headerLogoMode={selected?.logoMode}
        headerLogoAlt={selected ? `${selected.title} logo` : "Project logo"}
      >
        {selected ? (
          <div>
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-white">Description</h5>
              <p className="mt-3 leading-7 text-white/80">
                {selected.description}
              </p>
            </div>

            {selected.links && selected.links.length > 0 && (
              <div className="mb-6">
                <h5 className="text-lg font-semibold text-white">Links</h5>
                <div className="mt-3 flex flex-wrap gap-3">
                  {selected.links.map((link) => (
                    <PillButton key={link.href} href={link.href} external>
                      {link.label}
                    </PillButton>
                  ))}
                </div>
              </div>
            )}

            {selected.bullets && selected.bullets.length > 0 ? (
              <div className="mb-6">
                <h5 className="text-lg font-semibold text-white">Highlights</h5>
                <ul className="mt-3 space-y-3 text-white/80">
                  {selected.bullets.map((bullet) => (
                    <li key={bullet} className="leading-7">
                      • {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mb-6">
              <h5 className="text-lg font-semibold text-white">Tech Stack</h5>
              <div className="mt-3 flex flex-wrap gap-2">
                {selected.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </div>
            </div>

            {selected.media && selected.media.length > 0 ? (
              <div className="mt-8">
                <div className="mb-3 flex items-center justify-between">
                  <h5 className="text-lg font-semibold text-white">
                    Screenshots
                  </h5>
                  {selected.media.length > 1 ? (
                    <p className="text-sm text-white/50">
                      {currentSlide + 1} / {selected.media.length}
                    </p>
                  ) : null}
                </div>

                <div className="relative">
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                    <div
                      className="flex transition-transform duration-500"
                      style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                      }}
                    >
                      {selected.media.map((item) => (
                        <div key={item.src} className="min-w-full">
                          <img
                            src={item.src}
                            alt={item.alt}
                            className="h-[240px] w-full object-contain bg-black/20 md:h-[380px]"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {selected.media.length > 1 ? (
                    <>
                      <button
                        type="button"
                        onClick={prevSlide}
                        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/50 px-3 py-2 text-white/80 transition hover:bg-black/70"
                        aria-label="Previous screenshot"
                      >
                        ‹
                      </button>

                      <button
                        type="button"
                        onClick={nextSlide}
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/50 px-3 py-2 text-white/80 transition hover:bg-black/70"
                        aria-label="Next screenshot"
                      >
                        ›
                      </button>
                    </>
                  ) : null}
                </div>
              </div>
            ) : null}
          </div>
        ) : null}
      </Modal>
    </section>
  );
}