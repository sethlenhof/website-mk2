"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import ExperienceCard from "@/components/ui/ExperienceCard";
import Modal from "@/components/ui/Modal";
import { experience, type ExperienceItem } from "@/data/experience";

export default function ExperienceSection() {
  const [selected, setSelected] = useState<ExperienceItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (item: ExperienceItem) => {
    setSelected(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const clearSelected = () => {
    setSelected(null);
  };

  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-6 py-12 scroll-mt-24"
    >
      <SectionHeader title="Experience" />

      <div className="mt-6 grid gap-6">
        {experience.map((item) => (
          <ExperienceCard
            key={`${item.company}-${item.role}-${item.start}`}
            item={item}
            onOpen={() => openModal(item)}
          />
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onAfterClose={clearSelected}
        title={selected ? `${selected.role} — ${selected.company}` : ""}
      >
        {selected ? (
          <div>
            <p className="mb-4 text-sm text-white/50">
              {selected.start} — {selected.end}
              {selected.location ? ` • ${selected.location}` : ""}
            </p>

            <ul className="space-y-3 text-white/80">
              {selected.bullets.map((bullet) => (
                <li key={bullet} className="leading-7">
                  • {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {selected.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}