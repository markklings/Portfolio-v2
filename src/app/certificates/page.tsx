import type { Metadata } from "next";
import { PageShell } from "@/components/ui/page-shell";
import { CertificateCard } from "@/components/certificate-card";
import { certificateGroups, certificatesIntro } from "@/data/certificates";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = { title: `Certificates — ${profile.name}` };

// Slight, repeating tilt per card
const tilts = [-1.6, 0.9, -0.7, 1.3];

export default function CertificatesPage() {
  return (
    <PageShell title="certifications" intro={certificatesIntro}>
      <div className="space-y-12">
        {certificateGroups.map((group) => (
          <section key={group.name}>
            <Reveal as="header">
              <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
                {group.name}
              </h2>
            </Reveal>
            <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((c, i) => (
                <Reveal as="li" key={c.title} delay={(i % 3) * 90}>
                  <CertificateCard cert={c} tilt={tilts[i % tilts.length]} />
                </Reveal>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
