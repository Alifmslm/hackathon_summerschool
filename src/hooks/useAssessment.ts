"use client";

import { useEffect, useState } from "react";
import type { AssessmentAnswers, AssessmentQuestion, CareerId, SkillProfile } from "@/types";

/**
 * STARTER STUB. Loads the assessment for a career and scores the answers.
 */
export function useAssessment(careerId: CareerId) {
  const [questions, setQuestions] = useState<AssessmentQuestion[]>([]);
  const [answers, setAnswers] = useState<AssessmentAnswers>({});
  const [profile, setProfile] = useState<SkillProfile | null>(null);

  useEffect(() => {
    fetch(`/api/assessment/${careerId}`)
      .then((r) => r.json())
      .then((d) => setQuestions(d.questions ?? []));
  }, [careerId]);

  function select(questionId: string, optionId: string) {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  }

  async function submit() {
    const res = await fetch("/api/assessment/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ careerId, answers }),
    });
    const data = await res.json();
    setProfile(data.profile);
    return data.profile as SkillProfile;
  }

  return { questions, answers, select, submit, profile };
}
