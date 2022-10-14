import React from "react";
export const Option = (props) => {
  return (
    <>
      <option value={props.value} className="dropdown-item">
        {props.ListName}
      </option>
    </>
  );
};
