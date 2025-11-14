# Phase 2.2: CSS Grid Theory & Reference

## What is CSS Grid?

CSS Grid is a two-dimensional layout system that allows you to create complex layouts with rows and columns simultaneously. Unlike Flexbox (which is one-dimensional), Grid gives you complete control over both axes.

**Key Concept**: Grid is two-dimensional, meaning it handles layout in rows AND columns at the same time.

---

## When to Use Grid vs Flexbox

### Use Grid When:

- Layout is two-dimensional (rows AND columns)
- You need precise placement of items
- Creating page layouts, dashboards, or complex grids
- You want to define a layout structure first, then place items into it

### Use Flexbox When:

- Layout is one-dimensional (row OR column)
- Items should size themselves based on content
- Creating navigation bars, toolbars, or simple alignments
- You want items to control their own size

**Best Practice**: Use Grid for page layout, Flexbox for components. They work great together!

---

## Grid Terminology

### Grid Container

The element with `display: grid`

### Grid Items

Direct children of the grid container

### Grid Lines

The dividing lines that make up the grid structure (numbered starting from 1)

### Grid Tracks

The space between two grid lines (a row or column)

### Grid Cells

The space between four grid lines (like a table cell)

### Grid Areas

One or more grid cells making up a rectangular area

```
Grid Lines (vertical):    1   2   3   4
                          |   |   |   |
Grid Lines (horizontal): 1|---|---|---|
                         2|---|---|---|
                         3|---|---|---|

Grid Track = space between lines 1-2
Grid Cell = intersection of row track and column track
Grid Area = multiple cells forming a rectangle
```

---

## Creating a Grid

### Basic Grid Container

```css
.container {
  display: grid; /* Block-level grid */
  display: inline-grid; /* Inline-level grid */
}
```

### Defining Columns and Rows

```css
.container {
  /* 3 columns of equal width */
  grid-template-columns: 1fr 1fr 1fr;

  /* Shorthand with repeat() */
  grid-template-columns: repeat(3, 1fr);

  /* Mixed units */
  grid-template-columns: 200px 1fr 2fr;

  /* Define rows */
  grid-template-rows: 100px 200px auto;
}
```

---

## Grid Units

### fr (Fraction Unit)

Represents a fraction of available space

```css
.container {
  grid-template-columns: 1fr 2fr 1fr;
  /* Available space divided into 4 parts (1+2+1)
       Column 1: 25%
       Column 2: 50%
       Column 3: 25% */
}
```

### auto

Size based on content

```css
.container {
  grid-template-columns: auto 1fr auto;
  /* Side columns fit content, middle grows */
}
```

### Fixed Units (px, %, em, rem)

```css
.container {
  grid-template-columns: 250px 60% 10rem;
}
```

### minmax(min, max)

Flexible sizing with constraints

```css
.container {
  grid-template-columns: minmax(100px, 1fr) minmax(200px, 2fr);
  /* Columns at least 100px/200px, but can grow */
}
```

---

## Grid Gap

Spacing between grid items

```css
.container {
  gap: 20px; /* Same for rows and columns */
  gap: 20px 40px; /* row-gap column-gap */

  /* Or individually: */
  row-gap: 20px;
  column-gap: 40px;

  /* Old syntax (deprecated but still works): */
  grid-gap: 20px;
}
```

---

## Placing Items - Method 1: Grid Lines

Items are placed using line numbers (starting from 1)

```css
.item {
  /* Column placement */
  grid-column-start: 1;
  grid-column-end: 3; /* Spans from line 1 to 3 (2 columns) */

  /* Shorthand */
  grid-column: 1 / 3; /* start / end */

  /* Row placement */
  grid-row: 2 / 4; /* Spans rows 2-3 */

  /* Super shorthand */
  grid-area: 2 / 1 / 4 / 3; /* row-start / col-start / row-end / col-end */
}
```

### Using Span

```css
.item {
  grid-column: 1 / span 2; /* Start at 1, span 2 columns */
  grid-column: span 2; /* Span 2 columns (auto-placed) */

  grid-row: span 3; /* Span 3 rows */
}
```

### Negative Line Numbers

Count from the end of the grid

```css
.item {
  grid-column: 1 / -1; /* First to last column (full width) */
  grid-row: 2 / -2; /* Second row to second-to-last row */
}
```

