import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AdminEmptyState({
  title,
  description,
  icon,
  actionLabel,
}: {
  title: string;
  description: string;
  icon: ReactNode;
  actionLabel?: string;
}) {
  return (
    <Card className="polished-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm leading-6 text-muted-foreground">{description}</p>
        {actionLabel ? (
          <Button disabled size="sm" variant="outline">
            {actionLabel}
          </Button>
        ) : null}
      </CardContent>
    </Card>
  );
}
