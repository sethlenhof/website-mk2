export type ProjectMediaItem = {
  src: string;
  alt: string;
  type?: "image" | "gif";
};

export type ProjectItem = {
  title: string;
  summary: string;
  description: string;
  bullets?: string[];
  tags: string[];
  github?: string;
  demo?: string;

  cardImage: string;
  headerLogo?: string;
  headerLogoMode?: "contain" | "cover" | "wide-svg";
  media?: ProjectMediaItem[];
};

export const projects: ProjectItem[] = [
  {
    title: "University Event Scheduler",
    summary:
      "Web app for organizing club events and preventing location and time conflicts.",
    description:
      "Built a scheduling application for school clubs and students with authentication, role-based access, validation, and SQL-backed event management. The system prevented overlapping events and enforced structured permissions for admins, campus admins, and students.",
    bullets: [
      "Built role-based access for admins, campus admins, and students.",
      "Used SQL-backed event logic to prevent scheduling conflicts.",
      "Implemented validation, authentication, and API-driven data flow.",
    ],
    tags: ["React", "Express", "SQL", "JWT", "REST API"],
    github: "https://github.com/yourusername/university-event-scheduler",
    cardImage: "/images/projects/university-scheduler/card.jpg",
    headerLogo: "/images/projects/university-scheduler/card.jpg",
    headerLogoMode: "contain",
    media: [
      { src: "/images/projects/university-scheduler/1.jpeg", alt: "Login screen" },
      { src: "/images/projects/university-scheduler/2.png", alt: "Event view" },
      { src: "/images/projects/university-scheduler/3.png", alt: "Schedule view" },
      { src: "/images/projects/university-scheduler/demo.gif", alt: "Animated demo", type: "gif" },
    ],
  },
  {
    title: "LeetSocial",
    summary:
      "Social platform for competitive programmers to compare LeetCode stats and connect.",
    description:
      "Built a platform where users can compare coding statistics, connect with other users, and view competitive programming progress in a more social format.",
    bullets: [
      "Integrated user comparison views for coding stats.",
      "Focused on a more social presentation of technical progress.",
    ],
    tags: ["React", "TypeScript", "API Integration", "Web App"],
    github: "https://github.com/yourusername/leetsocial",
    cardImage: "/images/projects/LeetSocial/card.jpeg",
    headerLogo: "/images/projects/LeetSocial/card.jpeg",
    headerLogoMode: "contain",
    media: [
      { src: "/images/projects/LeetSocial/1.jpg", alt: "Login Page" },
      { src: "/images/projects/LeetSocial/2.jpg", alt: "Desktop Dashboard" },
      { src: "/images/projects/LeetSocial/3.png", alt: "Mobile Dashboard" },
    ],
  },
  {
    title: "StoryForge",
    summary:
      "Hackathon project that lets users play a DnD-style experience with an AI dungeon master.",
    description:
      "Created during ShellHacks, StoryForge gives players an interactive storytelling experience powered by AI-generated responses and dynamic narrative flow.",
    bullets: [
      "Built as a hackathon project with AI-driven interactions.",
      "Focused on interactive storytelling and conversational flow.",
    ],
    tags: ["React", "Hackathon", "AI", "Frontend"],
    cardImage: "/images/projects/StoryForge/card.png",
    headerLogo: "/images/projects/StoryForge/card.png",
    headerLogoMode: "contain",
    media: [
      { src: "/images/projects/StoryForge/1.png", alt: "Character Creation" },
      { src: "/images/projects/StoryForge/2.png", alt: "Dungeon Master Interaction in forest" },
      { src: "/images/projects/StoryForge/3.png", alt: "Dungeon Master Interaction at night" },
      { src: "/images/projects/StoryForge/4.png", alt: "Dungeon Master Interaction in cave" }
    ],
  },
  {
    title: "Dequeue",
    summary:
      "Web application that allows users to trigger shortcuts on their computer from their phone.",
    description:
      "Designed a companion workflow system where mobile interaction can remotely launch actions on a desktop environment, focused on convenience and device coordination.",
    bullets: [
      "Connected phone interactions to desktop-side actions.",
      "Explored remote workflow control and device coordination.",
    ],
    tags: ["Web App", "Automation", "Frontend", "Backend"],
    cardImage: "/images/projects/Dequeue/card.png",
    headerLogo: "/images/projects/Dequeue/card.png",
    headerLogoMode: "contain",
    media: [
      { src: "/images/projects/Dequeue/useAction.gif", alt: "Using Action on mobile", type: "gif" },
      { src: "/images/projects/Dequeue/mobileSettings.gif", alt: "Mobile Settings", type: "gif" },
      { src: "/images/projects/Dequeue/createAction.gif", alt: "Creating Action", type: "gif" },
      { src: "/images/projects/Dequeue/desktopConnect.gif", alt: "Desktop Connection", type: "gif" }
    ],
  },
];