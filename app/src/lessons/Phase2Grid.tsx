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
import GridTheory from "./GridTheory";

const lessons = [
  { id: "ex1", title: "Exercise 1: Basic Grid" },
  { id: "ex2", title: "Exercise 2: Column Sizing" },
  { id: "ex3", title: "Exercise 3: Template Areas" },
  { id: "ex4", title: "Exercise 4: Line Placement" },
  { id: "ex5", title: "Exercise 5: Using span" },
  { id: "ex6", title: "Exercise 6: Alignment" },
  { id: "ex7", title: "Exercise 7: Responsive repeat()" },
  { id: "ex8", title: "Exercise 8: minmax()" },
  { id: "ex9", title: "Exercise 9: grid-auto-flow" },
  { id: "ex10", title: "Exercise 10: Nested Grids" },
  { id: "ex11", title: "Exercise 11: Subgrid" },
  { id: "ex12", title: "Exercise 12: Grid + Flexbox" },
];

export default function Phase2Grid(): JSX.Element {
  const [currentLesson, setCurrentLesson] = useState<string>("");
  const { isComplete, toggleComplete } = useProgress("phase2-grid");

  useEffect(() => {
    document.title = "Phase 2.2 - CSS Grid (POC)";
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
        title="Phase 2.2: CSS Grid — Practical Exercises"
        description="Short, focused exercises that walk through practical Grid patterns. Each example shows a small demo you can read and learn from. We'll re-introduce editors later — for now focus on the concepts and patterns."
        actions={
          <TheoryModal>
            <GridTheory />
          </TheoryModal>
        }
      />

      <ExerciseList>
        <ExerciseCard
          id="ex1"
          title="Exercise 1: Basic Grid — Equal Columns"
          instructions="Objective: create a simple 3×3 grid. Tip: use repeat() with 1fr for equal columns and add gap for spacing."
          isComplete={isComplete("ex1")}
          onToggleComplete={() => toggleComplete("ex1")}
        >
          <ExpectedOutcome description="A 3×3 grid with 9 equal boxes, evenly spaced with 16px gaps.">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "16px",
                padding: "20px",
                background: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    padding: "30px",
                    background: "#667eea",
                    color: "white",
                    borderRadius: "6px",
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "1.2em",
                  }}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </ExpectedOutcome>

          <div className="basic-grid">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="grid-item">
                {i + 1}
              </div>
            ))}
          </div>
        </ExerciseCard>

        <ExerciseCard
          id="ex2"
          title="Exercise 2: Column Sizing — px, fr, %"
          instructions="Objective: mix fixed and flexible columns. Tip: prefer fr for flexible portions, px for strict sizes."
          isComplete={isComplete("ex2")}
          onToggleComplete={() => toggleComplete("ex2")}
        >
          <ExpectedOutcome description="Three columns: first fixed at 150px, middle takes 2fr (twice as wide as third), and third takes 1fr.">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "150px 2fr 1fr",
                gap: "16px",
                padding: "20px",
                background: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  padding: "30px",
                  background: "#667eea",
                  color: "white",
                  borderRadius: "6px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Fixed 150px
              </div>
              <div
                style={{
                  padding: "30px",
                  background: "#fa709a",
                  color: "white",
                  borderRadius: "6px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Flexible 2fr
              </div>
              <div
                style={{
                  padding: "30px",
                  background: "#fee140",
                  color: "#333",
                  borderRadius: "6px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Flexible 1fr
              </div>
            </div>
          </ExpectedOutcome>

          <div className="sized-grid">
            <div className="grid-item">Fixed 150px</div>
            <div className="grid-item">Flexible 2fr</div>
            <div className="grid-item">Flexible 1fr</div>
          </div>
        </ExerciseCard>

        <ExerciseCard
          id="ex3"
          title="Exercise 3: Template Areas — Named Layouts"
          instructions="Objective: use grid-template-areas to declare regions (header, nav, main, aside, footer). Tip: name areas in the container and assign grid-area on children."
          isComplete={isComplete("ex3")}
          onToggleComplete={() => toggleComplete("ex3")}
        >
          <ExpectedOutcome description="A classic layout: header spans full width on top, nav on left, main in center, sidebar on right, footer spans full width on bottom.">
            <div
              style={{
                display: "grid",
                gridTemplateAreas: `
                "header header header"
                "nav main sidebar"
                "footer footer footer"
              `,
                gridTemplateColumns: "150px 1fr 200px",
                gridTemplateRows: "auto 1fr auto",
                gap: "16px",
                padding: "20px",
                background: "#f8f9fa",
                borderRadius: "8px",
                minHeight: "400px",
              }}
            >
              <header
                style={{
                  gridArea: "header",
                  padding: "20px",
                  background: "#667eea",
                  color: "white",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Header
              </header>
              <nav
                style={{
                  gridArea: "nav",
                  padding: "20px",
                  background: "#fa709a",
                  color: "white",
                  borderRadius: "6px",
                  fontWeight: "bold",
                }}
              >
                Navigation
              </nav>
              <main
                style={{
                  gridArea: "main",
                  padding: "20px",
                  background: "white",
                  borderRadius: "6px",
                }}
              >
                <h3 style={{ margin: "0 0 10px" }}>Main Content</h3>
                <p style={{ margin: 0 }}>
                  Use readable area names to document layout intent.
                </p>
              </main>
              <aside
                style={{
                  gridArea: "sidebar",
                  padding: "20px",
                  background: "#fee140",
                  borderRadius: "6px",
                  fontWeight: "bold",
                }}
              >
                Sidebar
              </aside>
              <footer
                style={{
                  gridArea: "footer",
                  padding: "20px",
                  background: "#27ae60",
                  color: "white",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Footer
              </footer>
            </div>
          </ExpectedOutcome>

          <div className="areas-grid">
            <header className="area-header">Header</header>
            <nav className="area-nav">Navigation</nav>
            <main className="area-main">
              <h3>Main Content</h3>
              <p>Use readable area names to document layout intent.</p>
            </main>
            <aside className="area-sidebar">Sidebar</aside>
            <footer className="area-footer">Footer</footer>
          </div>
        </ExerciseCard>

        <ExerciseCard
          id="ex4"
          title="Exercise 4: Line Placement & Spanning"
          instructions="Objective: position items with grid lines and use span to grow items across tracks. Tip: grid-column and grid-row accept start/end or span N."
          isComplete={isComplete("ex4")}
          onToggleComplete={() => toggleComplete("ex4")}
        >
          <ExpectedOutcome description="Items placed using grid lines: A spans 2 columns, B spans 2 rows, D spans 2 columns and 2 rows.">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gridTemplateRows: "repeat(4, 80px)",
                gap: "16px",
                padding: "20px",
                background: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  gridColumn: "1 / 3",
                  padding: "20px",
                  background: "#667eea",
                  color: "white",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                A (spans 2 columns)
              </div>
              <div
                style={{
                  gridColumn: "3 / 4",
                  gridRow: "1 / 3",
                  padding: "20px",
                  background: "#fa709a",
                  color: "white",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                B (spans 2 rows)
              </div>
              <div
                style={{
                  gridColumn: "4 / 5",
                  padding: "20px",
                  background: "#fee140",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                C
              </div>
              <div
                style={{
                  gridColumn: "1 / 3",
                  gridRow: "2 / 4",
                  padding: "20px",
                  background: "#27ae60",
                  color: "white",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                D (spans 2 columns, 2 rows)
              </div>
              <div
                style={{
                  gridColumn: "3 / 5",
                  gridRow: "3 / 4",
                  padding: "20px",
                  background: "#3498db",
                  color: "white",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                E
              </div>
            </div>
          </ExpectedOutcome>

          <div className="lines-grid">
            <div className="item-a">A (spans 2 columns)</div>
            <div className="item-b">B (spans 2 rows)</div>
            <div className="item-c">C</div>
            <div className="item-d">D (spans 2 columns, 2 rows)</div>
            <div className="item-e">E</div>
          </div>
        </ExerciseCard>

        <ExerciseCard
          id="ex5"
          title="Exercise 5: Using span"
          instructions="Objective: practice span (columns and rows). Tip: use span for concise markup when you don't need explicit line numbers."
          isComplete={isComplete("ex5")}
          onToggleComplete={() => toggleComplete("ex5")}
        >
          <ExpectedOutcome description="Various items spanning different numbers of columns and rows using the 'span' keyword.">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "16px",
                padding: "20px",
                background: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  gridColumn: "span 2",
                  padding: "20px",
                  background: "#667eea",
                  color: "white",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Spans 2 columns
              </div>
              <div
                style={{
                  padding: "20px",
                  background: "#fa709a",
                  color: "white",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                1
              </div>
              <div
                style={{
                  padding: "20px",
                  background: "#fee140",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                2
              </div>
              <div
                style={{
                  gridColumn: "span 3",
                  padding: "20px",
                  background: "#27ae60",
                  color: "white",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Spans 3 columns
              </div>
              <div
                style={{
                  gridRow: "span 2",
                  padding: "20px",
                  background: "#3498db",
                  color: "white",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Spans 2 rows
              </div>
              <div
                style={{
                  padding: "20px",
                  background: "#e74c3c",
                  color: "white",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                3
              </div>
              <div
                style={{
                  padding: "20px",
                  background: "#9b59b6",
                  color: "white",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                4
              </div>
              <div
                style={{
                  padding: "20px",
                  background: "#f39c12",
                  color: "white",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                5
              </div>
            </div>
          </ExpectedOutcome>

          <div className="span-grid">
            <div className="span-item span-2-col">Spans 2 columns</div>
            <div className="span-item">1</div>
            <div className="span-item">2</div>
            <div className="span-item span-3-col">Spans 3 columns</div>
            <div className="span-item span-2-row">Spans 2 rows</div>
            <div className="span-item">3</div>
            <div className="span-item">4</div>
            <div className="span-item">5</div>
          </div>
        </ExerciseCard>

        <ExerciseCard
          id="ex6"
          title="Exercise 6: Alignment"
          instructions="Objective: control item alignment using justify-/align- properties and per-item justify-self/align-self."
          isComplete={isComplete("ex6")}
          onToggleComplete={() => toggleComplete("ex6")}
        >
          <ExpectedOutcome description="First row items aligned to start, second row items centered within their grid cells.">
            <div
              style={{
                padding: "20px",
                background: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "16px",
                  justifyItems: "start",
                  marginBottom: "16px",
                  padding: "20px",
                  background: "white",
                  borderRadius: "6px",
                }}
              >
                <div
                  style={{
                    padding: "20px",
                    background: "#667eea",
                    color: "white",
                    borderRadius: "6px",
                    fontWeight: "bold",
                  }}
                >
                  Start
                </div>
                <div
                  style={{
                    padding: "20px",
                    background: "#667eea",
                    color: "white",
                    borderRadius: "6px",
                    fontWeight: "bold",
                  }}
                >
                  Start
                </div>
                <div
                  style={{
                    padding: "20px",
                    background: "#667eea",
                    color: "white",
                    borderRadius: "6px",
                    fontWeight: "bold",
                  }}
                >
                  Start
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "16px",
                  justifyItems: "center",
                  alignItems: "center",
                  padding: "20px",
                  background: "white",
                  borderRadius: "6px",
                  minHeight: "120px",
                }}
              >
                <div
                  style={{
                    padding: "20px",
                    background: "#27ae60",
                    color: "white",
                    borderRadius: "6px",
                    fontWeight: "bold",
                  }}
                >
                  Center
                </div>
                <div
                  style={{
                    padding: "20px",
                    background: "#27ae60",
                    color: "white",
                    borderRadius: "6px",
                    fontWeight: "bold",
                  }}
                >
                  Center
                </div>
                <div
                  style={{
                    padding: "20px",
                    background: "#27ae60",
                    color: "white",
                    borderRadius: "6px",
                    fontWeight: "bold",
                  }}
                >
                  Center
                </div>
              </div>
            </div>
          </ExpectedOutcome>

          <div className="align-grid justify-start">
            <div className="small-item">Start</div>
            <div className="small-item">Start</div>
            <div className="small-item">Start</div>
          </div>
          <div style={{ height: 16 }} />
          <div className="align-grid align-center">
            <div className="small-item">Center</div>
            <div className="small-item">Center</div>
            <div className="small-item">Center</div>
          </div>
        </ExerciseCard>

        <ExerciseCard
          id="ex7"
          title="Exercise 7: Responsive repeat() patterns"
          instructions="Objective: learn auto-fill / auto-fit with minmax(). Tip: minmax keeps items readable while allowing responsive columns."
          isComplete={isComplete("ex7")}
          onToggleComplete={() => toggleComplete("ex7")}
        >
          <ExpectedOutcome description="Cards automatically create new columns as space allows, with minimum width of 200px each.">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "16px",
                padding: "20px",
                background: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  padding: "30px",
                  background: "#667eea",
                  color: "white",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "1.2em",
                }}
              >
                1
              </div>
              <div
                style={{
                  padding: "30px",
                  background: "#fa709a",
                  color: "white",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "1.2em",
                }}
              >
                2
              </div>
              <div
                style={{
                  padding: "30px",
                  background: "#fee140",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "1.2em",
                }}
              >
                3
              </div>
              <div
                style={{
                  padding: "30px",
                  background: "#27ae60",
                  color: "white",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "1.2em",
                }}
              >
                4
              </div>
              <div
                style={{
                  padding: "30px",
                  background: "#3498db",
                  color: "white",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "1.2em",
                }}
              >
                5
              </div>
            </div>
          </ExpectedOutcome>

          <div className="auto-fit-grid">
            <div className="grid-item">1</div>
            <div className="grid-item">2</div>
            <div className="grid-item">3</div>
            <div className="grid-item">4</div>
            <div className="grid-item">5</div>
          </div>
        </ExerciseCard>

        <ExerciseCard
          id="ex8"
          title="Exercise 8: minmax()"
          instructions="Objective: create flexible but bounded tracks with minmax(). Tip: combine with repeat(auto-fit/auto-fill)."
          isComplete={isComplete("ex8")}
          onToggleComplete={() => toggleComplete("ex8")}
        >
          <ExpectedOutcome description="Cards have minimum width of 120px but grow to fill available space equally.">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
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
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Min 120px, flexible
              </div>
              <div
                style={{
                  padding: "20px",
                  background: "#fa709a",
                  color: "white",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Min 120px, flexible
              </div>
              <div
                style={{
                  padding: "20px",
                  background: "#fee140",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Min 120px, flexible
              </div>
            </div>
          </ExpectedOutcome>

          <div className="minmax-grid">
            <div className="grid-item">Min 120px, flexible</div>
            <div className="grid-item">Min 120px, flexible</div>
            <div className="grid-item">Min 120px, flexible</div>
          </div>
        </ExerciseCard>

        <ExerciseCard
          id="ex9"
          title="Exercise 9: grid-auto-flow"
          instructions="Objective: control auto-placement and packing using grid-auto-flow (dense). Tip: dense tries to fill holes but can change DOM visual order."
          isComplete={isComplete("ex9")}
          onToggleComplete={() => toggleComplete("ex9")}
        >
          <ExpectedOutcome description="Items are auto-placed in grid cells. Items that span 2 columns should create gaps that other items can fill with grid-auto-flow: dense.">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gridAutoFlow: "dense",
                gap: "16px",
                padding: "20px",
                background: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  gridColumn: "span 2",
                  padding: "30px",
                  background: "#667eea",
                  color: "white",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Spans 2
              </div>
              <div
                style={{
                  padding: "30px",
                  background: "#fa709a",
                  color: "white",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                1
              </div>
              <div
                style={{
                  padding: "30px",
                  background: "#fee140",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                2
              </div>
              <div
                style={{
                  gridColumn: "span 2",
                  padding: "30px",
                  background: "#27ae60",
                  color: "white",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Spans 2
              </div>
              <div
                style={{
                  padding: "30px",
                  background: "#3498db",
                  color: "white",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                3
              </div>
              <div
                style={{
                  padding: "30px",
                  background: "#9b59b6",
                  color: "white",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                4
              </div>
            </div>
          </ExpectedOutcome>

          <div className="flow-grid normal-flow">
            <div className="grid-item span-2">Spans 2</div>
            <div className="grid-item">1</div>
            <div className="grid-item">2</div>
            <div className="grid-item span-2">Spans 2</div>
            <div className="grid-item">3</div>
            <div className="grid-item">4</div>
          </div>
        </ExerciseCard>

        <ExerciseCard
          id="ex10"
          title="Exercise 10: Nested Grids"
          instructions="Objective: compose grids inside grid items for complex sub-layouts. Tip: nested grids are scoped to the item — supply their own tracks."
          isComplete={isComplete("ex10")}
          onToggleComplete={() => toggleComplete("ex10")}
        >
          <ExpectedOutcome description="Outer grid with 2 columns. One grid item contains a nested 2×2 grid inside it with smaller items.">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "16px",
                padding: "20px",
                background: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  padding: "30px",
                  background: "#667eea",
                  color: "white",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Regular Item
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "8px",
                  padding: "16px",
                  background: "white",
                  borderRadius: "6px",
                  border: "2px solid #fa709a",
                }}
              >
                <div
                  style={{
                    padding: "16px",
                    background: "#fa709a",
                    color: "white",
                    borderRadius: "4px",
                    fontSize: "0.9em",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Nested 1
                </div>
                <div
                  style={{
                    padding: "16px",
                    background: "#fa709a",
                    color: "white",
                    borderRadius: "4px",
                    fontSize: "0.9em",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Nested 2
                </div>
                <div
                  style={{
                    padding: "16px",
                    background: "#fa709a",
                    color: "white",
                    borderRadius: "4px",
                    fontSize: "0.9em",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Nested 3
                </div>
                <div
                  style={{
                    padding: "16px",
                    background: "#fa709a",
                    color: "white",
                    borderRadius: "4px",
                    fontSize: "0.9em",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Nested 4
                </div>
              </div>
              <div
                style={{
                  padding: "30px",
                  background: "#667eea",
                  color: "white",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Regular Item
              </div>
              <div
                style={{
                  padding: "30px",
                  background: "#667eea",
                  color: "white",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Regular Item
              </div>
            </div>
          </ExpectedOutcome>

          <div className="outer-grid">
            <div className="grid-item">Regular Item</div>
            <div className="grid-item nested-grid-container">
              <div className="nested-item">Nested 1</div>
              <div className="nested-item">Nested 2</div>
              <div className="nested-item">Nested 3</div>
              <div className="nested-item">Nested 4</div>
            </div>
            <div className="grid-item">Regular Item</div>
            <div className="grid-item">Regular Item</div>
          </div>
        </ExerciseCard>

        <ExerciseCard
          id="ex11"
          title="Exercise 11: Subgrid"
          instructions="Objective: use subgrid to align nested grid items with parent grid tracks. Tip: grid-template-columns: subgrid inherits parent columns."
          isComplete={isComplete("ex11")}
          onToggleComplete={() => toggleComplete("ex11")}
        >
          <ExpectedOutcome description="All labels should align vertically in the first column (120px wide), and all values should align in the second column. This creates a clean, form-like layout.">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr",
                gap: "16px",
                padding: "20px",
                background: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "subgrid",
                  gridColumn: "1 / -1",
                  gap: "16px",
                  padding: "12px",
                  background: "white",
                  borderRadius: "6px",
                  border: "1px solid #e0e0e0",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    background: "#667eea",
                    color: "white",
                    padding: "8px 12px",
                    borderRadius: "4px",
                    fontWeight: 600,
                    fontSize: "0.9em",
                    textAlign: "right",
                  }}
                >
                  Name
                </div>
                <div style={{ color: "#2c3e50", fontWeight: 500 }}>
                  John Doe
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "subgrid",
                  gridColumn: "1 / -1",
                  gap: "16px",
                  padding: "12px",
                  background: "white",
                  borderRadius: "6px",
                  border: "1px solid #e0e0e0",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    background: "#667eea",
                    color: "white",
                    padding: "8px 12px",
                    borderRadius: "4px",
                    fontWeight: 600,
                    fontSize: "0.9em",
                    textAlign: "right",
                  }}
                >
                  Email
                </div>
                <div style={{ color: "#2c3e50", fontWeight: 500 }}>
                  john@example.com
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "subgrid",
                  gridColumn: "1 / -1",
                  gap: "16px",
                  padding: "12px",
                  background: "white",
                  borderRadius: "6px",
                  border: "1px solid #e0e0e0",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    background: "#667eea",
                    color: "white",
                    padding: "8px 12px",
                    borderRadius: "4px",
                    fontWeight: 600,
                    fontSize: "0.9em",
                    textAlign: "right",
                  }}
                >
                  Role
                </div>
                <div style={{ color: "#2c3e50", fontWeight: 500 }}>
                  Developer
                </div>
              </div>
            </div>
          </ExpectedOutcome>

          <div className="subgrid-parent">
            <div className="subgrid-item">
              <div className="subgrid-label">Name</div>
              <div className="subgrid-value">John Doe</div>
            </div>
            <div className="subgrid-item">
              <div className="subgrid-label">Email</div>
              <div className="subgrid-value">john@example.com</div>
            </div>
            <div className="subgrid-item">
              <div className="subgrid-label">Role</div>
              <div className="subgrid-value">Developer</div>
            </div>
          </div>
        </ExerciseCard>

        <ExerciseCard
          id="ex12"
          title="Exercise 12: Grid + Flexbox Hybrid"
          instructions="Objective: combine Grid for page layout with Flexbox for component internals. Tip: use Grid for 2D structure, Flexbox for 1D alignment."
          isComplete={isComplete("ex12")}
          onToggleComplete={() => toggleComplete("ex12")}
        >
          <ExpectedOutcome description="Grid creates the page layout (header, sidebar, main). Flexbox handles alignment inside header (space-between) and sidebar (vertical stack). Cards are arranged in a grid within the main area.">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                gridTemplateRows: "auto 1fr",
                gap: "16px",
                minHeight: "300px",
                background: "#f8f9fa",
                borderRadius: "8px",
                padding: "16px",
              }}
            >
              <header
                style={{
                  gridColumn: "1 / -1",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 16px",
                  background: "#667eea",
                  color: "white",
                  borderRadius: "6px",
                }}
              >
                <h3 style={{ margin: 0, fontSize: "1.1em" }}>Dashboard</h3>
                <div style={{ display: "flex", gap: "8px" }}>
                  <button
                    style={{
                      padding: "6px 12px",
                      background: "white",
                      color: "#667eea",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontWeight: 600,
                      fontSize: "0.85em",
                    }}
                  >
                    Settings
                  </button>
                  <button
                    style={{
                      padding: "6px 12px",
                      background: "white",
                      color: "#667eea",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontWeight: 600,
                      fontSize: "0.85em",
                    }}
                  >
                    Logout
                  </button>
                </div>
              </header>

              <aside
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  padding: "16px",
                  background: "white",
                  borderRadius: "6px",
                  border: "1px solid #e0e0e0",
                }}
              >
                <nav
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <a
                    href="#home"
                    style={{
                      padding: "8px 12px",
                      background: "#667eea",
                      color: "white",
                      textDecoration: "none",
                      borderRadius: "4px",
                      fontWeight: 500,
                      fontSize: "0.9em",
                    }}
                  >
                    Home
                  </a>
                  <a
                    href="#profile"
                    style={{
                      padding: "8px 12px",
                      background: "#f0f0f0",
                      color: "#2c3e50",
                      textDecoration: "none",
                      borderRadius: "4px",
                      fontWeight: 500,
                      fontSize: "0.9em",
                    }}
                  >
                    Profile
                  </a>
                  <a
                    href="#settings"
                    style={{
                      padding: "8px 12px",
                      background: "#f0f0f0",
                      color: "#2c3e50",
                      textDecoration: "none",
                      borderRadius: "4px",
                      fontWeight: 500,
                      fontSize: "0.9em",
                    }}
                  >
                    Settings
                  </a>
                </nav>
              </aside>

              <main
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                  gap: "16px",
                  padding: "16px",
                  background: "white",
                  borderRadius: "6px",
                  border: "1px solid #e0e0e0",
                }}
              >
                <div
                  style={{
                    padding: "16px",
                    background: "#f8f9fa",
                    borderRadius: "6px",
                    border: "1px solid #e0e0e0",
                  }}
                >
                  <h4
                    style={{
                      margin: "0 0 8px",
                      color: "#667eea",
                      fontSize: "0.95em",
                    }}
                  >
                    Stats
                  </h4>
                  <p style={{ margin: 0, color: "#555", fontSize: "0.85em" }}>
                    Content
                  </p>
                </div>
                <div
                  style={{
                    padding: "16px",
                    background: "#f8f9fa",
                    borderRadius: "6px",
                    border: "1px solid #e0e0e0",
                  }}
                >
                  <h4
                    style={{
                      margin: "0 0 8px",
                      color: "#667eea",
                      fontSize: "0.95em",
                    }}
                  >
                    Activity
                  </h4>
                  <p style={{ margin: 0, color: "#555", fontSize: "0.85em" }}>
                    Content
                  </p>
                </div>
                <div
                  style={{
                    padding: "16px",
                    background: "#f8f9fa",
                    borderRadius: "6px",
                    border: "1px solid #e0e0e0",
                  }}
                >
                  <h4
                    style={{
                      margin: "0 0 8px",
                      color: "#667eea",
                      fontSize: "0.95em",
                    }}
                  >
                    Analytics
                  </h4>
                  <p style={{ margin: 0, color: "#555", fontSize: "0.85em" }}>
                    Content
                  </p>
                </div>
              </main>
            </div>
          </ExpectedOutcome>

          <div className="hybrid-grid">
            <header className="hybrid-header">
              <h3>Dashboard</h3>
              <div className="header-actions">
                <button>Settings</button>
                <button>Logout</button>
              </div>
            </header>
            <aside className="hybrid-sidebar">
              <nav>
                <a href="#home">Home</a>
                <a href="#profile">Profile</a>
                <a href="#settings">Settings</a>
              </nav>
            </aside>
            <main className="hybrid-main">
              <div className="card">
                <div className="card-header">
                  <h4>Card Title</h4>
                  <span className="badge">New</span>
                </div>
                <p>Grid for layout, Flexbox for card internals.</p>
              </div>
            </main>
          </div>
        </ExerciseCard>
      </ExerciseList>
    </PhaseLayout>
  );
}
