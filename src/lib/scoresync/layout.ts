import type { ScoreLayoutMode, ScoreMedia, ScoreSpread } from "@/lib/scoresync/types";

function createSpread(index: number, pageNumbers: number[]): ScoreSpread {
  return {
    index,
    pageNumbers,
    label: pageNumbers.length === 1 ? `Page ${pageNumbers[0]}` : `Pages ${pageNumbers.join("-")}`,
  };
}

export function createScoreSpreads(score: ScoreMedia): ScoreSpread[] {
  return createScoreSpreadsFromOptions({
    firstPageSolo: score.firstPageSolo,
    layoutMode: score.scoreLayoutMode,
    pageCount: score.pageCount,
    pagesPerSpreadAfterFirst: score.pagesPerSpreadAfterFirst,
  });
}

export function createScoreSpreadsFromOptions({
  firstPageSolo,
  layoutMode,
  pageCount,
  pagesPerSpreadAfterFirst,
}: {
  firstPageSolo: boolean;
  layoutMode: ScoreLayoutMode;
  pageCount: number;
  pagesPerSpreadAfterFirst: number;
}) {
  const spreads: ScoreSpread[] = [];
  const spreadSize = layoutMode === "SINGLE_PAGE" ? 1 : Math.max(1, pagesPerSpreadAfterFirst);
  let pageNumber = 1;

  if (layoutMode === "AUTO_SCORE_BOOK" && firstPageSolo && pageCount > 0) {
    spreads.push(createSpread(spreads.length, [1]));
    pageNumber = 2;
  }

  while (pageNumber <= pageCount) {
    const pages = Array.from({ length: spreadSize }, (_, index) => pageNumber + index).filter(
      (page) => page <= pageCount,
    );

    spreads.push(createSpread(spreads.length, pages));
    pageNumber += spreadSize;
  }

  return spreads;
}

export function findSpreadIndexForPage(spreads: ScoreSpread[], pageNumber: number) {
  const spread = spreads.find((candidate) => candidate.pageNumbers.includes(pageNumber));

  return spread?.index ?? 0;
}
