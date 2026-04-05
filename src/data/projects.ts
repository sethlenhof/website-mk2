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
  links?: {
    label: string;
    href: string;
  }[];

  logo: string;
  logoMode?: "square" | "contain" | "wide";
  media?: ProjectMediaItem[];
};

export const projects: ProjectItem[] = [
  {
    title: "Itemize",
    summary:
      "Mobile app that converts receipt scans into a structured grocery inventory and generates recipes based on available ingredients using AI.",
    description:
      "Built during a senior-year hackathon, Itemize converts receipt scans into a structured grocery inventory. Users can track what they have on hand and generate recipes from available ingredients. Integrated GPT to help parse receipt data and support recipe suggestions, with a focus on keeping the workflow simple and usable despite inconsistent real-world input.",
    bullets: [
      "Implemented receipt scanning workflow to extract grocery data from unstructured text",
      "Integrated GPT API for item parsing and recipe generation",
      "Designed inventory system to track ingredients and support recipe queries",
      "Built as part of a team during a hackathon, contributing to core app functionality and UX",
    ],
    tags: ["SwiftUI", "Figma", "PHP", "Swift", "ChatGPT"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Quickzand/Shellhacks2024"
      },
      {
        label: "Devpost",
        href: "https://devpost.com/software/itemize-8lhb2c"
      }
    ],
    logo: "/images/projects/Itemize/card.png",
    logoMode: "square",
    media: [
      { src: "/images/projects/Itemize/1.png", alt: "Login screen" },
      { src: "/images/projects/Itemize/2.png", alt: "Event view" },
      { src: "/images/projects/Itemize/3.png", alt: "Schedule view" },
      { src: "/images/projects/Itemize/4.png", alt: "Schedule view" },
      { src: "/images/projects/Itemize/5.png", alt: "Schedule view" },
      { src: "/images/projects/Itemize/demo.gif", alt: "Animated demo", type: "gif" },
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
    links: [
      {
        label: "GitHub",
        href: "https://github.com/thedeclancarter/LeetSocial"
      }
    ],
    logo: "/images/projects/LeetSocial/card.jpeg",
    logoMode: "square",
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
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Quickzand/Shellhacks2023"
      },
      {
        label: "Devpost",
        href: "https://devpost.com/software/storyforge"
      }
    ],
    logo: "/images/projects/StoryForge/card.png",
    logoMode: "square",
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
      "Hackathon project (2nd place) that lets users trigger shortcuts on their computer from their phone.",
    description:
      "Built during a hackathon and awarded 2nd place, Dequeue is a companion workflow system that lets users trigger desktop shortcuts and actions from a mobile device. The project focused on convenience, device coordination, and creating a clean interaction flow between phone and desktop.",
    bullets: [
      "Connected mobile interactions to desktop-side actions and workflows.",
      "Designed for fast remote triggering of user-defined shortcuts.",
      "Built as part of a hackathon team and recognized with 2nd place.",
    ],
    tags: ["Web App", "Automation", "Frontend", "Backend"],
    links: [
      {
        label: "Mobile GitHub Repo",
        href: "https://github.com/Quickzand/DequeueMobile"
      },
      {
        label: "Desktop GitHub Repo",
        href: "https://github.com/OliviaHarris03/DesktopDequeue"
      },
      { label: "Devpost",
        href: "https://devpost.com/software/dequeue-m6ocaz"
      }
    ],
    logo: "/images/projects/Dequeue/card.png",
    logoMode: "square",
    media: [
      { src: "/images/projects/Dequeue/useAction.gif", alt: "Using Action on mobile", type: "gif" },
      { src: "/images/projects/Dequeue/mobileSettings.gif", alt: "Mobile Settings", type: "gif" },
      { src: "/images/projects/Dequeue/createAction.gif", alt: "Creating Action", type: "gif" },
      { src: "/images/projects/Dequeue/desktopConnect.gif", alt: "Desktop Connection", type: "gif" }
    ],
  },
];