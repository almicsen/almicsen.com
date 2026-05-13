import { featureFlags, mediaItems, projects, shopProducts, writingPosts } from "./mock-data";
import type { FeatureFlag, MediaItem, Project, ShopProduct, WritingPost } from "./types";

type SluggedRecord = {
  slug: string;
};

type ReadonlyCollectionRepository<TRecord extends SluggedRecord> = {
  list: () => readonly TRecord[];
  getBySlug: (slug: string) => TRecord | undefined;
  create: (record: TRecord) => never;
  update: (slug: string, patch: Partial<TRecord>) => never;
  delete: (slug: string) => never;
};

type FeatureFlagRepository = {
  list: () => readonly FeatureFlag[];
  getByKey: (key: string) => FeatureFlag | undefined;
  update: (key: string, patch: Partial<FeatureFlag>) => never;
};

function rejectMockWrite(operation: string): never {
  throw new Error(`CMS ${operation} is not wired yet. Replace the mock repository with Prisma first.`);
}

function createMockCollectionRepository<TRecord extends SluggedRecord>(
  records: readonly TRecord[],
  collectionName: string,
): ReadonlyCollectionRepository<TRecord> {
  return {
    list: () => records,
    getBySlug: (slug) => records.find((record) => record.slug === slug),
    create: () => rejectMockWrite(`${collectionName}.create`),
    update: () => rejectMockWrite(`${collectionName}.update`),
    delete: () => rejectMockWrite(`${collectionName}.delete`),
  };
}

function createMockFeatureFlagRepository(records: readonly FeatureFlag[]): FeatureFlagRepository {
  return {
    list: () => records,
    getByKey: (key) => records.find((flag) => flag.key === key),
    update: () => rejectMockWrite("featureFlags.update"),
  };
}

export type CmsRepository = {
  projects: ReadonlyCollectionRepository<Project>;
  writingPosts: ReadonlyCollectionRepository<WritingPost>;
  shopProducts: ReadonlyCollectionRepository<ShopProduct>;
  mediaItems: ReadonlyCollectionRepository<MediaItem>;
  featureFlags: FeatureFlagRepository;
};

export const mockCmsRepository: CmsRepository = {
  projects: createMockCollectionRepository(projects, "projects"),
  writingPosts: createMockCollectionRepository(writingPosts, "writingPosts"),
  shopProducts: createMockCollectionRepository(shopProducts, "shopProducts"),
  mediaItems: createMockCollectionRepository(mediaItems, "mediaItems"),
  featureFlags: createMockFeatureFlagRepository(featureFlags),
};
