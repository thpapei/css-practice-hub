# CSS Practice Project - Copilot Instructions

## Project Overview

This is a React + TypeScript educational app for learning CSS through progressive exercises.

- **Tech Stack**: React 18, TypeScript, Vite
- **Purpose**: Interactive CSS learning platform with hands-on exercises
- **Structure**: See `app/STRUCTURE.md` for complete architecture guidelines

## Critical Guidelines

### 📚 Always Read STRUCTURE.md First

**Before creating any new phase, lesson, or exercise:**

1. Read `app/STRUCTURE.md` for complete guidelines
2. Follow the file organization patterns exactly
3. Use the quality checklist before marking work complete

### 🎓 Exercise CSS Rules (CRITICAL!)

**Exercise CSS files are learning materials, NOT solutions!**

#### Philosophy: Focus on the Learning Target

Students should only practice **the specific concept being taught**. Pre-fill everything else:

- **Grid exercises**: Only Grid properties left as TODO. Colors, spacing, borders pre-filled.
- **Flexbox exercises**: Only Flexbox properties left as TODO. Layout structure pre-filled.
- **Typography exercises**: Only font properties left as TODO. Containers pre-filled.
- **Color exercises**: Only color/background properties left as TODO. Layout pre-filled.

**Why?** Students learn faster when they're not distracted by repetitive styling.

**Example** (Grid exercise):

```css
.grid-container {
  /* ✅ Pre-filled - not the learning target */
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  gap: 16px;

  /* ❌ TODO - this IS the learning target */
  /* TODO: Add grid-template-columns here */
  /* HINT: Try repeat(3, 1fr) for three equal columns */
}

.grid-item {
  /* ✅ All pre-filled so students focus on Grid */
  padding: 16px;
  background: #667eea;
  color: white;
  border-radius: 6px;
}
```

#### Required Rules:

1. **❌ NEVER solve exercises in CSS** - Students need to practice!
2. **✅ Pre-fill all non-target styling** - Only leave TODO for the learning concept
3. **✅ Every exercise MUST have `<ExpectedOutcome>` component** - Shows goal when expanded
4. **✅ ALWAYS add comprehensive educational comments**:

   - GOAL: What the exercise teaches
   - CONCEPTS INTRODUCED: New ideas with explanations
   - WHY THIS MATTERS: Real-world context
   - TODO: Where students add their code (only target concept!)
   - HINTS: Guidance without giving answers
   - TRY THIS: Experiments to encourage

5. **✅ Use educational header blocks** for each exercise:

   ```css
   /* ============================================
      EXERCISE X: Title - What You'll Learn
      ============================================
      
      GOAL: Clear learning objective
      CONCEPTS INTRODUCED: New concepts
      WHY THIS MATTERS: Real-world use
      YOUR TASK: Step-by-step instructions
      HINTS: Helpful guidance
      ============================================ */
   ```

6. **✅ Use `<ExpectedOutcome>` component** in every exercise:

   ```tsx
   import { ExpectedOutcome } from "../components";

   <ExerciseCard id="ex1" {...props}>
     <ExpectedOutcome description="Grid should create 3 equal columns.">
       {/* Working example with inline styles */}
       <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
         {/* Completed example */}
       </div>
     </ExpectedOutcome>

     {/* Student's unsolved practice area */}
     <div className="grid-container">{/* Uses CSS with TODO comments */}</div>
   </ExerciseCard>;
   ```

7. **Reference example**: See `app/src/styles/phase2-grid.css`

### 📁 File Organization

**Lessons & Theory**: `app/src/lessons/`

- Phase components: `Phase1Selectors.tsx`, `Phase2Grid.tsx`
- Theory components: `SelectorsTheory.tsx`, `GridTheory.tsx`
- Export via: `lessons/index.ts`

**Reusable Components**: `app/src/components/`

- Generic UI: `ExerciseCard.tsx`, `PhaseLayout.tsx`, etc.
- Export via: `components/index.ts`

**Exercise Styles**: `app/src/styles/`

- One CSS file per phase: `phase1-selectors.css`, `phase2-grid.css`
- Import in: `main.css` via `@import`
- Naming convention: `.[prefix]-[semantic-name]`

