'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { GoArrowLeft, GoArrowUpRight } from "react-icons/go"

interface CertificateItem {
  id: string
  title: string
  provider: string
  categoryTag: string
  categoryGroup: string
  logoSrc: string
  verifyUrl: string
}

const certificatesData: CertificateItem[] = [
  {
    id: "os-basics",
    title: "OS Basics",
    provider: "DICT-ITU DTC & Cisco Netacad",
    categoryTag: "Systems & OS",
    categoryGroup: "Systems & OS",
    logoSrc: "/dict_logo.jpg",
    verifyUrl: "https://www.credly.com/badges/c69489be-8e58-44d5-a92a-1f1c00c198b6/public_url",
  },
  {
    id: "js-basics",
    title: "JavaScript Basics",
    provider: "HackerRank",
    categoryTag: "Programming & Web",
    categoryGroup: "Programming & Web",
    logoSrc: "/hacker_rank.png",
    verifyUrl: "https://www.hackerrank.com/certificates/4a3e3e6d8be2",
  },
  {
    id: "sql-basics",
    title: "SQL Basics",
    provider: "HackerRank",
    categoryTag: "Database",
    categoryGroup: "Database",
    logoSrc: "/hacker_rank.png",
    verifyUrl: "https://www.hackerrank.com/certificates/d7d52cdfe76f",
  },
]

const filterCategories = ["All", "Systems & OS", "Programming & Web", "Database"]

export default function CertificatesPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredCertificates = activeFilter === "All"
    ? certificatesData
    : certificatesData.filter((cert) => cert.categoryGroup === activeFilter)

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
            Certificates
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
              All Certificates;
            </h1>
            <p className="font-sans text-sm sm:text-base text-brand-text/80 leading-relaxed max-w-2xl">
              An overview of verified credentials, course completions, and technical certifications earned across systems, programming, and database engineering.
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
            className="w-full grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredCertificates.map((cert) => (
                <motion.div
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="bg-brand-white border border-brand-border p-6 rounded-none flex flex-col items-center justify-between text-center shadow-sm w-full aspect-square hover:border-brand-dark transition-colors duration-300"
                >
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border border-brand-border bg-brand-muted flex items-center justify-center">
                    <Image
                      src={cert.logoSrc}
                      alt={`${cert.provider} Logo`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="font-mono text-[10px] font-thin bg-brand-muted text-brand-dark px-2 py-0.5 border-[0.5px] border-brand-border mt-2">
                    {cert.categoryTag}
                  </span>
                  <div className="flex flex-col items-center gap-1 my-auto">
                    <h2 className="font-mono text-sm sm:text-base font-semibold text-brand-dark line-clamp-2">
                      {cert.title}
                    </h2>
                    <p className="font-mono text-xs text-brand-text/70">
                      {cert.provider}
                    </p>
                  </div>
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs bg-brand-dark text-brand-white px-5 py-2 rounded-none border border-brand-dark hover:bg-brand-bg hover:text-brand-dark transition-all duration-300 flex items-center gap-1"
                  >
                    Verify
                    <GoArrowUpRight size={12} />
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
    </div>
  )
}