---

## Placing Items - Method 2: Grid Template Areas

Named areas for intuitive layouts

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header  header  header"
    "sidebar content aside"
    "footer  footer  footer";
}

.header {
  grid-area: header;
}
.sidebar {
  grid-area: sidebar;
}
.content {
  grid-area: content;
}
.aside {
  grid-area: aside;
}
.footer {
  grid-area: footer;
}
```

**Use `.` for empty cells:**

```css
grid-template-areas:
  "header header  header"
  "sidebar content ."
  "footer footer  footer";
/* The top-right area is intentionally empty */
```

---

## Responsive Grids

### auto-fill

Creates as many columns as will fit

```css
.container {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  /* Makes columns at least 200px, fills container with as many as fit */
}
```

### auto-fit

Like auto-fill, but collapses empty tracks

```css
.container {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  /* Columns expand to fill space if there are fewer items */
}
```

**Difference**:

- `auto-fill`: Creates ghost columns even if empty
- `auto-fit`: Expands items to fill the container

---

## Alignment Properties

### Align Items in Their Cells

```css
.container {
  /* Horizontal alignment */
  justify-items: start; /* start | end | center | stretch (default) */

  /* Vertical alignment */
  align-items: start; /* start | end | center | stretch (default) */

  /* Shorthand */
  place-items: center; /* align-items justify-items */
}
```

### Align Individual Items

```css
.item {
  justify-self: center; /* Override container's justify-items */
  align-self: end; /* Override container's align-items */

  /* Shorthand */
  place-self: end center; /* align-self justify-self */
}
```

### Align the Grid Within Container

If grid is smaller than container:

```css
.container {
  height: 600px;

  /* Horizontal alignment of entire grid */
  justify-content: center; /* start | end | center | stretch | space-between | space-around | space-evenly */

  /* Vertical alignment of entire grid */
  align-content: center;

  /* Shorthand */
  place-content: center;
}
```

---

## Auto Placement

### grid-auto-flow

Controls how auto-placed items are inserted

```css
.container {
  grid-auto-flow: row; /* Default: fill rows first */
  grid-auto-flow: column; /* Fill columns first */
  grid-auto-flow: row dense; /* Fill gaps with smaller items */
  grid-auto-flow: dense; /* Fill gaps (works with column too) */
}
```

### grid-auto-rows / grid-auto-columns

Size of implicitly created rows/columns

```css
.container {
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px; /* Auto-created rows are 100px */
  grid-auto-columns: 150px; /* Auto-created columns are 150px */
}
```

---

## Common Grid Patterns

### 1. Equal Columns

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

### 2. Sidebar Layout

```css
.container {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 20px;
}
```

### 3. Holy Grail Layout

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "left   main   right"
    "footer footer footer";
  min-height: 100vh;
}
```

### 4. Responsive Card Grid

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

### 5. 12-Column Grid System

```css
.container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
}

.span-6 {
  grid-column: span 6;
} /* Half width */
.span-4 {
  grid-column: span 4;
} /* Third width */
.span-3 {
  grid-column: span 3;
} /* Quarter width */
```

### 6. Masonry-style (CSS Grid Approach)

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 10px; /* Small row height */
  gap: 10px;
}

.item {
  /* Items span multiple rows based on content */
  grid-row: span 10; /* Adjust per item */
}
```

### 7. Centered Content

```css
.container {
  display: grid;
  place-items: center; /* Center both axes */
  min-height: 100vh;
}
```

---

## Advanced Techniques

### Overlapping Items

```css
.item1 {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}

