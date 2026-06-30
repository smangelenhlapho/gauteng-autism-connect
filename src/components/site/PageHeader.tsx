import type { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
}

export function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <header className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-12 animate-reveal">
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] mb-6 text-ocean">
        {eyebrow}
      </p>
      <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-[0.95] tracking-tight text-balance text-navy max-w-4xl">
        {title}
      </h1>
      {intro ? (
        <p className="mt-8 text-base md:text-lg text-navy/70 max-w-2xl leading-relaxed">
          {intro}
        </p>
      ) : null}
    </header>
  );
}
