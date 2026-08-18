import type { AssessmentQuestion } from "@/types";

/**
 * AI Engineer skill assessment.
 *
 * Reflects what AI engineers actually do on the job today:
 * building applications on top of LLMs, not training models from scratch.
 * Skills are ordered from foundational to advanced.
 *
 * Contract additions vs. the UI/UX set:
 *   - `category`: groups questions into logical sections for the UI
 *     ("Python & Engineering", "LLMs & Prompting", etc.)
 *     Lets you render a section header between groups and show per-category
 *     scores on the skill gap screen. Safe to ignore if you want a flat list.
 *
 * Option `value` = implied proficiency (0–100).
 */
export const AI_ENGINEER_ASSESSMENT: AssessmentQuestion[] = [

  // ─── CATEGORY 1: Python & Engineering Foundations ──────────────────────────

  {
    id: "python-1",
    skillId: "programming-fundamentals",
    category: "Python & Engineering Foundations",
    prompt: "How comfortable are you writing Python?",
    type: "single",
    options: [
      { id: "a", label: "Just starting out, learning the basics", value: 20 },
      { id: "b", label: "I can write simple scripts and follow tutorials", value: 45 },
      { id: "c", label: "Comfortable with functions, classes, and common libraries", value: 70 },
      { id: "d", label: "I write clean, modular, well-structured Python confidently", value: 95 },
    ],
  },

  {
    id: "git-1",
    skillId: "programming-fundamentals",
    category: "Python & Engineering Foundations",
    prompt: "How do you use version control in your projects?",
    type: "single",
    options: [
      { id: "a", label: "I don't use Git yet", value: 10 },
      { id: "b", label: "I commit and push to a personal repo", value: 40 },
      { id: "c", label: "I use branches, pull requests, and work with others' repos", value: 75 },
      { id: "d", label: "I review PRs, resolve conflicts, and follow team Git workflows", value: 95 },
    ],
  },

  // ─── CATEGORY 2: LLMs & Prompting ──────────────────────────────────────────

  {
    id: "llm-api-1",
    skillId: "llm-fundamentals",
    category: "LLMs & Prompting",
    prompt: "Have you called an LLM API (OpenAI, Anthropic, Gemini, etc.) in your own code?",
    type: "single",
    options: [
      { id: "a", label: "No. Only used ChatGPT through the browser", value: 10 },
      { id: "b", label: "I've run a quick demo or copied a code snippet", value: 35 },
      { id: "c", label: "Yes. I've built something that calls an LLM and handles the response", value: 70 },
      { id: "d", label: "Yes. I handle auth, retries, streaming, and token limits in production", value: 95 },
    ],
  },

  {
    id: "prompt-1",
    skillId: "llm-fundamentals",
    category: "LLMs & Prompting",
    prompt: "How do you approach writing prompts for an LLM?",
    type: "single",
    options: [
      { id: "a", label: "I type what I want and see what happens", value: 15 },
      { id: "b", label: "I know about system prompts and basic instructions", value: 40 },
      { id: "c", label: "I write structured prompts with role, context, and output format", value: 70 },
      { id: "d", label: "I use few-shot examples, chain-of-thought, and test prompts systematically", value: 95 },
    ],
  },

  // ─── CATEGORY 3: APIs & Data Handling ──────────────────────────────────────

  {
    id: "apis-1",
    skillId: "apis",
    category: "APIs & Data Handling",
    prompt: "How comfortable are you working with REST APIs?",
    type: "single",
    options: [
      { id: "a", label: "I'm not sure what a REST API is", value: 10 },
      { id: "b", label: "I can make GET requests and read JSON responses", value: 35 },
      { id: "c", label: "I consume APIs with auth, headers, and error handling", value: 70 },
      { id: "d", label: "I build and deploy my own API endpoints (e.g. with FastAPI or Flask)", value: 95 },
    ],
  },

  // ─── CATEGORY 4: RAG & Vector Search ───────────────────────────────────────

  {
    id: "rag-1",
    skillId: "rag",
    category: "RAG & Vector Search",
    prompt: "Do you know what RAG (Retrieval-Augmented Generation) is?",
    type: "single",
    options: [
      { id: "a", label: "No, this is new to me", value: 5 },
      { id: "b", label: "I know the concept but haven't built one", value: 30 },
      { id: "c", label: "I've built a basic RAG pipeline (chunk → embed → retrieve → generate)", value: 70 },
      { id: "d", label: "I've built and tuned RAG systems with re-ranking, hybrid search, or custom chunking", value: 95 },
    ],
  },

  // ─── CATEGORY 5: AI Agents & Orchestration ─────────────────────────────────

  {
    id: "agents-1",
    skillId: "ai-agents",
    category: "AI Agents & Orchestration",
    prompt: "Have you built anything where an LLM decides what action to take next?",
    type: "single",
    options: [
      { id: "a", label: "No. Only used LLMs to generate text", value: 10 },
      { id: "b", label: "I read about agents, yet to build one", value: 30 },
      { id: "c", label: "I built a basic agent with tool use", value: 70 },
      { id: "d", label: "I ship multi-step agentic systems with error recovery", value: 95 },
    ],
  },

  {
    id: "orchestration-1",
    skillId: "ai-agents",
    category: "AI Agents & Orchestration",
    prompt: "Have you used LangChain, LlamaIndex, or a similar orchestration framework?",
    type: "single",
    options: [
      { id: "a", label: "No", value: 10 },
      { id: "b", label: "I followed a tutorial with one of them", value: 35 },
      { id: "c", label: "Use regularly to build agents", value: 70 },
      { id: "d", label: "I know when to use a framework and when to go without one", value: 95 },
    ],
  },

  // ─── CATEGORY 6: Evaluation & Quality ──────────────────────────────────────

  {
    id: "evals-1",
    skillId: "ai-evaluation",
    category: "Evaluation & Quality",
    prompt: "How do you check if your AI feature is actually working well?",
    type: "single",
    options: [
      { id: "a", label: "I try it manually and see if it looks right", value: 15 },
      { id: "b", label: "I have a set of test prompts to run manually", value: 40 },
      { id: "c", label: "I write automated tests or evals for LLM output quality", value: 75 },
      { id: "d", label: "I track evals over time, catch regressions, and use them to guide improvements", value: 95 },
    ],
  },

  // ─── CATEGORY 7: Deployment & ML Fundamentals ──────────────────────────────

  {
    id: "deployment-1",
    skillId: "deployment",
    category: "Deployment & ML Fundamentals",
    prompt: "Have you deployed an AI application so others can use it?",
    type: "single",
    options: [
      { id: "a", label: "No. It runs on my machine only.", value: 10 },
      { id: "b", label: "I used Streamlit, Gradio, etc for a demo", value: 35 },
      { id: "c", label: "I deployed to a cloud service (Vercel, Railway, AWS, etc.)", value: 70 },
      { id: "d", label: "I deploy with CI/CD, environment configs, and monitoring in place", value: 95 },
    ],
  },

];
