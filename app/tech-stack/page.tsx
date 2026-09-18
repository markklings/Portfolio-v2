'use client'

import Link from "next/link"
import { motion, Variants } from "framer-motion"
import { GoArrowLeft } from "react-icons/go"

interface TechItem {
  name: string
  isPrimary?: boolean
}

interface TechCategory {
  category: string
  items: TechItem[]
}

const techCategories: TechCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "React" },
      { name: "React Native" },
      { name: "Next.js" },
      { name: "Vue.js" },
      { name: "Tailwind CSS" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Vite" },
      { name: "ESLint" },
      { name: "Styled Components" },
      { name: "Prettier" }
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Express.js" },
      { name: "Laravel" },
      { name: "FastAPI" },
      { name: "Flask" },
      { name: "Node.js" },
      { name: "PHP" },
      { name: "Python" },
      { name: "REST" },
      { name: "WebSocket" },
      { name: "JWT" }
    ],
  },
  {
    category: "Databases & Cloud Platforms",
    items: [
      { name: "MySQL" },
      { name: "SQLite" },
      { name: "SQL" },
      { name: "PostgreSQL" },
      { name: "Supabase" },
      { name: "Firebase" },
      { name: "Google Cloud" }
    ],
  },
  {
    category: "UI/UX Design & Flowcharting",
    items: [
      { name: "Figma" },
      { name: "Canva" },
      { name: "Canva Affinity" },
      { name: "app.diagrams.net" }
    ],
  },
  {
    category: "Developer Tools",
    items: [
      { name: "To-Do List" },
      { name: "Sublime Text 4" },
      { name: "Google Drive" },
      { name: "Google Gemini AI" },
      { name: "Git" },
      { name: "Github" },
      { name: "Postman" },
      { name: "Adminer" },
      { name: "Discord" },
      { name: "Click Up" }
    ],
  },
]

export default function TechStackPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const groupVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.03
      }
    }
  }

  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.25, ease: "easeOut" }
    }
  }

  return (
    <div className="bg-brand-white text-brand-text font-sans antialiased selection:bg-brand-white selection:text-brand-light min-h-screen">
      <header className="fixed top-0 left-0 w-full z-50 bg-brand-light/60 backdrop-blur-md border-b border-brand-border">
        <div className="mx-[10%] lg:mx-[15%] flex items-center justify-between h-20">
          <Link
            href="/"
            className="font-mono text-xs uppercase tracking-widest text-brand-dark flex items-center gap-2 hover:opacity-70 transition-opacity duration-300"
          >
            <GoArrowLeft className="text-base flex-shrink-0" />
            <span>Back To Main Page</span>
          </Link>
          <span className="font-mono text-xs uppercase tracking-widest text-brand-dark font-semibold">
            Tech Stack
          </span>
        </div>
      </header>
      <main className="pt-32 pb-20">
        <div className="mx-[10%] lg:mx-[15%] flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col border-b border-brand-border pb-8"
          >
            <h1 className="font-mono text-3xl sm:text-4xl font-thin text-brand-dark tracking-tight mb-3">
              Tech Stack & Tools;
            </h1>
            <p className="font-sans text-sm sm:text-base text-brand-text/80 leading-relaxed max-w-2xl">
              An overview of the programming languages, frameworks, databases, and developer environments I work with across web, mobile, and system-level applications.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-10"
          >
            {techCategories.map((group) => (
              <motion.div
                key={group.category}
                variants={groupVariants}
                className="flex flex-col gap-4"
              >
                <span className="font-mono font-normal text-xs uppercase tracking-widest text-brand-dark/70">
                  {group.category};
                </span>
                <div className="flex flex-wrap items-center gap-2 w-full">
                  {group.items.map((tech) => (
                    <motion.span
                      key={tech.name}
                      variants={badgeVariants}
                      className="font-mono text-[12px] font-thin bg-brand-muted text-brand-dark px-2.5 py-1 rounded-none border-[0.5px] border-brand-border hover:border-brand-dark transition-colors duration-200"
                    >
                      {tech.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  )
}