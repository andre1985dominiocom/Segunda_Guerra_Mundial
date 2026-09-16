import { useEffect, useState } from "react";
import { cn } from "../utils/cn";

const LINKS = [
  { id: "inicio", label: "Inicio" },
  { id: "origenes", label: "Orígenes" },
  { id: "bandos", label: "Bandos" },
  { id: "desarrollo", label: "Desarrollo" },
  { id: "cronologia", label: "Cronología" },
  { id: "geografias", label: "Geografías" },
  { id: "consecuencias", label: "Consecuencias" },
  { id: "orden", label: "Nuevo orden" },
  { id: "conclusion", label: "Conclusión" },
];

export default function Nav() {
  const [active, setActive] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
      setScrolled(window.scrollY > 40);
      let current = LINKS[0].id;
      for (const l of LINKS) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= 120) current = l.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled ? "border-line bg-ink/95 backdrop-blur-md" : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#inicio" className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-gold/15 text-[13px] font-bold text-gold ring-1 ring-gold/40">
            39
          </span>
          <span className="serif text-sm font-semibold tracking-wide text-slate-200">
            Segunda Guerra Mundial
          </span>
        </a>
        <nav className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={cn(
                "rounded px-2.5 py-1.5 text-[12px] uppercase tracking-[0.12em] transition",
                active === l.id ? "text-gold" : "text-slate-500 hover:text-slate-300",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <span className="hidden font-mono text-[11px] text-slate-600 sm:block">1939 — 1945</span>
      </div>

      {/* Mobile: scrollable link strip */}
      <div className="flex gap-1 overflow-x-auto border-t border-line/60 px-4 pb-2 lg:hidden">
        {LINKS.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={cn(
              "whitespace-nowrap rounded px-2.5 py-1 text-[11px] uppercase tracking-[0.1em] transition",
              active === l.id ? "text-gold" : "text-slate-500",
            )}
          >
            {l.label}
          </a>
        ))}
      </div>

      <div className="h-[2px] w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-orange-500 via-gold to-gold/70 transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
    </header>
  );
}
