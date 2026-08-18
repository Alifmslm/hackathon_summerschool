## Purpose

Lets a user take their generated project guide with them as a downloadable PDF, so they have a reference while they build.

## ADDED Requirements

### Requirement: Export project guide as PDF
The system SHALL generate a downloadable PDF from a generated project, containing the project title, description, skills-to-practice list, core requirements (as a checklist), and technical requirements (as a checklist).

#### Scenario: Exporting a generated project
- **WHEN** a user requests a PDF export for a project they have generated
- **THEN** the system returns a PDF file containing the project title, description, skills-to-practice, core requirements, and technical requirements, matching the content of that generated project

#### Scenario: Exporting without a generated project
- **WHEN** a user requests a PDF export without having a generated project available
- **THEN** the system returns an error and does not produce a PDF
