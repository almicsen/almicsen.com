import { ProjectCard } from "@/components/cms/project-card";
import { WritingCard } from "@/components/cms/writing-card";
import { PageShell } from "@/components/layout/page-shell";
import { Badge } from "@/components/ui/badge";
import { getCreativeWorkGroups } from "@/lib/cms/service";

export default function CreativeWorkPage() {
  const groups = getCreativeWorkGroups();

  return (
    <PageShell
      eyebrow="Creative work"
      title="Experiments, sketches, and digital things that do not need a corporate costume."
      description="A future home for visuals, prototypes, strange little web objects, and mixed-media work."
      aside={
        <div className="quiet-panel rounded-lg border p-4 font-mono text-xs text-muted-foreground">
          {groups.length} grouped sections
        </div>
      }
    >
      <div className="space-y-10">
        {groups.map((group) => (
          <section className="space-y-5" key={group.key}>
            <div className="max-w-2xl space-y-2">
              <h2 className="text-2xl font-semibold tracking-normal">{group.title}</h2>
              <p className="text-sm leading-6 text-muted-foreground">{group.description}</p>
            </div>
            {group.projects.length > 0 ? (
              <div className="grid gap-6 lg:grid-cols-2">
                {group.projects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            ) : null}
            {group.posts.length > 0 ? (
              <div className="grid gap-6 lg:grid-cols-2">
                {group.posts.map((post) => (
                  <WritingCard basePath="/writing" key={post.slug} post={post} />
                ))}
              </div>
            ) : null}
            {group.mediaItems.length > 0 ? (
              <div className="grid gap-3 sm:grid-cols-2">
                {group.mediaItems.map((item) => (
                  <a
                    className="quiet-panel rounded-lg border p-4 transition-colors hover:border-accent/50"
                    href={item.url}
                    key={item.slug}
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="outline">{item.kind}</Badge>
                      <Badge variant="secondary">{item.provider}</Badge>
                    </div>
                    <h3 className="mt-3 font-medium">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </a>
                ))}
              </div>
            ) : null}
          </section>
        ))}
      </div>
    </PageShell>
  );
}
