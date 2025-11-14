import { useEffect, useState } from "react";
import {
  ExerciseCard,
  ExpectedOutcome,
  LessonSidebar,
  PageHeader,
  PhaseLayout,
  TheoryModal,
} from "../components";
import { useProgress } from "../hooks/useProgress";
import { PositioningTheory } from "./PositioningTheory";

const lessons = [
  { id: "ex1", title: "Exercise 1: Relative Positioning" },
  { id: "ex2", title: "Exercise 2: Absolute Positioning" },
  { id: "ex3", title: "Exercise 3: Positioning Context" },
  { id: "ex4", title: "Exercise 4: Centering with Absolute" },
  { id: "ex5", title: "Exercise 5: Notification Badge" },
  { id: "ex6", title: "Exercise 6: Fixed Navigation" },
  { id: "ex7", title: "Exercise 7: Sticky Header" },
  { id: "ex8", title: "Exercise 8: Z-Index Layering" },
  { id: "ex9", title: "Exercise 9: Dropdown Menu" },
  { id: "ex10", title: "Exercise 10: Tooltip" },
  { id: "ex11", title: "Exercise 11: Modal Overlay" },
  { id: "ex12", title: "Exercise 12: Complete Card with Badge" },
];

export function Phase2Positioning() {
  const [currentLesson, setCurrentLesson] = useState<string>("");
  const { isComplete, toggleComplete } = useProgress("phase2-positioning");

  useEffect(() => {
    document.title = "Phase 2.1 - Positioning";
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
        title="Phase 2.1: CSS Positioning — Practical Exercises"
        description="Master element positioning from relative offsets to fixed headers and sticky sections."
        actions={
          <TheoryModal>
            <PositioningTheory />
          </TheoryModal>
        }
      />

      <div className="lesson-exercises">
        {/* Exercise 1: Relative Positioning */}
        <ExerciseCard
          id="ex1"
          title="Relative Positioning"
          isComplete={isComplete("ex1")}
          onToggleComplete={() => toggleComplete("ex1")}
        >
          <p>
            Move an element relative to its normal position. The pink box should
            move down 20px and right 30px from where it would normally be.
          </p>

          <ExpectedOutcome description="Pink box should be offset down and right, but space remains where it was.">
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
                Box 1
              </div>
              <div
                style={{
                  position: "relative",
                  top: "20px",
                  left: "30px",
                  padding: "16px",
                  background: "#fa709a",
                  color: "white",
                  borderRadius: "6px",
                  marginBottom: "12px",
                }}
              >
                Box 2 (Moved)
              </div>
              <div
                style={{
                  padding: "16px",
                  background: "#667eea",
                  color: "white",
                  borderRadius: "6px",
                }}
              >
                Box 3
              </div>
            </div>
          </ExpectedOutcome>

          <div className="pos-relative-container">
            <div className="pos-relative-box1">Box 1</div>
            <div className="pos-relative-box2">Box 2 (Moved)</div>
            <div className="pos-relative-box3">Box 3</div>
          </div>
        </ExerciseCard>

        {/* Exercise 2: Absolute Positioning */}
        <ExerciseCard
          id="ex2"
          title="Absolute Positioning"
          isComplete={isComplete("ex2")}
          onToggleComplete={() => toggleComplete("ex2")}
        >
          <p>
            Position the badge absolutely in the top-right corner of the
            container. It should be 10px from the top and 10px from the right.
          </p>

          <ExpectedOutcome description="Badge should be in the top-right corner of the container.">
            <div
              style={{
                position: "relative",
                padding: "20px",
                background: "#f8f9fa",
                borderRadius: "8px",
                border: "2px dashed #667eea",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  padding: "6px 12px",
                  background: "#fa709a",
                  color: "white",
                  borderRadius: "4px",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                NEW
              </div>
              <p style={{ margin: 0 }}>Container content here</p>
            </div>
          </ExpectedOutcome>

          <div className="pos-absolute-container">
            <div className="pos-absolute-badge">NEW</div>
            <p>Container content here</p>
          </div>
        </ExerciseCard>

        {/* Exercise 3: Positioning Context */}
        <ExerciseCard
          id="ex3"
          title="Positioning Context"
          isComplete={isComplete("ex3")}
          onToggleComplete={() => toggleComplete("ex3")}
        >
          <p>
            Create a positioning context! Make the parent container a
            positioning context so the absolutely positioned child is positioned
            relative to it, not the viewport.
          </p>

          <ExpectedOutcome description="Badge positioned relative to the blue card, not the page.">
            <div
              style={{
                position: "relative",
                padding: "24px",
                background: "#667eea",
                color: "white",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-8px",
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "#fa709a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                5
              </div>
              <h3 style={{ margin: "0 0 8px 0" }}>Card Title</h3>
              <p style={{ margin: 0, opacity: 0.9 }}>Card content</p>
            </div>
          </ExpectedOutcome>

          <div className="pos-context-card">
            <div className="pos-context-badge">5</div>
            <h3>Card Title</h3>
            <p>Card content</p>
          </div>
        </ExerciseCard>

        {/* Exercise 4: Centering with Absolute */}
        <ExerciseCard
          id="ex4"
          title="Centering with Absolute"
          isComplete={isComplete("ex4")}
          onToggleComplete={() => toggleComplete("ex4")}
        >
          <p>
            Center the pink box perfectly in the container using absolute
            positioning and the transform trick.
          </p>

          <ExpectedOutcome description="Pink box should be perfectly centered both horizontally and vertically.">
            <div
              style={{
                position: "relative",
                height: "200px",
                background: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  padding: "20px 32px",
                  background: "#fa709a",
                  color: "white",
                  borderRadius: "6px",
                }}
              >
                Centered!
              </div>
            </div>
          </ExpectedOutcome>

          <div className="pos-center-container">
            <div className="pos-center-box">Centered!</div>
          </div>
        </ExerciseCard>

        {/* Exercise 5: Notification Badge */}
        <ExerciseCard
          id="ex5"
          title="Notification Badge"
          isComplete={isComplete("ex5")}
          onToggleComplete={() => toggleComplete("ex5")}
        >
          <p>
            Create a notification badge that appears on the top-right of a
            button. The badge should be slightly outside the button bounds.
          </p>

          <ExpectedOutcome description="Red badge with number positioned on top-right of button.">
            <div style={{ padding: "20px" }}>
              <div style={{ position: "relative", display: "inline-block" }}>
                <button
                  style={{
                    padding: "12px 24px",
                    background: "#667eea",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                >
                  Messages
                </button>
                <div
                  style={{
                    position: "absolute",
                    top: "-8px",
                    right: "-8px",
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    background: "#e53e3e",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    fontWeight: "bold",
                    border: "2px solid white",
                  }}
                >
                  3
                </div>
              </div>
            </div>
          </ExpectedOutcome>

          <div className="pos-badge-wrapper">
            <button className="pos-badge-button">Messages</button>
            <div className="pos-badge-notification">3</div>
          </div>
        </ExerciseCard>

        {/* Exercise 6: Fixed Navigation */}
        <ExerciseCard
          id="ex6"
          title="Fixed Navigation"
          isComplete={isComplete("ex6")}
          onToggleComplete={() => toggleComplete("ex6")}
        >
          <p>
            Create a fixed navigation bar that stays at the top of the viewport.
            It should span the full width and stay visible when scrolling.
          </p>

          <ExpectedOutcome description="Navigation bar fixed to top, full width, stays on scroll.">
            <div
              style={{
                height: "300px",
                overflow: "auto",
                background: "#f8f9fa",
                borderRadius: "8px",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "sticky",
                  top: 0,
                  padding: "16px",
                  background: "#667eea",
                  color: "white",
                  fontWeight: "bold",
                  zIndex: 10,
                }}
              >
                Fixed Navigation
              </div>
              <div style={{ padding: "20px" }}>
                {Array.from({ length: 20 }, (_, i) => (
                  <p key={i} style={{ margin: "8px 0" }}>
                    Content line {i + 1}
                  </p>
                ))}
              </div>
            </div>
          </ExpectedOutcome>

          <div className="pos-fixed-demo">
            <div className="pos-fixed-nav">Fixed Navigation</div>
            <div className="pos-fixed-content">
              {Array.from({ length: 20 }, (_, i) => (
                <p key={i}>Content line {i + 1}</p>
              ))}
            </div>
          </div>
        </ExerciseCard>

        {/* Exercise 7: Sticky Header */}
        <ExerciseCard
          id="ex7"
          title="Sticky Header"
          isComplete={isComplete("ex7")}
          onToggleComplete={() => toggleComplete("ex7")}
        >
          <p>
            Make the section header sticky so it sticks to the top when
            scrolling through the section content.
          </p>

          <ExpectedOutcome description="Header sticks to top when scrolling, but only within its section.">
            <div
              style={{
                height: "300px",
                overflow: "auto",
                background: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              <div style={{ padding: "20px" }}>
                <div
                  style={{
                    position: "sticky",
                    top: 0,
                    padding: "12px",
                    background: "#fa709a",
                    color: "white",
                    fontWeight: "bold",
                    marginBottom: "12px",
                    zIndex: 5,
                  }}
                >
                  Section Header
                </div>
                {Array.from({ length: 15 }, (_, i) => (
                  <p key={i} style={{ margin: "8px 0" }}>
                    Section content {i + 1}
                  </p>
                ))}
              </div>
            </div>
          </ExpectedOutcome>

          <div className="pos-sticky-demo">
            <div className="pos-sticky-section">
              <div className="pos-sticky-header">Section Header</div>
              {Array.from({ length: 15 }, (_, i) => (
                <p key={i}>Section content {i + 1}</p>
              ))}
            </div>
          </div>
        </ExerciseCard>

        {/* Exercise 8: Z-Index Layering */}
        <ExerciseCard
          id="ex8"
          title="Z-Index Layering"
          isComplete={isComplete("ex8")}
          onToggleComplete={() => toggleComplete("ex8")}
        >
          <p>
            Create three overlapping boxes with different z-index values. Yellow
            should be on top, then pink, then purple.
          </p>

          <ExpectedOutcome description="Three overlapping boxes stacked by z-index: yellow (top), pink (middle), purple (bottom).">
            <div
              style={{
                position: "relative",
                height: "200px",
                background: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "20px",
                  width: "120px",
                  height: "120px",
                  padding: "16px",
                  background: "#667eea",
                  color: "white",
                  borderRadius: "6px",
                  zIndex: 1,
                }}
              >
                Purple (z: 1)
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "60px",
                  left: "80px",
                  width: "120px",
                  height: "120px",
                  padding: "16px",
                  background: "#fa709a",
                  color: "white",
                  borderRadius: "6px",
                  zIndex: 2,
                }}
              >
                Pink (z: 2)
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "100px",
                  left: "140px",
                  width: "120px",
                  height: "120px",
                  padding: "16px",
                  background: "#fee140",
                  borderRadius: "6px",
                  zIndex: 3,
                }}
              >
                Yellow (z: 3)
              </div>
            </div>
          </ExpectedOutcome>

          <div className="pos-zindex-container">
            <div className="pos-zindex-box1">Purple (z: 1)</div>
            <div className="pos-zindex-box2">Pink (z: 2)</div>
            <div className="pos-zindex-box3">Yellow (z: 3)</div>
          </div>
        </ExerciseCard>

        {/* Exercise 9: Dropdown Menu */}
        <ExerciseCard
          id="ex9"
          title="Dropdown Menu"
          isComplete={isComplete("ex9")}
          onToggleComplete={() => toggleComplete("ex9")}
        >
          <p>
            Position a dropdown menu below a button. The menu should be
            absolutely positioned and appear directly below the button.
          </p>

          <ExpectedOutcome description="Dropdown menu positioned directly below button.">
            <div style={{ padding: "20px" }}>
              <div style={{ position: "relative", display: "inline-block" }}>
                <button
                  style={{
                    padding: "12px 24px",
                    background: "#667eea",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                >
                  Menu ▼
                </button>
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    marginTop: "8px",
                    minWidth: "160px",
                    background: "white",
                    border: "1px solid #e9ecef",
                    borderRadius: "6px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    zIndex: 100,
                  }}
                >
                  <div
                    style={{
                      padding: "12px 16px",
                      borderBottom: "1px solid #e9ecef",
                    }}
                  >
                    Option 1
                  </div>
                  <div
                    style={{
                      padding: "12px 16px",
                      borderBottom: "1px solid #e9ecef",
                    }}
                  >
                    Option 2
                  </div>
                  <div style={{ padding: "12px 16px" }}>Option 3</div>
                </div>
              </div>
            </div>
          </ExpectedOutcome>

          <div className="pos-dropdown-wrapper">
            <button className="pos-dropdown-button">Menu ▼</button>
            <div className="pos-dropdown-menu">
              <div className="pos-dropdown-item">Option 1</div>
              <div className="pos-dropdown-item">Option 2</div>
              <div className="pos-dropdown-item">Option 3</div>
            </div>
          </div>
        </ExerciseCard>

        {/* Exercise 10: Tooltip */}
        <ExerciseCard
          id="ex10"
          title="Tooltip"
          isComplete={isComplete("ex10")}
          onToggleComplete={() => toggleComplete("ex10")}
        >
          <p>
            Create a tooltip that appears above a button. Position it absolutely
            and center it horizontally above the button.
          </p>

          <ExpectedOutcome description="Tooltip centered above button with arrow pointing down.">
            <div style={{ padding: "60px 20px 20px" }}>
              <div style={{ position: "relative", display: "inline-block" }}>
                <div
                  style={{
                    position: "absolute",
                    bottom: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    marginBottom: "8px",
                    padding: "8px 12px",
                    background: "#333",
                    color: "white",
                    borderRadius: "4px",
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Click me!
                </div>
                <button
                  style={{
                    padding: "12px 24px",
                    background: "#667eea",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                >
                  Hover Me
                </button>
              </div>
            </div>
          </ExpectedOutcome>

          <div className="pos-tooltip-wrapper">
            <div className="pos-tooltip">Click me!</div>
            <button className="pos-tooltip-button">Hover Me</button>
          </div>
        </ExerciseCard>

        {/* Exercise 11: Modal Overlay */}
        <ExerciseCard
          id="ex11"
          title="Modal Overlay"
          isComplete={isComplete("ex11")}
          onToggleComplete={() => toggleComplete("ex11")}
        >
          <p>
            Create a modal overlay that covers the entire viewport. The overlay
            should be semi-transparent and the modal should be centered.
          </p>

          <ExpectedOutcome description="Full-screen overlay with centered modal.">
            <div
              style={{
                position: "relative",
                height: "300px",
                background: "#f8f9fa",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "rgba(0, 0, 0, 0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1000,
                }}
              >
                <div
                  style={{
                    background: "white",
                    borderRadius: "8px",
                    padding: "24px",
                    maxWidth: "400px",
                    width: "90%",
                  }}
                >
                  <h3 style={{ margin: "0 0 12px 0" }}>Modal Title</h3>
                  <p style={{ margin: "0 0 16px 0" }}>
                    This is a modal dialog centered on the page.
                  </p>
                  <button
                    style={{
                      padding: "8px 16px",
                      background: "#667eea",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </ExpectedOutcome>

          <div className="pos-modal-demo">
            <div className="pos-modal-overlay">
              <div className="pos-modal-content">
                <h3>Modal Title</h3>
                <p>This is a modal dialog centered on the page.</p>
                <button>Close</button>
              </div>
            </div>
          </div>
        </ExerciseCard>

        {/* Exercise 12: Complete Card with Badge */}
        <ExerciseCard
          id="ex12"
          title="Complete Card with Badge"
          isComplete={isComplete("ex12")}
          onToggleComplete={() => toggleComplete("ex12")}
        >
          <p>
            Build a complete card with multiple positioned elements: a "NEW"
            badge in the top-left, a heart icon in the top-right, and proper
            content layout.
          </p>

          <ExpectedOutcome description="Card with NEW badge (top-left) and heart icon (top-right).">
            <div
              style={{
                position: "relative",
                padding: "24px",
                background: "white",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                maxWidth: "300px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  left: "12px",
                  padding: "4px 8px",
                  background: "#fa709a",
                  color: "white",
                  borderRadius: "4px",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                NEW
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "12px",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "#f8f9fa",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
              >
                ♥
              </div>
              <h3 style={{ margin: "24px 0 8px 0" }}>Product Title</h3>
              <p style={{ margin: "0 0 12px 0", color: "#666" }}>
                This is a product description with positioned badges.
              </p>
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#667eea",
                }}
              >
                $99.99
              </div>
            </div>
          </ExpectedOutcome>

          <div className="pos-card">
            <div className="pos-card-badge">NEW</div>
            <div className="pos-card-favorite">♥</div>
            <h3>Product Title</h3>
            <p>This is a product description with positioned badges.</p>
            <div className="pos-card-price">$99.99</div>
          </div>
        </ExerciseCard>
      </div>
    </PhaseLayout>
  );
}
