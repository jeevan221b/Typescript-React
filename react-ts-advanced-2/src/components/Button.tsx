import { ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  el: "button";
} & ComponentPropsWithoutRef<"button">;

type AnchorProps = {
  el: "anchor";
} & ComponentPropsWithoutRef<"a">;
export default function Button(props: ButtonProps | AnchorProps) {
  if (props.el === "button") {
    return <button className="button" {...props}></button>;
  } else {
    return <a className="button" {...props}></a>;
  }
}
