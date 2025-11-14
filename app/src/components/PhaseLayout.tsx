import React from "react";

interface PhaseLayoutProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

/**
 * Reusable layout component for phase pages with sidebar + content area
 */
export default function PhaseLayout({
  sidebar,
  children,
}: PhaseLayoutProps): JSX.Element {
  return (
    <div className="phase-container">
      {sidebar}
      <div className="phase-content">{children}</div>
    </div>
  );
}
