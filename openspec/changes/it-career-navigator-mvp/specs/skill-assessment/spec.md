## Purpose

Measures a user's current ability against the skills relevant to their selected career path, producing the skill profile that skill-gap detection consumes.

## ADDED Requirements

### Requirement: Career-specific assessment questions
The system SHALL serve a distinct set of assessment questions per career path, covering the skills defined for that path (e.g. UX Research, Wireframing, Usability Testing for UI/UX Designer; Python, Data Processing, Model Development for AI Engineer).

#### Scenario: Fetching assessment for a known career
- **WHEN** a client requests the assessment for a supported career id
- **THEN** the system returns the ordered list of questions defined for that career, each tagged with the skill it measures

#### Scenario: Fetching assessment for an unknown career
- **WHEN** a client requests the assessment for a career id that does not exist
- **THEN** the system returns an error and no questions

### Requirement: Assessment submission produces a skill profile
The system SHALL accept a user's answers to a career's assessment and SHALL compute a per-skill current-level score (0-100) for every skill defined on that career path.

#### Scenario: Submitting a complete assessment
- **WHEN** a user answers every question for their selected career and submits
- **THEN** the system returns a skill profile listing every skill for that career with a current-level score

#### Scenario: Submitting an incomplete assessment
- **WHEN** a user submits with one or more required questions unanswered
- **THEN** the system rejects the submission and identifies the missing questions, without producing a skill profile
