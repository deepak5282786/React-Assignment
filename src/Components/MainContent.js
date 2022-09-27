import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../App.css";
import { day, month, year, monthName } from "./CurrentDate";
import { Button } from "./Button";
import { addNew, saveNew, deleteNew } from "../actions/index";
import { CommonStrings } from "./actionTypes";

export const MainContent = () => {
  const [inputData, setInputData] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const dispatch = useDispatch();
  const createNewTile = () => {
    const data = {
      name: inputData,
      title: inputTitle,
      describe: inputDesc,
    };
    dispatch(saveNew(data));
  };
  return (
    <>
      <div className="aside2  col-7">
        <div className="d-flex flex-row-reverse m-3">
          <Button btnName={CommonStrings.delete} />
          <Button
            btnName={CommonStrings.save}
            clickSave={() => {
              createNewTile();
              setInputTitle("");
              setInputDesc("");
              setInputData("");
            }}
          />

          <Button
            btnName={CommonStrings.new}
            // clickSave={() => dispatch(saveNew(inputTitle), setInputTitle(""))}
          />
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
              value={inputTitle}
              onChange={(e) => setInputTitle(e.target.value)}
            />
          </div>
          <div className="form-outline mb-4 form-group">
            <textarea
              className="form-control"
              id="form4Example3"
              rows="8"
              placeholder="Enter Something Here!"
              value={inputDesc}
              onChange={(e) => setInputDesc(e.target.value)}
            ></textarea>
          </div>
        </form>
      </div>
    </>
  );
};
