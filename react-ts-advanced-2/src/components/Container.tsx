//This is a polymorphic component. This means that this component won't know in advance which child components it will wrap.
import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

// Define a generic type <T> that extends ElementType
// This ensures that T can be any valid HTML tag (like 'div', 'button') or a React component.
type ContainerProps<T extends ElementType> = {
  element?: ElementType; // 'element' prop determines which element/component to render (default is 'div')
  children: ReactNode; // 'children' prop allows this component to wrap any valid JSX content
} & ComponentPropsWithoutRef<T>;
// 'ComponentPropsWithoutRef<T>' merges the props of T into this type, ensuring proper prop passing.

export default function Container<C extends ElementType>(
  props: ContainerProps<C>
) {
  // The function is a generic component where C extends ElementType.
  // This means C must be a valid HTML element or a React component.

  const Component = props.element || "div";
  // If no 'element' prop is provided, default to a 'div'

  return <Component {...props}>{props.children}</Component>;
  // Render the component dynamically, passing down all received props
}
