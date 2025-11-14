import {
  ExerciseCard,
  ExpectedOutcome,
  LessonSidebar,
  PageHeader,
  PhaseLayout,
} from "../components";
import { useProgress } from "../hooks/useProgress";

/**
 * Lesson template: copy this file and rename when adding a new lesson.
 * - Update the `lessons` array with exercise ids and titles
 * - Replace ExerciseCard contents and ExpectedOutcome with your examples
 */
export default function LessonTemplate(): JSX.Element {
  const lessons = [{ id: "ex1", title: "Exercise 1" }];
  const { isComplete, toggleComplete } = useProgress("template");

  return (
    <PhaseLayout sidebar={<LessonSidebar lessons={lessons} />}>
      <PageHeader title="Lesson Template" />
      <div className="lesson-exercises">
        <ExerciseCard
          id="ex1"
          title="Exercise 1"
          isComplete={isComplete("ex1")}
          onToggleComplete={() => toggleComplete("ex1")}
        >
          <p>Replace this content with the exercise instructions.</p>
          <ExpectedOutcome description="What the finished exercise should look like">
            <div>Example outcome</div>
          </ExpectedOutcome>
        </ExerciseCard>
      </div>
    </PhaseLayout>
  );
}
