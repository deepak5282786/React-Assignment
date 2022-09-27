import React from "react";
/**
 * 
 * @param  props {button propertise}
 * @returns customize button element
 */
export const Button = (props) => {
  return (
    <>
      <div className="p-2">
        <button type="button" className="btn btn-primary">
          {props.buttonName}
        </button>
      </div>
    </>
  );
};
