import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder";

/** Project recommendation + PDF export → /api/project/recommend, /api/project/pdf. */
export default function ProjectPage() {
  return (
    <ScreenPlaceholder
      step="Step 4 · Build"
      title="Your Recommended Project"
      description="A buildable project targeting your gaps: description, skills you'll practice, and core + technical requirements. Export it as a PDF guide via /api/project/pdf."
    />
  );
}
