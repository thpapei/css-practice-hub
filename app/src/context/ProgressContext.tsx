import React, { createContext, useContext, useEffect, useState } from "react";

type ProgressMap = { [exerciseId: string]: boolean };

type ProgressContextValue = {
  progress: ProgressMap;
  markComplete: (id: string, v?: boolean) => void;
};

const STORAGE_KEY = "grid-progress";

const ProgressContext = createContext<ProgressContextValue | undefined>(
  undefined
);

export const ProgressProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [progress, setProgress] = useState<ProgressMap>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setProgress(JSON.parse(raw));
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      // ignore
    }
  }, [progress]);

  const markComplete = (id: string, v = true) => {
    setProgress((p) => ({ ...p, [id]: v }));
  };

  return (
    <ProgressContext.Provider value={{ progress, markComplete }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = (): ProgressContextValue => {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used within ProgressProvider");
  return ctx;
};

export default ProgressContext;
