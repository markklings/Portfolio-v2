import type { Metadata } from "next";
import { PageShell } from "@/components/ui/page-shell";
import { ProjectCard } from "@/components/project-card";
import { projects, projectsIntro } from "@/data/projects";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = { title: `Projects — ${profile.name}` };

export default function ProjectsPage() {
  return (
    <PageShell title="projects" intro={projectsIntro}>
      <ul className="space-y-4">
        {projects.map((p, i) => (
          <Reveal as="li" key={p.id} delay={3 + i * 60}>
            <ProjectCard project={p} variant="full" />
          </Reveal>
        ))}
      </ul>
    </PageShell>
  );
}
