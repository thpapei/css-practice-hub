import React, { useEffect, useState } from "react";
import {
  PageHeader,
  ExerciseCard,
  ExpectedOutcome,
  TheoryModal,
  LessonSidebar,
  PhaseLayout,
} from "../components";
import { useProgress } from "../hooks/useProgress";
import MediaQueriesTheory from "./MediaQueriesTheory";
import "../styles/phase3-mediaqueries.css";

const lessons = [
  { id: "mq1", title: "Exercise 1: Simple breakpoint" },
  { id: "mq2", title: "Exercise 2: Responsive navigation" },
  { id: "mq3", title: "Exercise 3: Fluid typography" },
  { id: "mq4", title: "Exercise 4: Image breakpoints" },
  { id: "mq5", title: "Exercise 5: Container queries (hint)" },
  { id: "mq6", title: "Exercise 6: Try breakpoints" },
  { id: "mq7", title: "Exercise 7: Responsive card" },
  { id: "mq8", title: "Exercise 8: Final challenge" },
];

export default function Phase3MediaQueries() {
  const [currentLesson, setCurrentLesson] = useState<string>("");
  const { isComplete, toggleComplete } = useProgress("phase3-mediaqueries");

  useEffect(() => {
    document.title = "Phase 3.1 - Media Queries";
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
        title="Phase 3.1: Media Queries — Practical Exercises"
        description="Practice breakpoints, mobile-first media queries, responsive units, and layout switches."
        actions={
          <TheoryModal>
            <MediaQueriesTheory />
          </TheoryModal>
        }
      />

      <div className="lesson-exercises">
        <ExerciseCard
          id="mq1"
          title="Simple breakpoint"
          isComplete={isComplete("mq1")}
          onToggleComplete={() => toggleComplete("mq1")}
        >
          <ExpectedOutcome description="Two-column layout on larger screens">
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
              <div style={{ background: "#667eea", color: "white", padding: 12 }}>A</div>
              <div style={{ background: "#fa709a", color: "white", padding: 12 }}>B</div>
            </div>
          </ExpectedOutcome>

          <div className="mq-box mq1">
            {/* Student area: TODO in CSS - add media query to make two columns at 768px */}
            <div className="mq-item">A</div>
            <div className="mq-item">B</div>
          </div>
        </ExerciseCard>

        <ExerciseCard
          id="mq2"
          title="Responsive navigation"
          isComplete={isComplete("mq2")}
          onToggleComplete={() => toggleComplete("mq2")}
        >
          <ExpectedOutcome description="Hamburger on small screens, horizontal nav on wide screens">
            <nav style={{ display: "flex", gap: 12 }}>
              <div style={{ padding: 8, background: "#667eea", color: "white" }}>Logo</div>
              <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
                <div style={{ padding: 8 }}>Home</div>
                <div style={{ padding: 8 }}>About</div>
              </div>
            </nav>
          </ExpectedOutcome>

          <div className="mq-box mq-nav">
            <div className="mq-logo">Logo</div>
            <div className="mq-links">
              <a>Home</a>
              <a>About</a>
              <a>Contact</a>
            </div>
          </div>
        </ExerciseCard>

        <ExerciseCard
          id="mq3"
          title="Fluid typography"
          isComplete={isComplete("mq3")}
          onToggleComplete={() => toggleComplete("mq3")}
        >
          <ExpectedOutcome description="Text scales between 16px and 20px using clamp()">
            <p style={{ fontSize: "clamp(16px, 2vw, 20px)" }}>Responsive headline</p>
          </ExpectedOutcome>

          <div className="mq-box mq-typography">
            <h2 className="mq-headline">Responsive headline</h2>
          </div>
        </ExerciseCard>

        <ExerciseCard
          id="mq4"
          title="Image breakpoints"
          isComplete={isComplete("mq4")}
          onToggleComplete={() => toggleComplete("mq4")}
        >
          <ExpectedOutcome description="Swap image layout from stacked to side-by-side at 768px">
            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ flex: 1, background: "#eee", padding: 12 }}>Img</div>
              <div style={{ flex: 1, background: "#ddd", padding: 12 }}>Caption</div>
            </div>
          </ExpectedOutcome>

          <div className="mq-box mq-image">
            <div className="mq-image-media">Image</div>
            <div className="mq-image-caption">Caption</div>
          </div>
        </ExerciseCard>

        <ExerciseCard
          id="mq5"
          title="Container queries (hint)"
          isComplete={isComplete("mq5")}
          onToggleComplete={() => toggleComplete("mq5")}
        >
          <ExpectedOutcome description="Show example but students focus on media queries first">
            <div style={{ padding: 12 }}>Container queries (optional modern feature)</div>
          </ExpectedOutcome>

          <div className="mq-box mq-container-query">
            <p>Try a container-size-aware layout (optional)</p>
          </div>
        </ExerciseCard>

        <ExerciseCard
          id="mq6"
          title="Try breakpoints"
          isComplete={isComplete("mq6")}
          onToggleComplete={() => toggleComplete("mq6")}
        >
          <ExpectedOutcome description="Practice creating breakpoints for three sizes">
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
              <div style={{ background: "#667eea", color: "white", padding: 12 }}>Block</div>
            </div>
          </ExpectedOutcome>

          <div className="mq-box mq-breakpoints">
            <div className="mq-sample">Resize me</div>
          </div>
        </ExerciseCard>

        <ExerciseCard
          id="mq7"
          title="Try a responsive card"
          isComplete={isComplete("mq7")}
          onToggleComplete={() => toggleComplete("mq7")}
        >
          <ExpectedOutcome description="Card changes padding and layout across breakpoints">
            <div style={{ background: "#fff", padding: 12 }}>Card</div>
          </ExpectedOutcome>

          <div className="mq-box mq-card">
            <div className="mq-card-img">Img</div>
            <div className="mq-card-body">Body</div>
          </div>
        </ExerciseCard>

        <ExerciseCard
          id="mq8"
          title="Final challenge"
          isComplete={isComplete("mq8")}
          onToggleComplete={() => toggleComplete("mq8")}
        >
          <ExpectedOutcome description="Combine grid/flex + breakpoints to produce a small responsive layout">
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>Challenge</div>
          </ExpectedOutcome>

          <div className="mq-box mq-final">Combine layouts and breakpoints</div>
        </ExerciseCard>
      </div>
    </PhaseLayout>
  );
}
