"use client";

import { createElement, useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

type Tag = "div" | "li" | "section" | "ul" | "ol" | "header" | "article";

type Props = {
  children: ReactNode;
  as?: Tag;
  /** Stagger in ms. */
  delay?: number;
  className?: string;
  style?: CSSProperties;
};

/** Fades and lifts its children in once, the first time they scroll into view. */
export function Reveal({
  children,
  as = "div",
  delay = 0,
  className,
  style,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref,
      className,
      "data-reveal": "",
      "data-in": visible ? "" : undefined,
      style: { ...style, ["--reveal-delay" as string]: `${delay}ms` },
    },
    children,
  );
}

/** Capped stagger helper: step ms per item, never more than max items deep. */
export function stagger(i: number, step = 70, max = 6) {
  return Math.min(i, max) * step;
}
