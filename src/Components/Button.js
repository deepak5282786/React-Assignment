import React from "react";
/**
 * this custom button file
 * @param {buttons propertise} props buttton props
 * @returns button jsx element
 * @des 
 */
export const Button = (props) => {
  return (
    <>
      <div className="p-2">
        <button
          type="button"
          className="btn btn-primary"
          onClick={props.clickSave}
        >
          {props.btnName}
        </button>
      </div>
    </>
  );
};
