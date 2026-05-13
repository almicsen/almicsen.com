import { CategoryFilter } from "@/components/cms/category-filter";
import { ShopProductCard } from "@/components/cms/shop-product-card";
import { PageShell } from "@/components/layout/page-shell";
import {
  getPublicScoreMediaForSlugs,
  getPublicShopProductsByCategory,
  getShopProductCategories,
} from "@/lib/cms/service";

type ShopPageProps = {
  searchParams: Promise<{
    category?: string;
  }>;
};

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const { category } = await searchParams;
  const categories = getShopProductCategories();
  const products = getPublicShopProductsByCategory(category);

  return (
    <PageShell
      eyebrow="Shop"
      title="External shop links only, no pretend checkout."
      description="V1 product cards can point to third-party sellers while making the off-site checkout boundary clear."
      aside={
        <div className="quiet-panel rounded-lg border p-4 font-mono text-xs text-muted-foreground">
          no checkout in v1
        </div>
      }
    >
      <div className="space-y-6">
        <CategoryFilter
          activeCategory={category}
          basePath="/shop"
          categories={categories}
          label="Shop categories"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {products.map((product) => (
            <ShopProductCard
              key={product.slug}
              product={product}
              scoreMediaItems={getPublicScoreMediaForSlugs(product.previewScoreMediaSlugs)}
            />
          ))}
        </div>
      </div>
    </PageShell>
  );
}
