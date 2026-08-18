import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder";
import { ROUTES } from "@/constants";

/** Recommended career + match % + "Why?" + alternatives. */
export default function CareerResultPage() {
  return (
    <ScreenPlaceholder
      step="Step 1 · Result"
      title="Your Recommended Career"
      description="Shows the recommended career, a match %, why it fits, and alternative paths (from the CareerRecommendation contract). Continue to measure your skills."
      next={{ href: ROUTES.assessment("uiux"), label: "Assess my skills" }}
    />
  );
}
