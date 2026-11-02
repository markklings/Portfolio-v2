import { FiChevronLeft, FiChevronRight, FiGlobe, FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/ui/logo";
import { StoreButton } from "@/components/store-button";

const pill = "inline-flex items-center rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider";

function Badges({ badges }: { badges: Project["badges"] }) {
  if (badges.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-1.5">
      {badges.map((b) => (
        <li key={b.label}>
          {b.primary ? (
            <span className={cn(pill, "gap-1 bg-fg text-bg")}>
              <FiChevronLeft aria-hidden size={11} strokeWidth={3} className="transition-transform duration-300 ease-out group-hover/card:-translate-x-0.5" />
              {b.label}
              <FiChevronRight aria-hidden size={11} strokeWidth={3} className="transition-transform duration-300 ease-out group-hover/card:translate-x-0.5" />
            </span>
          ) : (
            <span className={cn(pill, "border border-line-strong text-muted")}>{b.label}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

function LinkButton({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-10 items-center gap-2 rounded-lg border border-line-strong px-3.5 text-sm text-soft transition-[color,background-color,border-color,translate,scale] duration-200 ease-out hover:-translate-y-0.5 hover:border-muted hover:bg-bg hover:text-fg active:translate-y-0 active:scale-[0.97]"
    >
      {icon}
      {label}
    </a>
  );
}

function Actions({ links, className }: { links: Project["links"]; className?: string }) {
  const { appStore, playStore, website, github } = links;
  if (!appStore && !playStore && !website && !github) return null;
  return (
    <div className={cn("flex flex-wrap items-center gap-2.5", className)}>
      {appStore && <StoreButton store="app-store" href={appStore} />}
      {playStore && <StoreButton store="google-play" href={playStore} />}
      {website && <LinkButton href={website} icon={<FiGlobe aria-hidden size={15} />} label="Website" />}
      {github && <LinkButton href={github} icon={<FaGithub aria-hidden size={15} />} label="Source" />}
    </div>
  );
}

type Props = { project: Project; variant: "fan" | "full" };

export function ProjectCard({ project, variant }: Props) {
  const { title, description, icon, badges, links, featuredIn } = project;

  if (variant === "fan") {
    return (
      <article className="group/card rounded-2xl border border-line bg-card p-5 transition-[border-color,background-color,translate] duration-300 ease-out hover:-translate-y-0.5 hover:border-line-strong">
        <Badges badges={badges} />
        <div className={cn("flex items-center gap-3", badges.length > 0 && "mt-4")}>
          <Logo src={icon} size={48} className="shrink-0 rounded-xl transition-transform duration-300 ease-out group-hover/card:scale-105" />
          <h3 className="text-lg leading-tight">{title}</h3>
        </div>
        <p className="mt-3 text-sm text-soft">{description}</p>
        <Actions links={links} className="mt-5" />
      </article>
    );
  }

  return (
    <article className="group/card rounded-2xl border border-line bg-card p-5 transition-[border-color,background-color,translate] duration-300 ease-out hover:-translate-y-0.5 hover:border-line-strong sm:p-7">
      <div className="flex gap-4 sm:gap-5">
        <Logo src={icon} size={64} className="shrink-0 rounded-xl transition-transform duration-300 ease-out group-hover/card:scale-105" />
        <div className="min-w-0">
          <Badges badges={badges} />
          <h3 className={cn("text-xl leading-tight", badges.length > 0 && "mt-3")}>{title}</h3>
          <p className="mt-2 text-soft">{description}</p>
        </div>
      </div>
      <Actions links={links} className="mt-6" />
      {featuredIn && featuredIn.length > 0 && (
        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-5">
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted">Featured in</span>
          {featuredIn.map((f) => (
            <a
              key={f.label}
              href={f.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-0.5 font-mono text-xs text-soft transition-colors duration-200 hover:text-fg"
            >
              {f.label}
              <FiArrowUpRight aria-hidden size={12} className="transition-transform duration-300 ease-out group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
