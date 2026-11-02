"use client";

import { stackPreview } from "@/data/stack";
import { Chip, MoreChip } from "@/components/ui/chip";
import { Reveal, stagger } from "@/components/reveal";
import { SectionHeader } from "@/components/ui/section-header";

export function StackSection() {
  return (
    <section className="mt-28 md:mt-36">
      <SectionHeader
        index="04"
        title="stack"
        href="/stack"
        linkLabel="View all"
      />
      <ul className="mt-8 flex flex-wrap gap-2">
        {stackPreview.map((item, i) => (
          <Reveal as="li" key={item} delay={stagger(i, 35, 14)}>
            <Chip>{item}</Chip>
          </Reveal>
        ))}
        <Reveal as="li" delay={stagger(stackPreview.length, 35, 14)}>
          <MoreChip href="/stack">+ more</MoreChip>
        </Reveal>
      </ul>
    </section>
  );
}
