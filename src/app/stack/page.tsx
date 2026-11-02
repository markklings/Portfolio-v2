import type { Metadata } from "next";
import { PageShell } from "@/components/ui/page-shell";
import { Chip } from "@/components/ui/chip";
import { stackCategories, stackIntro } from "@/data/stack";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = { title: `Stack — ${profile.name}` };

export default function StackPage() {
  return (
    <PageShell title="tech stack" intro={stackIntro}>
      <div className="space-y-10">
        {stackCategories.map((cat) => (
          <section key={cat.name}>
            <Reveal as="header">
              <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
                {cat.name}
              </h2>
            </Reveal>
            <ul className="mt-4 flex flex-wrap gap-2">
              {cat.items.map((item, i) => (
                <Reveal as="li" key={item} delay={10 + i * 30}>
                  <Chip>{item}</Chip>
                </Reveal>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
