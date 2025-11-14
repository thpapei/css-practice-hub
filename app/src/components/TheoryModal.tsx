import { ReactNode, useEffect, useState } from "react";

type Props = {
  children?: ReactNode;
};

export default function TheoryModal({ children }: Props): JSX.Element {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener("openTheory", onOpen as EventListener);
    return () =>
      window.removeEventListener("openTheory", onOpen as EventListener);
  }, []);

  // Don't render button if no children provided
  if (!children) {
    return null;
  }

  return (
    <>
      <button className="theory-btn" onClick={() => setOpen(true)}>
        📚 View Theory Guide
      </button>

      {open && (
        <div className="theory-modal" role="dialog" aria-modal="true">
          <div className="theory-modal-content">
            <button
              className="theory-modal-close"
              onClick={() => setOpen(false)}
              aria-label="Close theory modal"
            >
              ×
            </button>
            <div className="theory-modal-body">{children}</div>
          </div>
        </div>
      )}
    </>
  );
}
