import PageHeader from "./PageHeader";

interface Phase2HubProps {
  onSelectSubPhase: (subPhase: string) => void;
}

export default function Phase2Hub({
  onSelectSubPhase,
}: Phase2HubProps): JSX.Element {
  return (
    <div className="hub-page">
      <PageHeader
        title="Phase 2: Layout Fundamentals"
        description="Master the three core layout systems in CSS. Choose a topic below to start practicing."
      />

      <section className="hub-content">
        <div className="phase-cards-grid">
          <div className="phase-card">
            <h2>2.1 — Positioning</h2>
            <p>
              Static, relative, absolute, fixed, sticky positioning. Z-index,
              stacking contexts, and centering techniques.
            </p>
            <button disabled>Coming Soon</button>
          </div>

          <div className="phase-card">
            <h2>2.2 — Flexbox</h2>
            <p>
              Flex container and item properties, alignment, distribution, and
              common flexbox patterns.
            </p>
            <button disabled>Coming Soon</button>
          </div>

          <div className="phase-card phase-card-active">
            <h2>2.3 — CSS Grid</h2>
            <p>
              Grid template, fr units, grid areas, auto-fit/auto-fill, minmax,
              and grid alignment.
            </p>
            <button onClick={() => onSelectSubPhase("grid")}>
              Start Grid Exercises
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
