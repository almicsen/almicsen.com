import { CategoryFilter } from "@/components/cms/category-filter";
import { ProjectCard } from "@/components/cms/project-card";
import { PageShell } from "@/components/layout/page-shell";
import { getProjectCategories, getPublicProjectsByCategory } from "@/lib/cms/service";

type ProjectsPageProps = {
  searchParams: Promise<{
    category?: string;
  }>;
};

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const { category } = await searchParams;
  const categories = getProjectCategories();
  const projects = getPublicProjectsByCategory(category);

  return (
    <PageShell
      eyebrow="Projects"
      title="Work that can be shown without pretending there are fake case studies."
      description="Structured project cards are backed by CMS-ready data so the page can move from sample content to real content cleanly."
      aside={
        <div className="quiet-panel rounded-lg border p-4 font-mono text-xs text-muted-foreground">
          {projects.length} public records
        </div>
      }
    >
      <div className="space-y-6">
        <CategoryFilter
          activeCategory={category}
          basePath="/projects"
          categories={categories}
          label="Project categories"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </PageShell>
  );
}
