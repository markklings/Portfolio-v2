"use client";

import { companies } from "@/data/experience";
import type { Company, Role } from "@/data/experience";
import { formatPeriod } from "@/lib/dates";
import { Logo } from "@/components/ui/logo";
import { SkillList } from "@/components/skill-list";
import { ExperienceDuration } from "@/components/experience-duration";
import { Reveal, stagger } from "@/components/reveal";

const meta = "font-mono text-[11px] uppercase tracking-wider text-muted";

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function RoleBlock({ role }: { role: Role }) {
  return (
    <div>
      <h3 className="font-semibold">{role.title}</h3>
      <p className={`mt-1 ${meta}`}>
        {formatPeriod(role.start, role.end)} ·{" "}
        <ExperienceDuration start={role.start} end={role.end} />
      </p>
      <div className="mt-3 space-y-3 text-sm text-soft">
        {role.description.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      {role.skills.length > 0 && <SkillList skills={role.skills} />}
    </div>
  );
}

function CompanyBlock({ company }: { company: Company }) {
  const multi = company.roles.length > 1;
  const companyStart = company.roles.map((r) => r.start).sort()[0];
  const companyEnd = company.roles.some((r) => !r.end)
    ? undefined
    : company.roles
        .map((r) => r.end as string)
        .sort()
        .at(-1);

  return (
    <div className="min-w-0 flex-1">
      <h2 className="text-base font-semibold leading-tight">
        {company.company}
      </h2>
      <p className="mt-1 font-mono text-xs text-muted">
        {company.type}
        {multi && (
          <>
            {" · "}
            <ExperienceDuration start={companyStart} end={companyEnd} />
          </>
        )}
      </p>
      {company.location && (
        <p className="mt-0.5 font-mono text-[11px] text-muted">
          {company.location}
        </p>
      )}

      {multi ? (
        <ul className="mt-6 space-y-8 border-l border-line pl-5 sm:pl-6">
          {company.roles.map((role) => (
            <li key={role.title + role.start} className="relative">
              <span
                aria-hidden
                className="tl-dot absolute top-1.5 -left-[25.5px] size-[9px] rounded-full border border-line-strong bg-bg sm:-left-[29px]"
              />
              <RoleBlock role={role} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-6">
          <RoleBlock role={company.roles[0]} />
        </div>
      )}
    </div>
  );
}

export function ExperienceTimeline() {
  return (
    <ol>
      {companies.map((c, i) => (
        <Reveal
          as="li"
          key={`${c.company}-${i}`}
          delay={stagger(i, 60, 3)}
          className="group relative flex gap-4 pb-12 last:pb-0"
        >
          {i < companies.length - 1 && (
            <span
              aria-hidden
              className="tl-line absolute bottom-3 left-6 top-[3.75rem] w-px -translate-x-1/2 bg-line"
            />
          )}
          <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-line-strong bg-card font-mono text-xs transition-[border-color,background-color,scale] duration-300 ease-out group-hover:scale-105 group-hover:border-muted">
            {c.logo ? <Logo src={c.logo} size={24} /> : initials(c.company)}
          </span>
          <CompanyBlock company={c} />
        </Reveal>
      ))}
    </ol>
  );
}
