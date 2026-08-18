import { NextResponse } from "next/server";
import type { RecommendProjectResponse } from "@/types";
import { parseBody, recommendProjectSchema } from "@/lib/validators";
import { recommendProject } from "@/lib/rules/project-recommendation";
import { overallToDifficulty } from "@/lib/rules/skill-gap";
import { generateProjectWithAI } from "@/lib/ai/generate-project";
import { CAREERS } from "@/lib/data/careers";

/** POST /api/project/recommend — skill gaps → a buildable project. */
export async function POST(request: Request) {
  const parsed = parseBody(recommendProjectSchema, await request.json().catch(() => null));
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error, details: parsed.details }, { status: 400 });
  }

  const { careerId, gaps, overall } = parsed.data;
  const difficulty = overallToDifficulty(overall);
  const careerName = CAREERS.find((c) => c.id === careerId)?.name ?? careerId;

  const aiProject = await generateProjectWithAI(careerId, careerName, gaps, difficulty);

  const body: RecommendProjectResponse = {
    project: aiProject ?? recommendProject(careerId, gaps, difficulty),
  };
  return NextResponse.json(body);
}
