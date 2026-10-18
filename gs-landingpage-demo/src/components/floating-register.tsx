"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export function FloatingRegister() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const section = document.getElementById("register");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(!entry.isIntersecting);
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  if (!show) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 p-3 md:inset-x-auto md:right-6 md:bottom-6 md:p-0">
      <a
        href="#register"
        className="register-pulse pointer-events-auto flex w-full items-center justify-between gap-4 rounded-[2px] bg-[#E30613] px-5 py-4 text-white shadow-[0_12px_40px_rgba(227,6,19,0.55)] hover:bg-[#c20510] md:w-auto md:min-w-[280px] md:justify-center"
      >
        <span className="text-left">
          <span className="block text-[11px] font-semibold tracking-[0.14em] uppercase opacity-90">
            Free for trade buyers
          </span>
          <span className="block text-lg font-bold leading-tight">
            Register now
          </span>
        </span>
        <ArrowRight className="size-6 shrink-0" aria-hidden />
      </a>
    </div>
  );
}
