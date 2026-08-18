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
    difficulty: "intermediate",
    referenceLinks: [],
    suggestedTools: ["Figma", "Maze (prototype testing)"],
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
    difficulty: "intermediate",
    referenceLinks: [],
    suggestedTools: ["Figma"],
  },

  // ───────────────────────── BEGINNER ─────────────────────────

  {
    id: "uiux-beginner-portfolio-wireframe",
    careerId: "uiux",
    difficulty: "beginner",
    title: "Wireframe a Personal Portfolio Site",
    description:
      "Design low- to mid-fidelity wireframes for a personal portfolio website showcasing projects, skills, and contact info. Focus on getting a clear visual hierarchy and layout before worrying about final styling.",
    skillsPracticed: ["Wireframing", "Visual Design"],
    coreRequirements: [
      { id: "c1", label: "Include a homepage, a project list, and a contact section" },
      { id: "c2", label: "Show a clear visual hierarchy (name/role, featured work, contact)" },
      { id: "c3", label: "Design for both desktop and mobile layouts" },
    ],
    technicalRequirements: [
      { id: "t1", label: "Use Figma frames for desktop (1440px) and mobile (375px)" },
      { id: "t2", label: "Use a consistent 8px spacing grid" },
      { id: "t3", label: "Apply one typeface family with at most 3 weights" },
    ],
    referenceLinks: [
      { title: "Dribbble — portfolio website designs", url: "https://dribbble.com/search/portfolio-website" },
      { title: "Behance — personal portfolio layouts", url: "https://www.behance.net/search/projects?search=portfolio%20website" },
    ],
    suggestedTools: ["Figma", "Unsplash (for placeholder imagery)"],
    matchedGaps: [],
    primarySkillIds: ["wireframing", "visual-design"],
  },

  {
    id: "uiux-beginner-recipe-app-ia",
    careerId: "uiux",
    difficulty: "beginner",
    title: "Redesign the Navigation of a Recipe App",
    description:
      "Take an existing (or hypothetical) recipe app and restructure its navigation so users can find recipes by category, ingredient, or cooking time without getting lost.",
    skillsPracticed: ["Information Architecture", "Wireframing"],
    coreRequirements: [
      { id: "c1", label: "Users can browse recipes by at least 3 different filters" },
      { id: "c2", label: "Navigation never requires more than 3 taps to reach a recipe" },
      { id: "c3", label: "Include a clear back/breadcrumb pattern" },
    ],
    technicalRequirements: [
      { id: "t1", label: "Produce a sitemap diagram before wireframing" },
      { id: "t2", label: "Wireframe at least 4 key screens" },
      { id: "t3", label: "Use consistent iconography for navigation elements" },
    ],
    referenceLinks: [
      { title: "Tasty — recipe app", url: "https://tasty.co" },
      { title: "Dribbble — recipe app navigation", url: "https://dribbble.com/search/recipe-app-navigation" },
    ],
    suggestedTools: ["Figma", "Whimsical or FigJam (for sitemap)"],
    matchedGaps: [],
    primarySkillIds: ["information-architecture", "wireframing"],
  },

  {
    id: "uiux-beginner-contact-form-audit",
    careerId: "uiux",
    difficulty: "beginner",
    title: "Usability Audit of a Contact Form",
    description:
      "Pick an existing contact or signup form (yours, a classmate's, or a public site) and run a lightweight usability audit: identify friction points and propose fixes.",
    skillsPracticed: ["Usability Testing", "UX Design"],
    coreRequirements: [
      { id: "c1", label: "Document at least 5 usability issues with the current form" },
      { id: "c2", label: "Propose a redesigned version addressing each issue" },
      { id: "c3", label: "Explain the reasoning behind each fix using a UX principle" },
    ],
    technicalRequirements: [
      { id: "t1", label: "Use a simple heuristic evaluation checklist (e.g. Nielsen's 10 heuristics)" },
      { id: "t2", label: "Present findings as a short annotated report or slide" },
      { id: "t3", label: "Include before/after screenshots or mockups" },
    ],
    referenceLinks: [
      { title: "Nielsen Norman Group — 10 Usability Heuristics", url: "https://www.nngroup.com/articles/ten-usability-heuristics/" },
    ],
    suggestedTools: ["Figma", "Google Docs or Notion (for the report)"],
    matchedGaps: [],
    primarySkillIds: ["usability-testing", "ux-design"],
  },

  {
    id: "uiux-beginner-weather-app-style-guide",
    careerId: "uiux",
    difficulty: "beginner",
    title: "Build a Visual Style Guide for a Weather App",
    description:
      "Create a small but cohesive visual design system for a weather app: color palette, typography, iconography, and component states (sunny, rainy, night mode, etc.).",
    skillsPracticed: ["Visual Design"],
    coreRequirements: [
      { id: "c1", label: "Cover at least 4 weather conditions with distinct visual treatment" },
      { id: "c2", label: "Include both light and dark mode palettes" },
      { id: "c3", label: "Show the style guide applied to one sample screen" },
    ],
    technicalRequirements: [
      { id: "t1", label: "Define a color palette with accessible contrast ratios (WCAG AA)" },
      { id: "t2", label: "Define a type scale (headings, body, captions)" },
      { id: "t3", label: "Create or source a consistent icon set" },
    ],
    referenceLinks: [
      { title: "Dribbble — weather app UI", url: "https://dribbble.com/search/weather-app" },
      { title: "WebAIM — Contrast Checker", url: "https://webaim.org/resources/contrastchecker/" },
    ],
    suggestedTools: ["Figma", "Coolors (palette generation)", "WebAIM Contrast Checker"],
    matchedGaps: [],
    primarySkillIds: ["visual-design"],
  },

  {
    id: "uiux-beginner-coffee-shop-sitemap",
    careerId: "uiux",
    difficulty: "beginner",
    title: "Sitemap for a Local Coffee Shop Website",
    description:
      "Plan the information structure for a small business website (menu, locations, ordering, about) before any visual design work begins.",
    skillsPracticed: ["Information Architecture"],
    coreRequirements: [
      { id: "c1", label: "Cover menu, locations, online ordering, and about/contact" },
      { id: "c2", label: "Group content logically so nothing feels orphaned" },
      { id: "c3", label: "Keep the structure to a maximum of 2 levels deep" },
    ],
    technicalRequirements: [
      { id: "t1", label: "Produce a sitemap diagram (boxes and lines)" },
      { id: "t2", label: "Label each page with its primary purpose" },
      { id: "t3", label: "Note which pages are candidates for the main nav vs. footer" },
    ],
    referenceLinks: [
      { title: "Blue Bottle Coffee — site structure reference", url: "https://bluebottlecoffee.com" },
    ],
    suggestedTools: ["FigJam", "Whimsical"],
    matchedGaps: [],
    primarySkillIds: ["information-architecture"],
  },

  {
    id: "uiux-beginner-todo-app-wireframes",
    careerId: "uiux",
    difficulty: "beginner",
    title: "Wireframe a To-Do List App",
    description:
      "Design the core screens of a simple to-do list app: task list, add/edit task, and completed tasks view. A classic first UX project to practice translating user needs into layout.",
    skillsPracticed: ["Wireframing", "UX Design"],
    coreRequirements: [
      { id: "c1", label: "Users can add, edit, complete, and delete a task" },
      { id: "c2", label: "Empty state is designed (no tasks yet)" },
      { id: "c3", label: "Completed tasks are visually distinguished from pending ones" },
    ],
    technicalRequirements: [
      { id: "t1", label: "Wireframe at least 4 states: empty, list, add task, completed" },
      { id: "t2", label: "Use low-fidelity wireframes (grayscale, no final styling)" },
      { id: "t3", label: "Annotate key interactions (tap to complete, swipe to delete, etc.)" },
    ],
    referenceLinks: [
      { title: "Todoist", url: "https://todoist.com" },
      { title: "Dribbble — to-do app UI", url: "https://dribbble.com/search/todo-app" },
    ],
    suggestedTools: ["Figma"],
    matchedGaps: [],
    primarySkillIds: ["wireframing", "ux-design"],
  },

  {
    id: "uiux-beginner-fitness-persona",
    careerId: "uiux",
    difficulty: "beginner",
    title: "User Persona for a Fitness App",
    description:
      "Conduct lightweight user research (interviews or a survey with 5+ people) and synthesize the findings into 1-2 user personas for a fitness tracking app.",
    skillsPracticed: ["User Research"],
    coreRequirements: [
      { id: "c1", label: "Interview or survey at least 5 potential users" },
      { id: "c2", label: "Produce 1-2 personas with goals, frustrations, and behaviors" },
      { id: "c3", label: "Back each persona claim with a real quote or data point from research" },
    ],
    technicalRequirements: [
      { id: "t1", label: "Write and run a short interview/survey script" },
      { id: "t2", label: "Synthesize findings using an affinity map" },
      { id: "t3", label: "Present personas in a clean 1-page format" },
    ],
    referenceLinks: [
      { title: "NN/g — Personas 101", url: "https://www.nngroup.com/articles/persona/" },
    ],
    suggestedTools: ["Google Forms", "FigJam (affinity mapping)", "Figma (persona template)"],
    matchedGaps: [],
    primarySkillIds: ["user-research"],
  },

  {
    id: "uiux-beginner-bookclub-survey",
    careerId: "uiux",
    difficulty: "beginner",
    title: "Design a Discovery Survey for a Book Club App",
    description:
      "Design a short onboarding survey that helps a book club app recommend the right reading groups to new users, balancing usefulness against survey fatigue.",
    skillsPracticed: ["User Research", "UX Design"],
    coreRequirements: [
      { id: "c1", label: "Survey has no more than 6 questions" },
      { id: "c2", label: "Question order flows logically (broad to specific)" },
      { id: "c3", label: "Include a skip option for users in a hurry" },
    ],
    technicalRequirements: [
      { id: "t1", label: "Wireframe each survey screen" },
      { id: "t2", label: "Justify each question with what it's used for downstream" },
      { id: "t3", label: "Design a results/confirmation screen" },
    ],
    referenceLinks: [
      { title: "Dribbble — onboarding survey UI", url: "https://dribbble.com/search/onboarding-survey" },
    ],
    suggestedTools: ["Figma", "Typeform (for inspiration on flow)"],
    matchedGaps: [],
    primarySkillIds: ["user-research", "ux-design"],
  },

  {
    id: "uiux-beginner-movie-ticket-prototype",
    careerId: "uiux",
    difficulty: "beginner",
    title: "Static Prototype for a Movie Ticket Booking Screen",
    description:
      "Turn a wireframe of a movie seat-selection and checkout screen into a clickable (non-animated) prototype, practicing the basics of connecting screens in Figma.",
    skillsPracticed: ["Prototyping", "Wireframing"],
    coreRequirements: [
      { id: "c1", label: "Cover seat selection, ticket summary, and payment confirmation" },
      { id: "c2", label: "Selected seats are visually distinct from available/taken seats" },
      { id: "c3", label: "User can go back and change their seat selection" },
    ],
    technicalRequirements: [
      { id: "t1", label: "Wireframe at least 3 screens" },
      { id: "t2", label: "Link screens together using Figma's prototyping mode (basic clicks, no animation required)" },
      { id: "t3", label: "Share a working preview link" },
    ],
    referenceLinks: [
      { title: "Fandango — seat selection reference", url: "https://www.fandango.com" },
      { title: "Dribbble — seat selection UI", url: "https://dribbble.com/search/seat-selection" },
    ],
    suggestedTools: ["Figma"],
    matchedGaps: [],
    primarySkillIds: ["prototyping", "wireframing"],
  },

  {
    id: "uiux-beginner-meditation-visual-style",
    careerId: "uiux",
    difficulty: "beginner",
    title: "Icon Set & Color Palette for a Meditation App",
    description:
      "Design a small, calming icon set and color palette for a meditation app, practicing how visual choices communicate mood and brand personality.",
    skillsPracticed: ["Visual Design"],
    coreRequirements: [
      { id: "c1", label: "Design at least 8 icons covering core app actions (play, pause, timer, favorites, etc.)" },
      { id: "c2", label: "Icons share a consistent stroke weight and corner radius" },
      { id: "c3", label: "Color palette conveys a calm, non-jarring mood" },
    ],
    technicalRequirements: [
      { id: "t1", label: "Build icons on a consistent grid (e.g. 24x24px)" },
      { id: "t2", label: "Export icons as an organized Figma component set" },
      { id: "t3", label: "Check color contrast for accessibility" },
    ],
    referenceLinks: [
      { title: "Calm app", url: "https://www.calm.com" },
      { title: "Dribbble — meditation app icons", url: "https://dribbble.com/search/meditation-app-icons" },
    ],
    suggestedTools: ["Figma", "Coolors"],
    matchedGaps: [],
    primarySkillIds: ["visual-design"],
  },

  // ───────────────────────── INTERMEDIATE ─────────────────────────

  {
    id: "uiux-intermediate-ecommerce-product-page",
    careerId: "uiux",
    difficulty: "intermediate",
    title: "Redesign an E-commerce Product Page",
    description:
      "Redesign a product detail page (images, variants, reviews, add-to-cart) for an online store, balancing visual appeal with clear, frictionless purchase decisions.",
    skillsPracticed: ["UX Design", "Visual Design", "Wireframing"],
    coreRequirements: [
      { id: "c1", label: "Users can view product images, select variants, and add to cart" },
      { id: "c2", label: "Reviews/ratings are visible without excessive scrolling" },
      { id: "c3", label: "Out-of-stock variants are clearly communicated" },
    ],
    technicalRequirements: [
      { id: "t1", label: "Wireframe the page before applying visual design" },
      { id: "t2", label: "Design both desktop and mobile versions" },
      { id: "t3", label: "Use a consistent component library (buttons, tags, cards)" },
    ],
    referenceLinks: [
      { title: "Allbirds — product page reference", url: "https://www.allbirds.com" },
      { title: "Dribbble — ecommerce product page", url: "https://dribbble.com/search/ecommerce-product-page" },
    ],
    suggestedTools: ["Figma", "Unsplash (product imagery)"],
    matchedGaps: [],
    primarySkillIds: ["ux-design", "visual-design", "wireframing"],
  },

  {
    id: "uiux-intermediate-ridesharing-onboarding",
    careerId: "uiux",
    difficulty: "intermediate",
    title: "Onboarding Flow for a Ride-Sharing App",
    description:
      "Research what new riders need to feel confident booking their first ride, then design and prototype an onboarding flow that builds that trust quickly.",
    skillsPracticed: ["User Research", "Wireframing", "Prototyping"],
    coreRequirements: [
      { id: "c1", label: "Cover account setup, payment method, and first-ride guidance" },
      { id: "c2", label: "Address at least one trust/safety concern identified in research" },
      { id: "c3", label: "Onboarding can be completed in under 5 screens" },
    ],
    technicalRequirements: [
      { id: "t1", label: "Conduct at least 3 short user interviews on ride-sharing trust concerns" },
      { id: "t2", label: "Wireframe the full flow before prototyping" },
      { id: "t3", label: "Build a clickable prototype connecting all screens" },
    ],
    referenceLinks: [
      { title: "Uber onboarding reference", url: "https://www.uber.com" },
      { title: "Dribbble — onboarding flow", url: "https://dribbble.com/search/app-onboarding-flow" },
    ],
    suggestedTools: ["Figma", "Google Meet or in-person interviews", "Maze (optional prototype testing)"],
    matchedGaps: [],
    primarySkillIds: ["user-research", "wireframing", "prototyping"],
  },

  {
    id: "uiux-intermediate-course-registration-ia",
    careerId: "uiux",
    difficulty: "intermediate",
    title: "Redesign the IA of a University Course Registration Portal",
    description:
      "Course registration portals are notoriously confusing. Research how students actually search for and register for classes, then restructure the information architecture around that behavior.",
    skillsPracticed: ["Information Architecture", "User Research", "Wireframing"],
    coreRequirements: [
      { id: "c1", label: "Students can search courses by department, time, and credit hours" },
      { id: "c2", label: "Schedule conflicts are surfaced before final registration" },
      { id: "c3", label: "Waitlist status is clearly visible" },
    ],
    technicalRequirements: [
      { id: "t1", label: "Run a card sort with at least 5 participants to inform the IA" },
      { id: "t2", label: "Produce a sitemap based on card sort results" },
      { id: "t3", label: "Wireframe the course search and registration confirmation screens" },
    ],
    referenceLinks: [
      { title: "NN/g — Card Sorting", url: "https://www.nngroup.com/articles/card-sorting-definition/" },
    ],
    suggestedTools: ["Optimal Workshop or Maze (card sorting)", "FigJam", "Figma"],
    matchedGaps: [],
    primarySkillIds: ["information-architecture", "user-research", "wireframing"],
  },

  {
    id: "uiux-intermediate-food-delivery-checkout-test",
    careerId: "uiux",
    difficulty: "intermediate",
    title: "Usability Test a Food Delivery App's Checkout Flow",
    description:
      "Run structured usability tests on a food delivery checkout flow (yours or an existing app's), then design and prototype fixes for the issues you find.",
    skillsPracticed: ["Usability Testing", "UX Design", "Prototyping"],
    coreRequirements: [
      { id: "c1", label: "Test with at least 4 participants using a defined task scenario" },
      { id: "c2", label: "Identify and prioritize issues by severity" },
      { id: "c3", label: "Redesign and prototype fixes for the top 3 issues" },
    ],
    technicalRequirements: [
      { id: "t1", label: "Write a usability test script with clear tasks and success metrics" },
      { id: "t2", label: "Record and summarize session findings" },
      { id: "t3", label: "Build a clickable before/after prototype comparison" },
    ],
    referenceLinks: [
      { title: "NN/g — Usability Testing 101", url: "https://www.nngroup.com/articles/usability-testing-101/" },
    ],
    suggestedTools: ["Figma", "Maze or Lookback (remote testing)", "Zoom (for moderated sessions)"],
    matchedGaps: [],
    primarySkillIds: ["usability-testing", "ux-design", "prototyping"],
  },

  {
    id: "uiux-intermediate-job-portal-search",
    careerId: "uiux",
    difficulty: "intermediate",
    title: "Redesign Search & Filters for a Job Portal",
    description:
      "Job portals often overwhelm users with filter options. Redesign the search and filtering experience so users can narrow down listings efficiently without feeling lost.",
    skillsPracticed: ["Information Architecture", "UX Design", "Wireframing"],
    coreRequirements: [
      { id: "c1", label: "Users can filter by at least 4 criteria (location, salary, type, experience level)" },
      { id: "c2", label: "Applied filters are visible and easy to remove" },
      { id: "c3", label: "Empty search results state offers helpful next steps" },
    ],
    technicalRequirements: [
      { id: "t1", label: "Map out the filter logic/hierarchy before wireframing" },
      { id: "t2", label: "Wireframe search results, filter panel, and empty state" },
      { id: "t3", label: "Design for both desktop and mobile filter interactions" },
    ],
    referenceLinks: [
      { title: "LinkedIn Jobs — search reference", url: "https://www.linkedin.com/jobs" },
      { title: "Dribbble — job search filters UI", url: "https://dribbble.com/search/job-search-filters" },
    ],
    suggestedTools: ["Figma", "FigJam"],
    matchedGaps: [],
    primarySkillIds: ["information-architecture", "ux-design", "wireframing"],
  },

  {
    id: "uiux-intermediate-fitness-dashboard-prototype",
    careerId: "uiux",
    difficulty: "intermediate",
    title: "Prototype a Fitness Tracker Dashboard",
    description:
      "Design and prototype a dashboard that summarizes a user's workouts, progress, and goals at a glance, practicing how to present data-heavy content clearly.",
    skillsPracticed: ["Prototyping", "Visual Design", "Wireframing"],
    coreRequirements: [
      { id: "c1", label: "Dashboard shows weekly activity, streaks, and a goal progress indicator" },
      { id: "c2", label: "Key metric is visible without scrolling" },
      { id: "c3", label: "Interaction reveals more detail on tap (e.g. tap a stat to expand)" },
    ],
    technicalRequirements: [
      { id: "t1", label: "Wireframe the dashboard layout with real-ish sample data" },
      { id: "t2", label: "Apply a cohesive visual style (charts, colors, typography)" },
      { id: "t3", label: "Prototype at least one drill-down interaction" },
    ],
    referenceLinks: [
      { title: "Strava — dashboard reference", url: "https://www.strava.com" },
      { title: "Dribbble — fitness dashboard UI", url: "https://dribbble.com/search/fitness-dashboard" },
    ],
    suggestedTools: ["Figma"],
    matchedGaps: [],
    primarySkillIds: ["prototyping", "visual-design", "wireframing"],
  },

  {
    id: "uiux-intermediate-hotel-booking-research",
    careerId: "uiux",
    difficulty: "intermediate",
    title: "User Research & Persona Development for a Hotel Booking App",
    description:
      "Go deeper than a single persona: research different traveler types (business, family, budget) and design how the booking experience should adapt to each.",
    skillsPracticed: ["User Research", "UX Design"],
    coreRequirements: [
      { id: "c1", label: "Research at least 2 distinct traveler segments" },
      { id: "c2", label: "Produce a persona for each segment with distinct needs" },
      { id: "c3", label: "Propose at least one UX difference the app should offer per segment" },
    ],
    technicalRequirements: [
      { id: "t1", label: "Conduct interviews or a survey with at least 8 participants total" },
      { id: "t2", label: "Synthesize findings using an affinity map" },
      { id: "t3", label: "Present personas plus a short journey map for one segment" },
    ],
    referenceLinks: [
      { title: "NN/g — Journey Mapping 101", url: "https://www.nngroup.com/articles/journey-mapping-101/" },
    ],
    suggestedTools: ["Google Forms", "FigJam", "Figma"],
    matchedGaps: [],
    primarySkillIds: ["user-research", "ux-design"],
  },

  {
    id: "uiux-intermediate-music-app-navigation",
    careerId: "uiux",
    difficulty: "intermediate",
    title: "Restructure Navigation for a Music Streaming App",
    description:
      "Music apps balance a lot of content types — playlists, artists, podcasts, downloads. Redesign the navigation structure and test whether users can find things faster.",
    skillsPracticed: ["Information Architecture", "Wireframing", "Usability Testing"],
    coreRequirements: [
      { id: "c1", label: "Cover at least 4 content types (songs, playlists, artists, downloads)" },
      { id: "c2", label: "Most-used actions are reachable within 2 taps" },
      { id: "c3", label: "Validate the new structure with a usability test" },
    ],
    technicalRequirements: [
      { id: "t1", label: "Produce a sitemap comparing old vs. new structure" },
      { id: "t2", label: "Wireframe the main navigation and 3 key screens" },
      { id: "t3", label: "Run a task-based usability test with at least 4 participants" },
    ],
    referenceLinks: [
      { title: "Spotify — navigation reference", url: "https://www.spotify.com" },
    ],
    suggestedTools: ["Figma", "FigJam", "Maze"],
    matchedGaps: [],
    primarySkillIds: ["information-architecture", "wireframing", "usability-testing"],
  },

  {
    id: "uiux-intermediate-telemedicine-appointment-flow",
    careerId: "uiux",
    title: "Design a Telemedicine Appointment Booking Flow",
    description:
      "Design a flow that helps patients book a virtual doctor's appointment with minimal anxiety and confusion — an area where clarity and reassurance matter as much as usability.",
    difficulty: "intermediate",
    skillsPracticed: ["UX Design", "Prototyping", "Wireframing"],
    coreRequirements: [
      { id: "c1", label: "Cover symptom/reason selection, doctor selection, and time slot booking" },
      { id: "c2", label: "Users get clear confirmation of what happens next" },
      { id: "c3", label: "Flow accommodates users who are unsure which specialist they need" },
    ],
    technicalRequirements: [
      { id: "t1", label: "Wireframe the complete flow end-to-end" },
      { id: "t2", label: "Build a clickable prototype with realistic transitions" },
      { id: "t3", label: "Include error/edge states (no slots available, etc.)" },
    ],
    referenceLinks: [
      { title: "Teladoc — reference", url: "https://www.teladochealth.com" },
      { title: "Dribbble — telemedicine app UI", url: "https://dribbble.com/search/telemedicine-app" },
    ],
    suggestedTools: ["Figma"],
    matchedGaps: [],
    primarySkillIds: ["ux-design", "prototyping", "wireframing"],
  },

  {
    id: "uiux-intermediate-language-app-gamification",
    careerId: "uiux",
    difficulty: "intermediate",
    title: "Design Gamification UI for a Language Learning App",
    description:
      "Design streaks, XP, and reward visuals for a language learning app that keep users motivated without feeling manipulative or cluttered.",
    skillsPracticed: ["Visual Design", "UX Design", "Prototyping"],
    coreRequirements: [
      { id: "c1", label: "Include a streak indicator, XP/progress bar, and a reward moment" },
      { id: "c2", label: "Reward moment feels celebratory but doesn't block the user's flow" },
      { id: "c3", label: "Gamification elements stay legible alongside core lesson content" },
    ],
    technicalRequirements: [
      { id: "t1", label: "Design at least one micro-animation or transition for the reward moment" },
      { id: "t2", label: "Prototype the flow from lesson completion to reward screen" },
      { id: "t3", label: "Keep visual style consistent with a defined color/type system" },
    ],
    referenceLinks: [
      { title: "Duolingo — gamification reference", url: "https://www.duolingo.com" },
      { title: "Dribbble — gamification UI", url: "https://dribbble.com/search/gamification-ui" },
    ],
    suggestedTools: ["Figma", "Figma Smart Animate (for prototyping)"],
    matchedGaps: [],
    primarySkillIds: ["visual-design", "ux-design", "prototyping"],
  },

  // ───────────────────────── ADVANCED ─────────────────────────

  {
    id: "uiux-advanced-fintech-onboarding",
    careerId: "uiux",
    difficulty: "advanced",
    title: "Design a Fintech App Onboarding Flow",
    description:
      "Design an onboarding flow for a fintech app that helps first-time users understand core features without feeling overwhelmed. Start from research into what makes people trust (or distrust) a new finance app, then translate that into wireframes and an interactive prototype.",
    skillsPracticed: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
    coreRequirements: [
      { id: "c1", label: "New users understand at least 3 core features within 5 onboarding screens" },
      { id: "c2", label: "Include a skip option for returning or advanced users" },
      { id: "c3", label: "A clear progress indicator is shown at every step" },
    ],
    technicalRequirements: [
      { id: "t1", label: "Interview at least 4 people about trust concerns with finance apps" },
      { id: "t2", label: "Build an interactive prototype in Figma with at least 5 connected frames" },
      { id: "t3", label: "Include micro-interactions/transitions between screens" },
      { id: "t4", label: "Follow a defined design system (color, type, spacing)" },
    ],
    referenceLinks: [
      { title: "Revolut — onboarding reference", url: "https://www.revolut.com" },
      { title: "Dribbble — fintech onboarding", url: "https://dribbble.com/search/fintech-onboarding" },
    ],
    suggestedTools: ["Figma", "Maze (prototype testing)"],
    matchedGaps: [],
    primarySkillIds: ["user-research", "wireframing", "prototyping", "visual-design"],
  },

  {
    id: "uiux-advanced-saas-design-system",
    careerId: "uiux",
    difficulty: "advanced",
    title: "Build a Multi-Platform Design System for a SaaS Product",
    description:
      "Design a scalable design system (components, tokens, patterns) for a SaaS product used across web and a companion mobile app, practicing consistency at scale rather than one-off screens.",
    skillsPracticed: ["Visual Design", "UX Design", "Wireframing", "Prototyping"],
    coreRequirements: [
      { id: "c1", label: "Cover at least 15 reusable components (buttons, inputs, cards, modals, etc.)" },
      { id: "c2", label: "Components have defined states (default, hover, disabled, error)" },
      { id: "c3", label: "System is demonstrated on at least 2 real product screens (web + mobile)" },
    ],
    technicalRequirements: [
      { id: "t1", label: "Define design tokens (color, spacing, typography scale)" },
      { id: "t2", label: "Build components as reusable Figma components with variants" },
      { id: "t3", label: "Document usage guidelines for at least 5 components" },
      { id: "t4", label: "Prototype one flow using only system components" },
    ],
    referenceLinks: [
      { title: "Atlassian Design System", url: "https://atlassian.design" },
      { title: "Material Design", url: "https://m3.material.io" },
    ],
    suggestedTools: ["Figma (Variants & Components)", "Figma Tokens plugin"],
    matchedGaps: [],
    primarySkillIds: ["visual-design", "ux-design", "wireframing", "prototyping"],
  },

  {
    id: "uiux-advanced-patient-portal-redesign",
    careerId: "uiux",
    difficulty: "advanced",
    title: "End-to-End Redesign of a Healthcare Patient Portal",
    description:
      "Take on a full redesign of a patient portal — appointments, records, messaging with providers — starting from research with real or simulated patient needs through to a validated, restructured experience.",
    skillsPracticed: ["User Research", "Information Architecture", "Usability Testing", "UX Design"],
    coreRequirements: [
      { id: "c1", label: "Cover appointments, medical records access, and provider messaging" },
      { id: "c2", label: "Information is organized around patient goals, not internal hospital departments" },
      { id: "c3", label: "Validate the redesign with usability testing and iterate on findings" },
    ],
    technicalRequirements: [
      { id: "t1", label: "Interview or survey at least 6 people about their patient portal frustrations" },
      { id: "t2", label: "Run a card sort to inform the new information architecture" },
      { id: "t3", label: "Wireframe and prototype the 3 core flows" },
      { id: "t4", label: "Usability test with at least 4 participants and document iterations made" },
    ],
    referenceLinks: [
      { title: "NN/g — Healthcare UX resources", url: "https://www.nngroup.com/topic/healthcare/" },
    ],
    suggestedTools: ["Optimal Workshop (card sorting)", "Figma", "Maze"],
    matchedGaps: [],
    primarySkillIds: ["user-research", "information-architecture", "usability-testing", "ux-design"],
  },

  {
    id: "uiux-advanced-logistics-dashboard",
    careerId: "uiux",
    difficulty: "advanced",
    title: "Redesign a B2B Logistics Dashboard with Complex Data",
    description:
      "Design a dashboard for logistics operators tracking shipments, delays, and inventory across many variables — practicing how to make dense, high-stakes data scannable and actionable rather than overwhelming.",
    skillsPracticed: ["UX Design", "Information Architecture", "Visual Design", "Usability Testing"],
    coreRequirements: [
      { id: "c1", label: "Surface the 3-5 most critical metrics without requiring a click" },
      { id: "c2", label: "Users can drill from a summary view into shipment-level detail" },
      { id: "c3", label: "Critical alerts (delays, exceptions) are visually distinct from routine data" },
    ],
    technicalRequirements: [
      { id: "t1", label: "Define an information hierarchy for the dashboard before wireframing" },
      { id: "t2", label: "Choose appropriate chart/table types for each data category" },
      { id: "t3", label: "Design at least 2 states: healthy operations vs. active exceptions" },
      { id: "t4", label: "Usability test the drill-down flow with at least 3 participants" },
    ],
    referenceLinks: [
      { title: "Dribbble — logistics dashboard UI", url: "https://dribbble.com/search/logistics-dashboard" },
      { title: "NN/g — Dashboard Design", url: "https://www.nngroup.com/articles/dashboards-preattentive/" },
    ],
    suggestedTools: ["Figma", "Maze"],
    matchedGaps: [],
    primarySkillIds: ["ux-design", "information-architecture", "visual-design", "usability-testing"],
  },

  {
    id: "uiux-advanced-accessibility-audit-gov",
    careerId: "uiux",
    difficulty: "advanced",
    title: "Accessibility Audit & Redesign of a Government Website",
    description:
      "Government sites must serve everyone, including users with disabilities and low digital literacy. Audit an existing government or public-service site against accessibility standards, then redesign the weakest areas.",
    skillsPracticed: ["Usability Testing", "UX Design", "Visual Design", "Information Architecture"],
    coreRequirements: [
      { id: "c1", label: "Audit against WCAG 2.1 AA criteria and document at least 8 findings" },
      { id: "c2", label: "Redesign the 2-3 most critical pages (e.g. a form, a search page)" },
      { id: "c3", label: "Restructure navigation/content where findings point to IA problems" },
    ],
    technicalRequirements: [
      { id: "t1", label: "Use an accessibility checker plus manual keyboard/screen-reader testing" },
      { id: "t2", label: "Fix color contrast, focus states, and form labeling issues found" },
      { id: "t3", label: "Test the redesign with at least one person relying on assistive technology, if possible" },
      { id: "t4", label: "Document before/after accessibility scores" },
    ],
    referenceLinks: [
      { title: "W3C — WCAG 2.1 Guidelines", url: "https://www.w3.org/TR/WCAG21/" },
      { title: "WebAIM — WAVE Accessibility Tool", url: "https://wave.webaim.org" },
    ],
    suggestedTools: ["WAVE", "Figma", "NVDA or VoiceOver (screen reader testing)"],
    matchedGaps: [],
    primarySkillIds: ["usability-testing", "ux-design", "visual-design", "information-architecture"],
  },

  {
    id: "uiux-advanced-chatbot-conversational-ux",
    careerId: "uiux",
    difficulty: "advanced",
    title: "Design Conversational UX for an AI Chatbot",
    description:
      "Design the conversational flow and UI for an AI-powered customer support chatbot, balancing natural conversation with the reality that the bot will sometimes fail or misunderstand.",
    skillsPracticed: ["User Research", "UX Design", "Prototyping"],
    coreRequirements: [
      { id: "c1", label: "Design flows for at least 3 common user intents" },
      { id: "c2", label: "Design a graceful fallback/handoff-to-human path for when the bot fails" },
      { id: "c3", label: "Conversation tone matches the brand without feeling robotic or evasive" },
    ],
    technicalRequirements: [
      { id: "t1", label: "Research common support questions/pain points from real or simulated users" },
      { id: "t2", label: "Map conversation flows as flowcharts before UI design" },
      { id: "t3", label: "Prototype the chat UI including error/fallback states" },
    ],
    referenceLinks: [
      { title: "Google — Conversation Design guidelines", url: "https://developers.google.com/assistant/conversation-design" },
    ],
    suggestedTools: ["FigJam (flow mapping)", "Figma", "Botsociety (optional, chat prototyping)"],
    matchedGaps: [],
    primarySkillIds: ["user-research", "ux-design", "prototyping"],
  },

  {
    id: "uiux-advanced-banking-cross-platform-consistency",
    careerId: "uiux",
    difficulty: "advanced",
    title: "Cross-Platform Consistency Redesign for a Banking App (Web + Mobile)",
    description:
      "Audit and redesign a banking product so the web and mobile experiences feel like the same product, not two different teams' work — a common real-world challenge at growing companies.",
    skillsPracticed: ["Visual Design", "Information Architecture", "UX Design", "Prototyping"],
    coreRequirements: [
      { id: "c1", label: "Identify at least 5 inconsistencies between the web and mobile experience" },
      { id: "c2", label: "Redesign at least 2 flows so they're structurally consistent across platforms" },
      { id: "c3", label: "Preserve platform-appropriate patterns (e.g. mobile gestures) where it makes sense to differ" },
    ],
    technicalRequirements: [
      { id: "t1", label: "Build a shared component library used by both platform designs" },
      { id: "t2", label: "Wireframe and prototype the same flow on both web and mobile" },
      { id: "t3", label: "Document where and why platform-specific deviations are intentional" },
      { id: "t4", label: "Prototype includes realistic transitions on both platforms" },
    ],
    referenceLinks: [
      { title: "Monzo — reference", url: "https://monzo.com" },
      { title: "Apple Human Interface Guidelines", url: "https://developer.apple.com/design/human-interface-guidelines" },
    ],
    suggestedTools: ["Figma (shared component library)"],
    matchedGaps: [],
    primarySkillIds: ["visual-design", "information-architecture", "ux-design", "prototyping"],
  },

  {
    id: "uiux-advanced-hr-onboarding-portal",
    careerId: "uiux",
    difficulty: "advanced",
    title: "Design an Enterprise HR Onboarding Portal",
    description:
      "New-hire onboarding portals are often clunky, corporate, and confusing. Research what new employees actually need in their first two weeks, then design a portal that guides them without dumping every HR form at once.",
    skillsPracticed: ["User Research", "Information Architecture", "Wireframing", "Usability Testing"],
    coreRequirements: [
      { id: "c1", label: "Content is organized by what a new hire needs in week 1 vs. later" },
      { id: "c2", label: "Users can track onboarding task completion" },
      { id: "c3", label: "Portal surfaces the right contact for each task (IT, HR, manager)" },
    ],
    technicalRequirements: [
      { id: "t1", label: "Interview at least 4 people about their real onboarding experience" },
      { id: "t2", label: "Design an IA that separates time-sensitive vs. reference content" },
      { id: "t3", label: "Wireframe the portal's home, task list, and a document/form screen" },
      { id: "t4", label: "Usability test the task-completion flow with at least 3 participants" },
    ],
    referenceLinks: [
      { title: "Dribbble — HR onboarding portal UI", url: "https://dribbble.com/search/onboarding-portal" },
    ],
    suggestedTools: ["Figma", "FigJam", "Maze"],
    matchedGaps: [],
    primarySkillIds: ["user-research", "information-architecture", "wireframing", "usability-testing"],
  },

  {
    id: "uiux-advanced-marketplace-seller-journey",
    careerId: "uiux",
    difficulty: "advanced",
    title: "Redesign the End-to-End Seller Journey for a Marketplace App",
    description:
      "Design the full journey for someone selling on a marketplace app — from listing creation to managing orders and getting paid — a multi-stage flow that requires balancing many user goals at once.",
    skillsPracticed: ["User Research", "UX Design", "Prototyping", "Usability Testing"],
    coreRequirements: [
      { id: "c1", label: "Cover listing creation, order management, and payout tracking" },
      { id: "c2", label: "First-time sellers get contextual guidance without cluttering the UI for repeat sellers" },
      { id: "c3", label: "Sellers can quickly see what needs their attention (new orders, questions, low stock)" },
    ],
    technicalRequirements: [
      { id: "t1", label: "Interview at least 4 people with marketplace selling experience (Etsy, eBay, etc.)" },
      { id: "t2", label: "Map the full seller journey before designing individual screens" },
      { id: "t3", label: "Prototype the end-to-end flow across at least 6 connected screens" },
      { id: "t4", label: "Usability test the listing-creation flow specifically and iterate" },
    ],
    referenceLinks: [
      { title: "Etsy Seller Handbook — reference", url: "https://www.etsy.com/seller-handbook" },
      { title: "Dribbble — seller dashboard UI", url: "https://dribbble.com/search/seller-dashboard" },
    ],
    suggestedTools: ["Figma", "FigJam", "Maze"],
    matchedGaps: [],
    primarySkillIds: ["user-research", "ux-design", "prototyping", "usability-testing"],
  },

  {
    id: "uiux-advanced-crm-modernization-case-study",
    careerId: "uiux",
    difficulty: "advanced",
    title: "Full Redesign Case Study: Legacy CRM Modernization",
    description:
      "The capstone-level project: take a dated, cluttered legacy CRM and modernize it end-to-end — research, IA, wireframes, prototype, and usability validation — then package it as a complete case study.",
    skillsPracticed: [
      "User Research",
      "Information Architecture",
      "Wireframing",
      "Prototyping",
      "Visual Design",
      "Usability Testing",
    ],
    coreRequirements: [
      { id: "c1", label: "Identify at least 5 core pain points of the legacy CRM through research" },
      { id: "c2", label: "Redesign the information architecture around actual sales workflows" },
      { id: "c3", label: "Deliver a working prototype of at least 3 core flows (contacts, deals, reporting)" },
      { id: "c4", label: "Validate the redesign against the original through usability testing" },
    ],
    technicalRequirements: [
      { id: "t1", label: "Interview at least 5 real or simulated CRM users about current frustrations" },
      { id: "t2", label: "Card sort or tree test the proposed IA before finalizing it" },
      { id: "t3", label: "Wireframe, then apply full visual design, to all 3 core flows" },
      { id: "t4", label: "Build a high-fidelity interactive prototype" },
      { id: "t5", label: "Run comparative usability testing (old vs. new) with at least 4 participants" },
      { id: "t6", label: "Package everything into a written case study with process and outcomes" },
    ],
    referenceLinks: [
      { title: "HubSpot CRM — reference", url: "https://www.hubspot.com/products/crm" },
      { title: "Dribbble — CRM dashboard redesign", url: "https://dribbble.com/search/crm-dashboard" },
    ],
    suggestedTools: ["Figma", "Optimal Workshop (card/tree sort)", "Maze", "Notion (case study writeup)"],
    matchedGaps: [],
    primarySkillIds: [
      "user-research",
      "information-architecture",
      "wireframing",
      "prototyping",
      "visual-design",
      "usability-testing",
    ],
  },

  /* ──────────────────────────── AI Engineer ──────────────────────────────── */
  {
    id: "ai-ecommerce-support-beginner",
    careerId: "ai-engineer",
    difficulty: "beginner",
    title: "Build an E-Commerce Support Agent",
    description:
      "Build a chatbot that answers customer questions from a small help center. You will call an LLM API, write a system prompt that gives the agent a role and scope, load help center content into the prompt, and keep a conversation history so customers can ask follow-up questions.",
    skillsPracticed: [
      "LLMs & Prompting",
      "APIs & Data Handling",
      "RAG & Vector Search",
      "Programming Fundamentals",
    ],
    coreRequirements: [
      { id: "c1", label: "Answer questions about returns, delivery, payments, and account login" },
      { id: "c2", label: "Refuse to answer questions that are outside the help center scope" },
      { id: "c3", label: "Remember what was said earlier in the same conversation" },
      { id: "c4", label: "Give a clear message when it does not have the answer" },
    ],
    technicalRequirements: [
      { id: "t1", label: "Use the Gemini API for both text generation and embeddings" },
      { id: "t2", label: "Store help center content as chunks and retrieve the top 2 by cosine similarity" },
      { id: "t3", label: "Maintain conversation history as a list and send it with every request" },
      { id: "t4", label: "Wrap the agent in a class with a chat() method" },
    ],
    referenceLinks: [
      { title: "Gemini API quickstart", url: "https://ai.google.dev/gemini-api/docs/quickstart" },
      { title: "Gemini embeddings guide", url: "https://ai.google.dev/gemini-api/docs/embeddings" },
    ],
    colabUrl: "https://colab.research.google.com/drive/1hXm4qvkH7rO4LSbklnt0THspQjWw3l0t?usp=sharing",
    suggestedTools: ["Google Colab", "Gemini API", "Python"],
    matchedGaps: [],
    primarySkillIds: ["llm-fundamentals", "apis", "rag", "programming-fundamentals"],
  },
 
  {
    id: "ai-ecommerce-support-intermediate",
    careerId: "ai-engineer",
    difficulty: "intermediate",
    title: "Build and Deploy an E-Commerce Support Agent with Tools",
    description:
      "Extend the beginner agent with real tool use and a live deployment. The agent will look up order status and open support tickets through API calls, handle errors without hallucinating, escalate when it cannot help, and run behind a FastAPI endpoint that anyone can call from a browser or another service.",
    skillsPracticed: [
      "LLMs & Prompting",
      "APIs & Data Handling",
      "RAG & Vector Search",
      "AI Agents & Orchestration",
      "Evaluation & Quality",
      "Deployment",
    ],
    coreRequirements: [
      { id: "c1", label: "Answer help center questions using a vector database" },
      { id: "c2", label: "Look up a real or mock order by order ID and return its status" },
      { id: "c3", label: "Open a support ticket and return a confirmation ticket ID" },
      { id: "c4", label: "Escalate to a human when a tool call fails or the question is out of scope" },
      { id: "c5", label: "Expose the agent through a POST endpoint that accepts a message and returns a response" },
    ],
    technicalRequirements: [
      { id: "t1", label: "Use a vector database (Chroma or similar) instead of a Python list for retrieval" },
      { id: "t2", label: "Implement at least two tools: order_lookup(order_id) and create_ticket(summary)" },
      { id: "t3", label: "Handle tool call failures without hallucinating over the error" },
      { id: "t4", label: "Serve the agent as a FastAPI app with a /chat POST endpoint" },
      { id: "t5", label: "Store API keys and secrets in environment variables, not in the code" },
      { id: "t6", label: "Write a test file that checks escalation fires on out-of-scope questions" },
    ],
    referenceLinks: [
      { title: "FastAPI getting started", url: "https://fastapi.tiangolo.com/tutorial/" },
      { title: "Chroma vector database docs", url: "https://docs.trychroma.com" },
    ],
    colabUrl: "https://colab.research.google.com/drive/1YHgC_NNuMG4HMgWeObKr29zzrIKHjIsf?usp=sharing",
    suggestedTools: ["FastAPI", "Chroma", "Gemini API", "Railway or Render (deployment)"],
    matchedGaps: [],
    primarySkillIds: ["ai-agents", "apis", "deployment", "ai-evaluation"],
  },
 
  {
    id: "ai-ecommerce-support-advanced",
    careerId: "ai-engineer",
    difficulty: "advanced",
    title: "Production-Ready E-Commerce Support Agent",
    description:
      "Take the intermediate agent and make it reliable enough to trust in production. Add a relevance floor that escalates instead of guessing, a semantic cache that skips the LLM for repeated questions, a full eval harness with 30 labeled cases, token cost tracking per request, and a CI step that blocks deploys when eval results drop.",
    skillsPracticed: [
      "LLMs & Prompting",
      "APIs & Data Handling",
      "RAG & Vector Search",
      "AI Agents & Orchestration",
      "Evaluation & Quality",
      "Deployment",
    ],
    coreRequirements: [
      { id: "c1", label: "Answer help center questions with a grounded response that cites the source section" },
      { id: "c2", label: "Escalate automatically when no retrieved chunk scores above the relevance threshold" },
      { id: "c3", label: "Return a cached answer for questions that closely match a previous query" },
      { id: "c4", label: "Pass at least 85% of a 30-question eval set covering answerable, unanswerable, and adversarial cases" },
      { id: "c5", label: "Log the token count and estimated cost for every request" },
    ],
    technicalRequirements: [
      { id: "t1", label: "Set a cosine similarity threshold and escalate when the top chunk scores below it" },
      { id: "t2", label: "Build a semantic cache: embed each incoming question and return a cached answer when similarity to a past question is above a set threshold" },
      { id: "t3", label: "Write an eval harness with at least 30 labeled cases and report pass rate, escalation precision, and escalation recall" },
      { id: "t4", label: "Add a CI step that runs the eval harness and blocks deploy if pass rate drops below 85%" },
      { id: "t5", label: "Containerize the app with Docker and add a /health endpoint" },
      { id: "t6", label: "Cap the agent loop at 5 steps and force escalation if it does not resolve within that limit" },
    ],
    referenceLinks: [
      { title: "Ragas — eval framework for RAG", url: "https://docs.ragas.io" },
    ],
    colabUrl: "https://colab.research.google.com/drive/1bly0xF802WDEWf9HQzY2EpeqpddJYnoH?usp=sharing",
    suggestedTools: ["Docker", "GitHub Actions", "Ragas", "Gemini API", "FastAPI"],
    matchedGaps: [],
    primarySkillIds: ["ai-evaluation", "deployment", "rag", "ai-agents"],
  },
];
