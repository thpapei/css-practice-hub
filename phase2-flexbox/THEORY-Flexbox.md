# Phase 2.1: Flexbox Theory & Reference

## What is Flexbox?

Flexbox (Flexible Box Layout) is a one-dimensional layout system that allows you to arrange items in rows or columns. Items can "flex" to fill available space or shrink to prevent overflow.

**Key Concept**: Flexbox is one-dimensional, meaning it handles layout in one direction at a time (either row or column).

---

## Flex Container vs Flex Items

### Flex Container

The parent element with `display: flex` or `display: inline-flex`

### Flex Items

Direct children of the flex container

```css
.container {
  display: flex; /* This is now a flex container */
}

/* All direct children of .container are now flex items */
```

---

## Main Axis vs Cross Axis

Flexbox works along two axes:

- **Main Axis**: The primary axis along which flex items are laid out

  - For `flex-direction: row` → horizontal (left to right)
  - For `flex-direction: column` → vertical (top to bottom)

- **Cross Axis**: Perpendicular to the main axis
  - For `flex-direction: row` → vertical
  - For `flex-direction: column` → horizontal

---

## Flex Container Properties

### display

```css
.container {
  display: flex; /* Block-level flex container */
  display: inline-flex; /* Inline-level flex container */
}
```

### flex-direction

Defines the main axis direction

```css
.container {
  flex-direction: row; /* Default: left to right */
  flex-direction: row-reverse; /* Right to left */
  flex-direction: column; /* Top to bottom */
  flex-direction: column-reverse; /* Bottom to top */
}
```

### flex-wrap

Controls whether items wrap to new lines

```css
.container {
  flex-wrap: nowrap; /* Default: all items on one line */
  flex-wrap: wrap; /* Items wrap to multiple lines */
  flex-wrap: wrap-reverse; /* Items wrap in reverse order */
}
```

### flex-flow

Shorthand for `flex-direction` and `flex-wrap`

```css
.container {
  flex-flow: row wrap;
  /* Same as:
       flex-direction: row;
       flex-wrap: wrap;
    */
}
```

### justify-content

Aligns items along the **main axis**

```css
.container {
  justify-content: flex-start; /* Default: items at start */
  justify-content: flex-end; /* Items at end */
  justify-content: center; /* Items centered */
  justify-content: space-between; /* Even space between items */
  justify-content: space-around; /* Even space around items */
  justify-content: space-evenly; /* Equal space between and around */
}
```

**Visual Comparison** (for 3 items):

- `space-between`: `[1]____[2]____[3]`
- `space-around`: `__[1]____[2]____[3]__`
- `space-evenly`: `___[1]___[2]___[3]___`

### align-items

Aligns items along the **cross axis**

```css
.container {
  align-items: stretch; /* Default: items stretch to fill container */
  align-items: flex-start; /* Items at cross-axis start */
  align-items: flex-end; /* Items at cross-axis end */
  align-items: center; /* Items centered on cross-axis */
  align-items: baseline; /* Items aligned by text baseline */
}
```

### align-content

Aligns multiple lines of items (only works with `flex-wrap`)

```css
.container {
  flex-wrap: wrap;
  align-content: flex-start; /* Lines packed at start */
  align-content: flex-end; /* Lines packed at end */
  align-content: center; /* Lines centered */
  align-content: space-between; /* Space between lines */
  align-content: space-around; /* Space around lines */
  align-content: stretch; /* Default: lines stretch */
}
```

### gap (Modern Property)

Spacing between flex items

```css
.container {
  gap: 20px; /* Same gap for rows and columns */
  gap: 20px 40px; /* row-gap column-gap */

  /* Or individually: */
  row-gap: 20px;
  column-gap: 40px;
}
```

**Note**: `gap` is modern and replaces the need for margins between items.

---

## Flex Item Properties

### order

