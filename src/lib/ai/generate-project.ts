import OpenAI from "openai";
import { z } from "zod";
import type { CareerId, Project, ProjectDifficulty, SkillGap } from "@/types";
import { projectSchema, requirementSchema } from "@/lib/validators";

/**
 * Generates a tailored project via an LLM, called through the OpenAI SDK's
 * standard chat-completions convention against Gemini's OpenAI-compatible
 * endpoint. Kept provider-portable: swapping providers is a baseURL/apiKey/
 * model change, not a rewrite.
 */
const MODEL = "gemini-3.1-flash-lite";

function getClient(): OpenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  return new OpenAI({
    apiKey,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
  });
}

/** What we ask the model for — `id` and `matchedGaps` are filled in by us. */
const generatedProjectSchema = z.object({
  title: z.string(),
  description: z.string(),
  skillsPracticed: z.array(z.string()),
  coreRequirements: z.array(requirementSchema),
  technicalRequirements: z.array(requirementSchema),
  suggestedTools: z.array(z.string()).optional(),
  referenceLinks: z.array(z.object({ title: z.string(), url: z.string() })).optional(),
});

const responseJsonSchema = {
  type: "object",
  properties: {
    title: { type: "string" },
    description: { type: "string" },
    skillsPracticed: { type: "array", items: { type: "string" } },
    coreRequirements: {
      type: "array",
      items: {
        type: "object",
        properties: { id: { type: "string" }, label: { type: "string" } },
        required: ["id", "label"],
        additionalProperties: false,
      },
    },
    technicalRequirements: {
      type: "array",
      items: {
        type: "object",
        properties: { id: { type: "string" }, label: { type: "string" } },
        required: ["id", "label"],
        additionalProperties: false,
      },
    },
    suggestedTools: { type: "array", items: { type: "string" } },
    referenceLinks: {
      type: "array",
      items: {
        type: "object",
        properties: { title: { type: "string" }, url: { type: "string" } },
        required: ["title", "url"],
        additionalProperties: false,
      },
    },
  },
  required: ["title", "description", "skillsPracticed", "coreRequirements", "technicalRequirements"],
  additionalProperties: false,
} as const;

/**
 * Generates a `Project` tailored to the user's skill gaps. Returns `null` on
 * any failure (no API key, request error, malformed output) so callers can
 * fall back to the static template pool in `recommendProject`.
 */
export async function generateProjectWithAI(
  careerId: CareerId,
  careerName: string,
  gaps: SkillGap[],
  difficulty: ProjectDifficulty
): Promise<Project | null> {
  const client = getClient();
  if (!client) return null;

  const topGaps = [...gaps].sort((a, b) => b.gap - a.gap).slice(0, 5);
  if (topGaps.length === 0) return null;

  try {
    const completion = await client.chat.completions.create({
      model: MODEL,
      messages: [
        {
          role: "system",
          content:
            "You design short, buildable practice projects for students learning a career path. " +
            "Respond only with the requested JSON — no invented reference URLs unless you are confident they are real.",
        },
        {
          role: "user",
          content: [
            `Career: ${careerName} (${careerId})`,
            `Target difficulty: ${difficulty}`,
            "Skill gaps to close (skill: current -> target, gap, severity):",
            ...topGaps.map(
              (g) => `- ${g.name}: ${g.current} -> ${g.target} (gap ${g.gap}, ${g.severity})`
            ),
            "Design one project that closes these gaps. Include a title, description, " +
              "the skills it practices, 3-5 core requirements (user-facing outcomes), " +
              "3-5 technical requirements (implementation constraints), optional suggested " +
              "tools, and optional reference links.",
          ].join("\n"),
        },
      ],
      response_format: {
        type: "json_schema",
        json_schema: { name: "generated_project", schema: responseJsonSchema, strict: true },
      },
    });

    const raw = completion.choices[0]?.message?.content;
    if (!raw) return null;

    const parsed = generatedProjectSchema.safeParse(JSON.parse(raw));
    if (!parsed.success) return null;

    const candidate = {
      id: `ai-${careerId}-${Date.now()}`,
      ...parsed.data,
      matchedGaps: topGaps.map((g) => g.skillId),
      difficulty,
    };

    const validated = projectSchema.safeParse(candidate);
    return validated.success ? validated.data : null;
  } catch (err) {
    console.error("[generate-project] request failed", err);
    return null;
  }
}
