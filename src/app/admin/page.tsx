import Link from "next/link";
import { Flag, Package, PenLine, Settings, ShoppingBag, Users } from "lucide-react";

import { AdminPageShell } from "@/components/admin/admin-page-shell";
import { AdminSectionCard } from "@/components/admin/admin-section-card";
import { AdminStatCard } from "@/components/admin/admin-stat-card";
import { Button } from "@/components/ui/button";
import {
  getAllProjects,
  getAllShopProducts,
  getAllWritingPosts,
  getFeatureFlags,
} from "@/lib/cms/service";

export default function AdminDashboardPage() {
  const projects = getAllProjects();
  const posts = getAllWritingPosts();
  const products = getAllShopProducts();
  const flags = getFeatureFlags();

  return (
    <AdminPageShell
      title="Dashboard shell"
      description="A clean control surface for the future CMS. No fake revenue, fake users, or pretend analytics."
      actions={
        <>
          <Button disabled size="sm" variant="accent">
            New content
          </Button>
          <Button disabled size="sm" variant="outline">
            Review queue
          </Button>
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <AdminStatCard
          detail="Structured sample records"
          icon={<Package className="h-4 w-4" aria-hidden="true" />}
          label="Projects"
          value={String(projects.length)}
        />
        <AdminStatCard
          detail="Posts in the writing model"
          icon={<PenLine className="h-4 w-4" aria-hidden="true" />}
          label="Writing"
          value={String(posts.length)}
        />
        <AdminStatCard
          detail="External-link products"
          icon={<ShoppingBag className="h-4 w-4" aria-hidden="true" />}
          label="Shop"
          value={String(products.length)}
        />
        <AdminStatCard
          detail="Code-backed toggles"
          icon={<Flag className="h-4 w-4" aria-hidden="true" />}
          label="Flags"
          value={String(flags.length)}
        />
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        <AdminSectionCard
          description="Manage public project records, media links, statuses, and visibility when CRUD is activated."
          icon={<Package className="h-5 w-5" aria-hidden="true" />}
          title="Projects CMS area"
          actionLabel="Add project disabled"
        >
          <AdminDashboardLink href="/admin/projects" label="Open projects" />
        </AdminSectionCard>
        <AdminSectionCard
          description="Prepare drafts, categories, series, and future friend-authored posts."
          icon={<PenLine className="h-5 w-5" aria-hidden="true" />}
          title="Writing/blog CMS area"
          actionLabel="Create draft disabled"
        >
          <AdminDashboardLink href="/admin/writing" label="Open writing" />
        </AdminSectionCard>
        <AdminSectionCard
          description="External seller cards only. Checkout and order management remain out of scope."
          icon={<ShoppingBag className="h-5 w-5" aria-hidden="true" />}
          title="External shop CMS area"
          actionLabel="Add product disabled"
        >
          <AdminDashboardLink href="/admin/shop" label="Open shop" />
        </AdminSectionCard>
        <AdminSectionCard
          description="Placeholder structure for roles, feature flags, and safe site settings."
          icon={<Users className="h-5 w-5" aria-hidden="true" />}
          title="Operations"
        >
          <div className="flex flex-wrap gap-2">
            <AdminDashboardLink href="/admin/users" label="Users/Roles" />
            <AdminDashboardLink href="/admin/feature-flags" label="Feature Flags" />
            <AdminDashboardLink href="/admin/settings" label="Settings" />
          </div>
        </AdminSectionCard>
        <AdminSectionCard
          description="This is where launch metadata, navigation, and feature defaults can become editable later."
          icon={<Settings className="h-5 w-5" aria-hidden="true" />}
          title="Site controls"
          actionLabel="Edit settings disabled"
        />
      </div>
    </AdminPageShell>
  );
}

function AdminDashboardLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      className="inline-flex rounded-md border px-3 py-2 text-sm text-muted-foreground transition hover:bg-secondary hover:text-foreground"
      href={href}
    >
      {label}
    </Link>
  );
}
