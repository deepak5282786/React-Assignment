import React, { useEffect, useState } from "react";
import "../../App.css";
import { Dropdown } from "../../Common/Dropdown/Dropdown";
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
  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
    onChange(e.target.value);
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
      return (
        item.data.name.toLowerCase().indexOf(fieldName.toLowerCase()) !== -1 ||
        item.data.title.toLowerCase().indexOf(fieldName.toLowerCase()) !== -1 ||
        item.data.describe.toLowerCase().indexOf(fieldName.toLowerCase()) !== -1
      );
    });
    setFilteredList(indexes);
  };
  return (
    <>
      <div className="aside1 col-5 scroll">
        <div className="scrollBar">
          <div className="box">
            <Input
              inputPlaceholder={commonPlaceholder.searchNameTitle}
              inputValue={searchTerm}
              inputChange={(text) => handleSearchTerm(text)}
            />
          </div>
          <div className=" mt-3 box">
            <Dropdown />
          </div>

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
