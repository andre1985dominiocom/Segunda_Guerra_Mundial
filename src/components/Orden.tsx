import { ORDER } from "../data/wwii";
import { Section } from "./ui";

const PILLARS = [
  {
    tag: "Seguridad colectiva",
    title: "Naciones Unidas (1945)",
    text: "51 Estados fundadores, Asamblea General y Consejo de Seguridad con cinco miembros permanentes y veto. Se crea para que las grandes potencias gestionen conjuntamente el orden, y fracasa como mecanismo de seguridad durante la Guerra Fría, pero sobrevive como foro de legitimidad y como marco del derecho internacional.",
    items: ["Consejo de Seguridad y veto de las cinco potencias", "Declaración Universal de DDHH (1948)", "Cascos azules y operaciones de paz desde 1948"],
  },
  {
    tag: "Orden económico",
    title: "Bretton Woods (1944)",
    text: "Tipos de cambio fijos, dólar convertible en oro, FMI, Banco Mundial y GATT (1947). El objetivo era evitar el retorno a las devaluaciones competitivas y al proteccionismo de los años treinta. El sistema duró hasta 1971, pero dejó una arquitectura financiera permanente.",
    items: ["FMI: estabilidad cambiaria y balanza de pagos", "BIRD/Banco Mundial: reconstrucción y desarrollo", "GATT → OMC: liberalización comercial multilateral"],
  },
  {
    tag: "Bipolaridad",
    title: "Bloques militares (1949–1955)",
    text: "La alianza de guerra se disuelve y se recompone en dos sistemas: la OTAN (1949) con garantía nuclear estadounidense, y el Pacto de Varsovia (1955) como respuesta soviética. Europa se convierte en el objeto, no en el sujeto, de la política mundial.",
    items: ["OTAN: 12 miembros en 1949, 16 en 1955", "Pacto de Varsovia tras el rearme de la RFA", "Doctrina de contención y equilibrio del terror"],
  },
];

const POWERS = [
  { label: "Producción industrial (1945)", a: "EE.UU. 50% del PIB mundial", b: "URSS: industria reconvertida al este" },
  { label: "Fuerzas armadas (1945)", a: "EE.UU.: 12 M, desmovilizados a 1,5 M en 1947", b: "URSS: 11 M, sin desmovilizar" },
  { label: "Arma nuclear", a: "1945 · monopolio hasta 1949", b: "1949 · RDS-1, ensayo en Semipalatinsk" },
  { label: "Modelo económico", a: "Mercado, Bretton Woods, Plan Marshall", b: "Planificación central y COMECON (1949)" },
  { label: "Esféra de influencia", a: "Europa occidental, Japón, Oceanía, América", b: "Europa oriental, Manchuria, Corea del Norte" },
];

export default function Orden() {
  return (
    <Section
      id="orden"
      kicker="VII · El orden mundial de posguerra"
      title={
        <>
          El mundo que nació en 1945: <span className="text-gold">instituciones, bloques y hegemonías</span>
        </>
      }
    >
      <p className="mb-12 max-w-3xl text-[15.5px] leading-relaxed text-slate-400">
        La posguerra no fue un retorno a la normalidad sino la creación acelerada de un sistema nuevo.
        En apenas cuatro años (1944–1949) se diseñó una arquitectura —política, económica y militar— que
        sigue siendo el esqueleto del orden internacional contemporáneo. Lo característico de ese
        sistema es su <em className="text-slate-300">doble naturaleza</em>: multilateral e
        institucional en su forma, profundamente jerárquico y bipolar en su funcionamiento real.
      </p>

      <div className="grid gap-4 lg:grid-cols-3">
        {PILLARS.map((p) => (
          <article key={p.title} className="rounded-lg border border-line bg-ink-2/60 p-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/80">
              {p.tag}
            </span>
            <h3 className="serif mt-2 text-xl font-semibold text-slate-100">{p.title}</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-slate-400">{p.text}</p>
            <ul className="mt-4 space-y-1.5 border-t border-line/70 pt-4">
              {p.items.map((i) => (
                <li key={i} className="flex gap-2.5 text-[13px] leading-relaxed text-slate-500">
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold/60" />
                  {i}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {/* Bipolarity comparison */}
      <div className="mt-16 overflow-hidden rounded-xl border border-line">
        <div className="grid grid-cols-2 border-b border-line bg-ink-2">
          <div className="border-r border-line px-5 py-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-sky-400">
              Bloque occidental
            </span>
            <h3 className="serif text-2xl font-semibold text-slate-50">Estados Unidos</h3>
          </div>
          <div className="px-5 py-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-orange-400">
              Bloque socialista
            </span>
            <h3 className="serif text-2xl font-semibold text-slate-50">Unión Soviética</h3>
          </div>
        </div>
        {POWERS.map((p, i) => (
          <div key={p.label} className={`grid grid-cols-2 ${i ? "border-t border-line/70" : ""}`}>
            <div className="border-r border-line/70 bg-sky-500/[0.04] px-5 py-3.5 text-[13.5px] leading-relaxed text-slate-300">
              {p.a}
            </div>
            <div className="bg-orange-500/[0.04] px-5 py-3.5 text-[13.5px] leading-relaxed text-slate-300">
              {p.b}
            </div>
          </div>
        ))}
        <div className="grid grid-cols-2 border-t border-line bg-ink-2/80 px-5 py-3">
          {POWERS.map((p) => (
            <div key={p.label} className="col-span-2 font-mono text-[10px] uppercase tracking-wider text-slate-600">
              ▸ {p.label}
            </div>
          ))}
        </div>
      </div>

      {/* Chronology of the new order */}
      <div className="mt-16">
        <h3 className="serif mb-8 text-2xl font-semibold text-slate-100">
          Cronología de la posguerra inmediata
        </h3>
        <ol className="relative space-y-8 border-l border-line pl-6 sm:pl-8">
          {ORDER.map((o) => (
            <li key={o.year + o.title} className="relative">
              <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-gold bg-ink sm:-left-[35px]" />
              <div className="mb-1 flex flex-wrap items-baseline gap-3">
                <span className="font-mono text-[12px] tracking-widest text-gold">{o.year}</span>
                <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-slate-500">
                  {o.tag}
                </span>
              </div>
              <h4 className="serif text-lg font-semibold text-slate-100">{o.title}</h4>
              <p className="mt-1.5 max-w-3xl text-[14.5px] leading-relaxed text-slate-400">{o.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
