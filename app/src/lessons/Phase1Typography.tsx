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
import { TypographyTheory } from "./TypographyTheory";

const lessons = [
  { id: "ex1", title: "Exercise 1: Font Family" },
  { id: "ex2", title: "Exercise 2: Font Size" },
  { id: "ex3", title: "Exercise 3: Font Weight" },
  { id: "ex4", title: "Exercise 4: Font Style" },
  { id: "ex5", title: "Exercise 5: Line Height" },
  { id: "ex6", title: "Exercise 6: Text Alignment" },
  { id: "ex7", title: "Exercise 7: Text Decoration" },
  { id: "ex8", title: "Exercise 8: Text Transform" },
  { id: "ex9", title: "Exercise 9: Letter Spacing" },
  { id: "ex10", title: "Exercise 10: Complete Typography" },
];

export function Phase1Typography() {
  const { isComplete, toggleComplete } = useProgress("phase1-typography");
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
        title="Phase 1.3: Typography — Practical Exercises"
        description="Master font properties, text styling, and readability. Learn to create professional, accessible typography."
        actions={
          <TheoryModal>
            <TypographyTheory />
          </TheoryModal>
        }
      />

      <ExerciseList>
        {/* Exercise 1: Font Family */}
        <ExerciseCard
          id="ex1"
          title="Exercise 1: Font Family"
          instructions="Objective: Apply different font families to see how typefaces change the feel of text."
          isComplete={isComplete("ex1")}
          onToggleComplete={() => toggleComplete("ex1")}
        >
          <ExpectedOutcome description="Three paragraphs with different font families: serif, sans-serif, and monospace.">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "18px",
                  margin: 0,
                  padding: "16px",
                  background: "#f8f9fa",
                  borderRadius: "6px",
                }}
              >
                Serif fonts have decorative strokes. Classic and traditional.
              </p>
              <p
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "18px",
                  margin: 0,
                  padding: "16px",
                  background: "#f8f9fa",
                  borderRadius: "6px",
                }}
              >
                Sans-serif fonts are clean and modern. Most common on the web.
              </p>
              <p
                style={{
                  fontFamily: "Courier New, monospace",
                  fontSize: "16px",
                  margin: 0,
                  padding: "16px",
                  background: "#f8f9fa",
                  borderRadius: "6px",
                }}
              >
                Monospace fonts are perfect for code and technical content.
              </p>
            </div>
          </ExpectedOutcome>

          <div className="typo-font-families">
            <p className="typo-serif">
              Serif fonts have decorative strokes. Classic and traditional.
            </p>
            <p className="typo-sans-serif">
              Sans-serif fonts are clean and modern. Most common on the web.
            </p>
            <p className="typo-monospace">
              Monospace fonts are perfect for code and technical content.
            </p>
          </div>
        </ExerciseCard>

        {/* Exercise 2: Font Size */}
        <ExerciseCard
          id="ex2"
          title="Exercise 2: Font Size"
          instructions="Objective: Create a size hierarchy using different font sizes."
          isComplete={isComplete("ex2")}
          onToggleComplete={() => toggleComplete("ex2")}
        >
          <ExpectedOutcome description="Text hierarchy from small to large: 12px, 16px, 24px, 32px.">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <div style={{ fontSize: "12px", color: "#666" }}>
                12px - Small supporting text
              </div>
              <div style={{ fontSize: "16px" }}>16px - Body text</div>
              <div style={{ fontSize: "24px", fontWeight: 600 }}>
                24px - Subheading
              </div>
              <div style={{ fontSize: "32px", fontWeight: 700 }}>
                32px - Main heading
              </div>
            </div>
          </ExpectedOutcome>

          <div className="typo-size-hierarchy">
            <div className="typo-small">12px - Small supporting text</div>
            <div className="typo-body">16px - Body text</div>
            <div className="typo-subheading">24px - Subheading</div>
            <div className="typo-heading">32px - Main heading</div>
          </div>
        </ExerciseCard>

        {/* Exercise 3: Font Weight */}
        <ExerciseCard
          id="ex3"
          title="Exercise 3: Font Weight"
          instructions="Objective: Use font-weight to create emphasis and hierarchy."
          isComplete={isComplete("ex3")}
          onToggleComplete={() => toggleComplete("ex3")}
        >
          <ExpectedOutcome description="Text samples showing light (300), normal (400), medium (500), semi-bold (600), and bold (700).">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "18px",
              }}
            >
              <div style={{ fontWeight: 300 }}>300 - Light weight</div>
              <div style={{ fontWeight: 400 }}>400 - Normal weight</div>
              <div style={{ fontWeight: 500 }}>500 - Medium weight</div>
              <div style={{ fontWeight: 600 }}>600 - Semi-bold weight</div>
              <div style={{ fontWeight: 700 }}>700 - Bold weight</div>
            </div>
          </ExpectedOutcome>

          <div className="typo-weights">
            <div className="typo-light">300 - Light weight</div>
            <div className="typo-normal">400 - Normal weight</div>
            <div className="typo-medium">500 - Medium weight</div>
            <div className="typo-semibold">600 - Semi-bold weight</div>
            <div className="typo-bold">700 - Bold weight</div>
          </div>
        </ExerciseCard>

        {/* Exercise 4: Font Style */}
        <ExerciseCard
          id="ex4"
          title="Exercise 4: Font Style"
          instructions="Objective: Apply italic styling for emphasis and quotes."
          isComplete={isComplete("ex4")}
          onToggleComplete={() => toggleComplete("ex4")}
        >
          <ExpectedOutcome description="Normal text and italic text shown together.">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "18px",
              }}
            >
              <div style={{ fontStyle: "normal" }}>
                This is normal, upright text.
              </div>
              <div style={{ fontStyle: "italic" }}>
                This is italic text, used for emphasis or quotes.
              </div>
            </div>
          </ExpectedOutcome>

          <div className="typo-styles">
            <div className="typo-normal-style">
              This is normal, upright text.
            </div>
            <div className="typo-italic">
              This is italic text, used for emphasis or quotes.
            </div>
          </div>
        </ExerciseCard>

        {/* Exercise 5: Line Height */}
        <ExerciseCard
          id="ex5"
          title="Exercise 5: Line Height"
          instructions="Objective: Understand how line-height affects readability."
          isComplete={isComplete("ex5")}
          onToggleComplete={() => toggleComplete("ex5")}
        >
          <ExpectedOutcome description="Three paragraphs with different line heights: 1.2 (tight), 1.6 (comfortable), 2.5 (loose).">
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <div style={{ maxWidth: "200px" }}>
                <strong>line-height: 1.2</strong>
                <p
                  style={{
                    lineHeight: 1.2,
                    background: "#f8f9fa",
                    padding: "12px",
                    margin: "8px 0 0 0",
                  }}
                >
                  Too tight. Lines are cramped together. Harder to read long
                  text.
                </p>
              </div>
              <div style={{ maxWidth: "200px" }}>
                <strong>line-height: 1.6</strong>
                <p
                  style={{
                    lineHeight: 1.6,
                    background: "#f8f9fa",
                    padding: "12px",
                    margin: "8px 0 0 0",
                  }}
                >
                  Perfect! Comfortable spacing. Easy to read. Best for body
                  text.
                </p>
              </div>
              <div style={{ maxWidth: "200px" }}>
                <strong>line-height: 2.5</strong>
                <p
                  style={{
                    lineHeight: 2.5,
                    background: "#f8f9fa",
                    padding: "12px",
                    margin: "8px 0 0 0",
                  }}
                >
                  Too loose. Lines feel disconnected. Wastes vertical space.
                </p>
              </div>
            </div>
          </ExpectedOutcome>

          <div className="typo-line-heights">
            <div className="typo-line-group">
              <strong>line-height: 1.2</strong>
              <p className="typo-tight">
                Too tight. Lines are cramped together. Harder to read long text.
              </p>
            </div>
            <div className="typo-line-group">
              <strong>line-height: 1.6</strong>
              <p className="typo-comfortable">
                Perfect! Comfortable spacing. Easy to read. Best for body text.
              </p>
            </div>
            <div className="typo-line-group">
              <strong>line-height: 2.5</strong>
              <p className="typo-loose">
                Too loose. Lines feel disconnected. Wastes vertical space.
              </p>
            </div>
          </div>
        </ExerciseCard>

        {/* Exercise 6: Text Alignment */}
        <ExerciseCard
          id="ex6"
          title="Exercise 6: Text Alignment"
          instructions="Objective: Align text left, center, right, and justify."
          isComplete={isComplete("ex6")}
          onToggleComplete={() => toggleComplete("ex6")}
        >
          <ExpectedOutcome description="Four boxes showing different text alignments.">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <div
                style={{
                  textAlign: "left",
                  background: "#f8f9fa",
                  padding: "12px",
                  borderRadius: "6px",
                }}
              >
                Left aligned - Most common for body text
              </div>
              <div
                style={{
                  textAlign: "center",
                  background: "#f8f9fa",
                  padding: "12px",
                  borderRadius: "6px",
                }}
              >
                Center aligned - Good for headings
              </div>
              <div
                style={{
                  textAlign: "right",
                  background: "#f8f9fa",
                  padding: "12px",
                  borderRadius: "6px",
                }}
              >
                Right aligned - Special cases
              </div>
              <div
                style={{
                  textAlign: "justify",
                  background: "#f8f9fa",
                  padding: "12px",
                  borderRadius: "6px",
                }}
              >
                Justified text stretches to fill the full width, creating
                straight edges on both sides.
              </div>
            </div>
          </ExpectedOutcome>

          <div className="typo-alignments">
            <div className="typo-left">
              Left aligned - Most common for body text
            </div>
            <div className="typo-center">
              Center aligned - Good for headings
            </div>
            <div className="typo-right">Right aligned - Special cases</div>
            <div className="typo-justify">
              Justified text stretches to fill the full width, creating straight
              edges on both sides.
            </div>
          </div>
        </ExerciseCard>

        {/* Exercise 7: Text Decoration */}
        <ExerciseCard
          id="ex7"
          title="Exercise 7: Text Decoration"
          instructions="Objective: Add underlines, overlines, and strike-through effects."
          isComplete={isComplete("ex7")}
          onToggleComplete={() => toggleComplete("ex7")}
        >
          <ExpectedOutcome description="Text samples showing none, underline, overline, and line-through decorations.">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "18px",
              }}
            >
              <div style={{ textDecoration: "none" }}>
                No decoration - Plain text
              </div>
              <div style={{ textDecoration: "underline", color: "#667eea" }}>
                Underline - Often used for links
              </div>
              <div style={{ textDecoration: "overline" }}>
                Overline - Rarely used
              </div>
              <div style={{ textDecoration: "line-through", color: "#999" }}>
                Line-through - For old prices or deleted content
              </div>
            </div>
          </ExpectedOutcome>

          <div className="typo-decorations">
            <div className="typo-none">No decoration - Plain text</div>
            <div className="typo-underline">
              Underline - Often used for links
            </div>
            <div className="typo-overline">Overline - Rarely used</div>
            <div className="typo-linethrough">
              Line-through - For old prices or deleted content
            </div>
          </div>
        </ExerciseCard>

        {/* Exercise 8: Text Transform */}
        <ExerciseCard
          id="ex8"
          title="Exercise 8: Text Transform"
          instructions="Objective: Control capitalization with text-transform."
          isComplete={isComplete("ex8")}
          onToggleComplete={() => toggleComplete("ex8")}
        >
          <ExpectedOutcome description="Four examples showing none, uppercase, lowercase, and capitalize transforms.">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "18px",
              }}
            >
              <div style={{ textTransform: "none" }}>
                none - Hello World Example
              </div>
              <div style={{ textTransform: "uppercase" }}>
                uppercase - Hello World Example
              </div>
              <div style={{ textTransform: "lowercase" }}>
                lowercase - Hello World Example
              </div>
              <div style={{ textTransform: "capitalize" }}>
                capitalize - hello world example
              </div>
            </div>
          </ExpectedOutcome>

          <div className="typo-transforms">
            <div className="typo-transform-none">
              none - Hello World Example
            </div>
            <div className="typo-uppercase">
              uppercase - Hello World Example
            </div>
            <div className="typo-lowercase">
              lowercase - Hello World Example
            </div>
            <div className="typo-capitalize">
              capitalize - hello world example
            </div>
          </div>
        </ExerciseCard>

        {/* Exercise 9: Letter Spacing */}
        <ExerciseCard
          id="ex9"
          title="Exercise 9: Letter Spacing"
          instructions="Objective: Adjust spacing between characters for different effects."
          isComplete={isComplete("ex9")}
          onToggleComplete={() => toggleComplete("ex9")}
        >
          <ExpectedOutcome description="Text samples with different letter spacing: normal, tight, open, and very wide.">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                fontSize: "18px",
              }}
            >
              <div style={{ letterSpacing: "normal" }}>
                Normal spacing - Default
              </div>
              <div style={{ letterSpacing: "-0.02em" }}>
                Tight spacing - Slightly condensed
              </div>
              <div style={{ letterSpacing: "0.05em" }}>
                Open spacing - More breathing room
              </div>
              <div
                style={{
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontSize: "16px",
                }}
              >
                Wide spacing - Great for titles
              </div>
            </div>
          </ExpectedOutcome>

          <div className="typo-letter-spacing">
            <div className="typo-spacing-normal">Normal spacing - Default</div>
            <div className="typo-spacing-tight">
              Tight spacing - Slightly condensed
            </div>
            <div className="typo-spacing-open">
              Open spacing - More breathing room
            </div>
            <div className="typo-spacing-wide">
              Wide spacing - Great for titles
            </div>
          </div>
        </ExerciseCard>

        {/* Exercise 10: Complete Typography */}
        <ExerciseCard
          id="ex10"
          title="Exercise 10: Complete Typography"
          instructions="Objective: Combine all typography properties to create a professional article design."
          isComplete={isComplete("ex10")}
          onToggleComplete={() => toggleComplete("ex10")}
        >
          <ExpectedOutcome description="A complete article with proper typography: heading, subheading, and body text with professional styling.">
            <article
              style={{
                maxWidth: "600px",
                margin: "0 auto",
                padding: "32px",
                background: "white",
                borderRadius: "8px",
                border: "1px solid #e0e0e0",
              }}
            >
              <h1
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "32px",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  marginTop: 0,
                  marginBottom: "8px",
                  color: "#667eea",
                  letterSpacing: "-0.02em",
                }}
              >
                Professional Typography
              </h1>
              <p
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#999",
                  marginTop: 0,
                  marginBottom: "24px",
                }}
              >
                Design · Typography · Best Practices
              </p>
              <p
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "18px",
                  lineHeight: 1.6,
                  color: "#333",
                  marginTop: 0,
                  marginBottom: "16px",
                }}
              >
                This article demonstrates professional typography combining
                multiple properties: font families, sizes, weights, line height,
                and spacing.
              </p>
              <p
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "18px",
                  lineHeight: 1.6,
                  color: "#333",
                  margin: 0,
                }}
              >
                Notice the clear hierarchy, comfortable readability, and
                professional appearance created by thoughtful typography
                choices.
              </p>
            </article>
          </ExpectedOutcome>

          <article className="typo-article">
            <h1 className="typo-article-title">Professional Typography</h1>
            <p className="typo-article-meta">
              Design · Typography · Best Practices
            </p>
            <p className="typo-article-text">
              This article demonstrates professional typography combining
              multiple properties: font families, sizes, weights, line height,
              and spacing.
            </p>
            <p className="typo-article-text">
              Notice the clear hierarchy, comfortable readability, and
              professional appearance created by thoughtful typography choices.
            </p>
          </article>
        </ExerciseCard>
      </ExerciseList>
    </PhaseLayout>
  );
}
