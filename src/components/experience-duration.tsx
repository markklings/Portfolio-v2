"use client";

import { useEffect, useState } from "react";
import { formatDuration, monthsBetween } from "@/lib/dates";

export function ExperienceDuration({
  start,
  end,
}: {
  start: string;
  end?: string;
}) {
  const [duration, setDuration] = useState<string>("");

  useEffect(() => {
    setDuration(formatDuration(monthsBetween(start, end)));
  }, [start, end]);

  if (!duration) return null;

  return <>{duration}</>;
}
