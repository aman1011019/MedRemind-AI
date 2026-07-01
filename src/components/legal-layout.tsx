import type { ReactNode } from "react";

/* ─── Shared kicker badge ─── */
export function LegalKicker({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-[11px] tracking-widest uppercase text-muted-foreground mb-6">
      <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" /> {label}
    </div>
  );
}

/* ─── Legacy shim — keeps old routes that use <H> working ─── */
export function H({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-xl font-display font-semibold text-foreground mt-10 mb-3">
      {children}
    </h2>
  );
}

/* ─── Info block card ─── */
export function InfoBlock({
  number,
  title,
  icon,
  children,
}: {
  number: string | number;
  title: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="group glass-strong rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_0_40px_-8px_oklch(0.72_0.16_230/0.4)]">
      <div className="flex items-start gap-5">
        <div className="shrink-0 flex flex-col items-center gap-3">
          <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-sky-500/20 to-indigo-500/20 border border-white/10 flex items-center justify-center text-sky-400">
            {icon}
          </div>
          <span className="text-[10px] font-mono text-muted-foreground/50 tracking-widest">
            {String(number).padStart(2, "0")}
          </span>
        </div>
        <div className="min-w-0">
          <h3 className="font-display font-semibold text-foreground text-lg mb-3 leading-snug">
            {title}
          </h3>
          <div className="text-muted-foreground leading-relaxed space-y-2 text-sm sm:text-base">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── List item with dot ─── */
export function Li({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal shrink-0" />
      <span>{children}</span>
    </li>
  );
}

/* ─── Alert / warning banner ─── */
export function AlertBanner({
  icon,
  title,
  body,
  color = "amber",
}: {
  icon: ReactNode;
  title: string;
  body: string;
  color?: "amber" | "red" | "sky";
}) {
  const colors = {
    amber: "border-amber-500/30 bg-amber-500/10 text-amber-300",
    red: "border-red-500/30 bg-red-500/10 text-red-300",
    sky: "border-sky-500/30 bg-sky-500/10 text-sky-300",
  };
  return (
    <div className={`rounded-2xl border p-5 flex gap-4 items-start ${colors[color]}`}>
      <div className="shrink-0 mt-0.5">{icon}</div>
      <div>
        <div className="font-display font-semibold mb-1">{title}</div>
        <div className="text-sm opacity-90">{body}</div>
      </div>
    </div>
  );
}

/* ─── Full premium legal page layout ─── */
export function LegalLayout({
  title,
  kicker,
  headline,
  subheading,
  updatedDate,
  children,
}: {
  title: string;
  kicker: string;
  headline?: string;
  subheading?: string;
  updatedDate?: string;
  children: ReactNode;
}) {
  const displayHeadline = headline ?? title;
  return (
    <main className="relative min-h-screen">
      {/* ── Hero ── */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 aurora-bg opacity-50" />
        <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.72 0.16 230 / 0.18), transparent 70%)" }} />
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <LegalKicker label={kicker} />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight">
            <span className="text-gradient">{displayHeadline}</span>
          </h1>
          {subheading && (
            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {subheading}
            </p>
          )}
          {updatedDate && (
            <p className="mt-6 text-xs text-muted-foreground/50 tracking-wide uppercase">
              Last updated: {updatedDate}
            </p>
          )}
        </div>
      </section>

      {/* ── Content ── */}
      <section className="pb-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 space-y-6">
          {children}
        </div>
      </section>
    </main>
  );
}
