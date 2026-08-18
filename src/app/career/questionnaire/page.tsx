import { QuestionnaireForm } from "@/components/career/QuestionnaireForm";
import { CAREERS } from "@/lib/data/careers";
import { QUESTIONNAIRE } from "@/lib/data/questionnaire";

/**
 * Career discovery quiz (Step 1).
 * FE mockup: renders from the dummy questionnaire data. Swap `QUESTIONNAIRE` for
 * a GET /api/career/list + the form's client-side scoring for POST
 * /api/career/recommend when integrating with the backend.
 */
export default function QuestionnairePage() {
  return <QuestionnaireForm questions={QUESTIONNAIRE} careers={CAREERS} />;
}