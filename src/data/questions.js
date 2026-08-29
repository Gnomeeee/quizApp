const questions = [
  {
    id: 1,
    question: "Which hook is used to perform side effects in React?",
    options: ["useState", "useEffect", "useRef", "useMemo"],
    answer: "useEffect",
    explanation:
      "useEffect is used to perform side effects such as fetching data or updating the document title.",
  },
  {
    id: 2,
    question: "Which hook is used to access a DOM element directly",
    options: ["useState", "useEffect", "useRef", "useContext"],
    answer: "useRef",
    explanation:
      "useRef can store a reference to a DOM element without causing a re-render.",
  },
  {
    id: 3,
    question:
      "What is use to pass data from parent component to a child component",
    options: ["Props", "Hooks", "State", "Events"],
    answer: "Props",
    explanation:
      "Props allow a parent component to pass data and values to a child component.",
  },
  {
    id: 4,
    question: "Which command creates a new React project using Vite?",
    options: [
      "npm create vite@latest",
      "npm install react",
      "npm start react",
      "react create-app",
    ],
    answer: "npm create vite@latest",
    explanation:
      "The npm create vite@latest command can be used to create a new Vite project.",
  },
  {
    id: 5,
    question: "What does JSX allow you to write inside Javascript?",
    options: ["SLQ queries", "HTML-like syntax", "CSS files", "Python code"],
    answer: "HTML-like syntax",
    explanation:
      "JSX allows you to write HTML-like syntax directly inside Javascript code.",
  },
];
export default questions;
