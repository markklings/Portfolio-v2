'use client'

import { useState } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import Image from "next/image"
import { GoArrowUpRight } from "react-icons/go"
import { CiLocationOn } from "react-icons/ci"
import { HiMenuAlt3, HiX } from "react-icons/hi"
import { FaArrowRightLong } from "react-icons/fa6"

export default function Home() {

  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  }

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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
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
          <a href="#" className="font-mono text-xl font-bold tracking-light text-brand-dark hover:opacity-70 transition-opacity duration-300">
            Mark;
          </a>
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-brand-text">
            <a href="#about" className="hover:text-brand-dark hover:opacity-70 transition-opacity duration-300">About</a>
            <a href="#projects" className="hover:text-brand-dark hover:opacity-70 transition-opacity duration-300">Projects</a>
            <a href="#certificates" className="hover:text-brand-dark hover:opacity-70 transition-opacity duration-300">Certificates</a>
            <a href="#experiences" className="hover:text-brand-dark hover:opacity-70 transition-opacity duration-300">Experiences</a>
          </nav>

          <button
            onClick={() => setIsOpenMenu(true)}
            aria-label="Open Navigation Bar"
            className="md:hidden text-brand-dark p-2 focus:outline-none hover:opacity-70 transition-opacity"
          >
            <HiMenuAlt3 size={28} />
          </button>
        </div>
      </header>
      <AnimatePresence>
        {isOpenMenu && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-brand-white flex flex-col justify-between p-8 md:hidden"
          >
            <div className="flex items-center justify-between h-12">
              <span className="font-mono text-xl font-bold tracking-light text-brand-dark">
                Mark;
              </span>
              <button
                onClick={() => setIsOpenMenu(false)}
                aria-label="Close Navigation Menu"
                className="text-brand-dark p-2 hover:opacity-70 transition-opacity"
              >
                <HiX size={30} />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center gap-8 font-mono text-xl uppercase tracking-widest text-brand-dark my-auto">
              <a href="#about" onClick={() => setIsOpenMenu(false)} className="hover:underline underline-offset-8 transition-all">About</a>
              <a href="#projects" onClick={() => setIsOpenMenu(false)} className="hover:underline underline-offset-8 transition-all">Projects</a>
              <a href="#certificates" onClick={() => setIsOpenMenu(false)} className="hover:underline underline-offset-8 transition-all">Certificates</a>
              <a href="#experiences" onClick={() => setIsOpenMenu(false)} className="hover:underline underline-offset-8 transition-all">Experiences</a>
            </nav>
            <div className="text-center font-mono text-xs text-brand-text/60">
              &copy; {new Date().getFullYear()} Mark Julian Guerrero
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <main className="pt-20">
        <section className="relative min-h-[calc(100vh-5rem)] bg-brand-bg flex flex-col items-center justify-center text-center px-6 overflow-hidden">
          <div className="absolute inset-0 polka-dots opacity-[0.08] pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <motion.h1
              className="font-mono text-5xl sm:text-6xl lg:text-7xl font-extrabold text-brand-dark tracking-light mb-6"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Hello World;
            </motion.h1>
            <motion.p
              className="font-sans text-lg sm:text-xl text-brand-text leading-relaxed italic mb-8 max-w-md"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              &quot;Every line of code has a purpose&quot;
              <span className="block font-mono text-sm not-italic text-brand-dark font-semibold mt-2 tracking-wide">
                — Me
              </span>
            </motion.p>
            <motion.a
              href="#about"
              className="font-mono text-sm font-medium bg-brand-dark text-brand-white px-8 py-4 rounded-none border border-brand-dark hover:bg-brand-bg hover:text-brand-dark transition-all duration-300 shadow-sm"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              Explore my Portfolio
            </motion.a>
          </div>
        </section>
        <div className="w-full h-4 bg-brand-muted border-y border-brand-border polka-dots opacity-40" />
        <motion.section
          id="about"
          className="min-h-screen bg-brand-light flex items-center justify-center py-20 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="mx-[10%] lg:mx-[15%] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            <div className="relative w-full max-w-[400px] lg:max-w-none aspect-square mx-auto">
              <Image
                src="/profile.png"
                alt="Mark Julian Guerrero"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover rounded-none"
                priority
              />
            </div>
            <div className="flex flex-col justify-between py-2">
              <div>
                <h1 className="font-mono text-3xl sm:text-4xl font-thin text-brand-dark tracking-tight mb-3">Mark Julian Gurrero</h1>
                <p className="font-sans text-sm text-brand-text/80 flex items-center gap-1.5 mb-6">
                  <CiLocationOn size={20}/>
                  <span>Caloocan City, Philippines</span>
                </p>
                <p className="font-sans text-base text-brand-text leading-relaxed text-justify mb-8">
                  I build a community-focused web and mobile app solutions designed to simplify workflows for students and local organizations.
                  Currently pursuing a B.S. in Computer Science, my current technical focus is centered on AI Implementation, prompt engineering, and
                  integrating AI features into production-ready software.
                </p>
              </div>
              <div className="grid grid-cols-3 sm:flex sm:flex-row items-center gap-2">
                <a
                  href="https://www.facebook.com/im.not.marklings"
                  target="_blank"
                  className="font-mono text-[10px] font-thin bg-brand-muted text-brand-dark px-2.5 py-1 rounded-none border-[0.5px] border-brand-border flex items-center justify-center gap-1 hover:bg-brand-dark hover:text-brand-white transition-all duration-300"
                >
                  facebook
                  <GoArrowUpRight className="text-[8px] sm:text-[10px] flex-shrink-0" />
                </a>
                <a
                  href="https://www.instagram.com/cm.notmarklings"
                  target="_blank"
                  className="font-mono text-[10px] font-thin bg-brand-muted text-brand-dark px-2.5 py-1 rounded-none border-[0.5px] border-brand-border flex items-center justify-center gap-1 hover:bg-brand-dark hover:text-brand-white transition-all duration-300"
                >
                  instragram
                  <GoArrowUpRight className="text-[8px] sm:text-[10px] flex-shrink-0" />
                </a>
                <a
                  href="https://github.com/markklings"
                  target="_blank"
                  className="font-mono text-[10px] font-thin bg-brand-muted text-brand-dark px-2.5 py-1 rounded-none border-[0.5px] border-brand-border flex items-center justify-center gap-1 hover:bg-brand-dark hover:text-brand-white transition-all duration-300"
                >
                  github
                  <GoArrowUpRight className="text-[8px] sm:text-[10px] flex-shrink-0" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mark-julian-guerrero"
                  target="_blank"
                  className="font-mono text-[10px] font-thin bg-brand-muted text-brand-dark px-2.5 py-1 rounded-none border-[0.5px] border-brand-border flex items-center justify-center gap-1 hover:bg-brand-dark hover:text-brand-white transition-all duration-300"
                >
                  linkedin
                  <GoArrowUpRight className="text-[8px] sm:text-[10px] flex-shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </motion.section>
        <motion.section
          className="w-full bg-brand-white py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="mx-[10%] lg:mx-[15%] flex flex-col gap-16">
            <div className="flex flex-col">
              <p className="font-mono font-normal text-sm uppercase tracking-widest text-brand-dark text-left mb-8">
                Communities & Organization;
              </p>
              <motion.div
                className="w-full grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={containerVariants}
              >
                <motion.div variants={itemVariants} className="bg-brand-white border border-brand-border p-8 rounded-none flex flex-col items-center text-center shadow-sm w-full">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border border-brand-border mb-4 bg-brand-muted flex items-center justify-center font-mono text-xs">
                    <Image
                      src="/gdg_logo.png"
                      alt="GDG Logo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-1 mb-3">
                    <h2 className="font-mono text-base font-semibold text-brand-dark">GDG - Manila</h2>
                    <p className="font-mono text-xs text-brand-text/70">Google For Developers Community</p>
                    <span className="font-mono text-[11px] font-medium bg-brand-muted text-brand-dark px-2.5 py-0.5 mt-1 border-[0.5px] border-brand-border">
                      Google Developers Program Member
                    </span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-brand-text leading-relaxed text-center mb-6">
                    Active member joining in developer events, workshops, seminars, and community-focused tech projects.
                  </p>
                  <a
                    href="https://gdg.community.dev/u/mpfqv5/"
                    target="_blank"
                    className="mt-auto font-mono text-xs bg-brand-dark text-brand-white px-6 py-2.5 rounded-none border border-brand-dark hover:bg-brand-bg hover:text-brand-dark transition-all duration-300 flex items-center gap-1"
                  >
                    Visit
                    <GoArrowUpRight size={12} />
                  </a>
                </motion.div>
                <motion.div variants={itemVariants} className="bg-brand-white border border-brand-border p-8 rounded-none flex flex-col items-center text-center shadow-sm w-full">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border border-brand-border mb-4 bg-brand-muted flex items-center justify-center font-mono text-xs">
                    <Image
                      src="/the_technocrats.jpg"
                      alt="The Technocrats Logo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-1 mb-3">
                    <h2 className="font-mono text-base font-semibold text-brand-dark">The Technocrats</h2>
                    <p className="font-mono text-xs text-brand-text/70">School Organization</p>
                    <span className="font-mono text-[11px] font-medium bg-brand-muted text-brand-dark px-2.5 py-0.5 mt-1 border-[0.5px] border-brand-border">
                      Lead Graphic Designer
                    </span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-brand-text leading-relaxed text-center mb-6">
                    Leading visual communication, media management and production, and graphic design assets for campus technology organization.
                  </p>
                  <a
                    href="https://www.facebook.com/profile.php?id=61565134869336"
                    target="_blank"
                    className="mt-auto font-mono text-xs bg-brand-dark text-brand-white px-6 py-2.5 rounded-none border border-brand-dark hover:bg-brand-bg hover:text-brand-dark transition-all duration-300 flex items-center gap-1"
                  >
                    Visit
                    <GoArrowUpRight size={12} />
                  </a>
                </motion.div>
              </motion.div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono font-normal text-sm uppercase tracking-widest text-brand-dark">
                  Tech Stack;
                </span>
                <a
                  href="/tech-stack"
                  className="font-mono font-normal text-xs uppercase tracking-widest text-brand-dark flex items-center gap-1.5 hover:opacity-70 transition-opacity duration-300"
                >
                  View All
                  <FaArrowRightLong className="text-xs flex-shrink-0" />
                </a>
              </div>
              <motion.div
                className="flex flex-wrap items-center gap-2 w-full"
                variants={containerVariants}
              >
                {["React", "React Native", "Next.js", "Vue", "HTML", "CSS", "JavaScript", "TypeScript", "Laravel", "Express.js", "Supabase", "Firebase", "Python", "FastAPI", "Flask"].map((tech) => (
                  <motion.span key={tech} variants={itemVariants} className="font-mono text-[12px] font-thin bg-brand-muted text-brand-dark px-2.5 py-1 rounded-none border-[0.5px] border-brand-border">
                    {tech}
                  </motion.span>
                ))}
                <motion.a
                  variants={itemVariants}
                  href="/tech-stack"
                  className="font-mono text-[12px] font-medium bg-brand-muted text-brand-dark px-2.5 py-1 rounded-none border-[0.5px] border-dashed border-brand-border hover:bg-brand-dark hover:text-brand-white transition-all duration-300"
                >
                  + more
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.section>
        <motion.section
          id="projects"
          className="w-full bg-brand-white py-20 border-t border-brand-border"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="mx-[10%] lg:mx-[15%] flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <span className="font-mono font-normal text-sm uppercase tracking-widest text-brand-dark">
                Projects;
              </span>
              <a
                href="/projects"
                className="font-mono font-normal text-xs uppercase tracking-widest text-brand-dark flex items-center gap-1.5 hover:opacity-70 transition-opacity duration-300"
              >
                All Projects
                <FaArrowRightLong className="text-xs flex-shrink-0" />
              </a>
            </div>
            <motion.div
              className="w-full grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="bg-brand-white border border-brand-border p-8 rounded-none flex flex-col items-center text-center shadow-sm w-full">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border border-brand-border mb-4 bg-brand-muted flex items-center justify-center font-mono text-xs">
                  <Image
                    src="/icc.jpg"
                    alt="Immaculada Concepcion College Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col items-center gap-1 mb-3">
                  <h2 className="font-mono text-base font-semibold text-brand-dark">IntelliQue</h2>
                  <p className="font-mono text-xs text-brand-text/70">Queue Management System</p>
                  <span className="font-mono text-[11px] font-medium bg-brand-muted text-brand-dark px-2.5 py-0.5 mt-1 border-[0.5px] border-brand-border">
                    ICT - Capstone Project
                  </span>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-1.5 mb-4">
                  <span className="font-mono text-[10px] font-thin bg-brand-muted text-brand-dark px-2 py-0.5 border-[0.5px] border-brand-border">React</span>
                  <span className="font-mono text-[10px] font-thin bg-brand-muted text-brand-dark px-2 py-0.5 border-[0.5px] border-brand-border">Express.js</span>
                  <span className="font-mono text-[10px] font-thin bg-brand-muted text-brand-dark px-2 py-0.5 border-[0.5px] border-brand-border">SQL</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-brand-text leading-relaxed text-center mb-6">
                  A Web-based queuing management system for Immaculada Concepcion College configured with a 3:1 ratio between regular vs. priority school processes.
                </p>
                <a
                  href="https://iccintellique.onrender.com"
                  target="_blank"
                  className="mt-auto font-mono text-xs bg-brand-dark text-brand-white px-6 py-2.5 rounded-none border border-brand-dark hover:bg-brand-bg hover:text-brand-dark transition-all duration-300 flex items-center gap-1"
                >
                  Visit
                  <GoArrowUpRight size={12} />
                </a>
              </motion.div>
              <motion.div variants={itemVariants} className="bg-brand-white border border-brand-border p-8 rounded-none flex flex-col items-center text-center shadow-sm w-full">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border border-brand-border mb-4 bg-brand-muted flex items-center justify-center font-mono text-xs">
                  <Image
                    src="/syllaba_ai.png"
                    alt="Syllaba AI Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col items-center gap-1 mb-3">
                  <h2 className="font-mono text-base font-semibold text-brand-dark">Syllaba AI</h2>
                  <p className="font-mono text-xs text-brand-text/70">AI Assistant</p>
                  <span className="font-mono text-[11px] font-medium bg-brand-muted text-brand-dark px-2.5 py-0.5 mt-1 border-[0.5px] border-brand-border">
                    Web Application
                  </span>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-1.5 mb-4">
                  <span className="font-mono text-[10px] font-thin bg-brand-muted text-brand-dark px-2 py-0.5 border-[0.5px] border-brand-border">Next.js</span>
                  <span className="font-mono text-[10px] font-thin bg-brand-muted text-brand-dark px-2 py-0.5 border-[0.5px] border-brand-border">Python</span>
                  <span className="font-mono text-[10px] font-thin bg-brand-muted text-brand-dark px-2.5 py-0.5 border-[0.5px] border-brand-border">Supabase</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-brand-text leading-relaxed text-center mb-6">
                  A Web-based Application connected to Google Classroom API allowing students to turn their manual process of checking google classroom into single conversation
                  using the Gemini GenAI models.
                </p>
                <a
                  href="https://syllaba-ai.vercel.app"
                  target="_blank"
                  className="mt-auto font-mono text-xs bg-brand-dark text-brand-white px-6 py-2.5 rounded-none border border-brand-dark hover:bg-brand-bg hover:text-brand-dark transition-all duration-300 flex items-center gap-1"
                >
                  Visit
                  <GoArrowUpRight size={12} />
                </a>
              </motion.div>
              <motion.div variants={itemVariants} className="bg-brand-white border border-brand-border p-8 rounded-none flex flex-col items-center text-center shadow-sm w-full">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border border-brand-border mb-4 bg-brand-muted flex items-center justify-center font-mono text-xs">
                  <Image
                    src="/swift_stream.png"
                    alt="Swift Streams"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col items-center gap-1 mb-3">
                  <h2 className="font-mono text-base font-semibold text-brand-dark">Swift Stream</h2>
                  <p className="font-mono text-xs text-brand-text/70">Movie Streaming</p>
                  <span className="font-mono text-[11px] font-medium bg-brand-muted text-brand-dark px-2.5 py-0.5 mt-1 border-[0.5px] border-brand-border">
                    Web Application
                  </span>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-1.5 mb-4">
                  <span className="font-mono text-[10px] font-thin bg-brand-muted text-brand-dark px-2 py-0.5 border-[0.5px] border-brand-border">HTML</span>
                  <span className="font-mono text-[10px] font-thin bg-brand-muted text-brand-dark px-2 py-0.5 border-[0.5px] border-brand-border">Tailwind</span>
                  <span className="font-mono text-[10px] font-thin bg-brand-muted text-brand-dark px-2 py-0.5 border-[0.5px] border-brand-border">Express.js</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-brand-text leading-relaxed text-center mb-6">
                  A Web-based movie streaming website connected to TMDB (The Movie Database) and a movie streaming API like vidsrc allowing user to watch movies with minimal ads.
                </p>
                <a
                  href="https://swift-streams.vercel.app"
                  target="_blank"
                  className="mt-auto font-mono text-xs bg-brand-dark text-brand-white px-6 py-2.5 rounded-none border border-brand-dark hover:bg-brand-bg hover:text-brand-dark transition-all duration-300 flex items-center gap-1"
                >
                  Visit
                  <GoArrowUpRight size={12} />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
        <motion.section
          id="certificates"
          className="w-full bg-brand-white py-20 border-t border-brand-border"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="mx-[10%] lg:mx-[15%] flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <span className="font-mono font-normal text-sm uppercase tracking-widest text-brand-dark">
                Certificates;
              </span>
              <a
                href="/certificates"
                className="font-mono font-normal text-xs uppercase tracking-widest text-brand-dark flex items-center gap-1.5 hover:opacity-70 transition-opacity duration-300"
              >
                All Certificates
                <FaArrowRightLong className="text-xs flex-shrink-0" />
              </a>
            </div>
            <motion.div
              className="w-full grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="bg-brand-white border border-brand-border p-6 rounded-none flex flex-col items-center justify-between text-center shadow-sm w-full aspect-square">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border border-brand-border bg-brand-muted flex items-center justify-center">
                  <Image
                    src="/dict_logo.jpg"
                    alt="DICT Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col items-center gap-1 my-auto">
                  <h2 className="font-mono text-sm sm:text-base font-semibold text-brand-dark line-clamp-2">
                    Operating System Basics
                  </h2>
                  <p className="font-mono text-xs text-brand-text/70">
                    DICT-ITU DTC & Cisco Netacad
                  </p>
                </div>
                <a
                  href="https://www.credly.com/badges/c69489be-8e58-44d5-a92a-1f1c00c198b6/public_url"
                  target="_blank"
                  className="font-mono text-xs bg-brand-dark text-brand-white px-5 py-2 rounded-none border border-brand-dark hover:bg-brand-bg hover:text-brand-dark transition-all duration-300 flex items-center gap-1"
                >
                  Verify
                  <GoArrowUpRight size={12} />
                </a>
              </motion.div>
              <motion.div variants={itemVariants} className="bg-brand-white border border-brand-border p-6 rounded-none flex flex-col items-center justify-between text-center shadow-sm w-full aspect-square">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border border-brand-border bg-brand-muted flex items-center justify-center">
                  <Image
                    src="/hacker_rank.png"
                    alt="Hacker Rank Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col items-center gap-1 my-auto">
                  <h2 className="font-mono text-sm sm:text-base font-semibold text-brand-dark line-clamp-2">
                    JavaScript Basics
                  </h2>
                  <p className="font-mono text-xs text-brand-text/70">
                    Hacker Rank
                  </p>
                </div>
                <a
                  href="https://www.hackerrank.com/certificates/4a3e3e6d8be2"
                  target="_blank"
                  className="font-mono text-xs bg-brand-dark text-brand-white px-5 py-2 rounded-none border border-brand-dark hover:bg-brand-bg hover:text-brand-dark transition-all duration-300 flex items-center gap-1"
                >
                  Verify
                  <GoArrowUpRight size={12} />
                </a>
              </motion.div>
              <motion.div variants={itemVariants} className="bg-brand-white border border-brand-border p-6 rounded-none flex flex-col items-center justify-between text-center shadow-sm w-full aspect-square">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border border-brand-border bg-brand-muted flex items-center justify-center">
                  <Image
                    src="/hacker_rank.png"
                    alt="Hacker Rank Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col items-center gap-1 my-auto">
                  <h2 className="font-mono text-sm sm:text-base font-semibold text-brand-dark line-clamp-2">
                    SQL Basics
                  </h2>
                  <p className="font-mono text-xs text-brand-text/70">
                    Hacker Rank
                  </p>
                </div>
                <a
                  href="https://www.hackerrank.com/certificates/d7d52cdfe76f"
                  target="_blank"
                  className="font-mono text-xs bg-brand-dark text-brand-white px-5 py-2 rounded-none border border-brand-dark hover:bg-brand-bg hover:text-brand-dark transition-all duration-300 flex items-center gap-1"
                >
                  Verify
                  <GoArrowUpRight size={12} />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
        <motion.section
          id="experiences"
          className="w-full bg-brand-white py-20 border-t border-brand-border"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="mx-[10%] lg:mx-[15%] flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <span className="font-mono font-normal text-sm uppercase tracking-widest text-brand-dark">
                Experiences;
              </span>
              <a
                href="/experiences"
                className="font-mono font-normal text-xs uppercase tracking-widest text-brand-dark flex items-center gap-1.5 hover:opacity-70 transition-opacity duration-300"
              >
                View All
                <FaArrowRightLong className="text-xs flex-shrink-0" />
              </a>
            </div>
            <motion.div
              className="w-full flex flex-col border-t border-brand-border"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 items-center justify-center text-center py-6 border-b border-brand-border gap-2 md:gap-8">
                <span className="font-mono text-xs text-brand-text">
                  2026
                </span>
                <h3 className="font-mono text-xs font-semibold text-brand-dark">
                  AI Integrator
                </h3>
                <p className="font-sans text-xs text-brand-text leading-relaxed">
                  Integrating AI on some projects
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 items-center justify-center text-center py-6 border-b border-brand-border gap-2 md:gap-8">
                <span className="font-mono text-xs text-brand-text">
                  2026
                </span>
                <h3 className="font-mono text-xs font-semibold text-brand-dark">
                  BSCS Student
                </h3>
                <p className="font-sans text-xs text-brand-text leading-relaxed">
                  Studying at Immaculada Concepcion College
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 items-center justify-center text-center py-6 border-b border-brand-border gap-2 md:gap-8">
                <span className="font-mono text-xs text-brand-text">
                  2026
                </span>
                <h3 className="font-mono text-xs font-semibold text-brand-dark">
                  SHS - ICT Graduate
                </h3>
                <p className="font-sans text-xs text-brand-text leading-relaxed">
                  Graduate at Immaculada Concepcion College
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 items-center justify-center text-center py-6 border-b border-brand-border gap-2 md:gap-8">
                <span className="font-mono text-xs text-brand-text">
                  2026
                </span>
                <h3 className="font-mono text-xs font-semibold text-brand-dark">
                  Mobile App Developer
                </h3>
                <p className="font-sans text-xs text-brand-text leading-relaxed">
                  Make my first mobile app
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <footer className="w-full bg-brand-white py-12 border-t border-brand-border">
        <div className="mx-[10%] lg:mx-[15%] flex flex-col gap-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="font-mono text-xl font-bold tracking-light text-brand-dark">
              Mark;
            </span>
            <a
              href="mailto:marklings091@gmail.com"
              target="_blank"
              className="font-mono text-xs text-brand-dark hover:opacity-70 transition-opacity duration-300 flex items-center gap-1"
            >
              marklings091@gmail.com
              <GoArrowUpRight className="text-[10px] flex-shrink-0" />
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/im.not.marklings"
                target="_blank"
                className="font-mono text-[10px] font-thin bg-brand-muted text-brand-dark px-2.5 py-1 rounded-none border-[0.5px] border-brand-border flex items-center gap-1 hover:bg-brand-dark hover:text-brand-white transition-all duration-300"
              >
                facebook
                <GoArrowUpRight className="text-[8px] flex-shrink-0" />
              </a>
              <a
                href="https://www.instagram.com/cm.notmarklings"
                target="_blank"
                className="font-mono text-[10px] font-thin bg-brand-muted text-brand-dark px-2.5 py-1 rounded-none border-[0.5px] border-brand-border flex items-center gap-1 hover:bg-brand-dark hover:text-brand-white transition-all duration-300"
              >
                instagram
                <GoArrowUpRight className="text-[8px] flex-shrink-0" />
              </a>
              <a
                href="https://github.com/markklings"
                target="_blank"
                className="font-mono text-[10px] font-thin bg-brand-muted text-brand-dark px-2.5 py-1 rounded-none border-[0.5px] border-brand-border flex items-center gap-1 hover:bg-brand-dark hover:text-brand-white transition-all duration-300"
              >
                github
                <GoArrowUpRight className="text-[8px] flex-shrink-0" />
              </a>
              <a
                href="https://www.linkedin.com/in/mark-julian-guerrero"
                target="_blank"
                className="font-mono text-[10px] font-thin bg-brand-muted text-brand-dark px-2.5 py-1 rounded-none border-[0.5px] border-brand-border flex items-center gap-1 hover:bg-brand-dark hover:text-brand-white transition-all duration-300"
              >
                linkedin
                <GoArrowUpRight className="text-[8px] flex-shrink-0" />
              </a>
            </div>
          </div>
          <div className="pt-6 border-t border-brand-border/40 text-center font-mono text-[11px] text-brand-text/60">
            &copy; {new Date().getFullYear()} Mark Julian Guerrero. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
