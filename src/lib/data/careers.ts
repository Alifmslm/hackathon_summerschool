import type { Career, Skill } from "@/types";

/**
 * ── Skill registry ─────────────────────────────────────────────────────────
 * Central taxonomy. Both careers reference skills by id, and the assessment
 * questions measure these same ids so everything lines up in the skill-gap step.
 */
export const SKILLS: Record<string, Skill> = {
  // UI/UX
  "user-research": { id: "user-research", name: "User Research" },
  "ux-design": { id: "ux-design", name: "UX Design" },
  "information-architecture": { id: "information-architecture", name: "Information Architecture" },
  wireframing: { id: "wireframing", name: "Wireframing" },
  prototyping: { id: "prototyping", name: "Prototyping" },
  "usability-testing": { id: "usability-testing", name: "Usability Testing" },
  "visual-design": { id: "visual-design", name: "Visual / UI Design" },
  // AI Engineer
  python: { id: "python", name: "Python" },
  "programming-fundamentals": { id: "programming-fundamentals", name: "Programming Fundamentals" },
  "data-processing": { id: "data-processing", name: "Data Processing" },
  "ml-fundamentals": { id: "ml-fundamentals", name: "Machine Learning Fundamentals" },
  "model-development": { id: "model-development", name: "Model Development" },
  apis: { id: "apis", name: "APIs" },
  "ai-ml-tools": { id: "ai-ml-tools", name: "AI / ML Tools" },
};

export function skillName(skillId: string): string {
  return SKILLS[skillId]?.name ?? skillId;
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
