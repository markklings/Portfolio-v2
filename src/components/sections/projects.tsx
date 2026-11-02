import { projects } from "@/data/projects";
import { ProjectFan } from "@/components/project-fan";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/ui/section-header";

export function ProjectsSection() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="mt-28 md:mt-36">
      <SectionHeader index="02" title="projects" href="/projects" linkLabel="All projects" />
      <Reveal delay={120} className="mt-8 md:mt-6">
        <ProjectFan projects={featured} />
      </Reveal>
    </section>
  );
}
