import { NextResponse } from "next/server";
import type { ListCareersResponse } from "@/types";
import { CAREERS } from "@/lib/data/careers";

/** GET /api/career/list — all career paths (for the manual selection screen). */
export function GET() {
  const body: ListCareersResponse = { careers: CAREERS };
  return NextResponse.json(body);
}
