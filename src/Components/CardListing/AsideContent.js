import React, { useState } from "react";
import "../../App.css";
// import { Dropdown } from "../../Common/Dropdown/Dropdown";
import { Input } from "../../Common/InputBox/Input";
import { commonPlaceholder } from "../../Common/Utils/placeholder";
import { Button } from "../../Common/Button/Button";
import CardListings from "./CardListings";
import { CommonStrings } from "../../Common/Utils/buttonUtils";
// import { useDispatch } from "react-redux";
// import { filterDataName, filterDataTitle } from "../../redux/actions/index";

/**
 *
 * @returns AsideContent Is Function return Aside Component Which Contains SearchBar For Filtering And Search button and Cardlisting Component
 */
export const AsideContent = () => {
  const [filterInputData, setFilterInputData] = useState("");
  // const dispatch = useDispatch();
  const handleFilterInput = (e) => {
    setFilterInputData(e.target.value);
  };
  return (
    <>
      <div className="aside1 col-5 scroll">
        <div className="scrollBar">
          <div className="box">
            <Input
              inputPlaceholder={commonPlaceholder.searchNameTitle}
              inputValue={filterInputData}
              inputChange={handleFilterInput}
            />
          </div>
          {/* <div className=" mt-3 box">
            <Dropdown />
          </div> */}
          {/* <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown button
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div> */}

          <Button btnName={CommonStrings.filter} />
          {/* <Button
            btnName={CommonStrings.filter}
            clickSave={() => dispatch(filterDataName(filterInputData))}
          /> */}
          {/* <Button
            btnName={CommonStrings.filter}
            clickSave={() => dispatch(filterDataTitle(filterInputData))}
          /> */}

          <CardListings />
        </div>
      </div>
    </>
  );
};
