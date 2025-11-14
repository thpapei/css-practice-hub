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
import { FlexboxTheory } from "./FlexboxTheory";

const lessons = [
  { id: "ex1", title: "Exercise 1: Basic Flex Container" },
  { id: "ex2", title: "Exercise 2: Flex Direction" },
  { id: "ex3", title: "Exercise 3: Justify Content" },
  { id: "ex4", title: "Exercise 4: Align Items" },
  { id: "ex5", title: "Exercise 5: Perfect Centering" },
  { id: "ex6", title: "Exercise 6: Flex Wrap" },
  { id: "ex7", title: "Exercise 7: Flex Grow" },
  { id: "ex8", title: "Exercise 8: Flex Basis" },
  { id: "ex9", title: "Exercise 9: Align Self" },
  { id: "ex10", title: "Exercise 10: Navigation Bar" },
  { id: "ex11", title: "Exercise 11: Card Layout" },
  { id: "ex12", title: "Exercise 12: Complete Dashboard" },
];

export function Phase2Flexbox() {
  const [currentLesson, setCurrentLesson] = useState<string>("");
  const { isComplete, toggleComplete } = useProgress("phase2-flexbox");

  useEffect(() => {
    document.title = "Phase 2.2 - Flexbox";
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
        title="Phase 2.2: Flexbox — Practical Exercises"
        description="Master one-dimensional layouts with flexible box model through hands-on exercises."
        actions={
          <TheoryModal>
            <FlexboxTheory />
          </TheoryModal>
        }
      />

      <div className="lesson-exercises">
        {/* Exercise 1: Basic Flex Container */}
        <ExerciseCard
          id="ex1"
          title="Basic Flex Container"
          isComplete={isComplete("ex1")}
          onToggleComplete={() => toggleComplete("ex1")}
        >
          <p>
            Create your first flex container! Transform a normal div into a flex
            container that arranges items horizontally.
          </p>

          <ExpectedOutcome description="Items should be arranged in a row with default spacing.">
            <div
              style={{
                display: "flex",
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
                }}
              >
                Item 1
              </div>
              <div
                style={{
                  padding: "16px",
                  background: "#667eea",
                  color: "white",
                  borderRadius: "6px",
                }}
              >
                Item 2
              </div>
              <div
                style={{
                  padding: "16px",
                  background: "#667eea",
                  color: "white",
                  borderRadius: "6px",
                }}
              >
                Item 3
              </div>
            </div>
          </ExpectedOutcome>

          <div className="flex-basic-container">
            <div className="flex-basic-item">Item 1</div>
            <div className="flex-basic-item">Item 2</div>
            <div className="flex-basic-item">Item 3</div>
          </div>
        </ExerciseCard>

        {/* Exercise 2: Flex Direction */}
        <ExerciseCard
          id="ex2"
          title="Flex Direction"
          isComplete={isComplete("ex2")}
          onToggleComplete={() => toggleComplete("ex2")}
        >
          <p>
            Change the main axis direction! Make items flow vertically instead
            of horizontally.
          </p>

          <ExpectedOutcome description="Items should be stacked vertically in a column.">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                padding: "20px",
                background: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  padding: "16px",
                  background: "#fa709a",
                  color: "white",
                  borderRadius: "6px",
                }}
              >
                First
              </div>
              <div
                style={{
                  padding: "16px",
                  background: "#fa709a",
                  color: "white",
                  borderRadius: "6px",
                }}
              >
                Second
              </div>
              <div
                style={{
                  padding: "16px",
                  background: "#fa709a",
                  color: "white",
                  borderRadius: "6px",
                }}
              >
                Third
              </div>
            </div>
          </ExpectedOutcome>

          <div className="flex-direction-container">
            <div className="flex-direction-item">First</div>
            <div className="flex-direction-item">Second</div>
            <div className="flex-direction-item">Third</div>
          </div>
        </ExerciseCard>

        {/* Exercise 3: Justify Content */}
        <ExerciseCard
          id="ex3"
          title="Justify Content"
          isComplete={isComplete("ex3")}
          onToggleComplete={() => toggleComplete("ex3")}
        >
          <p>
            Control spacing along the main axis! Distribute items evenly with
            space between them.
          </p>

          <ExpectedOutcome description="Items should have equal space between them, with no space at the edges.">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "20px",
                background: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  padding: "16px",
                  background: "#fee140",
                  borderRadius: "6px",
                }}
              >
                Left
              </div>
              <div
                style={{
                  padding: "16px",
                  background: "#fee140",
                  borderRadius: "6px",
                }}
              >
                Center
              </div>
              <div
                style={{
                  padding: "16px",
                  background: "#fee140",
                  borderRadius: "6px",
                }}
              >
                Right
              </div>
            </div>
          </ExpectedOutcome>

          <div className="flex-justify-container">
            <div className="flex-justify-item">Left</div>
            <div className="flex-justify-item">Center</div>
            <div className="flex-justify-item">Right</div>
          </div>
        </ExerciseCard>

        {/* Exercise 4: Align Items */}
        <ExerciseCard
          id="ex4"
          title="Align Items"
          isComplete={isComplete("ex4")}
          onToggleComplete={() => toggleComplete("ex4")}
        >
          <p>
            Control alignment on the cross axis! Center items vertically within
            the container.
          </p>

          <ExpectedOutcome description="Items of different heights should be vertically centered.">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "20px",
                background: "#f8f9fa",
                borderRadius: "8px",
                height: "150px",
              }}
            >
              <div
                style={{
                  padding: "12px",
                  background: "#667eea",
                  color: "white",
                  borderRadius: "6px",
                }}
              >
                Short
              </div>
              <div
                style={{
                  padding: "24px",
                  background: "#667eea",
                  color: "white",
                  borderRadius: "6px",
                }}
              >
                Taller Item
              </div>
              <div
                style={{
                  padding: "12px",
                  background: "#667eea",
                  color: "white",
                  borderRadius: "6px",
                }}
              >
                Short
              </div>
            </div>
          </ExpectedOutcome>

          <div className="flex-align-container">
            <div className="flex-align-item-short">Short</div>
            <div className="flex-align-item-tall">Taller Item</div>
            <div className="flex-align-item-short">Short</div>
          </div>
        </ExerciseCard>

        {/* Exercise 5: Perfect Centering */}
        <ExerciseCard
          id="ex5"
          title="Perfect Centering"
          isComplete={isComplete("ex5")}
          onToggleComplete={() => toggleComplete("ex5")}
        >
          <p>
            The classic flexbox trick! Center content both horizontally and
            vertically.
          </p>

          <ExpectedOutcome description="The box should be perfectly centered in both dimensions.">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "200px",
                background: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  padding: "24px",
                  background: "#fa709a",
                  color: "white",
                  borderRadius: "6px",
                }}
              >
                Perfectly Centered!
              </div>
            </div>
          </ExpectedOutcome>

          <div className="flex-center-container">
            <div className="flex-center-box">Perfectly Centered!</div>
          </div>
        </ExerciseCard>

        {/* Exercise 6: Flex Wrap */}
        <ExerciseCard
          id="ex6"
          title="Flex Wrap"
          isComplete={isComplete("ex6")}
          onToggleComplete={() => toggleComplete("ex6")}
        >
          <p>
            Allow items to wrap to new lines! When there's not enough space,
            items should flow to the next row.
          </p>

          <ExpectedOutcome description="Items should wrap to multiple rows instead of overflowing or shrinking.">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                padding: "20px",
                background: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <div
                  key={num}
                  style={{
                    padding: "16px 24px",
                    background: "#667eea",
                    color: "white",
                    borderRadius: "6px",
                  }}
                >
                  Item {num}
                </div>
              ))}
            </div>
          </ExpectedOutcome>

          <div className="flex-wrap-container">
            <div className="flex-wrap-item">Item 1</div>
            <div className="flex-wrap-item">Item 2</div>
            <div className="flex-wrap-item">Item 3</div>
            <div className="flex-wrap-item">Item 4</div>
            <div className="flex-wrap-item">Item 5</div>
            <div className="flex-wrap-item">Item 6</div>
            <div className="flex-wrap-item">Item 7</div>
            <div className="flex-wrap-item">Item 8</div>
          </div>
        </ExerciseCard>

        {/* Exercise 7: Flex Grow */}
        <ExerciseCard
          id="ex7"
          title="Flex Grow"
          isComplete={isComplete("ex7")}
          onToggleComplete={() => toggleComplete("ex7")}
        >
          <p>
            Make items grow to fill available space! The middle item should take
            up all extra space.
          </p>

          <ExpectedOutcome description="The middle item should grow to fill available space while others stay fixed.">
            <div
              style={{
                display: "flex",
                gap: "12px",
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
                }}
              >
                Fixed
              </div>
              <div
                style={{
                  padding: "16px",
                  background: "#fa709a",
                  color: "white",
                  borderRadius: "6px",
                  flexGrow: 1,
                }}
              >
                Grows to Fill Space
              </div>
              <div
                style={{
                  padding: "16px",
                  background: "#667eea",
                  color: "white",
                  borderRadius: "6px",
                }}
              >
                Fixed
              </div>
            </div>
          </ExpectedOutcome>

          <div className="flex-grow-container">
            <div className="flex-grow-fixed">Fixed</div>
            <div className="flex-grow-expand">Grows to Fill Space</div>
            <div className="flex-grow-fixed">Fixed</div>
          </div>
        </ExerciseCard>

        {/* Exercise 8: Flex Basis */}
        <ExerciseCard
          id="ex8"
          title="Flex Basis"
          isComplete={isComplete("ex8")}
          onToggleComplete={() => toggleComplete("ex8")}
        >
          <p>
            Set the initial size of flex items! Create three items with
            different starting widths that grow equally.
          </p>

          <ExpectedOutcome description="Items should start at 100px, 200px, and 150px, then grow to fill space.">
            <div
              style={{
                display: "flex",
                gap: "12px",
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
                  flexBasis: "100px",
                  flexGrow: 1,
                }}
              >
                100px basis
              </div>
              <div
                style={{
                  padding: "16px",
                  background: "#fa709a",
                  color: "white",
                  borderRadius: "6px",
                  flexBasis: "200px",
                  flexGrow: 1,
                }}
              >
                200px basis
              </div>
              <div
                style={{
                  padding: "16px",
                  background: "#fee140",
                  borderRadius: "6px",
                  flexBasis: "150px",
                  flexGrow: 1,
                }}
              >
                150px basis
              </div>
            </div>
          </ExpectedOutcome>

          <div className="flex-basis-container">
            <div className="flex-basis-small">100px basis</div>
            <div className="flex-basis-large">200px basis</div>
            <div className="flex-basis-medium">150px basis</div>
          </div>
        </ExerciseCard>

        {/* Exercise 9: Align Self */}
        <ExerciseCard
          id="ex9"
          title="Align Self"
          isComplete={isComplete("ex9")}
          onToggleComplete={() => toggleComplete("ex9")}
        >
          <p>
            Override alignment for individual items! Position each item
            differently on the cross axis.
          </p>

          <ExpectedOutcome description="First at top, second centered, third at bottom.">
            <div
              style={{
                display: "flex",
                gap: "12px",
                padding: "20px",
                background: "#f8f9fa",
                borderRadius: "8px",
                height: "150px",
              }}
            >
              <div
                style={{
                  padding: "16px",
                  background: "#667eea",
                  color: "white",
                  borderRadius: "6px",
                  alignSelf: "flex-start",
                }}
              >
                Top
              </div>
              <div
                style={{
                  padding: "16px",
                  background: "#fa709a",
                  color: "white",
                  borderRadius: "6px",
                  alignSelf: "center",
                }}
              >
                Center
              </div>
              <div
                style={{
                  padding: "16px",
                  background: "#fee140",
                  borderRadius: "6px",
                  alignSelf: "flex-end",
                }}
              >
                Bottom
              </div>
            </div>
          </ExpectedOutcome>

          <div className="flex-self-container">
            <div className="flex-self-start">Top</div>
            <div className="flex-self-center">Center</div>
            <div className="flex-self-end">Bottom</div>
          </div>
        </ExerciseCard>

        {/* Exercise 10: Navigation Bar */}
        <ExerciseCard
          id="ex10"
          title="Navigation Bar"
          isComplete={isComplete("ex10")}
          onToggleComplete={() => toggleComplete("ex10")}
        >
          <p>
            Build a realistic navigation bar! Logo on the left, menu items on
            the right, all vertically centered.
          </p>

          <ExpectedOutcome description="Logo left, navigation links right, all vertically centered.">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px 24px",
                background: "#667eea",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                MyApp
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  color: "white",
                }}
              >
                <span>Home</span>
                <span>About</span>
                <span>Contact</span>
              </div>
            </div>
          </ExpectedOutcome>

          <div className="flex-navbar">
            <div className="flex-navbar-logo">MyApp</div>
            <div className="flex-navbar-menu">
              <span>Home</span>
              <span>About</span>
              <span>Contact</span>
            </div>
          </div>
        </ExerciseCard>

        {/* Exercise 11: Card Layout */}
        <ExerciseCard
          id="ex11"
          title="Card Layout"
          isComplete={isComplete("ex11")}
          onToggleComplete={() => toggleComplete("ex11")}
        >
          <p>
            Create a responsive card layout! Cards should wrap and grow to fill
            space, with a minimum width of 250px.
          </p>

          <ExpectedOutcome description="Cards wrap to new rows, grow to fill space, minimum 250px width.">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                padding: "20px",
                background: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              {[1, 2, 3, 4].map((num) => (
                <div
                  key={num}
                  style={{
                    flex: "1 1 250px",
                    padding: "20px",
                    background: "#667eea",
                    color: "white",
                    borderRadius: "6px",
                  }}
                >
                  <h3 style={{ margin: "0 0 8px 0" }}>Card {num}</h3>
                  <p style={{ margin: 0, opacity: 0.9 }}>
                    This card grows and shrinks
                  </p>
                </div>
              ))}
            </div>
          </ExpectedOutcome>

          <div className="flex-cards-container">
            <div className="flex-card">
              <h3>Card 1</h3>
              <p>This card grows and shrinks</p>
            </div>
            <div className="flex-card">
              <h3>Card 2</h3>
              <p>This card grows and shrinks</p>
            </div>
            <div className="flex-card">
              <h3>Card 3</h3>
              <p>This card grows and shrinks</p>
            </div>
            <div className="flex-card">
              <h3>Card 4</h3>
              <p>This card grows and shrinks</p>
            </div>
          </div>
        </ExerciseCard>

        {/* Exercise 12: Complete Dashboard */}
        <ExerciseCard
          id="ex12"
          title="Complete Dashboard"
          isComplete={isComplete("ex12")}
          onToggleComplete={() => toggleComplete("ex12")}
        >
          <p>
            Build a complete dashboard layout combining multiple flexbox
            concepts! Header, sidebar, and main content area.
          </p>

          <ExpectedOutcome description="Full dashboard with header, sidebar, and flexible main content.">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "400px",
                background: "#f8f9fa",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px",
                  background: "#667eea",
                  color: "white",
                }}
              >
                <div style={{ fontWeight: "bold" }}>Dashboard</div>
                <div>User Menu</div>
              </div>
              <div style={{ display: "flex", flexGrow: 1 }}>
                <div
                  style={{
                    width: "200px",
                    padding: "20px",
                    background: "#e9ecef",
                  }}
                >
                  <div style={{ marginBottom: "12px" }}>📊 Analytics</div>
                  <div style={{ marginBottom: "12px" }}>⚙️ Settings</div>
                  <div>👤 Profile</div>
                </div>
                <div
                  style={{
                    flexGrow: 1,
                    padding: "20px",
                  }}
                >
                  <h2 style={{ marginTop: 0 }}>Main Content</h2>
                  <p>Content grows to fill available space</p>
                </div>
              </div>
            </div>
          </ExpectedOutcome>

          <div className="flex-dashboard">
            <div className="flex-dashboard-header">
              <div className="flex-dashboard-logo">Dashboard</div>
              <div className="flex-dashboard-user">User Menu</div>
            </div>
            <div className="flex-dashboard-body">
              <div className="flex-dashboard-sidebar">
                <div>📊 Analytics</div>
                <div>⚙️ Settings</div>
                <div>👤 Profile</div>
              </div>
              <div className="flex-dashboard-main">
                <h2>Main Content</h2>
                <p>Content grows to fill available space</p>
              </div>
            </div>
          </div>
        </ExerciseCard>
      </div>
    </PhaseLayout>
  );
}
