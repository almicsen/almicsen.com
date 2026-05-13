import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Code2,
  FileText,
  Play,
  UsersRound,
} from "lucide-react";

import { PageShell } from "@/components/layout/page-shell";
import { ScoreMediaCard } from "@/components/scoresync/score-media-card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  getPublicProjectBySlug,
  getPublicProjects,
  getPublicScoreMediaForSlugs,
} from "@/lib/cms/service";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getPublicProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getPublicProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | almicsen projects`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getPublicProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const scoreMediaItems = getPublicScoreMediaForSlugs(project.scoreMediaSlugs);

  return (
    <PageShell
      eyebrow="Project detail"
      title={project.title}
      description={project.subtitle}
      aside={
        <div className="quiet-panel rounded-lg border p-4 text-xs leading-5 text-muted-foreground">
          <p className="font-mono text-accent">{project.status.toLowerCase().replaceAll("_", " ")}</p>
          <p className="mt-2">{project.visibility.toLowerCase().replaceAll("_", " ")} content</p>
        </div>
      }
    >
      <article className="space-y-8">
        <Link className={buttonVariants({ variant: "outline", size: "sm" })} href="/projects">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Projects
        </Link>

        <div className="quiet-panel rounded-lg border p-5">
          <div className="flex flex-wrap gap-2">
            {project.categories.map((category) => (
              <Badge key={category} variant="outline">
                {category}
              </Badge>
            ))}
            {project.featured ? <Badge variant="accent">Featured</Badge> : null}
          </div>
          <div className="mt-5 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-accent" aria-hidden="true" />
              {project.date}
            </span>
            <span className="inline-flex items-center gap-2">
              <UsersRound className="h-4 w-4 text-accent" aria-hidden="true" />
              {project.credits.join(", ")}
            </span>
          </div>
        </div>

        <div className="max-w-3xl space-y-5 text-base leading-8 text-muted-foreground">
          <p className="text-lg text-foreground">{project.description}</p>
          <p>{project.longWriteup}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span className="font-mono text-xs text-muted-foreground" key={tag}>
              #{tag}
            </span>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {project.documentUrls.map((href) => (
            <Link className={buttonVariants({ variant: "secondary" })} href={href} key={href}>
              <FileText className="h-4 w-4" aria-hidden="true" />
              Document
            </Link>
          ))}
          {project.videoEmbedUrls.map((href) => (
            <Link className={buttonVariants({ variant: "secondary" })} href={href} key={href}>
              <Play className="h-4 w-4" aria-hidden="true" />
              Video
            </Link>
          ))}
          {project.githubUrl ? (
            <a
              className={buttonVariants({ variant: "secondary" })}
              href={project.githubUrl}
              rel="noreferrer"
              target="_blank"
            >
              <Code2 className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          ) : null}
          {project.externalLinks.map((link) => (
            <Link className={buttonVariants({ variant: "outline" })} href={link.href} key={link.href}>
              {link.label}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          ))}
        </div>
        {scoreMediaItems.length > 0 ? (
          <section className="space-y-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-normal">Score media</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Project-linked ScoreSync previews use the same reusable framework as media and shop
                surfaces.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {scoreMediaItems.map((item) => (
                <ScoreMediaCard item={item} key={item.slug} />
              ))}
            </div>
          </section>
        ) : null}
      </article>
    </PageShell>
  );
}
