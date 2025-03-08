import { useRef } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";
import Form, { FormHandle } from "./components/Form";

function App() {
  // Refs should be initialized with the target element type it would be referring.
  // const inputRef = useRef<HTMLInputElement>(null);
  const customForm = useRef<FormHandle>(null);
  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customForm.current?.clear();
  }
  return (
    <main>
      {/* <Input id="name" label="Name" type="text" />
      <Input id="age" label="Age" type="number" /> */}
      {/* <p>
        <Button el="button">Button</Button>
      </p>
      <p>
        <Button el="anchor" href="https://example.com">
          Anchor
        </Button>
      </p> */}
      {/* <Container element={Button}> Click Me</Container> */}
      <Form onSave={handleSave} ref={customForm}>
        {/* <Input id="test" label="Test" type="text" ref={inputRef} /> */}
        <Input id="name" label="Name" type="text" />
        <Input id="age" label="Age" type="number" />
        <Button el="button">Submit</Button>
      </Form>
    </main>
  );
}

export default App;
