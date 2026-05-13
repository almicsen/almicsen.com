import { ExternalLink, ShieldCheck, ShoppingBag, Tags } from "lucide-react";

import { AdminEmptyState } from "@/components/admin/admin-empty-state";
import { AdminFieldList } from "@/components/admin/admin-field-list";
import { AdminPageShell } from "@/components/admin/admin-page-shell";
import { AdminSectionCard } from "@/components/admin/admin-section-card";
import { AdminStatCard } from "@/components/admin/admin-stat-card";
import { Button } from "@/components/ui/button";
import { getAllShopProducts } from "@/lib/cms/service";

export default function AdminShopPage() {
  const products = getAllShopProducts();

  return (
    <AdminPageShell
      title="Shop"
      description="V1 shop management is for external purchase links only. No cart, checkout, taxes, refunds, or payment webhooks."
      actions={
        <>
          <Button disabled size="sm" variant="accent">
            New product
          </Button>
          <Button disabled size="sm" variant="outline">
            Check external links
          </Button>
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <AdminStatCard
          detail="External cards only"
          icon={<ShoppingBag className="h-4 w-4" aria-hidden="true" />}
          label="Products"
          value={String(products.length)}
        />
        <AdminStatCard
          detail="Checkout handled off-site"
          icon={<ExternalLink className="h-4 w-4" aria-hidden="true" />}
          label="Purchase flow"
          value="external"
        />
        <AdminStatCard
          detail="No payments in v1"
          icon={<ShieldCheck className="h-4 w-4" aria-hidden="true" />}
          label="Risk mode"
          value="low"
        />
        <AdminStatCard
          detail="Categories and tags modeled"
          icon={<Tags className="h-4 w-4" aria-hidden="true" />}
          label="Filtering"
          value="ready"
        />
      </div>
      <div className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
        <AdminSectionCard
          description="Product cards should remain honest about leaving the site for checkout."
          icon={<ShoppingBag className="h-5 w-5" aria-hidden="true" />}
          title="External product fields"
          actionLabel="Open product editor disabled"
        >
          <AdminFieldList
            items={[
              "Product title",
              "Subtitle",
              "Description",
              "Images",
              "Price display",
              "External purchase URL",
              "Seller/platform name",
              "Status",
              "Visibility",
              "Tags/categories",
              "Featured flag",
            ]}
          />
        </AdminSectionCard>
        <AdminEmptyState
          actionLabel="Add product disabled"
          description="No destructive or payment-related controls are available. Future checkout needs tax/order/refund planning first."
          icon={<ShieldCheck className="h-5 w-5 text-accent" aria-hidden="true" />}
          title="Checkout is intentionally absent"
        />
      </div>
    </AdminPageShell>
  );
}
