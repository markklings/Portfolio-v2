"use client";

import { useState } from "react";
import type { HTMLAttributes, KeyboardEvent } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/cn";
import { ProjectCard } from "@/components/project-card";
import { Reveal, stagger } from "@/components/reveal";

/**
 * md and up: fanned cards. Click, tap or use the arrows to bring one to the front.
 * Below md: a plain stacked list, so nothing overflows on phones.
 */
export function ProjectFan({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(Math.floor((projects.length - 1) / 2));
  if (projects.length === 0) return null;

  return (
    <>
      <ul className="space-y-4 md:hidden">
        {projects.map((p, i) => (
          <Reveal as="li" key={p.id} delay={stagger(i, 90)}>
            <ProjectCard project={p} variant="fan" />
          </Reveal>
        ))}
      </ul>

      <div className="hidden md:block">
        <div className="grid grid-cols-1 py-10">
          {projects.map((p, i) => {
            const offset = i - active;
            const isActive = offset === 0;
            const hidden = Math.abs(offset) > 1;

            const buttonProps: HTMLAttributes<HTMLDivElement> =
              !isActive && !hidden
                ? {
                    role: "button",
                    tabIndex: 0,
                    "aria-label": `Show ${p.title}`,
                    onClick: () => setActive(i),
                    onKeyDown: (e: KeyboardEvent<HTMLDivElement>) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActive(i);
                      }
                    },
                  }
                : {};

            return (
              <div
                key={p.id}
                {...buttonProps}
                aria-hidden={hidden || undefined}
                className={cn(
                  "col-start-1 row-start-1 w-[54%] justify-self-center transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
                  isActive && "opacity-100",
                  !isActive && !hidden && "cursor-pointer opacity-55 hover:opacity-80 transition-[transform,opacity]",
                  hidden && "pointer-events-none opacity-0",
                )}
                style={{
                  transform: `translateX(${offset * 56}%) rotate(${offset * 7}deg) scale(${isActive ? 1 : 0.92})`,
                  zIndex: 10 - Math.abs(offset),
                }}
              >
                <div inert={!isActive}>
                  <ProjectCard project={p} variant="fan" />
                </div>
              </div>
            );
          })}
        </div>

        {projects.length > 1 && (
          <div className="flex items-center justify-center gap-3 font-mono text-xs text-muted">
            <button
              type="button"
              aria-label="Previous project"
              disabled={active === 0}
              onClick={() => setActive((a) => Math.max(0, a - 1))}
              className="rounded-full p-2 transition-[color,opacity,scale] duration-200 hover:text-fg active:scale-90 disabled:opacity-30 disabled:hover:text-muted"
            >
              <FiChevronLeft aria-hidden size={16} />
            </button>
            <span key={active} aria-live="polite" className="chip-in tabular-nums">
              {active + 1}/{projects.length}
            </span>
            <button
              type="button"
              aria-label="Next project"
              disabled={active === projects.length - 1}
              onClick={() => setActive((a) => Math.min(projects.length - 1, a + 1))}
              className="rounded-full p-2 transition-[color,opacity,scale] duration-200 hover:text-fg active:scale-90 disabled:opacity-30 disabled:hover:text-muted"
            >
              <FiChevronRight aria-hidden size={16} />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
