## Purpose

Lets a user discover which of the two supported IT career paths (AI Engineer, UI/UX Designer) fits them, either by answering a weighted quiz or by picking a path directly, so both routes land on the same downstream skill assessment.

## ADDED Requirements

### Requirement: Career discovery questionnaire
The system SHALL present a series of quiz questions covering interests, working style, and technology preferences, and SHALL score the user's answers using a fixed, deterministic weighting algorithm (no AI/LLM call) to produce a ranked list of career matches.

#### Scenario: User completes the questionnaire
- **WHEN** a user answers all questionnaire questions and submits
- **THEN** the system returns a recommended career, a match percentage (0-100), a short explanation of why it fits, and at least one alternative career with its own match percentage

#### Scenario: User submits an incomplete questionnaire
- **WHEN** a user submits the questionnaire with one or more required questions unanswered
- **THEN** the system rejects the submission and identifies which questions are missing, without producing a recommendation

#### Scenario: Deterministic scoring
- **WHEN** the same set of answers is submitted twice
- **THEN** the system returns the same recommended career and match percentage both times

### Requirement: Manual career selection
The system SHALL allow a user to bypass the questionnaire and directly select one of the two supported career paths.

#### Scenario: User selects a career manually
- **WHEN** a user chooses "AI Engineer" or "UI/UX Designer" from the manual selection screen
- **THEN** the system routes the user to the skill assessment for that career path without requiring questionnaire answers

### Requirement: Career list
The system SHALL expose the set of currently supported career paths and their required skills.

#### Scenario: Listing available careers
- **WHEN** a client requests the list of career paths
- **THEN** the system returns exactly the careers currently defined in career data (AI Engineer, UI/UX Designer, plus any future additions), each with its id, display name, and required-skill list
