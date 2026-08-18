import { NextResponse } from "next/server";
import type { SkillGapResponse } from "@/types";
import { parseBody, skillGapRequestSchema } from "@/lib/validators";
import { computeSkillGap } from "@/lib/rules/skill-gap";

/** POST /api/skill-gap — profile vs career targets → gaps + top gaps. */
export async function POST(request: Request) {
  const parsed = parseBody(skillGapRequestSchema, await request.json().catch(() => null));
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error, details: parsed.details }, { status: 400 });
  }

  const body: SkillGapResponse = {
    result: computeSkillGap(parsed.data.careerId, parsed.data.profile),
  };
  return NextResponse.json(body);
}
