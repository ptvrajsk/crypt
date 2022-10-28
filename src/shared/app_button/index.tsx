import React from "react";
import "./app_button.scss";


export default function AppButton(props: {
  text: string;
  className?: string;
  theme?: string;
}): JSX.Element {




  return <button className={"light"}>{props.text}</button>;
}
