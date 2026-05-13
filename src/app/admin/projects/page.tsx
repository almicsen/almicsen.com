import { FileText, Image as ImageIcon, Link2, Package, Tags } from "lucide-react";

import { AdminEmptyState } from "@/components/admin/admin-empty-state";
import { AdminFieldList } from "@/components/admin/admin-field-list";
import { AdminPageShell } from "@/components/admin/admin-page-shell";
import { AdminSectionCard } from "@/components/admin/admin-section-card";
import { AdminStatCard } from "@/components/admin/admin-stat-card";
import { Button } from "@/components/ui/button";
import { getAllProjects } from "@/lib/cms/service";

export default function AdminProjectsPage() {
  const projects = getAllProjects();
  const featured = projects.filter((project) => project.featured).length;

  return (
    <AdminPageShell
      title="Projects"
      description="Project records are modeled for tags, categories, media links, visibility, status, collaborators, and external links."
      actions={
        <>
          <Button disabled size="sm" variant="accent">
            New project
          </Button>
          <Button disabled size="sm" variant="outline">
            Import links
          </Button>
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <AdminStatCard
          detail="All scaffolded records"
          icon={<Package className="h-4 w-4" aria-hidden="true" />}
          label="Records"
          value={String(projects.length)}
        />
        <AdminStatCard
          detail="Shown on public surfaces"
          icon={<FileText className="h-4 w-4" aria-hidden="true" />}
          label="Published"
          value={String(projects.filter((project) => project.visibility === "PUBLISHED").length)}
        />
        <AdminStatCard
          detail="Ready for homepage treatment"
          icon={<Tags className="h-4 w-4" aria-hidden="true" />}
          label="Featured"
          value={String(featured)}
        />
        <AdminStatCard
          detail="External media URLs supported"
          icon={<ImageIcon className="h-4 w-4" aria-hidden="true" />}
          label="Media mode"
          value="links"
        />
      </div>
      <div className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
        <AdminSectionCard
          description="The project editor should expose all modeled fields before real writes are enabled."
          icon={<Package className="h-5 w-5" aria-hidden="true" />}
          title="Modeled project fields"
          actionLabel="Open editor disabled"
        >
          <AdminFieldList
            items={[
              "Title and subtitle",
              "Long writeup",
              "Tags and categories",
              "Date and status",
              "Visibility state",
              "Featured flag",
              "Image URLs",
              "Video embeds",
              "PDF/document URLs",
              "GitHub link",
              "Credits/collaborators",
              "External links",
            ]}
          />
        </AdminSectionCard>
        <AdminEmptyState
          actionLabel="Create project disabled"
          description="CRUD belongs in the CMS activation phase. For now, project data remains typed, reviewable, and safe."
          icon={<Link2 className="h-5 w-5 text-accent" aria-hidden="true" />}
          title="Project write actions are disabled"
        />
      </div>
    </AdminPageShell>
  );
}
