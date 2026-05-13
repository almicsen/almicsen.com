import type { ReactNode } from "react";

export function AdminPageShell({
  title,
  description,
  actions,
  children,
}: {
  title: string;
  description: string;
  actions?: ReactNode;
  children: ReactNode;
}) {
  return (
    <main className="flex flex-1 flex-col gap-8 p-5 lg:p-8">
      <section className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-2 font-mono text-xs uppercase text-accent">Admin</p>
          <h1 className="text-3xl font-semibold tracking-normal">{title}</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">{description}</p>
        </div>
        {actions ? <div className="flex flex-wrap gap-2">{actions}</div> : null}
      </section>
      {children}
    </main>
  );
}
