export type Badge = { label: string; primary?: boolean };

export type Project = {
  id: string;
  title: string;
  description: string;
  icon: string;
  badges: Badge[];
  links: {
    appStore?: string;
    playStore?: string;
    website?: string;
    github?: string;
  };
  featuredIn?: { label: string; href: string }[];
  featured?: boolean; // shown in the fan on the landing page (first 3)
};

export const projectsIntro =
  "Products and platforms I've designed and shipped, from consumer apps to developer tools.";

export const projects: Project[] = [
  {
    id: "intellique",
    title: "IntelliQue: A Web Based Queuing System",
    description:
      "A Web-based queuing management system for Immaculada Concepcion College configured with a 3:1 ratio between regular vs. priority school processes.",
    icon: "/projects/app-1.svg",
    badges: [
      { label: "#1 Capstone Project", primary: true },
      { label: "Research Purpose" },
      { label: "Made to solve problem" },
    ],
    links: {
      website: "https://iccintellique.onrender.com",
      github: "https://github.com/markklings/QueueSystem",
    },
    featured: true,
  },
  {
    id: "amlumina-ai",
    title: "Amlumina AI",
    description:
      "A study companion that teaches the way you learn, plans your time, and checks your Google Classroom, with a built in workspace.",
    icon: "/projects/app-2.svg",
    badges: [
      { label: "#1 Top Project", primary: true },
      { label: "Open Source" },
    ],
    links: {
      website: "https://amlumina-ai.vercel.app",
      github: "https://github.com/markklings/amlumina-ai",
    },
    featured: true,
  },
  {
    id: "swift-streams",
    title: "Swift Streams",
    description:
      "A Web-based movie streaming website connected to TMDB (The Movie Database) and a movie streaming API like vidsrc allowing user to watch movies with minimal ads.",
    icon: "/projects/app-3.svg",
    badges: [
      { label: "Built For Someone", primary: true },
      { label: "Movie streaming app" },
    ],
    links: {
      website: "https://swift-streams.vercel.app",
    },
    featured: true,
  },
  {
    id: "syllaba-ai",
    title: "Syllaba AI",
    description:
      "A Web-based application connected to Google Classroom API allowing students to turn their manual process of checking google classroom into single conversation using the Gemini GenAI models.",
    icon: "/projects/app-4.svg",
    badges: [{ label: "Open source" }],
    links: { website: "https://syllaba-ai.vercel.app" },
  },
];
