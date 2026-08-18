import { QuestionnaireForm } from "@/components/career/QuestionnaireForm";
import { QUESTIONNAIRE } from "@/lib/data/questionnaire";

/**
 * Career discovery quiz (Step 1).
 * FE mockup: renders from the dummy questionnaire data. The result is stashed
 * and shown on /career/result. Swap for GET /api/career/list + POST
 * /api/career/recommend when integrating with the backend.
 */
export default function QuestionnairePage() {
  return <QuestionnaireForm questions={QUESTIONNAIRE} />;
}