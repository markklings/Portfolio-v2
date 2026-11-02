"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      suppressHydrationWarning
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-bg/80 text-soft backdrop-blur transition-[color,background-color,border-color,scale] duration-300 hover:bg-card hover:text-fg active:scale-90"
    >
      {mounted && (
        <span
          key={isDark ? "sun" : "moon"}
          className="icon-swap inline-flex transition-transform duration-500 group-hover:rotate-12"
        >
          {isDark ? <FiSun size={16} aria-hidden /> : <FiMoon size={16} aria-hidden />}
        </span>
      )}
    </button>
  );
}
