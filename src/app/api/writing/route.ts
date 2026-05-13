import { NextResponse } from "next/server";

import { getPublicWritingPosts } from "@/lib/cms/service";

export function GET() {
  return NextResponse.json({ posts: getPublicWritingPosts() });
}
