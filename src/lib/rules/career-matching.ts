import type {
  CareerId,
  CareerMatch,
  CareerRecommendation,
  QuestionnaireAnswers,
} from "@/types";
import { CAREER_IDS } from "@/constants";
import { CAREERS } from "@/lib/data/careers";
import { QUESTIONNAIRE } from "@/lib/data/questionnaire";

/**
 * Score questionnaire answers → a career recommendation.
 *
 * Algorithm (data-driven, no per-question code):
 *   1. Sum each option's points per career.
 *   2. Normalise each career against the MAX it could have scored → 0–100%.
 *      (Careers are scored independently, so percentages don't sum to 100 —
 *       matches the README's "87% / 62%" style.)
 *   3. Collect the "reason" strings from the chosen options that favour the
 *      winning career.
 */
export function recommendCareer(answers: QuestionnaireAnswers): CareerRecommendation {
  const raw: Record<CareerId, number> = { uiux: 0, "ai-engineer": 0 };
  const max: Record<CareerId, number> = { uiux: 0, "ai-engineer": 0 };
  const reasons: string[] = [];

  for (const question of QUESTIONNAIRE) {
    // Track the best possible contribution per career for normalisation.
    for (const id of CAREER_IDS) {
      const best = Math.max(0, ...question.options.map((o) => o.scores[id] ?? 0));
      max[id] += best;
    }

    const chosenId = answers[question.id];
    const chosen = question.options.find((o) => o.id === chosenId);
    if (!chosen) continue;

    for (const id of CAREER_IDS) raw[id] += chosen.scores[id] ?? 0;
    if (chosen.reason) reasons.push(chosen.reason);
  }

  const matches: CareerMatch[] = CAREERS.map((c) => ({
    careerId: c.id,
    name: c.name,
    emoji: c.emoji,
    matchPercent: max[c.id] > 0 ? Math.round((raw[c.id] / max[c.id]) * 100) : 0,
  })).sort((a, b) => b.matchPercent - a.matchPercent);

  const [recommended, ...alternatives] = matches;

  // Keep only reasons that point at the winning career, capped at 3.
  const winningReasons = dedupe(reasons).slice(0, 3);

  return {
    recommended,
    reasons: winningReasons.length ? winningReasons : defaultReasons(recommended.careerId),
    alternatives,
  };
}

function dedupe(items: string[]): string[] {
  return Array.from(new Set(items));
}

function defaultReasons(careerId: CareerId): string[] {
  return careerId === "uiux"
    ? ["You enjoy designing experiences", "You're interested in understanding users", "You prefer creative problem solving"]
    : ["You like turning data into behaviour", "You're comfortable thinking in code", "You prefer logical problem solving"];
}
