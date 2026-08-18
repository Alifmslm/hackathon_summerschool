import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder";
import { ROUTES } from "@/constants";

/** Skill gap visualization → POST /api/skill-gap. */
export default function SkillGapPage() {
  return (
    <ScreenPlaceholder
      step="Step 3 · Identify"
      title="Your Skill Gaps"
      description="Bars of current vs target per skill, plus your biggest gaps (SkillGapResult from /api/skill-gap). These gaps drive the recommended project."
      next={{ href: ROUTES.project, label: "Get my project" }}
    />
  );
}
