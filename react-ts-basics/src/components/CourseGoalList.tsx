import CourseGoal from "./CourseGoal";
import { CourseGoal as CGoal } from "../App";

type CourseGoalListProps = {
  goals: CGoal[]; //Add an empty array symbol at the end of the object to indicate that it is an array of objects
  onDelete: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDelete,
}: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal?.id}>
          <CourseGoal id={goal?.id} title={goal?.title} onDelete={onDelete}>
            <p>{goal?.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
