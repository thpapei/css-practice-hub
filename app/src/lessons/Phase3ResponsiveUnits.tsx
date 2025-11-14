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
import "../styles/phase3-responsiveunits.css";
import ResponsiveUnitsTheory from "./ResponsiveUnitsTheory";

const lessons = [
  { id: "ru1", title: "Exercise 1: Fluid Headline (clamp)" },
  { id: "ru2", title: "Exercise 2: Root spacing variable" },
  { id: "ru3", title: "Exercise 3: Viewport-based layout" },
  { id: "ru4", title: "Exercise 4: Responsive image sizing" },
  { id: "ru5", title: "Exercise 5: Min/max safeguards" },
];

export default function Phase3ResponsiveUnits(): JSX.Element {
  const [currentLesson, setCurrentLesson] = useState<string>("");
  const { isComplete, toggleComplete } = useProgress("phase3-responsive-units");

  useEffect(() => {
    document.title = "Phase 3.2 - Responsive Units";
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
        title="Phase 3.2: Responsive Units"
        description="Practice clamp(), rem/em, vw/vh and responsive spacing"
        actions={
          <TheoryModal>
            <ResponsiveUnitsTheory />
          </TheoryModal>
        }
      />

      <div className="lesson-exercises">
        <ExerciseCard
          id="ru1"
          title="Fluid Headline (clamp)"
          isComplete={isComplete("ru1")}
          onToggleComplete={() => toggleComplete("ru1")}
        >
          <p>
            Use clamp() to make a headline scale smoothly between 20px and 36px.
          </p>
          <ExpectedOutcome description="Headline scales fluidly between min and max">
            <h2 style={{ fontSize: "clamp(20px, 4vw, 36px)" }}>
              Fluid Headline
            </h2>
          </ExpectedOutcome>
          <div className="ru-box ru-headline">
            <h2 className="ru-test">Responsive headline</h2>
          </div>
        </ExerciseCard>

        <ExerciseCard
          id="ru2"
          title="Root spacing variable"
          isComplete={isComplete("ru2")}
          onToggleComplete={() => toggleComplete("ru2")}
        >
          <p>
            Define a <code>--space</code> variable that grows with viewport
            width.
          </p>
          <ExpectedOutcome description="Elements use --space for padding and gap">
            <div
              style={{ padding: "var(--space,16px)", background: "#f8f9fa" }}
            >
              Box
            </div>
          </ExpectedOutcome>
          <div className="ru-box ru-spacing">Spacing demo</div>
        </ExerciseCard>

        <ExerciseCard
          id="ru3"
          title="Viewport-based layout"
          isComplete={isComplete("ru3")}
          onToggleComplete={() => toggleComplete("ru3")}
        >
          <p>
            Use <code>vw</code> to create a layout that adapts to viewport
            width.
          </p>
          <ExpectedOutcome description="Columns adapt using vw/fr combinations">
            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ flex: 1, background: "#eee", padding: 12 }}>
                Left
              </div>
              <div style={{ flex: 2, background: "#ddd", padding: 12 }}>
                Right
              </div>
            </div>
          </ExpectedOutcome>
          <div className="ru-box ru-vw">Viewport layout</div>
        </ExerciseCard>

        <ExerciseCard
          id="ru4"
          title="Responsive image sizing"
          isComplete={isComplete("ru4")}
          onToggleComplete={() => toggleComplete("ru4")}
        >
          <p>Practice using max-width and clamp for images.</p>
          <ExpectedOutcome description="Image scales but never exceeds its container">
            <div style={{ maxWidth: 400 }}>
              <div
                style={{ background: "#667eea", color: "white", padding: 12 }}
              >
                Image
              </div>
            </div>
          </ExpectedOutcome>
          <div className="ru-box ru-image">Image demo</div>
        </ExerciseCard>

        <ExerciseCard
          id="ru5"
          title="Min/Max safeguards"
          isComplete={isComplete("ru5")}
          onToggleComplete={() => toggleComplete("ru5")}
        >
          <p>
            Combine min() and max() with clamp() to build robust responsive
            values.
          </p>
          <ExpectedOutcome description="Example using min/max/clamp for spacing">
            <div
              style={{ padding: "clamp(12px, 2vw, 28px)", background: "#fff" }}
            >
              Safeguarded box
            </div>
          </ExpectedOutcome>
          <div className="ru-box ru-final">Final demo</div>
        </ExerciseCard>
      </div>
    </PhaseLayout>
  );
}
