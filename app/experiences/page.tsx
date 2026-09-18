'use client'

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { GoArrowLeft, GoChevronDown, GoChevronUp } from "react-icons/go"

interface ExperienceItem {
  id: string
  year: string
  title: string
  organization: string
  category: string
  description: string
  skillsLearned: string[]
}

const experiencesData: ExperienceItem[] = [
  {
    id: "exp-1",
    year: "2023",
    title: "Hello World! 👋",
    organization: "Self-Taught",
    category: "Foundation",
    description: "Wrote my first line of code",
    skillsLearned: ["Programming Basics"]
  },
  {
    id: "exp-2",
    year: "2024",
    title: "ICT Strand",
    organization: "Immaculada Concepcion College",
    category: "Academics",
    description: "Senior High School student under the ICT track",
    skillsLearned: ["ICT Fundamentals"]
  },
  {
    id: "exp-3",
    year: "2024",
    title: "Frontend Developer",
    organization: "Personal Projects",
    category: "Development",
    description: "Wrote & build my first website",
    skillsLearned: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: "exp-4",
    year: "2025",
    title: "Backend Developer",
    organization: "Personal Projects",
    category: "Development",
    description: "Wrote & build my first backend system",
    skillsLearned: ["Node.js", "Express.js", "Database Management"]
  },
  {
    id: "exp-5",
    year: "2025",
    title: "Full Stack Website Developer",
    organization: "Personal Projects",
    category: "Development",
    description: "Wrote & build my whole website system",
    skillsLearned: ["Full Stack Architecture", "REST APIs", "Database Integration"]
  },
  {
    id: "exp-6",
    year: "2026",
    title: "Mobile App Developer",
    organization: "Personal Projects",
    category: "Development",
    description: "Starting learning mobile app development",
    skillsLearned: ["Mobile App Development", "React Native"]
  },
  {
    id: "exp-7",
    year: "2026",
    title: "ICT Graduate",
    organization: "Immaculada Concepcion College",
    category: "Academics",
    description: "Senior high school graduate",
    skillsLearned: ["Software Engineering", "Technical Problem Solving"]
  },
  {
    id: "exp-8",
    year: "2026",
    title: "BS Computer Science",
    organization: "Immaculada Concepcion College",
    category: "Academics",
    description: "Pursuing Bachelor of Science in Computer Science",
    skillsLearned: ["Computer Science Theory", "Data Structures", "Algorithms"]
  },
  {
    id: "exp-9",
    year: "2026",
    title: "AI Integrator",
    organization: "Self-Taught",
    category: "Development",
    description: "Integrating AI on some of my projects for automation and tools",
    skillsLearned: ["AI Integration", "AI Prompting", "Retrieval-Augmented Generation (RAG)"]
  }
]

export default function ExperiencesPage() {
  const [expandedIds, setExpandedIds] = useState<string[]>(["exp-9"])

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const roadmapTimeline = [...experiencesData].reverse()

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
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
            Experiences
          </span>
        </div>
      </header>
      <main className="pt-32 pb-20">
        <div className="mx-[10%] lg:mx-[15%] flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col border-b border-brand-border pb-8"
          >
            <h1 className="font-mono text-3xl sm:text-4xl font-thin text-brand-dark tracking-tight mb-3">
              Journey Roadmap;
            </h1>
            <p className="font-sans text-sm sm:text-base text-brand-text/80 leading-relaxed max-w-2xl">
              A vertical roadmap tracking my academic milestones, leadership roles, competitions, and development experience from past foundations to present end goals.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative border-l border-brand-border ml-3 sm:ml-6 pl-6 sm:pl-8 flex flex-col gap-8 my-4"
          >
            {roadmapTimeline.map((item, index) => {
              const isExpanded = expandedIds.includes(item.id)
              const isCurrent = index === 0
              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="relative flex flex-col group"
                >
                  <span
                    className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border border-brand-border transition-all duration-300 ${
                      isCurrent
                        ? "bg-brand-dark ring-4 ring-brand-muted"
                        : "bg-brand-white group-hover:bg-brand-dark"
                    }`}
                  />
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="w-full bg-brand-white border border-brand-border p-5 rounded-none flex items-center justify-between text-left hover:border-brand-dark transition-all duration-300 shadow-sm"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <span className="font-mono text-xs font-semibold bg-brand-muted text-brand-dark px-2.5 py-1 border-[0.5px] border-brand-border w-fit">
                        {item.year}
                      </span>
                      <h2 className="font-mono text-sm sm:text-base font-semibold text-brand-dark">
                        {item.title}
                      </h2>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="hidden md:inline font-mono text-[10px] uppercase tracking-wider text-brand-text/60">
                        {item.category}
                      </span>
                      {isExpanded ? (
                        <GoChevronUp size={18} className="text-brand-dark flex-shrink-0" />
                      ) : (
                        <GoChevronDown size={18} className="text-brand-dark flex-shrink-0" />
                      )}
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden bg-brand-white border-x border-b border-brand-border"
                      >
                        <div className="p-6 flex flex-col gap-4 text-left">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-brand-border/40 pb-3">
                            <span className="font-mono text-xs text-brand-text/70">
                              {item.organization}
                            </span>
                            <span className="font-mono text-[11px] bg-brand-muted text-brand-dark px-2 py-0.5 border-[0.5px] border-brand-border w-fit">
                              {item.category}
                            </span>
                          </div>
                          <p className="font-sans text-xs sm:text-sm text-brand-text leading-relaxed">
                            {item.description}
                          </p>
                          <div className="flex flex-col gap-2 pt-2">
                            <span className="font-mono text-[11px] uppercase tracking-wider text-brand-dark font-semibold">
                              Skills Learned:
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {item.skillsLearned.map((skill) => (
                                <span
                                  key={skill}
                                  className="font-mono text-[10px] font-thin bg-brand-muted text-brand-dark px-2 py-0.5 border-[0.5px] border-brand-border"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </main>
    </div>
  )
}