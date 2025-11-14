#!/usr/bin/env node
// Simple scaffolding script to generate a lesson and corresponding CSS file.
// Usage: node scripts/createLesson.js "Phase3-MyLesson" "My Lesson Title"
const fs = require("fs");
const path = require("path");

const [, , name, title] = process.argv;
if (!name) {
  console.error('Usage: node scripts/createLesson.js <FileBaseName> ["Title"]');
  process.exit(1);
}

const base = path.join(__dirname, "..", "src", "lessons");
const styles = path.join(__dirname, "..", "src", "styles");
const fileName = `${name}.tsx`;
const cssName = `phase-${name.toLowerCase()}.css`;

const content = `import React from 'react';\nimport { PageHeader } from '../components';\nimport '../styles/${cssName}';\n\nexport default function ${name}() {\n  return (\n    <div>\n      <PageHeader title="${
  title || name
}" />\n      <p>New lesson scaffolded. Replace this content with exercises.</p>\n    </div>\n  );\n}\n`;

const cssContent = `/* ${cssName} - scaffolded styles for ${name} */\n`;

fs.writeFileSync(path.join(base, fileName), content, { flag: "wx" });
fs.writeFileSync(path.join(styles, cssName), cssContent, { flag: "wx" });
console.log("Created", fileName, "and", cssName);

// -- update lessons index exports
try {
  const lessonsIndex = path.join(base, "index.ts");
  let idx = fs.readFileSync(lessonsIndex, "utf8");
  const exportLine = `export { default as ${name} } from "./${name}";`;
  if (!idx.includes(exportLine)) {
    idx = idx.trimEnd() + "\n" + exportLine + "\n";
    fs.writeFileSync(lessonsIndex, idx, "utf8");
    console.log("Updated lessons index exports with", name);
  } else {
    console.log(name, "already exported in lessons index");
  }
} catch (err) {
  console.warn("Could not update lessons index exports:", err.message);
}

// -- attempt to wire routes and imports in MainPage.tsx
try {
  const mainPage = path.join(
    __dirname,
    "..",
    "src",
    "components",
    "MainPage.tsx"
  );
  let mainText = fs.readFileSync(mainPage, "utf8");

  // 1) add the component to the lessons import list: find the import from '../lessons'
  const lessonsImportRe = /(import\s*\{[\s\S]*?\}\s*from\s*"\.\.\/lessons";)/m;
  const match = mainText.match(lessonsImportRe);
  if (match) {
    const importBlock = match[0];
    if (!importBlock.includes(name)) {
      const updated = importBlock.replace(
        /\}\s*from\s*"\.\.\/lessons"/,
        `  , ${name}\n} from "../lessons";`
      );
      mainText = mainText.replace(importBlock, updated);
      console.log("Added", name, "to lessons import in MainPage.tsx");
    } else {
      console.log(name, "already present in MainPage imports");
    }
  }

  // 2) insert a Route before the closing </Routes>
  const routePath = `/${name
    .replace(/([A-Z])/g, "-$1")
    .replace(/[^a-zA-Z0-9-]/g, "-")
    .replace(/--+/g, "-")
    .toLowerCase()
    .replace(/^-/, "")}`;
  const routeSnippet = `      <Route\n        path="${routePath}"\n        element={\n          <LessonLayout>\n            <${name} />\n          </LessonLayout>\n        }\n      />\n`;

  if (!mainText.includes(`<${name} />`)) {
    const insertBefore = "    </Routes>";
    if (mainText.includes(insertBefore)) {
      mainText = mainText.replace(insertBefore, routeSnippet + insertBefore);
      fs.writeFileSync(mainPage, mainText, "utf8");
      console.log("Wired route", routePath, "-> component", name);
    } else {
      console.warn(
        "Could not find Routes closing tag to insert route. Skipping route wiring."
      );
    }
  } else {
    console.log(name, "already wired in MainPage routes");
  }
} catch (err) {
  console.warn("Could not automatically wire MainPage routes:", err.message);
}
