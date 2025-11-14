type Item = { id: string; title: string };

const items: Item[] = [
  { id: "ex1", title: "Ex 1: Basic Grid" },
  { id: "ex2", title: "Ex 2: Explicit Sizing" },
  { id: "ex3", title: "Ex 3: Template Areas" },
  { id: "ex4", title: "Ex 4: Grid Lines" },
  { id: "ex5", title: "Ex 5: Span" },
  { id: "ex6", title: "Ex 6: Alignment" },
  { id: "ex7", title: "Ex 7: Auto-fit/fill" },
  { id: "ex8", title: "Ex 8: Minmax" },
  { id: "ex9", title: "Ex 9: Auto Flow" },
  { id: "ex10", title: "Ex 10: Nested Grids" },
];

export default function SidebarTOC(): JSX.Element {
  return (
    <aside className="poc-toc">
      <h3>📐 Exercises</h3>
      <nav>
        {items.map((i) => (
          <a key={i.id} href={`#${i.id}`}>
            {i.title}
          </a>
        ))}
      </nav>
    </aside>
  );
}
