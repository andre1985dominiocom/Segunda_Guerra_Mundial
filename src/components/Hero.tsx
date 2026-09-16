import { HERO, STATS } from "../data/wwii";
import { StatCard } from "./ui";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="bg-radial-fade absolute inset-0" aria-hidden="true" />

      {/* Decorative schematic: front advances */}
      <svg
        className="pointer-events-none absolute -right-10 top-24 hidden h-[520px] w-[520px] opacity-[0.28] lg:block"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="200" cy="200" r="160" stroke="#d8a94a" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="120" stroke="#d8a94a" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="80" stroke="#d8a94a" strokeWidth="0.5" />
        <path
          className="animate-draw"
          d="M40 320 C 110 300, 150 210, 200 150 S 320 90, 370 70"
          stroke="#d8a94a"
          strokeWidth="1.6"
        />
        <path d="M352 62 L372 69 L362 80" stroke="#d8a94a" strokeWidth="1.6" fill="none" />
        <path
          className="animate-draw"
          d="M50 110 C 120 150, 140 250, 210 280 S 330 300, 360 340"
          stroke="#c2410c"
          strokeWidth="1.2"
          strokeDasharray="6 6"
        />
        {[
          [200, 40],
          [360, 200],
          [200, 360],
          [40, 200],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="2.5" fill="#d8a94a" />
        ))}
      </svg>

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-24">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-10 bg-gold/70" />
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-gold/90">
            {HERO.kicker}
          </span>
        </div>

        <h1 className="serif max-w-4xl text-5xl font-semibold leading-[1.03] tracking-tight text-slate-50 sm:text-6xl md:text-7xl">
          {HERO.title}
        </h1>

        <p className="mt-7 max-w-3xl text-lg leading-relaxed text-slate-400 sm:text-xl">
          {HERO.subtitle}
        </p>

        <div className="mt-10 grid gap-8 border-l-2 border-gold/40 pl-6 sm:pl-8 md:grid-cols-[1fr_auto] md:items-end">
          <p className="serif max-w-2xl text-[17px] leading-relaxed text-slate-300">{HERO.intro}</p>
          <div className="font-mono text-[11px] uppercase leading-6 tracking-[0.18em] text-slate-600">
            <div>1 sep 1939 · Invasión de Polonia</div>
            <div>2 sep 1945 · Rendición de Japón</div>
            <div className="text-gold/80">2.194 días de guerra total</div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <StatCard key={s.label} value={s.value} label={s.label} note={s.note} />
          ))}
        </div>
      </div>
    </section>
  );
}
