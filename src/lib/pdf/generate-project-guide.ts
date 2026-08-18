import type { Project, ProjectGuide } from "@/types";

/**
 * PDF project guide generation.
 *
 * The concrete PDF library is still TBD (README). To keep FE/BE unblocked this
 * module exposes:
 *   - `toProjectGuide()` — normalise a Project into the guide's sections.
 *   - `renderGuideHtml()` — a print-ready HTML string (works today: the client
 *     can `window.print()` it, or a server lib like puppeteer / @react-pdf can
 *     turn it into a real PDF later).
 *
 * Swap `renderGuideHtml` for a real PDF buffer when the library is chosen —
 * the API route (`/api/project/pdf`) already calls into here.
 */
export function toProjectGuide(project: Project): ProjectGuide {
  return {
    title: project.title,
    description: project.description,
    skillsPracticed: project.skillsPracticed,
    coreRequirements: project.coreRequirements.map((r) => r.label),
    technicalRequirements: project.technicalRequirements.map((r) => r.label),
  };
}

export function renderGuideHtml(project: Project): string {
  const g = toProjectGuide(project);
  const bullets = (items: string[]) => items.map((i) => `<li>${escapeHtml(i)}</li>`).join("");
  const checks = (items: string[]) =>
    items.map((i) => `<li>&#9744; ${escapeHtml(i)}</li>`).join("");

  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>${escapeHtml(g.title)} — Project Guide</title>
    <style>
      body { font-family: ui-sans-serif, system-ui, sans-serif; color: #111; max-width: 720px; margin: 40px auto; line-height: 1.5; }
      h1 { font-size: 24px; margin-bottom: 4px; }
      h2 { font-size: 15px; text-transform: uppercase; letter-spacing: .05em; color: #0683F9; margin-top: 28px; }
      hr { border: none; border-top: 1px solid #e5e7eb; margin: 24px 0; }
      ul { padding-left: 18px; }
      .tag { font-size: 12px; color: #666; }
    </style>
  </head>
  <body>
    <p class="tag">PROJECT GUIDE</p>
    <h1>${escapeHtml(g.title)}</h1>
    <p>${escapeHtml(g.description)}</p>
    <hr />
    <h2>Skills You'll Practice</h2>
    <ul>${bullets(g.skillsPracticed)}</ul>
    <hr />
    <h2>Core Requirements</h2>
    <ul>${checks(g.coreRequirements)}</ul>
    <hr />
    <h2>Technical Requirements</h2>
    <ul>${checks(g.technicalRequirements)}</ul>
  </body>
</html>`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
