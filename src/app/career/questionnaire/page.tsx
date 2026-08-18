import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder";
import { ROUTES } from "@/constants";

/** Career discovery quiz → POST /api/career/recommend. */
export default function QuestionnairePage() {
  return (
    <ScreenPlaceholder
      step="Step 1 · Discover"
      title="Career Discovery Questionnaire"
      description="Answer a few questions about your interests and working style. Answers are scored by /api/career/recommend to suggest a matching career."
      next={{ href: ROUTES.careerResult, label: "See result" }}
    />
  );
}
