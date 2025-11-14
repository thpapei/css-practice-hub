# Theory Pages — Importance & Standards

This document explains why high-quality theory pages matter for the CSS Practice Project and describes the standards we expect for every `*Theory.tsx` file in `app/src/lessons/`.

Why theory pages are critical

- Theory pages are the canonical reference students consult before attempting exercises. Good theory reduces confusion, shortens learning cycles, and prevents repeated questions.
- High-quality theory pages increase course credibility and reduce support overhead: if the theory is clear, students spend more time practicing and less time debugging ambiguous instructions.

Minimal effort, high impact

- Small, consistent investments in the theory files pay off disproportionately: a clear TOC, a few live visual examples, accessibility notes, and 3 concise "Try this" exercises make a theory page 10× more useful.

Standards (must-follow)

1. Structure

   - File header comment block with: GOAL, CONCEPTS INTRODUCED, WHY THIS MATTERS, TRY THIS, ACCESSIBILITY (short lines).
   - A Table of Contents with anchor links (`.theory-toc`).
   - Clear sections for each subtopic using sensible `id` attributes.

2. Content

   - Use plain language and short paragraphs. Assume readers know HTML but not the CSS nuance being taught.
   - Include at least one inline visual example (JSX inline styles or simple markup) per major subtopic.
   - Keep examples focused: show the concept, not a complete solution to an exercise.

3. Education-first rules

   - DO NOT include the `ExpectedOutcome` component in theory pages. `ExpectedOutcome` is reserved for exercise files only.
   - Theory pages should be reference material and _not_ solve exercises. Leave hands-on practice to exercise files.

4. Accessibility

   - Add an `Accessibility Notes` section when relevant. Mention keyboard focus, screen reader considerations, motion preferences, and touch size where applicable.

5. Try-this

   - Provide 2–4 short tasks under a `Try this` section that encourage quick experimentation.

6. Tone & length
   - Aim for concise clarity. Each theory file should prioritize clarity over exhaustiveness. If the topic is large, break it into sub-theory files or link to external references.

Enforcement & workflow

- We prefer lightweight, human-reviewed migration rather than aggressive automation. The scaffolding script (`app/scripts/createLesson.js`) will be updated to produce theory files matching this template.
- Optionally, add a lint rule or pre-commit check to warn when `ExpectedOutcome` is used inside a `*Theory.tsx` file — this is optional and can be enabled later.

Quick checklist for authors

- Add header block (GOAL / CONCEPTS / WHY / TRY THIS / ACCESSIBILITY)
- Add a TOC
- Provide at least one visual example per main concept
- Add Accessibility Notes
- Add 2–4 Try-this tasks
- Ensure `ExpectedOutcome` is not imported or used

If you want, I can now:

- Update the scaffolding script to produce theory files matching this template.
- Migrate all existing theory files in small batches and run a type-check and build after each batch.

— Theory Standards, CSS Practice Project
