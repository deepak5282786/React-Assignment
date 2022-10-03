import React from "react";
import "../App.css";

export const Dropdown = () => {
  return (
    <>
      <div className="dropdown">
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
    </>
  );
};
