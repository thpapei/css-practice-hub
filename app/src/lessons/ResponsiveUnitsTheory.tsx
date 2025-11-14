import { PageHeader } from "../components";

// ResponsiveUnitsTheory (enriched)
// - This theory file is a reference and should NOT use exercise helpers like
//   ExpectedOutcome (those belong in exercises). Theory includes inline
//   examples and copyable snippets for learners.

export default function ResponsiveUnitsTheory(): JSX.Element {
  return (
    <div className="theory-content">
      <PageHeader title="Responsive Units & Fluid Scaling" />

      <div className="theory-toc">
        <h2>Contents</h2>
        <ul>
          <li>
            <a href="#goal">Goal</a>
          </li>
          <li>
            <a href="#units">Units overview</a>
          </li>
          <li>
            <a href="#clamp">Using clamp()</a>
          </li>
          <li>
            <a href="#fluid-type">Fluid typography</a>
          </li>
          <li>
            <a href="#spacing">Responsive spacing</a>
          </li>
          <li>
            <a href="#images">Responsive images</a>
          </li>
          <li>
            <a href="#accessibility">Accessibility & performance</a>
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
            Learn how to choose and combine responsive CSS units so components
            scale smoothly across viewports while keeping accessibility and
            performance in mind.
          </p>
        </section>

        <section id="units">
          <h2>Units overview</h2>
          <p>Quick reference:</p>
          <ul>
            <li>
              <strong>px</strong> — absolute; predictable but not fluid.
            </li>
            <li>
              <strong>rem</strong> — root-relative; great for consistent sizing.
            </li>
            <li>
              <strong>em</strong> — element-relative; useful for components.
            </li>
            <li>
              <strong>vw / vh</strong> — viewport units; perfect for fluid
              scaling.
            </li>
            <li>
              <strong>%</strong> — percentage of parent; useful in flexible
              layouts.
            </li>
            <li>
              <strong>fr</strong> — grid fraction for grid tracks.
            </li>
          </ul>
        </section>

        <section id="clamp">
          <h2>Using clamp()</h2>
          <p>
            <code>clamp(min, preferred, max)</code> gives a preferred value but
            keeps it between min and max. It's ideal for fluid typography and
            spacing where you want graceful scaling but bounded extremes.
          </p>
          <pre>{`.headline {
  /* min    preferred    max */
  font-size: clamp(1rem, 2.5vw, 1.5rem);
}`}</pre>
          <p>
            The preferred value is often viewport-based (e.g. <code>2.5vw</code>
            ).
          </p>
        </section>

        <section id="fluid-type">
          <h2>Fluid typography</h2>
          <p>
            Common pattern: mobile-first base + clamp for scaling. This keeps
            the smallest sizes readable while allowing growth on larger
            viewports.
          </p>
          <pre>{`/* base */
.headline { font-size: 1rem; }

/* scale smoothly */
.headline { font-size: clamp(1rem, 2.4vw, 1.25rem); }`}</pre>
          <p>Inline example (live):</p>
          <div style={{ background: "#f8f9fa", padding: 12, borderRadius: 6 }}>
            <h2 style={{ fontSize: "clamp(18px, 3vw, 28px)", margin: 0 }}>
              Fluid headline example
            </h2>
          </div>
        </section>

        <section id="spacing">
          <h2>Responsive spacing</h2>
          <p>
            Use a root variable or <code>clamp()</code> for gaps/padding.
            Example:
          </p>
          <pre>{`:root { --space: clamp(8px, 1.5vw, 24px); }
.card { padding: var(--space); gap: calc(var(--space) / 2); }`}</pre>
        </section>

        <section id="images">
          <h2>Responsive images</h2>
          <p>
            For fluid images use <code>max-width: 100%</code> and
            <code>height: auto</code>. For performance, use <code>srcset</code>
            or <code>&lt;picture&gt;</code> to serve optimized sizes.
          </p>
        </section>

        <section id="accessibility">
          <h2>Accessibility & performance</h2>
          <ul>
            <li>
              Respect <code>prefers-reduced-motion</code> for animations.
            </li>
            <li>
              Confirm touch targets remain large enough across breakpoints.
            </li>
            <li>Test with browser zoom and different default font sizes.</li>
          </ul>
        </section>

        <section id="try">
          <h2>Try this</h2>
          <ol>
            <li>
              Implement <code>clamp()</code> for a headline in the Responsive
              Units lesson.
            </li>
            <li>
              Create a <code>--space</code> root variable and use it for
              padding/gaps.
            </li>
            <li>
              Swap a fixed image size for <code>max-width: 100%</code> and add a{" "}
              <code>srcset</code>.
            </li>
          </ol>
        </section>

        <section>
          <h2>Further reading</h2>
          <ul>
            <li>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/clamp">
                MDN: clamp()
              </a>
            </li>
            <li>
              <a href="https://css-tricks.com/responsive-fonts-a-better-solution/">
                CSS-Tricks: Responsive Fonts
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
