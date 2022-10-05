import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../App.css";
import { Button } from "../Common/Button/Button";
import { addNew, saveNew, deleteAll } from "../redux/actions/index";
import { CommonStrings } from "../Common/Utils/buttonUtils";
import { commonPlaceholder } from "../Common/Utils/placeholder";
import { Input } from "../Common/InputBox/Input";
import { TextArea } from "../Common/TextArea/TextArea";

/**
 *
 * @returns mainContent inlcudes buttton (New,Saved,Delete All) and the Form which contains input that we enter (name,title,Description) and one readOnly input box Containing today date
 */
export const MainContent = () => {
  const [inputData, setInputData] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [titleErr, setTitleErr] = useState(false);
  const [descErr, setDescErr] = useState(false);
  const dispatch = useDispatch();
  /**
   * @desc: this function is used for taking input and dispaching saveNew Action creator which is taking data and sending as payload in action folder
   */

  const createNewTile = () => {
    const data = {
      name: inputData,
      title: inputTitle,
      describe: inputDesc,
    };
    dispatch(saveNew(data));
  };
  function loginHandle(e) {
    if (
      inputData.length <= 0 ||
      inputTitle.length <= 0 ||
      inputDesc.length <= 0
    ) {
      // alert("type correct values");
      setNameErr(true);
      setTitleErr(true);
      setDescErr(true);
    } else {
      // alert("all good :)");
      setNameErr(false);
      setTitleErr(false);
      setDescErr(false);
    }

    // e.preventDefault();
  }
  function newHandle(e) {
    if (
      inputData.length >= 0 ||
      inputTitle.length >= 0 ||
      inputDesc.length >= 0
    ) {
      // alert("type correct values");
      setNameErr(true);
      setTitleErr(true);
      setDescErr(true);
    } else {
      // alert("all good :)");
      setNameErr(false);
      setTitleErr(false);
      setDescErr(false);
    }

    e.preventDefault();
  }

  /**
   *
   * @param {inputname Event} e
   * @desc this used to change the value of input box name on onChange event and validate it using if block
   */
  function handleName(e) {
    const item = e.target.value;
    // console.log(item.length);
    if (item.length <= 5) {
      setNameErr(true);
    } else {
      setNameErr(false);
    }
    setInputData(item);
  }
  /**
   *
   * @param {inputTitle Event} e
   * @desc this used to change the value of input box title on onChange event and validate it using if block
   */
  function handleTitle(e) {
    const item = e.target.value;
    if (item.length <= 10) {
      setTitleErr(true);
    } else {
      setTitleErr(false);
    }
    setInputTitle(item);
  }
  /**
   *
   * @param {inputDesc Event} e
   * @desc this used to change the value of text area box  on onChange event and validate it using if block
   */
  function handlerDesc(e) {
    const item = e.target.value;

    if (item.length <= 20) {
      setDescErr(true);
    } else {
      setDescErr(false);
    }
    setInputDesc(item);
  }

  return (
    <>
      <div className="aside2  col-7">
        <div className="d-flex flex-row-reverse m-3">
          <Button
            btnName={CommonStrings.delete}
            clickSave={() =>
              dispatch(
                deleteAll(),
                setInputData(""),
                setInputTitle(""),
                setInputDesc("")
              )
            }
          />

          <Button
            btnName={CommonStrings.save}
            clickSave={() => {
              createNewTile();
              setInputData("");
              setInputTitle("");
              setInputDesc("");
              loginHandle();
            }}
          />

          <Button
            btnName={CommonStrings.new}
            clickSave={() => {
              // createNewTile();
              setInputData("");
              setInputTitle("");
              setInputDesc("");
              newHandle();
            }}
          />
        </div>
        <form className="formic">
          <Input
            disable={true}
            inputPlaceholder={commonPlaceholder.readonlyPlaceholder}
          />
          <Input
            inputPlaceholder={commonPlaceholder.namePlaceholder}
            inputValue={inputData}
            inputChange={handleName}
          />
          <div className="form-group">
            {nameErr === true ? (
              <p style={{ color: "red", fontWeight: "bold" }}>Invalid name</p>
            ) : (
              ""
            )}
          </div>

          <Input
            inputPlaceholder={commonPlaceholder.titlePlaceholder}
            inputValue={inputTitle}
            inputChange={handleTitle}
          />
          <div className="form-group">
            {titleErr === true ? (
              <span
                style={{
                  color: "red",
                  fontWeight: "bold",
                }}
              >
                Invalid Title
              </span>
            ) : (
              ""
            )}
          </div>

          <TextArea
            inputPlaceholder={commonPlaceholder.descPlaceholder}
            inputValue={inputDesc}
            inputChange={handlerDesc}
          />
          <div className="form-group">
            {descErr === true ? (
              <p style={{ color: "red", fontWeight: "bold" }}>
                Invalid Description
              </p>
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
    </>
  );
};
