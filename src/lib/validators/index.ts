import { z } from "zod";
import { CAREER_IDS } from "@/constants";

/**
 * Zod schemas = the runtime contract for `app/api/*`. Route handlers parse
 * incoming bodies with these; keep them in sync with `types/index.ts`.
 */

export const careerIdSchema = z.enum(CAREER_IDS);

/* ── /api/career/recommend ─────────────────────────────────────────────────*/
export const recommendCareerSchema = z.object({
  answers: z.record(z.string(), z.string()),
});

/* ── /api/assessment/submit ────────────────────────────────────────────────*/
export const submitAssessmentSchema = z.object({
  careerId: careerIdSchema,
  answers: z.record(z.string(), z.union([z.string(), z.number()])),
});

/* ── /api/skill-gap ────────────────────────────────────────────────────────*/
export const skillScoreSchema = z.object({
  skillId: z.string(),
  name: z.string(),
  score: z.number().min(0).max(100),
});

export const skillGapRequestSchema = z.object({
  careerId: careerIdSchema,
  profile: z.array(skillScoreSchema),
});

/* ── /api/project/recommend ────────────────────────────────────────────────*/
export const skillGapSchema = z.object({
  skillId: z.string(),
  name: z.string(),
  current: z.number(),
  target: z.number(),
  gap: z.number(),
  severity: z.enum(["high", "medium", "low"]),
});

export const recommendProjectSchema = z.object({
  careerId: careerIdSchema,
  gaps: z.array(skillGapSchema),
});

/* ── /api/project/pdf ──────────────────────────────────────────────────────*/
export const requirementSchema = z.object({ id: z.string(), label: z.string() });

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  skillsPracticed: z.array(z.string()),
  coreRequirements: z.array(requirementSchema),
  technicalRequirements: z.array(requirementSchema),
  matchedGaps: z.array(z.string()),
});

export const generatePdfSchema = z.object({ project: projectSchema });

/** Small helper so routes can return a consistent 400 on bad input. */
export function parseBody<T>(schema: z.ZodSchema<T>, body: unknown):
  | { ok: true; data: T }
  | { ok: false; error: string; details: unknown } {
  const result = schema.safeParse(body);
  if (result.success) return { ok: true, data: result.data };
  return { ok: false, error: "Invalid request body", details: result.error.flatten() };
}
