import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ExperienceSection2 from "@/components/sections/ExperienceSection2";
import Hero from "@/components/sections/Hero";
import ProjectsSection from "@/components/sections/ProjectSection";
import SkillsSection from "@/components/sections/SkillsSection";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <ExperienceSection2 /> {/* Temporary for experience comparison*/}
      <ProjectsSection />
      <SkillsSection />
    </main>
  );
}