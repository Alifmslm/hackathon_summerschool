import type { CareerId, Project, SkillGap } from "@/types";
import { PROJECT_TEMPLATES } from "@/lib/data/projects";

/**
 * Pick the best project for a user's skill gaps.
 *
 * Score each template by how much its `primarySkillIds` overlap the user's
 * gaps — weighted by gap size so bigger gaps pull harder. The winning template
 * is returned as a `Project` with `matchedGaps` filled in.
 */
export function recommendProject(careerId: CareerId, gaps: SkillGap[]): Project {
  const candidates = PROJECT_TEMPLATES.filter((t) => t.careerId === careerId);
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
