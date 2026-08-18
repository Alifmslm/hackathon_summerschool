import type { CareerId, Project, ProjectDifficulty, SkillGap } from "@/types";
import { PROJECT_TEMPLATES } from "@/lib/data/projects";

/**
 * Pick the best project for a user's skill gaps.
 *
 * Candidates are first narrowed to the user's identified difficulty level
 * (falling back to the full career pool if none exist at that level), then
 * scored by how much each template's `primarySkillIds` overlap the user's
 * gaps — weighted by gap size so bigger gaps pull harder. The winning template
 * is returned as a `Project` with `matchedGaps` filled in.
 */
export function recommendProject(
  careerId: CareerId,
  gaps: SkillGap[],
  difficulty: ProjectDifficulty
): Project {
  const allCandidates = PROJECT_TEMPLATES.filter((t) => t.careerId === careerId);
  const atLevel = allCandidates.filter((t) => t.difficulty === difficulty);
  const candidates = atLevel.length > 0 ? atLevel : allCandidates;
  const gapWeight = new Map(gaps.map((g) => [g.skillId, g.gap]));

  let best = candidates[0];
  let bestScore = -1;

  for (const template of candidates) {
    const score = template.primarySkillIds.reduce(
      (sum, skillId) => sum + (gapWeight.get(skillId) ?? 0),
      0
    );
    if (score > bestScore) {
      bestScore = score;
      best = template;
    }
  }

  const matchedGaps = best.primarySkillIds.filter((id) => (gapWeight.get(id) ?? 0) > 0);

  // Strip template-only fields (careerId, primarySkillIds) from the response.
  const { careerId: _c, primarySkillIds: _p, ...project } = best;
  return { ...project, matchedGaps };
}
