import type { CareerId, GapSeverity } from "@/types";

/** All supported career ids (source of truth for validation + routing). */
export const CAREER_IDS = ["uiux", "ai-engineer"] as const satisfies readonly CareerId[];

/** Type guard used by API routes to validate the `[career]` param. */
export function isCareerId(value: string): value is CareerId {
  return (CAREER_IDS as readonly string[]).includes(value);
}

/**
 * Gap severity thresholds (in points of `target - current`).
 *   gap >= 30 → high  🔴
 *   gap >= 15 → medium 🟡
 *   else      → low   🟢
 */
export const GAP_THRESHOLDS = { high: 30, medium: 15 } as const;

export function gapSeverity(gap: number): GapSeverity {
  if (gap >= GAP_THRESHOLDS.high) return "high";
  if (gap >= GAP_THRESHOLDS.medium) return "medium";
  return "low";
}

export const SEVERITY_META: Record<GapSeverity, { emoji: string; label: string }> = {
  high: { emoji: "🔴", label: "High priority" },
  medium: { emoji: "🟡", label: "Worth improving" },
  low: { emoji: "🟢", label: "On track" },
};

/** How many top gaps to surface / how many projects to consider. */
export const TOP_GAPS_COUNT = 3;

/** Client-side route map for the wizard flow (matches app/ structure). */
export const ROUTES = {
  home: "/",
  questionnaire: "/career/questionnaire",
  selectCareer: "/career/select",
  careerResult: "/career/result",
  assessment: (career: CareerId | string) => `/assessment/${career}`,
  skillGap: "/skill-gap",
  project: "/project",
} as const;
