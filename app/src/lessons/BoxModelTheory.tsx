/* ============================================
  THEORY: Box Model - Reference
  GOAL: Explain how element size is calculated (content, padding, border, margin)
  CONCEPTS INTRODUCED: content-box vs border-box, padding, border, margin, margin-collapse
  WHY THIS MATTERS: Fundamental for layout, spacing, and predictable sizing
  TRY THIS: Small experiments listed in the `Try this` section below
  ACCESSIBILITY: Consider readable sizes, avoid tiny text when changing box sizing
  ============================================ */

export function BoxModelTheory() {
  return (
    <div className="theory-content">
      <h2>The CSS Box Model</h2>

      {/* Table of Contents */}
      <nav className="theory-toc">
        <h3>Contents</h3>
        <ul>
          <li>
            <a href="#what-is-box-model">What is the Box Model?</a>
          </li>
          <li>
            <a href="#content">Content Area</a>
          </li>
          <li>
            <a href="#padding">Padding</a>
          </li>
          <li>
            <a href="#border">Border</a>
          </li>
          <li>
            <a href="#margin">Margin</a>
          </li>
          <li>
            <a href="#box-sizing">Box-Sizing Property</a>
          </li>
          <li>
            <a href="#margin-collapse">Margin Collapse</a>
          </li>
          <li>
            <a href="#best-practices">Best Practices</a>
          </li>
        </ul>
      </nav>

      {/* What is the Box Model */}
      <section id="what-is-box-model">
        <h3>What is the Box Model?</h3>
        <p>
          The CSS box model is the foundation of layout on the web. Every
          element on a page is a rectangular box, and the box model describes
          how the size of that box is calculated.
        </p>

        <p>
          <strong>The box model consists of 4 layers (from inside out):</strong>
        </p>
        <ol>
          <li>
            <strong>Content</strong> - The actual content (text, images, etc.)
          </li>
          <li>
            <strong>Padding</strong> - Space between content and border
            (transparent)
          </li>
          <li>
            <strong>Border</strong> - A line around the padding (can be styled)
          </li>
          <li>
            <strong>Margin</strong> - Space outside the border (transparent)
          </li>
        </ol>

        <div className="theory-example">
          <h4>Visual Representation:</h4>
          <div
            style={{
              display: "inline-block",
              background: "#fa709a",
              padding: "40px",
              margin: "20px",
            }}
          >
            <div
              style={{
                background: "#fee140",
                padding: "30px",
                border: "10px solid #667eea",
              }}
            >
              <div
                style={{
                  background: "white",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <strong>Content</strong>
                <br />
                <small>(white)</small>
              </div>
            </div>
          </div>
          <p>
            <span style={{ color: "#fa709a", fontWeight: "bold" }}>
              Pink = Margin
            </span>
            {" | "}
            <span style={{ color: "#667eea", fontWeight: "bold" }}>
              Blue = Border
            </span>
            {" | "}
            <span style={{ color: "#fee140", fontWeight: "bold" }}>
              Yellow = Padding
            </span>
          </p>
        </div>
      </section>

      {/* Content Area */}
      <section id="content">
        <h3>Content Area</h3>
        <p>
          The content area contains the actual content - text, images, or other
          HTML elements. Its size is determined by the <code>width</code> and{" "}
          <code>height</code> properties.
        </p>

        <div className="theory-example">
          <h4>Example:</h4>
          <div
            style={{
              width: "200px",
              height: "100px",
              background: "#667eea",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            200px × 100px content
          </div>
          <pre>{`width: 200px;
height: 100px;`}</pre>
        </div>
      </section>

      {/* Padding */}
      <section id="padding">
        <h3>Padding</h3>
        <p>
          Padding creates space between the content and the border. It's
          transparent and takes on the background color of the element.
        </p>

        <p>
          <strong>Individual side properties:</strong>
        </p>
        <ul>
          <li>
            <code>padding-top</code>
          </li>
          <li>
            <code>padding-right</code>
          </li>
          <li>
            <code>padding-bottom</code>
          </li>
          <li>
            <code>padding-left</code>
          </li>
        </ul>

        <p>
          <strong>Shorthand syntax:</strong>
        </p>
        <ul>
          <li>
            <code>padding: 20px;</code> - All sides
          </li>
          <li>
            <code>padding: 10px 20px;</code> - Vertical | Horizontal
          </li>
          <li>
            <code>padding: 10px 20px 15px;</code> - Top | Horizontal | Bottom
          </li>
          <li>
            <code>padding: 10px 20px 15px 25px;</code> - Top | Right | Bottom |
            Left (clockwise)
          </li>
        </ul>

        <div className="theory-example">
          <h4>Padding Examples:</h4>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <div
              style={{
                background: "#667eea",
                color: "white",
                padding: "20px",
              }}
            >
              padding: 20px
            </div>
            <div
              style={{
                background: "#fa709a",
                color: "white",
                padding: "10px 30px",
              }}
            >
              padding: 10px 30px
            </div>
            <div
              style={{
                background: "#fee140",
                padding: "5px 15px 25px 15px",
              }}
            >
              padding: 5px 15px 25px 15px
            </div>
          </div>
        </div>

        <div className="theory-tip">
          <strong>💡 Pro Tip:</strong> Padding increases the total size of the
          element (unless you use <code>box-sizing: border-box</code>).
        </div>
      </section>

      {/* Border */}
      <section id="border">
        <h3>Border</h3>
        <p>
          The border surrounds the padding and content. You can style its width,
          style, and color.
        </p>

        <p>
          <strong>Border properties:</strong>
        </p>
        <ul>
          <li>
            <code>border-width</code> - Thickness (px, em, thin/medium/thick)
          </li>
          <li>
            <code>border-style</code> - solid, dashed, dotted, double, groove,
            ridge, inset, outset, none, hidden
          </li>
          <li>
            <code>border-color</code> - Any valid color
          </li>
        </ul>

        <p>
          <strong>Shorthand:</strong> <code>border: width style color;</code>
        </p>

        <div className="theory-example">
          <h4>Border Styles:</h4>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <div
              style={{
                padding: "12px 16px",
                border: "2px solid #667eea",
                background: "white",
              }}
            >
              solid
            </div>
            <div
              style={{
                padding: "12px 16px",
                border: "2px dashed #fa709a",
                background: "white",
              }}
            >
              dashed
            </div>
            <div
              style={{
                padding: "12px 16px",
                border: "2px dotted #667eea",
                background: "white",
              }}
            >
              dotted
            </div>
            <div
              style={{
                padding: "12px 16px",
                border: "4px double #fa709a",
                background: "white",
              }}
            >
              double
            </div>
            <div
              style={{
                padding: "12px 16px",
                border: "4px groove #667eea",
                background: "white",
              }}
            >
              groove
            </div>
            <div
              style={{
                padding: "12px 16px",
                border: "4px ridge #fa709a",
                background: "white",
              }}
            >
              ridge
            </div>
          </div>
        </div>

        <p>
          <strong>Individual sides:</strong> You can style each side
          independently.
        </p>
        <pre>{`border-top: 2px solid #667eea;
border-right: 1px dashed #fa709a;
border-bottom: 3px double #667eea;
border-left: 1px solid #fa709a;`}</pre>
      </section>

      {/* Margin */}
      <section id="margin">
        <h3>Margin</h3>
        <p>
          Margin creates space outside the border, separating elements from each
          other. Unlike padding, margin is always transparent.
        </p>

        <p>
          <strong>Syntax:</strong> Same as padding
        </p>
        <ul>
          <li>
            <code>margin-top/right/bottom/left</code> - Individual sides
          </li>
          <li>
            <code>margin: 20px;</code> - All sides
          </li>
          <li>
            <code>margin: 10px 20px;</code> - Vertical | Horizontal
          </li>
          <li>
            <code>margin: 10px 20px 15px 25px;</code> - Top | Right | Bottom |
            Left
          </li>
        </ul>

        <p>
          <strong>Special values:</strong>
        </p>
        <ul>
          <li>
            <code>margin: auto;</code> - Centers block elements horizontally
          </li>
          <li>
            <code>margin: -10px;</code> - Negative margins pull elements closer
          </li>
        </ul>

        <div className="theory-example">
          <h4>Margin Auto (Centering):</h4>
          <div
            style={{
              width: "200px",
              margin: "0 auto",
              padding: "16px",
              background: "#667eea",
              color: "white",
              textAlign: "center",
            }}
          >
            Centered with margin: 0 auto;
          </div>
          <pre>{`width: 200px;
margin: 0 auto; /* Centers horizontally */`}</pre>
        </div>

        <div className="theory-example">
          <h4>Negative Margin:</h4>
          <div style={{ background: "#f8f9fa", padding: "20px" }}>
            <div
              style={{
                background: "#667eea",
                color: "white",
                padding: "12px",
                marginBottom: "-20px",
              }}
            >
              Box 1 (margin-bottom: -20px)
            </div>
            <div
              style={{
                background: "#fa709a",
                color: "white",
                padding: "12px",
              }}
            >
              Box 2 (overlaps Box 1)
            </div>
          </div>
        </div>
      </section>

      {/* Box-Sizing */}
      <section id="box-sizing">
        <h3>Box-Sizing Property</h3>
        <p>
          The <code>box-sizing</code> property controls how the total width and
          height of an element is calculated.
        </p>

        <p>
          <strong>Two values:</strong>
        </p>
        <ul>
          <li>
            <code>content-box</code> (default) - Width/height applies to content
            only. Padding and border are added to the total size.
          </li>
          <li>
            <code>border-box</code> - Width/height includes content, padding,
            and border. More intuitive!
          </li>
        </ul>

        <div className="theory-example">
          <h4>Comparison:</h4>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <div>
              <p>
                <strong>content-box (default)</strong>
              </p>
              <div
                style={{
                  width: "200px",
                  height: "100px",
                  padding: "20px",
                  border: "5px solid #667eea",
                  background: "#fee140",
                  boxSizing: "content-box",
                }}
              >
                Total: 250px × 150px
              </div>
              <pre>{`width: 200px;
height: 100px;
padding: 20px;
border: 5px solid;
box-sizing: content-box;
/* Total: 250×150 */`}</pre>
            </div>

            <div>
              <p>
                <strong>border-box (recommended)</strong>
              </p>
              <div
                style={{
                  width: "200px",
                  height: "100px",
                  padding: "20px",
                  border: "5px solid #fa709a",
                  background: "#fee140",
                  boxSizing: "border-box",
                }}
              >
                Total: 200px × 100px
              </div>
              <pre>{`width: 200px;
height: 100px;
padding: 20px;
border: 5px solid;
box-sizing: border-box;
/* Total: 200×100 */`}</pre>
            </div>
          </div>
        </div>

        <div className="theory-tip">
          <strong>💡 Pro Tip:</strong> Most developers use{" "}
          <code>box-sizing: border-box;</code> globally for easier sizing:
          <pre>{`*, *::before, *::after {
  box-sizing: border-box;
}`}</pre>
        </div>
      </section>

      {/* Margin Collapse */}
      <section id="margin-collapse">
        <h3>Margin Collapse</h3>
        <p>
          When vertical margins of two elements meet, they "collapse" into a
          single margin equal to the larger of the two.
        </p>

        <p>
          <strong>When it happens:</strong>
        </p>
        <ul>
          <li>Adjacent sibling elements (vertical margins only)</li>
          <li>Parent and first/last child (under certain conditions)</li>
          <li>Empty blocks</li>
        </ul>

        <p>
          <strong>When it DOESN'T happen:</strong>
        </p>
        <ul>
          <li>Elements with padding or border between them</li>
          <li>Floated or absolutely positioned elements</li>
          <li>Flex or grid containers and their children</li>
          <li>Horizontal margins (they never collapse)</li>
        </ul>

        <div className="theory-example">
          <h4>Margin Collapse Example:</h4>
          <div style={{ background: "#f8f9fa", padding: "20px" }}>
            <div
              style={{
                background: "#667eea",
                color: "white",
                padding: "12px",
                marginBottom: "30px",
              }}
            >
              Box 1 (margin-bottom: 30px)
            </div>
            <div
              style={{
                background: "#fa709a",
                color: "white",
                padding: "12px",
                marginTop: "20px",
              }}
            >
              Box 2 (margin-top: 20px)
            </div>
          </div>
          <p>
            Gap between boxes is <strong>30px</strong> (the larger margin), not
            50px!
          </p>
        </div>

        <div className="theory-tip">
          <strong>💡 Pro Tip:</strong> To prevent margin collapse, use padding
          instead, or add a border/padding to the parent element.
        </div>
      </section>

      {/* Accessibility */}
      <section id="accessibility">
        <h3>Accessibility Notes</h3>
        <ul>
          <li>
            Use readable font sizes when adjusting box sizes so content remains
            legible.
          </li>
          <li>
            Ensure interactive elements keep sufficient hit target size even
            when padding or margin changes.
          </li>
        </ul>
      </section>

      {/* Try this */}
      <section id="try">
        <h3>Try this</h3>
        <ol>
          <li>
            Toggle <code>box-sizing</code> between <code>content-box</code> and{" "}
            <code>border-box</code> and observe layout differences.
          </li>
          <li>
            Create two boxes with different padding/border and see how their
            total sizes change.
          </li>
        </ol>
      </section>

      {/* Best Practices */}
      <section id="best-practices">
        <h3>Best Practices</h3>

        <div className="theory-best-practices">
          <h4>✅ Do:</h4>
          <ul>
            <li>
              Use <code>box-sizing: border-box;</code> globally for predictable
              sizing
            </li>
            <li>
              Use padding for internal spacing, margin for external spacing
            </li>
            <li>
              Use <code>margin: 0 auto;</code> to center block elements
            </li>
            <li>Use shorthand properties when styling all sides equally</li>
            <li>
              Be aware of margin collapse when spacing elements vertically
            </li>
          </ul>

          <h4>❌ Don't:</h4>
          <ul>
            <li>
              Add padding/margin to elements without understanding the box model
            </li>
            <li>
              Forget that padding and border increase element size (with
              content-box)
            </li>
            <li>Use negative margins excessively (can cause layout issues)</li>
            <li>Rely on margin collapse - it can be confusing</li>
          </ul>
        </div>

        <div className="theory-tip">
          <strong>🎯 Real-World Use:</strong> Understanding the box model is
          essential for creating layouts, spacing elements, and building
          responsive designs. It's the foundation of CSS layout!
        </div>
      </section>
    </div>
  );
}
