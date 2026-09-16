import { useState } from "react";
import { BANDOS } from "../data/wwii";
import { Flag, Section } from "./ui";
import { cn } from "../utils/cn";

export default function Bandos() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <Section
      id="bandos"
      kicker="II · Los beligerantes"
      title={
        <>
          Los bandos enfrentados: <span className="text-gold">quién luchó contra quién, y para qué</span>
        </>
      }
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {BANDOS.map((b) => {
          const isAxis = b.id === "eje";
          return (
            <div
              key={b.id}
              className={cn(
                "overflow-hidden rounded-xl border bg-ink-2/70",
                isAxis ? "border-axis/40" : "border-ally/40",
              )}
            >
              <div
                className={cn(
                  "border-b px-6 py-5",
                  isAxis ? "border-axis/30 bg-axis/[0.08]" : "border-ally/30 bg-ally/[0.08]",
                )}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "font-mono text-[11px] uppercase tracking-[0.2em]",
                      isAxis ? "text-orange-400" : "text-sky-400",
                    )}
                  >
                    {isAxis ? "Potencias del Eje" : "Potencias Aliadas"}
                  </span>
                </div>
                <h3 className="serif mt-1 text-3xl font-semibold text-slate-50">{b.name}</h3>
                <p className="mt-1 text-[13px] italic text-slate-500">{b.subtitle}</p>
              </div>

              <div className="space-y-6 px-6 py-6">
                <p className="text-[14.5px] leading-relaxed text-slate-300">{b.doctrine}</p>

                <div>
                  <h4 className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
                    Objetivos de guerra
                  </h4>
                  <ul className="space-y-2">
                    {b.objectives.map((o) => (
                      <li key={o} className="flex gap-3 text-[14px] leading-relaxed text-slate-400">
                        <span className={cn("mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full", isAxis ? "bg-axis" : "bg-ally")} />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
                    Estados integrantes
                  </h4>
                  <ul className="divide-y divide-line/70">
                    {b.members.map((m) => (
                      <li key={m.name}>
                        <button
                          onClick={() => setOpen(open === m.name ? null : m.name)}
                          className="flex w-full items-start gap-3 py-3 text-left transition hover:bg-white/[0.02]"
                        >
                          <Flag code={m.flag} className="mt-1" />
                          <span className="flex-1">
                            <span className="flex flex-wrap items-baseline gap-x-2">
                              <span className="text-[15px] font-semibold text-slate-200">{m.name}</span>
                              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-600">
                                {m.role}
                              </span>
                            </span>
                            <span className="mt-0.5 block font-mono text-[11px] text-slate-500">
                              {m.leader}
                            </span>
                          </span>
                          <span
                            className={cn(
                              "mt-1 text-slate-600 transition-transform",
                              open === m.name && "rotate-45 text-gold",
                            )}
                          >
                            +
                          </span>
                        </button>
                        {open === m.name && (
                          <p className="pb-3 pl-9 pr-6 text-[13.5px] leading-relaxed text-slate-400">
                            {m.note}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-8 max-w-3xl text-[13px] leading-relaxed text-slate-500">
        Nota del autor: el reparto entre «Eje» y «Aliados» oculta matices esenciales — Finlandia y
        Tailandia fueron co-beligerantes coyunturales, España se mantuvo «no beligerante» a pesar de
        la División Azul, y la coalición aliada incluyó imperios coloniales que combatían en nombre
        de la libertad mientras la negaban en sus posesiones. La historia militar exige simplificar;
        la historia política exige matizar.
      </p>
    </Section>
  );
}
