import { FormEvent, useRef } from "react";

type newGoalProps = {
  addNewGoal: (goal: string, summary: string) => void;
};

export default function NewGoal({addNewGoal}: newGoalProps) {
  //Inside the <> is the type of the value that will eventually be loaded into the useRef. Null is the initial value of the useRef.
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);
  //This FormEvent type is a generic type for handling form events. But to specify the  submit event type, we have to add the  HTMLFormElement type to it.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // The '!' non-null assertion operator tells TypeScript that 'goal.current' will never be null when accessing 'value'.
    // Ensure that 'goal' and 'summary' are properly initialized before using this.
    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    addNewGoal(enteredGoal, enteredSummary);

    event.currentTarget.reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Goal:</label>
        <input type="text" id="goal" ref={goal} required />
      </p>
      <p>
        <label htmlFor="summary">Summary:</label>
        <input type="text" id="summary" ref={summary} required />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
