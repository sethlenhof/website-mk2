export type SkillCategory = {
  title: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    title: "Languages",
    items: [
      "C++",
      "C#",
      "TypeScript",
      "JavaScript",
      "Python",
      "Java",
      "SQL",
      "C",
    ],
  },
  {
    title: "Simulation / Graphics",
    items: [
      "Prepar3D",
      "HLA",
      "MAK RTI",
      "SimConnect",
      "PDK",
      "DirectX 12",
      "OpenGL",
      "Unreal Engine 5",
    ],
  },
  {
    title: "Frameworks / Web",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "ASP.NET",
      "Tailwind CSS",
    ],
  },
  {
    title: "Dev Tools / Platforms",
    items: [
      "Git",
      "GitLab CI/CD",
      "Docker",
      "Linux",
      "Windows",
      "macOS",
      "SonarQube",
      "Fortify",
      "WiX",
    ],
  },
];