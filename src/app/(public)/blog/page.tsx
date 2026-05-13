import { CategoryFilter } from "@/components/cms/category-filter";
import { WritingCard } from "@/components/cms/writing-card";
import { PageShell } from "@/components/layout/page-shell";
import { getPublicWritingPostsByCategory, getWritingCategories } from "@/lib/cms/service";

type BlogPageProps = {
  searchParams: Promise<{
    category?: string;
  }>;
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { category } = await searchParams;
  const categories = getWritingCategories();
  const posts = getPublicWritingPostsByCategory(category);

  return (
    <PageShell
      eyebrow="Blog"
      title="Dev logs, notes, and posts without fake thought-leader energy."
      description="The blog route uses the same writing model as the broader writing area, ready for filters and drafts later."
      aside={
        <div className="quiet-panel rounded-lg border p-4 font-mono text-xs text-muted-foreground">
          category-ready
        </div>
      }
    >
      <div className="space-y-6">
        <CategoryFilter
          activeCategory={category}
          basePath="/blog"
          categories={categories}
          label="Blog categories"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {posts.map((post) => (
            <WritingCard basePath="/blog" key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </PageShell>
  );
}
