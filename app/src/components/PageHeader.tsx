import React from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  actions?: React.ReactNode;
}

/**
 * Reusable page header component with title, optional description, and actions
 */
export default function PageHeader({
  title,
  description,
  actions,
}: PageHeaderProps): JSX.Element {
  return (
    <header className="poc-header">
      <h1>{title}</h1>
      {description && <p className="lead">{description}</p>}
      {actions}
    </header>
  );
}