.item2 {
  grid-column: 2 / 4;
  grid-row: 2 / 4;
  z-index: 1; /* Control stacking */
}
/* Items overlap in the shared area */
```

### Subgrid (Modern CSS)

```css
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.nested {
  grid-column: span 2;
  display: grid;
  grid-template-columns: subgrid; /* Inherits parent's columns */
}
```

**Note**: `subgrid` has limited browser support as of 2025. Check compatibility.

---

## Grid vs Flexbox Quick Comparison

| Feature        | Grid                    | Flexbox            |
| -------------- | ----------------------- | ------------------ |
| Dimensions     | 2D (rows & columns)     | 1D (row or column) |
| Content-first  | No, layout-first        | Yes, content-first |
| Item placement | Precise control         | Flow-based         |
| Overlap        | Easy (z-index)          | Difficult          |
| Gaps           | Built-in `gap`          | Built-in `gap`     |
| Best for       | Page layouts            | Components         |
| Alignment      | Both axes independently | Main & cross axis  |

---

## Browser DevTools

Modern browsers have excellent Grid debugging:

1. **Chrome/Edge**: Inspect element → Look for "grid" badge → Click it
2. **Firefox**: Best Grid DevTools! Shows line numbers, area names, and gaps
3. **Safari**: Inspect element → Grid overlay toggle

DevTools show:

- Grid lines with numbers
- Named areas
- Gap spacing
- Item placement

**Firefox has the best Grid DevTools** - highly recommended for learning!

---

## Common Gotchas

### 1. Only Direct Children Are Grid Items

```css
.container {
  display: grid;
}

/* ✅ Grid item */
.container > .item {
}

/* ❌ NOT a grid item (grandchild) */
.container > .wrapper > .item {
}
```

### 2. Percentage Heights

```css
.container {
  display: grid;
  height: 500px; /* Explicit height needed */
}

.item {
  height: 100%; /* Now this works */
}
```

### 3. Grid Gap Isn't Margin

```css
/* Gap creates space between items, NOT around edges */
.container {
  gap: 20px; /* Space between items */
  padding: 20px; /* Space around edges */
}
```

### 4. Auto-placement Surprises

Items without explicit placement auto-fill left to right, top to bottom:

```css
.item:nth-child(3) {
  grid-column: 1 / 3; /* This item might create gaps */
}
/* Use grid-auto-flow: dense to fill gaps */
```

### 5. Implicit vs Explicit Grid

```css
.container {
  grid-template-columns: repeat(3, 1fr); /* Explicit: 3 columns */
  grid-auto-rows: 100px; /* Implicit: auto rows */
}
/* If you have 10 items, 4th row is implicitly created */
```

---

## Accessibility Tips

1. **Visual Order vs DOM Order**: Grid can reorder visually, but screen readers follow HTML
2. **Use Semantic HTML**: `<header>`, `<main>`, `<aside>`, `<footer>`
3. **Test Keyboard Navigation**: Tab order should be logical
4. **Responsive Considerations**: Ensure layout makes sense on all screen sizes

---

## Practice Exercises

The HTML file includes:

1. ✅ Basic grid setup
2. ✅ Column and row sizing (px, fr, auto)
3. ✅ Grid template areas
4. ✅ Grid line placement
5. ✅ Span keyword
6. ✅ Alignment properties
7. ✅ Auto-fit vs auto-fill
8. ✅ Minmax function
9. ✅ Grid auto flow (dense packing)
10. ✅ Nested grids
11. ✅ Dashboard layout project
12. ✅ Magazine layout project

Work through systematically. Use Firefox DevTools for best visualization!

---

## Quick Reference

### Container Properties

| Property                | Purpose                   |
| ----------------------- | ------------------------- |
| `display: grid`         | Enable grid               |
| `grid-template-columns` | Define columns            |
| `grid-template-rows`    | Define rows               |
| `grid-template-areas`   | Named areas               |
| `gap`                   | Spacing                   |
| `justify-items`         | Horizontal item alignment |
| `align-items`           | Vertical item alignment   |
| `justify-content`       | Horizontal grid alignment |
| `align-content`         | Vertical grid alignment   |
| `grid-auto-flow`        | Auto-placement algorithm  |
| `grid-auto-rows`        | Size of implicit rows     |
| `grid-auto-columns`     | Size of implicit columns  |

### Item Properties

| Property       | Purpose                 |
| -------------- | ----------------------- |
| `grid-column`  | Column placement        |
| `grid-row`     | Row placement           |
| `grid-area`    | Named area or placement |
| `justify-self` | Override justify-items  |
| `align-self`   | Override align-items    |

---

## Resources

- [MDN CSS Grid Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [CSS Tricks Complete Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Grid Garden](https://cssgridgarden.com/) - Interactive game
- [Grid by Example](https://gridbyexample.com/) - Rachel Andrew's examples
- [Firefox Grid Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html)

Master the grid! 📐
