import React, { useState } from "react";
import "../../App.css";
import { CommonStrings } from "../Utils/buttonUtils";
import { DropdownButton } from "./DropdownButton";
import { DropdownList } from "./DropdownList";
import { useDispatch } from "react-redux";

/**
 *
 * @returns JSX of Dropdown
 * @Desc this is Dropdown function which return Dropdown button and Dropdown list
 */
export const Dropdown = () => {
  const [searchByDate, setSearchByDate] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <div className="dropdown">
        <DropdownButton btnName={CommonStrings.DropDownButton} />
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <DropdownList
            dropdownName={CommonStrings.DropdownListName.searchByDate}
          />
          <DropdownList
            dropdownName={CommonStrings.DropdownListName.searchByName}
          />
          <DropdownList
            dropdownName={CommonStrings.DropdownListName.searchByTitle}
          />
        </ul>
      </div>
    </>
  );
};
