export default function ResultScreen({ score, total, onRestart }) {
  const pct = Math.round((score / total) * 100);
  const grade =
    pct >= 80
      ? "🏆 Excellent!"
      : pct >= 60
        ? "👍 Good job!"
        : "👍 Keep Studying!";

  return (
    <div className="results">
      <p className="results-grade">{grade}</p>
      <p className="results-score">
        {score} / {total}
      </p>
      <p className="results-pct">{pct}%</p>
      <button className="restart-btn" onClick={onRestart}>
        Try again
      </button>
    </div>
  );
}
