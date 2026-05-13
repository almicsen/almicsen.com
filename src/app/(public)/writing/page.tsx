import { CategoryFilter } from "@/components/cms/category-filter";
import { WritingCard } from "@/components/cms/writing-card";
import { PageShell } from "@/components/layout/page-shell";
import { getPublicWritingPostsByCategory, getWritingCategories } from "@/lib/cms/service";

type WritingPageProps = {
  searchParams: Promise<{
    category?: string;
  }>;
};

export default async function WritingPage({ searchParams }: WritingPageProps) {
  const { category } = await searchParams;
  const categories = getWritingCategories();
  const posts = getPublicWritingPostsByCategory(category);

  return (
    <PageShell
      eyebrow="Writing"
      title="A personal writing area with enough structure to become a real archive."
      description="Posts support categories, tags, series, visibility states, and future friend-authored work."
      aside={
        <div className="quiet-panel rounded-lg border p-4 font-mono text-xs text-muted-foreground">
          {posts.length} published samples
        </div>
      }
    >
      <div className="space-y-6">
        <CategoryFilter
          activeCategory={category}
          basePath="/writing"
          categories={categories}
          label="Writing categories"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {posts.map((post) => (
            <WritingCard basePath="/writing" key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </PageShell>
  );
}
