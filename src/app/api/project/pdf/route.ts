import { NextResponse } from "next/server";
import { parseBody, generatePdfSchema } from "@/lib/validators";
import { renderGuideHtml } from "@/lib/pdf/generate-project-guide";

/**
 * POST /api/project/pdf — project → downloadable project guide.
 *
 * Today returns print-ready HTML (the client can print-to-PDF). When a PDF
 * library is chosen, swap `renderGuideHtml` for a real PDF buffer and set the
 * content type to `application/pdf`.
 */
export async function POST(request: Request) {
  const parsed = parseBody(generatePdfSchema, await request.json().catch(() => null));
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error, details: parsed.details }, { status: 400 });
  }

  const html = renderGuideHtml(parsed.data.project);
  return new NextResponse(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Disposition": 'inline; filename="project-guide.html"',
    },
  });
}
