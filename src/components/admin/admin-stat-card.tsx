import type { ReactNode } from "react";

import { Card, CardContent } from "@/components/ui/card";

export function AdminStatCard({
  label,
  value,
  detail,
  icon,
}: {
  label: string;
  value: string;
  detail: string;
  icon: ReactNode;
}) {
  return (
    <Card className="quiet-panel">
      <CardContent className="flex items-start justify-between gap-4 p-4">
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="mt-2 font-mono text-2xl text-foreground">{value}</p>
          <p className="mt-2 text-xs leading-5 text-muted-foreground">{detail}</p>
        </div>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border bg-secondary text-accent">
          {icon}
        </span>
      </CardContent>
    </Card>
  );
}
