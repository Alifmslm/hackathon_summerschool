## Purpose

Turns a user's ranked skill gaps into a concrete, buildable practice project by calling an LLM, so the user gets something to build instead of just a list of things to learn.

## ADDED Requirements

### Requirement: AI-assisted project generation
The system SHALL generate a practice project from a user's ranked skill gaps and selected career by calling an LLM, producing a project title, a project description (what to build, the problem it solves, why it's relevant to the detected gaps), a list of skills the project practices, a list of core (product-level) requirements, and a list of technical (implementation) requirements.

#### Scenario: Generating a project from skill gaps
- **WHEN** a user's ranked skill gaps and selected career are provided
- **THEN** the system returns a project with a title, description, skills-practiced list, core requirements list, and technical requirements list

#### Scenario: Generated skills trace back to detected gaps
- **WHEN** a project is generated for a user with specific biggest skill gaps
- **THEN** the project's skills-practiced list includes the user's top skill gaps for that career

#### Scenario: LLM call fails or times out
- **WHEN** the underlying LLM provider call errors or times out
- **THEN** the system returns an error to the client and does not silently return a fabricated or empty project

### Requirement: Provider-agnostic generation
The system SHALL call the LLM provider through an interface that is not hard-coded to one vendor, so the provider and API key can be swapped via configuration without changing calling code. The initial configured provider SHALL be Gemini 3.1 Flash.

#### Scenario: Swapping provider via configuration
- **WHEN** the configured provider/API key is changed in environment configuration (no code change)
- **THEN** project generation continues to work against the newly configured provider, producing the same shape of output (title, description, skills, core requirements, technical requirements)
