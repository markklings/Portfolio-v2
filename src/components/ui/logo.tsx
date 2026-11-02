import Image from "next/image";
import { cn } from "@/lib/cn";

type LogoProps = {
  src: string;
  alt?: string;
  size?: number;
  invertOnDark?: boolean;
  className?: string;
};

/** Renders any image/SVG route from /public. Set invertOnDark for black logos. */
export function Logo({
  src,
  alt = "",
  size = 24,
  invertOnDark,
  className,
}: LogoProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      unoptimized
      className={cn("object-contain", invertOnDark && "dark:invert", className)}
      style={{ width: size, height: size }}
    />
  );
}
