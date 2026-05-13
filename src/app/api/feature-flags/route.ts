import { NextResponse } from "next/server";

import { getFeatureFlags } from "@/lib/cms/service";

export function GET() {
  return NextResponse.json({ featureFlags: getFeatureFlags() });
}
