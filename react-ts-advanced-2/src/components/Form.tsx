import {
  ComponentPropsWithoutRef,
  FormEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

// Define the type for the form's imperative handle.
// This exposes a `clear` method to parent components, allowing them to reset the form programmatically.
export type FormHandle = {
  clear: () => void; // Method to clear the form fields
};

// Define the props for the `Form` component.
// - `ComponentPropsWithoutRef<"form">` ensures the component supports all standard `<form>` attributes.
// - `onSave` is a required function that will be called when the form is submitted.
type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void; // Function that receives form data when submitted
};

// `forwardRef` is used here to pass a reference (`ref`) from the parent component (`App`) to the `Form` component.
// - The first generic argument (`FormHandle`) specifies the type of the exposed methods.
// - The second generic argument (`FormProps`) defines the expected props.
const Form = forwardRef<FormHandle, FormProps>(function Form(
  { onSave, children, ...otherProps }, // Destructure props to extract `onSave` and `children`, passing otherProps to <form>
  ref // `ref` is received from the parent and will be used inside `useImperativeHandle`
) {
  // Create a reference to the actual form element.
  // This allows us to interact with the form (e.g., reset its fields).
  const formRef = useRef<HTMLFormElement>(null);

  // `useImperativeHandle` allows us to expose specific methods (`clear()`) to parent components.
  useImperativeHandle(ref, () => {
    return {
      // Define the `clear` method, which will be accessible from the parent component.
      clear() {
        console.log("Clearing Data"); // Log when the function is called

        // Reset the form fields using the `reset()` method on the `<form>` element.
        // `formRef.current` ensures that the form exists before attempting to reset.
        formRef.current?.reset();
      },
    };
  });

  // Handles the form submission
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Prevent the default form submission behavior (which reloads the page)

    // Create a `FormData` object from the form element (`event.currentTarget`).
    // This extracts all input values inside the form.
    const formData = new FormData(event.currentTarget);

    // Convert the `FormData` object into a plain JavaScript object.
    // This makes it easier to manipulate and pass around.
    const data = Object.fromEntries(formData);

    // Call the `onSave` function (provided as a prop), passing the form data to the parent component (`App`).
    onSave(data);
  }

  return (
    // Render the form element, attaching event handlers and refs.
    <form {...otherProps} onSubmit={handleSubmit} ref={formRef}>
      {children}{" "}
      {/* Render any child components (e.g., `<Input>`, `<Button>`) inside the form */}
    </form>
  );
});

export default Form;
