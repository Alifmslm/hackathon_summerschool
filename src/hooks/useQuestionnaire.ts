"use client";

import { useState } from "react";
import type { CareerRecommendation, QuestionnaireAnswers } from "@/types";

/**
 * STARTER STUB. Manages questionnaire answer state and calls the recommend API.
 * FE: swap the fetch for real error/loading handling as needed.
 */
export function useQuestionnaire() {
  const [answers, setAnswers] = useState<QuestionnaireAnswers>({});
  const [recommendation, setRecommendation] = useState<CareerRecommendation | null>(null);
  const [loading, setLoading] = useState(false);

  function answer(questionId: string, optionId: string) {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  }

  async function submit() {
    setLoading(true);
    try {
      const res = await fetch("/api/career/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers }),
      });
      const data = await res.json();
      setRecommendation(data.recommendation);
      return data.recommendation as CareerRecommendation;
    } finally {
      setLoading(false);
    }
  }

  return { answers, answer, submit, recommendation, loading };
}
