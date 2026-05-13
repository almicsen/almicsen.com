import { CalendarDays, PenLine, UserRound } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { WritingPost } from "@/lib/cms/types";

export function WritingPostDetail({ post }: { post: WritingPost }) {
  return (
    <article className="space-y-8">
      <div className="quiet-panel rounded-lg border p-5">
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">{post.category}</Badge>
          <Badge variant="secondary">{post.visibility.toLowerCase().replaceAll("_", " ")}</Badge>
          {post.series ? <Badge>{post.series}</Badge> : null}
          {post.chapter ? <Badge variant="secondary">Chapter {post.chapter}</Badge> : null}
        </div>
        <div className="mt-5 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
          <span className="inline-flex items-center gap-2">
            <UserRound className="h-4 w-4 text-accent" aria-hidden="true" />
            {post.authorName}
          </span>
          {post.publishedAt ? (
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-accent" aria-hidden="true" />
              {post.publishedAt}
            </span>
          ) : null}
          <span className="inline-flex items-center gap-2">
            <PenLine className="h-4 w-4 text-accent" aria-hidden="true" />
            {post.tags.join(", ")}
          </span>
        </div>
      </div>
      <div className="max-w-3xl space-y-5 text-base leading-8 text-muted-foreground">
        <p className="text-lg text-foreground">{post.subtitle}</p>
        <p>{post.body}</p>
      </div>
    </article>
  );
}
