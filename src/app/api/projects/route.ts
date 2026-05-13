import { NextResponse } from "next/server";

import { getPublicProjects } from "@/lib/cms/service";

export function GET() {
  return NextResponse.json({ projects: getPublicProjects() });
}
