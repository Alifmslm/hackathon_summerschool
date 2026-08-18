import type { AssessmentQuestion } from "@/types";

/**
 * UI/UX skill assessment. Each question measures ONE skill (`skillId`) and each
 * option carries a `value` (0–100) = the proficiency that answer implies.
 * The scoring engine averages option values per skill.
 *
 * TEMPLATE: one question per skill here to keep it readable — add more per
 * skill for a sharper measurement; the engine handles any count.
 */
export const UIUX_ASSESSMENT: AssessmentQuestion[] = [
  {
    id: "ux-research-1",
    skillId: "user-research",
    prompt: "How comfortable are you planning and running user interviews?",
    type: "single",
    options: [
      { id: "a", label: "I've never done one", value: 20 },
      { id: "b", label: "I've sat in on a few", value: 45 },
      { id: "c", label: "I can run one with a script", value: 70 },
      { id: "d", label: "I plan, run and synthesise them regularly", value: 95 },
    ],
  },
  {
    id: "ux-design-1",
    skillId: "ux-design",
    prompt: "Can you map a user flow for a multi-step task?",
    type: "single",
    options: [
      { id: "a", label: "Not sure what that means", value: 20 },
      { id: "b", label: "I could sketch a rough one", value: 50 },
      { id: "c", label: "Yes, including edge cases", value: 75 },
      { id: "d", label: "Yes, and I validate it with users", value: 95 },
    ],
  },
  {
    id: "ia-1",
    skillId: "information-architecture",
    prompt: "How would you organise a navigation menu for a large site?",
    type: "single",
    options: [
      { id: "a", label: "I'd guess", value: 25 },
      { id: "b", label: "Group by what feels right", value: 50 },
      { id: "c", label: "Card sorting with a few users", value: 75 },
      { id: "d", label: "Card sorting + tree testing to validate", value: 95 },
    ],
  },
  {
    id: "wireframe-1",
    skillId: "wireframing",
    prompt: "How do you approach wireframing a new screen?",
    type: "single",
    options: [
      { id: "a", label: "I jump straight to visuals", value: 30 },
      { id: "b", label: "Quick paper sketches", value: 55 },
      { id: "c", label: "Low-fi wireframes in a tool", value: 75 },
      { id: "d", label: "Structured low-fi with clear hierarchy", value: 95 },
    ],
  },
  {
    id: "prototype-1",
    skillId: "prototyping",
    prompt: "Can you build a clickable prototype?",
    type: "single",
    options: [
      { id: "a", label: "No", value: 20 },
      { id: "b", label: "Basic screen-to-screen links", value: 50 },
      { id: "c", label: "Interactive with components", value: 75 },
      { id: "d", label: "High-fidelity with realistic interactions", value: 95 },
    ],
  },
  {
    id: "usability-1",
    skillId: "usability-testing",
    prompt: "How do you validate that a design actually works?",
    type: "single",
    options: [
      { id: "a", label: "I assume it works if it looks good", value: 20 },
      { id: "b", label: "Ask a friend's opinion", value: 40 },
      { id: "c", label: "Run informal usability tests", value: 70 },
      { id: "d", label: "Structured tests with tasks + metrics", value: 95 },
    ],
  },
  {
    id: "visual-1",
    skillId: "visual-design",
    prompt: "How confident are you with typography, colour and spacing?",
    type: "single",
    options: [
      { id: "a", label: "Not confident", value: 25 },
      { id: "b", label: "I follow templates", value: 50 },
      { id: "c", label: "I can build a consistent UI", value: 75 },
      { id: "d", label: "I design and maintain a design system", value: 95 },
    ],
  },
];
