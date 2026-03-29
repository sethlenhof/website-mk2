export type ProjectItem = {
  title: string;
  shortDescription: string;
  description: string;
  tags: string[];
  links?: {
    github?: string;
    live?: string;
  };
};

export const projects: ProjectItem[] = [
  {
    title: "University Event Scheduler",
    shortDescription:
      "Web app for organizing club events and preventing location and time conflicts.",
    description:
      "Built a scheduling application for school clubs and students with authentication, role-based access, validation, and SQL-backed event management. The system prevented overlapping events and enforced structured permissions for admins, campus admins, and students.",
    tags: ["React", "Express", "SQL", "JWT", "REST API"],
    links: {
      github: "https://github.com/yourusername/university-event-scheduler",
    },
  },
  {
    title: "LeetSocial",
    shortDescription:
      "Social platform for competitive programmers to compare LeetCode stats and connect.",
    description:
      "Built a platform where users can compare coding statistics, connect with other users, and view competitive programming progress in a more social format.",
    tags: ["React", "TypeScript", "API Integration", "Web App"],
    links: {
      github: "https://github.com/yourusername/leetsocial",
    },
  },
  {
    title: "StoryForge",
    shortDescription:
      "Hackathon project that lets users play a DnD-style experience with an AI dungeon master.",
    description:
      "Created as a ShellHacks project, StoryForge gives players an interactive storytelling experience powered by AI-generated responses and dynamic narrative flow.",
    tags: ["React", "Hackathon", "AI", "Frontend"],
  },
  {
    title: "Dequeue",
    shortDescription:
      "Web application that allows users to trigger shortcuts on their computer from their phone.",
    description:
      "Designed a companion workflow system where mobile interaction can remotely launch actions on a desktop environment, focused on convenience and device coordination.",
    tags: ["Web App", "Automation", "Frontend", "Backend"],
  },
];