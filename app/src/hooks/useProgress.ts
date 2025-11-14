import { useEffect, useState } from "react";

interface ProgressState {
  [exerciseId: string]: boolean;
}

export function useProgress(phaseId: string) {
  const storageKey = `css-practice-${phaseId}`;

  const [completedExercises, setCompletedExercises] = useState<Set<string>>(
    () => {
      try {
        const stored = localStorage.getItem(storageKey);
        if (stored) {
          const parsed: ProgressState = JSON.parse(stored);
          return new Set(Object.keys(parsed).filter((key) => parsed[key]));
        }
      } catch (err) {
        console.error("Error loading progress:", err);
      }
      return new Set();
    }
  );

  useEffect(() => {
    const state: ProgressState = {};
    completedExercises.forEach((id) => {
      state[id] = true;
    });
    try {
      localStorage.setItem(storageKey, JSON.stringify(state));
    } catch (err) {
      console.error("Error saving progress:", err);
    }
  }, [completedExercises, storageKey]);

  const toggleComplete = (exerciseId: string) => {
    setCompletedExercises((prev) => {
      const next = new Set(prev);
      if (next.has(exerciseId)) {
        next.delete(exerciseId);
      } else {
        next.add(exerciseId);
      }
      return next;
    });
  };

  const isComplete = (exerciseId: string) => completedExercises.has(exerciseId);

  const getProgress = () => ({
    completed: completedExercises.size,
    total: 0, // Will be set by component
    percentage: 0,
  });

  return {
    isComplete,
    toggleComplete,
    completedExercises,
    getProgress,
  };
}
