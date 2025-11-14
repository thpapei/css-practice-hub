import { PageHeader } from "../components";

/* ============================================
   THEORY: Mobile-first Design - Reference
   GOAL: Teach mobile-first techniques, choosing content-driven breakpoints, and combining media queries with fluid units
   CONCEPTS INTRODUCED: mobile-first, min-width queries, clamp(), fluid spacing, breakpoint strategy
   WHY THIS MATTERS: Mobile-first keeps CSS small and ensures progressive enhancement for larger viewports
   TRY THIS: Build a compact mobile layout and expand it to two columns at 768px using grid or flex
   ACCESSIBILITY: See Accessibility section for touch targets, prefers-reduced-motion, and scalable type
   IMPORTANT: DO NOT use `ExpectedOutcome` in theory files — that helper belongs in exercises
   ============================================ */

export default function Phase3MobileFirstTheory(): JSX.Element {
  return (
    <div className="theory-content">
      <PageHeader title="Mobile-first Design" />

      <div className="theory-toc">
        <h2>Contents</h2>
        <ul>
          <li>
            <a href="#goal">Goal</a>
          </li>
          <li>
            <a href="#principles">Core principles</a>
          </li>
          <li>
            <a href="#breakpoints">Breakpoints & strategy</a>
          </li>
          <li>
            <a href="#fluid">Fluid patterns</a>
          </li>
          <li>
            <a href="#accessibility">Accessibility</a>
          </li>
          <li>
            <a href="#try">Try this</a>
          </li>
        </ul>
      </div>

      <div className="theory-body">
        <section id="goal">
          <h2>Goal</h2>
          <p>
            Learn how to design mobile-first by building styles from smallest to
            largest viewports, choosing content-driven breakpoints, and
            combining media queries with fluid units for smooth, resilient
            layouts.
          </p>
        </section>

        <section id="principles">
          <h2>Core principles</h2>
          <ul>
            <li>Start small: base styles target mobile / narrow viewports.</li>
            <li>
              Progressively enhance using <code>@media (min-width: ...)</code>.
            </li>
            <li>Pick breakpoints driven by content, not device sizes.</li>
            <li>
              Prefer fluid units and <code>clamp()</code> to avoid abrupt jumps.
            </li>
          </ul>
        </section>

        <section id="breakpoints">
          <h2>Breakpoints & strategy</h2>
          <p>
            Use a small set of sensible breakpoints (e.g. 480px, 768px, 1024px)
            but adjust them to where your design needs changes. Keep the CSS
            mobile-first by using <code>min-width</code> queries.
          </p>
          <pre>{`/* mobile-first */
.card { padding: 12px; }

@media (min-width: 768px) {
  .card { padding: 20px; display: grid; grid-template-columns: 1fr 2fr; }
}`}</pre>
        </section>

        <section id="fluid">
          <h2>Fluid patterns</h2>
          <p>
            Combine <code>vw</code> and <code>clamp()</code> for headings and
            spacing to create graceful scaling between breakpoints.
          </p>
          <pre>{`.headline { font-size: clamp(1rem, 3vw, 1.75rem); }`}</pre>
        </section>

        <section id="accessibility">
          <h2>Accessibility</h2>
          <ul>
            <li>
              Respect <code>prefers-reduced-motion</code>.
            </li>
            <li>Test with different default font sizes and zoom levels.</li>
            <li>
              Ensure touch targets remain at least ~44px across breakpoints.
            </li>
          </ul>
        </section>

        <section id="try">
          <h2>Try this</h2>
          <ol>
            <li>
              Create a compact mobile layout and expand it at 768px into two
              columns.
            </li>
            <li>
              Use <code>clamp()</code> for a headline and verify it doesn't get
              too small or too large.
            </li>
            <li>
              Replace fixed gaps with a root <code>--space</code> that uses{" "}
              <code>clamp()</code>.
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
}
