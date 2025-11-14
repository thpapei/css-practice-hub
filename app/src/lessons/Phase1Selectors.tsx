import { useEffect, useState } from "react";
import {
  ExerciseCard,
  ExerciseList,
  ExpectedOutcome,
  LessonSidebar,
  PageHeader,
  PhaseLayout,
  TheoryModal,
} from "../components";
import { useProgress } from "../hooks/useProgress";
import SelectorsTheory from "./SelectorsTheory";

const lessons = [
  { id: "ex1", title: "Exercise 1: Basic Selectors" },
  { id: "ex2", title: "Exercise 2: Attribute Selectors" },
  { id: "ex3", title: "Exercise 3: Combinators" },
  { id: "ex4", title: "Exercise 4: Pseudo-classes" },
  { id: "ex5", title: "Exercise 5: Pseudo-elements" },
  { id: "ex6", title: "Exercise 6: Specificity Challenge" },
];

export default function Phase1Selectors(): JSX.Element {
  const [currentLesson, setCurrentLesson] = useState<string>("");
  const { isComplete, toggleComplete } = useProgress("phase1-selectors");

  useEffect(() => {
    document.title = "Phase 1.1 - CSS Selectors";
  }, []);

  return (
    <PhaseLayout
      sidebar={
        <LessonSidebar
          lessons={lessons}
          currentLesson={currentLesson}
          onSelectLesson={setCurrentLesson}
        />
      }
    >
      <PageHeader
        title="Phase 1.1: CSS Selectors & Specificity"
        description="Master CSS selectors from basic to advanced specificity. Learn how to target specific elements and understand the cascade."
        actions={
          <TheoryModal>
            <SelectorsTheory />
          </TheoryModal>
        }
      />

      <ExerciseList>
        <ExerciseCard
          id="ex1"
          title="Exercise 1: Basic Selectors"
          instructions="Practice element, class, and ID selectors. Learn when to use each type and understand the universal selector."
          isComplete={isComplete("ex1")}
          onToggleComplete={() => toggleComplete("ex1")}
        >
          <ExpectedOutcome description="The blog post should have proper styling: featured border, formatted meta info, highlighted text, and styled blockquote.">
            <article
              style={{
                padding: "1.5rem",
                background: "white",
                borderRadius: "8px",
                border: "1px solid #e0e0e0",
                borderLeft: "4px solid #fa709a",
              }}
            >
              <h3 style={{ color: "#2c3e50", marginBottom: "0.5rem" }}>
                Understanding CSS Selectors
              </h3>
              <p
                style={{
                  display: "flex",
                  gap: "1rem",
                  color: "#7f8c8d",
                  fontSize: "0.9em",
                  marginBottom: "1rem",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid #ecf0f1",
                }}
              >
                <span style={{ fontWeight: 600 }}>By John Doe</span>
                <time>November 14, 2025</time>
              </p>
              <div>
                <p
                  style={{
                    fontSize: "1.1em",
                    fontWeight: 500,
                    color: "#34495e",
                    marginBottom: "1rem",
                  }}
                >
                  This is an introduction paragraph with special styling.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  Regular paragraph with normal text.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  Another paragraph.{" "}
                  <span
                    style={{
                      background:
                        "linear-gradient(120deg, #fee140 0%, #fa709a 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontWeight: 600,
                    }}
                  >
                    This text should stand out.
                  </span>
                </p>
                <blockquote
                  style={{
                    borderLeft: "4px solid #667eea",
                    paddingLeft: "1rem",
                    margin: "1.5rem 0",
                    fontStyle: "italic",
                    color: "#555",
                  }}
                >
                  <p>
                    "The key to mastering CSS is understanding selectors and
                    specificity."
                  </p>
                  <cite>— CSS Expert</cite>
                </blockquote>
              </div>
            </article>
          </ExpectedOutcome>

          <article className="selectors-blog-post selectors-featured">
            <h3 className="selectors-post-title">
              Understanding CSS Selectors
            </h3>
            <p className="selectors-post-meta">
              <span className="selectors-author">By John Doe</span>
              <time dateTime="2025-11-14">November 14, 2025</time>
            </p>
            <div className="selectors-post-content">
              <p className="selectors-intro">
                This is an introduction paragraph with special styling.
              </p>
              <p>
                Regular paragraph with normal text. CSS selectors are powerful
                tools that allow you to target specific elements on a page.
              </p>
              <p>
                Another paragraph to practice with.{" "}
                <span className="selectors-highlight">
                  This text should stand out.
                </span>
              </p>
              <blockquote>
                <p>
                  "The key to mastering CSS is understanding selectors and
                  specificity."
                </p>
                <cite>— CSS Expert</cite>
              </blockquote>
            </div>
          </article>
        </ExerciseCard>

        <ExerciseCard
          id="ex2"
          title="Exercise 2: Attribute Selectors"
          instructions="Target elements based on their attributes. Practice [attr], [attr=value], [attr^=value], and other attribute selector patterns."
          isComplete={isComplete("ex2")}
          onToggleComplete={() => toggleComplete("ex2")}
        >
          <ExpectedOutcome description="External links, email links, PDF downloads, and disabled inputs should each have distinct styling based on their attributes.">
            <div
              style={{
                padding: "1.5rem",
                background: "#f8f9fa",
                borderRadius: "8px",
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <a
                  href="https://example.com"
                  style={{
                    padding: "0.75rem 1rem",
                    background: "white",
                    borderRadius: "6px",
                    textDecoration: "none",
                    color: "#2c3e50",
                    border: "2px solid #3498db",
                    display: "block",
                  }}
                >
                  External Link (blue border)
                </a>
                <a
                  href="/about"
                  style={{
                    padding: "0.75rem 1rem",
                    background: "white",
                    borderRadius: "6px",
                    textDecoration: "none",
                    color: "#2c3e50",
                    border: "2px solid #27ae60",
                    display: "block",
                  }}
                >
                  Internal Link (green border)
                </a>
                <a
                  href="mailto:test@example.com"
                  style={{
                    padding: "0.75rem 1rem",
                    background: "white",
                    borderRadius: "6px",
                    textDecoration: "none",
                    color: "#2c3e50",
                    border: "2px solid #fa709a",
                    display: "block",
                  }}
                >
                  Email Link (pink border)
                </a>
                <a
                  href="document.pdf"
                  style={{
                    padding: "0.75rem 1rem",
                    background: "white",
                    borderRadius: "6px",
                    textDecoration: "none",
                    color: "#2c3e50",
                    border: "2px solid #fee140",
                    display: "block",
                  }}
                >
                  PDF Download (yellow border)
                </a>
              </div>
            </div>
            <div
              style={{
                padding: "1.5rem",
                background: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              <div style={{ display: "grid", gap: "1rem" }}>
                <input
                  type="text"
                  placeholder="Required field"
                  style={{
                    padding: "0.75rem",
                    border: "2px solid #fa709a",
                    borderRadius: "6px",
                    fontSize: "1em",
                  }}
                />
                <input
                  type="email"
                  placeholder="Email input"
                  style={{
                    padding: "0.75rem",
                    border: "2px solid #e0e0e0",
                    borderRadius: "6px",
                    fontSize: "1em",
                  }}
                />
                <input
                  type="text"
                  placeholder="Disabled"
                  disabled
                  style={{
                    padding: "0.75rem",
                    border: "2px solid #e0e0e0",
                    borderRadius: "6px",
                    fontSize: "1em",
                    background: "#f5f5f5",
                    opacity: 0.6,
                  }}
                />
              </div>
            </div>
          </ExpectedOutcome>

          <div className="selectors-links-demo">
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              External Link
            </a>
            <a href="/about">Internal Link</a>
            <a href="mailto:test@example.com">Email Link</a>
            <a href="document.pdf" download>
              PDF Download
            </a>
            <a href="#top" className="selectors-back-to-top">
              Back to Top
            </a>
          </div>

          <div className="selectors-input-demo">
            <input type="text" placeholder="Text input" required />
            <input type="email" placeholder="Email input" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Disabled" disabled />
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">I agree to terms</label>
          </div>
        </ExerciseCard>

        <ExerciseCard
          id="ex3"
          title="Exercise 3: Combinators"
          instructions="Learn descendant, child (>), adjacent sibling (+), and general sibling (~) combinators to target elements based on their relationships."
          isComplete={isComplete("ex3")}
          onToggleComplete={() => toggleComplete("ex3")}
        >
          <ExpectedOutcome description="Direct children should have different styling than descendants. Adjacent and general siblings should be styled based on their position.">
            <div
              style={{
                padding: "1.5rem",
                background: "#f8f9fa",
                borderRadius: "8px",
                border: "2px dashed #667eea",
                marginBottom: "1rem",
              }}
            >
              <p
                style={{
                  padding: "1rem",
                  marginBottom: "0.5rem",
                  background: "#667eea",
                  color: "white",
                  borderRadius: "6px",
                }}
              >
                Direct child paragraph (blue background)
              </p>
              <div
                style={{
                  padding: "1rem",
                  background: "#e8f4f8",
                  borderRadius: "6px",
                  margin: "0.5rem 0",
                  border: "2px solid #3498db",
                }}
              >
                <p
                  style={{
                    padding: "1rem",
                    marginBottom: "0.5rem",
                    background: "#d4e9f2",
                    borderRadius: "6px",
                    border: "1px solid #3498db",
                  }}
                >
                  Nested paragraph (light blue - descendant)
                </p>
                <p
                  style={{
                    padding: "1rem",
                    marginBottom: "0.5rem",
                    background: "#d4e9f2",
                    borderRadius: "6px",
                    border: "1px solid #3498db",
                  }}
                >
                  Another nested paragraph
                </p>
              </div>
              <p
                style={{
                  padding: "1rem",
                  marginBottom: "0.5rem",
                  background: "#667eea",
                  color: "white",
                  borderRadius: "6px",
                }}
              >
                Second direct child (blue)
              </p>
            </div>
            <div
              style={{
                padding: "1.5rem",
                background: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              <h3 style={{ color: "#2c3e50", marginBottom: "1rem" }}>
                Heading
              </h3>
              <p
                style={{
                  padding: "1rem",
                  marginBottom: "0.5rem",
                  background: "#27ae60",
                  color: "white",
                  borderRadius: "6px",
                }}
              >
                First paragraph after heading (green - adjacent sibling)
              </p>
              <p
                style={{
                  padding: "1rem",
                  marginBottom: "0.5rem",
                  background: "#fa709a",
                  color: "white",
                  borderRadius: "6px",
                }}
              >
                Second paragraph (pink - general sibling)
              </p>
            </div>
          </ExpectedOutcome>

          <div className="selectors-parent">
            <p>Direct child paragraph</p>
            <div className="selectors-child">
              <p>Nested paragraph (descendant)</p>
              <p>Another nested paragraph</p>
            </div>
            <p>Second direct child</p>
            <p>Third direct child</p>
          </div>

          <div className="selectors-sibling-demo">
            <h3>Heading</h3>
            <p>First paragraph after heading (adjacent sibling)</p>
            <p>Second paragraph (general sibling)</p>
            <div>A div element</div>
            <p>Paragraph after div</p>
          </div>
        </ExerciseCard>

        <ExerciseCard
          id="ex4"
          title="Exercise 4: Pseudo-classes"
          instructions="Practice :hover, :focus, :active, :nth-child, :first-child, :last-child, and other pseudo-classes for interactive and structural styling."
          isComplete={isComplete("ex4")}
          onToggleComplete={() => toggleComplete("ex4")}
        >
          <ExpectedOutcome description="Buttons should have hover effects, list items should be styled based on position (first, odd, even), and form inputs should highlight on focus.">
            <div
              style={{
                padding: "1.5rem",
                background: "#f8f9fa",
                borderRadius: "8px",
                marginBottom: "1rem",
              }}
            >
              <div
                style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}
              >
                <button
                  style={{
                    padding: "0.75rem 1.5rem",
                    background: "#667eea",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  Hover Me
                </button>
                <button
                  style={{
                    padding: "0.75rem 1.5rem",
                    background: "#27ae60",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                  }}
                >
                  Active Button
                </button>
                <button
                  disabled
                  style={{
                    padding: "0.75rem 1.5rem",
                    background: "#e0e0e0",
                    color: "#999",
                    border: "none",
                    borderRadius: "6px",
                    opacity: 0.6,
                  }}
                >
                  Disabled
                </button>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li
                  style={{
                    padding: "0.75rem 1rem",
                    marginBottom: "0.5rem",
                    background: "#667eea",
                    color: "white",
                    borderRadius: "6px",
                  }}
                >
                  First item (purple)
                </li>
                <li
                  style={{
                    padding: "0.75rem 1rem",
                    marginBottom: "0.5rem",
                    background: "white",
                    borderRadius: "6px",
                  }}
                >
                  Second item (white)
                </li>
                <li
                  style={{
                    padding: "0.75rem 1rem",
                    marginBottom: "0.5rem",
                    background: "#fee140",
                    borderRadius: "6px",
                  }}
                >
                  Third item (yellow - odd)
                </li>
                <li
                  style={{
                    padding: "0.75rem 1rem",
                    marginBottom: "0.5rem",
                    background: "white",
                    borderRadius: "6px",
                  }}
                >
                  Fourth item (white)
                </li>
                <li
                  style={{
                    padding: "0.75rem 1rem",
                    marginBottom: "0.5rem",
                    background: "#fee140",
                    borderRadius: "6px",
                  }}
                >
                  Fifth item (yellow - odd)
                </li>
              </ul>
            </div>
          </ExpectedOutcome>

          <div className="selectors-button-group">
            <button>Hover Me</button>
            <button className="selectors-active">Active Button</button>
            <button disabled>Disabled</button>
          </div>

          <ul className="selectors-item-list">
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
            <li>Fourth item</li>
            <li>Fifth item</li>
            <li>Sixth item</li>
          </ul>

          <form className="selectors-demo-form">
            <div className="selectors-form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" />
            </div>
            <div className="selectors-form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
          </form>
        </ExerciseCard>

        <ExerciseCard
          id="ex5"
          title="Exercise 5: Pseudo-elements"
          instructions="Use ::before, ::after, ::first-line, and ::first-letter to style specific parts of elements without extra markup."
          isComplete={isComplete("ex5")}
          onToggleComplete={() => toggleComplete("ex5")}
        >
          <ExpectedOutcome description="Drop cap should be large and styled, custom bullet points should use ::before, and quote box should have decorative quotes using ::before and ::after.">
            <div
              style={{
                padding: "1.5rem",
                background: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              <p
                style={{
                  fontSize: "1.1em",
                  lineHeight: 1.6,
                  marginBottom: "1.5rem",
                }}
              >
                <span
                  style={{
                    float: "left",
                    fontSize: "3.5em",
                    lineHeight: 1,
                    marginRight: "0.1em",
                    color: "#667eea",
                    fontWeight: "bold",
                  }}
                >
                  T
                </span>
                his paragraph should have a decorative drop cap at the
                beginning. Pseudo-elements allow us to style specific parts of
                an element without adding extra HTML markup.
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  marginBottom: "1.5rem",
                }}
              >
                <li
                  style={{
                    paddingLeft: "1.5rem",
                    marginBottom: "0.5rem",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      color: "#667eea",
                      fontWeight: "bold",
                    }}
                  >
                    →
                  </span>{" "}
                  Custom bullet point one
                </li>
                <li
                  style={{
                    paddingLeft: "1.5rem",
                    marginBottom: "0.5rem",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      color: "#667eea",
                      fontWeight: "bold",
                    }}
                  >
                    →
                  </span>{" "}
                  Custom bullet point two
                </li>
                <li
                  style={{
                    paddingLeft: "1.5rem",
                    marginBottom: "0.5rem",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      color: "#667eea",
                      fontWeight: "bold",
                    }}
                  >
                    →
                  </span>{" "}
                  Custom bullet point three
                </li>
              </ul>
              <div
                style={{
                  padding: "1.5rem",
                  background: "white",
                  borderRadius: "8px",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "-10px",
                    left: "10px",
                    fontSize: "3em",
                    color: "#fa709a",
                    lineHeight: 1,
                  }}
                >
                  "
                </span>
                <p style={{ margin: 0, paddingTop: "1rem" }}>
                  This box should have decorative quotation marks using ::before
                  and ::after.
                </p>
                <span
                  style={{
                    position: "absolute",
                    bottom: "-10px",
                    right: "10px",
                    fontSize: "3em",
                    color: "#fa709a",
                    lineHeight: 1,
                  }}
                >
                  "
                </span>
              </div>
            </div>
          </ExpectedOutcome>

          <p className="selectors-drop-cap">
            This paragraph should have a decorative drop cap at the beginning.
            Pseudo-elements allow us to style specific parts of an element
            without adding extra HTML markup.
          </p>

          <ul className="selectors-custom-list">
            <li>Custom bullet point one</li>
            <li>Custom bullet point two</li>
            <li>Custom bullet point three</li>
          </ul>

          <div className="selectors-quote-box">
            <p>
              This box should have decorative quotation marks using ::before and
              ::after.
            </p>
          </div>
        </ExerciseCard>

        <ExerciseCard
          id="ex6"
          title="Exercise 6: Specificity Challenge"
          instructions="Understand specificity calculation (0,0,0,0). IDs beat classes, classes beat elements. See how specificity determines which styles apply."
          isComplete={isComplete("ex6")}
          onToggleComplete={() => toggleComplete("ex6")}
        >
          <ExpectedOutcome description="First paragraph should be blue (class selector). Second should be purple (ID beats class). Third should be pink (more specific selector beats single class).">
            <div
              style={{
                padding: "1.5rem",
                background: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              <p
                style={{
                  padding: "1rem",
                  background: "white",
                  borderRadius: "6px",
                  color: "#3498db",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                }}
              >
                This text is blue (class selector - 0,0,1,0)
              </p>
              <p
                style={{
                  padding: "1rem",
                  background: "white",
                  borderRadius: "6px",
                  color: "#667eea",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                }}
              >
                This text is purple (ID selector - 0,1,0,0 beats class)
              </p>
              <p
                style={{
                  padding: "1rem",
                  background: "white",
                  borderRadius: "6px",
                  color: "#fa709a",
                  fontWeight: "bold",
                }}
              >
                This text is pink (.container .text - 0,0,2,0 beats 0,0,1,0)
              </p>
            </div>
          </ExpectedOutcome>

          <p className="selectors-text">What color will this text be?</p>
          <p className="selectors-text" id="selectors-special">
            What about this one?
          </p>
          <div className="selectors-container">
            <p className="selectors-text">And this nested one?</p>
          </div>
        </ExerciseCard>
      </ExerciseList>
    </PhaseLayout>
  );
}
