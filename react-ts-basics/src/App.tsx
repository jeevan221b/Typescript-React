import "./App.css";
import Header from "./components/Header";
import HeaderAlien from "./assets/HeaderAlien.svg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = (goal: string, summary: string) => {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  };

  const handleGoalDelete = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };
  return (
    <main>
      <Header image={{ src: HeaderAlien, alt: "A List of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal addNewGoal={handleAddGoal}/>
      <CourseGoalList goals={goals} onDelete={handleGoalDelete} />
    </main>
  );
}

export default App;
