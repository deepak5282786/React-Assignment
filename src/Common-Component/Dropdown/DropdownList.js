import React from "react";
/**
 *
 * @param {dropdownName} props dropdown list name
 * @returns JSX of dropDown list
 * @desc this is DropdownList function which  takes hardCoded value of dropdown list  as props
 */
export const DropdownList = (props) => {
  return (
    <>
      <li>
        <a className="dropdown-item" href="#">
          {props.dropdownName}
        </a>
      </li>
    </>
  );
};
