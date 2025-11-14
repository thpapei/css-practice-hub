export function FlexboxTheory() {
  return (
    <div className="theory-content">
      <h2>Flexbox Theory & Reference</h2>

      {/* Table of Contents */}
      <nav className="theory-toc">
        <h3>Contents</h3>
        <ul>
          <li>
            <a href="#what-is-flexbox">What is Flexbox?</a>
          </li>
          <li>
            <a href="#flex-container">Flex Container Properties</a>
          </li>
          <li>
            <a href="#flex-direction">flex-direction</a>
          </li>
          <li>
            <a href="#justify-content">justify-content</a>
          </li>
          <li>
            <a href="#align-items">align-items</a>
          </li>
          <li>
            <a href="#flex-wrap">flex-wrap</a>
          </li>
          <li>
            <a href="#gap">gap</a>
          </li>
          <li>
            <a href="#flex-item">Flex Item Properties</a>
          </li>
          <li>
            <a href="#flex-grow-shrink">flex-grow & flex-shrink</a>
          </li>
          <li>
            <a href="#flex-basis">flex-basis</a>
          </li>
          <li>
            <a href="#align-self">align-self</a>
          </li>
          <li>
            <a href="#order">order</a>
          </li>
          <li>
            <a href="#best-practices">Best Practices</a>
          </li>
        </ul>
      </nav>

      {/* What is Flexbox */}
      <section id="what-is-flexbox">
        <h3>What is Flexbox?</h3>
        <p>
          <strong>Flexbox (Flexible Box Layout)</strong> is a one-dimensional
          layout system designed to distribute space and align items within a
          container. Unlike Grid (which is two-dimensional), Flexbox works along
          a single axis at a time - either horizontally or vertically.
        </p>
        <p>
          <strong>When to use Flexbox:</strong>
        </p>
        <ul>
          <li>Navigation bars and menus</li>
          <li>Centering content vertically and horizontally</li>
          <li>Evenly distributing space between items</li>
          <li>Card layouts that need to wrap</li>
          <li>Form layouts with aligned labels and inputs</li>
          <li>Any layout where items flow in a single direction</li>
        </ul>

        <div className="theory-example">
          <h4>Flexbox Anatomy</h4>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              padding: "20px",
              background: "#f8f9fa",
              borderRadius: "8px",
            }}
          >
            <div
              style={{
                padding: "20px",
                background: "#667eea",
                color: "white",
                borderRadius: "6px",
                border: "3px dashed rgba(255,255,255,0.3)",
              }}
            >
              <strong>Flex Container</strong> (display: flex)
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  marginTop: "12px",
                }}
              >
                <div
                  style={{
                    padding: "12px",
                    background: "#fa709a",
                    borderRadius: "4px",
                    flex: "1",
                  }}
                >
                  Flex Item 1
                </div>
                <div
                  style={{
                    padding: "12px",
                    background: "#fa709a",
                    borderRadius: "4px",
                    flex: "1",
                  }}
                >
                  Flex Item 2
                </div>
                <div
                  style={{
                    padding: "12px",
                    background: "#fa709a",
                    borderRadius: "4px",
                    flex: "1",
                  }}
                >
                  Flex Item 3
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="theory-note">
          <strong>💡 Pro Tip:</strong> Only direct children of a flex container
          become flex items. Descendants further down the tree are not affected.
        </div>
      </section>

      {/* Flex Container Properties */}
      <section id="flex-container">
        <h3>Flex Container Properties</h3>
        <p>
          To create a flex container, apply <code>display: flex</code> to an
          element. This enables flexbox layout for its direct children.
        </p>
        <pre>
          {`.container {
  display: flex;  /* Creates flex container */
}`}
        </pre>
      </section>

      {/* flex-direction */}
      <section id="flex-direction">
        <h3>flex-direction</h3>
        <p>
          Defines the <strong>main axis</strong> - the direction flex items are
          placed in the container.
        </p>
        <ul>
          <li>
            <code>row</code> (default) - Left to right
          </li>
          <li>
            <code>row-reverse</code> - Right to left
          </li>
          <li>
            <code>column</code> - Top to bottom
          </li>
          <li>
            <code>column-reverse</code> - Bottom to top
          </li>
        </ul>

        <div className="theory-example">
          <h4>Visual Examples</h4>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
            }}
          >
            <div>
              <p>
                <strong>flex-direction: row</strong>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "8px",
                  padding: "16px",
                  background: "#f8f9fa",
                  borderRadius: "6px",
                }}
              >
                <div
                  style={{
                    padding: "12px",
                    background: "#667eea",
                    color: "white",
                    borderRadius: "4px",
                  }}
                >
                  1
                </div>
                <div
                  style={{
                    padding: "12px",
                    background: "#667eea",
                    color: "white",
                    borderRadius: "4px",
                  }}
                >
                  2
                </div>
                <div
                  style={{
                    padding: "12px",
                    background: "#667eea",
                    color: "white",
                    borderRadius: "4px",
                  }}
                >
                  3
                </div>
              </div>
            </div>

            <div>
              <p>
                <strong>flex-direction: column</strong>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  padding: "16px",
                  background: "#f8f9fa",
                  borderRadius: "6px",
                }}
              >
                <div
                  style={{
                    padding: "12px",
                    background: "#fa709a",
                    color: "white",
                    borderRadius: "4px",
                  }}
                >
                  1
                </div>
                <div
                  style={{
                    padding: "12px",
                    background: "#fa709a",
                    color: "white",
                    borderRadius: "4px",
                  }}
                >
                  2
                </div>
                <div
                  style={{
                    padding: "12px",
                    background: "#fa709a",
                    color: "white",
                    borderRadius: "4px",
                  }}
                >
                  3
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* justify-content */}
      <section id="justify-content">
        <h3>justify-content</h3>
        <p>
          Aligns items along the <strong>main axis</strong> (horizontal for row,
          vertical for column). Controls spacing and distribution.
        </p>
        <ul>
          <li>
            <code>flex-start</code> (default) - Pack items at the start
          </li>
          <li>
            <code>flex-end</code> - Pack items at the end
          </li>
          <li>
            <code>center</code> - Center items
          </li>
          <li>
            <code>space-between</code> - Distribute with space between items
          </li>
          <li>
            <code>space-around</code> - Distribute with space around items
          </li>
          <li>
            <code>space-evenly</code> - Distribute with equal space
          </li>
        </ul>

        <div className="theory-example">
          <h4>Visual Examples</h4>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <div>
              <p>
                <strong>justify-content: flex-start</strong>
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: "8px",
                  padding: "16px",
                  background: "#f8f9fa",
                  borderRadius: "6px",
                }}
              >
                <div
                  style={{
                    padding: "12px",
                    background: "#667eea",
                    color: "white",
                    borderRadius: "4px",
                  }}
                >
                  1
                </div>
                <div
                  style={{
                    padding: "12px",
                    background: "#667eea",
                    color: "white",
                    borderRadius: "4px",
                  }}
                >
                  2
                </div>
                <div
                  style={{
                    padding: "12px",
                    background: "#667eea",
                    color: "white",
                    borderRadius: "4px",
                  }}
                >
                  3
                </div>
              </div>
            </div>

            <div>
              <p>
                <strong>justify-content: center</strong>
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "16px",
                  background: "#f8f9fa",
                  borderRadius: "6px",
                }}
              >
                <div
                  style={{
                    padding: "12px",
                    background: "#fa709a",
                    color: "white",
                    borderRadius: "4px",
                  }}
                >
                  1
                </div>
                <div
                  style={{
                    padding: "12px",
                    background: "#fa709a",
                    color: "white",
                    borderRadius: "4px",
                  }}
                >
                  2
                </div>
                <div
                  style={{
                    padding: "12px",
                    background: "#fa709a",
                    color: "white",
                    borderRadius: "4px",
                  }}
                >
                  3
                </div>
              </div>
            </div>

            <div>
              <p>
                <strong>justify-content: space-between</strong>
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "16px",
                  background: "#f8f9fa",
                  borderRadius: "6px",
                }}
              >
                <div
                  style={{
                    padding: "12px",
                    background: "#fee140",
                    borderRadius: "4px",
                  }}
                >
                  1
                </div>
                <div
                  style={{
                    padding: "12px",
                    background: "#fee140",
                    borderRadius: "4px",
                  }}
                >
                  2
                </div>
                <div
                  style={{
                    padding: "12px",
                    background: "#fee140",
                    borderRadius: "4px",
                  }}
                >
                  3
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* align-items */}
      <section id="align-items">
        <h3>align-items</h3>
        <p>
          Aligns items along the <strong>cross axis</strong> (vertical for row,
          horizontal for column). Controls how items stretch or align.
        </p>
        <ul>
          <li>
            <code>stretch</code> (default) - Stretch to fill container
          </li>
          <li>
            <code>flex-start</code> - Align to start of cross axis
          </li>
          <li>
            <code>flex-end</code> - Align to end of cross axis
          </li>
          <li>
            <code>center</code> - Center along cross axis
          </li>
          <li>
            <code>baseline</code> - Align baselines of items
          </li>
        </ul>

        <div className="theory-example">
          <h4>Visual Examples</h4>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
            }}
          >
            <div>
              <p>
                <strong>align-items: flex-start</strong>
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                  padding: "16px",
                  background: "#f8f9fa",
                  borderRadius: "6px",
                  height: "120px",
                }}
              >
                <div
                  style={{
                    padding: "12px",
                    background: "#667eea",
                    color: "white",
                    borderRadius: "4px",
                  }}
                >
                  Short
                </div>
                <div
                  style={{
                    padding: "12px",
                    background: "#667eea",
                    color: "white",
                    borderRadius: "4px",
                  }}
                >
                  Taller Item
                </div>
              </div>
            </div>

            <div>
              <p>
                <strong>align-items: center</strong>
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "16px",
                  background: "#f8f9fa",
                  borderRadius: "6px",
                  height: "120px",
                }}
              >
                <div
                  style={{
                    padding: "12px",
                    background: "#fa709a",
                    color: "white",
                    borderRadius: "4px",
                  }}
                >
                  Short
                </div>
                <div
                  style={{
                    padding: "12px",
                    background: "#fa709a",
                    color: "white",
                    borderRadius: "4px",
                  }}
                >
                  Taller Item
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="theory-note">
          <strong>💡 Pro Tip:</strong> The classic way to center an item both
          horizontally and vertically is: <code>display: flex</code>,{" "}
          <code>justify-content: center</code>, <code>align-items: center</code>
        </div>
      </section>

      {/* flex-wrap */}
      <section id="flex-wrap">
        <h3>flex-wrap</h3>
        <p>
          Controls whether flex items are forced onto a single line or can wrap
          onto multiple lines.
        </p>
        <ul>
          <li>
            <code>nowrap</code> (default) - All items on one line
          </li>
          <li>
            <code>wrap</code> - Items wrap onto multiple lines
          </li>
          <li>
            <code>wrap-reverse</code> - Items wrap in reverse order
          </li>
        </ul>

        <div className="theory-example">
          <h4>Visual Comparison</h4>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <div>
              <p>
                <strong>flex-wrap: nowrap</strong>
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "nowrap",
                  gap: "8px",
                  padding: "16px",
                  background: "#f8f9fa",
                  borderRadius: "6px",
                  overflow: "auto",
                }}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <div
                    key={num}
                    style={{
                      padding: "12px 24px",
                      background: "#667eea",
                      color: "white",
                      borderRadius: "4px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Item {num}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p>
                <strong>flex-wrap: wrap</strong>
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  padding: "16px",
                  background: "#f8f9fa",
                  borderRadius: "6px",
                }}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <div
                    key={num}
                    style={{
                      padding: "12px 24px",
                      background: "#fa709a",
                      color: "white",
                      borderRadius: "4px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Item {num}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* gap */}
      <section id="gap">
        <h3>gap</h3>
        <p>
          Sets the spacing between flex items. Much cleaner than using margins!
        </p>
        <pre>
          {`.container {
  display: flex;
  gap: 16px;              /* Same gap in both directions */
  gap: 16px 24px;        /* row-gap column-gap */
}`}
        </pre>

        <div className="theory-note">
          <strong>💡 Best Practice:</strong> Use <code>gap</code> instead of
          margins for spacing flex items. It's cleaner and doesn't require
          negative margins on the container.
        </div>
      </section>

      {/* Flex Item Properties */}
      <section id="flex-item">
        <h3>Flex Item Properties</h3>
        <p>
          These properties are applied to individual flex items (children) to
          control their sizing and alignment.
        </p>
      </section>

      {/* flex-grow & flex-shrink */}
      <section id="flex-grow-shrink">
        <h3>flex-grow & flex-shrink</h3>
        <p>
          <strong>flex-grow:</strong> How much an item should grow relative to
          other items when there's extra space.
        </p>
        <p>
          <strong>flex-shrink:</strong> How much an item should shrink relative
          to other items when there's not enough space.
        </p>

        <div className="theory-example">
          <h4>flex-grow Example</h4>
          <div
            style={{
              display: "flex",
              gap: "8px",
              padding: "16px",
              background: "#f8f9fa",
              borderRadius: "6px",
            }}
          >
            <div
              style={{
                padding: "12px",
                background: "#667eea",
                color: "white",
                borderRadius: "4px",
                flexGrow: 0,
              }}
            >
              flex-grow: 0
            </div>
            <div
              style={{
                padding: "12px",
                background: "#fa709a",
                color: "white",
                borderRadius: "4px",
                flexGrow: 1,
              }}
            >
              flex-grow: 1
            </div>
            <div
              style={{
                padding: "12px",
                background: "#fee140",
                borderRadius: "4px",
                flexGrow: 2,
              }}
            >
              flex-grow: 2
            </div>
          </div>
          <p style={{ fontSize: "14px", color: "#666", marginTop: "8px" }}>
            The yellow item gets twice as much extra space as the pink item.
          </p>
        </div>
      </section>

      {/* flex-basis */}
      <section id="flex-basis">
        <h3>flex-basis</h3>
        <p>
          Sets the initial size of a flex item before space distribution. Like
          width or height, but flexbox-aware.
        </p>
        <ul>
          <li>
            <code>auto</code> (default) - Based on content size
          </li>
          <li>
            <code>0</code> - Item starts with no size (commonly used with
            flex-grow)
          </li>
          <li>
            <code>200px</code>, <code>50%</code> - Specific size
          </li>
        </ul>

        <div className="theory-note">
          <strong>💡 Shorthand:</strong> <code>flex: 1</code> is shorthand for{" "}
          <code>flex-grow: 1; flex-shrink: 1; flex-basis: 0;</code>
        </div>
      </section>

      {/* align-self */}
      <section id="align-self">
        <h3>align-self</h3>
        <p>
          Overrides the container's <code>align-items</code> for a specific
          item. Accepts the same values as <code>align-items</code>.
        </p>

        <div className="theory-example">
          <h4>Example</h4>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "8px",
              padding: "16px",
              background: "#f8f9fa",
              borderRadius: "6px",
              height: "120px",
            }}
          >
            <div
              style={{
                padding: "12px",
                background: "#667eea",
                color: "white",
                borderRadius: "4px",
              }}
            >
              Normal
            </div>
            <div
              style={{
                padding: "12px",
                background: "#fa709a",
                color: "white",
                borderRadius: "4px",
                alignSelf: "center",
              }}
            >
              align-self: center
            </div>
            <div
              style={{
                padding: "12px",
                background: "#fee140",
                borderRadius: "4px",
                alignSelf: "flex-end",
              }}
            >
              align-self: flex-end
            </div>
          </div>
        </div>
      </section>

      {/* order */}
      <section id="order">
        <h3>order</h3>
        <p>
          Controls the visual order of flex items. Default is 0. Lower numbers
          appear first.
        </p>

        <div className="theory-example">
          <h4>Example</h4>
          <div
            style={{
              display: "flex",
              gap: "8px",
              padding: "16px",
              background: "#f8f9fa",
              borderRadius: "6px",
            }}
          >
            <div
              style={{
                padding: "12px",
                background: "#667eea",
                color: "white",
                borderRadius: "4px",
                order: 3,
              }}
            >
              order: 3
            </div>
            <div
              style={{
                padding: "12px",
                background: "#fa709a",
                color: "white",
                borderRadius: "4px",
                order: 1,
              }}
            >
              order: 1
            </div>
            <div
              style={{
                padding: "12px",
                background: "#fee140",
                borderRadius: "4px",
                order: 2,
              }}
            >
              order: 2
            </div>
          </div>
        </div>

        <div className="theory-note">
          <strong>⚠️ Accessibility Warning:</strong> The <code>order</code>{" "}
          property only changes visual order, not DOM order. Screen readers will
          still read items in their original order.
        </div>
      </section>

      {/* Best Practices */}
      <section id="best-practices">
        <h3>Best Practices</h3>

        <div className="theory-tip">
          <h4>✅ DO:</h4>
          <ul>
            <li>
              Use Flexbox for one-dimensional layouts (rows or columns, not
              both)
            </li>
            <li>
              Use <code>gap</code> for spacing instead of margins
            </li>
            <li>
              Use <code>flex: 1</code> shorthand for equal-width items
            </li>
            <li>
              Combine <code>justify-content: center</code> and{" "}
              <code>align-items: center</code> for perfect centering
            </li>
            <li>
              Use flexbox for navigation menus, card layouts, and toolbars
            </li>
            <li>
              Set <code>min-width: 0</code> on flex items if content overflows
            </li>
          </ul>

          <h4>❌ DON'T:</h4>
          <ul>
            <li>
              Use Flexbox when Grid is more appropriate (two-dimensional
              layouts)
            </li>
            <li>
              Forget that <code>flex-direction</code> changes which axis is main
              vs cross
            </li>
            <li>Rely on the visual order property for accessibility</li>
            <li>Use negative margins to create gaps between items</li>
          </ul>
        </div>

        <div className="theory-example">
          <h4>Common Pattern: Navigation Bar</h4>
          <pre>
            {`.navbar {
  display: flex;
  justify-content: space-between;  /* Logo left, menu right */
  align-items: center;             /* Vertically center */
  gap: 20px;
  padding: 16px 24px;
}

.navbar-menu {
  display: flex;
  gap: 16px;                       /* Space between links */
}`}
          </pre>

          <h4>Common Pattern: Card Grid</h4>
          <pre>
            {`.card-container {
  display: flex;
  flex-wrap: wrap;                 /* Allow wrapping */
  gap: 20px;
}

.card {
  flex: 1 1 300px;                 /* Grow, shrink, min 300px */
  /* Cards will wrap and grow to fill space */
}`}
          </pre>

          <h4>Common Pattern: Perfect Centering</h4>
          <pre>
            {`.center-box {
  display: flex;
  justify-content: center;         /* Horizontal center */
  align-items: center;             /* Vertical center */
  height: 400px;
}`}
          </pre>
        </div>
      </section>
    </div>
  );
}
