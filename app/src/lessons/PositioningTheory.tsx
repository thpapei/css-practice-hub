export function PositioningTheory() {
  return (
    <div className="theory-content">
      <h2>CSS Positioning Theory & Reference</h2>

      {/* Table of Contents */}
      <nav className="theory-toc">
        <h3>Contents</h3>
        <ul>
          <li>
            <a href="#what-is-positioning">What is Positioning?</a>
          </li>
          <li>
            <a href="#static">static (default)</a>
          </li>
          <li>
            <a href="#relative">relative</a>
          </li>
          <li>
            <a href="#absolute">absolute</a>
          </li>
          <li>
            <a href="#fixed">fixed</a>
          </li>
          <li>
            <a href="#sticky">sticky</a>
          </li>
          <li>
            <a href="#z-index">z-index</a>
          </li>
          <li>
            <a href="#positioning-context">Positioning Context</a>
          </li>
          <li>
            <a href="#best-practices">Best Practices</a>
          </li>
        </ul>
      </nav>

      {/* What is Positioning */}
      <section id="what-is-positioning">
        <h3>What is Positioning?</h3>
        <p>
          <strong>CSS positioning</strong> controls how elements are placed in
          the document. By default, elements follow the normal document flow,
          but positioning allows you to break out of that flow and place
          elements exactly where you want them.
        </p>
        <p>
          <strong>When to use positioning:</strong>
        </p>
        <ul>
          <li>Tooltips and dropdowns that appear over content</li>
          <li>Fixed navigation bars that stay on screen while scrolling</li>
          <li>Sticky headers that stick to the top when scrolling</li>
          <li>Badges and notifications positioned on buttons/avatars</li>
          <li>Overlays and modals</li>
          <li>Fine-tuning element placement</li>
        </ul>

        <div className="theory-note">
          <strong>💡 Important:</strong> Positioning is powerful but should be
          used thoughtfully. For most layouts, Flexbox or Grid are better
          choices. Use positioning for elements that need to break out of normal
          flow.
        </div>
      </section>

      {/* Static */}
      <section id="static">
        <h3>static (default)</h3>
        <p>
          The default positioning. Elements follow normal document flow. The{" "}
          <code>top</code>, <code>right</code>, <code>bottom</code>,{" "}
          <code>left</code>, and <code>z-index</code> properties have no effect.
        </p>
        <pre>
          {`.element {
  position: static;  /* Default value */
}`}
        </pre>

        <div className="theory-example">
          <h4>Visual Example</h4>
          <div
            style={{
              padding: "20px",
              background: "#f8f9fa",
              borderRadius: "8px",
            }}
          >
            <div
              style={{
                padding: "16px",
                background: "#667eea",
                color: "white",
                borderRadius: "6px",
                marginBottom: "12px",
              }}
            >
              Box 1 (static)
            </div>
            <div
              style={{
                padding: "16px",
                background: "#fa709a",
                color: "white",
                borderRadius: "6px",
                marginBottom: "12px",
              }}
            >
              Box 2 (static)
            </div>
            <div
              style={{
                padding: "16px",
                background: "#fee140",
                borderRadius: "6px",
              }}
            >
              Box 3 (static)
            </div>
          </div>
          <p style={{ fontSize: "14px", color: "#666", marginTop: "8px" }}>
            All boxes follow normal document flow, stacking vertically.
          </p>
        </div>
      </section>

      {/* Relative */}
      <section id="relative">
        <h3>relative</h3>
        <p>
          Element is positioned relative to its <strong>normal position</strong>
          . Using <code>top</code>, <code>right</code>, <code>bottom</code>, or{" "}
          <code>left</code> will offset it from where it would normally be.
        </p>
        <ul>
          <li>
            Element still occupies its original space in the document flow
          </li>
          <li>Other elements are not affected by the offset</li>
          <li>
            Creates a positioning context for absolutely positioned children
          </li>
        </ul>

        <div className="theory-example">
          <h4>Visual Example</h4>
          <div
            style={{
              padding: "20px",
              background: "#f8f9fa",
              borderRadius: "8px",
            }}
          >
            <div
              style={{
                padding: "16px",
                background: "#667eea",
                color: "white",
                borderRadius: "6px",
                marginBottom: "12px",
              }}
            >
              Box 1 (static)
            </div>
            <div
              style={{
                position: "relative",
                top: "20px",
                left: "40px",
                padding: "16px",
                background: "#fa709a",
                color: "white",
                borderRadius: "6px",
                marginBottom: "12px",
              }}
            >
              Box 2 (relative, top: 20px, left: 40px)
            </div>
            <div
              style={{
                padding: "16px",
                background: "#fee140",
                borderRadius: "6px",
              }}
            >
              Box 3 (static)
            </div>
          </div>
          <p style={{ fontSize: "14px", color: "#666", marginTop: "8px" }}>
            Box 2 is offset, but its original space is still reserved. Box 3
            doesn't move up.
          </p>
        </div>

        <pre>
          {`.offset-element {
  position: relative;
  top: 20px;     /* Move down 20px */
  left: 40px;    /* Move right 40px */
}`}
        </pre>
      </section>

      {/* Absolute */}
      <section id="absolute">
        <h3>absolute</h3>
        <p>
          Element is removed from normal document flow and positioned relative
          to its nearest <strong>positioned ancestor</strong> (any ancestor with{" "}
          <code>position</code> other than <code>static</code>).
        </p>
        <ul>
          <li>Does NOT occupy space in document flow</li>
          <li>Other elements behave as if it doesn't exist</li>
          <li>
            Positioned relative to nearest positioned ancestor, or{" "}
            <code>&lt;html&gt;</code> if none exists
          </li>
          <li>
            Can use <code>top</code>, <code>right</code>, <code>bottom</code>,{" "}
            <code>left</code> to position
          </li>
        </ul>

        <div className="theory-example">
          <h4>Visual Example</h4>
          <div
            style={{
              position: "relative",
              padding: "60px 20px 20px",
              background: "#f8f9fa",
              borderRadius: "8px",
              border: "2px dashed #667eea",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                color: "#667eea",
                marginBottom: "12px",
              }}
            >
              Parent (position: relative)
            </div>
            <div
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                padding: "8px 16px",
                background: "#fa709a",
                color: "white",
                borderRadius: "6px",
                fontSize: "14px",
              }}
            >
              Badge (absolute)
            </div>
            <div
              style={{
                padding: "16px",
                background: "#667eea",
                color: "white",
                borderRadius: "6px",
                marginBottom: "12px",
              }}
            >
              Box 1
            </div>
            <div
              style={{
                padding: "16px",
                background: "#667eea",
                color: "white",
                borderRadius: "6px",
              }}
            >
              Box 2
            </div>
          </div>
          <p style={{ fontSize: "14px", color: "#666", marginTop: "8px" }}>
            The pink badge is positioned absolutely relative to the parent
            container.
          </p>
        </div>

        <pre>
          {`.container {
  position: relative;  /* Creates positioning context */
}

.badge {
  position: absolute;
  top: 10px;          /* 10px from top of container */
  right: 10px;        /* 10px from right of container */
}`}
        </pre>

        <div className="theory-note">
          <strong>💡 Pro Tip:</strong> Common pattern is to set{" "}
          <code>position: relative</code> on the parent and{" "}
          <code>position: absolute</code> on the child you want to position.
        </div>
      </section>

      {/* Fixed */}
      <section id="fixed">
        <h3>fixed</h3>
        <p>
          Element is removed from normal flow and positioned relative to the{" "}
          <strong>viewport</strong>. It stays in the same position even when
          scrolling.
        </p>
        <ul>
          <li>Does NOT occupy space in document flow</li>
          <li>Always positioned relative to the viewport, not any ancestor</li>
          <li>Stays in place when scrolling (common for headers/footers)</li>
          <li>
            Use <code>top</code>, <code>right</code>, <code>bottom</code>,{" "}
            <code>left</code> to position
          </li>
        </ul>

        <div className="theory-example">
          <h4>Common Use Cases</h4>
          <pre>
            {`/* Fixed navigation bar */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

/* Fixed floating button */
.fab {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

/* Fixed overlay */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}`}
          </pre>
        </div>

        <div className="theory-note">
          <strong>⚠️ Note:</strong> Fixed elements can cover content underneath.
          Add padding to the body or container to account for fixed headers.
        </div>
      </section>

      {/* Sticky */}
      <section id="sticky">
        <h3>sticky</h3>
        <p>
          A hybrid of relative and fixed. Element is treated as{" "}
          <code>relative</code> until it crosses a specified threshold (via{" "}
          <code>top</code>, <code>right</code>, <code>bottom</code>, or{" "}
          <code>left</code>), then it becomes <code>fixed</code>.
        </p>
        <ul>
          <li>Occupies space in document flow (unlike fixed)</li>
          <li>
            "Sticks" when scrolling reaches the threshold (e.g.,{" "}
            <code>top: 0</code>)
          </li>
          <li>Only sticks within its parent container</li>
          <li>Perfect for table headers and section headers</li>
        </ul>

        <div className="theory-example">
          <h4>Example</h4>
          <pre>
            {`.sticky-header {
  position: sticky;
  top: 0;  /* Stick when reaching top of viewport */
  background: white;
  z-index: 10;
}`}
          </pre>
          <p style={{ fontSize: "14px", color: "#666", marginTop: "8px" }}>
            The element scrolls normally until it reaches <code>top: 0</code>,
            then it sticks in place until its parent scrolls out of view.
          </p>
        </div>

        <div className="theory-note">
          <strong>💡 Pro Tip:</strong> Sticky positioning requires a threshold
          value (<code>top</code>, <code>bottom</code>, etc.). Without it,
          sticky won't work!
        </div>
      </section>

      {/* z-index */}
      <section id="z-index">
        <h3>z-index</h3>
        <p>
          Controls the stacking order of positioned elements. Higher values
          appear in front of lower values.
        </p>
        <ul>
          <li>
            Only works on <strong>positioned elements</strong> (not static)
          </li>
          <li>
            Default value is <code>auto</code> (same as 0)
          </li>
          <li>Can be negative (element appears behind)</li>
          <li>Creates stacking contexts</li>
        </ul>

        <div className="theory-example">
          <h4>Visual Example</h4>
          <div
            style={{
              position: "relative",
              padding: "20px",
              background: "#f8f9fa",
              borderRadius: "8px",
              height: "200px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                width: "150px",
                height: "100px",
                padding: "16px",
                background: "#667eea",
                color: "white",
                borderRadius: "6px",
                zIndex: 1,
              }}
            >
              z-index: 1
            </div>
            <div
              style={{
                position: "absolute",
                top: "60px",
                left: "80px",
                width: "150px",
                height: "100px",
                padding: "16px",
                background: "#fa709a",
                color: "white",
                borderRadius: "6px",
                zIndex: 3,
              }}
            >
              z-index: 3
            </div>
            <div
              style={{
                position: "absolute",
                top: "100px",
                left: "140px",
                width: "150px",
                height: "100px",
                padding: "16px",
                background: "#fee140",
                borderRadius: "6px",
                zIndex: 2,
              }}
            >
              z-index: 2
            </div>
          </div>
          <p style={{ fontSize: "14px", color: "#666", marginTop: "8px" }}>
            Pink (z-index: 3) is on top, then yellow (2), then purple (1).
          </p>
        </div>

        <pre>
          {`.element {
  position: relative;  /* Must be positioned */
  z-index: 10;         /* Higher = closer to viewer */
}`}
        </pre>
      </section>

      {/* Positioning Context */}
      <section id="positioning-context">
        <h3>Positioning Context</h3>
        <p>
          Understanding <strong>positioning context</strong> is crucial for
          using absolute positioning correctly.
        </p>

        <div className="theory-tip">
          <h4>How Absolute Positioning Finds Its Reference:</h4>
          <ol>
            <li>
              Look at the parent element. Is it positioned (relative, absolute,
              fixed, or sticky)?
            </li>
            <li>If yes, position relative to that parent.</li>
            <li>
              If no, keep going up the tree until you find a positioned
              ancestor.
            </li>
            <li>
              If none found, position relative to the <code>&lt;html&gt;</code>{" "}
              element (viewport).
            </li>
          </ol>
        </div>

        <div className="theory-example">
          <h4>Example: Nested Positioning</h4>
          <pre>
            {`<div class="grandparent">           <!-- static -->
  <div class="parent">              <!-- relative ✓ -->
    <div class="child">             <!-- absolute -->
      Positioned relative to .parent
    </div>
  </div>
</div>

.parent {
  position: relative;  /* Creates positioning context */
}

.child {
  position: absolute;
  top: 0;             /* 0px from top of .parent */
  right: 0;           /* 0px from right of .parent */
}`}
          </pre>
        </div>
      </section>

      {/* Best Practices */}
      <section id="best-practices">
        <h3>Best Practices</h3>

        <div className="theory-tip">
          <h4>✅ DO:</h4>
          <ul>
            <li>
              Use <code>position: relative</code> on parents when you need to
              position children absolutely
            </li>
            <li>
              Use <code>position: fixed</code> for navigation bars and floating
              action buttons
            </li>
            <li>
              Use <code>position: sticky</code> for table headers and section
              headers
            </li>
            <li>
              Use <code>position: absolute</code> for badges, tooltips, and
              dropdowns
            </li>
            <li>
              Set explicit <code>z-index</code> values for overlays and modals
              (e.g., 1000+)
            </li>
            <li>
              Add padding to body when using fixed headers to prevent content
              overlap
            </li>
          </ul>

          <h4>❌ DON'T:</h4>
          <ul>
            <li>
              Use positioning for general layout (use Flexbox or Grid instead)
            </li>
            <li>
              Forget that absolute/fixed elements are removed from document flow
            </li>
            <li>
              Use extremely high z-index values without reason (999999 is
              overkill)
            </li>
            <li>
              Forget to set a positioned parent for absolutely positioned
              children
            </li>
            <li>
              Use <code>position: sticky</code> without a threshold value (
              <code>top</code>, <code>bottom</code>, etc.)
            </li>
          </ul>
        </div>

        <div className="theory-example">
          <h4>Common Pattern: Notification Badge</h4>
          <pre>
            {`.button-container {
  position: relative;  /* Create context */
  display: inline-block;
}

.notification-badge {
  position: absolute;
  top: -8px;          /* Slightly outside button */
  right: -8px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: red;
  color: white;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}`}
          </pre>

          <h4>Common Pattern: Modal Overlay</h4>
          <pre>
            {`.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  position: relative;  /* For close button */
  background: white;
  border-radius: 8px;
  padding: 24px;
  max-width: 500px;
  z-index: 1001;
}`}
          </pre>

          <h4>Common Pattern: Sticky Header</h4>
          <pre>
            {`.page-header {
  position: sticky;
  top: 0;
  background: white;
  border-bottom: 1px solid #e9ecef;
  z-index: 100;
  padding: 16px;
}`}
          </pre>
        </div>

        <div className="theory-note">
          <strong>🎯 Summary:</strong>
          <ul>
            <li>
              <code>static</code>: Default, normal flow
            </li>
            <li>
              <code>relative</code>: Offset from normal position, creates
              context
            </li>
            <li>
              <code>absolute</code>: Positioned relative to nearest positioned
              ancestor
            </li>
            <li>
              <code>fixed</code>: Positioned relative to viewport, stays on
              scroll
            </li>
            <li>
              <code>sticky</code>: Relative until threshold, then fixed
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
