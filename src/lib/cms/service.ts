import { mockCmsRepository } from "./repository";
import type { MediaItem, MediaKind, Project, Visibility, WritingPost } from "./types";

const publicListingVisibility: Visibility[] = ["PUBLISHED"];
const publicDirectVisibility: Visibility[] = ["PUBLISHED", "UNLISTED"];

export type CreativeWorkGroup = {
  key: string;
  title: string;
  description: string;
  projects: Project[];
  posts: WritingPost[];
  mediaItems: MediaItem[];
};

function isPubliclyListable(visibility: Visibility) {
  return publicListingVisibility.includes(visibility);
}

function isPubliclyAddressable(visibility: Visibility) {
  return publicDirectVisibility.includes(visibility);
}

function sortProjectsByDateDesc(first: Project, second: Project) {
  return second.date.localeCompare(first.date);
}

function sortPostsByDateDesc(first: WritingPost, second: WritingPost) {
  return (second.publishedAt ?? "").localeCompare(first.publishedAt ?? "");
}

function uniqueSorted(values: string[]) {
  return [...new Set(values)].sort((first, second) => first.localeCompare(second));
}

export function getPublicProjects() {
  return mockCmsRepository.projects
    .list()
    .filter((project) => isPubliclyListable(project.visibility))
    .toSorted(sortProjectsByDateDesc);
}

export function getPublicProjectBySlug(slug: string) {
  const project = mockCmsRepository.projects.getBySlug(slug);

  return project && isPubliclyAddressable(project.visibility) ? project : undefined;
}

export function getAllProjects() {
  return mockCmsRepository.projects.list();
}

export function getFeaturedProjects() {
  return getPublicProjects().filter((project) => project.featured);
}

export function getProjectCategories() {
  return uniqueSorted(getPublicProjects().flatMap((project) => project.categories));
}

export function getPublicProjectsByCategory(category?: string) {
  const projects = getPublicProjects();

  if (!category) {
    return projects;
  }

  return projects.filter((project) => project.categories.includes(category));
}

export function getPublicWritingPosts() {
  return mockCmsRepository.writingPosts
    .list()
    .filter((post) => isPubliclyListable(post.visibility))
    .toSorted(sortPostsByDateDesc);
}

export function getPublicWritingPostBySlug(slug: string) {
  const post = mockCmsRepository.writingPosts.getBySlug(slug);

  return post && isPubliclyAddressable(post.visibility) ? post : undefined;
}

export function getAllWritingPosts() {
  return mockCmsRepository.writingPosts.list();
}

export function getWritingCategories() {
  return uniqueSorted(getPublicWritingPosts().map((post) => post.category));
}

export function getPublicWritingPostsByCategory(category?: string) {
  const posts = getPublicWritingPosts();

  if (!category) {
    return posts;
  }

  return posts.filter((post) => post.category === category);
}

export function getPublicShopProducts() {
  return mockCmsRepository.shopProducts
    .list()
    .filter((product) => isPubliclyListable(product.visibility));
}

export function getPublicShopProductBySlug(slug: string) {
  const product = mockCmsRepository.shopProducts.getBySlug(slug);

  return product && isPubliclyAddressable(product.visibility) ? product : undefined;
}

export function getAllShopProducts() {
  return mockCmsRepository.shopProducts.list();
}

export function getShopProductCategories() {
  return uniqueSorted(getPublicShopProducts().flatMap((product) => product.categories));
}

export function getPublicShopProductsByCategory(category?: string) {
  const products = getPublicShopProducts();

  if (!category) {
    return products;
  }

  return products.filter((product) => product.categories.includes(category));
}

export function getPublicMediaItems() {
  return mockCmsRepository.mediaItems
    .list()
    .filter((item) => isPubliclyListable(item.visibility));
}

export function getPublicMediaItemsByKind(kind: MediaKind) {
  return getPublicMediaItems().filter((item) => item.kind === kind);
}

export function getPublicScoreMediaItems() {
  return getPublicMediaItems().filter((item) => item.score?.isMusicScore);
}

export function getPublicScoreMediaBySlug(slug: string) {
  const item = mockCmsRepository.mediaItems.getBySlug(slug);

  return item?.score && isPubliclyAddressable(item.visibility) ? item : undefined;
}

export function getPublicScoreMediaForSlugs(slugs: string[] = []) {
  return slugs
    .map((slug) => getPublicScoreMediaBySlug(slug))
    .filter((item): item is MediaItem => Boolean(item));
}

export function getAllMediaItems() {
  return mockCmsRepository.mediaItems.list();
}

export function getFeatureFlags() {
  return mockCmsRepository.featureFlags.list();
}

export function getFeatureFlagByKey(key: string) {
  return mockCmsRepository.featureFlags.getByKey(key);
}

export function getEnabledFeatureFlags() {
  return getFeatureFlags().filter((flag) => flag.enabled);
}

export function getCreativeWorkGroups(): CreativeWorkGroup[] {
  const projects = getPublicProjects();
  const posts = getPublicWritingPosts();
  const mediaItems = getPublicMediaItems();

  return [
    {
      key: "experiments",
      title: "Experiments",
      description: "Creative project records, prototypes, and small interaction ideas.",
      projects: projects.filter((project) => project.categories.includes("Creative Work")),
      posts: posts.filter((post) => post.category === "Creative"),
      mediaItems: [],
    },
    {
      key: "media",
      title: "Media wrappers",
      description: "PDF, video, and document shells that can swap providers later.",
      projects: projects.filter((project) => project.categories.includes("Media")),
      posts: [],
      mediaItems,
    },
  ].filter(
    (group) => group.projects.length > 0 || group.posts.length > 0 || group.mediaItems.length > 0,
  );
}
