"use client";

import { createContext, useContext } from "react";
import type {
  CareerId,
  CareerRecommendation,
  Project,
  SkillGapResult,
  SkillProfile,
} from "@/types";

/**
 * Wizard flow state shared across the multi-step journey.
 *
 * STARTER STUB: the shape is defined here so FE can wire a Provider (Context or
 * Zustand) around the flow. Each step writes its result; later steps read it:
 *
 *   questionnaire → recommendation → selectedCareer → profile → gap → project
 */
export interface WizardState {
  selectedCareer: CareerId | null;
  recommendation: CareerRecommendation | null;
  profile: SkillProfile | null;
  gap: SkillGapResult | null;
  project: Project | null;
}

export interface WizardActions {
  setSelectedCareer: (careerId: CareerId) => void;
  setRecommendation: (rec: CareerRecommendation) => void;
  setProfile: (profile: SkillProfile) => void;
  setGap: (gap: SkillGapResult) => void;
  setProject: (project: Project) => void;
  reset: () => void;
}

export const initialWizardState: WizardState = {
  selectedCareer: null,
  recommendation: null,
  profile: null,
  gap: null,
  project: null,
};

export const WizardContext = createContext<(WizardState & WizardActions) | null>(null);

/** Consume the wizard store. Wrap the flow in a matching Provider (FE to add). */
export function useWizard(): WizardState & WizardActions {
  const ctx = useContext(WizardContext);
  if (!ctx) throw new Error("useWizard must be used within a WizardProvider");
  return ctx;
}
