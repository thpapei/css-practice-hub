import React from "react";

interface ExerciseListProps {
  title?: string;
  children: React.ReactNode;
}

/**
 * Wrapper component for a list of exercises
 */
export default function ExerciseList({
  title = "Exercises",
  children,
}: ExerciseListProps): JSX.Element {
  return (
    <section aria-labelledby="exercises-heading">
      <h2 id="exercises-heading">{title}</h2>
      {children}
    </section>
  );
}
