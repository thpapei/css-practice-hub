# Project Structure

This React app is organized to separate generic reusable components from lesson-specific content and styles.

## Directory Structure

```
app/src/
├── components/          # Generic reusable components
│   ├── ExerciseCard.tsx
│   ├── ExerciseList.tsx
│   ├── LessonSidebar.tsx
│   ├── PageHeader.tsx
│   ├── PhaseLayout.tsx
│   ├── TheoryModal.tsx
│   ├── CodeEditor.tsx
│   ├── MainPage.tsx
│   └── index.ts         # Exports generic components only
│
├── lessons/             # Lesson-specific components
│   ├── Phase1Selectors.tsx
│   ├── Phase2Grid.tsx
│   ├── SelectorsTheory.tsx
│   ├── GridTheory.tsx
│   └── index.ts         # Exports lessons and theory
│
├── styles/              # Lesson-specific CSS
│   ├── phase1-selectors.css
│   └── phase2-grid.css
│
├── hooks/               # Custom React hooks
│   └── useProgress.ts
│
├── context/             # React context providers
│   └── ProgressContext.tsx
│
├── main.css             # Global styles + imports
└── App.tsx              # Root component
```

## Key Principles

### 1. Component Separation

- **`components/`** - Generic, reusable UI components that can be used across any lesson
- **`lessons/`** - Lesson-specific content and theory components

### 2. Style Organization

- **`main.css`** - Global styles, layout, theory modal styles
- **`styles/phase-*.css`** - Exercise-specific CSS for each phase
- Import lesson styles via `@import` in `main.css`

### 3. Exercise CSS Guidelines ⚠️ CRITICAL

**Exercise CSS files are learning materials, NOT solutions!**

#### Philosophy: Focus on the Learning Target

Exercises should only require students to practice the **specific concept being taught**. All other styling should be pre-filled to avoid repetitive work:

- **Grid exercises**: Students add Grid properties only. Colors, spacing, borders already provided.
- **Flexbox exercises**: Students add Flexbox properties only. Layout structure already provided.
- **Typography exercises**: Students add font properties only. Container styling already provided.
- **Color exercises**: Students add color/background properties only. Layout already provided.

**Example**: In a Grid exercise about `grid-template-columns`, the CSS should already include:

```css
.grid-container {
  /* Pre-filled non-Grid styles */
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  gap: 16px;

  /* TODO: Add grid-template-columns here */
  /* HINT: Try repeat(3, 1fr) for three equal columns */
}

.grid-item {
  /* All styling pre-filled so students focus on Grid */
  padding: 16px;
  background: #667eea;
  color: white;
  border-radius: 6px;
  text-align: center;
}
```

#### Rules for Exercise CSS:

1. **DO NOT solve the exercises in CSS** - Students need to practice!
2. **Pre-fill all non-target styling** - Colors, spacing, borders, etc. should be complete
3. **Only leave TODO sections for the learning target** - Grid, Flexbox, Typography, etc.
4. **Provide comprehensive educational comments** explaining:

   - What the exercise teaches (GOAL)
   - Why it matters (REAL-WORLD USE)
   - How the concepts work (CONCEPTS INTRODUCED)
   - Step-by-step hints (TODO sections)
   - Common pitfalls (GOTCHAS)
   - Experiments to try (TRY THIS)

5. **Use TODO comments** for unsolved exercises:

   ```css
   .exercise-container {
     /* TODO: Add display: grid here */
     /* HINT: You'll also need grid-template-columns */
     padding: 20px;
     background: #f8f9fa;
   }
   ```

6. **Include educational headers** for each exercise:

   ```css
   /* ============================================
      EXERCISE X: Title - What You'll Learn
      ============================================
      
      GOAL: Clear learning objective
      
      CONCEPTS INTRODUCED:
      - Concept 1 with explanation
      - Concept 2 with explanation
      
      WHY THIS MATTERS:
      Real-world context and use cases
      
      TRY THIS:
      - Experiment 1
      - Experiment 2
      ============================================ */
   ```

7. **Show expected outcomes** - Every exercise must include an `<ExpectedOutcome>` component (see below)
8. **Write for beginners** - Assume no prior knowledge
9. **Explain WHY, not just WHAT** - Understanding over memorization
10. **Provide visual metaphors** - ASCII art, diagrams when helpful
11. **Celebrate progress** - Encouraging messages for milestones

#### Expected Outcome Component (Required)

Every exercise MUST use the `<ExpectedOutcome>` component to show students what they're working toward. This component is **collapsed by default** and expands on click:

