import { CAUSES, THESIS } from "../data/wwii";
import { Callout, Section } from "./ui";

export default function Origenes() {
  return (
    <Section
      id="origenes"
      kicker="I · Los orígenes"
      title={
        <>
          Por qué estalló: <span className="text-gold">la paz que no fue paz</span>
        </>
      }
    >
      <div className="grid gap-4 md:grid-cols-2">
        {THESIS.map((t) => (
          <article
            key={t.n}
            className="group relative rounded-lg border border-line bg-ink-2/70 p-6 transition hover:border-gold/40"
          >
            <span className="serif absolute right-5 top-3 text-5xl font-bold text-slate-700/30 transition group-hover:text-gold/20">
              {t.n}
            </span>
            <h3 className="serif text-xl font-semibold text-slate-100">{t.title}</h3>
            <p className="mt-3 text-[14.5px] leading-relaxed text-slate-400">{t.text}</p>
          </article>
        ))}
      </div>

      <div className="mt-14">
        <h3 className="serif mb-8 text-2xl font-semibold text-slate-200">
          La cadena causal (1919 – 1939)
        </h3>
        <ol className="relative space-y-8 border-l border-line pl-0 sm:pl-6">
          {CAUSES.map((c) => (
            <li key={c.year} className="relative sm:pl-8">
              <span className="absolute -left-[5px] top-2 hidden h-2.5 w-2.5 rounded-full border-2 border-gold bg-ink sm:block" />
              <div className="mb-1.5 flex flex-wrap items-baseline gap-3">
                <span className="font-mono text-[12px] tracking-widest text-gold">{c.year}</span>
                <h4 className="serif text-lg font-semibold text-slate-100">{c.title}</h4>
              </div>
              <p className="max-w-3xl text-[14.5px] leading-relaxed text-slate-400">{c.text}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-14">
        <Callout>
          «La Segunda Guerra Mundial no comenzó el 1 de septiembre de 1939: comenzó con la paz que
          se firmó en Versalles en 1919 y con la depresión que la destruyó en 1929. Todo lo demás
          fue la crónica de ese fracaso.»
        </Callout>
      </div>
    </Section>
  );
}
