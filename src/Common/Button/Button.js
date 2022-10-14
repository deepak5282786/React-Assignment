import React from "react";
/**
 * this custom button file
 * @param {buttons propertise} props buttton props
 * @returns button jsx element
 * @desc this is button component used for returning different name of button and handle event on clicking
 */
export const Button = (props) => {
  return (
    <>
      <div className="p-2">
        <button
          type="button"
          className="btn btn-primary"
          onClick={props.clickSave}
          disabled={props.disabled}
        >
          {props.btnName}
        </button>
      </div>
    </>
  );
};
