"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import ExperienceCard from "@/components/ui/ExperienceCard";
import Modal from "@/components/ui/Modal";
import { experience, type ExperienceCompany } from "@/data/experience";

export default function ExperienceSection() {
  const [selected, setSelected] = useState<ExperienceCompany | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (item: ExperienceCompany) => {
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
      <SectionHeader title="Experience" />

      <div className="mt-6 grid gap-6">
        {experience.map((item) => (
          <ExperienceCard
            key={item.company}
            item={item}
            onOpen={() => openModal(item)}
          />
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onAfterClose={clearSelected}
        title={selected?.company ?? ""}
        headerLogo={selected?.logo}
        headerLogoAlt={selected ? `${selected.company} logo` : "Company logo"}
        headerLogoMode={selected?.logoMode}
      >
        {selected ? (
          <div>
            <div className="mb-6">
              <p className="text-sm text-white/50">
                {selected.overallStart} — {selected.overallEnd}
                {selected.location ? ` • ${selected.location}` : ""}
              </p>

              {selected.currentHeadline ? (
                <p className="mt-3 text-white/80">{selected.currentHeadline}</p>
              ) : null}
            </div>

            <div className="mb-6">
              <h5 className="text-lg font-semibold text-white">Focus Areas</h5>
              <div className="mt-3 flex flex-wrap gap-2">
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
            {/* Timeline and cards */}
            <div className="relative mt-6 py-6">
              <div className="absolute left-[11px] top-6 bottom-6 w-px bg-white/10" />

              <div className="space-y-6">
                {selected.roles.map((role) => (
                  <div key={`${role.title}-${role.start}`} className="relative pl-8">
                    <div
                      className={`absolute left-0 top-1/2 -translate-y-1/2 flex h-6 w-6 items-center justify-center rounded-full border ${
                        role.current
                          ? "border-emerald-400/30 bg-emerald-400/20"
                          : "border-white/15 bg-[#1a1f1d]"
                      }`}
                    >
                      <div
                        className={`h-2.5 w-2.5 rounded-full ${
                          role.current ? "bg-emerald-300" : "bg-white/40"
                        }`}
                      />
                    </div>
                    {/* content */}
                    <div
                    className={`rounded-2xl border p-5 ${
                      role.current
                        ? "border-emerald-400/20 bg-emerald-400/5"
                        : "border-white/10 bg-black/20"
                    }`}>
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h6 className="text-base font-semibold text-white">
                              {role.title}
                            </h6>

                            {role.team ? (
                              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/60">
                                {role.team}
                              </span>
                            ) : null}

                            {role.current ? (
                              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-xs text-emerald-300">
                                Current
                              </span>
                            ) : null}
                          </div>

                          <p className="mt-2 text-white/70">{role.summary}</p>
                        </div>

                        <p className="text-sm text-white/45">
                          {role.start} — {role.end}
                        </p>
                      </div>

                      <ul className="mt-4 space-y-2 text-white/80">
                        {role.bullets.map((bullet) => (
                          <li key={bullet} className="leading-7">
                            • {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}