### 🎨 Styling Guidelines

**CSS Naming Prefixes**:

- Selectors: `.selectors-*`
- Grid: `.grid-*`, `.areas-*`, `.lines-*`
- Flexbox: `.flex-*`
- Box Model: `.boxmodel-*`
- Typography: `.typo-*`

**Color Palette**:

- Primary: `#667eea` (purple)
- Accent: `#fa709a` (pink)
- Highlight: `#fee140` (yellow)
- Success: `#27ae60` (green)
- Background: `#f8f9fa`

**Spacing**:

- Tight: `gap: 12px`
- Normal: `gap: 16px`
- Loose: `gap: 20px`
- Border radius: `6px` (items), `8px` (containers)

### 📝 Theory Component Guidelines

Every theory component must include:

1. `.theory-content` wrapper
2. Table of contents with anchor links
3. Live visual examples (inline JSX styles)
4. Color-coded demonstrations
5. "Pro Tip" and "Best Practices" sections
6. Interactive examples that students can resize/inspect

IMPORTANT: Theory pages are reference material and must NOT use exercise helpers such as
`<ExpectedOutcome>`. That component belongs only inside exercise lesson files where it
shows the student's goal. Theory pages should use plain inline JSX examples and copyable
code snippets instead.

### 🔄 Progress Tracking Pattern

Required in every lesson:

```tsx
const { isComplete, toggleComplete } = useProgress("phase-id");

<ExerciseCard
  id="ex1"
  isComplete={isComplete("ex1")}
  onToggleComplete={() => toggleComplete("ex1")}
>
```

Progress keys: `"phase[number]-[topic]"` (e.g., `"phase2-grid"`)

## Creating New Phases - Quick Reference

**Checklist** (use this every time):

````
□ Create lessons/Phase_Topic.tsx
□ Create lessons/TopicTheory.tsx
□ Create styles/phase_-topic.css (UNSOLVED + educational comments)
□ Import CSS in main.css
□ Export from lessons/index.ts
□ Add navigation in MainPage.tsx
□ Implement progress tracking
□ 8-12 exercises with progressive difficulty
□ Each exercise has ExpectedOutcome component (collapsed by default)

---

## Scaffolding & Automation

To speed up creating new lessons there's a small scaffolding script at
`app/scripts/createLesson.js`. It will create the lesson component and a CSS file
and can optionally append exports and wire a simple route in `MainPage.tsx`.

Usage (pass arguments after `--`):

```bash
cd app
npm run scaffold:lesson -- Phase3-MyLesson "My Lesson Title"
````

What the script does:

- Creates `app/src/lessons/Phase3-MyLesson.tsx` and `app/src/styles/phase-phase3-mylesson.css`.
- Appends an export to `app/src/lessons/index.ts` unless it already exists.
- Attempts to add an import and a `<Route>` to `app/src/components/MainPage.tsx`.

Notes & safety:

- The script tries to avoid duplicate exports/routes but always review the changes
  before committing.
- If MainPage.tsx cannot be updated automatically, add the import and route manually.
- The script is intentionally small and idempotent; you can run it repeatedly without
  duplicating exports/routes.

Best practice: run the script, review `git status`, and commit the new files and any
automated edits together with a single, descriptive commit message.
□ Only target concept left as TODO (all else pre-filled)
□ Verify TypeScript compiles
□ Test theory modal and mark complete buttons

````

## Communication Rules

- Keep responses concise and focused
- Don't explain project structure unless asked
- Reference STRUCTURE.md instead of repeating guidelines
- Focus on the specific task at hand

## Development Rules

- Use `app/` directory as working directory for React app
- Run commands from `app/` folder
- Check TypeScript errors with: `npx tsc --noEmit`
- Dev server runs on port 5173 (Vite default)

## Common Commands

```bash
cd app
npm run dev          # Start dev server
npm run build        # Build for production
npx tsc --noEmit    # Check TypeScript errors
````

---

**For complete guidelines**: See `app/STRUCTURE.md`
**For examples**: See existing phases (Phase1Selectors, Phase2Grid)
