import type { AssessmentQuestion, CareerId } from "@/types";
import { UIUX_ASSESSMENT } from "./uiux";
import { AI_ENGINEER_ASSESSMENT } from "./ai-engineer";

/** Assessment question bank keyed by career. */
export const ASSESSMENTS: Record<CareerId, AssessmentQuestion[]> = {
  uiux: UIUX_ASSESSMENT,
  "ai-engineer": AI_ENGINEER_ASSESSMENT,
};

export function getAssessment(careerId: CareerId): AssessmentQuestion[] {
  return ASSESSMENTS[careerId] ?? [];
}
