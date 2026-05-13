import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { WritingPostDetail } from "@/components/cms/writing-post-detail";
import { PageShell } from "@/components/layout/page-shell";
import { buttonVariants } from "@/components/ui/button";
import { getPublicWritingPostBySlug, getPublicWritingPosts } from "@/lib/cms/service";

type WritingDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getPublicWritingPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: WritingDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPublicWritingPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | almicsen writing`,
    description: post.subtitle,
  };
}

export default async function WritingDetailPage({ params }: WritingDetailPageProps) {
  const { slug } = await params;
  const post = getPublicWritingPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <PageShell
      eyebrow="Writing"
      title={post.title}
      description={post.subtitle}
      aside={
        <div className="quiet-panel rounded-lg border p-4 font-mono text-xs text-muted-foreground">
          {post.category}
        </div>
      }
    >
      <div className="space-y-8">
        <Link className={buttonVariants({ variant: "outline", size: "sm" })} href="/writing">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Writing
        </Link>
        <WritingPostDetail post={post} />
      </div>
    </PageShell>
  );
}
