import { Container } from "@/components/container";
import { Profile } from "@/components/sections/profile";
import { Community } from "@/components/sections/community";
import { ProjectsSection } from "@/components/sections/projects";
import { ExperienceSection } from "@/components/sections/experience";
import { StackSection } from "@/components/sections/stack";
import { CertificatesSection } from "@/components/sections/certificates";

export default function Home() {
  return (
    <main className="overflow-x-clip pb-24">
      <Container className="pt-24 md:pt-28">
        <Profile />
        <Community />
        <ProjectsSection />
        <ExperienceSection />
        <StackSection />
        <CertificatesSection />
      </Container>
    </main>
  );
}
