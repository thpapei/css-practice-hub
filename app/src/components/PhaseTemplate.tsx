/**
 * TEMPLATE: Copy this file to create new phase pages
 *
 * Example usage of reusable components:
 * - PhaseLayout: Main container with sidebar + content
 * - PageHeader: Title, description, and actions
 * - LessonSidebar: Navigation for lessons
 * - ExerciseList: Container for exercises
 * - ExerciseCard: Individual exercise with demo
 * - TheoryModal: Button to open theory content
 * - useProgress: Hook for tracking exercise completion
 */

import { useEffect, useState } from "react";
import { useProgress } from "../hooks/useProgress";
import {
  ExerciseCard,
  ExerciseList,
  LessonSidebar,
  PageHeader,
  PhaseLayout,
  TheoryModal,
} from "./index";

// 1. Define your lessons
const lessons = [
  { id: "ex1", title: "Exercise 1: Your First Topic" },
  { id: "ex2", title: "Exercise 2: Next Topic" },
  // Add more lessons...
];

export default function PhaseTemplate(): JSX.Element {
  const [currentLesson, setCurrentLesson] = useState<string>("");
  // 2. Initialize progress tracking (replace "phase-name" with your phase ID)
  const { isComplete, toggleComplete } = useProgress("phase-name");

  useEffect(() => {
    document.title = "Your Phase Title";
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
        title="Phase X: Your Topic"
        description="Brief description of what this phase covers and what students will learn."
        actions={
          <TheoryModal>
            {/* Create a YourPhaseTheory component and import it */}
            <div className="theory-content">
              <div className="theory-header">
                <h1>Your Phase Title</h1>
                <p>Theory guide description</p>
              </div>
              <div className="theory-body">
                <p>Add your theory content here...</p>
              </div>
            </div>
          </TheoryModal>
        }
      />

      <ExerciseList>
        <ExerciseCard
          id="ex1"
          title="Exercise 1: Your First Topic"
          instructions="Clear, concise instructions for what the student should do."
          isComplete={isComplete("ex1")}
          onToggleComplete={() => toggleComplete("ex1")}
        >
          {/* Your demo content here */}
          <div className="your-demo-class">
            <div>Demo item 1</div>
            <div>Demo item 2</div>
          </div>
        </ExerciseCard>

        <ExerciseCard
          id="ex2"
          title="Exercise 2: Next Topic"
          instructions="More instructions..."
          isComplete={isComplete("ex2")}
          onToggleComplete={() => toggleComplete("ex2")}
        >
          {/* Another demo */}
          <div>Your content</div>
        </ExerciseCard>

        {/* Add more ExerciseCard components */}
      </ExerciseList>
    </PhaseLayout>
  );
}
