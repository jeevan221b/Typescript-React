import { ReactNode } from "react";

//We use discriminated Unions in this section
type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};
type InfoboxProps = HintBoxProps | WarningBoxProps;

export default function InfoBox(props: InfoboxProps) {
  if (props.mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{props.children}</p>
      </aside>
    );
  } else {
    return (
      <aside className={`infobox infobox-warning warning--${props.severity}`}>
        <h2>Warning</h2>
        <p>{props.children}</p>
      </aside>
    );
  }
}
