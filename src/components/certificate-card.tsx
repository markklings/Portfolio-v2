import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import type { Certificate } from "@/data/certificates";
import { Logo } from "@/components/ui/logo";

type Props = { cert: Certificate; tilt?: number };

export function CertificateCard({ cert, tilt = 0 }: Props) {
  return (
    <div
      className="group flex h-full flex-col rounded-xl bg-halo p-1 transition-[translate,background-color] duration-300 ease-out hover:-translate-y-1"
      style={tilt ? { transform: `rotate(${tilt}deg)` } : undefined}
    >
      <div className="flex flex-1 flex-col items-center rounded-lg border border-line bg-card px-4 py-6 text-center transition-[border-color,background-color] duration-300 group-hover:border-line-strong">
        <span className="flex size-9 items-center justify-center rounded-lg border border-line bg-bg transition-transform duration-300 ease-out group-hover:scale-110">
          <Logo src={cert.logo} size={30} invertOnDark={cert.invertOnDark} />
        </span>
        <h3 className="mt-4 text-sm font-semibold leading-snug">
          {cert.title}
        </h3>
        <p className="mt-1.5 font-mono text-[10px] uppercase tracking-wider text-muted">
          {cert.issuer}
        </p>
        {cert.verifyUrl && (
          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Verify ${cert.title}`}
            className="group/verify mt-auto inline-flex items-center gap-1 pt-5 font-mono text-[10px] uppercase tracking-wider text-muted transition-colors duration-200 hover:text-fg"
          >
            <FiChevronLeft aria-hidden size={12} className="transition-transform duration-300 ease-out group-hover/verify:-translate-x-0.5" />
            Verify
            <FiChevronRight aria-hidden size={12} className="transition-transform duration-300 ease-out group-hover/verify:translate-x-0.5" />
          </a>
        )}
      </div>
    </div>
  );
}
