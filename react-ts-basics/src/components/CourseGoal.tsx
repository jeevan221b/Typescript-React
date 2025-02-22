import { FC, PropsWithChildren } from "react";
// This is a typical way to define types but can be difficult and confusing to write if
// there arre lot of props. But it is better if we define custom types for CourseGoal

/*export default function CourseGoal({
  title,
  description,
}: {
  title: string;
  description: string;
}) */

// type CourseGoalProps = {
//   title: string;
//   description: string;
// };

// Both type and interface can be used. If your code is outsourced, then interface is preffered since it is extendable.

// interface CourseGoalProps {
//   title: string;
//   //   description: string;
//   // For the children prop we can use ReactNode
//   children: React.ReactNode;
// }

type CourseGoalProps = PropsWithChildren<{ title: string }>;

// export default function CourseGoal({ title, children }: CourseGoalProps) {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Button</button>
//     </article>
//   );
// }

// We can use Arrow functions as well

// const CourseGoal = ({ title, children }: CourseGoalProps) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Button</button>
//     </article>
//   );
// };

//Another way to use the types while using arrow functions is using FC which stands for functional components
const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Button</button>
    </article>
  );
};

export default CourseGoal;
