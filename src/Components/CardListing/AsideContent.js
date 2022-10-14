import React, { useEffect, useState } from "react";
import "../../App.css";
import { Input } from "../../Common/InputBox/Input";
import CardListings from "./CardListings";
import { useSelector } from "react-redux";
import { Select } from "../../Common/Dropdown/Select";
import { dropdownError, getInputValue, getPlaceholder } from "./CardUtils";
import { optionValue } from "../../Common/Utils/OptionValue";

/**
 *
 * @returns AsideContent Is Function return Aside Component Which Contains SearchBar For Filtering And Search button and Cardlisting Component
 */
export function AsideContent() {
  const list = useSelector((state) => state.reducerNew.list);
  const [filteredList, setFilteredList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectDropdown, setSelectDropdown] = useState(optionValue.none);
  const [nameTitleErr, setNameTitleErr] = useState(false);
  /**
   *
   * @param {e} e value of e is enter by user in filter input box
   * @Desc this function takes value of e and set searchTerm so that it can change on every input and on every input change call function onChange
   */
  const handleSearchTerm = (e) => {
    const item = e.target.value;
    setSearchTerm(item);
    onChange(item);
  };
  /**
   *
   * @param {fieldName} fieldName it hold value of item which is passed in onChange(item) function
   */
  const onChange = (fieldName) => {
    /**
     * @Desc it set value of filtered list if the fieldname is empty or null
     */
    if (fieldName === "" || fieldName === null) {
      setFilteredList(list);
    }
    /**
     * @Desc return filtered list by  dropdown and After returning set filtered list to whatever it return
     */
    const indexes = list.filter((item, i) => {
      return getInputValue(selectDropdown, item, fieldName);
    });
    setFilteredList(indexes);
  };

  /**
   *
   * @param {e} e value of e is enter by user by selecting dropdown
   */
  const handleSelectDropdown = (e) => {
    setSelectDropdown(e.target.value);
  };

  /**
   * @Desc function is used to show validation error in dropdown by onclicking of input filter box
   */
  function onClickHandleSearch() {
    /**
     *@Desc  show Error on clicking on the filter input box when searchTerm is empty else do not show any error
     */
    if (searchTerm === "") {
      setNameTitleErr(true);
    } else {
      setNameTitleErr(false);
    }
  }
  /**
   * @Desc on changing every value on list run this useffect
   */
  useEffect(() => {
    /**
     *@@Desc  set filtered list to list when it is in effect
     */
    setFilteredList(list);
    return () => {
      /**
       *@Desc  set filtered  list to [] when we change the page
       */
      setFilteredList([]);
    };
  }, [list]);
  return (
    <>
      <div className="aside1 col-5 scroll">
        <div className="aside1-main scrollBar">
          <Select
            value={selectDropdown}
            onChange={handleSelectDropdown}
            className="dropdownMenu"
          />
          {dropdownError(nameTitleErr)}
          <div className="aside-box">
            <Input
              inputPlaceholder={getPlaceholder(selectDropdown)}
              inputValue={searchTerm}
              inputChange={handleSearchTerm}
              inputOnClick={() => onClickHandleSearch()}
            />
          </div>

          <CardListings filteredList={filteredList} />
        </div>
      </div>
    </>
  );
}
