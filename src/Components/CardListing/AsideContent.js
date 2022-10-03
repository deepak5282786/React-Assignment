import React from "react";
import "../../App.css";
import { Dropdown } from "../../Common-Component/Dropdown/Dropdown";
import { Input } from "../../Common-Component/InputBox/Input";
import { commonPlaceholder } from "../../Common-Component/InputBox/placeholder";
import { Button } from "../../Common-Component/Button/Button";
import CardListings from "./CardListings";
import { CommonStrings } from "../../Common-Component/Button/buttonName";
/**
 *
 * @returns AsideContent Is Function return Aside Component Which Contains SearchBar For Filtering And Search button and Cardlisting Component
 */
export const AsideContent = () => {
  return (
    <>
      <div className="aside1 col-5 scroll">
        <div className="box">
          <Input inputPlaceholder={commonPlaceholder.searchNameTitle} />
        </div>
        <div className=" mt-3 box">
          <Dropdown />
        </div>
        <Button btnName={CommonStrings.filter} />
        <CardListings />
      </div>
    </>
  );
};