```tsx
import { ExpectedOutcome } from "../components";

<ExerciseCard id="ex1" {...props}>
  <ExpectedOutcome description="Grid should create 3 equal columns with 16px gaps between items.">
    {/* Visual example of completed exercise */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "16px",
      }}
    >
      <div style={{ padding: "16px", background: "#667eea", color: "white" }}>
        Item 1
      </div>
      <div style={{ padding: "16px", background: "#667eea", color: "white" }}>
        Item 2
      </div>
      <div style={{ padding: "16px", background: "#667eea", color: "white" }}>
        Item 3
      </div>
    </div>
  </ExpectedOutcome>

  {/* Student's practice area */}
  <div className="grid-container">
    <div className="grid-item">Item 1</div>
    <div className="grid-item">Item 2</div>
    <div className="grid-item">Item 3</div>
  </div>
</ExerciseCard>;
```

**Benefits**:

- Students can compare their work to the goal
- Reduces confusion about what the exercise should look like
- Collapsed by default - doesn't clutter the page
- Consistent green success styling when expanded

IMPORTANT: The `<ExpectedOutcome>` component is an exercise-only helper and must NOT be
used inside theory components (files named `*Theory.tsx`). Theory pages are reference
material and should present plain inline examples and copyable snippets instead.

#### Example Structure (see `styles/phase2-grid.css` for reference):

- File header explaining the exercise set
- Shared styles with comments
- Each exercise with comprehensive header
- TODO sections for student work
- Hints and guidance throughout
- Congratulations section at the end

### 4. Adding New Lessons

To add a new lesson (e.g., Phase 1.2 Box Model):

1. **Create lesson component**: `lessons/Phase1BoxModel.tsx`

   ```tsx
   import { useProgress } from "../hooks/useProgress";
   import {
     ExerciseCard,
     ExerciseList,
     LessonSidebar,
     PageHeader,
     PhaseLayout,
     TheoryModal,
   } from "../components";
   import BoxModelTheory from "./BoxModelTheory";

   export default function Phase1BoxModel(): JSX.Element {
     const { isComplete, toggleComplete } = useProgress("phase1-boxmodel");
     // ...
   }
   ```

2. **Create theory component**: `lessons/BoxModelTheory.tsx`

   ```tsx
   export default function BoxModelTheory(): JSX.Element {
     return <div className="theory-content">{/* theory content */}</div>;
   }
   ```

3. **Create exercise CSS**: `styles/phase1-boxmodel.css`

   ```css
   /* Exercise 1: Margin and Padding */
   .boxmodel-demo {
     /* styles */
   }
   ```

4. **Import CSS**: Add to `main.css`

   ```css
   @import "./styles/phase1-boxmodel.css";
   ```

5. **Export lesson**: Add to `lessons/index.ts`

   ```ts
   export { default as Phase1BoxModel } from "./Phase1BoxModel";
   export { default as BoxModelTheory } from "./BoxModelTheory";
   ```

6. **Add to MainPage**: Import and render in `components/MainPage.tsx`

### Scaffolding (automation)

We provide a small scaffolding script to speed up new lesson creation:

- Script: `app/scripts/createLesson.js`
- NPM helper: `npm run scaffold:lesson` (pass args after `--`)

Usage example:

```bash
cd app
npm run scaffold:lesson -- Phase3-MyLesson "My Lesson Title"
```

What the script does:

- Creates the lesson component and a matching `phase-*.css` file.
- Appends an export to `app/src/lessons/index.ts` if missing.
- Attempts to add the import and a `<Route>` entry into `app/src/components/MainPage.tsx`.

Review the edits after running the script. If the script cannot safely modify `MainPage.tsx`,
it will skip route wiring and print a warning — add the route manually in that case.

### 4. Exercise CSS Naming Convention

Use prefixed class names to avoid conflicts:

- Selectors: `.selectors-*`
- Grid: `.grid-*`, `.areas-*`, `.lines-*`, etc.
- Box Model: `.boxmodel-*`
- Typography: `.typo-*`
- Flexbox: `.flex-*`
- Positioning: `.pos-*`

**Naming Pattern**: `.[phase-prefix]-[semantic-name]`

Examples:

- `.grid-basic` - Basic grid container
- `.selectors-blog-post` - Blog post demo for selectors
- `.flex-navbar` - Navbar for flexbox exercises

### 5. Theory Component Guidelines

Theory components (e.g., `GridTheory.tsx`, `SelectorsTheory.tsx`) should:

