## Purpose

Compares a user's current skill profile against the target skill levels for their selected career, using a fixed deterministic calculation, and ranks the resulting gaps so the user knows what to improve first.

## ADDED Requirements

### Requirement: Current vs. target skill comparison
The system SHALL compute, for every skill defined on a user's selected career path, the difference between the user's current-level score and that career's target-level score, using a fixed deterministic formula (no AI/LLM call).

#### Scenario: Computing skill gaps
- **WHEN** a user's skill profile and selected career are provided
- **THEN** the system returns, for each skill on that career, the current level, the target level, and the gap (target minus current)

#### Scenario: No gap for a mastered skill
- **WHEN** a user's current level for a skill meets or exceeds the career's target level for that skill
- **THEN** the system reports a gap of zero (or negative, clamped to zero) for that skill, and does not flag it as a biggest gap

### Requirement: Ranked biggest gaps
The system SHALL rank skills by gap size, largest first, so the biggest gaps can be surfaced to the user and used as input to project recommendation.

#### Scenario: Ranking gaps
- **WHEN** skill gaps have been computed for a user
- **THEN** the system returns the skills ordered from largest gap to smallest, excluding skills with a zero gap
