import React from "react";
/**
 *
 * @param {input} props (placeholder,inputValue,onchange event)
 * @returns jsx of text area
 * @desc this is textarea function which takes input value and set input value on change and also takes hardCoded input value as props
 */
export const TextArea = (props) => {
  return (
    <>
      <div className="form-outline mb-4 form-group">
        <textarea
          className="form-control"
          id="form4Example3"
          rows="8"
          placeholder={props.inputPlaceholder}
          value={props.inputValue}
          onChange={props.inputChange}
        ></textarea>
      </div>
    </>
  );
};
