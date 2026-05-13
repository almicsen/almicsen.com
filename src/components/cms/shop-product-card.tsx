import { ExternalLink } from "lucide-react";

import { ScoreMediaCard } from "@/components/scoresync/score-media-card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { MediaItem, ShopProduct } from "@/lib/cms/types";

export function ShopProductCard({
  product,
  scoreMediaItems = [],
}: {
  product: ShopProduct;
  scoreMediaItems?: MediaItem[];
}) {
  return (
    <Card className="polished-card">
      <CardHeader>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">{product.sellerName}</Badge>
          <Badge>{product.status.toLowerCase().replaceAll("_", " ")}</Badge>
          {product.categories.map((category) => (
            <Badge key={category} variant="secondary">
              {category}
            </Badge>
          ))}
        </div>
        <CardTitle>{product.title}</CardTitle>
        <p className="text-sm text-muted-foreground">{product.subtitle}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{product.description}</p>
        <p className="font-mono text-xs text-accent">{product.priceDisplay}</p>
        <p className="rounded-md border border-accent/20 bg-accent/5 p-3 text-xs leading-5 text-muted-foreground">
          This opens a third-party seller. Checkout is handled off-site.
        </p>
        {scoreMediaItems.length > 0 ? (
          <div className="space-y-3">
            {scoreMediaItems.map((item) => (
              <ScoreMediaCard item={item} key={item.slug} />
            ))}
          </div>
        ) : null}
        <a
          className={buttonVariants({ variant: "accent", size: "sm" })}
          href={product.externalPurchaseUrl}
          rel="noreferrer"
          target="_blank"
        >
          Open seller site
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </CardContent>
    </Card>
  );
}
