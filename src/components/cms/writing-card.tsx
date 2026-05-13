import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { WritingPost } from "@/lib/cms/types";

type WritingCardProps = {
  post: WritingPost;
  basePath?: string;
};

export function WritingCard({ post, basePath = "/writing" }: WritingCardProps) {
  return (
    <Card className="polished-card group">
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">{post.category}</Badge>
            {post.series ? <Badge>{post.series}</Badge> : null}
            {post.chapter ? <Badge variant="secondary">Chapter {post.chapter}</Badge> : null}
          </div>
          {post.publishedAt ? (
            <span className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground">
              <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
              {post.publishedAt}
            </span>
          ) : null}
        </div>
        <CardTitle className="transition-colors group-hover:text-accent">{post.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{post.subtitle}</p>
        <p className="text-sm leading-6">{post.body}</p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span className="font-mono text-xs text-muted-foreground" key={tag}>
              #{tag}
            </span>
          ))}
        </div>
        <Link
          className={buttonVariants({ variant: "accent", size: "sm" })}
          href={`${basePath}/${post.slug}`}
        >
          Read
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </CardContent>
    </Card>
  );
}
