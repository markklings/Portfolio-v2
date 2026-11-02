"use client";

import { useState } from "react";
import { Chip } from "@/components/ui/chip";

/** Shows the first few skills; the dashed chip expands the rest. */
export function SkillList({ skills, visible = 2 }: { skills: string[]; visible?: number }) {
  const [open, setOpen] = useState(false);
  const hidden = skills.length - visible;
  const shown = open ? skills : skills.slice(0, visible);

  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {shown.map((s, i) => (
        <li
          key={s}
          className={i >= visible ? "chip-in" : undefined}
          style={i >= visible ? { ["--d" as string]: `${(i - visible) * 40}ms` } : undefined}
        >
          <Chip>{s}</Chip>
        </li>
      ))}
      {hidden > 0 && (
        <li>
          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="inline-flex items-center rounded-md border border-dashed border-line-strong px-2.5 py-1.5 font-mono text-xs leading-none text-muted transition-[color,border-color,scale] duration-200 hover:border-muted hover:text-fg active:scale-95"
          >
            {open ? "show less" : `+${hidden} skills`}
          </button>
        </li>
      )}
    </ul>
  );
}
