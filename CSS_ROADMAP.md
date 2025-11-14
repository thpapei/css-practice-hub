# CSS Learning Roadmap: Basic to Professional

A comprehensive guide to mastering CSS, structured for developers who need to refresh fundamentals and advance to professional-level skills.

---

## Phase 1: Core Fundamentals (Week 1-2)

### 1.1 Selectors & Specificity

- [ ] Basic selectors (element, class, id)
- [ ] Combinators (descendant, child, adjacent sibling, general sibling)
- [ ] Attribute selectors
- [ ] Pseudo-classes (`:hover`, `:focus`, `:nth-child`, `:first-child`, `:last-child`)
- [ ] Pseudo-elements (`::before`, `::after`, `::first-line`, `::first-letter`)
- [ ] Specificity calculation and cascade rules
- [ ] `!important` and when to avoid it

**Practice Project**: Style a blog post with various text treatments

### 1.2 Box Model & Display

- [ ] Content, padding, border, margin
- [ ] `box-sizing: border-box` vs `content-box`
- [ ] Display properties (`block`, `inline`, `inline-block`, `none`)
- [ ] Width, height, min/max properties
- [ ] Overflow handling

**Practice Project**: Create a card component with proper spacing

### 1.3 Colors & Typography

- [ ] Color formats (hex, rgb, rgba, hsl, hsla)
- [ ] Opacity and transparency
- [ ] Font properties (family, size, weight, style)
- [ ] Line-height and letter-spacing
- [ ] Text properties (align, decoration, transform)
- [ ] Web fonts (@font-face, Google Fonts)
- [ ] System font stacks

**Practice Project**: Build a typography style guide

---

## Phase 2: Layout Fundamentals (Week 3-4)

### 2.1 Positioning

- [ ] `position: static, relative, absolute, fixed, sticky`
- [ ] Z-index and stacking contexts
- [ ] Centering techniques (all methods)
- [ ] Understanding coordinate systems

**Practice Project**: Create a sticky header with dropdown navigation

### 2.2 Flexbox (Master This!)

- [ ] Flex container properties (`display: flex`, `flex-direction`, `flex-wrap`)
- [ ] Justify-content and align-items
- [ ] Align-content and align-self
- [ ] Flex item properties (`flex-grow`, `flex-shrink`, `flex-basis`)
- [ ] `flex` shorthand
- [ ] Gap property
- [ ] Common flex patterns

**Practice Projects**:

- Holy grail layout
- Responsive navigation bar
- Card grid with equal heights
- Centered modal

### 2.3 CSS Grid (Master This!)

- [ ] Grid container basics (`display: grid`)
- [ ] Grid template columns/rows
- [ ] Fr units and repeat()
- [ ] Grid gaps
- [ ] Grid lines and grid areas
- [ ] Auto-fit and auto-fill
- [ ] Minmax()
- [ ] Grid item placement
- [ ] Implicit vs explicit grids
- [ ] Grid alignment properties

**Practice Projects**:

- Dashboard layout
- Magazine-style layout
- Image gallery with varying sizes
- Responsive page layout

---

## Phase 3: Responsive Design (Week 5-6)

### 3.1 Media Queries

- [ ] Breakpoint strategies (mobile-first vs desktop-first)
- [ ] Common breakpoints
- [ ] Media query syntax and features
- [ ] Container queries (modern)
- [ ] Print stylesheets

**Practice Project**: Make all previous projects fully responsive

### 3.2 Responsive Units

- [ ] Absolute units (px)
- [ ] Relative units (em, rem, %, vw, vh, vmin, vmax)
- [ ] When to use each unit
- [ ] `clamp()`, `min()`, `max()` functions
- [ ] CSS custom properties (variables) for responsive design

**Practice Project**: Fluid typography system

### 3.3 Mobile-First Approach

- [ ] Mobile-first methodology
- [ ] Touch targets and accessibility
- [ ] Responsive images (`srcset`, `picture`)
- [ ] Viewport meta tag

**Practice Project**: Complete mobile-first website

