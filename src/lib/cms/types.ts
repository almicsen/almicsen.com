import type { ScoreMedia } from "@/lib/scoresync/types";

export type Role = "OWNER" | "ADMIN" | "EDITOR" | "FRIEND" | "MEMBER" | "PUBLIC";

export type Visibility =
  | "DRAFT"
  | "PUBLISHED"
  | "PRIVATE"
  | "UNLISTED"
  | "FRIEND_ONLY"
  | "ADMIN_ONLY";

export type ProjectStatus = "IDEA" | "IN_PROGRESS" | "PAUSED" | "SHIPPED" | "ARCHIVED";
export type ProductStatus = "DRAFT" | "ACTIVE" | "SOLD_OUT" | "ARCHIVED";
export type MediaKind = "IMAGE" | "VIDEO" | "PDF" | "DOCUMENT" | "EMBED" | "EXTERNAL_LINK";

export type ExternalLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longWriteup: string;
  tags: string[];
  categories: string[];
  date: string;
  status: ProjectStatus;
  visibility: Visibility;
  featured: boolean;
  imageUrls: string[];
  videoEmbedUrls: string[];
  documentUrls: string[];
  githubUrl?: string;
  credits: string[];
  externalLinks: ExternalLink[];
  scoreMediaSlugs?: string[];
};

export type WritingPost = {
  slug: string;
  title: string;
  subtitle: string;
  body: string;
  category: string;
  tags: string[];
  series?: string;
  chapter?: number;
  visibility: Visibility;
  publishedAt?: string;
  authorName: string;
  scoreMediaSlugs?: string[];
};

export type ShopProduct = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrls: string[];
  priceDisplay?: string;
  externalPurchaseUrl: string;
  sellerName: string;
  status: ProductStatus;
  visibility: Visibility;
  tags: string[];
  categories: string[];
  featured: boolean;
  previewScoreMediaSlugs?: string[];
};

export type MediaItem = {
  slug: string;
  title: string;
  description: string;
  kind: MediaKind;
  url: string;
  embedUrl?: string;
  provider: string;
  visibility: Visibility;
  score?: ScoreMedia;
};

export type FeatureFlag = {
  key: string;
  name: string;
  description: string;
  enabled: boolean;
  visibility: Visibility;
};
