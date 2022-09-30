import React from "react";
import "../App.css";
import { Button } from "./Button";
import CardListings from "./CardListings";

export const AsideContent = () => {
  return (
    <>
      {/* /////--------Card Filtering Component---------///////////////////// */}
      <div className="aside1 col-5 scroll">
        <div className="form-groups  box">
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter Name Or Title for Search"
          />
        </div>
        <div className="dropdown mt-3 box">
          <button
            className="btn btn-light dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Search By Dropdown
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Search by Date
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Search by Name
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Search by Title
              </a>
            </li>
          </ul>
        </div>
        <Button btnName="Filter" />
        {/* ///--------Card Component--------////// */}
        <CardListings />
      </div>
    </>
  );
};
