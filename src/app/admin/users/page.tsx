import { Shield, UserCheck, Users } from "lucide-react";

import { AdminEmptyState } from "@/components/admin/admin-empty-state";
import { AdminFieldList } from "@/components/admin/admin-field-list";
import { AdminPageShell } from "@/components/admin/admin-page-shell";
import { AdminSectionCard } from "@/components/admin/admin-section-card";
import { AdminStatCard } from "@/components/admin/admin-stat-card";
import { Button } from "@/components/ui/button";

export default function AdminUsersPage() {
  return (
    <AdminPageShell
      title="Users and roles"
      description="Role scaffolding exists for owner, admin, editor, friend, member, and public access."
      actions={
        <>
          <Button disabled size="sm" variant="accent">
            Invite user
          </Button>
          <Button disabled size="sm" variant="outline">
            Review friends
          </Button>
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <AdminStatCard
          detail="Full control"
          icon={<Shield className="h-4 w-4" aria-hidden="true" />}
          label="Owner"
          value="1"
        />
        <AdminStatCard
          detail="Trusted helpers"
          icon={<UserCheck className="h-4 w-4" aria-hidden="true" />}
          label="Admin/Editor"
          value="ready"
        />
        <AdminStatCard
          detail="Manual approval later"
          icon={<Users className="h-4 w-4" aria-hidden="true" />}
          label="Friend role"
          value="ready"
        />
        <AdminStatCard
          detail="Default signed-in users"
          icon={<Users className="h-4 w-4" aria-hidden="true" />}
          label="Member role"
          value="ready"
        />
      </div>
      <div className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
        <AdminSectionCard
          description="Roles exist in schema and permission helpers. Real user management starts after provider-backed login is configured."
          icon={<Users className="h-5 w-5" aria-hidden="true" />}
          title="Role model"
          actionLabel="Change role disabled"
        >
          <AdminFieldList
            items={[
              "Owner: full control",
              "Admin: trusted helper",
              "Editor: content management",
              "Friend: friend-only features later",
              "Member: normal signed-in user",
              "Public/Guest: no account",
            ]}
          />
        </AdminSectionCard>
        <AdminEmptyState
          actionLabel="Invite disabled"
          description="User management stays placeholder-only until real Auth.js providers and persistence are connected."
          icon={<Shield className="h-5 w-5 text-accent" aria-hidden="true" />}
          title="No live user actions yet"
        />
      </div>
    </AdminPageShell>
  );
}
