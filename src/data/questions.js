const questions = [
  {
    id: 1,
    category: "React",
    question: "Which hook is used to perform side effects in React?",
    options: ["useState", "useEffect", "useRef", "useMemo"],
    answer: "useEffect",
    explanation:
      "useEffect is used to perform side effects such as fetching data or updating the document title.",
  },
  {
    id: 2,
    category: "React",
    question: "Which hook is used to access a DOM element directly",
    options: ["useState", "useEffect", "useRef", "useContext"],
    answer: "useRef",
    explanation:
      "useRef can store a reference to a DOM element without causing a re-render.",
  },
  {
    id: 3,
    category: "React",
    question:
      "What is use to pass data from parent component to a child component",
    options: ["Props", "Hooks", "State", "Events"],
    answer: "Props",
    explanation:
      "Props allow a parent component to pass data and values to a child component.",
  },
  {
    id: 4,
    category: "React",
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
    category: "Javascript",
    question: "What does JSX allow you to write inside Javascript?",
    options: ["SLQ queries", "HTML-like syntax", "CSS files", "Python code"],
    answer: "HTML-like syntax",
    explanation:
      "JSX allows you to write HTML-like syntax directly inside Javascript code.",
  },
  {
    id: 6,
    category: "Javascript",
    question: "What does === check?",
    options: ["Value only", "Type only", "Value and type", "Nothing"],
    answer: "Value and type",
    explanation: "=== is strict equality — checks both value AND type.",
  },
  {
    id: 7,
    category: "CSS",
    question: "Which property makes a container a flexbox?",
    options: ["display: grid", "display: flex", "position: flex", "flex: true"],
    answer: "display: flex",
    explanation: "display: flex turns an element into a flex container.",
  },
  {
    id: 8,
    category: "CSS",
    question: "What does z-index control?",
    options: ["Width", "Opacity", "Stack order", "Font size"],
    answer: "Stack order",
    explanation:
      "z-index controls which element appears on top when they overlap.",
  },
  {
    id: 9,
    category: "Javascript",
    question:
      "Which method is used to create a new array by transforming each element?",
    options: ["filter()", "map()", "reduce()", "forEach()"],
    answer: "map()",
    explanation:
      "The map() method creates a new array by applying a function to each element of the original array.",
  },
  {
    id: 10,
    category: "React",
    question: "Which hook is used to manage state in a React component?",
    options: ["useEffect", "useState", "useRef", "useMemo"],
    answer: "useState",
    explanation:
      "useState allows a React component to create and manage state that can change over time.",
  },
];
export default questions;
