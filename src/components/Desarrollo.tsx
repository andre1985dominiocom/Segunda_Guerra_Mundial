import { useState } from "react";
import { PHASES } from "../data/wwii";
import { Section } from "./ui";
import { cn } from "../utils/cn";

export default function Desarrollo() {
  const [active, setActive] = useState(0);
  const phase = PHASES[active];

  return (
    <Section
      id="desarrollo"
      kicker="III · El desarrollo del conflicto"
      title={
        <>
          Cómo se libró la guerra: <span className="text-gold">cuatro fases, dos océanos</span>
        </>
      }
    >
      {/* Phase selector */}
      <div className="relative mb-10">
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {PHASES.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(i)}
              className={cn(
                "group relative overflow-hidden rounded-lg border px-4 py-4 text-left transition",
                active === i
                  ? "border-gold/60 bg-gold/[0.08]"
                  : "border-line bg-ink-2/60 hover:border-slate-600",
              )}
            >
              <div
                className={cn(
                  "font-mono text-[11px] uppercase tracking-[0.16em]",
                  active === i ? "text-gold" : "text-slate-500",
                )}
              >
                {p.years}
              </div>
              <div className="serif mt-1 text-[17px] font-semibold text-slate-100">{p.title}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <h3 className="serif text-2xl font-semibold leading-snug text-slate-100 sm:text-[1.7rem]">
            {phase.headline}
          </h3>
          <p className="mt-5 text-[15px] leading-[1.75] text-slate-400">{phase.text}</p>

          <div className="mt-8 flex items-center gap-2">
            {PHASES.map((p, i) => (
              <button
                key={p.id}
                aria-label={p.title}
                onClick={() => setActive(i)}
                className={cn(
                  "h-1.5 flex-1 rounded-full transition",
                  i <= active ? "bg-gold/80" : "bg-line",
                )}
              />
            ))}
          </div>
        </div>

        <ol className="relative space-y-5 border-l border-line pl-6">
          {phase.events.map((e) => (
            <li key={e.title} className="relative">
              <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-gold bg-ink" />
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-gold/90">
                {e.date}
              </div>
              <div className="serif mt-1 text-lg font-semibold text-slate-100">{e.title}</div>
              <p className="mt-1.5 text-[14px] leading-relaxed text-slate-400">{e.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
