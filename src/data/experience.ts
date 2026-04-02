export type ExperienceRole = {
  title: string;
  team?: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  bullets: string[];
};

export type ExperienceCompany = {
  company: string;
  location?: string;
  overallStart: string;
  overallEnd: string;
  currentHeadline?: string;
  logo?: string;
  logoMode?: "square" | "contain" | "wide";
  tags: string[];
  roles: ExperienceRole[];
};

export const experience: ExperienceCompany[] = [
  {
    company: "Lockheed Martin",
    location: "Orlando, FL",
    overallStart: "May 2023",
    overallEnd: "Present",
    currentHeadline: "Currently a Software Engineer on the PTA team",
    logo: "/images/experience/lockheed-logo.svg",
    logoMode: "wide",
    tags: ["C++", "Simulation", "HLA", "Graphics", "CI/CD"],
    roles: [
      {
        title: "Software Engineer",
        team: "Pilot Training Aid",
        start: "Sep 2025",
        end: "Present",
        current: true,
        summary:
          "Developing and maintaining complex simulation systems, balancing new feature development with rapid issue resolution.",
        bullets: [
          "Led development of HLA integration into the Pilot Training Aid simulator.",
          "Served as a key engineer for simulation networking and system architecture.",
          "Improved performance, rendering stability, and core simulation systems.",
          "Diagnosed and resolved high-priority issues across simulation, networking, and rendering systems.",
        ],
      },
      {
        title: "Software Engineer Associate",
        team: "Pilot Training Aid",
        start: "Jan 2025",
        end: "Sep 2025",
        summary:
          "Focused on simulator performance, CI/CD quality improvements, and distributed simulation research.",
        bullets: [
          "Improved CI/CD pipelines with SonarQube and Fortify.",
          "Researched and developed HLA integration with MAK RTI into Prepar3D.",
          "Refactored subprocesses to improve launch speed and maintainability.",
        ],
      },
      {
        title: "Software Engineer Intern",
        team: "Pilot Training Aid",
        start: "May 2024",
        end: "Dec 2024",
        summary:
          "Contributed to new simulator features, regression testing, and supporting integration tooling.",
        bullets: [
          "Contributed to new feature efforts for the Pilot Training Aid desktop simulator.",
          "Created regression-testing scenarios and updated requirements documentation.",
          "Built supporting tools and collaborated across teams for integration work.",
        ],
      },
      {
        title: "Software Engineering Intern",
        team: "TLMS",
        start: "May 2023",
        end: "May 2024",
        summary:
          "Worked on scheduling and tooling software in a collaborative agile environment.",
        bullets: [
          "Utilized Java, TypeScript, and XHTML to support scheduling software.",
          "Implemented threading to improve export performance and user experience.",
          "Worked across multiple products within an agile software team.",
        ],
      },
    ],
  },
];