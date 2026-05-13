import Link from "next/link";
import { ArrowRight, ArrowUpRight, CalendarDays } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/lib/cms/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="polished-card group">
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {project.categories.map((category) => (
              <Badge key={category} variant="outline">
                {category}
              </Badge>
            ))}
            <Badge variant={project.status === "SHIPPED" ? "accent" : "secondary"}>
              {project.status.replaceAll("_", " ").toLowerCase()}
            </Badge>
          </div>
          <span className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
            {project.date}
          </span>
        </div>
        <CardTitle className="leading-tight transition-colors group-hover:text-accent">
          {project.title}
        </CardTitle>
        <p className="text-sm text-muted-foreground">{project.subtitle}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span className="font-mono text-xs text-muted-foreground" key={tag}>
              #{tag}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            className={buttonVariants({ variant: "accent", size: "sm" })}
            href={`/projects/${project.slug}`}
          >
            Details
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          {project.externalLinks[0] ? (
            <Link
              className="inline-flex min-h-9 items-center gap-2 text-sm font-medium text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              href={project.externalLinks[0].href}
            >
              {project.externalLinks[0].label}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}
