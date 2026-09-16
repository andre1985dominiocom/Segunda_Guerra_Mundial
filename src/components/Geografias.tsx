import { Section } from "./ui";

const THEATERS = [
  {
    name: "Frente Oriental",
    scope: "URSS, Polonia, Balcanes (1941–45)",
    color: "text-orange-400",
    bar: "bg-orange-500",
    text: "El teatro decisivo: entre el 70 y el 75% de todas las bajas alemanas se produjeron aquí. 4 millones de soldados del Eje y 2,5 millones soviéticos se enfrentaron en un frente de 2.900 km; Stalingrado, Kursk y Bagration fueron sus batallas cardinales.",
  },
  {
    name: "Frente Occidental",
    scope: "Francia, Países Bajos, Alemania occidental (1944–45)",
    color: "text-sky-400",
    bar: "bg-sky-500",
    text: "Abierto tardíamente con Normandía, fue decisivo políticamente: sin él, Europa occidental habría quedado íntegramente en manos soviéticas. La Bolsa de Falaise (agosto de 1944) y el cruce del Rin (marzo de 1945) cerraron la pinza.",
  },
  {
    name: "La guerra naval y del Atlántico",
    scope: "Atlántico norte y Ártico (1939–45)",
    color: "text-emerald-400",
    bar: "bg-emerald-500",
    text: "La batalla más larga de la guerra: 5.000 buques mercantes hundidos por los U-Boot. Se ganó con convoyes, radar centimétrico, Ultra/Bletchley Park, grupos de escolta y la construcción masiva de Liberty Ships.",
  },
  {
    name: "La guerra aérea",
    scope: "Cielos de Europa y Japón (1940–45)",
    color: "text-amber-400",
    bar: "bg-amber-500",
    text: "De la Batalla de Inglaterra a los bombardeos de área (Hamburgo 1943, Dresde 1945) y la campaña de precisión sobre la industria del petróleo y del rodamiento. En el Pacífico, los B-29 y el bombardeo incendiario de Tokio (100.000 muertos).",
  },
  {
    name: "El Pacífico y Asia-Pacífico",
    scope: "China, Sureste asiático, islas, Japón (1937–45)",
    color: "text-violet-400",
    bar: "bg-violet-500",
    text: "Guerra anfibia de distancias oceánicas: Midway, Guadalcanal, Leyte, Iwo Jima, Okinawa. La estrategia de «salto de islas» de Nimitz y MacArthur combinó submarinos (que destruyeron la mitad de la marina mercante japonesa) y bloqueo.",
  },
  {
    name: "Mediterráneo y Norte de África",
    scope: "Libia, Egipto, Túnez, Italia (1940–45)",
    color: "text-rose-400",
    bar: "bg-rose-500",
    text: "El «vientre blando» de Europa según Churchill: El Alamein, Torch, Túnez, Sicilia y la península italiana. Fijó 60 divisiones alemanas lejos del este y costó a Italia su régimen y su imperio.",
  },
];

const CASUALTIES = [
  { country: "URSS", total: 27, note: "14% de su población de preguerra" },
  { country: "China", total: 18, note: "1937–45, en su inmensa mayoría civiles" },
  { country: "Alemania", total: 8, note: "Incluye 1,6 M de prisioneros muertos" },
  { country: "Polonia", total: 6, note: "17% de la población; 3 M de judíos" },
  { country: "Japón", total: 3.1, note: "2,1 M de militares y 1 M de civiles" },
  { country: "Yugoslavia", total: 1.7, note: "Guerra civil y ocupación múltiple" },
  { country: "Rumanía y Hungría", total: 1.4, note: "Satélites del Eje" },
  { country: "Francia", total: 0.6, note: "Más 200.000 en la resistencia y deportación" },
  { country: "Reino Unido", total: 0.45, note: "60.000 civiles por bombardeo" },
  { country: "Estados Unidos", total: 0.42, note: "Dos tercios en el Pacífico" },
  { country: "Italia", total: 0.45, note: "Incluye la guerra civil de 1943–45" },
];

export default function Geografias() {
  const max = Math.max(...CASUALTIES.map((c) => c.total));

  return (
    <Section
      id="geografias"
      kicker="V · Frentes y geografías"
      title={
        <>
          Seis guerras en una: <span className="text-gold">los teatros de operaciones</span>
        </>
      }
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {THEATERS.map((t) => (
          <article
            key={t.name}
            className="rounded-lg border border-line bg-ink-2/60 p-5 transition hover:border-gold/40"
          >
            <span className={`font-mono text-[10px] uppercase tracking-[0.18em] ${t.color}`}>
              {t.scope}
            </span>
            <h3 className="serif mt-2 text-xl font-semibold text-slate-100">{t.name}</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-slate-400">{t.text}</p>
          </article>
        ))}
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <h3 className="serif text-2xl font-semibold text-slate-100">
            Mortandad por país
          </h3>
          <p className="mt-3 max-w-md text-[14px] leading-relaxed text-slate-400">
            Estimaciones de muertos militares y civiles (en millones). Las cifras de la URSS, China y
            Polonia siguen siendo objeto de revisión historiográfica: el Holocausto y las hambrunas
            planificadas dificultan cualquier recuento cerrado.
          </p>
          <div className="mt-6 rounded-lg border border-gold/25 bg-gold/[0.05] p-5">
            <p className="text-[13.5px] leading-relaxed text-slate-300">
              <strong className="text-gold">Lectura del historiador:</strong> el mapa de la muerte no
              coincide con el mapa de la victoria. Los tres países que más sufrieron —URSS, China y
              Polonia— fueron también los que vieron su territorio ocupado, su población diezmada y su
              futuro negociado por otros en Yalta y Potsdam.
            </p>
          </div>
        </div>

        <ul className="space-y-2.5">
          {CASUALTIES.map((c) => (
            <li key={c.country} className="group">
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-[14px] font-medium text-slate-200">{c.country}</span>
                <span className="font-mono text-[12px] text-slate-500">
                  {c.total.toLocaleString("es-ES")} M
                </span>
              </div>
              <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-line/60">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-gold/90 transition-[width] duration-700"
                  style={{ width: `${(c.total / max) * 100}%` }}
                />
              </div>
              <div className="mt-1 text-[11.5px] text-slate-600">{c.note}</div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
