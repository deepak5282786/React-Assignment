import React from "react";
import { rows } from "./textAreaUtils";
/**
 *
 * @param {input} props (placeholder,inputValue,onchange event)
 * @returns jsx of text area
 * @desc this is textarea function which takes input value and set input value on change and also takes hardCoded input value as props
 */
export const TextArea = (props) => {
  return (
    <>
      <div className="form-outline mb-4 form-group main-inputBox">
        <textarea
          className="form-control"
          rows={rows.row}
          placeholder={props.inputPlaceholder}
          value={props.inputValue}
          onChange={props.inputChange}
        />
      </div>
    </>
  );
};
