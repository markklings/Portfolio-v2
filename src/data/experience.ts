export type Role = {
  title: string;
  start: string; // "YYYY-MM"
  end?: string; // "YYYY-MM"; leave out for a current role
  description: string[]; // one string per paragraph
  skills: string[];
};

export type Company = {
  company: string;
  type: string; // e.g. "Full-time", "Academics", "Self Taught"
  location?: string;
  logo?: string; // route to an image in /public; initials are shown when omitted
  roles: Role[]; // newest first. One role = no sub line, several roles = sub line
};

export const experienceIntro =
  "Years of building across AI engineering, full-stack web and mobile development, and computer science foundations — from academic leadership to shipping production tools.";

export const companies: Company[] = [
  {
    company: "Self Taught",
    type: "Self Taught",
    roles: [
      {
        title: "AI Engineering",
        start: "2026-08",
        description: [
          "Implementing AI architecture and building intelligent software tools and applications leveraging modern LLM APIs.",
        ],
        skills: [
          "Artificial Intelligence (AI)",
          "Retrieval-Augmented Generation (RAG)",
          "Generative AI",
          "Prompt Engineering",
          "AI Engineering",
          "AI Implementation",
          "LLM Evaluation",
        ],
      },
      {
        title: "Mobile App Development",
        start: "2026-02",
        description: [
          "Building offline-first and hybrid cross-platform mobile applications.",
        ],
        skills: ["React Native", "Third-Party Libraries", "Mobile Development"],
      },
      {
        title: "Full-Stack Website Development",
        start: "2024-09",
        description: [
          "Designing, writing, and deploying end-to-end web applications and backend systems.",
        ],
        skills: [
          "Express.js",
          "PHP",
          "Laravel",
          "PostgreSQL",
          "MySQL",
          "MongoDB",
        ],
      },
      {
        title: "Backend Development",
        start: "2024-02",
        description: [
          "Architecting RESTful APIs, database structures, and backend business logic.",
        ],
        skills: [
          "Express.js",
          "PHP",
          "Laravel",
          "PostgreSQL",
          "MySQL",
          "MongoDB",
        ],
      },
      {
        title: "Frontend Development",
        start: "2023-04",
        description: [
          "Building responsive, dynamic, and user-friendly web interfaces.",
        ],
        skills: ["React", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
      },
      {
        title: "Hello World!",
        start: "2023-02",
        end: "2023-04",
        description: [
          "Wrote my first line of code and started exploring fundamental programming principles.",
        ],
        skills: ["Programming Basics", "Basic Syntax", "Basic Algorithms"],
      },
    ],
  },
  {
    company: "Immaculada Concepcion College",
    type: "Academics",
    location: "Caloocan City, Philippines",
    roles: [
      {
        title: "Bachelor of Science in Computer Science",
        start: "2026-08",
        description: [
          "Currently pursuing a Bachelor of Science in Computer Science.",
        ],
        skills: [
          "Computer Science Theories",
          "Networking",
          "Data Structures",
          "Java",
          "Advanced Programming",
          "Advanced Algorithms",
        ],
      },
      {
        title: "Senior High School Graduate (TVL - ICT)",
        start: "2025-06",
        end: "2026-04",
        description: [
          "Graduated Senior High School with distinctions: Best in Computer Programming and Best in Computer System Servicing.",
        ],
        skills: [
          "Advanced Programming",
          "Basic Networking",
          "SDLC",
          "Systems Analysis",
          "Java GUI",
        ],
      },
      {
        title:
          "Lead Graphic Designer & Lead Social Media Manager (The Technocrats)",
        start: "2025-06",
        end: "2026-04",
        description: [
          "Led the graphic design and social media management teams for the official ICT student organization during senior high school.",
        ],
        skills: ["Graphic Design", "Social Media Management", "Leadership"],
      },
      {
        title: "Grade 11 - Information & Communications Technology Strand",
        start: "2023-06",
        end: "2024-04",
        description: [
          "Entered the Senior High School ICT track, focusing on core programming concepts and hardware infrastructure.",
        ],
        skills: [
          "C Programming",
          "Flowcharting",
          "Computer Troubleshooting",
          "Hardware Assembly/Disassembly",
        ],
      },
    ],
  },
];

/** Flat list sorted chronologically for the landing page summary component */
export const experienceSummary = companies
  .flatMap((c) =>
    c.roles.map((r) => ({
      year: r.start.slice(0, 4),
      role: r.title,
      company: c.company,
    })),
  )
  .sort((a, b) => Number(b.year) - Number(a.year));
