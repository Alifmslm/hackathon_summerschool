import { NextResponse } from "next/server";
import { parseBody, generatePdfSchema } from "@/lib/validators";
import { renderGuidePdf } from "@/lib/pdf/generate-project-guide";

/**
 * POST /api/project/pdf — project → downloadable PDF project guide.
 * Runs on the Node runtime so pdfkit can produce a binary PDF.
 */
export const runtime = "nodejs";

export async function POST(request: Request) {
  const parsed = parseBody(generatePdfSchema, await request.json().catch(() => null));
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error, details: parsed.details }, { status: 400 });
  }

  const pdf = await renderGuidePdf(parsed.data.project);
  return new NextResponse(new Uint8Array(pdf), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Length": String(pdf.length),
      "Content-Disposition": 'attachment; filename="project-guide.pdf"',
    },
  });
}