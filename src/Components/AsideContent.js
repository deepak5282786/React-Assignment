import React from "react";
import "../App.css";
import { Dropdown } from "../Common-Component/Dropdown";
import { Input } from "../Common-Component/Input";
import { commonPlaceholder } from "../Common-Component/placeholder";
import { Button } from "../Common-Component/Button";
import CardListings from "./CardListings";
import { CommonStrings } from "./buttonName";

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