---

## Phase 4: Advanced Styling (Week 7-8)

### 4.1 Transforms & Transitions

- [ ] 2D transforms (translate, rotate, scale, skew)
- [ ] 3D transforms
- [ ] Transform origin
- [ ] Transitions (property, duration, timing-function, delay)
- [ ] Timing functions (ease, linear, cubic-bezier)
- [ ] Transitionable properties

**Practice Project**: Interactive card hover effects

### 4.2 Animations

- [ ] @keyframes
- [ ] Animation properties (name, duration, timing, iteration, direction)
- [ ] Animation shorthand
- [ ] Performance considerations (transform/opacity)
- [ ] `will-change` property
- [ ] Animation fill mode

**Practice Project**: Loading spinners and animated illustrations

### 4.3 Backgrounds & Gradients

- [ ] Multiple backgrounds
- [ ] Background properties (size, position, repeat, attachment)
- [ ] Linear gradients
- [ ] Radial gradients
- [ ] Conic gradients
- [ ] Background-clip and background-origin
- [ ] Blend modes

**Practice Project**: Hero sections with gradient overlays

---

## Phase 5: Modern CSS Features (Week 9-10)

### 5.1 CSS Custom Properties (Variables)

- [ ] Declaring and using variables
- [ ] Scope and inheritance
- [ ] Fallback values
- [ ] Dynamic theming
- [ ] CSS variables with JavaScript
- [ ] Variables in calculations

**Practice Project**: Dark mode toggle system

### 5.2 CSS Functions

- [ ] `calc()` for calculations
- [ ] `clamp()` for responsive values
- [ ] `min()` and `max()`
- [ ] `var()` for variables
- [ ] Color functions (`rgb()`, `hsl()`, `color-mix()`)
- [ ] `attr()` function

**Practice Project**: Fully fluid responsive design without media queries

### 5.3 Modern Layout Features

- [ ] Aspect ratio property
- [ ] Object-fit and object-position
- [ ] CSS containment
- [ ] Logical properties (inline, block)
- [ ] Writing modes
- [ ] Gap with flexbox and grid

**Practice Project**: Video player UI with proper aspect ratios

---

## Phase 6: Professional Techniques (Week 11-12)

### 6.1 CSS Architecture

- [ ] BEM methodology
- [ ] SMACSS
- [ ] OOCSS principles
- [ ] Atomic CSS
- [ ] CSS Modules approach
- [ ] Naming conventions
- [ ] File organization

**Practice Project**: Refactor previous projects with BEM

### 6.2 CSS Preprocessors (Optional but Valuable)

- [ ] Sass/SCSS basics
- [ ] Variables, nesting, mixins
- [ ] Functions and operations
- [ ] Partials and imports
- [ ] When to use preprocessors vs native CSS

**Practice Project**: Component library with Sass

### 6.3 Performance & Optimization

- [ ] CSS loading strategies
- [ ] Critical CSS
- [ ] CSS containment
- [ ] Reducing reflows and repaints
- [ ] Hardware acceleration
- [ ] CSS bundle optimization
- [ ] Unused CSS removal

**Practice Project**: Performance audit and optimization

---

## Phase 7: Advanced Professional Skills (Week 13-14)

### 7.1 Advanced Selectors & Techniques

- [ ] `:is()`, `:where()`, `:has()` selectors
- [ ] `:focus-visible` and `:focus-within`
- [ ] Custom properties in complex scenarios
- [ ] State management with CSS
- [ ] Quantity queries
- [ ] Scroll-driven animations

**Practice Project**: Complex interactive components

### 7.2 CSS for Component Libraries

- [ ] Scoped styles
- [ ] Theme customization systems
- [ ] CSS-in-JS understanding (for React context)
- [ ] Design tokens
- [ ] Consistent spacing systems
- [ ] Color systems and palettes

**Practice Project**: Mini design system

### 7.3 Accessibility with CSS

