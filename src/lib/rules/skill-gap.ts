import type {
  AssessmentAnswers,
  AssessmentQuestion,
  CareerId,
  SkillGap,
  SkillGapResult,
  SkillProfile,
  SkillScore,
} from "@/types";
import { TOP_GAPS_COUNT, gapSeverity } from "@/constants";
import { getCareer, skillName } from "@/lib/data/careers";
import { getAssessment } from "@/lib/data/assessment-questions";

/**
 * Turn raw assessment answers into a measured SkillProfile.
 *   - Each question measures one skill; a skill's score = average of the
 *     `value`s of the answered options for that skill.
 *   - Overall = weighted average of skill scores using the career's weights.
 */
export function scoreAssessment(
  careerId: CareerId,
  answers: AssessmentAnswers
): SkillProfile {
  const questions = getAssessment(careerId);
  const bySkill = new Map<string, number[]>();

  for (const q of questions) {
    const value = resolveAnswerValue(q, answers[q.id]);
    if (value == null) continue;
    const list = bySkill.get(q.skillId) ?? [];
    list.push(value);
    bySkill.set(q.skillId, list);
  }

  const skills: SkillScore[] = [];
  for (const [skillId, values] of bySkill) {
    skills.push({ skillId, name: skillName(skillId), score: Math.round(avg(values)) });
  }

  const career = getCareer(careerId);
  const overall = career
    ? weightedOverall(skills, career.skills)
    : Math.round(avg(skills.map((s) => s.score)));

  return { careerId, skills, overall };
}

/**
 * Compare a measured profile against the career's target levels → skill gaps.
 * Gaps are sorted biggest-first; `topGaps` are the few worth acting on.
 */
export function computeSkillGap(careerId: CareerId, profile: SkillScore[]): SkillGapResult {
  const career = getCareer(careerId);
  const scoreOf = new Map(profile.map((s) => [s.skillId, s.score]));

  const gaps: SkillGap[] = (career?.skills ?? []).map((req) => {
    const current = scoreOf.get(req.skillId) ?? 0;
    const gap = Math.max(0, req.target - current);
    return {
      skillId: req.skillId,
      name: skillName(req.skillId),
      current,
      target: req.target,
      gap,
      severity: gapSeverity(gap),
    };
  });

  const topGaps = [...gaps]
    .sort((a, b) => b.gap - a.gap)
    .filter((g) => g.gap > 0)
    .slice(0, TOP_GAPS_COUNT);

  return { careerId, profile, gaps, topGaps };
}

/* ── helpers ─────────────────────────────────────────────────────────────── */

function resolveAnswerValue(
  q: AssessmentQuestion,
  answer: string | number | undefined
): number | null {
  if (answer == null) return null;
  if (typeof answer === "number") return clamp(answer); // scale questions
  const opt = q.options.find((o) => o.id === answer);
  return opt ? clamp(opt.value) : null;
}

function weightedOverall(
  skills: SkillScore[],
  required: { skillId: string; weight: number }[]
): number {
  const weightOf = new Map(required.map((r) => [r.skillId, r.weight]));
  let num = 0;
  let den = 0;
  for (const s of skills) {
    const w = weightOf.get(s.skillId) ?? 1;
    num += s.score * w;
    den += w;
  }
  return den ? Math.round(num / den) : 0;
}

function avg(nums: number[]): number {
  return nums.length ? nums.reduce((a, b) => a + b, 0) / nums.length : 0;
}

function clamp(n: number): number {
  return Math.min(100, Math.max(0, n));
}
