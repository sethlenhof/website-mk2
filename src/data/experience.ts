export type ExperienceItem = {
  company: string;
  role: string;
  start: string;
  end: string;
  location?: string;
  summary: string;
  bullets: string[];
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Lockheed Martin",
    role: "Software Engineer",
    start: "Sep 2025",
    end: "Present",
    location: "Orlando, FL",
    summary:
      "Simulation, networking, and rendering work across complex training systems.",
    bullets: [
      "Led development of HLA integration into the Pilot Training Aid simulator.",
      "Acted as a primary software engineer and SME for simulation networking and software development.",
      "Refactored core simulation systems to improve performance and runtime behavior.",
      "Diagnosed and resolved DirectX 12 GPU memory issues affecting rendering stability.",
    ],
    tags: ["C++", "HLA", "DirectX 12", "Simulation", "CI/CD"],
  },
  {
    company: "Lockheed Martin",
    role: "Software Engineer Associate",
    start: "Jan 2025",
    end: "Sep 2025",
    location: "Orlando, FL",
    summary:
      "Worked on simulator performance, CI/CD improvements, and HLA research/integration.",
    bullets: [
      "Improved CI/CD pipelines by integrating SonarQube and Fortify.",
      "Led research and development to integrate MAK RTI into Prepar3D.",
      "Refactored key subprocesses to improve launch speed and reliability.",
    ],
    tags: ["C++", "GitLab", "Fortify", "SonarQube", "Prepar3D"],
  },
];