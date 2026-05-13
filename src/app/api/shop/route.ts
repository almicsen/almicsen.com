import { NextResponse } from "next/server";

import { getPublicShopProducts } from "@/lib/cms/service";

export function GET() {
  return NextResponse.json({ products: getPublicShopProducts() });
}