Controls the visual order of items (doesn't change HTML order)

```css
.item {
  order: 0; /* Default: items appear in source order */
  order: 1; /* Higher values appear later */
  order: -1; /* Lower values appear earlier */
}
```

### flex-grow

How much an item should grow relative to others

```css
.item {
  flex-grow: 0; /* Default: don't grow */
  flex-grow: 1; /* Grow to fill space */
  flex-grow: 2; /* Grow twice as much as items with flex-grow: 1 */
}
```

**Example**: If you have 3 items with `flex-grow: 1, 2, 1`:

- Item 1 gets 1/4 of the available space
- Item 2 gets 2/4 (half) of the available space
- Item 3 gets 1/4 of the available space

### flex-shrink

How much an item should shrink relative to others

```css
.item {
  flex-shrink: 1; /* Default: can shrink */
  flex-shrink: 0; /* Won't shrink below its size */
  flex-shrink: 2; /* Shrinks twice as much as items with flex-shrink: 1 */
}
```

### flex-basis

Initial size of item before growing/shrinking

```css
.item {
  flex-basis: auto; /* Default: based on content size */
  flex-basis: 200px; /* Start at 200px */
  flex-basis: 25%; /* Start at 25% of container */
  flex-basis: 0; /* Ignore content size */
}
```

### flex (Shorthand)

Combines `flex-grow`, `flex-shrink`, and `flex-basis`

```css
.item {
  flex: 1; /* flex: 1 1 0% */
  flex: 0 0 200px; /* Don't grow or shrink, fixed 200px */
  flex: 2 1 auto; /* Grow 2x, can shrink, auto size */

  /* Common patterns: */
  flex: 1; /* Grow to fill space equally */
  flex: 0 0 auto; /* Fixed size, no grow/shrink */
  flex: auto; /* flex: 1 1 auto */
  flex: none; /* flex: 0 0 auto */
}
```

**Recommendation**: Use the shorthand `flex` instead of individual properties.

### align-self

Override `align-items` for individual items

```css
.container {
  align-items: center; /* Default for all items */
}

.item {
  align-self: flex-start; /* This item aligns differently */
  align-self: flex-end;
  align-self: center;
  align-self: stretch;
  align-self: baseline;
  align-self: auto; /* Use container's align-items */
}
```

---

## Common Flexbox Patterns

### 1. Centering (Both Axes)

```css
.container {
  display: flex;
  justify-content: center; /* Horizontal center */
  align-items: center; /* Vertical center */
}
```

### 2. Equal-Width Columns

```css
.container {
  display: flex;
}

.item {
  flex: 1; /* All items grow equally */
}
```

### 3. Sidebar Layout

```css
.container {
  display: flex;
}

.sidebar {
  flex: 0 0 250px; /* Fixed 250px, no grow/shrink */
}

.main {
  flex: 1; /* Grows to fill remaining space */
}
```

### 4. Navbar with Logo and Menu

```css
.navbar {
  display: flex;
  justify-content: space-between; /* Logo left, menu right */
  align-items: center; /* Vertically centered */
}

.menu {
  display: flex;
  gap: 20px; /* Space between menu items */
}
```

### 5. Responsive Card Grid

```css
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  flex: 1 1 300px; /* Grow, shrink, minimum 300px */
}
```

### 6. Sticky Footer

```css
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1; /* Grows to push footer to bottom */
}
```

---

## Flexbox vs Grid

### Use Flexbox When:

- Layout is one-dimensional (row or column)
- You want items to size themselves based on content
- You need simple alignment and distribution
- Creating navigation bars, toolbars, or button groups

### Use Grid When:

- Layout is two-dimensional (rows AND columns)
- You need precise placement of items
- Creating page layouts or complex grids

**You can use both together!** Grid for page layout, Flexbox for components.

---

## Browser DevTools

All modern browsers have excellent Flexbox debugging:

1. **Chrome/Edge**: Inspect element → Look for "flex" badge → Click it
2. **Firefox**: Inspect element → Layout panel → Flexbox section
3. **Safari**: Inspect element → Look for flex indicator

DevTools show:

- Main and cross axes
- Item sizing and spacing
- Visual guides for alignment

---

## Common Gotchas

### 1. Forgetting `display: flex`

```css
/* ❌ Won't work - not a flex container */
.container {
  justify-content: center;
}

/* ✅ Correct */
.container {
  display: flex;
  justify-content: center;
}
```

### 2. Margins Still Work

Margins still apply in flexbox and can push items around:

```css
.item {
  margin-left: auto; /* Pushes item to the right */
}
```

### 3. `flex-basis` vs `width`

With `flex-basis`, the `width` is more like a suggestion:

```css
.item {
  width: 200px; /* Might be ignored */
  flex-basis: 200px; /* Preferred way in flexbox */
}
```

### 4. Percentage Heights

For percentage heights to work on flex items:

```css
.container {
  display: flex;
  height: 500px; /* Parent needs explicit height */
}

.item {
  height: 50%; /* Now this works */
}
```

### 5. Text Overflow in Flex Items

Long text might overflow:

```css
.item {
  min-width: 0; /* Allows item to shrink below content size */
  overflow: hidden;
  text-overflow: ellipsis;
}
```

---

## Accessibility Tips

1. **Be Careful with `order`**: Screen readers follow HTML order, not visual order
2. **Use Semantic HTML**: `<nav>`, `<header>`, `<main>`, etc.
3. **Test with Keyboard**: Tab order should be logical
4. **Don't Rely on Color Alone**: For interactive items

---

## Practice Exercises

The HTML file includes:

1. ✅ Basic flex containers
2. ✅ Flex direction and wrapping
3. ✅ Justify content variations
4. ✅ Align items and align-self
5. ✅ Flex grow, shrink, and basis
6. ✅ Order property
7. ✅ Gap property
8. ✅ Holy Grail layout project
9. ✅ Responsive navbar project

Work through each exercise systematically. Use DevTools to visualize how flexbox properties affect layout.

---

## Quick Reference

| Property          | Applied To | Purpose                         |
| ----------------- | ---------- | ------------------------------- |
| `display: flex`   | Container  | Enable flexbox                  |
| `flex-direction`  | Container  | Main axis direction             |
| `flex-wrap`       | Container  | Allow wrapping                  |
| `justify-content` | Container  | Main axis alignment             |
| `align-items`     | Container  | Cross axis alignment            |
| `align-content`   | Container  | Multi-line alignment            |
| `gap`             | Container  | Spacing between items           |
| `flex-grow`       | Item       | How much to grow                |
| `flex-shrink`     | Item       | How much to shrink              |
| `flex-basis`      | Item       | Initial size                    |
| `flex`            | Item       | Shorthand for grow/shrink/basis |
| `order`           | Item       | Visual order                    |
| `align-self`      | Item       | Override container alignment    |

---

## Resources

- [MDN Flexbox Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [CSS Tricks Complete Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Flexbox Froggy](https://flexboxfroggy.com/) - Interactive game
- [Flexbox Defense](http://www.flexboxdefense.com/) - Tower defense game

Happy Flexing! 🎯
