import "./App.css";
import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import HeaderAlien from "./assets/HeaderAlien.svg";

function App() {
  return (
    <main>
      <Header image={{ src: HeaderAlien, alt: "A List of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoal title={"Learning Typescript and React"}>
        <p>Learning them from the ground up!!</p>
      </CourseGoal>
    </main>
  );
}

export default App;
