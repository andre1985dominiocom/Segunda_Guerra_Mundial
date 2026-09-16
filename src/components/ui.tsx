import type { ReactNode } from "react";
import { cn } from "../utils/cn";

export function Section({
  id,
  kicker,
  title,
  children,
  className,
}: {
  id: string;
  kicker?: string;
  title?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 border-t border-line/70 py-16 sm:py-24", className)}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {(kicker || title) && (
          <header className="mb-12">
            {kicker && (
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-gold/70" />
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold/90">{kicker}</span>
              </div>
            )}
            {title && (
              <h2 className="serif max-w-4xl text-3xl font-semibold leading-tight text-slate-100 sm:text-4xl md:text-[2.7rem]">
                {title}
              </h2>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

const FLAGS: Record<string, ReactNode> = {
  de: (
    <>
      <rect width="30" height="20" fill="#1a1a1a" />
      <rect y="6.66" width="30" height="6.66" fill="#f2f2f2" />
      <rect y="13.33" width="30" height="6.66" fill="#c1121f" />
    </>
  ),
  jp: (
    <>
      <rect width="30" height="20" fill="#f5f5f5" />
      <circle cx="15" cy="10" r="5.6" fill="#b31942" />
    </>
  ),
  it: (
    <>
      <rect width="10" height="20" fill="#008c45" />
      <rect x="10" width="10" height="20" fill="#f4f5f0" />
      <rect x="20" width="10" height="20" fill="#cd212a" />
    </>
  ),
  gb: (
    <>
      <rect width="30" height="20" fill="#012169" />
      <path d="M0 0l30 20M30 0L0 20" stroke="#fff" strokeWidth="4" />
      <path d="M0 0l30 20M30 0L0 20" stroke="#c8102e" strokeWidth="2" />
      <path d="M15 0v20M0 10h30" stroke="#fff" strokeWidth="6" />
      <path d="M15 0v20M0 10h30" stroke="#c8102e" strokeWidth="3" />
    </>
  ),
  us: (
    <>
      <rect width="30" height="20" fill="#f5f5f5" />
      {[0, 2, 4, 6, 8, 10, 12, 14, 16, 18].map((y) => (
        <rect key={y} y={y + 0.77} width="30" height="1.54" fill="#b31942" />
      ))}
      <rect width="13" height="10.77" fill="#0a3161" />
      {[0, 1, 2, 3, 4].map((r) =>
        [0, 1, 2, 3, 4, 5].map((c) => (
          <circle
            key={`${r}-${c}`}
            cx={1.8 + c * 2.1}
            cy={1.7 + r * 1.9}
            r={0.55}
            fill="#fff"
          />
        )),
      )}
    </>
  ),
  su: (
    <>
      <rect width="30" height="20" fill="#c8102e" />
      <path d="M7 12.6l2.5-4.9 2.6 4.9z" fill="none" stroke="#facc15" strokeWidth="1.1" />
      <circle cx="13.4" cy="6.6" r="1.7" fill="none" stroke="#facc15" strokeWidth="1.1" />
      <path d="M14.6 8.4l6-3.4" stroke="#facc15" strokeWidth="1.1" />
    </>
  ),
  fr: (
    <>
      <rect width="10" height="20" fill="#002395" />
      <rect x="10" width="10" height="20" fill="#f4f5f0" />
      <rect x="20" width="10" height="20" fill="#ed2939" />
    </>
  ),
  cn: (
    <>
      <rect width="30" height="20" fill="#ee1c25" />
      <rect width="15" height="10" fill="#0a4da3" />
      <circle cx="7.5" cy="5" r="2.2" fill="#fff" />
    </>
  ),
  sat: (
    <>
      <rect width="30" height="20" fill="#2b2f36" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={i * 6 + 1} width="3" height="20" fill="#5b6472" opacity="0.6" />
      ))}
    </>
  ),
  cob: (
    <>
      <rect width="30" height="20" fill="#23272e" />
      <circle cx="15" cy="10" r="4" fill="none" stroke="#7b8794" strokeWidth="1.2" strokeDasharray="2 2" />
    </>
  ),
  all: (
    <>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x={i * 5} width="5" height="20" fill={["#012169", "#c8102e", "#f5f5f5", "#0a4da3", "#002395", "#cd212a"][i]} />
      ))}
    </>
  ),
};

export function Flag({ code, className }: { code: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 30 20"
      className={cn("h-4 w-6 shrink-0 rounded-[2px] ring-1 ring-black/40", className)}
      aria-hidden="true"
    >
      {FLAGS[code] ?? FLAGS.sat}
    </svg>
  );
}

export function StatCard({
  value,
  label,
  note,
}: {
  value: string;
  label: string;
  note: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-line bg-ink-2/80 p-5 transition hover:border-gold/50">
      <div className="serif text-3xl font-semibold text-gold sm:text-4xl">{value}</div>
      <div className="mt-1 text-sm font-medium uppercase tracking-wide text-slate-200">{label}</div>
      <p className="mt-2 text-[13px] leading-relaxed text-slate-500">{note}</p>
    </div>
  );
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="relative rounded-lg border border-gold/30 bg-gold/[0.06] p-5 sm:p-6">
      <span className="absolute left-0 top-0 h-full w-[3px] bg-gold/70" />
      <div className="serif text-lg leading-relaxed text-slate-200">{children}</div>
    </div>
  );
}
