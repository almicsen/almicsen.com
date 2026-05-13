import { Globe2, LockKeyhole, Navigation, Settings } from "lucide-react";

import { AdminEmptyState } from "@/components/admin/admin-empty-state";
import { AdminFieldList } from "@/components/admin/admin-field-list";
import { AdminPageShell } from "@/components/admin/admin-page-shell";
import { AdminSectionCard } from "@/components/admin/admin-section-card";
import { AdminStatCard } from "@/components/admin/admin-stat-card";
import { Button } from "@/components/ui/button";

export default function AdminSettingsPage() {
  return (
    <AdminPageShell
      title="Site settings"
      description="Future settings can control metadata, navigation, feature defaults, and public launch toggles."
      actions={
        <>
          <Button disabled size="sm" variant="accent">
            Save settings
          </Button>
          <Button disabled size="sm" variant="outline">
            Preview metadata
          </Button>
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <AdminStatCard
          detail="Domain target"
          icon={<Globe2 className="h-4 w-4" aria-hidden="true" />}
          label="Site"
          value="almicsen"
        />
        <AdminStatCard
          detail="Public nav can be made editable"
          icon={<Navigation className="h-4 w-4" aria-hidden="true" />}
          label="Navigation"
          value="planned"
        />
        <AdminStatCard
          detail="Owner-only later"
          icon={<LockKeyhole className="h-4 w-4" aria-hidden="true" />}
          label="Settings access"
          value="locked"
        />
        <AdminStatCard
          detail="No secrets in UI"
          icon={<Settings className="h-4 w-4" aria-hidden="true" />}
          label="Env config"
          value="server"
        />
      </div>
      <div className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
        <AdminSectionCard
          description="Settings should control public presentation without exposing private owner details."
          icon={<Settings className="h-5 w-5" aria-hidden="true" />}
          title="Future editable settings"
          actionLabel="Open settings editor disabled"
        >
          <AdminFieldList
            items={[
              "Site title",
              "SEO description",
              "OpenGraph placeholders",
              "Navigation labels",
              "Launch flags",
              "Default content visibility",
              "Media provider selection",
              "Friend feature defaults",
            ]}
          />
        </AdminSectionCard>
        <AdminEmptyState
          actionLabel="Save disabled"
          description="Settings are intentionally read-only placeholders in v1 so no destructive or sensitive controls ship early."
          icon={<LockKeyhole className="h-5 w-5 text-accent" aria-hidden="true" />}
          title="No live settings writes"
        />
      </div>
    </AdminPageShell>
  );
}
