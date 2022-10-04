import React from "react";
/**
 * 
 * @param {Dropdown Button} props  button Properties
 * @returns JSX of Dropdown button
 */
export const DropdownButton = (props) => {
  return (
    <>
      <button
        className="btn btn-light dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {props.btnName}
      </button>
    </>
  );
};
