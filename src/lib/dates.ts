const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function parse(ym: string) {
  const [y, m] = ym.split("-").map(Number);
  return { y, m };
}

/** "2025-08", undefined -> "Aug 2025 - Present" */
export function formatPeriod(start: string, end?: string) {
  const s = parse(start);
  const from = `${MONTHS[s.m - 1]} ${s.y}`;
  if (!end) return `${from} - Present`;
  const e = parse(end);
  return `${from} - ${MONTHS[e.m - 1]} ${e.y}`;
}

/** Months counted inclusively, like LinkedIn. Pass referenceDate explicitly on client. */
export function monthsBetween(
  start: string,
  end?: string,
  referenceDate: Date = new Date(),
) {
  const s = parse(start);
  const e = end
    ? parse(end)
    : { y: referenceDate.getFullYear(), m: referenceDate.getMonth() + 1 };
  return Math.max(1, (e.y - s.y) * 12 + (e.m - s.m) + 1);
}

/** 14 -> "1 yr 2 mos" */
export function formatDuration(months: number) {
  const y = Math.floor(months / 12);
  const m = months % 12;
  const parts: string[] = [];
  if (y) parts.push(`${y} ${y === 1 ? "yr" : "yrs"}`);
  if (m) parts.push(`${m} ${m === 1 ? "mo" : "mos"}`);
  return parts.join(" ");
}
