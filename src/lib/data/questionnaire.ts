import type { QuestionnaireQuestion } from "@/types";

/**
 * Career discovery quiz. Each option adds points to one or more careers.
 * `reason` strings feed the "Why?" section of the recommendation.
 *
 * This is a TEMPLATE — tune wording/weights freely; the scoring in
 * `lib/rules/career-matching.ts` is data-driven and needs no code changes.
 */
export const QUESTIONNAIRE: QuestionnaireQuestion[] = [
  {
    id: "q1",
    prompt: "Which kind of problem sounds more satisfying to solve?",
    options: [
      {
        id: "q1a",
        label: "Making a confusing screen feel obvious and effortless",
        scores: { uiux: 2 },
        reason: "You enjoy designing clear, human experiences",
      },
      {
        id: "q1b",
        label: "Teaching a program to spot patterns in messy data",
        scores: { "ai-engineer": 2 },
        reason: "You like turning data into intelligent behaviour",
      },
    ],
  },
  {
    id: "q2",
    prompt: "Pick the tool you'd rather spend an afternoon in.",
    options: [
      { id: "q2a", label: "Figma / a design canvas", scores: { uiux: 2 }, reason: "You gravitate toward visual, hands-on design tools" },
      { id: "q2b", label: "A Jupyter notebook / code editor", scores: { "ai-engineer": 2 }, reason: "You're comfortable thinking in code" },
      { id: "q2c", label: "A bit of both", scores: { uiux: 1, "ai-engineer": 1 } },
    ],
  },
  {
    id: "q3",
    prompt: "How do you prefer to understand a problem?",
    options: [
      { id: "q3a", label: "By talking to the people who have it", scores: { uiux: 2 }, reason: "You're drawn to understanding users" },
      { id: "q3b", label: "By analysing the numbers behind it", scores: { "ai-engineer": 2 }, reason: "You reason from data and metrics" },
    ],
  },
  {
    id: "q4",
    prompt: "What would make you proudest to ship?",
    options: [
      { id: "q4a", label: "An interface users find delightful", scores: { uiux: 2 }, reason: "You care about the end-user's experience" },
      { id: "q4b", label: "A model that predicts something useful", scores: { "ai-engineer": 2 }, reason: "You want to build systems that learn" },
    ],
  },
  {
    id: "q5",
    prompt: "Which describes your problem-solving style?",
    options: [
      { id: "q5a", label: "Creative and visual", scores: { uiux: 2 }, reason: "You prefer creative, visual problem solving" },
      { id: "q5b", label: "Logical and mathematical", scores: { "ai-engineer": 2 }, reason: "You prefer logical, analytical problem solving" },
      { id: "q5c", label: "A mix of both", scores: { uiux: 1, "ai-engineer": 1 } },
    ],
  },
  {
    id: "q6",
    prompt: "Which topic would you happily read about for fun?",
    options: [
      { id: "q6a", label: "Psychology of how people use products", scores: { uiux: 2 }, reason: "You're curious about human behaviour" },
      { id: "q6b", label: "How neural networks actually work", scores: { "ai-engineer": 2 }, reason: "You're curious about how AI works under the hood" },
    ],
  },
];
