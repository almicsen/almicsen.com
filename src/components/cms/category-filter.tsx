import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CategoryFilterProps = {
  basePath: string;
  categories: string[];
  activeCategory?: string;
  label: string;
};

export function CategoryFilter({
  basePath,
  categories,
  activeCategory,
  label,
}: CategoryFilterProps) {
  return (
    <nav aria-label={label} className="flex flex-wrap gap-2">
      <Link
        className={cn(
          buttonVariants({ variant: activeCategory ? "outline" : "accent", size: "sm" }),
          "h-8",
        )}
        href={basePath}
      >
        All
      </Link>
      {categories.map((category) => {
        const isActive = category === activeCategory;
        const href = `${basePath}?category=${encodeURIComponent(category)}`;

        return (
          <Link
            className={cn(
              buttonVariants({ variant: isActive ? "accent" : "outline", size: "sm" }),
              "h-8",
            )}
            href={href}
            key={category}
          >
            {category}
          </Link>
        );
      })}
    </nav>
  );
}