1. **Use the `.theory-content` wrapper** for consistent styling
2. **Include a table of contents** with anchor links
3. **Provide visual examples** using inline JSX styles
4. **Show live demonstrations** - not just code snippets
5. **Include "Pro Tip" and "Best Practices" boxes**
6. **Use color-coded examples** for visual clarity:
   - Primary: `#667eea` (purple)
   - Accent: `#fa709a` (pink)
   - Highlight: `#fee140` (yellow)
   - Success: `#27ae60` (green)

Example theory structure:

```tsx
<div className="theory-content">
  <div className="theory-header">
    <h1>Title</h1>
    <p>Subtitle</p>
  </div>
  <div className="theory-body">
    <nav className="theory-toc">{/* TOC */}</nav>
    <section id="topic">{/* Content */}</section>
    {/* Visual examples with inline styles */}
  </div>
</div>
```

### 6. Progress Tracking Pattern

Every lesson MUST implement progress tracking:

```tsx
const { isComplete, toggleComplete } = useProgress("phase-id");

// In each ExerciseCard:
<ExerciseCard
  id="ex1"
  isComplete={isComplete("ex1")}
  onToggleComplete={() => toggleComplete("ex1")}
>
```

**Progress keys format**: `"phase[number]-[topic]"` (e.g., `"phase1-selectors"`, `"phase2-grid"`)

### 7. Lesson Component Structure Template

Every lesson should follow this structure:

```tsx
import { useEffect, useState } from "react";
import { useProgress } from "../hooks/useProgress";
import {
  ExerciseCard,
  ExerciseList,
  LessonSidebar,
  PageHeader,
  PhaseLayout,
  TheoryModal,
  ExpectedOutcome,
} from "../components";
import TheoryComponent from "./TheoryComponent";

const lessons = [
  { id: "ex1", title: "Exercise 1: Topic" },
  // ... more exercises
];

export default function PhaseComponent(): JSX.Element {
  const [currentLesson, setCurrentLesson] = useState<string>("");
  const { isComplete, toggleComplete } = useProgress("phase-id");

  useEffect(() => {
    document.title = "Phase X.Y - Topic Name";
  }, []);

  return (
    <PhaseLayout
      sidebar={
        <LessonSidebar
          lessons={lessons}
          currentLesson={currentLesson}
          onSelectLesson={setCurrentLesson}
        />
      }
    >
      <PageHeader
        title="Phase X.Y: Topic Name"
        description="Brief description of what this phase covers."
        actions={
          <TheoryModal>
            <TheoryComponent />
          </TheoryModal>
        }
      />

      <ExerciseList>
        <ExerciseCard
          id="ex1"
          title="Exercise 1: Topic"
          instructions="What to do in this exercise."
          isComplete={isComplete("ex1")}
          onToggleComplete={() => toggleComplete("ex1")}
        >
          {/* Expected Outcome - REQUIRED */}
          <ExpectedOutcome description="What the completed exercise should look like.">
            {/* Visual example with inline styles showing the solution */}
            <div
              style={
                {
                  /* working example */
                }
              }
            >
              Completed example here
            </div>
          </ExpectedOutcome>

          {/* Student's practice area with unsolved CSS */}
          <div className="exercise-container">Practice content here</div>
        </ExerciseCard>

        {/* More ExerciseCard components... */}
      </ExerciseList>
    </PhaseLayout>
  );
}
```

### 8. File Organization Checklist

When creating a new phase, ensure:

- ✅ Lesson component in `lessons/PhaseXTopic.tsx`
- ✅ Theory component in `lessons/TopicTheory.tsx`
- ✅ Exercise CSS in `styles/phaseX-topic.css` with educational comments
- ✅ CSS imported in `main.css`
- ✅ Exports added to `lessons/index.ts`
- ✅ Route/navigation added to `MainPage.tsx`
- ✅ Progress tracking implemented with unique phase ID
- ✅ Exercises are UNSOLVED with TODO comments
- ✅ Theory includes visual examples and TOC

### 9. Common Patterns & Best Practices

### 9. Common Patterns & Best Practices

#### Exercise Difficulty Progression

1. **Basic** - Simple concept introduction (Exercises 1-3)
2. **Intermediate** - Combining concepts (Exercises 4-7)
3. **Advanced** - Real-world patterns (Exercises 8-10)
4. **Expert** - Modern features, complex scenarios (Exercises 11-12)

#### Visual Feedback

- Use gradients for visual interest: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- Consistent border-radius: `6px` for items, `8px` for containers
- Standard gap spacing: `12px` (tight), `16px` (normal), `20px` (loose)
- Background colors: `#f8f9fa` for containers, `white` for cards

#### Accessibility Considerations

- Ensure color contrast meets WCAG AA standards
- Don't rely solely on color to convey information
- Include text labels alongside visual indicators
- Use semantic HTML in exercise demos

