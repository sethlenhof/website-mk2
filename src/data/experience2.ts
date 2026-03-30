export type ExperienceItem2 = {
  company: string;
  role: string;
  start: string;
  end: string;
  location?: string;
  summary: string;
  bullets: string[];
  tags: string[];

  companyLogo?: string;
  companyLogoMode?: "square" | "contain" | "wide";
};

export const experience2: ExperienceItem2[] = [
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
    companyLogo: "/images/experience/lockheed-logo.svg",
    companyLogoMode: "wide",
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
    companyLogo: "/images/experience/lockheed-logo.svg",
    companyLogoMode: "wide",
  },
  {
    company: "Lockheed Martin",
    role: "Software Engineer Intern - Simulation",
    start: "Jan 2025",
    end: "May 2024",
    location: "Orlando, FL",
    summary:
      "Worked on simulator feature development, testing, and integration for the Pilot Training Aid desktop simulator.",
    bullets: [
      "Led winning team RMS TLS intern project to revolutionize business with new technologies",
      "Contributed to 2 new feature efforts for the Pilot Training Aid desktop simulator in C++",
      "Created testing scenarios to allow for regression testing of the new capabilities, as well as updating requirements documentation to match features",
      "Developed a C# ASP.NET web app for launching of courseware from LMS system, and attended cross-functional meetings to ensure 100% compatibility and integration with current configurations"
    ],
    tags: ["C++", "C#", "Wix Installer", "Gitlab", "Prepar3D", "Doors Next", "Agile"],
    companyLogo: "/images/experience/lockheed-logo.svg",
    companyLogoMode: "wide",
  },
  {
    company: "Lockheed Martin",
    role: "Software Engineer Intern - Fullstack",
    start: "May 2023",
    end: "May 2024",
    location: "Orlando, FL",
    summary:
      "Worked on fullstack web development for Training and Learning Management Systems. Assisted with design of new LMS system.",
    bullets: [
      "Led intern project team as scrum leader and software developer to develop a robot capable of extracting information from hostile zones",
      "Utilized Java, Typescript, and XHTML to develop scheduling website for Training Systems",
      "Implemented threading to allow background exporting of schedules and reducing time for export by 20%, for better user experience",
      "Created use case diagrams and documentation to ensure clear requirements for integrations of new LMS system"
    ],
    tags: ["Java", "TypeScript", "HTML", "Maven", "SQL", "Gitlab", "Docker"],
    companyLogo: "/images/experience/lockheed-logo.svg",
    companyLogoMode: "wide",
  },
];