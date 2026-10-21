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
    <div id="top" className="min-h-full bg-white pb-20 text-[#222] md:pb-6">
      <SiteHeader />

      <section className="relative overflow-hidden bg-[#1a1a1a] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=1400&q=70)",
          }}
        />
        <div className="absolute inset-0 bg-[#1a1a1a]/80" />
        <div className="hero-in relative mx-auto flex max-w-[1120px] flex-col gap-4 px-4 py-7 md:flex-row md:items-end md:justify-between md:py-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.14em] text-[#E30613] uppercase">
              {SHOW.venue}
            </p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight text-balance md:text-3xl">
              Source Asia in one Hong Kong trip
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/80">
              Open to all businesses. Meet verified factories, inspect
              shelf-ready products, and register for free admission.
            </p>
            <p className="mt-2 text-sm font-semibold">{SHOW.dates}</p>
          </div>
          <a
            href="#register"
            className="inline-flex h-10 shrink-0 items-center bg-[#E30613] px-5 text-sm font-bold tracking-wide text-white uppercase transition-colors duration-200 hover:bg-[#c20510]"
          >
            Register now
          </a>
        </div>
      </section>

      <section id="why" className="scroll-mt-20 bg-white">
        <div className="mx-auto max-w-[1120px] px-4 py-8">
          <h2 className="text-xl font-bold md:text-2xl">
            Why Global Sources Hong Kong Shows?
          </h2>
          <ol className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
            {WHY_VISIT.map((title, index) => {
              const Icon = WHY_ICONS[index];
              return (
                <li
                  key={title}
                  className="why-card border border-neutral-200 bg-white px-3 py-3"
                >
                  <span className="inline-flex size-7 items-center justify-center bg-[#E30613] text-white">
                    <Icon className="size-3.5" aria-hidden />
                  </span>
                  <h3 className="mt-2 text-[13px] leading-snug font-semibold">
                    {title}
                  </h3>
                </li>
              );
            })}
          </ol>
          <dl className="mt-5 grid grid-cols-2 gap-px bg-neutral-200 md:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#1a1a1a] px-3 py-3 text-center"
              >
                <dt className="text-xl font-bold text-white">{stat.value}</dt>
                <dd className="mt-0.5 text-[10px] font-semibold tracking-wide text-[#E30613] uppercase">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="phases" className="scroll-mt-20 bg-[#f6f6f6]">
        <div className="mx-auto max-w-[1120px] px-4 py-8">
          <h2 className="text-xl font-bold md:text-2xl">
            Choose the shows that match your line
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {SHOW.phases.map((phase) => (
              <article
                key={phase.id}
                className="phase-card border border-neutral-200 bg-white p-4"
              >
                <p className="text-[11px] font-bold tracking-[0.12em] text-[#E30613] uppercase">
                  {phase.label}
                </p>
                <h3 className="mt-0.5 text-base font-bold">{phase.dates}</h3>
                <p className="mt-3 text-[10px] font-bold tracking-[0.12em] text-[#888] uppercase">
                  Shows
                </p>
                <ul className="mt-1.5 flex flex-wrap gap-1.5">
                  {(phase.showNames ?? []).map((name) => (
                    <li
                      key={name}
                      className="bg-[#E30613] px-2 py-1 text-[12px] font-semibold text-white"
                    >
                      {name}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-[10px] font-bold tracking-[0.12em] text-[#888] uppercase">
                  Product categories
                </p>
                <ul className="mt-2 grid grid-cols-2 gap-1.5 sm:grid-cols-3">
                  {(phase.productCategories ?? []).map((category) => (
                    <li key={category.name} className="cat-tile relative h-16 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center opacity-45"
                        style={{
                          backgroundImage: `url(${category.image})`,
                        }}
                      />
                      <div className="absolute inset-0 bg-[#1a1a1a]/55" />
                      <p className="relative z-10 flex h-full items-center px-2 text-[11px] leading-snug font-semibold text-white">
                        {category.name}
                      </p>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="register" className="scroll-mt-20 bg-white">
        <div className="mx-auto grid max-w-[1120px] gap-8 px-4 py-10 md:grid-cols-[0.9fr_1.2fr]">
          <div>
            <h2 className="text-xl font-bold md:text-2xl">
              Register for the shows
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#555]">
              Same questions as the official Global Sources visitor form. After
              Submit, you finish on globalsources.com. We do not store your
              details here.
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-[#444]">
              <li>— Open to all businesses, age 18+</li>
              <li>— Choose the shows you will visit</li>
              <li>— Free entry with advance registration</li>
            </ul>
          </div>
          <div className="form-panel border border-neutral-200 bg-white p-5">
            <RegisterForm />
          </div>
        </div>
      </section>

      <SiteFooter />
      <FloatingRegister />
    </div>
  );
}
