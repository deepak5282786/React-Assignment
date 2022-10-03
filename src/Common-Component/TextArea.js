import React from "react";

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
