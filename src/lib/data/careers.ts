import type { Career, Skill } from "@/types";

/**
 * ── Skill registry ─────────────────────────────────────────────────────────
 * Central taxonomy. Both careers reference skills by id, and the assessment
 * questions measure these same ids so everything lines up in the skill-gap step.
 */
export const SKILLS: Record<string, Skill> = {
  // UI/UX
  "user-research": {
    id: "user-research",
    name: "User Research",
    description:
      "Understanding who your users are and how they behave — the foundation of every design decision.",
  },
  "ux-design": {
    id: "ux-design",
    name: "UX Design",
    description:
      "Shaping the end-to-end experience: flows, structure and how a product feels to use.",
  },
  "information-architecture": {
    id: "information-architecture",
    name: "Information Architecture",
    description:
      "Organising content and navigation so people find what they need without effort.",
  },
  wireframing: {
    id: "wireframing",
    name: "Wireframing",
    description: "Rough, low-fidelity layouts that map structure and priority before polish.",
  },
  prototyping: {
    id: "prototyping",
    name: "Prototyping",
    description: "Turning ideas into clickable, testable flows.",
  },
  "usability-testing": {
    id: "usability-testing",
    name: "Usability Testing",
    description: "Observing real users to find friction and validate design decisions.",
  },
  "visual-design": {
    id: "visual-design",
    name: "Visual / UI Design",
    description: "Crafting the look: typography, colour, spacing and visual hierarchy.",
  },
  // AI Engineer
  python: {
    id: "python",
    name: "Python",
    description:
      "The core language for AI work — writing clear, idiomatic code and using its ecosystem.",
  },
  "programming-fundamentals": {
    id: "programming-fundamentals",
    name: "Programming Fundamentals",
    description: "Data structures, logic and algorithms — the base any engineer builds on.",
  },
  "data-processing": {
    id: "data-processing",
    name: "Data Processing",
    description: "Cleaning, shaping and preparing messy data so models can learn from it.",
  },
  "ml-fundamentals": {
    id: "ml-fundamentals",
    name: "Machine Learning Fundamentals",
    description: "Core concepts like train/test splits, overfitting and evaluation.",
  },
  "model-development": {
    id: "model-development",
    name: "Model Development",
    description: "Training, tuning and evaluating models end-to-end.",
  },
  apis: {
    id: "apis",
    name: "APIs",
    description: "Exposing models and data through endpoints other apps can call.",
  },
  "ai-ml-tools": {
    id: "ai-ml-tools",
    name: "AI / ML Tools",
    description:
      "The libraries and platforms (numpy, scikit-learn, PyTorch) used to build AI systems.",
  },
};

export function skillName(skillId: string): string {
  return SKILLS[skillId]?.name ?? skillId;
}

export function skillDescription(skillId: string): string | undefined {
  return SKILLS[skillId]?.description;
}

/**
 * ── Career definitions ─────────────────────────────────────────────────────
 * `target` = the proficiency a job-ready candidate is expected to reach.
 * `weight` = how central the skill is to the role (used for overall readiness).
 */
export const CAREERS: Career[] = [
  {
    id: "uiux",
    name: "UI/UX Designer",
    emoji: "🎨",
    tagline: "Design experiences people love to use.",
    description:
      "UI/UX Designers research users, structure information, and craft interfaces — turning user needs into intuitive, tested products.",
    skills: [
      { skillId: "user-research", target: 75, weight: 1.2 },
      { skillId: "ux-design", target: 80, weight: 1.3 },
      { skillId: "information-architecture", target: 70, weight: 1.0 },
      { skillId: "wireframing", target: 75, weight: 1.0 },
      { skillId: "prototyping", target: 75, weight: 1.1 },
      { skillId: "usability-testing", target: 70, weight: 1.1 },
      { skillId: "visual-design", target: 80, weight: 1.2 },
    ],
  },
  {
    id: "ai-engineer",
    name: "AI Engineer",
    emoji: "🤖",
    tagline: "Build intelligent systems that learn from data.",
    description:
      "AI Engineers write solid code, wrangle data, and develop and ship machine-learning models behind real applications.",
    skills: [
      { skillId: "python", target: 85, weight: 1.3 },
      { skillId: "programming-fundamentals", target: 80, weight: 1.2 },
      { skillId: "data-processing", target: 75, weight: 1.1 },
      { skillId: "ml-fundamentals", target: 80, weight: 1.3 },
      { skillId: "model-development", target: 75, weight: 1.2 },
      { skillId: "apis", target: 70, weight: 1.0 },
      { skillId: "ai-ml-tools", target: 70, weight: 1.0 },
    ],
  },
];

export function getCareer(careerId: string): Career | undefined {
  return CAREERS.find((c) => c.id === careerId);
}
