import React from "react";
import "../App.css";
import { day, month, year, monthName } from "./CurrentDate";
import { Button } from "./Button";

export const MainContent = () => {
  return (
    <>
      <div className="aside2  col-7">
        <div className="d-flex flex-row-reverse m-3">
          <Button buttonName="Delete" />
          <Button buttonName="Save" />
          <Button buttonName="New" />
        </div>
        <form className="formic">
          <div className="form-group">
            <input
              disabled
              className="form-control"
              type="text"
              placeholder={`Created On: ${monthName[month]} ${day}, ${year} (ReadOnly)`}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Enter Title"
            />
          </div>
          <div className="form-outline mb-4 form-group">
            {/* <label className="form-label fw-bold" htmlFor="form4Example3">
                Message
              </label> */}
            <textarea
              className="form-control"
              id="form4Example3"
              rows="8"
              placeholder="Enter Something Here!"
            ></textarea>
          </div>
        </form>
      </div>
    </>
  );
};
