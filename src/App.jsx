import { useState } from "react";
import Quiz from "./components/Quiz";
import CategoryPicker from "./components/CategoryPicker";

export default function App() {
  const [category, setCategory] = useState(null);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {category === null ? (
        <CategoryPicker onStart={setCategory} />
      ) : (
        <Quiz category={category} onBack={() => setCategory(null)} />
      )}
    </div>
  );
}
