import React from "react";
import "../../App.css";
import { Dropdown } from "../../Common/Dropdown/Dropdown";
import { Input } from "../../Common/InputBox/Input";
import { commonPlaceholder } from "../../Common/Utils/placeholder";
import { Button } from "../../Common/Button/Button";
import CardListings from "./CardListings";
import { CommonStrings } from "../../Common/Utils/buttonUtils";
/**
 *
 * @returns AsideContent Is Function return Aside Component Which Contains SearchBar For Filtering And Search button and Cardlisting Component
 */
export const AsideContent = () => {
  return (
    <>
      <div className="aside1 col-5 scroll">
        <div className="scrollBar">
          <div className="box">
            <Input inputPlaceholder={commonPlaceholder.searchNameTitle} />
          </div>
          <div className=" mt-3 box">
            <Dropdown />
          </div>
          <Button btnName={CommonStrings.filter} />
          <CardListings />
        </div>
      </div>
    </>
  );
};
