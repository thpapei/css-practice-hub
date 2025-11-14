interface LessonSidebarProps {
  lessons: Array<{ id: string; title: string }>;
  currentLesson?: string;
  onSelectLesson?: (id: string) => void;
}

export default function LessonSidebar({
  lessons,
  currentLesson,
  onSelectLesson,
}: LessonSidebarProps): JSX.Element {
  return (
    <aside className="lesson-sidebar">
      <h3>Lessons</h3>
      <nav className="lesson-nav">
        {lessons.map((lesson) => (
          <a
            key={lesson.id}
            href={`#${lesson.id}`}
            className={`lesson-link ${
              currentLesson === lesson.id ? "active" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              onSelectLesson?.(lesson.id);
              const el = document.getElementById(lesson.id);
              el?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            {lesson.title}
          </a>
        ))}
      </nav>
    </aside>
  );
}
