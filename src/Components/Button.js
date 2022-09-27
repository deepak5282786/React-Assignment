import React from "react";
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
