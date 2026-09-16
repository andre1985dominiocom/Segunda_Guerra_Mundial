import { CONSEQUENCES } from "../data/wwii";
import { Section } from "./ui";

export default function Consecuencias() {
  return (
    <Section
      id="consecuencias"
      kicker="VI · Las consecuencias"
      title={
        <>
          El balance: <span className="text-gold">lo que la guerra dejó</span>
        </>
      }
      className="bg-ink-2/40"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {CONSEQUENCES.map((c) => (
          <article
            key={c.title}
            className="flex flex-col rounded-lg border border-line bg-ink/70 p-6 transition hover:border-gold/40"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-md border border-gold/30 bg-gold/10 text-lg text-gold">
                {c.icon}
              </span>
              <div>
                <h3 className="serif text-xl font-semibold text-slate-100">{c.title}</h3>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-gold/80">
                  {c.metric}
                </p>
              </div>
            </div>
            <p className="mt-4 text-[14.5px] leading-relaxed text-slate-400">{c.text}</p>
            <ul className="mt-4 space-y-1.5 border-t border-line/70 pt-4">
              {c.bullets.map((b) => (
                <li key={b} className="flex gap-2.5 text-[13px] leading-relaxed text-slate-500">
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold/60" />
                  {b}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
