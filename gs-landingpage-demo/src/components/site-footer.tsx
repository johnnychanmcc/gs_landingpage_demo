import { GsLogo } from "@/components/gs-logo";
import { GS_HOME_URL, OFFICIAL_REGISTER_URL, SHOW } from "@/lib/show";

export function SiteFooter() {
  return (
    <footer className="bg-[#1a1a1a] text-neutral-300">
      <div className="mx-auto grid max-w-[1120px] gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <GsLogo height={56} className="h-14 w-auto" />
          <p className="mt-3 text-sm leading-relaxed">
            Connecting global buyers with verified Asian suppliers since 1971.
          </p>
        </div>
        <div>
          <p className="text-sm font-bold text-white">{SHOW.name}</p>
          <p className="mt-2 text-sm">
            {SHOW.dates}
            <br />
            {SHOW.venue}
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <a href={GS_HOME_URL} className="hover:text-white">
            globalsources.com
          </a>
          <a href={OFFICIAL_REGISTER_URL} className="hover:text-white">
            Official buyer registration
          </a>
          <a href="#why" className="hover:text-white">
            Why visit
          </a>
          <a href="#phases" className="hover:text-white">
            Phase 1 &amp; Phase 2
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-neutral-500">
        Independent buyer landing. Visual language follows globalsources.com.
        Open to all businesses. © 2026
      </div>
    </footer>
  );
}
