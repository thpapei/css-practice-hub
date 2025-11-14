# CSS Practice Hub

An interactive CSS learning platform built with React and TypeScript. Learn CSS through hands-on exercises with progressive difficulty, comprehensive theory sections, and visual examples.

## Features

- **62+ Interactive Exercises** across 6 complete lessons
- **Progressive Learning Path** organized into 2 phases
- **Theory References** with live visual examples for every topic
- **Expected Outcomes** showing what completed exercises should look like
- **Progress Tracking** to monitor your learning journey
- **Educational Comments** explaining concepts right in the CSS
- **Focused Practice** - only practice what you're learning (all else pre-filled)

## Current Content

### Phase 1: Fundamentals

- **1.1 Selectors** (6 exercises) - Element, class, ID, descendant, pseudo-classes
- **1.2 Box Model** (10 exercises) - Width, height, padding, margin, border, box-sizing
- **1.3 Typography** (10 exercises) - Fonts, sizes, weights, spacing, alignment, text effects

### Phase 2: Layout Systems

- **2.1 Positioning** (12 exercises) - Relative, absolute, fixed, sticky, z-index, real UI patterns
- **2.2 Flexbox** (12 exercises) - Container properties, item properties, common layouts
- **2.3 Grid** (12 exercises) - Template columns/rows, areas, lines, responsive grids

## Getting Started

```bash
cd app
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to start learning.

## Educational Philosophy

**Focus on the Learning Target**

Each exercise isolates the specific concept being taught. All supporting CSS is pre-filled so you can focus entirely on practicing the new skill:

- **Grid exercises**: Only Grid properties need completion
- **Flexbox exercises**: Only Flexbox properties need completion
- **Typography exercises**: Only font properties need completion

This approach accelerates learning by removing cognitive load from repetitive styling.

## Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type safety and better DX
- **Vite** - Lightning-fast build tool
- **React Router** - Client-side routing with persistent URLs
- **CSS3** - Pure CSS for all styling (no frameworks)

## Project Structure

```
app/
├── src/
│   ├── lessons/           # Lesson components + theory
│   │   ├── Phase1Selectors.tsx
│   │   ├── SelectorsTheory.tsx
│   │   ├── Phase1BoxModel.tsx
│   │   ├── Phase2Grid.tsx
│   │   └── ...
│   ├── components/        # Reusable UI components
│   │   ├── ExerciseCard.tsx
│   │   ├── TheoryModal.tsx
│   │   ├── ProgressBar.tsx
│   │   └── ...
│   ├── styles/           # Exercise CSS files
│   │   ├── phase1-selectors.css
│   │   ├── phase2-grid.css
│   │   └── ...
│   ├── hooks/            # Custom React hooks
│   │   └── useProgress.ts
│   └── types/            # TypeScript definitions
└── STRUCTURE.md          # Complete architecture guide
```

## Design Principles

**Color Palette**:

- Primary: `#667eea` (purple)
- Accent: `#fa709a` (pink)
- Highlight: `#fee140` (yellow)
- Success: `#27ae60` (green)

**CSS Naming Conventions**:

- Selectors: `.selectors-*`
- Box Model: `.boxmodel-*`
- Typography: `.typo-*`
- Positioning: `.pos-*`
- Flexbox: `.flex-*`
- Grid: `.grid-*`, `.areas-*`, `.lines-*`

## Contributing

See `app/STRUCTURE.md` for complete guidelines on creating new lessons, exercises, and theory components.

## License

MIT License - Feel free to use this for learning and teaching CSS.
