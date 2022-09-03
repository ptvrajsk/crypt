import React from "react";
import './style.scss';

interface AppButtonProps {
    text: string;
    className: string;
}

export default function AppButton(props: AppButtonProps): JSX.Element {
  return (
    <button className={props.className}>{props.text}</button>
  );
}