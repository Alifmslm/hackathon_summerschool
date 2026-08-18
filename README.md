# IT Career Navigator

> Discover the IT career path that fits you, understand your current skill level, identify your skill gaps, and get practical projects to help you grow.

## Overview

IT Career Navigator is a web-based platform designed to help IT students discover suitable career paths and understand what they need to improve to pursue those careers.

Many IT students know that they want to work in technology, but are often unsure about which career path fits their interests, how prepared they currently are, and what skills they should focus on next.

This project aims to turn that uncertainty into an actionable roadmap.

---

## Live demo

TODO: add the live website link here.

---

## Run locally

You need Node.js 18 or later installed.

1. Install dependencies.
   ```
   npm install
   ```
2. Start the dev server.
   ```
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

Other commands you can run:

- `npm run build`, to create a production build.
- `npm start`, to run the production build after `npm run build`.
- `npm run lint`, to run ESLint.

---

Instead of simply recommending a career, IT Career Navigator takes users through a complete journey:

**Career Discovery → Skill Assessment → Skill Gap Detection → Project Recommendation**

The recommended projects are designed to help users practice the skills they are currently missing and gradually move toward their desired career path.

---

## Problem

IT students have many possible career paths, such as UI/UX Design, AI Engineering, Frontend Development, Backend Development, and many others.

However, students often face several challenges:

- They do not know which IT career is suitable for them.
- They are unsure about their current skill level.
- They do not know which skills are required for a specific career.
- They struggle to identify their skill gaps.
- They know what they need to learn but do not know how to practice it.
- Learning resources can feel overwhelming because there are too many options.

Most career quizzes stop after telling users:

> "You are suitable for this career."

IT Career Navigator goes one step further:

> **"This career may fit you. Here is where you are now, what you are missing, and what you can build to improve."**

---

## Solution

IT Career Navigator provides two ways for users to choose their career path.

### 1. Career Questionnaire

Users can take a questionnaire designed to understand their:

- Interests
- Preferences
- Working style
- Problem-solving preferences
- Technology interests

Based on their answers, the system recommends a suitable career path.

### 2. Manual Career Selection

Users who already know which career they want to pursue can skip the career discovery questionnaire and manually select a career path.

Both paths eventually lead to the same **Skill Assessment** stage.

---

## User Flow

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

---

## Career Paths

For the initial hackathon version, we will focus on two career paths:

### 🎨 UI/UX Designer

The assessment focuses on skills such as:

- User Research
- UX Design
- Information Architecture
- Wireframing
- Prototyping
- Usability Testing
- Visual / UI Design

### 🤖 AI Engineer

The assessment focuses on skills such as:

- Python
- Programming Fundamentals
- Data Processing
- Machine Learning Fundamentals
- Model Development
- APIs
- AI / ML Tools

> **Note:** We will try to develop one additional career path if there is enough time during the hackathon. The additional career path is currently considered an extension rather than a core requirement of the MVP.

---

## Core Features

### 1. Career Discovery Questionnaire

Users answer a series of questions to discover which career path may be suitable for them.

The system analyzes their answers and provides:

- Recommended career
- Match percentage
- Explanation of why the career may fit
- Alternative career paths

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

### 2. Manual Career Selection

Users who already know what they want can skip the career discovery process.

They can directly select:

```
Choose your career path

○ UI/UX Designer
○ AI Engineer
○ Additional Path (if available)
```

The selected career will determine the skill assessment they receive.

### 3. Skill Assessment

After selecting a career path, users take a skill assessment to measure their current knowledge and abilities.

The assessment is different for each career path.

For example, a **UI/UX Designer** may receive questions about:

- UX research
- User personas
- Wireframing
- Usability testing
- Design principles

While an **AI Engineer** may receive questions about:

- Python
- Machine learning
- Data preprocessing
- Model evaluation
- AI concepts

### 4. Skill Gap Detection

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

The system then identifies the user's biggest skill gaps.

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

This allows users to understand not only what they are good at, but also what they should improve.

### 5. Project Recommendation

After identifying the user's skill gaps, the system generates projects that can help them practice those missing skills.

The goal is not simply to tell users:

> "Learn usability testing."

Instead, the system provides something they can actually build.

**Example:**

```
Skill Gap:
Usability Testing

