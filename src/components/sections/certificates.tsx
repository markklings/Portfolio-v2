"use client";

import { certificateGroups } from "@/data/certificates";
import { CertificateCard } from "@/components/certificate-card";
import { Reveal, stagger } from "@/components/reveal";
import { SectionHeader } from "@/components/ui/section-header";

export function CertificatesSection() {
  const featured = certificateGroups
    .flatMap((g) => g.items)
    .filter((c) => c.featured)
    .slice(0, 3);

  return (
    <section className="mt-28 md:mt-36">
      <SectionHeader
        index="05"
        title="certifications"
        href="/certificates"
        linkLabel="All certifications"
      />
      <ul className="mt-8 grid gap-4 sm:grid-cols-3">
        {featured.map((c, i) => (
          <Reveal as="li" key={c.title} delay={stagger(i, 100)}>
            <CertificateCard cert={c} />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
