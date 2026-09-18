'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { GoArrowLeft, GoArrowUpRight } from "react-icons/go"
import { FaGithub } from "react-icons/fa6"

interface ProjectItem {
  id: string
  title: string
  subtitle: string
  categoryTag: string
  categoryGroup: string
  logoSrc: string
  techStack: string[]
  description: string
  demoUrl?: string
  githubUrl?: string
}

const projectsData: ProjectItem[] = [
  {
    id: "intellique",
    title: "IntelliQue",
    subtitle: "Queue Management System",
    categoryTag: "ICT - Capstone Project",
    categoryGroup: "Capstones",
    logoSrc: "/icc.jpg",
    techStack: ["React", "Express.js", "SQL", "WebSockets"],
    description: "A Web-based queuing management system for Immaculada Concepcion College configured with a 3:1 ratio between regular vs. priority school processes.",
    demoUrl: "https://iccintellique.onrender.com",
  },
  {
    id: "syllaba-ai",
    title: "Syllaba AI",
    subtitle: "AI Assistant",
    categoryTag: "Web Application",
    categoryGroup: "AI / Tools",
    logoSrc: "/syllaba_ai.png",
    techStack: ["Next.js", "Python", "Supabase", "Gemini API"],
    description: "A Web-based Application connected to Google Classroom API allowing students to turn their manual process of checking google classroom into a single conversation using Gemini GenAI models.",
    demoUrl: "https://syllaba-ai.vercel.app",
  },
  {
    id: "swift-stream",
    title: "Swift Stream",
    subtitle: "Movie Streaming",
    categoryTag: "Web Application",
    categoryGroup: "Web Apps",
    logoSrc: "/swift_stream.png",
    techStack: ["HTML", "Tailwind", "Express.js", "TMDB API"],
    description: "A Web-based movie streaming website connected to TMDB (The Movie Database) and a movie streaming API like vidsrc allowing users to watch movies with minimal ads.",
    demoUrl: "https://swift-stream.onrender.com",
  },
]

const filterCategories = ["All", "Capstones", "AI / Tools", "Web Apps"]

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects = activeFilter === "All"
    ? projectsData
    : projectsData.filter((project) => project.categoryGroup === activeFilter)

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
            Projects
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
              All Projects;
            </h1>
            <p className="font-sans text-sm sm:text-base text-brand-text/80 leading-relaxed max-w-2xl">
              A complete collection of web applications, AI tools, mobile applications, and software systems built to streamline workflows and solve practical problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-2"
          >
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`font-mono text-xs px-3 py-1 rounded-none border transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-brand-dark text-brand-white border-brand-dark"
                    : "bg-brand-muted text-brand-dark border-brand-border hover:border-brand-dark"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <motion.div
            layout
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="bg-brand-white border border-brand-border p-8 rounded-none flex flex-col items-center text-center shadow-sm w-full hover:border-brand-dark transition-colors duration-300"
                >
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border border-brand-border mb-4 bg-brand-muted flex items-center justify-center font-mono text-xs">
                    <Image
                      src={project.logoSrc}
                      alt={`${project.title} Logo`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-1 mb-3">
                    <h2 className="font-mono text-base font-semibold text-brand-dark">
                      {project.title}
                    </h2>
                    <p className="font-mono text-xs text-brand-text/70">
                      {project.subtitle}
                    </p>
                    <span className="font-mono text-[11px] font-medium bg-brand-muted text-brand-dark px-2.5 py-0.5 mt-1 border-[0.5px] border-brand-border">
                      {project.categoryTag}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-1.5 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] font-thin bg-brand-muted text-brand-dark px-2 py-0.5 border-[0.5px] border-brand-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-brand-text leading-relaxed text-center mb-6">
                    {project.description}
                  </p>
                  <div className="mt-auto flex items-center gap-2 w-full justify-center">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs bg-brand-dark text-brand-white px-5 py-2.5 rounded-none border border-brand-dark hover:bg-brand-bg hover:text-brand-dark transition-all duration-300 flex items-center gap-1"
                      >
                        Visit
                        <GoArrowUpRight size={12} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs bg-brand-muted text-brand-dark px-4 py-2.5 rounded-none border border-brand-border hover:bg-brand-dark hover:text-brand-white transition-all duration-300 flex items-center gap-1"
                      >
                        <FaGithub size={12} />
                        Code
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
    </div>
  )
}