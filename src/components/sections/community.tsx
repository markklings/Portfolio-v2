"use client";

import { FiArrowUpRight } from "react-icons/fi";
import { communityStats, organizations } from "@/data/community";
import { Logo } from "@/components/ui/logo";
import { Reveal, stagger } from "@/components/reveal";

const cell = "sm:px-5 sm:first:pl-0 sm:last:pr-0";

export function Community() {
  return (
    <section
      aria-label="Community and organizations"
      className="mt-16 border-y border-line"
    >
      {/* Organizations Grid */}
      <ul
        className="grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        style={{
          gridTemplateColumns: `repeat(${organizations.length}, minmax(0, 1fr))`,
        }}
      >
        {organizations.map((o, index) => {
          const body = (
            <>
              <Logo
                src={o.logo}
                size={24}
                invertOnDark={o.invertOnDark}
                className="shrink-0 transition-transform duration-300 ease-out group-hover:scale-110"
              />
              <span className="min-w-0">
                <span className="block truncate text-[13px] font-semibold">
                  {o.name}
                </span>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-muted">
                  {o.role}
                </span>
              </span>
            </>
          );
          return (
            <Reveal
              as="li"
              key={`${o.name}-${index}`}
              delay={stagger(index, 80)}
              className={cell}
            >
              <div className="group flex items-center gap-3 py-4">{body}</div>
            </Reveal>
          );
        })}
      </ul>

      {/* Community Stats Grid */}
      <ul
        className="grid divide-x divide-line border-t border-line"
        style={{
          gridTemplateColumns: `repeat(${communityStats.length}, minmax(0, 1fr))`,
        }}
      >
        {communityStats.map((s, index) => {
          const body = (
            <>
              <span className="flex items-start gap-1 font-mono text-xl sm:text-2xl">
                {s.value}
                {s.href && (
                  <FiArrowUpRight
                    aria-hidden
                    size={14}
                    className="mt-1 text-muted transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                )}
              </span>
              <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-wider text-muted sm:text-[11px]">
                {s.label}
              </span>
            </>
          );
          return (
            <Reveal
              as="li"
              key={`${s.label}-${index}`}
              delay={stagger(index, 80) + 120}
              className="px-3 first:pl-0 last:pr-0 sm:px-5"
            >
              {s.href ? (
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block py-5 transition-opacity duration-200 hover:opacity-70"
                >
                  {body}
                </a>
              ) : (
                <div className="py-5">{body}</div>
              )}
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
