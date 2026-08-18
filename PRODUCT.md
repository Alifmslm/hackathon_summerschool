# IT Career Navigator: product details

This document covers the product in depth: the solution, the user flow, the career paths, each core feature, the product philosophy, the MVP scope, and the future vision. For the short pitch and how to run the project, see [README.md](./README.md).

## Solution

IT Career Navigator gives users two ways to choose a career path.

### 1. Career questionnaire

Users take a questionnaire that covers their interests, preferences, working style, problem-solving preferences, and technology interests. Based on their answers, the system recommends a career path.

### 2. Manual career selection

Users who already know which career they want can skip the questionnaire and select a career path directly.

Both paths lead to the same skill assessment stage.

## User flow

```
                         START
                           │
                           ▼
                  ┌─────────────────┐
                  │  Career Choice   │
                  └────────┬────────┘
                           │
                 ┌─────────┴─────────┐
                 │                   │
                 ▼                   ▼
          Questionnaire          Manual Choice
                 │                   │
                 ▼                   ▼
        Career Recommendation   Select Career
                 │                   │
                 └─────────┬─────────┘
                           ▼
                   Skill Assessment
```

## Career paths

The initial hackathon version covers two career paths.

**UI/UX designer.** The assessment covers user research, UX design, information architecture, wireframing, prototyping, usability testing, and visual and UI design.

**AI engineer.** The assessment covers Python, programming fundamentals, data processing, machine learning fundamentals, model development, APIs, and AI and ML tools.

We will add a third career path if there is enough time during the hackathon. It is an extension, not a core requirement of the MVP.

## Core features

### 1. Career discovery questionnaire

Users answer a series of questions, and the system analyzes their answers and returns a recommended career, a match percentage, an explanation of why the career may fit, and alternative career paths.

**Example:**

```
Your Recommended Career

UI/UX Designer
87% Match

Why?
✓ You enjoy designing experiences
✓ You are interested in understanding users
✓ You prefer creative problem solving

You may also like:
AI Engineer      62%
Other Path       58%
```

### 2. Manual career selection

Users who already know what they want can skip the questionnaire and pick their career path directly.

```
Choose your career path

○ UI/UX Designer
○ AI Engineer
○ Additional Path (if available)
```

The selected career determines which skill assessment the user takes.

### 3. Skill assessment

After selecting a career path, users take a skill assessment that measures their current knowledge and abilities. The assessment differs by career path.

A UI/UX designer may see questions on UX research, user personas, wireframing, usability testing, and design principles. An AI engineer may see questions on Python, machine learning, data preprocessing, model evaluation, and AI concepts.

### 4. Skill gap detection

The system compares the user's current skill level against the skills expected for their selected career path.

**Example:**

```
Your Skill Profile

UX Research       ████████████████  80%
Wireframing       ██████████████░░  70%
Prototyping       ███████████░░░░░  55%
Usability Testing ███████░░░░░░░░░  35%
Visual Design     █████████████░░░  65%
```

It then identifies the biggest gaps.

**Example:**

```
Your Biggest Skill Gaps

🔴 Usability Testing
   Current: 35%
   Target: 70%

🟡 Prototyping
   Current: 55%
   Target: 75%
```

This shows the user what they are already good at and what to improve next.

### 5. Project recommendation

After identifying the user's skill gaps, the system generates a project that helps them practice the missing skills. Instead of telling the user to "learn usability testing," it gives them something to build.

**Example:**

```
Skill Gap:
Usability Testing

Recommended Project:
Redesign and Test a Student Dashboard
```

The project is chosen to match the user's specific skill gaps.

#### Project output

Each generated project has three sections.

**Project description.** A short explanation of what the user should build, the problem the project solves, and why the project fits their skill gaps.

**Example:**

> Design and prototype a student productivity dashboard that helps students manage assignments, deadlines, and study schedules. The project focuses on applying usability testing to identify problems in the user experience and iterating on the design based on user feedback.

**Skills you'll practice.** The system lists the skills the project is meant to develop, and the most important ones map directly to the user's detected skill gaps.

```
Skills You'll Practice
- User Research
- Usability Testing
- Wireframing
- Prototyping
- Interaction Design
```

**Requirements.** The requirements are split into two categories.

Core requirements describe what the project should accomplish from a product or user perspective. For example:

- Users should be able to view their upcoming assignments.
- Users should be able to add and manage tasks.
- Users should be able to filter tasks by deadline.
- The interface should provide clear feedback after completing an action.

Technical requirements describe the technical or implementation constraints. For example:

- Use React and TypeScript.
- Implement responsive design.
- Consume data from an API.
- Implement appropriate loading and error states.
- Use reusable components.

The requirements make the project structured and actionable, rather than just a project idea.

### 6. PDF project guide

After generating the project, users can export it as a PDF.

```
PROJECT GUIDE

Project Title
Project Description

────────────────────────

Skills You'll Practice
• Skill 1
• Skill 2
• Skill 3

────────────────────────

Core Requirements
☐ Requirement 1
☐ Requirement 2
☐ Requirement 3

────────────────────────

Technical Requirements
☐ Requirement 1
☐ Requirement 2
☐ Requirement 3
```

Students can keep this as a reference while building their project.

## Product philosophy

IT Career Navigator is built around one principle: don't just tell students what career they should pursue, help them understand how to get there. The product turns career exploration into actionable development.

```
CAREER GOAL
     ↓
CURRENT SKILLS
     ↓
SKILL GAPS
     ↓
PROJECTS
     ↓
PRACTICE
     ↓
CAREER GROWTH
```

## MVP scope

This project is being built in a one-day hackathon, so the initial scope is intentionally focused.

### Core MVP

- [x] Career discovery questionnaire
- [x] Manual career selection
- [x] UI/UX designer career path
- [x] AI engineer career path
- [x] Career recommendation
- [x] Skill assessment
- [x] Skill gap detection
- [x] Project recommendation
- [x] Project description generation
- [x] Skills-to-practice generation
- [x] Core requirements generation
- [x] Technical requirements generation
- [x] PDF project guide export

### Possible extensions

If time allows, we will attempt to add:

- [ ] One additional career path
- [ ] More advanced project personalization
- [ ] AI-powered project generation
- [ ] More detailed career explanations
- [ ] Progress tracking
- [ ] Project completion tracking
- [ ] Skill reassessment after completing projects

## Future vision

The long-term goal is to turn IT Career Navigator into a personal career development companion for IT students, where users continuously track their progress.

```
Career Goal
     ↓
Skill Assessment
     ↓
Skill Gap
     ↓
Project
     ↓
Build
     ↓
Submit Project
     ↓
Project Review
     ↓
Skill Reassessment
     ↓
Updated Skill Profile
     ↓
Next Project
```

This would turn the platform from a one-time career quiz into a continuous career growth system.

## Why this project

Many platforms offer career quizzes, online courses, coding exercises, or project ideas, but these experiences are usually disconnected from each other. IT Career Navigator connects them into one flow: discover, assess, identify, build.

The goal is to help students move from "I don't know what I should pursue" to "I know what career I want, I know what skills I'm missing, and I know what I should build next."

## Vision

Your career shouldn't end with a quiz result. It should start with one.