Recommended Project:
Redesign and Test a Student Dashboard
```

The project is specifically designed to help the user practice the identified skill gaps.

#### Project Output

Each generated project will contain three main sections.

##### 1. Project Description

A short explanation of:

- What the user should build
- The problem the project should solve
- Why this project is relevant to the user's skill gaps

**Example:**

> **Project Description**
>
> Design and prototype a student productivity dashboard that helps students manage assignments, deadlines, and study schedules. The project focuses on applying usability testing to identify problems in the user experience and iterating on the design based on user feedback.

##### 2. Skills You'll Practice

The system identifies the skills that the project is intended to develop.

**Example:**

```
Skills You'll Practice
- User Research
- Usability Testing
- Wireframing
- Prototyping
- Interaction Design
```

The most important skills should correspond directly to the user's detected skill gaps.

##### 3. Requirements

The project requirements are divided into two categories.

**Core Requirements**

These describe what the project should accomplish from a product or user perspective.

**Example:**

- Users should be able to view their upcoming assignments.
- Users should be able to add and manage tasks.
- Users should be able to filter tasks by deadline.
- The interface should provide clear feedback after completing an action.

**Technical Requirements**

These describe the technical or implementation constraints of the project.

**Example:**

- Use React and TypeScript.
- Implement responsive design.
- Consume data from an API.
- Implement appropriate loading and error states.
- Use reusable components.

The requirements are intended to make the project more structured and actionable rather than simply providing a project idea.

### 6. PDF Project Guide

After generating the project, users can export the project guide as a PDF.

The PDF will contain:

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

This allows students to keep the project brief and use it as a reference while building their project.

---

## Product Philosophy

IT Career Navigator is built around a simple principle:

> Don't just tell students what career they should pursue. Help them understand how to get there.

The product therefore focuses on turning career exploration into actionable development.

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

---

## MVP Scope

Because this project is being developed as a one-day hackathon project, we are intentionally keeping the initial scope focused.

### Core MVP

- [x] Career discovery questionnaire
- [x] Manual career selection
- [x] UI/UX Designer career path
- [x] AI Engineer career path
- [x] Career recommendation
- [x] Skill assessment
- [x] Skill gap detection
- [x] Project recommendation
- [x] Project description generation
- [x] Skills-to-practice generation
- [x] Core requirements generation
- [x] Technical requirements generation
- [x] PDF project guide export

### Possible Extension

If sufficient development time remains, we will attempt to add:

- [ ] One additional career path
- [ ] More advanced project personalization
- [ ] AI-powered project generation
- [ ] More detailed career explanations
- [ ] Progress tracking
- [ ] Project completion tracking
- [ ] Skill reassessment after completing projects

---

## Future Vision

The long-term goal is to turn IT Career Navigator into a personal career development companion for IT students.

A future version could allow users to continuously track their progress:

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

This would transform the platform from a one-time career quiz into a continuous career growth system.

---

## Why This Project?

There are many platforms that provide:

- Career quizzes
- Online courses
- Coding exercises
- Project ideas

However, these experiences are often disconnected.

IT Career Navigator aims to connect them into one flow:

**Discover → Assess → Identify → Build**

The ultimate goal is to help students move from:

> "I don't know what I should pursue."

to:

> "I know what career I want, I know what skills I'm missing, and I know what I should build next."

---

## Tech Stack

*Update this section according to the technologies actually used in the hackathon.*

**Frontend**
- Next.js / React
- TypeScript
- Tailwind CSS

**Backend / Data**
- TBD

**AI**
- TBD

**PDF Generation**
- TBD

---

## Project Status

🚧 **Hackathon MVP — In Development**

Current focus:

- UI/UX Designer career path
- AI Engineer career path
- Career questionnaire
- Skill assessment
- Skill gap detection
- Personalized project generation
- PDF project guide

An additional career path will be developed if time allows.

---

## Team

Built as a one-day hackathon project by a team focused on creating practical tools for IT students.

---

## Vision

*Your career shouldn't end with a quiz result.*

*It should start with one.*
