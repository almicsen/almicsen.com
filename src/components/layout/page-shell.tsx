import type { ReactNode } from "react";

export function PageShell({
  eyebrow,
  title,
  description,
  aside,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <section className="grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(18rem,0.22fr)] lg:items-end">
        <div className="max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase text-accent">{eyebrow}</p>
          <h1 className="text-4xl font-semibold tracking-normal text-foreground sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-base leading-8 text-muted-foreground sm:text-lg">{description}</p>
        </div>
        {aside ? <div className="lg:justify-self-end">{aside}</div> : null}
      </section>
      {children}
    </main>
  );
}