#### Performance Notes

- Keep inline styles in theory components (for demonstrations)
- Use CSS classes for exercise styles (easier to debug)
- Avoid deeply nested grids (3 levels max)
- Comment complex selectors for maintainability

### 10. Quick Reference: Adding a New Phase

**Checklist** (copy this when starting a new phase):

```
Phase __.__: ________________

Files to Create:
□ lessons/Phase_Topic.tsx (lesson component)
□ lessons/TopicTheory.tsx (theory with visual examples)
□ styles/phase_-topic.css (UNSOLVED exercises with educational comments)

Configuration:
□ Import CSS in main.css (@import "./styles/phase_-topic.css";)
□ Export from lessons/index.ts
□ Add navigation in MainPage.tsx
□ Set document.title in useEffect

Content Guidelines:
□ 8-12 exercises (progressive difficulty)
□ Each exercise has comprehensive header comment
□ Each exercise has ExpectedOutcome component (collapsed by default)
□ TODO sections for student work (only for target concept)
□ All non-target styling pre-filled (colors, spacing, etc.)
□ Hints and guidance throughout
□ Real-world use cases explained
□ Visual examples in theory component
□ Table of contents in theory
□ Congratulations message at end

Quality Checks:
□ CSS is UNSOLVED (students practice, not solutions)
□ Comments explain WHY, not just WHAT
□ Progress tracking works
□ Theory modal displays correctly
□ Mark Complete buttons function
□ No TypeScript errors
□ Consistent naming conventions
```

## Import Patterns

### From components (MainPage, etc.):

```tsx
import { Phase1Selectors, Phase2Grid } from "../lessons";
```

### From lessons:

```tsx
import {
  ExerciseCard,
  ExerciseList,
  PageHeader,
  TheoryModal,
} from "../components";
import GridTheory from "./GridTheory"; // sibling theory
```

### From anywhere:

```tsx
import { useProgress } from "../hooks/useProgress";
```

## Benefits

- **Easy to find code**: Lessons separate from generic components
- **Easy to add exercises**: Just add CSS rules to the phase file
- **No CSS conflicts**: Each phase has its own file with prefixed classes
- **Clear imports**: Component vs lesson distinction
- **Maintainable**: Related code grouped together
- **Educational**: CSS files teach concepts with comprehensive comments
- **Progressive**: Each exercise builds on previous knowledge
- **Consistent**: Following these guidelines ensures uniform quality

## Key Reminders 🔔

### When Creating Exercise CSS:

1. **❌ DO NOT SOLVE THE EXERCISES** - Leave them incomplete for students
2. **✅ ADD COMPREHENSIVE COMMENTS** - Teach, don't just style
3. **✅ USE TODO SECTIONS** - Guide students where to add code
4. **✅ EXPLAIN WHY** - Context and real-world use cases
5. **✅ INCLUDE HINTS** - Help without giving away answers
6. **✅ ENCOURAGE EXPERIMENTATION** - "Try this" sections

### Example: Good vs Bad Exercise CSS

**❌ Bad (Solved, no comments):**

```css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

**✅ Good (Unsolved, educational):**

```css
/* ============================================
   EXERCISE 3: Flexbox Alignment
   ============================================
   
   GOAL: Learn to align items in a flex container
   
   YOUR TASK:
   1. Make .flex-container use flexbox
   2. Space items evenly across the width
   3. Center items vertically
   
   HINTS:
   - display: flex; activates flexbox
   - justify-content controls horizontal spacing
   - align-items controls vertical alignment
   ============================================ */

.flex-container {
  /* TODO: Add flexbox properties here */
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
}
```

## Reference Examples

- **Comprehensive Exercise CSS**: See `styles/phase2-grid.css`
- **Theory Component**: See `lessons/GridTheory.tsx`
- **Lesson Component**: See `lessons/Phase2Grid.tsx`
- **Progress Tracking**: See any Phase component

---

**Last Updated**: Follow these guidelines for every new phase to maintain consistency and quality! 🚀

## Additional Theory Guidelines

We maintain a separate, focused document describing the theory-page standards and why they matter. See `app/THEORY_GUIDELINES.md` for the authoritative guidance. In short:

- Theory pages are the canonical reference for students — invest time to make them clear and useful.
- Theory pages must follow the convention in `app/THEORY_GUIDELINES.md` (header block, TOC, inline visual examples, Accessibility Notes, Try this, and no `ExpectedOutcome`).

When updating or creating theory files, consult `app/THEORY_GUIDELINES.md` and follow the quick checklist at the top of that file.
