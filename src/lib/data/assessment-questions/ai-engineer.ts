import type { AssessmentQuestion } from "@/types";

/**
 * AI Engineer skill assessment. Same shape as the UI/UX set: one question per
 * skill, option `value` = implied proficiency (0–100).
 */
export const AI_ENGINEER_ASSESSMENT: AssessmentQuestion[] = [
  {
    id: "python-1",
    skillId: "python",
    prompt: "How comfortable are you writing Python?",
    type: "single",
    options: [
      { id: "a", label: "Just starting out", value: 25 },
      { id: "b", label: "I can write simple scripts", value: 50 },
      { id: "c", label: "Comfortable with functions, classes, libraries", value: 75 },
      { id: "d", label: "I write clean, idiomatic, tested Python", value: 95 },
    ],
  },
  {
    id: "progfund-1",
    skillId: "programming-fundamentals",
    prompt: "How well do you know data structures and complexity?",
    type: "single",
    options: [
      { id: "a", label: "Not familiar", value: 25 },
      { id: "b", label: "Know lists/dicts, fuzzy on Big-O", value: 50 },
      { id: "c", label: "Comfortable choosing the right structure", value: 75 },
      { id: "d", label: "Reason about complexity and trade-offs fluently", value: 95 },
    ],
  },
  {
    id: "data-1",
    skillId: "data-processing",
    prompt: "Can you clean and prepare a messy dataset?",
    type: "single",
    options: [
      { id: "a", label: "No", value: 20 },
      { id: "b", label: "Basic pandas operations", value: 50 },
      { id: "c", label: "Handle missing data, encoding, scaling", value: 75 },
      { id: "d", label: "Build robust, reusable data pipelines", value: 95 },
    ],
  },
  {
    id: "mlfund-1",
    skillId: "ml-fundamentals",
    prompt: "How well do you understand core ML concepts (train/test, overfitting)?",
    type: "single",
    options: [
      { id: "a", label: "New to them", value: 25 },
      { id: "b", label: "I know the terms", value: 50 },
      { id: "c", label: "I can explain and apply them", value: 75 },
      { id: "d", label: "I reason about bias/variance and validation deeply", value: 95 },
    ],
  },
  {
    id: "model-1",
    skillId: "model-development",
    prompt: "Have you trained and evaluated your own model?",
    type: "single",
    options: [
      { id: "a", label: "Never", value: 20 },
      { id: "b", label: "Followed a tutorial end-to-end", value: 50 },
      { id: "c", label: "Trained models on my own data", value: 75 },
      { id: "d", label: "Tune, evaluate and compare models rigorously", value: 95 },
    ],
  },
  {
    id: "apis-1",
    skillId: "apis",
    prompt: "Can you serve a model behind an API?",
    type: "single",
    options: [
      { id: "a", label: "No", value: 20 },
      { id: "b", label: "I can call existing APIs", value: 50 },
      { id: "c", label: "I can build a simple REST endpoint", value: 75 },
      { id: "d", label: "I deploy and document production endpoints", value: 95 },
    ],
  },
  {
    id: "tools-1",
    skillId: "ai-ml-tools",
    prompt: "How familiar are you with the ML ecosystem (numpy, scikit-learn, PyTorch/TF)?",
    type: "single",
    options: [
      { id: "a", label: "Not familiar", value: 25 },
      { id: "b", label: "Used one or two", value: 50 },
      { id: "c", label: "Comfortable across several", value: 75 },
      { id: "d", label: "Fluent, pick the right tool per task", value: 95 },
    ],
  },
];
