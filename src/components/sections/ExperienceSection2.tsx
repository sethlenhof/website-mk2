"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import ExperienceCard2 from "@/components/ui/ExperienceCard2";
import Modal from "@/components/ui/Modal";
import { experience2, type ExperienceItem2 } from "@/data/experience2";

export default function ExperienceSection() {
  const [selected, setSelected] = useState<ExperienceItem2 | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (item: ExperienceItem2) => {
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
    <section id="experience" className="mx-auto max-w-6xl px-6 py-12">
      <SectionHeader title="Experience(2)" />

      <div className="mt-6 grid gap-6">
        {experience2.map((item) => (
          <ExperienceCard2
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
        title={selected ? `${selected.role}` : ""}
        headerLogo={selected?.companyLogo}
        headerLogoAlt={selected ? `${selected.company}` : undefined}
        headerLogoMode={selected?.companyLogoMode}
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