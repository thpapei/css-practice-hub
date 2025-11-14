import React from "react";

type Props = {
  id: string;
  title: string;
  instructions?: string;
  starterCSS?: string;
  children?: React.ReactNode;
  isComplete?: boolean;
  onToggleComplete?: () => void;
};

// Simplified ExerciseCard: editors/controls removed for now per request.
export default function ExerciseCard({
  id,
  title,
  instructions,
  children,
  isComplete = false,
  onToggleComplete,
}: Props) {
  return (
    <article className="exercise-card" id={id}>
      <div className="exercise-header">
        <div>
          <h3>{title}</h3>
          {instructions && <p className="instructions">{instructions}</p>}
        </div>
        {onToggleComplete && (
          <button
            onClick={onToggleComplete}
            className={`mark-complete-btn ${isComplete ? "completed" : ""}`}
            aria-label={isComplete ? "Mark as incomplete" : "Mark as complete"}
          >
            {isComplete ? "✓ Completed" : "Mark Complete"}
          </button>
        )}
      </div>

      <div className="exercise-body">
        <div className="exercise-demo">{children}</div>
      </div>
    </article>
  );
}
