import Link from "next/link";
import { ArrowRight, CircleDot, Sparkles } from "lucide-react";

import { ProjectCard } from "@/components/cms/project-card";
import { MotionSection } from "@/components/layout/motion-section";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getFeaturedProjects, getPublicWritingPosts } from "@/lib/cms/service";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const writing = getPublicWritingPosts().slice(0, 2);

  return (
    <main className="flex flex-1 flex-col">
      <MotionSection className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-6xl content-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.12fr_0.88fr] lg:px-8">
        <section className="flex flex-col justify-center">
          <Badge className="mb-6 w-fit" variant="outline">
            almicsen.com v1 foundation
          </Badge>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-normal text-foreground sm:text-6xl lg:text-7xl">
            I build creative digital things, but this site ain&apos;t one of them.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Projects, writing, experiments, and the occasional questionable Easter egg.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className={buttonVariants({ variant: "accent", size: "lg" })} href="/projects">
              View projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link className={buttonVariants({ variant: "outline", size: "lg" })} href="/friends">
              Corner of Friends
            </Link>
          </div>
        </section>
        <aside className="grid content-end gap-4 lg:pb-8">
          <div className="polished-card relative overflow-hidden rounded-lg border p-5">
            <div className="absolute right-4 top-4 h-20 w-20 rounded-full border border-accent/20" />
            <div className="absolute right-10 top-10 h-8 w-8 rounded-full bg-accent/20 blur-md" />
            <Sparkles className="relative h-6 w-6 text-accent" aria-hidden="true" />
            <p className="relative mt-4 text-sm leading-6 text-muted-foreground">
              Built as a platform foundation: public pages now, CMS and friend-only systems later.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {["Projects", "Writing", "Shop links", "Admin shell"].map((item) => (
              <div className="quiet-panel rounded-lg border p-4" key={item}>
                <CircleDot className="mb-3 h-4 w-4 text-accent" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </aside>
      </MotionSection>

      <section className="border-t bg-background/40">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
          {writing.map((post) => (
            <Card className="polished-card" key={post.slug}>
              <CardContent className="space-y-3 p-5">
                <Badge variant="outline">{post.category}</Badge>
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-sm leading-6 text-muted-foreground">{post.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
