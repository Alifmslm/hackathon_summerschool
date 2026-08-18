import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder";
import { ROUTES } from "@/constants";
import { getCareer } from "@/lib/data/careers";

/** Skill assessment for a career → GET /api/assessment/[career], POST /submit. */
export default function AssessmentPage({ params }: { params: { career: string } }) {
  const career = getCareer(params.career);
  return (
    <ScreenPlaceholder
      step="Step 2 · Assess"
      title={`Skill Assessment${career ? ` — ${career.name}` : ""}`}
      description="One question per skill, scored by /api/assessment/submit into a SkillProfile. Different question set per career."
      next={{ href: ROUTES.skillGap, label: "See my skill gaps" }}
    />
  );
}
