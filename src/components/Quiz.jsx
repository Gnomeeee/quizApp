import { useEffect, useState } from "react";
import questions from "../data/questions";
import ResultScreen from "./ResultsScreen";
import ProgressBar from "./ProgressBar";
import OptionButton from "./OptionButton";

const TIME_PER_QUESTION = 15;

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION);

  const current = questions[index];
  const isAnswered = selected !== null;

  useEffect(() => {
    if (isAnswered || finished) return;
    if (timeLeft === 0) {
      setSelected("__TIMEOUT__");
      setWrongAnswers((prev) => [
        ...prev,
        {
          question: current.question,
          yourAnswer: "⏰ Timed out",
          correctAnswer: current.answer,
          explanation: current.explanation,
        },
      ]);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, isAnswered, finished]);

  useEffect(() => {
    setTimeLeft(TIME_PER_QUESTION);
  }, [index]);

  function handleAnswer(option) {
    if (isAnswered) return;
    setSelected(option);
    if (option === current.answer) {
      setScore((prev) => prev + 1);
    } else {
      setWrongAnswers((prev) => [
        ...prev,
        {
          question: current.question,
          yourAnswer: option,
          correctAnswer: current.answer,
          explanation: current.explanation,
        },
      ]);
    }
  }

  function handleNext() {
    setSelected(null);
    setTimeLeft(TIME_PER_QUESTION);

    if (index + 1 >= questions.length) {
      setFinished(true);
    } else {
      setIndex((prev) => prev + 1);
    }
  }

  function handleRestart() {
    setIndex(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
    setTimeLeft(TIME_PER_QUESTION);
    setWrongAnswers([]);
  }

  if (finished) {
    return (
      <ResultScreen
        score={score}
        total={questions.length}
        onRestart={handleRestart}
        wrongAnswers={wrongAnswers}
      />
    );
  }

  const timerColor =
    timeLeft > 10 ? "timer-green" : timeLeft > 5 ? "timer-yellow" : "timer-red";

  return (
    <div className="quiz-card">
      <div className="quiz-header">
        <ProgressBar current={index + 1} total={questions.length} />
        <div className={`timer ${timerColor}`}>{timeLeft}s</div>
      </div>

      <p className="quiz-meta">
        Question {index + 1} of {questions.length}
      </p>
      <p className="quiz-question">{current.question}</p>

      <div className="quiz-options">
        {current.options.map((opts) => (
          <OptionButton
            key={opts}
            option={opts}
            selected={selected}
            answer={current.answer}
            onSelect={handleAnswer}
          />
        ))}
      </div>

      {isAnswered && (
        <>
          {selected === "__TIMEOUT__" ? (
            <p className="quiz-explanation timeout-msg">
              ⏰ Time's up! The answer was: <strong>{current.answer}</strong>
            </p>
          ) : (
            <p className="quiz-explanation">{current.explanation}</p>
          )}
          <button className="quiz-next" onClick={handleNext}>
            {index + 1 === questions.length ? "See results" : "Next ->"}
          </button>
        </>
      )}
    </div>
  );
}
