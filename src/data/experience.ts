export type ExperienceItem = {
  company: string;
  role: string;
  start: string;
  end: string;
  location?: string;
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
    bullets: [
      "Led development of HLA integration into the Pilot Training Aid simulator.",
      "Acted as a primary software engineer and SME for simulation networking and development.",
      "Improved performance, rendering stability, and core simulation systems.",
    ],
    tags: ["C++", "HLA", "DirectX 12", "CI/CD"],
  },
  {
    company: "Lockheed Martin",
    role: "Software Engineer Associate",
    start: "Jan 2025",
    end: "Sep 2025",
    location: "Orlando, FL",
    bullets: [
      "Improved CI/CD pipelines with SonarQube and Fortify.",
      "Researched and developed HLA integration with MAK RTI into Prepar3D.",
      "Refactored subprocesses to improve launch speed.",
    ],
    tags: ["C++", "GitLab", "Fortify", "SonarQube"],
  },
  {
    company: "Lockheed Martin",
    role: "PTA Software Engineer Intern",
    start: "May 2024",
    end: "Dec 2024",
    location: "Orlando, FL",
    bullets: [
      "Contributed to new feature efforts for the Pilot Training Aid desktop simulator.",
      "Created regression-testing scenarios and updated requirements documentation.",
      "Built supporting tools and collaborated across teams for integration work.",
    ],
    tags: ["C++", "C#", "Prepar3D", "Windows"],
  },
];