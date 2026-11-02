import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Reveal } from "@/components/reveal";

type Props = { index?: string; title: string; href?: string; linkLabel?: string };

export function SectionHeader({ index, title, href, linkLabel }: Props) {
  return (
    <Reveal className="flex items-baseline justify-between gap-4">
      <h2 className="font-mono text-sm text-muted">
        {index && <>{index} — </>}
        {title}
      </h2>
      {href && (
        <Link
          href={href}
          className="group inline-flex shrink-0 items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-soft transition-colors hover:text-fg"
        >
          {linkLabel}
          <FiArrowRight aria-hidden className="transition-transform duration-300 ease-out group-hover:translate-x-1" />
        </Link>
      )}
    </Reveal>
  );
}
