## Purpose

Turns a user's ranked skill gaps into a concrete, buildable practice project, so the user gets something to build instead of just a list of things to learn. Version 1 selects from a fixed set of project templates by scoring gap overlap. Version 2 replaces the template selection with an LLM call, behind the same function signature, so the rest of the system does not change.

## ADDED Requirements

### Requirement: Deterministic project selection (v1)
The system SHALL generate a practice project from a user's ranked skill gaps and selected career by scoring a fixed set of project templates against the gaps, weighted by gap size, and selecting the best match. The result includes a project title, a project description (what to build, the problem it solves, and why it fits the detected gaps), a list of skills the project practices, a list of core (product-level) requirements, and a list of technical (implementation) requirements.

#### Scenario: Generating a project from skill gaps
- **WHEN** a user's ranked skill gaps and selected career are provided
- **THEN** the system returns a project with a title, description, skills-practiced list, core requirements list, and technical requirements list

#### Scenario: Generated skills trace back to detected gaps
- **WHEN** a project is generated for a user with specific biggest skill gaps
- **THEN** the project's skills-practiced list includes the user's top skill gaps for that career

### Requirement: AI-assisted project generation (v2, planned)
The system SHALL generate a practice project by calling an LLM instead of scoring fixed templates, through an interface that is not hard-coded to one vendor, so the provider and API key can be swapped through configuration without changing calling code. The output SHALL have the same shape as v1: a project title, description, skills-practiced list, core requirements list, and technical requirements list. The initial configured provider SHALL be Gemini 3.1 Flash.

#### Scenario: Generating a project with the LLM provider
- **WHEN** a user's ranked skill gaps and selected career are provided
- **THEN** the system calls the configured LLM provider and returns a project with a title, description, skills-practiced list, core requirements list, and technical requirements list

#### Scenario: LLM call fails or times out
- **WHEN** the underlying LLM provider call errors or times out
- **THEN** the system returns an error to the client and does not return a fabricated or empty project

#### Scenario: Swapping provider through configuration
- **WHEN** someone changes the configured provider or API key in environment configuration, without a code change
- **THEN** project generation continues to work against the newly configured provider and returns the same output shape
