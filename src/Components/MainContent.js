import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { day, month, year, monthName } from "./CurrentDate";
import { Button } from "./Button";
import { addNew, saveNew, deleteNew } from "../actions/index";
import { CommonStrings } from "../Components/actionTypes";

export const MainContent = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.reducerNew.list);
  return (
    <>
      <div className="aside2  col-7">
        <div className="d-flex flex-row-reverse m-3">
          <Button buttonName={CommonStrings.delete} />
          {/* <Button
            buttonName="Save"
            onClick={() => dispatch(saveNew(inputData))}
          /> */}
          {/* <div className="p-2"> */}
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => dispatch(saveNew(inputData), setInputData(""))}
            buttonName={CommonStrings.save}
          />
          {/* Save
            </button>
          </div> */}
          {/* <p>
            {list.map((elem) => {
              return <span>{elem.data}</span>;
            })}
          </p> */}
          <Button buttonName={CommonStrings.new} />
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
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
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
