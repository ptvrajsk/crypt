import React, { useState } from "react";
import "./input_floating_label.scss";

const SCSS_FLOATING_INPUT_CONTAINER_CLASS: string = "floating_input_container";
const SCSS_FLOATING_LABEL_CLASS: string = "floating_label";
const SCSS_FLOATING_LABEL_INPUT_CLASS: string = "floating_label_input";
const SCSS_FLOATING_LABEL_INPUT_ID: string = "floating-label-input";
const SCSS_FLOATING_LABEL_FILLED_CLASS: string =
  "floating_label_when_input_filled";

/**
 * An Input Element Component that returns an input that has
 * an interactive label that floats to the top on focus. The
 * placeholder tag becomes visible on focus as well.
 * @param props - Parameters to configure Input Element
 * @returns JSX.Element containing a HTML Input Element.
 */
export default function InputFloatingLabel(props: {
  label: string;
  type: "text" | "password";
  className?: string;
  placeholder?: string;
}): JSX.Element {
  // Initialize Component States
  const [inputText, setInputText] = useState("");
  const [isInputFilled, setInputFill] = useState(false);
  const [labelClasses, setLabelClasses] = useState([SCSS_FLOATING_LABEL_CLASS]);

  // Ensures that state variables conform to their restrictions
  // sets correct correct component state otherwise.
  function validateState() {
    if (inputText === "" && isInputFilled === true) {
      setInputFill(false);
    } else if (inputText !== "" && isInputFilled === false) {
      setInputFill(true);
    }

    const filledLabelFinder: (arrayItem: string) => boolean = (
      arrItem: string
    ) => arrItem === SCSS_FLOATING_LABEL_FILLED_CLASS;
    const filledLabelClassIndex: number =
      labelClasses.findIndex(filledLabelFinder);

    if (isInputFilled === false && filledLabelClassIndex !== -1) {
      setLabelClasses([SCSS_FLOATING_LABEL_CLASS]);
    } else if (isInputFilled === true && filledLabelClassIndex === -1) {
      setLabelClasses([
        SCSS_FLOATING_LABEL_CLASS,
        SCSS_FLOATING_LABEL_FILLED_CLASS,
      ]);
    }
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputText(e.target.value);
  }

  validateState();

  return (
    <div className={SCSS_FLOATING_INPUT_CONTAINER_CLASS}>
      <input
        type={props.type}
        id={SCSS_FLOATING_LABEL_INPUT_ID}
        className={SCSS_FLOATING_LABEL_INPUT_CLASS}
        autoComplete="off"
        placeholder={props.placeholder}
        onChange={handleInputChange}
      />
      <label
        className={labelClasses.join(" ")}
        htmlFor={SCSS_FLOATING_LABEL_INPUT_ID}
      >
        {props.label}
      </label>
    </div>
  );
}
