export default function CategoryPicker({ onStart }) {
  const categories = [
    {
      name: "React",
      emoji: "⚛️",
      color: "cat-blue",
      desc: "Hooks, props, state, components",
    },
    {
      name: "Javascript",
      emoji: "🟨",
      color: "cat-yellow",
      desc: "Arrays, functions, syntax",
    },
    {
      name: "CSS",
      emoji: "🎨",
      color: "cat-pink",
      desc: "Flexbox, selectors, properties",
    },
    {
      name: "All",
      emoji: "🎯",
      color: "cat-purple",
      desc: "Mix of all categories",
    },
  ];

  return (
    <div className="picker-card">
      <h1 className="picker-title">Quiz App</h1>
      <p className="picker-sub">Choose a category to start</p>

      <div className="cat-grid">
        {categories.map((cat) => (
          <div
            key={cat}
            className={`cat-card ${cat.color}`}
            onClick={() => onStart(cat.name)}
          >
            <span className="cat-emoji">{cat.emoji}</span>
            <span className="cat-name">{cat.name}</span>
            <span className="cat-desc">{cat.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
