export type StackCategory = { name: string; items: string[] };

export const stackIntro =
  "The tools, frameworks, and platforms I reach for across the front end, back end, infrastructure, and AI.";

// Shown on the landing page, before the "+ more" chip
export const stackPreview: string[] = [
  "React",
  "React Native",
  "Next.js",
  "Vue.js",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "Laravel",
  "Node.js",
  "Express.js",
  "Supabase",
  "Firebase",
  "Python",
  "FastAPI",
  "Flask",
];

export const stackCategories: StackCategory[] = [
  {
    name: "Frontend",
    items: [
      "React",
      "React Native",
      "Next.js",
      "Vue.js",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Vite",
      "ESLint",
      "Styled Components",
      "Prettier",
      "Webpack",
      "React Icons",
      "Shadcn/ui",
    ],
  },
  {
    name: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Nest.js",
      "Laravel",
      "PHP",
      "Python",
      "FastAPI",
      "Flask",
      "REST",
      "WebSocket",
      "JWT",
      "API",
    ],
  },
  {
    name: "Databases & Cloud Platforms",
    items: [
      "MySQL",
      "SQLite",
      "SQL",
      "PostgreSQL",
      "Supabase",
      "Firebase",
      "TiDB",
      "Redis",
      "Google Cloud",
      "Render",
      "Vercel",
    ],
  },
  {
    name: "UI/UX Design & Flowcharting",
    items: ["Figma", "Canva", "Affinity Canva", "app.diagrams.net"],
  },
  {
    name: "AI Learning",
    items: [
      "LangChain",
      "Google Gemini API",
      "OpenAI",
      "Open Router",
      "RAG",
      "Prompt Engineering",
    ],
  },
  {
    name: "Developer Tools",
    items: [
      "To-Do List",
      "Sublime Text 4",
      "Visual Studio Code",
      "Zed IDE",
      "Google Drive",
      "Google Gemini AI",
      "Claude AI",
      "Git",
      "Github",
      "Postman",
      "Bruno",
      "Adminer",
      "Discord",
      "Click Up",
    ],
  },
];
