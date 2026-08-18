import type { AssessmentQuestion } from "@/types";

/**
 * UI/UX skill assessment — 15 questions across 7 skills.
 *
 * Each skill has 1 base question. To sharpen the read on skills that
 * matter most for readiness (UX Design in particular) or that are easy
 * to fake without hands-on practice, a second dimension is added:
 *
 * - TECHNICAL: tests whether they actually do the practice, not just
 *   know the term.
 * - SELF-REFLECTION: asks them to judge their own past work honestly —
 *   surfaces gaps a knowledge question alone would miss (e.g. someone
 *   can define usability testing but never acted on the findings).
 *
 * Distribution (15 total):
 *   User Research            — 2 (base + technical)
 *   UX Design                — 3 (base + technical + self-reflection)
 *   Information Architecture — 2 (base + self-reflection)
 *   Wireframing               — 2 (base + technical)
 *   Prototyping                — 2 (base + self-reflection)
 *   Usability Testing        — 2 (base + technical)
 *   Visual / UI Design       — 2 (base + self-reflection)
 */
export const UIUX_ASSESSMENT: AssessmentQuestion[] = [
  // ── User Research (2) ──────────────────────────────────────────
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
    id: "user-research-2",
    skillId: "user-research",
    prompt: "How do you turn raw interview notes into something usable for design decisions?",
    type: "single",
    options: [
      { id: "a", label: "I don't have a process, I just remember the highlights", value: 15 },
      { id: "b", label: "I re-read notes and pull out a few takeaways", value: 45 },
      { id: "c", label: "I do affinity diagramming or thematic coding", value: 70 },
      { id: "d", label: "I synthesize into personas or insight statements the team can act on", value: 95 },
    ],
  },

  // ── UX Design (3) ───────────────────────────────────────────────
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
    id: "ux-design-2",
    skillId: "ux-design",
    prompt: "How do you handle edge cases (empty states, errors, permission limits) when designing a flow?",
    type: "single",
    options: [
      { id: "a", label: "I usually only design the 'happy path'", value: 20 },
      { id: "b", label: "I think about them but don't always design them", value: 45 },
      { id: "c", label: "I design the main edge cases", value: 70 },
      { id: "d", label: "I map every state systematically before moving to visuals", value: 95 },
    ],
  },
  {
    id: "ux-design-3",
    skillId: "ux-design",
    prompt: "Looking back at flows you've designed, how often did devs or QA catch gaps you missed?",
    type: "single",
    options: [
      { id: "a", label: "Often — I usually find out late", value: 20 },
      { id: "b", label: "Sometimes, on the trickier flows", value: 45 },
      { id: "c", label: "Rarely, I catch most of it myself", value: 75 },
      { id: "d", label: "Almost never, I review flows before handoff", value: 95 },
    ],
  },

  // ── Information Architecture (2) ────────────────────────────────
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
    id: "ia-3",
    skillId: "information-architecture",
    prompt: "How confident are you that a first-time user could find what they need in something you've structured, without you explaining it?",
    type: "single",
    options: [
      { id: "a", label: "Not confident, I usually have to walk people through it", value: 20 },
      { id: "b", label: "Somewhat, for the main paths", value: 45 },
      { id: "c", label: "Fairly confident, I've had people navigate it unaided", value: 75 },
      { id: "d", label: "Very confident, I've tested it and it holds up", value: 95 },
    ],
  },

  // ── Wireframing (2) ──────────────────────────────────────────────
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
    id: "wireframe-2",
    skillId: "wireframing",
    prompt: "How do you communicate interaction states (hover, disabled, loading, error) in a wireframe?",
    type: "single",
    options: [
      { id: "a", label: "I usually only wireframe the default state", value: 15 },
      { id: "b", label: "I mention it in a note if I remember", value: 40 },
      { id: "c", label: "I wireframe the key states separately", value: 70 },
      { id: "d", label: "I document all relevant states as part of the wireframe set", value: 95 },
    ],
  },

  // ── Prototyping (2) ───────────────────────────────────────────────
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
    id: "prototype-3",
    skillId: "prototyping",
    prompt: "When you've shared a prototype with real users, how close was their actual behavior to what you expected?",
    type: "single",
    options: [
      { id: "a", label: "I haven't tested a prototype with real users yet", value: 15 },
      { id: "b", label: "Quite different — I was often surprised", value: 40 },
      { id: "c", label: "Mostly matched, with a few surprises", value: 70 },
      { id: "d", label: "Very close, my assumptions usually hold up", value: 95 },
    ],
  },

  // ── Usability Testing (2) ───────────────────────────────────────
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
    id: "usability-2",
    skillId: "usability-testing",
    prompt: "How do you write a usability test script?",
    type: "single",
    options: [
      { id: "a", label: "I just ask people to click around and share thoughts", value: 20 },
      { id: "b", label: "I write a few loose tasks", value: 45 },
      { id: "c", label: "I write clear tasks with defined success criteria", value: 75 },
      { id: "d", label: "I write tasks, success criteria, and a consistent facilitation script", value: 95 },
    ],
  },

  // ── Visual / UI Design (2) ───────────────────────────────────────
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
  {
    id: "visual-3",
    skillId: "visual-design",
    prompt: "When you compare your work to polished products you admire, how big is the gap you notice?",
    type: "single",
    options: [
      { id: "a", label: "Very big, I'm not sure how to close it", value: 20 },
      { id: "b", label: "Noticeable, mostly in the small details", value: 45 },
      { id: "c", label: "Small, I can usually tell what's missing and fix it", value: 75 },
      { id: "d", label: "Minimal, my work holds up to that standard", value: 95 },
    ],
  },
];