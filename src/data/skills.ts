export type SkillItem = {
  label: string;
  href?: string;
};

export type SkillCategory = {
  title: string;
  items: SkillItem[];
};

export const skills: SkillCategory[] = [
  {
    title: "Languages",
    items: [
      { label: "C++" },
      { label: "C#" },
      { label: "TypeScript" },
      { label: "JavaScript" },
      { label: "Python" },
      { label: "Swift" },
      { label: "Java" },
      { label: "SQL" },
      { label: "C" },
    ],
  },
  {
    title: "Simulation / Graphics",
    items: [
      { label: "Prepar3D" },
      { label: "HLA" },
      { label: "MAK RTI" },
      { label: "SimConnect" },
      { label: "PDK" },
      { label: "DirectX 12" },
      { label: "OpenGL" },
      { label: "Unreal Engine 5" },
    ],
  },
  {
    title: "Frameworks / Web",
    items: [
      { label: "React" },
      { label: "Next.js" },
      { label: "Node.js" },
      { label: "Express" },
      { label: "ASP.NET" },
      { label: "Tailwind CSS" },
    ],
  },
  {
    title: "Dev Tools / Platforms",
    items: [
      { label: "Git" },
      { label: "GitLab CI/CD" },
      { label: "Docker" },
      { label: "Linux" },
      { label: "Windows" },
      { label: "macOS" },
      { label: "SonarQube" },
      { label: "Fortify" },
      { label: "WiX" },
    ],
  },
  {
    title: "Certifications",
    items: [
      {
        label: "CompTIA Security+",
        href: "https://www.credly.com/badges/b2202a1b-83ce-4e59-a6de-b6840303ebc8",
      },
    ],
  },
];