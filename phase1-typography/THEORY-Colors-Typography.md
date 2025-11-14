# CSS Colors & Typography - Essential Theory

## Table of Contents

1. [Color Formats](#color-formats)
2. [Opacity & Transparency](#opacity--transparency)
3. [Color Theory Basics](#color-theory-basics)
4. [Font Properties](#font-properties)
5. [Text Properties](#text-properties)
6. [Line Height & Spacing](#line-height--spacing)
7. [Web Fonts](#web-fonts)
8. [Typography Best Practices](#typography-best-practices)

---

## Color Formats

CSS supports multiple ways to define colors. Choose based on your needs.

### Hexadecimal (HEX)

Most common format. Uses base-16 notation.

```css
color: #3498db; /* Full hex: RRGGBB */
color: #fff; /* Shorthand: RGB (same as #ffffff) */
color: #3498dbff; /* With alpha: RRGGBBAA */
color: #fff8; /* Shorthand with alpha */
```

**Format:**

- `#` followed by 6 (or 3) hex digits
- First 2 digits: Red (00-FF)
- Next 2 digits: Green (00-FF)
- Last 2 digits: Blue (00-FF)
- Optional 2 digits: Alpha/opacity (00-FF)

**Examples:**

```css
#000000  /* Black */
#FFFFFF  /* White */
#FF0000  /* Red */
#00FF00  /* Green */
#0000FF  /* Blue */
#808080  /* Gray */
```

**When to use:** Most common, compact, widely supported.

### RGB & RGBA

Red, Green, Blue values (0-255).

```css
color: rgb(52, 152, 219); /* RGB */
color: rgba(52, 152, 219, 0.5); /* RGBA with 50% opacity */
color: rgb(52 152 219); /* Modern syntax (no commas) */
color: rgb(52 152 219 / 0.5); /* Modern syntax with alpha */
```

**Values:**

- R, G, B: 0-255 (integers) or 0%-100% (percentages)
- Alpha: 0-1 (0 = transparent, 1 = opaque)

**Examples:**

```css
rgb(255, 0, 0)          /* Red */
rgb(0, 255, 0)          /* Green */
rgb(0, 0, 255)          /* Blue */
rgb(255, 255, 255)      /* White */
rgb(0, 0, 0)            /* Black */
rgba(0, 0, 0, 0.5)      /* 50% transparent black */
```

**When to use:** When you need to calculate or manipulate values programmatically, or need transparency.

### HSL & HSLA

Hue, Saturation, Lightness - more intuitive for humans!

```css
color: hsl(204, 70%, 53%); /* HSL */
color: hsla(204, 70%, 53%, 0.5); /* HSLA with 50% opacity */
color: hsl(204deg 70% 53%); /* Modern syntax */
color: hsl(204 70% 53% / 0.5); /* Modern syntax with alpha */
```

**Values:**

- **Hue:** 0-360 (degrees on color wheel)
  - 0/360 = Red
  - 120 = Green
  - 240 = Blue
- **Saturation:** 0%-100% (0% = gray, 100% = full color)
- **Lightness:** 0%-100% (0% = black, 50% = normal, 100% = white)
- **Alpha:** 0-1 (transparency)

**Examples:**

```css
hsl(0, 100%, 50%)       /* Red */
hsl(120, 100%, 50%)     /* Green */
hsl(240, 100%, 50%)     /* Blue */
hsl(0, 0%, 0%)          /* Black */
hsl(0, 0%, 100%)        /* White */
hsl(0, 0%, 50%)         /* Gray */
hsl(204, 70%, 53%)      /* Nice blue */
```

**When to use:**

- Creating color variations (lighter/darker)
- Color schemes and palettes
- More intuitive color adjustments

**HSL Benefits:**

```css
/* Easy to create variations! */
--primary: hsl(204, 70%, 53%);
--primary-light: hsl(204, 70%, 70%); /* Just change lightness */
--primary-dark: hsl(204, 70%, 35%); /* Darker version */
--primary-muted: hsl(204, 30%, 53%); /* Less saturated */
```

### Named Colors

CSS has 147 named colors.

```css
color: red;
color: blue;
color: rebeccapurple; /* Added in honor of Eric Meyer's daughter */
color: cornflowerblue;
color: hotpink;
color: transparent; /* Special value */
color: currentColor; /* Inherits current text color */
```

**Common named colors:**

- Basic: `red`, `green`, `blue`, `yellow`, `orange`, `purple`, `pink`, `brown`
- Neutrals: `black`, `white`, `gray`, `silver`
- Special: `transparent`, `currentColor`

**When to use:** Quick prototyping, simple demos. Avoid in production (use hex/hsl for precise control).

### Special Color Values

```css
color: transparent; /* Fully transparent */
color: currentColor; /* Inherits current text color */
color: inherit; /* Inherits from parent */
```

**currentColor example:**

```css
.icon {
  color: red;
  border: 2px solid currentColor; /* Border will be red */
}
```

---

## Opacity & Transparency

Control transparency of entire elements or just colors.

### opacity Property

Affects the entire element and its children.

```css
.element {
  opacity: 1; /* Fully opaque (default) */
  opacity: 0.5; /* 50% transparent */
  opacity: 0; /* Fully transparent (invisible) */
}
```

**Important:**

- Affects the entire element, including text and children
- Value: 0-1 (0 = invisible, 1 = fully visible)
- Children inherit the opacity

**Example:**

```css
.card {
  opacity: 0.5; /* Entire card is 50% transparent */
}
```

### Alpha Channel (RGBA/HSLA)

Only affects the specific color, not children.

```css
.element {
  /* Background is transparent, text is not */
  background-color: rgba(255, 0, 0, 0.5);
  color: rgb(0, 0, 0); /* Fully opaque text */
}
```

**Difference:**

```css
/* opacity - affects everything */
.box-opacity {
  background: red;
  color: white;
  opacity: 0.5; /* Background AND text are both 50% transparent */
}

/* rgba - affects only background */
.box-rgba {
  background: rgba(255, 0, 0, 0.5);
  color: white; /* Text stays fully opaque */
}
```

---

## Color Theory Basics

### Color Wheel Relationships

**Complementary:** Opposite on color wheel (high contrast)

```css
--primary: hsl(204, 70%, 53%); /* Blue */
--complement: hsl(24, 70%, 53%); /* Orange (204 - 180 = 24) */
```

**Analogous:** Adjacent on color wheel (harmonious)

```css
--primary: hsl(204, 70%, 53%); /* Blue */
--analogous-1: hsl(174, 70%, 53%); /* Blue-green */
--analogous-2: hsl(234, 70%, 53%); /* Blue-purple */
```

**Triadic:** Evenly spaced (vibrant)

```css
--primary: hsl(0, 70%, 53%); /* Red */
--triadic-1: hsl(120, 70%, 53%); /* Green (0 + 120) */
--triadic-2: hsl(240, 70%, 53%); /* Blue (0 + 240) */
```

### Color Psychology

Common associations (varies by culture):

- **Red:** Danger, passion, urgency, error
- **Orange:** Warning, energy, creativity
- **Yellow:** Caution, happiness, optimism
- **Green:** Success, growth, safe, go
- **Blue:** Trust, calm, professional, info
- **Purple:** Luxury, creativity, wisdom
- **Gray:** Neutral, professional, subtle
- **Black:** Power, elegance, sophistication
- **White:** Purity, simplicity, cleanliness

### UI Color Patterns

```css
/* Common semantic colors */
--primary: hsl(204, 70%, 53%); /* Brand color */
--secondary: hsl(174, 50%, 50%); /* Accent color */
--success: hsl(120, 50%, 50%); /* Green - positive actions */
--warning: hsl(45, 100%, 50%); /* Yellow/Orange - caution */
--danger: hsl(0, 70%, 50%); /* Red - errors, delete */
--info: hsl(204, 70%, 53%); /* Blue - information */

/* Neutral colors */
--text-primary: hsl(0, 0%, 10%); /* Dark gray for text */
--text-secondary: hsl(0, 0%, 40%); /* Medium gray */
--border: hsl(0, 0%, 85%); /* Light gray */
--background: hsl(0, 0%, 98%); /* Off-white */
```

---

## Font Properties

### font-family

Specifies which font to use.

```css
/* Single font */
font-family: Arial;

/* Font stack (fallbacks) */
font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;

/* Generic families (always last) */
font-family: serif; /* Times New Roman, Georgia */
font-family: sans-serif; /* Arial, Helvetica */
font-family: monospace; /* Courier, Consolas */
font-family: cursive; /* Comic Sans, etc. */
font-family: fantasy; /* Decorative fonts */
```

**Best Practice - System Font Stack:**

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}
```

**Why?**

- Fast (no download needed)
- Native look and feel
- Excellent rendering

**For specific purposes:**

```css
/* Headings - elegant */
h1,
h2,
h3 {
  font-family: Georgia, "Times New Roman", serif;
}

/* Body - readable */
body {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
}

/* Code - monospace */
code,
pre {
  font-family: "Fira Code", "Monaco", "Courier New", monospace;
}
```

### font-size

Controls text size.

```css
/* Absolute units */
font-size: 16px; /* Pixels - precise but not scalable */

/* Relative units (recommended!) */
font-size: 1rem; /* Relative to root font-size (usually 16px) */
font-size: 1em; /* Relative to parent font-size */
font-size: 100%; /* Relative to parent */

/* Viewport units */
font-size: 5vw; /* 5% of viewport width */
font-size: 3vh; /* 3% of viewport height */

/* Keywords */
font-size: small;
font-size: medium;
font-size: large;
```

**rem vs em:**

```css
html {
  font-size: 16px; /* Root font size */
}

.parent {
  font-size: 20px;
}

.child {
  font-size: 1rem; /* 16px (relative to root) */
  font-size: 1em; /* 20px (relative to parent) */
  padding: 1em; /* 20px (relative to this element's font-size) */
}
```

**Recommended scale:**

```css
:root {
  --text-xs: 0.75rem; /* 12px */
  --text-sm: 0.875rem; /* 14px */
  --text-base: 1rem; /* 16px */
  --text-lg: 1.125rem; /* 18px */
  --text-xl: 1.25rem; /* 20px */
  --text-2xl: 1.5rem; /* 24px */
  --text-3xl: 1.875rem; /* 30px */
  --text-4xl: 2.25rem; /* 36px */
  --text-5xl: 3rem; /* 48px */
}
```

### font-weight

Controls boldness of text.

```css
font-weight: normal; /* 400 */
font-weight: bold; /* 700 */

/* Numeric values */
font-weight: 100; /* Thin */
font-weight: 200; /* Extra Light */
font-weight: 300; /* Light */
font-weight: 400; /* Normal */
font-weight: 500; /* Medium */
font-weight: 600; /* Semi Bold */
font-weight: 700; /* Bold */
font-weight: 800; /* Extra Bold */
font-weight: 900; /* Black */

/* Relative */
font-weight: lighter; /* Lighter than parent */
font-weight: bolder; /* Bolder than parent */
```

**Note:** Not all fonts support all weights!

**Common usage:**

```css
body {
  font-weight: 400; /* Normal text */
}

strong,
b {
  font-weight: 700; /* Bold */
}

h1 {
  font-weight: 700; /* Bold headings */
}

.subtle {
  font-weight: 300; /* Light text */
}
```

### font-style

```css
font-style: normal; /* Default */
font-style: italic; /* Slanted, designed italic */
font-style: oblique; /* Slanted, artificially slanted */
```

**italic vs oblique:**

- `italic`: Uses font's designed italic variant (better)
- `oblique`: Artificially slants the normal font (fallback)

### font-variant

```css
font-variant: normal;
font-variant: small-caps; /* SMALL CAPS TEXT */
```

### Shorthand: font

```css
/* font: [style] [variant] [weight] size/line-height family */
font: italic small-caps bold 16px/1.5 Arial, sans-serif;

/* Minimum required: size and family */
font: 16px Arial;
font: 1rem sans-serif;

/* Common patterns */
font: 400 1rem/1.6 sans-serif;
font: bold 1.5rem/1.2 Georgia, serif;
```

---

## Text Properties

### text-align

Horizontal alignment of text.

```css
text-align: left; /* Default for LTR languages */
text-align: right; /* Right aligned */
text-align: center; /* Centered */
text-align: justify; /* Even edges (adjusts spacing) */
text-align: start; /* Depends on writing direction */
text-align: end; /* Depends on writing direction */
```

**When to use:**

- `left`: Default, most body text
- `center`: Headings, hero sections, short text
- `right`: Specific design needs, RTL languages
- `justify`: Newspapers, formal documents (can create uneven spacing)

### text-decoration

```css
text-decoration: none; /* No decoration */
text-decoration: underline; /* Underlined */
text-decoration: overline; /* Line above */
text-decoration: line-through; /* Strikethrough */

/* Multiple values */
text-decoration: underline overline;

/* With color and style */
text-decoration: underline wavy red;
text-decoration: underline dotted blue;

/* Individual properties */
text-decoration-line: underline;
text-decoration-color: red;
text-decoration-style: wavy; /* solid, double, dotted, dashed, wavy */
text-decoration-thickness: 2px;
```

**Common usage:**

```css
/* Remove underline from links */
a {
  text-decoration: none;
}

/* Add on hover */
a:hover {
  text-decoration: underline;
}

/* Strikethrough for deleted/old prices */
.old-price {
  text-decoration: line-through;
}
```

### text-transform

Changes capitalization.

```css
text-transform: none; /* No change */
text-transform: uppercase; /* ALL CAPS */
text-transform: lowercase; /* all lowercase */
text-transform: capitalize; /* Capitalize Each Word */
```

**Examples:**

```css
.button {
  text-transform: uppercase; /* CLICK ME */
}

.username {
  text-transform: lowercase; /* john.doe */
}

.title {
  text-transform: capitalize; /* Main Page Title */
}
```

### text-indent

Indents first line of text.

```css
text-indent: 2em; /* Indent 2em */
text-indent: 50px; /* Indent 50px */
text-indent: -9999px; /* Hide text (accessibility hack) */
```

### text-shadow

Adds shadow to text.

```css
/* text-shadow: x y blur color */
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

/* Multiple shadows */
text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;

/* No shadow */
text-shadow: none;
```

**Common effects:**

```css
/* Subtle depth */
text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

/* Hard shadow */
text-shadow: 3px 3px 0 #000;

/* Glow effect */
text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);

/* 3D effect */
text-shadow: 1px 1px 0 #ccc, 2px 2px 0 #bbb, 3px 3px 0 #aaa;
```

### text-overflow

How to handle overflowing text.

```css
text-overflow: clip; /* Cut off (default) */
text-overflow: ellipsis; /* Show ... */

/* Requires these to work: */
white-space: nowrap;
overflow: hidden;
```

**Example:**

```css
.truncate {
  width: 200px;
  white-space: nowrap; /* No wrapping */
  overflow: hidden; /* Hide overflow */
  text-overflow: ellipsis; /* Show ... */
}
/* Result: "This is a very long tex..." */
```

### white-space

Controls whitespace and line breaks.

```css
white-space: normal; /* Default - collapse whitespace, wrap */
white-space: nowrap; /* No wrapping */
white-space: pre; /* Preserve whitespace, no wrap */
white-space: pre-wrap; /* Preserve whitespace, wrap */
white-space: pre-line; /* Collapse whitespace, preserve line breaks */
```

**Use cases:**

```css
/* Single line, no wrapping */
.single-line {
  white-space: nowrap;
}

/* Code blocks - preserve formatting */
pre {
  white-space: pre;
}

/* Preserve breaks but collapse spaces */
.preserve-breaks {
  white-space: pre-line;
}
```

---

## Line Height & Spacing

### line-height

Space between lines of text. **Critical for readability!**

```css
/* Unitless (recommended - scales with font-size) */
line-height: 1.5; /* 1.5 × font-size */

/* Absolute */
line-height: 24px;

/* Relative */
line-height: 1.5em;
line-height: 150%;
```

**Why unitless is better:**

```css
.parent {
  font-size: 16px;
  line-height: 1.5; /* 24px */
}

.child {
  font-size: 24px;
  line-height: inherit; /* Still 1.5 → 36px (scales!) */
}

/* With px or em, child would inherit 24px exactly */
```

**Recommended values:**

- **1.2-1.3:** Headings (tight)
- **1.5-1.6:** Body text (optimal readability)
- **1.8-2.0:** Long-form content, accessibility
- **1.0:** Special cases only

**Examples:**

```css
h1,
h2,
h3 {
  line-height: 1.2; /* Tight for headings */
}

body {
  line-height: 1.6; /* Readable body text */
}

.code {
  line-height: 1.4; /* Monospace needs less */
}
```

### letter-spacing

Space between characters.

```css
letter-spacing: normal; /* Default */
letter-spacing: 0.1em; /* Loose */
letter-spacing: 2px; /* Fixed spacing */
letter-spacing: -0.05em; /* Tight (negative allowed) */
```

**Common usage:**

```css
/* Uppercase text often needs more spacing */
.uppercase {
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Headings can be tighter */
h1 {
  letter-spacing: -0.02em;
}

/* Logo text */
.logo {
  letter-spacing: 0.2em;
}
```

### word-spacing

Space between words.

```css
word-spacing: normal; /* Default */
word-spacing: 0.5em; /* More space */
word-spacing: 10px; /* Fixed spacing */
```

**Rarely used** - letter-spacing is more common.

---

## Web Fonts

### Google Fonts

**1. Choose fonts:** https://fonts.google.com

**2. Add to HTML:**

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

**3. Use in CSS:**

```css
body {
  font-family: "Inter", sans-serif;
}
```

### @font-face

Load custom fonts.

```css
@font-face {
  font-family: "MyCustomFont";
  src: url("/fonts/my-font.woff2") format("woff2"), url("/fonts/my-font.woff")
      format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap; /* Show fallback while loading */
}

body {
  font-family: "MyCustomFont", sans-serif;
}
```

**font-display values:**

- `auto`: Browser default
- `block`: Hide text until font loads (FOIT - Flash of Invisible Text)
- `swap`: Show fallback immediately, swap when loaded (FOUT - Flash of Unstyled Text) ✓ **Recommended**
- `fallback`: Brief block, then swap, then give up
- `optional`: Use font if cached, otherwise skip

### Variable Fonts

Modern fonts with adjustable properties.

```css
@font-face {
  font-family: "InterVariable";
  src: url("inter-variable.woff2") format("woff2");
  font-weight: 100 900; /* Supports range */
}

.text {
  font-family: "InterVariable";
  font-weight: 450; /* Any value in range! */
}
```

---

## Typography Best Practices

### Readability

**1. Line length:**

- Optimal: 50-75 characters per line
- Max: 90 characters

```css
.content {
  max-width: 65ch; /* 'ch' = width of '0' character */
}
```

**2. Font size:**

- Minimum for body text: 16px
- Larger for accessibility: 18px+

**3. Line height:**

- Body text: 1.5-1.6
- Headings: 1.2-1.3

**4. Contrast:**

- Minimum: 4.5:1 for normal text
- Large text (18px+ or bold 14px+): 3:1

### Hierarchy

Create visual hierarchy with:

```css
/* Size */
h1 {
  font-size: 2.5rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.5rem;
}
p {
  font-size: 1rem;
}

/* Weight */
h1 {
  font-weight: 700;
}
h2 {
  font-weight: 600;
}
p {
  font-weight: 400;
}

/* Color */
h1 {
  color: #1a1a1a;
} /* Darkest */
p {
  color: #333;
}
.muted {
  color: #666;
} /* Lighter for less important */
```

### Font Pairing

**Classic combinations:**

1. **Sans + Serif:**

```css
h1,
h2,
h3 {
  font-family: "Merriweather", serif; /* Headings */
}
body {
  font-family: "Inter", sans-serif; /* Body */
}
```

2. **Two Sans-serif fonts:**

```css
h1,
h2,
h3 {
  font-family: "Montserrat", sans-serif; /* Geometric */
}
body {
  font-family: "Open Sans", sans-serif; /* Humanist */
}
```

3. **Monospace for code:**

```css
code,
pre {
  font-family: "Fira Code", monospace;
}
```

**Rules:**

- Max 2-3 fonts per project
- Ensure they contrast (e.g., geometric vs humanist)
- Test readability at all sizes

### Performance

**1. Limit font weights:**

```html
<!-- Bad: Loading all weights -->
<link href="...?family=Inter:wght@100;200;300;400;500;600;700;800;900" />

<!-- Good: Only what you need -->
<link href="...?family=Inter:wght@400;600;700" />
```

**2. Use system fonts when possible:**

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  /* No download needed! */
}
```

**3. Preload critical fonts:**

```html
<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin />
```

### Accessibility

**1. Relative units:**

```css
/* Good - respects user's browser settings */
font-size: 1rem;

/* Bad - fixed, can't be resized */
font-size: 16px;
```

**2. Sufficient contrast:**

- Use contrast checker tools
- Test with color blindness simulators

**3. Readable fonts:**

- Avoid decorative fonts for body text
- Use generous line height
- Ensure adequate spacing

**4. Focus indicators:**

```css
a:focus {
  outline: 2px solid blue;
  outline-offset: 2px;
}
```

---

## Quick Reference

### Color Formats

- `#3498db` - Hex (most common)
- `rgb(52, 152, 219)` - RGB
- `rgba(52, 152, 219, 0.5)` - RGB with transparency
- `hsl(204, 70%, 53%)` - HSL (intuitive)
- `hsla(204, 70%, 53%, 0.5)` - HSL with transparency

### Essential Font Properties

- `font-family` - Which font
- `font-size` - Size (use rem!)
- `font-weight` - Boldness (400 = normal, 700 = bold)
- `font-style` - italic, normal
- `line-height` - Space between lines (1.5-1.6 for body)

### Essential Text Properties

- `text-align` - left, center, right, justify
- `text-decoration` - underline, line-through, none
- `text-transform` - uppercase, lowercase, capitalize
- `letter-spacing` - Space between characters
- `text-shadow` - Shadow effect

### Recommended Values

- **Body font size:** 16px (1rem) minimum
- **Line height:** 1.5-1.6 for body, 1.2-1.3 for headings
- **Line length:** 50-75 characters (max 90)
- **Contrast ratio:** 4.5:1 minimum for body text

---

Now you have the theory! Open your `phase1-typography.css` file and start experimenting with colors and fonts! 🎨✍️
