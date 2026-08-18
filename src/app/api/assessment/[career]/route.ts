import { NextResponse } from "next/server";
import type { GetAssessmentResponse } from "@/types";
import { isCareerId } from "@/constants";
import { getAssessment } from "@/lib/data/assessment-questions";

/** GET /api/assessment/[career] — the assessment questions for a career. */
export function GET(_request: Request, { params }: { params: { career: string } }) {
  if (!isCareerId(params.career)) {
    return NextResponse.json({ error: `Unknown career: ${params.career}` }, { status: 404 });
  }

  const body: GetAssessmentResponse = {
    careerId: params.career,
    questions: getAssessment(params.career),
  };
  return NextResponse.json(body);
}
