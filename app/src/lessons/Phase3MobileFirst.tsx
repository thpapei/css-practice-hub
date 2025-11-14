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
import "../styles/phase-phase3mobilefirst.css";
import Phase3MobileFirstTheory from "./Phase3MobileFirstTheory";

const lessons = [
  { id: "ex1", title: "Exercise 1: Mobile layout basics" },
  { id: "ex2", title: "Exercise 2: Navigation patterns" },
  { id: "ex3", title: "Exercise 3: Fluid headings" },
  { id: "ex4", title: "Exercise 4: Responsive images" },
  { id: "ex5", title: "Exercise 5: Spacing and clamp()" },
  { id: "ex6", title: "Exercise 6: Final challenge" },
];

export default function Phase3MobileFirst(): JSX.Element {
  const [currentLesson, setCurrentLesson] = useState(lessons[0].id);
  const { isComplete, toggleComplete } = useProgress("phase3-mobilefirst");

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
        title="Phase 3.3: Mobile-first Design"
        description="Build mobile-first layouts and learn fluid scaling patterns."
        actions={
          <TheoryModal>
            <Phase3MobileFirstTheory />
          </TheoryModal>
        }
      />

      <ExerciseList>
        <ExerciseCard
          id="ex1"
          title={lessons[0].title}
          instructions="Create a compact mobile layout that expands into two columns at 768px."
          isComplete={isComplete("ex1")}
          onToggleComplete={() => toggleComplete("ex1")}
        >
          <ExpectedOutcome description="Two-column layout on tablet, single column on mobile">
            <div
              style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}
              className="exercise-demo"
            >
              <div className="grid-item">A</div>
              <div className="grid-item">B</div>
            </div>
          </ExpectedOutcome>

          <div className="exercise-container">
            <div className="card">
              <p>Student area: .card layout changes with media queries.</p>
            </div>
          </div>
        </ExerciseCard>

        {/* Additional exercises (skeletons) */}
        {lessons.slice(1).map((l) => (
          <ExerciseCard
            key={l.id}
            id={l.id}
            title={l.title}
            instructions="Follow the exercise instructions in the comments of the CSS file."
            isComplete={isComplete(l.id)}
            onToggleComplete={() => toggleComplete(l.id)}
          >
            <ExpectedOutcome description={"Expected outcome for " + l.title}>
              <div className="exercise-demo">
                <div className="grid-item">Example</div>
              </div>
            </ExpectedOutcome>

            <div className="exercise-container">
              Practice area for {l.title}
            </div>
          </ExerciseCard>
        ))}
      </ExerciseList>
    </PhaseLayout>
  );
}