- [ ] Focus indicators
- [ ] Screen reader only content
- [ ] Reduced motion preferences
- [ ] High contrast mode
- [ ] Color contrast requirements
- [ ] Keyboard navigation styling
- [ ] ARIA and CSS

**Practice Project**: Accessible form components

### 7.4 Advanced Animations & Effects

- [ ] Complex keyframe animations
- [ ] Animation orchestration
- [ ] Scroll-triggered animations
- [ ] Parallax effects (CSS-based)
- [ ] SVG styling and animation
- [ ] Clip-path and masks
- [ ] Filters and backdrops

**Practice Project**: Animated landing page

---

## Phase 8: Cutting-Edge CSS (Week 15-16)

### 8.1 Container Queries

- [ ] Container query syntax
- [ ] Container types
- [ ] Use cases vs media queries
- [ ] Browser support and fallbacks

**Practice Project**: Truly modular responsive components

### 8.2 Subgrid

- [ ] Subgrid syntax
- [ ] Use cases for subgrid
- [ ] Combining with regular grid

**Practice Project**: Complex nested grid layouts

### 8.3 Cascade Layers

- [ ] @layer syntax
- [ ] Layer ordering
- [ ] Managing specificity at scale
- [ ] Use in design systems

**Practice Project**: Multi-theme system with layers

### 8.4 Modern Color Spaces

- [ ] `oklch()` and `oklab()`
- [ ] `color()` function
- [ ] Wide gamut colors
- [ ] Color manipulation

**Practice Project**: Advanced color system

---

## Recommended Practice Schedule

### Daily Practice (30-60 min)

1. Learn one concept
2. Build a small demo
3. Document what you learned
4. Add to your component library

### Weekly Projects (2-4 hours)

- Complete one substantial project per week
- Focus on combining multiple concepts
- Ensure responsive and accessible
- Review and refactor

### Monthly Review

- Revisit earlier projects and improve them
- Challenge yourself with complex designs from Dribbble/Behance
- Contribute to open source projects
- Build a portfolio piece

---

## Resources for Each Phase

### Essential Tools

- Browser DevTools (Chrome/Firefox)
- CodePen/CodeSandbox for experiments
- Figma/Sketch for understanding designs
- Lighthouse for performance audits

### Practice Platforms

- Frontend Mentor (practical challenges)
- CSS Battle (creative problem-solving)
- 100 Days CSS (daily challenges)
- Daily UI (design inspiration)

### Reference Sites

- MDN Web Docs (authoritative reference)
- CSS Tricks (tutorials and guides)
- Can I Use (browser support)
- Web.dev (best practices)

### Testing Designs

- Dribbble (inspiration)
- Awwwards (excellence examples)
- Behance (real-world projects)

---

## Key Milestones

- ✅ **Week 4**: Comfortable with Flexbox and Grid for any layout
- ✅ **Week 8**: Can animate and transform elements smoothly
- ✅ **Week 12**: Can architect maintainable CSS at scale
- ✅ **Week 16**: Familiar with cutting-edge CSS features

---

## Tips for Success

1. **Code Daily**: Even 30 minutes makes a difference
2. **Build Real Projects**: Apply concepts immediately
3. **Study Great Designs**: Reverse-engineer websites you admire
4. **Focus on Fundamentals**: Master Flexbox and Grid thoroughly
5. **Stay Current**: Follow CSS Working Group, web.dev updates
6. **Accessibility First**: Make it part of your workflow from day 1
7. **Performance Matters**: Always consider the performance impact
8. **Document Learnings**: Keep notes on tricky concepts
9. **Join Communities**: CSS Discord, Reddit r/css, Twitter CSS folks
10. **Teach Others**: Explaining concepts solidifies understanding

---

## Next Steps

1. Start with Phase 1, even if it seems basic
2. Create a practice repository for all your projects
3. Set up a daily practice routine
4. Track your progress through this roadmap
5. Share your work and get feedback

Remember: You have React experience, so focus on understanding how CSS works fundamentally before diving into CSS-in-JS solutions. This foundation will make you a better overall developer.

Good luck on your CSS journey! 🚀
