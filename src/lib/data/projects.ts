import type { ProjectTemplate } from "@/types";

/**
 * Project templates, keyed by the skill gaps they best close (`primarySkillIds`).
 * The recommendation engine (`lib/rules/project-recommendation.ts`) picks the
 * template whose primary skills overlap most with the user's top gaps.
 *
 * TEMPLATE: a couple per career. Add more to cover more gap combinations.
 */
export const PROJECT_TEMPLATES: ProjectTemplate[] = [
  /* ─────────────────────────────── UI/UX ─────────────────────────────────── */
  {
    id: "uiux-student-dashboard",
    careerId: "uiux",
    title: "Redesign and Test a Student Dashboard",
    description:
      "Design and prototype a student productivity dashboard that helps students manage assignments, deadlines and study schedules. Focus on applying usability testing to find UX problems and iterating on the design from real feedback.",
    skillsPracticed: ["User Research", "Usability Testing", "Wireframing", "Prototyping", "Interaction Design"],
    coreRequirements: [
      { id: "c1", label: "Users can view their upcoming assignments." },
      { id: "c2", label: "Users can add and manage tasks." },
      { id: "c3", label: "Users can filter tasks by deadline." },
      { id: "c4", label: "The interface gives clear feedback after each action." },
    ],
    technicalRequirements: [
      { id: "t1", label: "Deliver low-fi wireframes and a high-fi prototype." },
      { id: "t2", label: "Run at least 3 usability tests and log findings." },
      { id: "t3", label: "Document 2 iterations based on test feedback." },
      { id: "t4", label: "Use a consistent component library / design system." },
    ],
    matchedGaps: [],
    primarySkillIds: ["usability-testing", "prototyping", "user-research", "wireframing"],
  },
  {
    id: "uiux-onboarding-flow",
    careerId: "uiux",
    title: "Design a First-Time User Onboarding Flow",
    description:
      "Craft an onboarding experience for a new mobile app that gets users to their first success as fast as possible. Emphasise information architecture and visual design to make each step feel effortless.",
    skillsPracticed: ["UX Design", "Information Architecture", "Visual / UI Design", "Prototyping"],
    coreRequirements: [
      { id: "c1", label: "New users understand the app's value within 3 screens." },
      { id: "c2", label: "Users can skip or revisit onboarding." },
      { id: "c3", label: "Progress through onboarding is always visible." },
    ],
    technicalRequirements: [
      { id: "t1", label: "Provide a clickable prototype of the full flow." },
      { id: "t2", label: "Define a type scale, colour and spacing system." },
      { id: "t3", label: "Show the IA/site map behind the flow." },
    ],
    matchedGaps: [],
    primarySkillIds: ["ux-design", "information-architecture", "visual-design"],
  },

  /* ──────────────────────────── AI Engineer ──────────────────────────────── */
  {
    id: "ai-churn-predictor",
    careerId: "ai-engineer",
    title: "Build and Serve a Customer Churn Predictor",
    description:
      "Take a raw customer dataset, clean it, train a model to predict churn, and expose it behind an API. Focuses on the full path from messy data to a deployed, callable model.",
    skillsPracticed: ["APIs & Data Handling", "RAG & Vector Search", "Evaluation & Quality"],
    coreRequirements: [
      { id: "c1", label: "Predict whether a customer will churn from their profile." },
      { id: "c2", label: "Report accuracy and at least one other metric." },
      { id: "c3", label: "Expose predictions through a simple endpoint." },
    ],
    technicalRequirements: [
      { id: "t1", label: "Build a reproducible data-cleaning pipeline." },
      { id: "t2", label: "Split train/test and evaluate honestly." },
      { id: "t3", label: "Serve the model via a REST API (FastAPI/Flask)." },
      { id: "t4", label: "Document how to run it end-to-end." },
    ],
    matchedGaps: [],
    primarySkillIds: ["apis", "rag", "ai-evaluation"],
  },
  {
    id: "ai-python-foundations",
    careerId: "ai-engineer",
    title: "Data Toolkit: Strengthen Python & Fundamentals",
    description:
      "Build a small command-line data toolkit (load, clean, summarise CSVs) to solidify Python and programming fundamentals before moving into modelling.",
    skillsPracticed: ["Programming Fundamentals", "APIs & Data Handling"],
    coreRequirements: [
      { id: "c1", label: "Load a CSV and print summary statistics." },
      { id: "c2", label: "Clean missing/invalid rows with clear rules." },
      { id: "c3", label: "Let the user query the data from the CLI." },
    ],
    technicalRequirements: [
      { id: "t1", label: "Organise code into functions/modules." },
      { id: "t2", label: "Use numpy/pandas idiomatically." },
      { id: "t3", label: "Add basic unit tests." },
    ],
    matchedGaps: [],
    primarySkillIds: ["programming-fundamentals", "apis"],
  },
];
