"use client";

import { experienceSummary } from "@/data/experience";
import { Reveal, stagger } from "@/components/reveal";
import { SectionHeader } from "@/components/ui/section-header";

export function ExperienceSection() {
  return (
    <section className="mt-28 md:mt-36">
      <SectionHeader
        index="03"
        title="experience"
        href="/experience"
        linkLabel="Full history"
      />
      <ul className="mt-8 border-b border-line">
        {experienceSummary.map((e, i) => (
          <Reveal
            as="li"
            key={`${e.year}-${e.role}`}
            delay={stagger(i, 70)}
            className="group grid grid-cols-[3.5rem_1fr] gap-x-4 gap-y-0.5 border-t border-line py-3.5 sm:grid-cols-[6.5rem_1fr_auto] sm:items-baseline hover:bg-card"
          >
            <span className="font-mono text-xs text-muted transition-colors duration-300 group-hover:text-fg">
              {e.year}
            </span>
            <span className="font-medium transition-transform duration-300 ease-out group-hover:translate-x-1">
              {e.role}
            </span>
            <span className="col-start-2 text-sm text-muted sm:col-start-auto sm:text-right">
              {e.company}
            </span>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
