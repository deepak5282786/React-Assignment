import React from "react";
import { DropdownListName } from "./DropdownUtils";
import { optionValue } from "../Utils/OptionValue";
import { Option } from "./Option";

export const Select = (props) => {
  return (
    <>
      <div className="dropdownMenu">
        <select
          className="btn btn-light dropdown-toggle text-start select-dropdown"
          value={props.value}
          onChange={props.onChange}
        >
          <Option value={optionValue.none} ListName={DropdownListName.select} />
          <Option
            value={optionValue.username}
            ListName={DropdownListName.searchByName}
          />
          <Option
            value={optionValue.title}
            ListName={DropdownListName.searchByTitle}
          />
          <Option
            value={optionValue.desc}
            ListName={DropdownListName.searchByDesc}
          />
        </select>
      </div>
    </>
  );
};
