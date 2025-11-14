import React from "react";
import { PageHeader, ExpectedOutcome } from "../components";

/*
  MediaQueriesTheory (improved)
  - Comprehensive overview of media queries, breakpoint strategy, mobile-first
    patterns, fluid units, and small practical examples students can read and
    apply directly inside exercises.
*/

export default function MediaQueriesTheory(): JSX.Element {
  return (
    <div className="theory-content">
      <PageHeader title="Media Queries & Responsive Strategies" />

      <div className="theory-toc">
        <h2>Contents</h2>
        <ul>
          <li><a href="#goal">Goal</a></li>
          <li><a href="#concepts">Core Concepts</a></li>
          <li><a href="#mobile-first">Mobile-first Strategy</a></li>
          <li><a href="#breakpoints">Choosing Breakpoints</a></li>
          <li><a href="#examples">Examples</a></li>
          <li><a href="#pro-tips">Pro Tips</a></li>
          <li><a href="#accessibility">Accessibility & Performance</a></li>
        </ul>
      </div>

      <div className="theory-body">
        <section id="goal">
          <h2>Goal</h2>
          <p>
            Learn how to adapt layouts for different viewport sizes using media
            queries and responsive CSS primitives. By the end you'll be able to
            pick sensible breakpoints, write mobile-first rules, and use fluid
            units like <code>clamp()</code>, <code>vw</code>, and <code>rem</code>.
          </p>
        </section>

        <section id="concepts">
          <h2>Core Concepts</h2>
          <ul>
            <li><strong>@media</strong> — apply CSS conditionally (width, orientation, resolution).</li>
            <li><strong>Mobile-first</strong> — base styles target small screens; use <code>min-width</code> to progressively enhance.</li>
            <li><strong>Fluid units</strong> — combine <code>vw</code> and <code>clamp()</code> to avoid abrupt jumps.</li>
            <li><strong>Container vs viewport queries</strong> — container queries target component size (modern), media queries target viewport size.</li>
          </ul>
        </section>

        <section id="mobile-first">
          <h2>Mobile-first Strategy</h2>
          <p>
            Start with the smallest screen as the default. Then write rules for larger
            screens using <code>@media (min-width: ...)</code>. This keeps CSS small and improves
            the cascade when styles layer on top of each other.
          </p>
          <pre>
{`/* Mobile-first */
.card { padding: 12px; }

@media (min-width: 768px) {
  .card { padding: 20px; display: grid; grid-template-columns: 1fr 2fr; }
}`}
          </pre>
        </section>

        <section id="breakpoints">
          <h2>Choosing Breakpoints</h2>
          <p>
            Avoid device-specific breakpoints. Prefer content-driven breakpoints where the layout
            actually needs to change. Typical starting points are 480px, 768px, and 1024px — but
            use what your design requires.
          </p>
          <ul>
            <li>Use <code>min-width</code> for a mobile-first approach.</li>
            <li>Prefer fewer breakpoints and design fluidly between them.</li>
            <li>Test with real content, not just placeholders.</li>
          </ul>
        </section>

        <section id="examples">
          <h2>Practical Examples</h2>

          <h3>1) Simple grid switch</h3>
          <p>Start single-column, switch to two columns at tablet sizes.</p>
          <pre>
{`/* base (mobile) */
.grid { display: grid; grid-template-columns: 1fr; gap: 16px; }

@media (min-width: 768px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}`}
          </pre>

          <h3>2) Fluid typography with clamp()</h3>
          <p>Clamp keeps type readable without drastic jumps.</p>
          <pre>
{`.headline { font-size: clamp(1rem, 2.4vw, 1.25rem); }`}
          </pre>

          <h3>3) Responsive navigation pattern</h3>
          <p>
            Hide full menu on small screens and show a hamburger. On larger screens,
            display menu horizontally.
          </p>
          <pre>
{`/* hide links by default */
.nav-links { display: none; }

@media (min-width: 768px) {
  .nav-links { display: flex; gap: 16px; }
}`}
          </pre>

          <h3>Live demo</h3>
          <ExpectedOutcome description="Two-column grid on wide screens; single column on mobile">
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
              <div style={{ background: "#667eea", color: "white", padding: 12 }}>Demo A</div>
              <div style={{ background: "#fa709a", color: "white", padding: 12 }}>Demo B</div>
            </div>
          </ExpectedOutcome>
        </section>

        <section id="pro-tips">
          <h2>Pro Tips</h2>
          <ul>
            <li>Design fluidly between breakpoints — avoid too many sharp jumps.</li>
            <li>Prefer content-driven breakpoints over device-specific ones.</li>
            <li>Use <code>clamp()</code> for font-size and spacing that scales smoothly.</li>
            <li>Consider CSS custom properties to centralize breakpoint values.</li>
          </ul>
        </section>

        <section id="accessibility">
          <h2>Accessibility & Performance</h2>
          <p>
            Keep responsive interactions accessible: ensure navigation can be used with
            keyboard, prefer reduced-motion support for animations, and lazy-load large images
            where appropriate. Minimizing heavy layout thrashing improves perceived performance.
          </p>
          <ul>
            <li>Respect <code>prefers-reduced-motion</code> for animations.</li>
            <li>Responsive images: use <code>srcset</code> and <code>&lt;picture&gt;</code> to serve appropriate sizes.</li>
            <li>Use hardware-friendly properties (transform, opacity) for animations.</li>
          </ul>
        </section>

        <section>
          <h2>Try this</h2>
          <p>
            Open an exercise and implement a media query that changes layout at
            <code>768px</code>. Start mobile-first and use the examples above as a reference.
          </p>
        </section>
      </div>
    </div>
  );
}
