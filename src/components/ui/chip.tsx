import Link from "next/link";

const base =
  "inline-flex items-center rounded-md border px-2.5 py-1.5 font-mono text-xs leading-none transition-[color,background-color,border-color,translate] duration-200 ease-out hover:-translate-y-px hover:border-muted";

export function Chip({ children }: { children: React.ReactNode }) {
  return <span className={`${base} border-line-strong bg-card text-fg`}>{children}</span>;
}

export function MoreChip({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`${base} border-dashed border-line-strong text-muted hover:text-fg`}
    >
      {children}
    </Link>
  );
}
