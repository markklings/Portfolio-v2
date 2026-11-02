import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { Container } from "@/components/container";

type Props = { title: string; intro: string; children: React.ReactNode };

/** Shared frame for the /projects, /certificates and /stack pages. */
export function PageShell({ title, intro, children }: Props) {
  return (
    <main className="overflow-x-clip pb-24">
      <Container className="pt-4">
        {/* h-9 + pt-4 lines the back button up with the fixed theme toggle */}
        <Link
          href="/"
          className="fade-in group inline-flex h-9 items-center gap-2 rounded-full border border-line bg-bg/80 pl-3 pr-4 font-mono text-xs text-soft backdrop-blur transition-[color,background-color,scale] duration-300 hover:bg-card hover:text-fg active:scale-95"
        >
          <FiArrowLeft aria-hidden size={14} className="transition-transform duration-300 ease-out group-hover:-translate-x-0.5" />
          back
        </Link>

        <header className="mt-16 md:mt-20">
          <h1 style={{ ["--d" as string]: "80ms" }} className="rise text-3xl font-normal tracking-tight md:text-4xl">{title}</h1>
          <p style={{ ["--d" as string]: "180ms" }} className="rise mt-6 max-w-[60ch] text-soft md:mt-8">{intro}</p>
        </header>

        <div className="mt-12 md:mt-14">{children}</div>
      </Container>
    </main>
  );
}
