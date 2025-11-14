import { ReactNode, useState } from "react";

interface ExpectedOutcomeProps {
  children: ReactNode;
  description?: string;
}

export function ExpectedOutcome({
  children,
  description = "Click to see what the completed exercise should look like.",
}: ExpectedOutcomeProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      style={{
        marginBottom: "20px",
        border: "2px solid #27ae60",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      {/* Collapsible Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          width: "100%",
          padding: "12px 16px",
          background: isExpanded ? "#27ae60" : "#e8f5e9",
          color: isExpanded ? "white" : "#27ae60",
          border: "none",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "0.9em",
          fontWeight: 600,
          transition: "all 0.2s ease",
        }}
      >
        <span>✅ Expected Outcome</span>
        <span
          style={{
            transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
            fontSize: "1.2em",
          }}
        >
          ▼
        </span>
      </button>

      {/* Expandable Content */}
      {isExpanded && (
        <div
          style={{
            padding: "16px",
            background: "#e8f5e9",
            borderTop: "1px solid #27ae60",
          }}
        >
          {description && (
            <p
              style={{
                margin: "0 0 16px",
                fontSize: "0.85em",
                color: "#555",
              }}
            >
              {description}
            </p>
          )}
          {children}
        </div>
      )}
    </div>
  );
}
