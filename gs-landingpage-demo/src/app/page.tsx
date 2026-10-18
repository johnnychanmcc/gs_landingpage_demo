import { FloatingRegister } from "@/components/floating-register";
import { RegisterForm } from "@/components/register-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SHOW, STATS, WHY_VISIT } from "@/lib/show";
import {
  BadgeCheck,
  Factory,
  Landmark,
  PackageCheck,
  Sparkles,
} from "lucide-react";

const WHY_ICONS = [
  PackageCheck,
  BadgeCheck,
  Factory,
  Landmark,
  Sparkles,
] as const;

export default function Home() {
  return (
    <div id="top" className="min-h-full bg-white pb-24 text-[#222] md:pb-8">
      <SiteHeader />

      <section className="relative overflow-hidden bg-[#1a1a1a] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=1800&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-[#E30613]/35" />
        <div className="relative mx-auto max-w-[1120px] px-4 py-16 md:py-24">
          <p className="text-xs font-bold tracking-[0.18em] text-[#E30613] uppercase">
            Trade buyers · {SHOW.venue}
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight md:text-5xl md:leading-[1.15]">
            Source Asia in one Hong Kong trip
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            Meet verified factories. Inspect shelf-ready products. Register now
            for free trade-buyer admission.
          </p>
          <p className="mt-5 text-sm font-semibold text-white">{SHOW.dates}</p>
          <a
            href="#register"
            className="mt-8 inline-flex h-12 items-center rounded-[2px] bg-[#E30613] px-7 text-sm font-bold tracking-wide text-white uppercase hover:bg-[#c20510]"
          >
            Register now — free for trade buyers
          </a>
        </div>
      </section>

      <section id="why" className="scroll-mt-20 bg-white">
        <div className="mx-auto max-w-[1120px] px-4 py-12 md:py-14">
          <p className="text-xs font-bold tracking-[0.16em] text-[#E30613] uppercase">
            Why visit
          </p>
          <h2 className="mt-2 text-2xl font-bold md:text-3xl">
            Why Global Sources Hong Kong Shows?
          </h2>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {WHY_VISIT.map((title, index) => {
              const Icon = WHY_ICONS[index];
              return (
                <li
                  key={title}
                  className="border border-neutral-200 bg-white p-4"
                >
                  <span className="inline-flex size-9 items-center justify-center bg-[#E30613] text-white">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  <h3 className="mt-3 text-[15px] leading-snug font-bold">
                    {title}
                  </h3>
                </li>
              );
            })}
          </ol>
          <dl className="mt-8 grid grid-cols-2 gap-px bg-neutral-200 md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="bg-[#1a1a1a] px-4 py-5 text-center">
                <dt className="text-2xl font-bold text-white md:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs font-semibold tracking-wide text-[#E30613] uppercase">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="phases" className="scroll-mt-20 bg-[#f6f6f6]">
        <div className="mx-auto max-w-[1120px] px-4 py-12 md:py-14">
          <p className="text-xs font-bold tracking-[0.16em] text-[#E30613] uppercase">
            Two phases · one trip
          </p>
          <h2 className="mt-2 text-2xl font-bold md:text-3xl">
            Choose the shows that match your line
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {SHOW.phases.map((phase) => (
              <article
                key={phase.id}
                className="border border-neutral-200 bg-[#fafafa] p-6"
              >
                <p className="text-xs font-bold tracking-[0.14em] text-[#E30613] uppercase">
                  {phase.label}
                </p>
                <h3 className="mt-1 text-xl font-bold">{phase.dates}</h3>
                <p className="mt-5 text-[11px] font-bold tracking-[0.12em] text-[#888] uppercase">
                  Shows
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {(phase.showNames ?? []).map((name) => (
                    <li
                      key={name}
                      className="bg-[#E30613] px-3 py-1.5 text-sm font-semibold text-white"
                    >
                      {name}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-[11px] font-bold tracking-[0.12em] text-[#888] uppercase">
                  Product categories
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {(phase.productCategories ?? []).map((category) => (
                    <li
                      key={category}
                      className="bg-white px-3 py-1.5 text-sm font-medium text-[#444] ring-1 ring-neutral-200"
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <a
            href="#register"
            className="mt-8 inline-flex h-11 items-center bg-[#E30613] px-6 text-sm font-bold text-white uppercase hover:bg-[#c20510]"
          >
            Register for Phase 1, Phase 2, or both
          </a>
        </div>
      </section>

      <section id="register" className="scroll-mt-20 bg-white">
        <div className="mx-auto grid max-w-[1120px] gap-10 px-4 py-14 md:grid-cols-[1fr_1.15fr] md:py-16">
          <div>
            <p className="text-xs font-bold tracking-[0.16em] text-[#E30613] uppercase">
              Buyer registration
            </p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">
              Register for the shows
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#666]">
              Same questions as the official Global Sources visitor form. After
              Submit, you finish on globalsources.com. We do not store your
              details here.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-[#444]">
              <li>— Trade buyers, age 18+</li>
              <li>— Choose the shows you will visit</li>
              <li>— Free entry with advance registration</li>
            </ul>
          </div>
          <div className="border border-neutral-200 bg-white p-5 md:p-7">
            <RegisterForm />
          </div>
        </div>
      </section>

      <SiteFooter />
      <FloatingRegister />
    </div>
  );
}
