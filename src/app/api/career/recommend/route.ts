import { NextResponse } from "next/server";
import type { RecommendCareerResponse } from "@/types";
import { parseBody, recommendCareerSchema } from "@/lib/validators";
import { recommendCareer } from "@/lib/rules/career-matching";

/** POST /api/career/recommend — score quiz answers → recommended career. */
export async function POST(request: Request) {
  const parsed = parseBody(recommendCareerSchema, await request.json().catch(() => null));
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error, details: parsed.details }, { status: 400 });
  }

  const body: RecommendCareerResponse = {
    recommendation: recommendCareer(parsed.data.answers),
  };
  return NextResponse.json(body);
}
