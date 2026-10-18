import { GsLogo } from "@/components/gs-logo";
import { SHOW } from "@/lib/show";

const NAV = [
  { href: "#why", label: "Why visit" },
  { href: "#phases", label: "Shows" },
  { href: "#register", label: "Register" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white">
      <div className="h-[3px] w-full bg-[#E30613]" />
      <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-4 px-4 py-2.5">
        <a href="#top" className="min-w-0 shrink-0" aria-label={SHOW.name}>
          <GsLogo height={48} className="h-12 w-auto" />
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-700 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[#E30613]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#register"
          className="inline-flex h-11 items-center rounded-[2px] bg-[#E30613] px-5 text-sm font-bold tracking-wide text-white uppercase hover:bg-[#c20510]"
        >
          Register now
        </a>
      </div>
    </header>
  );
}
