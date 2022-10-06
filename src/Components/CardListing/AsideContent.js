import React, { useEffect, useState } from "react";
import "../../App.css";
// import { Dropdown } from "../../Common/Dropdown/Dropdown";
import { Input } from "../../Common/InputBox/Input";
import { commonPlaceholder } from "../../Common/Utils/placeholder";
import { Button } from "../../Common/Button/Button";
import CardListings from "./CardListings";
import { CommonStrings } from "../../Common/Utils/buttonUtils";
import { useSelector } from "react-redux";

/**
 *
 * @returns AsideContent Is Function return Aside Component Which Contains SearchBar For Filtering And Search button and Cardlisting Component
 */
export const AsideContent = () => {
  const list = useSelector((state) => state.reducerNew.list);
  const [filteredList, setFilteredList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectDropdown, setSelectDropdown] = useState("");
  const [nameTitleErr, setNameTitleErr] = useState(false);
  const [searchTermErr, setSearchTermErr] = useState(false);
  const optionValue = {
    userName: "userName",
    title: "title",
    desc: "desc",
  };
  const handleSearchTerm = (e) => {
    const item = e.target.value;
    setSearchTerm(item);
    onChange(item);
    if (item.length <= 5) {
      setSearchTermErr(true);
    } else {
      setSearchTermErr(false);
    }
    setSearchTerm(item);
  };

  useEffect(() => {
    setFilteredList(list);
    return () => {
      setFilteredList([]);
    };
  }, [list]);

  const onChange = (fieldName) => {
    if (fieldName === "" || fieldName === null) {
      setFilteredList(list);
    }
    const indexes = list.filter((item, i) => {
      return getInputValue(selectDropdown, item, fieldName);
    });
    setFilteredList(indexes);
  };

  const getInputValue = (selected, item, value) => {
    switch (selected) {
      case "userName":
        return item.data.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
      case "title":
        return (
          item.data.title.toLowerCase().indexOf(value.toLowerCase()) !== -1
        );
      default:
        break;
    }
  };

  const handleSelectDropdown = (e) => {
    setSelectDropdown(e.target.value);
  };
  function onClickHandleSearch(e) {
    if (searchTerm.length <= 0) {
      setNameTitleErr(true);
    } else {
      setNameTitleErr(false);
    }
    setSearchTerm(e.target.value);

    e.preventDefault();
  }
  return (
    <>
      <div className="aside1 col-5 scroll">
        <div className="scrollBar">
          <div className="box">
            <Input
              inputPlaceholder={commonPlaceholder.searchNameTitle}
              inputValue={searchTerm}
              inputChange={(text) => handleSearchTerm(text)}
              inputOnClick={() => {
                onClickHandleSearch();
              }}
            />
          </div>
          {searchTermErr === true ? (
            <p style={{ color: "red", fontWeight: "bold" }}>
              Invalid must be more than 5
            </p>
          ) : (
            ""
          )}

          {/* <div className=" mt-3 box">
            <Dropdown />
          </div> */}
          <div className="mb-4">
            <select
              className="btn btn-light dropdown-toggle"
              name="dog-names"
              id="dog-names"
              value={selectDropdown}
              onChange={handleSelectDropdown}
            >
              <option value={optionValue.userName} className="dropdown-item">
                By UserName
              </option>
              <option value={optionValue.title} className="dropdown-item">
                By Title
              </option>
              <option value={optionValue.desc} className="dropdown-item">
                By Description
              </option>
            </select>
          </div>
          {nameTitleErr === true ? (
            <p style={{ color: "red", fontWeight: "bold" }}>
              Select DropDown List
            </p>
          ) : (
            ""
          )}

          <Button
            btnName={CommonStrings.filter}
            clickSave={() => {
              onChange(searchTerm);
            }}
          />
          <CardListings filteredList={filteredList} />
        </div>
      </div>
    </>
  );
};
