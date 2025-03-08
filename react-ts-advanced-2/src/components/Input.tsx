import { ComponentPropsWithoutRef, forwardRef } from "react";

// ComponentPropsWithoutRef<"input"> is used to merge:
// - Our custom props (`label`, `id`)
// - Default props for an <input> element (e.g., `type`, `placeholder`, `onChange` etc.)
type InputProps = {
  label: string; // Label for the input field
  id: string; // Unique ID for accessibility and linking label to input
} & ComponentPropsWithoutRef<"input">;
// ComponentPropsWithoutRef<"input"> ensures this component accepts all valid input props

// forwardRef allows us to **forward** a ref to the <input> element
// It takes two type parameters:
// - First: The type of the element the ref will be attached to (HTMLInputElement in this case).
// - Second: The type of the component's props (InputProps).
const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, id, ...props }, // Destructure props: Extract `label` and `id`, pass the rest to the input.
  ref // Ref parameter: This ref will be forwarded to the input element
) {
  return (
    <p>
      {/* Label is associated with the input using htmlFor */}
      <label htmlFor={id}>{label}</label>
      {/* The ref is forwarded to the input element, allowing parent components to access it */}
      <input id={id} {...props} ref={ref} name={id} />
    </p>
  );
});

export default Input;
