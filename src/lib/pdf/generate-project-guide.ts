import PDFDocument from "pdfkit";
import type { Project, ProjectGuide } from "@/types";

/**
 * PDF project guide generation.
 *
 * `renderGuidePdf()` renders a real binary PDF with pdfkit (Node runtime —
 * used by POST /api/project/pdf). `toProjectGuide()` normalises a Project
 * into the guide's sections and is shared with any future renderer.
 */
export function toProjectGuide(project: Project): ProjectGuide {
  return {
    title: project.title,
    description: project.description,
    skillsPracticed: project.skillsPracticed,
    coreRequirements: project.coreRequirements.map((r) => r.label),
    technicalRequirements: project.technicalRequirements.map((r) => r.label),
    difficulty: project.difficulty,
    suggestedTools: project.suggestedTools,
    referenceLinks: project.referenceLinks,
  };
}

const BRAND = "#0683F9";
const INK = "#111827";
const MUTED = "#6B7280";
const LINE = "#E5E7EB";

const MARGIN = 48;

/** Build the project guide as a downloadable PDF buffer. */
export function renderGuidePdf(project: Project): Promise<Buffer> {
  const g = toProjectGuide(project);

  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    const doc = new PDFDocument({
      size: "A4",
      margins: { top: 60, bottom: 56, left: MARGIN, right: MARGIN },
      info: { Title: `${g.title} — Project Guide`, Author: "IT Career Navigator" },
    });

    doc.on("data", (c: Buffer) => chunks.push(Buffer.from(c)));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    doc.rect(0, 0, doc.page.width, 5).fill(BRAND);
    doc.y = 66;

    doc
      .font("Helvetica-Bold")
      .fontSize(9)
      .fillColor(BRAND)
      .text("PROJECT GUIDE", { characterSpacing: 1.5 });
    doc.moveDown(0.5);

    doc.font("Helvetica-Bold").fontSize(22).fillColor(INK).text(g.title, { lineGap: 2 });
    if (g.difficulty) {
      doc
        .font("Helvetica")
        .fontSize(9)
        .fillColor(MUTED)
        .text(`Difficulty: ${g.difficulty.toUpperCase()}`, { characterSpacing: 0.8 });
    }
    doc.moveDown(0.8);

    doc.font("Helvetica").fontSize(11).fillColor(INK).text(g.description, { lineGap: 3 });

    section(doc, "Skills You'll Practice");
    doc.font("Helvetica").fontSize(11).fillColor(INK);
    for (const skill of g.skillsPracticed) {
      bullet(doc, skill);
    }

    section(doc, "Core Requirements");
    for (const req of g.coreRequirements) {
      check(doc, req);
    }

    section(doc, "Technical Requirements");
    for (const req of g.technicalRequirements) {
      check(doc, req);
    }

    if (g.suggestedTools && g.suggestedTools.length > 0) {
      section(doc, "Suggested Tools");
      doc.font("Helvetica").fontSize(11).fillColor(INK);
      for (const tool of g.suggestedTools) {
        bullet(doc, tool);
      }
    }

    if (g.referenceLinks && g.referenceLinks.length > 0) {
      section(doc, "References & Inspiration");
      doc.font("Helvetica").fontSize(11).fillColor(INK);
      for (const ref of g.referenceLinks) {
        doc.text(`${ref.title} — ${ref.url}`, { width: doc.page.width - MARGIN * 2, lineGap: 2 });
        doc.moveDown(0.25);
      }
    }

    // Footer with page numbers.
    const pages = doc.bufferedPageRange();
    for (let i = pages.start; i < pages.start + pages.count; i++) {
      doc.switchToPage(i);
      const bottom = doc.page.height - 40;
      doc
        .font("Helvetica")
        .fontSize(9)
        .fillColor(MUTED)
        .text(`Page ${i + 1} of ${pages.count}`, MARGIN, bottom, {
          align: "right",
          lineBreak: false,
        });
    }

    doc.end();
  });
}

function section(doc: PDFKit.PDFDocument, title: string) {
  doc.moveDown(1.2);
  doc
    .moveTo(MARGIN, doc.y)
    .lineTo(doc.page.width - MARGIN, doc.y)
    .lineWidth(0.6)
    .strokeColor(LINE)
    .stroke();
  doc.moveDown(0.6);
  doc.font("Helvetica-Bold").fontSize(11).fillColor(BRAND).text(title.toUpperCase(), {
    characterSpacing: 0.8,
  });
  doc.moveDown(0.35);
}

function bullet(doc: PDFKit.PDFDocument, text: string) {
  const width = doc.page.width - MARGIN * 2;
  doc.circle(MARGIN + 2.5, doc.y + 3, 1.6).fill(INK);
  doc.text(text, MARGIN + 14, doc.y, { width: width - 14, lineGap: 2 });
  doc.moveDown(0.25);
}

function check(doc: PDFKit.PDFDocument, text: string) {
  const width = doc.page.width - MARGIN * 2;
  const y = doc.y + 1;
  doc.rect(MARGIN, y, 8, 8).lineWidth(1).strokeColor(INK).stroke();
  doc.text(text, MARGIN + 16, y - 1, { width: width - 16, lineGap: 2 });
  doc.moveDown(0.25);
}
