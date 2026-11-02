import type { Metadata } from "next";
import { PageShell } from "@/components/ui/page-shell";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { experienceIntro } from "@/data/experience";
import { profile } from "@/data/profile";

export const metadata: Metadata = { title: `Experience — ${profile.name}` };

export default function ExperiencePage() {
  return (
    <PageShell title="experience" intro={experienceIntro}>
      <ExperienceTimeline />
    </PageShell>
  );
}
