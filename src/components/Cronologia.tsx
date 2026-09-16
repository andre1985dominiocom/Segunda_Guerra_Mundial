import { useMemo, useState } from "react";
import { TIMELINE, type Theater } from "../data/wwii";
import { Section } from "./ui";
import { cn } from "../utils/cn";

const FILTERS: (Theater | "Todo")[] = ["Todo", "Europa", "Pacífico", "África", "Global"];

const COLOR: Record<string, string> = {
  Europa: "bg-orange-500",
  Pacífico: "bg-sky-500",
  "África": "bg-amber-500",
  Global: "bg-emerald-500",
};

export default function Cronologia() {
  const [filter, setFilter] = useState<Theater | "Todo">("Todo");
  const events = useMemo(
    () => (filter === "Todo" ? TIMELINE : TIMELINE.filter((e) => e.theater === filter)),
    [filter],
  );

  return (
    <Section
      id="cronologia"
      kicker="IV · Cronología comentada"
      title={
        <>
          Treinta hitos que explican <span className="text-gold">seis años</span>
        </>
      }
    >
      <div className="mb-10 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-[12px] uppercase tracking-[0.12em] transition",
              filter === f
                ? "border-gold/70 bg-gold/15 text-gold"
                : "border-line text-slate-500 hover:border-slate-600 hover:text-slate-300",
            )}
          >
            {f}
            <span className="ml-2 font-mono text-[10px] text-slate-600">
              {f === "Todo" ? TIMELINE.length : TIMELINE.filter((e) => e.theater === f).length}
            </span>
          </button>
        ))}
      </div>

      <div className="grid gap-x-12 gap-y-2 md:grid-cols-2">
        {events.map((e) => (
          <article key={e.date + e.title} className="group flex gap-4 border-b border-line/50 py-4">
            <div className="w-14 shrink-0 pt-0.5">
              <div className="serif text-xl font-semibold text-slate-300 transition group-hover:text-gold">
                {e.year}
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className={cn("h-1.5 w-1.5 rounded-full", COLOR[e.theater] ?? "bg-slate-400")} />
                <h4 className="serif text-[17px] font-semibold text-slate-100">{e.title}</h4>
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-600">
                  {e.theater} · {e.date}
                </span>
              </div>
              <p className="mt-1.5 text-[14px] leading-relaxed text-slate-400">{e.text}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
