# CSS Selectors & Specificity - Essential Theory

## Table of Contents

1. [Basic Selectors](#basic-selectors)
2. [Attribute Selectors](#attribute-selectors)
3. [Combinators](#combinators)
4. [Pseudo-classes](#pseudo-classes)
5. [Pseudo-elements](#pseudo-elements)
6. [Specificity](#specificity)
7. [The Cascade](#the-cascade)

---

## Basic Selectors

### Element Selector

Targets all elements of a specific type.

```css
p {
  color: blue;
} /* All paragraphs */
h1 {
  font-size: 2rem;
} /* All h1 headings */
```

### Class Selector

Targets elements with a specific class. Uses `.` prefix.

```css
.highlight {
  background: yellow;
}
.btn {
  padding: 10px;
}
```

**HTML:**

```html
<p class="highlight">This is highlighted</p>
<button class="btn">Click me</button>
```

### ID Selector

Targets a single element with a specific ID. Uses `#` prefix.

```css
#header {
  background: navy;
}
#main-content {
  width: 80%;
}
```

**HTML:**

```html
<header id="header">...</header>
```

⚠️ **Best Practice:** Use classes for styling, IDs for JavaScript hooks and anchors.

### Universal Selector

Targets all elements. Use sparingly.

```css
* {
  box-sizing: border-box;
}
```

### Multiple Selectors

Apply same styles to multiple selectors.

```css
h1,
h2,
h3 {
  font-family: Georgia, serif;
}
```

---

## Attribute Selectors

Target elements based on their attributes.

### Presence Selector

```css
[disabled] {
  opacity: 0.5;
} /* Has disabled attribute */
[required] {
  border-left: 3px solid red;
}
```

### Exact Match

```css
[type="text"] {
  border: 1px solid gray;
}
[class="btn"] {
  /* Matches exactly "btn" */
}
```

### Contains Word

```css
[class~="btn"] {
  /* Contains "btn" as whole word */
}
```

### Starts With

```css
[href^="https"] {
  color: green;
} /* Starts with https */
[href^="mailto:"] {
  color: red;
} /* Email links */
[class^="icon-"] {
  font-size: 1.2em;
}
```

### Ends With

```css
[href$=".pdf"] {
  /* Links to PDF files */
}
[href$=".jpg"] {
  /* Links to JPG images */
}
[src$=".png"] {
  /* PNG images */
}
```

### Contains Substring

```css
[href*="google"] {
  /* Contains "google" anywhere */
}
[class*="btn"] {
  /* Contains "btn" anywhere */
}
```

### Case-Insensitive Match

```css
[href$=".PDF" i] {
  /* Matches .pdf, .PDF, .Pdf */
}
```

**Practical Examples:**

```css
/* Style external links */
a[href^="http"] {
  color: blue;
}

/* Style different file types */
a[href$=".pdf"]::after {
  content: " 📄";
}
a[href$=".doc"]::after {
  content: " 📝";
}

/* Style tel links */
a[href^="tel:"] {
  color: green;
}

/* Required fields */
input[required] {
  border-color: orange;
}
```

---

## Combinators

Combinators define relationships between selectors.

### Descendant Combinator (space)

Selects all descendants (children, grandchildren, etc.)

```css
div p {
  color: blue;
}
```

```html
<div>
  <p>Styled ✓</p>
  <section>
    <p>Also styled ✓</p>
  </section>
</div>
```

### Child Combinator (`>`)

Selects only direct children.

```css
div > p {
  color: red;
}
```

```html
<div>
  <p>Styled ✓</p>
  <section>
    <p>NOT styled ✗</p>
  </section>
</div>
```

### Adjacent Sibling Combinator (`+`)

Selects the immediately following sibling.

```css
h2 + p {
  font-weight: bold;
}
```

```html
<h2>Title</h2>
<p>Styled ✓ (first paragraph after h2)</p>
<p>NOT styled ✗</p>
```

### General Sibling Combinator (`~`)

Selects all following siblings.

```css
h2 ~ p {
  color: gray;
}
```

```html
<h2>Title</h2>
<p>Styled ✓</p>
<div>Something</div>
<p>Also styled ✓</p>
```

**Practical Examples:**

```css
/* Style paragraphs only inside articles */
article p {
  line-height: 1.8;
}

/* Style direct list items only */
.menu > li {
  display: inline-block;
}

/* First paragraph after headings */
h1 + p,
h2 + p {
  font-size: 1.1em;
}

/* All paragraphs after a heading */
h2 ~ p {
  margin-left: 20px;
}
```

---

## Pseudo-classes

Pseudo-classes select elements based on their state or position.

### Interactive States

```css
a:hover {
  color: red;
} /* Mouse over */
a:active {
  color: blue;
} /* Being clicked */
a:focus {
  outline: 2px solid;
} /* Keyboard focus */
a:visited {
  color: purple;
} /* Already visited */
```

**Modern Focus:**

```css
:focus-visible {
  /* Only keyboard focus */
  outline: 2px solid blue;
}
```

### Form States

```css
input:disabled {
  opacity: 0.5;
}
input:enabled {
  border: 1px solid;
}
input:checked {
  /* Checkboxes/radios */
}
input:required {
  border-left: 3px solid orange;
}
input:optional {
  border-left: 3px solid gray;
}
input:valid {
  border-color: green;
}
input:invalid {
  border-color: red;
}
input:placeholder-shown {
  /* Has placeholder visible */
}
```

### Structural Pseudo-classes

```css
:first-child       /* First child of parent */
:last-child        /* Last child of parent */
:only-child        /* Only child of parent */
:nth-child(n)      /* Nth child of parent */
:nth-last-child(n) /* Nth from the end */

:first-of-type     /* First of its element type */
:last-of-type      /* Last of its element type */
:nth-of-type(n)    /* Nth of its element type */
```

**nth-child Examples:**

```css
li:nth-child(3) {
  /* 3rd item */
}
li:nth-child(odd) {
  /* 1st, 3rd, 5th... */
}
li:nth-child(even) {
  /* 2nd, 4th, 6th... */
}
li:nth-child(3n) {
  /* Every 3rd: 3, 6, 9... */
}
li:nth-child(3n + 1) {
  /* 1, 4, 7, 10... */
}
li:nth-child(n + 3) {
  /* 3rd and onwards */
}
li:nth-child(-n + 3) {
  /* First 3 items */
}
```

**Difference: `:nth-child` vs `:nth-of-type`**

```html
<div>
  <p>First p</p>
  <!-- :nth-child(1), :nth-of-type(1) -->
  <span>Span</span>
  <!-- :nth-child(2) -->
  <p>Second p</p>
  <!-- :nth-child(3), :nth-of-type(2) -->
</div>
```

```css
p:nth-child(2) {
  /* Matches nothing (2nd child is span) */
}
p:nth-of-type(2) {
  /* Matches "Second p" */
}
```

### Other Useful Pseudo-classes

```css
:not(selector) {
  /* Negation */
}
:empty {
  /* No children */
}
:root {
  /* Root element (html) */
}
:target {
  /* URL fragment target */
}
```

**Practical Examples:**

```css
/* Zebra striping */
tr:nth-child(even) {
  background: #f5f5f5;
}

/* All items except last */
li:not(:last-child) {
  border-bottom: 1px solid;
}

/* First paragraph in section */
section > p:first-of-type {
  font-weight: bold;
}

/* Interactive states */
button:hover:not(:disabled) {
  background: blue;
}
```

---

## Pseudo-elements

Pseudo-elements create virtual elements that don't exist in HTML.

### `::before` and `::after`

Insert content before or after an element.

```css
.icon::before {
  content: "→ ";
  color: blue;
}

.external-link::after {
  content: " ↗";
  font-size: 0.8em;
}
```

⚠️ **Must have `content` property** (even if empty: `content: "";`)

**Practical Examples:**

```css
/* Custom bullet points */
.custom-list {
  list-style: none;
}
.custom-list li::before {
  content: "✓ ";
  color: green;
  font-weight: bold;
}

/* Clearfix hack */
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

/* Decorative quotes */
blockquote::before {
  content: """;
  font-size: 4em;
  color: #ccc;
}
```

### `::first-letter`

Styles the first letter of a block element.

```css
p::first-letter {
  font-size: 3em;
  float: left;
  line-height: 1;
  margin-right: 0.1em;
}
```

### `::first-line`

Styles the first line of a block element.

```css
p::first-line {
  font-weight: bold;
  color: #333;
}
```

### `::selection`

Styles highlighted/selected text.

```css
::selection {
  background: yellow;
  color: black;
}
```

### `::placeholder`

Styles input placeholder text.

```css
input::placeholder {
  color: #999;
  font-style: italic;
}
```

**Single vs Double Colon:**

- Modern: `::before`, `::after` (double colon)
- Legacy: `:before`, `:after` (single colon, still works)
- Use `::` for clarity and distinction from pseudo-classes

---

## Specificity

Specificity determines which CSS rule wins when multiple rules target the same element.

### Specificity Calculation

Specificity is calculated as: **(inline, IDs, classes/attributes/pseudo-classes, elements/pseudo-elements)**

```
Style attribute:      1,0,0,0  (highest)
ID:                   0,1,0,0
Class/Attribute:      0,0,1,0
Element:              0,0,0,1  (lowest)
```

### Examples

```css
/* 0,0,0,1 - one element */
p { color: blue; }

/* 0,0,1,0 - one class */
.text { color: green; }

/* 0,0,1,1 - one class + one element */
p.text { color: red; }

/* 0,0,2,0 - two classes */
.container .text { color: purple; }

/* 0,1,0,0 - one ID */
#special { color: orange; }

/* 0,1,1,1 - one ID + one class + one element */
div#special.text { color: pink; }

/* 1,0,0,0 - inline style (in HTML) */
<p style="color: yellow;">
```

### Specificity Rules

1. **Higher specificity wins**

   ```css
   p {
     color: blue;
   } /* 0,0,0,1 - loses */
   .text {
     color: red;
   } /* 0,0,1,0 - wins */
   ```

2. **When equal, last rule wins** (cascade)

   ```css
   .text {
     color: blue;
   }
   .text {
     color: red;
   } /* wins - same specificity, comes later */
   ```

3. **`!important` overrides everything** (avoid!)

   ```css
   p {
     color: blue !important;
   } /* Nuclear option */
   ```

4. **Inherited styles have no specificity**
   ```css
   body {
     color: gray;
   } /* Inherited */
   p {
     color: blue;
   } /* Direct - wins even with 0,0,0,1 */
   ```

### Specificity Wars - What Wins?

```css
/* Same element, different specificity */
p {
  color: blue;
} /* 0,0,0,1 */
.text {
  color: green;
} /* 0,0,1,0 - WINS */
div p {
  color: red;
} /* 0,0,0,2 - loses */
.container .text {
  color: purple;
} /* 0,0,2,0 - WINS */
#special {
  color: orange;
} /* 0,1,0,0 - WINS */
```

### How to Increase Specificity

```css
/* Weak */
.button {
} /* 0,0,1,0 */

/* Stronger */
a.button {
} /* 0,0,1,1 */
.nav .button {
} /* 0,0,2,0 */

/* Very strong */
#nav .button {
} /* 0,1,1,0 */

/* Overkill (avoid) */
div#nav ul li a.button {
} /* 0,1,1,4 */
```

### Best Practices

✅ **DO:**

- Keep specificity low
- Use classes for styling
- Follow BEM or similar methodology
- Increase specificity gradually when needed

❌ **DON'T:**

- Use IDs for styling (save for JavaScript)
- Use `!important` (except for utilities)
- Chain too many selectors
- Fight specificity with more specificity

### Debugging Specificity

**In DevTools:**

- Crossed-out rules = overridden by higher specificity
- Check the computed styles panel
- Look at the order of rules

**Calculator Tool:**
Use [Specificity Calculator](https://specificity.keegan.st/) to practice

---

## The Cascade

The cascade determines which styles apply when multiple rules target the same element.

### Cascade Order (What Wins?)

1. **Origin & Importance:**

   - User agent (browser) styles
   - User styles
   - Author styles (your CSS) ⭐
   - `!important` author styles
   - `!important` user styles
   - `!important` user agent styles

2. **Specificity** (within same origin)

3. **Source Order** (when specificity is equal)

### Source Order Example

```css
.button {
  background: blue;
}
.button {
  background: red;
} /* Wins - comes later */

/* In different files: */
/* style1.css */
.button {
  background: blue;
}
/* style2.css */
.button {
  background: red;
} /* Wins if loaded after */
```

### Inheritance

Some properties inherit from parent to child:

**Inherited by default:**

- `color`
- `font-family`, `font-size`, `font-weight`
- `line-height`
- `text-align`, `text-transform`
- `list-style`
- `cursor`

**Not inherited:**

- `margin`, `padding`
- `border`
- `background`
- `width`, `height`
- `position`
- Most layout properties

**Controlling Inheritance:**

```css
p {
  color: inherit; /* Force inheritance */
  margin: initial; /* Use default value */
  border: unset; /* Inherit if possible, else initial */
  padding: revert; /* Revert to user agent style */
}
```

---

## Quick Reference Cheat Sheet

```css
/* SELECTORS */
element                  /* p, div, h1 */
.class                   /* .btn, .header */
#id                      /* #main, #nav */
*                        /* all elements */

/* COMBINATORS */
A B                      /* descendant */
A > B                    /* child */
A + B                    /* adjacent sibling */
A ~ B                    /* general sibling */

/* ATTRIBUTES */
[attr]                   /* has attribute */
[attr="val"]             /* exact match */
[attr^="val"]            /* starts with */
[attr$="val"]            /* ends with */
[attr*="val"]            /* contains */

/* PSEUDO-CLASSES */
:hover, :focus, :active
:first-child, :last-child
:nth-child(n), :nth-child(odd/even)
:not(selector)
:disabled, :checked, :required

/* PSEUDO-ELEMENTS */
::before, ::after
::first-letter, ::first-line
::selection, ::placeholder

/* SPECIFICITY */
Inline: 1,0,0,0
ID: 0,1,0,0
Class: 0,0,1,0
Element: 0,0,0,1
```

---

## Practice Tips

1. **Use DevTools:** Inspect elements to see which styles apply and why
2. **Start Simple:** Master basic selectors before advanced ones
3. **Experiment:** Try different combinations in your practice files
4. **Think Semantically:** Choose selectors that make sense
5. **Keep Specificity Low:** Easier to maintain and override
6. **Use Comments:** Document complex selectors
7. **Validate:** Use CSS validators to catch errors

---

## Common Pitfalls

❌ **Over-specific selectors:**

```css
/* BAD */
div#header nav.main-nav ul li a.nav-link {
}

/* GOOD */
.nav-link {
}
```

❌ **Fighting specificity:**

```css
/* BAD */
.text {
  color: blue;
}
.text.text.text {
  color: red;
} /* Hacky way to increase specificity */

/* GOOD */
.text {
  color: blue;
}
.text--highlighted {
  color: red;
}
```

❌ **Relying on HTML structure:**

```css
/* BAD - breaks if HTML changes */
div > section > article > p {
}

/* GOOD */
.article-text {
}
```

---

Now you have the theory! Open your `phase1-selectors.css` file and start solving the exercises. Reference this guide whenever you get stuck.

**Next Steps:**

1. Read through this theory once
2. Start with Exercise 1 in your CSS file
3. Test each solution in the browser
4. Use DevTools to verify your selectors
5. Come back to this guide as needed

Happy coding! 🚀
