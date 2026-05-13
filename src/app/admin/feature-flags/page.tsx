import { Eye, Flag, ShieldCheck, ToggleLeft } from "lucide-react";

import { AdminEmptyState } from "@/components/admin/admin-empty-state";
import { AdminPageShell } from "@/components/admin/admin-page-shell";
import { AdminSectionCard } from "@/components/admin/admin-section-card";
import { AdminStatCard } from "@/components/admin/admin-stat-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getFeatureFlags } from "@/lib/cms/service";

export default function AdminFeatureFlagsPage() {
  const flags = getFeatureFlags();

  return (
    <AdminPageShell
      title="Feature flags"
      description="Flags are represented as structured data now and can move to database-backed editing later."
      actions={
        <>
          <Button disabled size="sm" variant="accent">
            New flag
          </Button>
          <Button disabled size="sm" variant="outline">
            Audit changes
          </Button>
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <AdminStatCard
          detail="Known keys"
          icon={<Flag className="h-4 w-4" aria-hidden="true" />}
          label="Flags"
          value={String(flags.length)}
        />
        <AdminStatCard
          detail="Currently enabled"
          icon={<ToggleLeft className="h-4 w-4" aria-hidden="true" />}
          label="Enabled"
          value={String(flags.filter((flag) => flag.enabled).length)}
        />
        <AdminStatCard
          detail="Visibility is modeled"
          icon={<Eye className="h-4 w-4" aria-hidden="true" />}
          label="Visibility"
          value="ready"
        />
        <AdminStatCard
          detail="No live toggles yet"
          icon={<ShieldCheck className="h-4 w-4" aria-hidden="true" />}
          label="Write safety"
          value="locked"
        />
      </div>
      <div className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="grid gap-5">
          {flags.map((flag) => (
            <Card className="polished-card" key={flag.key}>
              <CardHeader>
                <div className="flex flex-wrap gap-2">
                  <Badge variant={flag.enabled ? "accent" : "secondary"}>
                    {flag.enabled ? "enabled" : "disabled"}
                  </Badge>
                  <Badge variant="outline">
                    {flag.visibility.toLowerCase().replaceAll("_", " ")}
                  </Badge>
                </div>
                <CardTitle className="font-mono text-base">{flag.key}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{flag.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid content-start gap-5">
          <AdminEmptyState
            actionLabel="Toggle flag disabled"
            description="Database-backed toggles and audit history belong in a later phase."
            icon={<Flag className="h-5 w-5 text-accent" aria-hidden="true" />}
            title="Flag editor placeholder"
          />
          <AdminSectionCard
            description="Flag changes should be deliberate because they can hide pages, expose friend features, or affect public launch state."
            icon={<ShieldCheck className="h-5 w-5" aria-hidden="true" />}
            title="Flag safety rules"
          >
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Use owner/admin access only.</li>
              <li>Keep audit history when persistence is added.</li>
              <li>Prefer disabled or hidden defaults for friend-only features.</li>
            </ul>
          </AdminSectionCard>
        </div>
      </div>
    </AdminPageShell>
  );
}
