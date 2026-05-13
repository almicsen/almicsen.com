import { BookOpen, FolderOpen, PenLine, Users } from "lucide-react";

import { AdminEmptyState } from "@/components/admin/admin-empty-state";
import { AdminFieldList } from "@/components/admin/admin-field-list";
import { AdminPageShell } from "@/components/admin/admin-page-shell";
import { AdminSectionCard } from "@/components/admin/admin-section-card";
import { AdminStatCard } from "@/components/admin/admin-stat-card";
import { Button } from "@/components/ui/button";
import { getAllWritingPosts } from "@/lib/cms/service";

export default function AdminWritingPage() {
  const posts = getAllWritingPosts();
  const categories = new Set(posts.map((post) => post.category));

  return (
    <AdminPageShell
      title="Writing"
      description="Writing supports drafts, published posts, private posts, unlisted posts, friend-only posts, categories, tags, series, and future friend authors."
      actions={
        <>
          <Button disabled size="sm" variant="accent">
            New draft
          </Button>
          <Button disabled size="sm" variant="outline">
            Manage categories
          </Button>
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <AdminStatCard
          detail="Structured sample posts"
          icon={<PenLine className="h-4 w-4" aria-hidden="true" />}
          label="Posts"
          value={String(posts.length)}
        />
        <AdminStatCard
          detail="Ready for filtering"
          icon={<FolderOpen className="h-4 w-4" aria-hidden="true" />}
          label="Categories"
          value={String(categories.size)}
        />
        <AdminStatCard
          detail="Series/chapter fields exist"
          icon={<BookOpen className="h-4 w-4" aria-hidden="true" />}
          label="Series-ready"
          value="yes"
        />
        <AdminStatCard
          detail="Friend authors planned"
          icon={<Users className="h-4 w-4" aria-hidden="true" />}
          label="Author model"
          value="ready"
        />
      </div>
      <div className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
        <AdminSectionCard
          description="The writing editor should feel closer to a quiet publishing desk than a noisy marketing CMS."
          icon={<PenLine className="h-5 w-5" aria-hidden="true" />}
          title="Writing editor shape"
          actionLabel="Open editor disabled"
        >
          <AdminFieldList
            items={[
              "Title and subtitle/dek",
              "Body content",
              "Category",
              "Tags",
              "Series field",
              "Chapter field",
              "Visibility state",
              "Published date",
              "Author name",
              "Future friend author",
            ]}
          />
        </AdminSectionCard>
        <AdminEmptyState
          actionLabel="Create draft disabled"
          description="Keep sample rendering separate from real publishing until auth, persistence, and draft saves are wired."
          icon={<BookOpen className="h-5 w-5 text-accent" aria-hidden="true" />}
          title="Draft actions are disabled"
        />
      </div>
    </AdminPageShell>
  );
}
