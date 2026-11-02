import { cn } from "@/lib/cn";

/** 5% side margins on mobile/tablet, 20% on laptop/desktop (lg and up). */
export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("w-full px-[5%] lg:px-[20%]", className)}>{children}</div>;
}
