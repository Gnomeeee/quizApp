export default function OptionButton({ option, selected, answer, onSelect }) {
  const isSelected = option === selected;
  const isCorrect = option === answer;
  const isAnswered = selected !== null;

  const style = !isAnswered
    ? "neutral"
    : isCorrect
      ? "correct"
      : isSelected
        ? "wrong"
        : "neutral";

  return (
    <button className={`option-btb ${style}`} onClick={() => onSelect(option)}>
      {option}
    </button>
  );
}
