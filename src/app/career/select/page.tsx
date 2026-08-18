import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder";
import { ROUTES } from "@/constants";

/** Manual career selection → GET /api/career/list, then straight to assessment. */
export default function SelectCareerPage() {
  return (
    <ScreenPlaceholder
      step="Step 1 · Choose"
      title="Choose Your Career Path"
      description="Already know what you want? Pick a career directly (from /api/career/list) and skip the quiz. Your choice drives which assessment you get."
      next={{ href: ROUTES.assessment("uiux"), label: "Start assessment" }}
    />
  );
}
