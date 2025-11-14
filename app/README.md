CSS Practice App (POC)

This folder contains a minimal Vite + React proof-of-concept to start migrating the static practice site into React components.

Quick start:

1. cd app
2. npm install
3. npm run dev

If you add TypeScript deps, run:

```bash
npm install
```

Then start the dev server with:

```bash
npm run dev
```

Notes:

- The POC includes a `Phase2Grid` component with a couple of example exercises.
- For a full migration we'll create reusable components (Exercise, Editor, TheoryModal).
- The existing static files (`../phase2-grid/*`) are left untouched; you can link to them from the POC.
