import { notFound } from "next/navigation";
import { AssessmentForm } from "@/components/assessment/AssessmentForm";
import { getAssessment } from "@/lib/data/assessment-questions";
import { getCareer } from "@/lib/data/careers";

/**
 * Skill assessment for a career (Step 2).
 * FE mockup: renders from the dummy per-career assessment data. Swap for GET
 * /api/assessment/[career] + POST /api/assessment/submit when integrating.
 */
export default function AssessmentPage({ params }: { params: { career: string } }) {
  const career = getCareer(params.career);
  if (!career) notFound();
  return <AssessmentForm career={career} questions={getAssessment(career.id)} />;
}