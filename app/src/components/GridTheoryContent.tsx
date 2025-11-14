export default function GridTheoryContent(): JSX.Element {
  return (
    <div className="theory-content">
      <header className="theory-header">
        <h1>CSS Grid - Theory Guide</h1>
        <p>A comprehensive guide to CSS Grid layout fundamentals</p>
      </header>

      <div className="theory-body">
        <section>
          <h2>What is CSS Grid?</h2>
          <p>
            CSS Grid Layout is a powerful two-dimensional layout system that
            lets you arrange elements in rows and columns. Unlike Flexbox
            (one-dimensional), Grid gives you complete control over both axes
            simultaneously.
          </p>
        </section>

        <section>
          <h2>Core Concepts</h2>

          <h3>Grid Container & Items</h3>
          <p>
            The <code>display: grid</code> property creates a grid container.
            Its direct children become grid items that can be positioned in the
            grid.
          </p>

          <h3>Grid Tracks</h3>
          <p>
            Tracks are the rows and columns of the grid. You define them with{" "}
            <code>grid-template-columns</code> and{" "}
            <code>grid-template-rows</code>.
          </p>

          <h3>Grid Lines</h3>
          <p>
            The dividing lines that make up the structure of the grid. Lines are
            numbered starting from 1 and can be used to position items.
          </p>

          <h3>Grid Cells & Areas</h3>
          <p>
            A single unit of the grid (intersection of row and column). Multiple
            cells can be combined into grid areas.
          </p>
        </section>

        <section>
          <h2>Key Properties</h2>

          <h3>Container Properties</h3>
          <ul>
            <li>
              <strong>display: grid</strong> — Creates a grid container
            </li>
            <li>
              <strong>grid-template-columns</strong> — Defines column tracks
            </li>
            <li>
              <strong>grid-template-rows</strong> — Defines row tracks
            </li>
            <li>
              <strong>grid-template-areas</strong> — Named grid areas for
              readable layouts
            </li>
            <li>
              <strong>gap</strong> — Spacing between grid items (shorthand for
              row-gap and column-gap)
            </li>
            <li>
              <strong>justify-items / align-items</strong> — Align items within
              their cells
            </li>
          </ul>

          <h3>Item Properties</h3>
          <ul>
            <li>
              <strong>grid-column / grid-row</strong> — Position item by line
              numbers or span
            </li>
            <li>
              <strong>grid-area</strong> — Assign item to a named area or
              specify lines
            </li>
            <li>
              <strong>justify-self / align-self</strong> — Override container
              alignment for individual items
            </li>
          </ul>
        </section>

        <section>
          <h2>Sizing Units</h2>

          <h3>fr (Fraction Unit)</h3>
          <p>
            Represents a fraction of the available space. <code>1fr 2fr</code>{" "}
            creates two columns where the second is twice as wide as the first.
          </p>

          <h3>repeat()</h3>
          <p>
            Shorthand for repeating track patterns. <code>repeat(3, 1fr)</code>{" "}
            creates three equal columns.
          </p>

          <h3>minmax()</h3>
          <p>
            Defines a size range. <code>minmax(200px, 1fr)</code> creates a
            track that's at least 200px but can grow to fill available space.
          </p>

          <h3>auto-fit & auto-fill</h3>
          <p>
            Used with repeat() to create responsive grids. <code>auto-fit</code>{" "}
            collapses empty tracks; <code>auto-fill</code> keeps them.
          </p>
        </section>

        <section>
          <h2>Common Patterns</h2>

          <h3>Equal Columns Grid</h3>
          <pre>
            <code>grid-template-columns: repeat(3, 1fr);</code>
          </pre>

          <h3>Responsive Auto Grid</h3>
          <pre>
            <code>
              grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            </code>
          </pre>

          <h3>Named Areas Layout</h3>
          <pre>
            <code>{`grid-template-areas:
  "header header header"
  "sidebar main aside"
  "footer footer footer";`}</code>
          </pre>
        </section>

        <section>
          <h2>Best Practices</h2>
          <ul>
            <li>
              Use <code>fr</code> units for flexible, responsive layouts
            </li>
            <li>
              Prefer <code>gap</code> over margins for consistent spacing
            </li>
            <li>
              Use named grid areas for complex layouts (improves readability)
            </li>
            <li>
              Combine Grid with Flexbox: Grid for page layout, Flexbox for
              components
            </li>
            <li>
              Use <code>minmax()</code> with <code>auto-fit/auto-fill</code> for
              responsive grids
            </li>
            <li>
              Start with mobile layouts and enhance with Grid for larger screens
            </li>
          </ul>
        </section>

        <section>
          <h2>Resources</h2>
          <ul>
            <li>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout"
                target="_blank"
                rel="noopener noreferrer"
              >
                MDN CSS Grid Layout
              </a>
            </li>
            <li>
              <a
                href="https://css-tricks.com/snippets/css/complete-guide-grid/"
                target="_blank"
                rel="noopener noreferrer"
              >
                CSS-Tricks: Complete Guide to Grid
              </a>
            </li>
            <li>
              <a
                href="https://gridbyexample.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Grid by Example
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
