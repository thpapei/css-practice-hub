export default function GridTheory(): JSX.Element {
  return (
    <div className="theory-content">
      <div className="theory-header">
        <h1>CSS Grid Layout</h1>
        <p>Master two-dimensional layouts with CSS Grid - Learn by seeing</p>
      </div>

      <div className="theory-body">
        <nav className="theory-toc">
          <h2>Table of Contents</h2>
          <ul>
            <li>
              <a href="#basics">Grid Basics</a>
            </li>
            <li>
              <a href="#tracks">Tracks & Sizing</a>
            </li>
            <li>
              <a href="#placement">Item Placement</a>
            </li>
            <li>
              <a href="#alignment">Alignment</a>
            </li>
            <li>
              <a href="#areas">Template Areas</a>
            </li>
            <li>
              <a href="#responsive">Responsive Grids</a>
            </li>
            <li>
              <a href="#subgrid">Subgrid</a>
            </li>
            <li>
              <a href="#hybrid">Grid + Flexbox</a>
            </li>
          </ul>
        </nav>

        <section id="basics">
          <h2>Grid Basics</h2>

          <h3>Creating a Grid Container</h3>
          <p>
            Any element can become a grid container with{" "}
            <code>display: grid</code>.
          </p>
          <pre>
            <code>{`.container {
  display: grid;
}`}</code>
          </pre>

          <h3>Defining Columns & Rows</h3>
          <pre>
            <code>{`.grid {
  display: grid;
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
}`}</code>
          </pre>

          <div className="visual-example">
            <p className="example-label">
              Example: 3 columns (fixed, flex, flex)
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "150px 1fr 1fr",
                gap: "12px",
                padding: "20px",
                background: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  background: "#fa709a",
                  padding: "20px",
                  color: "white",
                  borderRadius: "6px",
                  textAlign: "center",
                }}
              >
                150px
              </div>
              <div
                style={{
                  background: "#fee140",
                  padding: "20px",
                  color: "#333",
                  borderRadius: "6px",
                  textAlign: "center",
                }}
              >
                1fr
              </div>
              <div
                style={{
                  background: "#fee140",
                  padding: "20px",
                  color: "#333",
                  borderRadius: "6px",
                  textAlign: "center",
                }}
              >
                1fr
              </div>
            </div>
          </div>

          <div className="info-box">
            <p>
              <strong>fr unit:</strong> Represents a fraction of available space
            </p>
          </div>
        </section>

        <section id="tracks">
          <h2>Tracks & Sizing</h2>

          <h3>repeat() Function</h3>
          <pre>
            <code>{`grid-template-columns: repeat(4, 1fr);`}</code>
          </pre>

          <div className="visual-example">
            <p className="example-label">repeat(4, 1fr)</p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "12px",
                padding: "20px",
                background: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  style={{
                    background: "#667eea",
                    padding: "20px",
                    color: "white",
                    borderRadius: "6px",
                    textAlign: "center",
                  }}
                >
                  {i}
                </div>
              ))}
            </div>
          </div>

          <h3>minmax() Function</h3>
          <pre>
            <code>{`grid-template-columns: repeat(3, minmax(200px, 1fr));`}</code>
          </pre>

          <div className="visual-example">
            <p className="example-label">minmax(150px, 1fr)</p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(150px, 1fr))",
                gap: "12px",
                padding: "20px",
                background: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  background: "#fa709a",
                  padding: "20px",
                  color: "white",
                  borderRadius: "6px",
                  textAlign: "center",
                }}
              >
                min 150px
              </div>
              <div
                style={{
                  background: "#fa709a",
                  padding: "20px",
                  color: "white",
                  borderRadius: "6px",
                  textAlign: "center",
                }}
              >
                max 1fr
              </div>
              <div
                style={{
                  background: "#fa709a",
                  padding: "20px",
                  color: "white",
                  borderRadius: "6px",
                  textAlign: "center",
                }}
              >
                flexible!
              </div>
            </div>
          </div>
        </section>

        <section id="placement">
          <h2>Item Placement</h2>

          <h3>Line Numbers & Spanning</h3>
          <pre>
            <code>{`.item {
  grid-column: 1 / 3;  /* columns 1-2 */
  grid-row: 2 / 4;     /* rows 2-3 */
}`}</code>
          </pre>

          <div className="visual-example">
            <p className="example-label">Grid line placement</p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gridTemplateRows: "repeat(3, 80px)",
                gap: "12px",
                padding: "20px",
                background: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  gridColumn: "1 / 3",
                  background: "#fa709a",
                  padding: "20px",
                  color: "white",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
              >
                grid-column: 1 / 3
              </div>
              <div
                style={{
                  background: "#e0e0e0",
                  padding: "20px",
                  borderRadius: "6px",
                }}
              ></div>
              <div
                style={{
                  background: "#e0e0e0",
                  padding: "20px",
                  borderRadius: "6px",
                }}
              ></div>
              <div
                style={{
                  background: "#e0e0e0",
                  padding: "20px",
                  borderRadius: "6px",
                }}
              ></div>
              <div
                style={{
                  gridColumn: "2 / 4",
                  gridRow: "2 / 4",
                  background: "#667eea",
                  padding: "20px",
                  color: "white",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
              >
                cols: 2 / 4<br />
                rows: 2 / 4
              </div>
              <div
                style={{
                  background: "#e0e0e0",
                  padding: "20px",
                  borderRadius: "6px",
                }}
              ></div>
              <div
                style={{
                  background: "#e0e0e0",
                  padding: "20px",
                  borderRadius: "6px",
                }}
              ></div>
            </div>
          </div>
        </section>

        <section id="alignment">
          <h2>Alignment</h2>

          <h3>Justify Items (horizontal)</h3>

          <div className="visual-example">
            <p className="example-label">
              justify-items: start | center | end | stretch
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "20px",
              }}
            >
              {["start", "center", "end", "stretch"].map((align, idx) => (
                <div key={align}>
                  <p
                    style={{
                      fontSize: "0.85em",
                      marginBottom: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    {align}
                  </p>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: "8px",
                      padding: "16px",
                      background: "#f8f9fa",
                      borderRadius: "6px",
                      justifyItems: align as any,
                    }}
                  >
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        style={{
                          background: [
                            "#fa709a",
                            "#667eea",
                            "#fee140",
                            "#27ae60",
                          ][idx],
                          padding: "12px 20px",
                          color: idx === 2 ? "#333" : "white",
                          borderRadius: "4px",
                          fontSize: "0.85em",
                          width: align === "stretch" ? "auto" : undefined,
                          textAlign: "center",
                        }}
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="areas">
          <h2>Template Areas</h2>

          <pre>
            <code>{`.grid {
  grid-template-areas:
    "header header header"
    "nav    main   aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
}

.header { grid-area: header; }`}</code>
          </pre>

          <div className="visual-example">
            <p className="example-label">Classic layout with named areas</p>
            <div
              style={{
                display: "grid",
                gridTemplateAreas: `"header header header" "nav main aside" "footer footer footer"`,
                gridTemplateColumns: "150px 1fr 150px",
                gridTemplateRows: "auto 1fr auto",
                gap: "12px",
                padding: "20px",
                background: "#f8f9fa",
                borderRadius: "8px",
                minHeight: "300px",
              }}
            >
              <div
                style={{
                  gridArea: "header",
                  background: "#fa709a",
                  padding: "20px",
                  color: "white",
                  borderRadius: "6px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Header
              </div>
              <div
                style={{
                  gridArea: "nav",
                  background: "#667eea",
                  padding: "20px",
                  color: "white",
                  borderRadius: "6px",
                  fontWeight: "bold",
                }}
              >
                Nav
              </div>
              <div
                style={{
                  gridArea: "main",
                  background: "#fee140",
                  padding: "20px",
                  color: "#333",
                  borderRadius: "6px",
                  fontWeight: "bold",
                }}
              >
                Main
              </div>
              <div
                style={{
                  gridArea: "aside",
                  background: "#667eea",
                  padding: "20px",
                  color: "white",
                  borderRadius: "6px",
                  fontWeight: "bold",
                }}
              >
                Aside
              </div>
              <div
                style={{
                  gridArea: "footer",
                  background: "#fa709a",
                  padding: "20px",
                  color: "white",
                  borderRadius: "6px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Footer
              </div>
            </div>
          </div>
        </section>

        <section id="responsive">
          <h2>Responsive Grids</h2>

          <h3>Auto-Responsive with minmax()</h3>
          <pre>
            <code>{`grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));`}</code>
          </pre>

          <div className="visual-example">
            <p className="example-label">
              Responsive card grid (resize modal!)
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "16px",
                padding: "20px",
                background: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  style={{
                    background: "white",
                    padding: "24px",
                    borderRadius: "8px",
                    border: "2px solid #e0e0e0",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "#fa709a",
                      borderRadius: "50%",
                      margin: "0 auto 12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "1.5em",
                    }}
                  >
                    {i}
                  </div>
                  <h4 style={{ margin: "0 0 8px", color: "#2c3e50" }}>
                    Card {i}
                  </h4>
                  <p style={{ margin: 0, fontSize: "0.85em", color: "#666" }}>
                    Responsive
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="subgrid">
          <h2>Subgrid</h2>

          <h3>Aligning Nested Content</h3>
          <p>
            <code>grid-template-columns: subgrid</code> allows nested grids to
            inherit parent track definitions.
          </p>
          <pre>
            <code>{`.parent {
  display: grid;
  grid-template-columns: 120px 1fr;
}

.child {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: subgrid;  /* Inherits parent columns */
}`}</code>
          </pre>

          <div className="visual-example">
            <p className="example-label">
              Subgrid keeps labels aligned across rows
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr",
                gap: "12px",
                padding: "20px",
                background: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              {[
                { label: "Name", value: "John Doe" },
                { label: "Email", value: "john@example.com" },
                { label: "Role", value: "Developer" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "subgrid",
                    gridColumn: "1 / -1",
                    gap: "12px",
                    background: "white",
                    padding: "12px",
                    borderRadius: "6px",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      background: "#667eea",
                      color: "white",
                      padding: "8px 12px",
                      borderRadius: "4px",
                      fontWeight: "600",
                      fontSize: "0.9em",
                      textAlign: "right",
                    }}
                  >
                    {item.label}
                  </div>
                  <div style={{ color: "#2c3e50", fontWeight: "500" }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="info-box" style={{ marginTop: "1rem" }}>
            <p>
              <strong>Browser support:</strong> Subgrid is supported in modern
              browsers (Chrome 117+, Firefox, Safari).
            </p>
          </div>
        </section>

        <section id="hybrid">
          <h2>Grid + Flexbox Hybrid</h2>

          <h3>Best of Both Worlds</h3>
          <p>
            Use Grid for page-level 2D layouts, Flexbox for component-level 1D
            alignment.
          </p>
          <pre>
            <code>{`.layout {
  display: grid;  /* 2D page structure */
  grid-template-areas:
    "header header"
    "sidebar main";
}

.header {
  display: flex;  /* 1D component alignment */
  justify-content: space-between;
  align-items: center;
}`}</code>
          </pre>

          <div className="visual-example">
            <p className="example-label">Dashboard layout pattern</p>
            <div
              style={{
                display: "grid",
                gridTemplateAreas: '"header header" "sidebar main"',
                gridTemplateColumns: "180px 1fr",
                gridTemplateRows: "auto 1fr",
                gap: "12px",
                padding: "20px",
                background: "#f8f9fa",
                borderRadius: "8px",
                minHeight: "300px",
              }}
            >
              <div
                style={{
                  gridArea: "header",
                  background: "white",
                  padding: "12px 16px",
                  borderRadius: "6px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h4 style={{ margin: 0, color: "#2c3e50" }}>Dashboard</h4>
                <div style={{ display: "flex", gap: "8px" }}>
                  <div
                    style={{
                      background: "#667eea",
                      color: "white",
                      padding: "6px 12px",
                      borderRadius: "4px",
                      fontSize: "0.85em",
                    }}
                  >
                    Settings
                  </div>
                  <div
                    style={{
                      background: "#667eea",
                      color: "white",
                      padding: "6px 12px",
                      borderRadius: "4px",
                      fontSize: "0.85em",
                    }}
                  >
                    Logout
                  </div>
                </div>
              </div>
              <div
                style={{
                  gridArea: "sidebar",
                  background: "white",
                  padding: "16px",
                  borderRadius: "6px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {["Home", "Profile", "Settings"].map((link) => (
                  <div
                    key={link}
                    style={{
                      padding: "8px 12px",
                      borderRadius: "4px",
                      color: "#2c3e50",
                      fontSize: "0.9em",
                    }}
                  >
                    {link}
                  </div>
                ))}
              </div>
              <div
                style={{
                  gridArea: "main",
                  background: "white",
                  padding: "16px",
                  borderRadius: "6px",
                }}
              >
                <div
                  style={{
                    background: "#f8f9fa",
                    borderRadius: "6px",
                    padding: "12px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "8px",
                    }}
                  >
                    <h5 style={{ margin: 0, color: "#2c3e50" }}>Card</h5>
                    <span
                      style={{
                        background: "#fa709a",
                        color: "white",
                        padding: "4px 10px",
                        borderRadius: "10px",
                        fontSize: "0.8em",
                      }}
                    >
                      New
                    </span>
                  </div>
                  <p style={{ margin: 0, color: "#666", fontSize: "0.9em" }}>
                    Grid for layout, Flexbox for internals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="warning-box">
          <h4>💡 Best Practices</h4>
          <ul>
            <li>Use Grid for two-dimensional layouts</li>
            <li>Prefer fr units over percentages</li>
            <li>Use gap instead of margins</li>
            <li>Named areas make layouts readable</li>
            <li>Combine minmax() with auto-fit for responsive grids</li>
          </ul>
        </div>

        <div className="info-box" style={{ marginTop: "2rem" }}>
          <h4>🎯 Pro Tip</h4>
          <p>Use browser DevTools grid overlay to visualize your grid lines!</p>
        </div>
      </div>
    </div>
  );
}
