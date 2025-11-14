# CSS Box Model & Display - Essential Theory

## Table of Contents

1. [The Box Model](#the-box-model)
2. [Box-Sizing Property](#box-sizing-property)
3. [Display Properties](#display-properties)
4. [Width and Height](#width-and-height)
5. [Min/Max Dimensions](#minmax-dimensions)
6. [Overflow](#overflow)
7. [Margin Collapse](#margin-collapse)

---

## The Box Model

Every element in CSS is a rectangular box with four layers:

```
┌─────────────────────────────────────┐
│           MARGIN (transparent)       │
│  ┌───────────────────────────────┐  │
│  │     BORDER                     │  │
│  │  ┌─────────────────────────┐  │  │
│  │  │   PADDING               │  │  │
│  │  │  ┌───────────────────┐  │  │  │
│  │  │  │    CONTENT        │  │  │  │
│  │  │  │   (text, images)  │  │  │  │
│  │  │  └───────────────────┘  │  │  │
│  │  └─────────────────────────┘  │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

### Content

The actual content of the element (text, images, etc.)

```css
div {
  width: 200px; /* Content width */
  height: 100px; /* Content height */
}
```

### Padding

Space between content and border. **Inside** the element.

```css
div {
  padding: 20px; /* All sides */
  padding: 10px 20px; /* Vertical | Horizontal */
  padding: 10px 20px 30px; /* Top | Horizontal | Bottom */
  padding: 10px 20px 30px 40px; /* Top | Right | Bottom | Left (clockwise) */

  /* Individual sides */
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 40px;
}
```

**Key Points:**

- ✅ Background color/image extends into padding
- ✅ Padding is **transparent** but shows background
- ✅ Padding adds to total element size (by default)
- ✅ Cannot be negative

### Border

Line around the padding and content.

```css
div {
  border: 2px solid black; /* width | style | color */

  /* Individual properties */
  border-width: 2px;
  border-style: solid; /* solid, dashed, dotted, double, groove, etc. */
  border-color: black;

  /* Individual sides */
  border-top: 1px solid red;
  border-right: 2px dashed blue;
  border-bottom: 3px dotted green;
  border-left: 4px solid orange;

  /* Rounded corners */
  border-radius: 8px; /* All corners */
  border-radius: 8px 16px; /* Top-left & bottom-right | Top-right & bottom-left */
  border-radius: 8px 16px 24px 32px; /* TL | TR | BR | BL */
}
```

**Border Styles:**

- `solid` - Solid line
- `dashed` - Dashed line
- `dotted` - Dotted line
- `double` - Two solid lines
- `groove` - 3D grooved effect
- `ridge` - 3D ridged effect
- `inset` - 3D inset effect
- `outset` - 3D outset effect
- `none` - No border
- `hidden` - Same as none

### Margin

Space **outside** the border. Creates distance between elements.

```css
div {
  margin: 20px; /* All sides */
  margin: 10px 20px; /* Vertical | Horizontal */
  margin: 10px 20px 30px 40px; /* Top | Right | Bottom | Left */

  /* Individual sides */
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 30px;
  margin-left: 40px;

  /* Centering trick */
  margin: 0 auto; /* Top/Bottom: 0, Left/Right: auto (centers block element) */

  /* Negative margins (yes, allowed!) */
  margin-top: -10px; /* Pull element up */
}
```

**Key Points:**

- ✅ Margin is **transparent** (no background)
- ✅ Can be negative (pull elements closer)
- ✅ `auto` value for horizontal centering
- ✅ Margins can **collapse** (see below)

---

## Box-Sizing Property

Controls how width and height are calculated.

### content-box (default)

Width/height applies **only to content**. Padding and border are added.

```css
.content-box {
  box-sizing: content-box; /* Default */
  width: 200px;
  padding: 20px;
  border: 5px solid black;

  /* Actual width = 200 + 20 + 20 + 5 + 5 = 250px */
  /* Math: width + padding-left + padding-right + border-left + border-right */
}
```

**Problem:** Hard to predict actual size!

### border-box (recommended!)

Width/height includes padding and border. Much more intuitive!

```css
.border-box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid black;

  /* Actual width = 200px (padding and border included!) */
  /* Content width = 200 - 20 - 20 - 5 - 5 = 150px */
}
```

**Solution:** Size is exactly what you set!

### Best Practice: Use border-box Everywhere

```css
/* At the top of your CSS file */
* {
  box-sizing: border-box;
}

/* Or be more specific */
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

**Why?**

- ✅ Predictable sizing
- ✅ Easier layout calculations
- ✅ Padding doesn't break your layout
- ✅ Industry standard

---

## Display Properties

The `display` property controls how an element behaves in the layout.

### block

Takes full width available, starts on new line.

```css
div {
  display: block; /* Default for div, p, h1-h6, ul, li, etc. */
}
```

**Characteristics:**

- ✅ Takes full width available (100% of parent)
- ✅ Starts on a new line
- ✅ Respects width, height, margin, padding
- ✅ Stacks vertically

**Common block elements:**
`<div>`, `<p>`, `<h1>`-`<h6>`, `<ul>`, `<ol>`, `<li>`, `<section>`, `<article>`, `<header>`, `<footer>`

**Example:**

```css
.block-element {
  display: block;
  width: 50%; /* ✓ Works */
  height: 100px; /* ✓ Works */
  margin: 20px; /* ✓ All sides work */
  padding: 20px; /* ✓ All sides work */
}
```

### inline

Takes only needed width, stays on same line.

```css
span {
  display: inline; /* Default for span, a, strong, em, etc. */
}
```

**Characteristics:**

- ✅ Takes only needed width
- ✅ Stays on same line with adjacent inline elements
- ❌ Does NOT respect width/height
- ❌ Vertical margin/padding don't work properly
- ✅ Horizontal margin/padding work

**Common inline elements:**
`<span>`, `<a>`, `<strong>`, `<em>`, `<img>`, `<input>`, `<button>`

**Example:**

```css
.inline-element {
  display: inline;
  width: 100px; /* ✗ Ignored! */
  height: 100px; /* ✗ Ignored! */
  margin-top: 20px; /* ✗ Doesn't work properly */
  margin-left: 20px; /* ✓ Works */
  padding-top: 20px; /* ⚠ Overlaps other elements */
  padding-left: 20px; /* ✓ Works */
}
```

### inline-block

Best of both worlds!

```css
button {
  display: inline-block;
}
```

**Characteristics:**

- ✅ Stays on same line (like inline)
- ✅ Respects width/height (like block)
- ✅ All margin/padding work properly
- ✅ Perfect for navigation items, buttons, cards in a row

**Example:**

```css
.inline-block-element {
  display: inline-block;
  width: 100px; /* ✓ Works! */
  height: 100px; /* ✓ Works! */
  margin: 20px; /* ✓ All sides work! */
  padding: 20px; /* ✓ All sides work! */
}
```

**Common Use Cases:**

- Navigation menu items
- Buttons in a row
- Thumbnails/cards that wrap
- Form elements

### none

Removes element from document flow completely.

```css
.hidden {
  display: none; /* Element doesn't exist in layout */
}
```

**Characteristics:**

- ✅ Element is completely removed
- ✅ No space reserved
- ✅ Can't be seen or interacted with
- ✅ Used for toggling visibility with JavaScript

### Comparison: display: none vs visibility: hidden

```css
.display-none {
  display: none; /* Removed from flow, no space taken */
}

.visibility-hidden {
  visibility: hidden; /* Hidden but space still reserved */
}
```

**When to use:**

- `display: none` - When you want to completely remove (menus, modals)
- `visibility: hidden` - When you want to keep layout but hide content

---

## Width and Height

### Width

```css
div {
  /* Absolute units */
  width: 200px; /* Fixed pixels */

  /* Relative units */
  width: 50%; /* 50% of parent's width */
  width: 50vw; /* 50% of viewport width */

  /* Auto */
  width: auto; /* Default - takes available space */

  /* Special values */
  width: fit-content; /* Shrinks to content width */
  width: max-content; /* Maximum content width (no wrapping) */
  width: min-content; /* Minimum content width (maximum wrapping) */
}
```

### Height

```css
div {
  /* Fixed */
  height: 100px; /* Fixed pixels */

  /* Relative */
  height: 50%; /* 50% of parent's height (parent must have defined height!) */
  height: 50vh; /* 50% of viewport height */

  /* Auto */
  height: auto; /* Default - grows with content */
}
```

**Important Notes:**

- Block elements have `width: auto` (100% of parent by default)
- Block elements have `height: auto` (grows with content)
- Percentage heights require parent to have explicit height
- Using `height` can cause overflow issues - prefer `min-height`

---

## Min/Max Dimensions

Control size constraints for responsive design.

### min-width / max-width

```css
.responsive-box {
  width: 50%;
  min-width: 300px; /* Never smaller than 300px */
  max-width: 800px; /* Never larger than 800px */
}

/* Common pattern for centered content */
.container {
  width: 100%;
  max-width: 1200px; /* Limits width on large screens */
  margin: 0 auto; /* Centers the container */
  padding: 0 1rem; /* Breathing room on small screens */
}
```

### min-height / max-height

```css
.card {
  min-height: 200px; /* At least 200px tall */
  max-height: 500px; /* No taller than 500px */
}

/* Full viewport height with minimum */
.hero {
  min-height: 100vh; /* At least full viewport height */
}
```

### Priority Order

When conflicts occur:

1. `min-width/height` wins over `max-width/height`
2. `min/max` win over `width/height`

```css
div {
  width: 500px;
  min-width: 600px; /* min-width wins! Element is 600px */
  max-width: 400px; /* Ignored because min-width takes priority */
}
```

---

## Overflow

Controls what happens when content is larger than container.

### overflow: visible (default)

Content overflows and is visible outside the box.

```css
.overflow-visible {
  width: 200px;
  height: 100px;
  overflow: visible; /* Default - content spills out */
}
```

**When to use:** Default behavior, rarely set explicitly.

### overflow: hidden

Content is clipped at the box boundary.

```css
.overflow-hidden {
  width: 200px;
  height: 100px;
  overflow: hidden; /* Excess content is cut off */
}
```

**When to use:**

- Hiding overflow content intentionally
- Creating rounded corners on images
- Clearfix techniques
- Preventing layout breaks

### overflow: scroll

Scrollbars always visible, even if not needed.

```css
.overflow-scroll {
  width: 200px;
  height: 100px;
  overflow: scroll; /* Scrollbars always shown */
}
```

**When to use:** Rarely - usually better to use `auto`

### overflow: auto (recommended!)

Scrollbars appear only when needed.

```css
.overflow-auto {
  width: 200px;
  height: 100px;
  overflow: auto; /* Scrollbars only when necessary */
}
```

**When to use:** Most common - text areas, code blocks, modals with variable content

### Directional Overflow

Control horizontal and vertical separately.

```css
.scrollable-content {
  overflow-x: auto; /* Horizontal scroll only when needed */
  overflow-y: scroll; /* Vertical scroll always */

  /* Or shorthand */
  overflow: auto hidden; /* x | y */
}
```

### Text Overflow

Special handling for text.

```css
.truncate {
  width: 200px;
  white-space: nowrap; /* Prevent line breaks */
  overflow: hidden; /* Hide overflow */
  text-overflow: ellipsis; /* Show ... */
}
```

Result: "This is a long text th..."

---

## Margin Collapse

A quirk where vertical margins of adjacent elements combine.

### What is Margin Collapse?

When two vertical margins touch, they **collapse** into a single margin (the larger one).

```css
.box-1 {
  margin-bottom: 30px;
}

.box-2 {
  margin-top: 20px;
}

/* Actual space between = 30px (NOT 50px!) */
/* The larger margin (30px) wins */
```

### When Margins Collapse

**1. Adjacent Siblings**

```html
<div style="margin-bottom: 20px;">Box 1</div>
<div style="margin-top: 30px;">Box 2</div>
<!-- Space between = 30px (larger margin wins) -->
```

**2. Parent and First/Last Child**

```html
<div style="margin-top: 20px;">
  <p style="margin-top: 30px;">First child</p>
</div>
<!-- The parent's top margin collapses with child's! -->
```

**3. Empty Blocks**

```css
.empty {
  margin-top: 20px;
  margin-bottom: 30px;
  /* If empty, these collapse into single 30px margin */
}
```

### When Margins DON'T Collapse

❌ Horizontal margins never collapse
❌ Margins with padding/border between them
❌ Absolutely positioned elements
❌ Floated elements
❌ Inline-block elements
❌ Flex items
❌ Grid items

### Preventing Margin Collapse

```css
/* Method 1: Add padding */
.parent {
  padding-top: 1px; /* Prevents collapse with child */
}

/* Method 2: Add border */
.parent {
  border-top: 1px solid transparent;
}

/* Method 3: Use flexbox */
.parent {
  display: flex;
  flex-direction: column;
}

/* Method 4: Use padding instead of margin */
.child {
  padding-top: 20px; /* Use padding instead */
}
```

---

## Practical Examples

### Centering a Block Element

```css
.centered {
  width: 600px; /* Must have defined width */
  margin: 0 auto; /* Left and right margins auto */
}
```

### Card Component with Perfect Spacing

```css
.card {
  box-sizing: border-box; /* Include padding in width */
  width: 300px;
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 1rem;
}
```

### Responsive Container

```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
```

### Truncate Text with Ellipsis

```css
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
}
```

### Image in Container

```css
.image-wrapper {
  width: 300px;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Maintain aspect ratio */
  display: block; /* Remove inline spacing */
}
```

---

## Common Pitfalls & Solutions

### Problem: Width doesn't work on inline element

```css
/* ❌ Wrong */
span {
  width: 100px; /* Ignored! */
}

/* ✅ Right */
span {
  display: inline-block;
  width: 100px;
}
```

### Problem: Element wider than expected

```css
/* ❌ Wrong */
.box {
  width: 200px;
  padding: 20px; /* Actual width: 240px! */
}

/* ✅ Right */
.box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px; /* Actual width: 200px */
}
```

### Problem: Unexpected space between elements

```css
/* ❌ inline-block elements have space between them */
.item {
  display: inline-block;
}
/* HTML whitespace creates gaps! */

/* ✅ Solution 1: Remove HTML whitespace */
/* <div class="item"></div><div class="item"></div> */

/* ✅ Solution 2: Use flexbox instead */
.container {
  display: flex;
  gap: 1rem;
}
```

### Problem: Percentage height doesn't work

```css
/* ❌ Wrong */
.child {
  height: 50%; /* Parent has no height! */
}

/* ✅ Right */
.parent {
  height: 400px; /* Define parent height first */
}
.child {
  height: 50%; /* Now it works! */
}

/* ✅ Or use viewport units */
.child {
  height: 50vh; /* 50% of viewport height */
}
```

---

## Quick Reference

### Box Model Layers (Outside → Inside)

1. Margin (transparent, outside)
2. Border (visible line)
3. Padding (transparent, shows background)
4. Content (your stuff)

### Display Types

- `block` - Full width, new line, respects dimensions
- `inline` - Needed width, same line, ignores dimensions
- `inline-block` - Same line + respects dimensions
- `none` - Removed from layout

### Box-Sizing

- `content-box` - Default, width = content only
- `border-box` - Recommended, width = content + padding + border

### Overflow

- `visible` - Default, overflows
- `hidden` - Clips overflow
- `scroll` - Always shows scrollbars
- `auto` - Scrollbars when needed

---

## Next Steps

1. **Practice the exercises** in your CSS file
2. **Use DevTools** to inspect the box model visually
3. **Build the card component** applying all concepts
4. **Experiment** with different values and see what happens

Remember: The box model is foundational. Master it and everything else becomes easier! 🚀
