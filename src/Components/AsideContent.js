import React from "react";
import "../App.css";
import { Button } from "./Button";
import { useSelector } from "react-redux";
/**
 * 
 * @returns JSX
 */
export const AsideContent = () => {
  const list = useSelector((state) => state.reducerNew.list);
  return (
    <>
      {/* /////--------Card Filtering Component---------///////////////////// */}
      <div className="aside1 col-5">
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
        <Button buttonName="Filter" />

        {/* ///--------Card Component--------////// */}
        <div
          className="card text-white bg-secondary mb-3"
          style={{
            maxWidth: "18rem",
          }}
        >
          <div className="card-header">
            {list.map((elem) => {
              return <h5>{elem.data}</h5>;
            })}
          </div>
          <div className="card-body">
            <h5 className="card-title">Dark card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
