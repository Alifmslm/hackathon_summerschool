import { NextResponse } from "next/server";
import type { RecommendProjectResponse } from "@/types";
import { parseBody, recommendProjectSchema } from "@/lib/validators";
import { recommendProject } from "@/lib/rules/project-recommendation";
import { overallToDifficulty } from "@/lib/rules/skill-gap";

/** POST /api/project/recommend — skill gaps → a buildable project. */
export async function POST(request: Request) {
  const parsed = parseBody(recommendProjectSchema, await request.json().catch(() => null));
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error, details: parsed.details }, { status: 400 });
  }

  const body: RecommendProjectResponse = {
    project: recommendProject(
      parsed.data.careerId,
      parsed.data.gaps,
      overallToDifficulty(parsed.data.overall)
    ),
  };
  return NextResponse.json(body);
}
