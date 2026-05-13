import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AdminSectionCard({
  title,
  description,
  icon,
  children,
  actionLabel,
}: {
  title: string;
  description: string;
  icon: ReactNode;
  children?: ReactNode;
  actionLabel?: string;
}) {
  return (
    <Card className="polished-card">
      <CardHeader>
        <CardTitle className="flex items-start gap-3">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border bg-secondary text-accent">
            {icon}
          </span>
          <span>
            <span className="block">{title}</span>
            <span className="mt-2 block text-sm font-normal leading-6 text-muted-foreground">
              {description}
            </span>
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        {children}
        {actionLabel ? (
          <Button disabled size="sm" variant="outline">
            {actionLabel}
          </Button>
        ) : null}
      </CardContent>
    </Card>
  );
}
