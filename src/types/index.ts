/**
 * ────────────────────────────────────────────────────────────────────────────
 *  SHARED CONTRACT  (owned by both FE + BE)
 * ────────────────────────────────────────────────────────────────────────────
 *  These are the data shapes that flow through the whole product:
 *
 *    Career Choice ─▶ Questionnaire ─▶ Recommendation ─▶ Assessment
 *                                                          │
 *                                                          ▼
 *                          Project ◀─ Skill Gap ◀──────────┘  ─▶ PDF Guide
 *
 *  Agree on this file FIRST. FE builds UI against these types using mock data;
 *  BE implements the rules/APIs that produce them. Keep it in sync with the
 *  Zod schemas in `lib/validators`.
 */

/* ══════════════════════════ Careers & Skills ══════════════════════════════ */

/** Stable career identifier. Extend when adding a 3rd path. */
export type CareerId = "uiux" | "ai-engineer";

/** A single skill in the taxonomy (e.g. "Usability Testing"). */
export interface Skill {
  id: string; // kebab-case, e.g. "usability-testing"
  name: string; // human label, e.g. "Usability Testing"
  description?: string;
}

/** A skill a career expects, with the target level a "job-ready" person hits. */
export interface RequiredSkill {
  skillId: string;
  target: number; // 0–100 target proficiency for this career
  weight: number; // relative importance (used for overall readiness)
}

/** A full career path definition. */
export interface Career {
  id: CareerId;
  name: string; // "UI/UX Designer"
  emoji: string; // "🎨"
  tagline: string; // one-liner shown on cards
  description: string;
  skills: RequiredSkill[]; // required skills + target levels
}

/* ═══════════════════ Step 1 — Career Discovery Questionnaire ═══════════════ */

/** One answer option; contributes points toward one or more careers. */
export interface QuestionOption {
  id: string;
  label: string;
  /** Points this option adds per career, e.g. { uiux: 2, "ai-engineer": 0 }. */
  scores: Partial<Record<CareerId, number>>;
  /** Optional human reason surfaced in the recommendation ("Why?"). */
  reason?: string;
}

export interface QuestionnaireQuestion {
  id: string;
  prompt: string;
  options: QuestionOption[];
}

/** User's selections: questionId ─▶ chosen optionId. */
export type QuestionnaireAnswers = Record<string, string>;

/** A career + how well it matched (0–100). */
export interface CareerMatch {
  careerId: CareerId;
  name: string;
  emoji: string;
  matchPercent: number; // 0–100
}

/** Output of the questionnaire scoring. */
export interface CareerRecommendation {
  recommended: CareerMatch;
  reasons: string[]; // "✓ You enjoy designing experiences"
  alternatives: CareerMatch[]; // other careers, sorted desc by match
}

/* ═══════════════════════ Step 2 — Skill Assessment ════════════════════════ */

export type AssessmentQuestionType = "single" | "scale";

/** One assessment answer option carrying a proficiency value. */
export interface AssessmentOption {
  id: string;
  label: string;
  value: number; // 0–100 proficiency this answer implies
}

/** A question that measures exactly one skill. */
export interface AssessmentQuestion {
  id: string;
  skillId: string; // which skill this measures
  prompt: string;
  type: AssessmentQuestionType;
  options: AssessmentOption[];
}

/** User's assessment answers: questionId ─▶ chosen optionId (or scale value). */
export type AssessmentAnswers = Record<string, string | number>;

/** Current measured level for one skill. */
export interface SkillScore {
  skillId: string;
  name: string;
  score: number; // 0–100 current level
}

/** The user's measured profile for a career. */
export interface SkillProfile {
  careerId: CareerId;
  skills: SkillScore[];
  overall: number; // weighted readiness 0–100
}

/* ═══════════════════════ Step 3 — Skill Gap Detection ═════════════════════ */

export type GapSeverity = "high" | "medium" | "low";

/** current vs target for a single skill. */
export interface SkillGap {
  skillId: string;
  name: string;
  current: number; // 0–100
  target: number; // 0–100
  gap: number; // max(0, target - current)
  severity: GapSeverity; // derived from `gap`
}

/** Output of the skill-gap engine. */
export interface SkillGapResult {
  careerId: CareerId;
  profile: SkillScore[]; // full profile (drives the bar chart)
  gaps: SkillGap[]; // every skill, sorted biggest gap first
  topGaps: SkillGap[]; // the few gaps worth acting on
}

/* ═══════════════════ Step 4 — Project Recommendation ══════════════════════ */

export interface ProjectRequirement {
  id: string;
  label: string;
}

/** A recommended, buildable project targeting the user's gaps. */
export interface Project {
  id: string;
  title: string;
  description: string; // what to build + problem + why it's relevant
  skillsPracticed: string[]; // skill names the project develops
  coreRequirements: ProjectRequirement[]; // product/user perspective
  technicalRequirements: ProjectRequirement[]; // implementation constraints
  matchedGaps: string[]; // skillIds this project addresses
}

/**
 * The static template stored in `lib/data/projects.ts`. The recommendation
 * engine selects a template by overlap with the user's top gaps and returns a
 * `Project`.
 */
export interface ProjectTemplate extends Project {
  careerId: CareerId;
  primarySkillIds: string[]; // gaps this template is designed to close
}

/* ═══════════════════════ Step 5 — PDF Project Guide ═══════════════════════ */

/** Normalised shape handed to the PDF renderer. */
export interface ProjectGuide {
  title: string;
  description: string;
  skillsPracticed: string[];
  coreRequirements: string[];
  technicalRequirements: string[];
}

/* ══════════════════════════ API CONTRACTS ═════════════════════════════════ */
/*  Request/response shapes for `app/api/*`. Mirror these in `lib/validators`.  */

/** POST /api/career/recommend */
export interface RecommendCareerRequest {
  answers: QuestionnaireAnswers;
}
export interface RecommendCareerResponse {
  recommendation: CareerRecommendation;
}

/** GET /api/career/list */
export interface ListCareersResponse {
  careers: Career[];
}

/** GET /api/assessment/[career] */
export interface GetAssessmentResponse {
  careerId: CareerId;
  questions: AssessmentQuestion[];
}

/** POST /api/assessment/submit */
export interface SubmitAssessmentRequest {
  careerId: CareerId;
  answers: AssessmentAnswers;
}
export interface SubmitAssessmentResponse {
  profile: SkillProfile;
}

/** POST /api/skill-gap */
export interface SkillGapRequest {
  careerId: CareerId;
  profile: SkillScore[];
}
export interface SkillGapResponse {
  result: SkillGapResult;
}

/** POST /api/project/recommend */
export interface RecommendProjectRequest {
  careerId: CareerId;
  gaps: SkillGap[];
}
export interface RecommendProjectResponse {
  project: Project;
}

/** POST /api/project/pdf  →  returns application/pdf (binary). */
export interface GeneratePdfRequest {
  project: Project;
}

/** Uniform error body for any route handler. */
export interface ApiError {
  error: string;
  details?: unknown;
}
