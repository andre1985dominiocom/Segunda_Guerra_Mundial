import { BIBLIO, CONCLUSION } from "../data/wwii";
import { Section } from "./ui";

export default function Conclusion() {
  return (
    <Section
      id="conclusion"
      kicker="VIII · Síntesis"
      title={CONCLUSION.title}
      className="bg-ink-2/40"
    >
      <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr]">
        <div className="space-y-5">
          {CONCLUSION.paragraphs.map((p, i) => (
            <p key={i} className="serif text-[17px] leading-[1.8] text-slate-300">
              {p}
            </p>
          ))}
        </div>

        <aside className="space-y-6">
          <blockquote className="rounded-lg border border-gold/30 bg-gold/[0.06] p-6">
            <span className="serif block text-4xl leading-none text-gold/50">«</span>
            <p className="serif mt-2 text-lg leading-relaxed text-slate-100">{CONCLUSION.quote}</p>
            <footer className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-gold/70">
              Nota del autor
            </footer>
          </blockquote>

          <div className="rounded-lg border border-line p-6">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
              Para seguir leyendo
            </h3>
            <ul className="mt-4 space-y-2.5">
              {BIBLIO.map((b) => (
                <li key={b} className="flex gap-2.5 text-[13px] leading-relaxed text-slate-400">
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold/60" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 text-[12.5px] text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          Análisis histórico divulgativo · Segunda Guerra Mundial 1939–1945 · Fuentes: Núremberg, USHMM,
          literatura académica citada.
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.16em]">
          «Quien no conoce su historia está condenado a repetirla»
        </p>
      </div>
    </footer>
  );
}
