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

const content = `import React from 'react';\nimport { PageHeader } from '../components';\nimport './${cssName}';\n\nexport default function ${name}() {\n  return (\n    <div>\n      <PageHeader title="${
  title || name
}" />\n      <p>New lesson scaffolded. Replace this content with exercises.</p>\n    </div>\n  );\n}\n`;

const cssContent = `/* ${cssName} - scaffolded styles for ${name} */\n`;

fs.writeFileSync(path.join(base, fileName), content, { flag: "wx" });
fs.writeFileSync(path.join(styles, cssName), cssContent, { flag: "wx" });
console.log("Created", fileName, "and", cssName);
