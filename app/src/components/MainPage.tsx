import { Route, Routes, useNavigate } from "react-router-dom";
import {
  Phase1BoxModel,
  Phase1Selectors,
  Phase1Typography,
  Phase2Flexbox,
  Phase2Grid,
  Phase2Positioning,
  Phase3MediaQueries,
} from "../lessons";

function LessonLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <div
        style={{
          padding: "16px 24px",
          borderBottom: "1px solid #e9ecef",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <button onClick={() => navigate("/")} className="back-button">
          ← Back to Hub
        </button>
      </div>

      <div style={{ flex: 1, overflow: "hidden" }}>{children}</div>
    </div>
  );
}

function Hub() {
  const navigate = useNavigate();

  return (
    <div className="hub-page">
      <header className="hub-header">
        <h1>CSS Practice Hub</h1>
        <p className="lead">
          A comprehensive roadmap from basic to professional CSS. Each phase
          includes guided exercises and interactive demos.
        </p>
      </header>

      <section className="hub-content">
        <div className="phase-cards-grid">
          <div className="phase-card">
            <h2>Phase 1 — Core Fundamentals</h2>
            <p>
              Selectors, specificity, box model, display properties, colors, and
              typography.
            </p>
            <div className="phase-card-buttons">
              <button onClick={() => navigate("/phase1-selectors")}>
                1.1 Selectors
              </button>
              <button onClick={() => navigate("/phase1-boxmodel")}>
                1.2 Box Model
              </button>
              <button onClick={() => navigate("/phase1-typography")}>
                1.3 Typography
              </button>
            </div>
          </div>

          <div className="phase-card">
            <h2>Phase 2 — Layout Fundamentals</h2>
            <p>
              Master the three core layout systems: positioning, flexbox, and
              CSS Grid.
            </p>
            <div className="phase-card-buttons">
              <button onClick={() => navigate("/phase2-positioning")}>
                2.1 Positioning
              </button>
              <button onClick={() => navigate("/phase2-flexbox")}>
                2.2 Flexbox
              </button>
              <button onClick={() => navigate("/phase2-grid")}>
                2.3 CSS Grid
              </button>
            </div>
          </div>

          <div className="phase-card">
            <h2>Phase 3 — Responsive Design</h2>
            <p>
              Media queries, responsive units, mobile-first approach, and fluid
              layouts.
            </p>
            <div className="phase-card-buttons">
              <button onClick={() => navigate("/phase3-mediaqueries")}>
                3.1 Media Queries
              </button>
            </div>
          </div>

          <div className="phase-card">
            <h2>Phase 4 — Advanced Styling</h2>
            <p>
              Transforms, transitions, animations, backgrounds, and gradients.
            </p>
            <button disabled>Coming Soon</button>
          </div>

          <div className="phase-card">
            <h2>Phase 5 — Modern CSS Features</h2>
            <p>
              CSS custom properties, modern functions, aspect ratio, and logical
              properties.
            </p>
            <button disabled>Coming Soon</button>
          </div>

          <div className="phase-card">
            <h2>Phase 6 — Professional Techniques</h2>
            <p>
              CSS architecture, BEM, preprocessors, performance, and
              optimization.
            </p>
            <button disabled>Coming Soon</button>
          </div>

          <div className="phase-card">
            <h2>Phase 7 — Advanced Skills</h2>
            <p>
              Advanced selectors, component libraries, accessibility, and
              complex animations.
            </p>
            <button disabled>Coming Soon</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function MainPage(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Hub />} />
      <Route
        path="/phase1-selectors"
        element={
          <LessonLayout>
            <Phase1Selectors />
          </LessonLayout>
        }
      />
      <Route
        path="/phase1-boxmodel"
        element={
          <LessonLayout>
            <Phase1BoxModel />
          </LessonLayout>
        }
      />
      <Route
        path="/phase1-typography"
        element={
          <LessonLayout>
            <Phase1Typography />
          </LessonLayout>
        }
      />
      <Route
        path="/phase2-positioning"
        element={
          <LessonLayout>
            <Phase2Positioning />
          </LessonLayout>
        }
      />
      <Route
        path="/phase2-flexbox"
        element={
          <LessonLayout>
            <Phase2Flexbox />
          </LessonLayout>
        }
      />
      <Route
        path="/phase2-grid"
        element={
          <LessonLayout>
            <Phase2Grid />
          </LessonLayout>
        }
      />
      <Route
        path="/phase3-mediaqueries"
        element={
          <LessonLayout>
            <Phase3MediaQueries />
          </LessonLayout>
        }
      />
    </Routes>
  );
}
