import { FaApple, FaGooglePlay } from "react-icons/fa";

type Props = { store: "app-store" | "google-play"; href: string };

export function StoreButton({ store, href }: Props) {
  const apple = store === "app-store";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={apple ? "Download on the App Store" : "Get it on Google Play"}
      className="inline-flex h-10 items-center gap-2 rounded-lg border border-line-strong bg-black px-3 text-white transition-[background-color,translate,scale] duration-200 ease-out hover:-translate-y-0.5 hover:bg-zinc-800 active:translate-y-0 active:scale-[0.97]"
    >
      {apple ? <FaApple size={20} aria-hidden /> : <FaGooglePlay size={16} aria-hidden />}
      <span className="flex flex-col text-left leading-none">
        <span className="text-[8px] font-medium tracking-wide">
          {apple ? "Download on the" : "GET IT ON"}
        </span>
        <span className="mt-0.5 text-[15px] font-semibold tracking-tight">
          {apple ? "App Store" : "Google Play"}
        </span>
      </span>
    </a>
  );
}
