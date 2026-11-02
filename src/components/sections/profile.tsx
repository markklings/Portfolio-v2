import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { profile } from "@/data/profile";

export function Profile() {
  const { name, photo, bio, socials } = profile;

  return (
    <section className="grid gap-8 md:grid-cols-2 md:items-center md:gap-10">
      <div className="photo-in group relative aspect-square w-full max-w-sm overflow-hidden rounded-sm md:max-w-none">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority
          unoptimized
          sizes="(min-width: 768px) 40vw, 90vw"
          className={
            photo.halftone
              ? "object-cover grayscale contrast-125 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              : "object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          }
        />
        {photo.halftone && (
          <div aria-hidden className="halftone absolute inset-0 group-hover:opacity-25" />
        )}
      </div>

      <div>
        <h1 style={{ ["--d" as string]: "150ms" }} className="rise font-mono text-4xl tracking-tight md:text-[2.5rem] md:leading-tight">
          {name}
        </h1>
        <div style={{ ["--d" as string]: "260ms" }} className="rise mt-6 space-y-5 text-soft">
          {bio.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <ul style={{ ["--d" as string]: "380ms" }} className="rise mt-6 flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                {...(s.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group/link inline-flex items-center gap-0.5 text-soft transition-colors duration-200 hover:text-fg"
              >
                {s.label}
                <FiArrowUpRight
                  aria-hidden
                  size={12}
                  className="transition-transform duration-300 ease-out group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
