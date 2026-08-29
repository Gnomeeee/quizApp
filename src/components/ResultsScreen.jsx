export default function ResultScreen({
  score,
  total,
  onRestart,
  wrongAnswers,
}) {
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

      {wrongAnswers.length > 0 && (
        <div className="review-wrap">
          <h3 className="review-title">Review — {wrongAnswers.length} wrong</h3>

          {wrongAnswers.map((item, index) => (
            <div className="review-item" key={index}>
              <p className="review-question">{item.question}</p>

              <div className="review-row">
                <span className="review-label wrong-label">Your answer: </span>
                <span className="review-value wrong-value">
                  {item.yourAnswer}
                </span>
              </div>

              <div className="review-row">
                <span className="review-label correct-label">Correct: </span>
                <span className="review-value correct-value">
                  {item.correctAnswer}
                </span>
              </div>

              <p className="review-explanation">{item.explanation}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
