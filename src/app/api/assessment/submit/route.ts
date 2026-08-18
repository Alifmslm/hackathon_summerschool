import { NextResponse } from "next/server";
import type { SubmitAssessmentResponse } from "@/types";
import { parseBody, submitAssessmentSchema } from "@/lib/validators";
import { scoreAssessment } from "@/lib/rules/skill-gap";

/** POST /api/assessment/submit — answers → measured SkillProfile. */
export async function POST(request: Request) {
  const parsed = parseBody(submitAssessmentSchema, await request.json().catch(() => null));
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error, details: parsed.details }, { status: 400 });
  }

  const body: SubmitAssessmentResponse = {
    profile: scoreAssessment(parsed.data.careerId, parsed.data.answers),
  };
  return NextResponse.json(body);
}
