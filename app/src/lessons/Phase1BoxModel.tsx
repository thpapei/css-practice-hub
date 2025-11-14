import { useState } from "react";
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
import { BoxModelTheory } from "./BoxModelTheory";

const lessons = [
  { id: "ex1", title: "Exercise 1: Understanding Padding" },
  { id: "ex2", title: "Exercise 2: Padding Shorthand" },
  { id: "ex3", title: "Exercise 3: Border Basics" },
  { id: "ex4", title: "Exercise 4: Border Styles" },
  { id: "ex5", title: "Exercise 5: Individual Borders" },
  { id: "ex6", title: "Exercise 6: Margin Basics" },
  { id: "ex7", title: "Exercise 7: Centering with Margin Auto" },
  { id: "ex8", title: "Exercise 8: Box-Sizing" },
  { id: "ex9", title: "Exercise 9: Margin Collapse" },
  { id: "ex10", title: "Exercise 10: Complete Box Model" },
];

export function Phase1BoxModel() {
  const { isComplete, toggleComplete } = useProgress("phase1-boxmodel");
  const [currentLesson, setCurrentLesson] = useState<string>("ex1");

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
        title="Phase 1.2: Box Model — Practical Exercises"
        description="Learn how content, padding, border, and margin work together to create layouts. Master the foundation of CSS spacing and sizing."
        actions={
          <TheoryModal>
            <BoxModelTheory />
          </TheoryModal>
        }
      />

      <ExerciseList>
        {/* Exercise 1: Understanding Padding */}
        <ExerciseCard
          id="ex1"
          title="Exercise 1: Understanding Padding"
          instructions="Objective: Add padding to create space inside the box. Tip: Padding makes the element larger (unless using border-box)."
          isComplete={isComplete("ex1")}
          onToggleComplete={() => toggleComplete("ex1")}
        >
          <ExpectedOutcome description="Box has 30px padding on all sides, creating space between content and border.">
            <div
              style={{
                width: "200px",
                padding: "30px",
                background: "#667eea",
                color: "white",
                border: "2px solid #333",
                textAlign: "center",
              }}
            >
              Padded Content
            </div>
          </ExpectedOutcome>

          <div className="boxmodel-padding-box">Padded Content</div>
        </ExerciseCard>

        {/* Exercise 2: Padding Shorthand */}
        <ExerciseCard
          id="ex2"
          title="Exercise 2: Padding Shorthand"
          instructions="Objective: Use padding shorthand to set different values for vertical and horizontal padding."
          isComplete={isComplete("ex2")}
          onToggleComplete={() => toggleComplete("ex2")}
        >
          <ExpectedOutcome description="Box has 20px vertical padding and 40px horizontal padding.">
            <div
              style={{
                display: "inline-block",
                padding: "20px 40px",
                background: "#fa709a",
                color: "white",
                border: "2px solid #333",
                textAlign: "center",
              }}
            >
              Different Padding
            </div>
          </ExpectedOutcome>

          <div className="boxmodel-padding-shorthand">Different Padding</div>
        </ExerciseCard>

        {/* Exercise 3: Border Basics */}
        <ExerciseCard
          id="ex3"
          title="Exercise 3: Border Basics"
          instructions="Objective: Add a solid border with specific width and color."
          isComplete={isComplete("ex3")}
          onToggleComplete={() => toggleComplete("ex3")}
        >
          <ExpectedOutcome description="Box has a 3px solid purple border.">
            <div
              style={{
                width: "200px",
                padding: "20px",
                background: "white",
                border: "3px solid #667eea",
                textAlign: "center",
              }}
            >
              Bordered Box
            </div>
          </ExpectedOutcome>

          <div className="boxmodel-border-basic">Bordered Box</div>
        </ExerciseCard>

        {/* Exercise 4: Border Styles */}
        <ExerciseCard
          id="ex4"
          title="Exercise 4: Border Styles"
          instructions="Objective: Experiment with different border styles (dashed, dotted, double)."
          isComplete={isComplete("ex4")}
          onToggleComplete={() => toggleComplete("ex4")}
        >
          <ExpectedOutcome description="Three boxes showing different border styles: dashed, dotted, and double.">
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <div
                style={{
                  padding: "16px",
                  background: "white",
                  border: "3px dashed #667eea",
                  textAlign: "center",
                }}
              >
                Dashed
              </div>
              <div
                style={{
                  padding: "16px",
                  background: "white",
                  border: "3px dotted #fa709a",
                  textAlign: "center",
                }}
              >
                Dotted
              </div>
              <div
                style={{
                  padding: "16px",
                  background: "white",
                  border: "4px double #667eea",
                  textAlign: "center",
                }}
              >
                Double
              </div>
            </div>
          </ExpectedOutcome>

          <div className="boxmodel-border-styles">
            <div className="boxmodel-dashed">Dashed</div>
            <div className="boxmodel-dotted">Dotted</div>
            <div className="boxmodel-double">Double</div>
          </div>
        </ExerciseCard>

        {/* Exercise 5: Individual Borders */}
        <ExerciseCard
          id="ex5"
          title="Exercise 5: Individual Borders"
          instructions="Objective: Style each border side differently using border-top, border-right, etc."
          isComplete={isComplete("ex5")}
          onToggleComplete={() => toggleComplete("ex5")}
        >
          <ExpectedOutcome description="Box has different border styles on each side: solid top, dashed right, dotted bottom, double left.">
            <div
              style={{
                width: "200px",
                padding: "24px",
                background: "white",
                borderTop: "3px solid #667eea",
                borderRight: "3px dashed #fa709a",
                borderBottom: "3px dotted #667eea",
                borderLeft: "4px double #fa709a",
                textAlign: "center",
              }}
            >
              Mixed Borders
            </div>
          </ExpectedOutcome>

          <div className="boxmodel-individual-borders">Mixed Borders</div>
        </ExerciseCard>

        {/* Exercise 6: Margin Basics */}
        <ExerciseCard
          id="ex6"
          title="Exercise 6: Margin Basics"
          instructions="Objective: Add margin to create space around the box, separating it from other elements."
          isComplete={isComplete("ex6")}
          onToggleComplete={() => toggleComplete("ex6")}
        >
          <ExpectedOutcome description="Box has 40px margin on all sides, creating space around it.">
            <div style={{ background: "#f8f9fa", padding: "10px" }}>
              <div
                style={{
                  width: "200px",
                  margin: "40px",
                  padding: "20px",
                  background: "#667eea",
                  color: "white",
                  textAlign: "center",
                }}
              >
                With Margin
              </div>
            </div>
          </ExpectedOutcome>

          <div className="boxmodel-margin-container">
            <div className="boxmodel-margin-box">With Margin</div>
          </div>
        </ExerciseCard>

        {/* Exercise 7: Centering with Margin Auto */}
        <ExerciseCard
          id="ex7"
          title="Exercise 7: Centering with Margin Auto"
          instructions="Objective: Use margin: 0 auto to center a block element horizontally."
          isComplete={isComplete("ex7")}
          onToggleComplete={() => toggleComplete("ex7")}
        >
          <ExpectedOutcome description="Box is centered horizontally using margin: 0 auto.">
            <div
              style={{
                width: "250px",
                margin: "0 auto",
                padding: "20px",
                background: "#fa709a",
                color: "white",
                textAlign: "center",
                border: "2px solid #333",
              }}
            >
              Centered Box
            </div>
          </ExpectedOutcome>

          <div className="boxmodel-centered">Centered Box</div>
        </ExerciseCard>

        {/* Exercise 8: Box-Sizing */}
        <ExerciseCard
          id="ex8"
          title="Exercise 8: Box-Sizing"
          instructions="Objective: Compare content-box vs border-box and understand how box-sizing affects total element size."
          isComplete={isComplete("ex8")}
          onToggleComplete={() => toggleComplete("ex8")}
        >
          <ExpectedOutcome description="Two 200px boxes: content-box expands beyond 200px, border-box stays exactly 200px.">
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              <div>
                <p>
                  <strong>content-box</strong> (expands)
                </p>
                <div
                  style={{
                    width: "200px",
                    padding: "20px",
                    border: "5px solid #667eea",
                    background: "#fee140",
                    boxSizing: "content-box",
                  }}
                >
                  Total: 250px wide
                </div>
              </div>
              <div>
                <p>
                  <strong>border-box</strong> (fixed)
                </p>
                <div
                  style={{
                    width: "200px",
                    padding: "20px",
                    border: "5px solid #fa709a",
                    background: "#fee140",
                    boxSizing: "border-box",
                  }}
                >
                  Total: 200px wide
                </div>
              </div>
            </div>
          </ExpectedOutcome>

          <div className="boxmodel-sizing-container">
            <div>
              <p>
                <strong>content-box</strong> (expands)
              </p>
              <div className="boxmodel-content-box">Total: 250px wide</div>
            </div>
            <div>
              <p>
                <strong>border-box</strong> (fixed)
              </p>
              <div className="boxmodel-border-box">Total: 200px wide</div>
            </div>
          </div>
        </ExerciseCard>

        {/* Exercise 9: Margin Collapse */}
        <ExerciseCard
          id="ex9"
          title="Exercise 9: Margin Collapse"
          instructions="Objective: Observe how vertical margins collapse between adjacent elements."
          isComplete={isComplete("ex9")}
          onToggleComplete={() => toggleComplete("ex9")}
        >
          <ExpectedOutcome description="Two boxes with margins that collapse: 30px bottom + 20px top = 30px gap (the larger one).">
            <div style={{ background: "#f8f9fa", padding: "20px" }}>
              <div
                style={{
                  padding: "16px",
                  background: "#667eea",
                  color: "white",
                  marginBottom: "30px",
                }}
              >
                Box 1 (margin-bottom: 30px)
              </div>
              <div
                style={{
                  padding: "16px",
                  background: "#fa709a",
                  color: "white",
                  marginTop: "20px",
                }}
              >
                Box 2 (margin-top: 20px)
              </div>
              <p style={{ marginTop: "16px", fontSize: "14px" }}>
                Gap is 30px (collapsed), not 50px!
              </p>
            </div>
          </ExpectedOutcome>

          <div className="boxmodel-collapse-container">
            <div className="boxmodel-collapse-box1">
              Box 1 (margin-bottom: 30px)
            </div>
            <div className="boxmodel-collapse-box2">
              Box 2 (margin-top: 20px)
            </div>
            <p className="boxmodel-collapse-note">
              Gap is 30px (collapsed), not 50px!
            </p>
          </div>
        </ExerciseCard>

        {/* Exercise 10: Complete Box Model */}
        <ExerciseCard
          id="ex10"
          title="Exercise 10: Complete Box Model"
          instructions="Objective: Create a card using all box model properties together: content, padding, border, and margin."
          isComplete={isComplete("ex10")}
          onToggleComplete={() => toggleComplete("ex10")}
        >
          <ExpectedOutcome description="A complete card with content, padding, border, and margin creating a well-spaced design.">
            <div
              style={{
                maxWidth: "300px",
                margin: "20px auto",
                padding: "24px",
                border: "3px solid #667eea",
                borderRadius: "8px",
                background: "white",
                boxSizing: "border-box",
              }}
            >
              <h4 style={{ margin: "0 0 12px 0", color: "#667eea" }}>
                Profile Card
              </h4>
              <p style={{ margin: "0 0 16px 0", color: "#666" }}>
                This card uses padding for internal spacing, border for visual
                separation, and margin for external spacing.
              </p>
              <div
                style={{
                  padding: "12px",
                  background: "#f8f9fa",
                  borderRadius: "4px",
                }}
              >
                Complete Box Model
              </div>
            </div>
          </ExpectedOutcome>

          <div className="boxmodel-complete-card">
            <h4 className="boxmodel-card-title">Profile Card</h4>
            <p className="boxmodel-card-text">
              This card uses padding for internal spacing, border for visual
              separation, and margin for external spacing.
            </p>
            <div className="boxmodel-card-footer">Complete Box Model</div>
          </div>
        </ExerciseCard>
      </ExerciseList>
    </PhaseLayout>
  );
}
