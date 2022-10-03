import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../App.css";
import { Button } from "../Common-Component/Button";
import { addNew, saveNew, deleteAll } from "../actions/index";
import { CommonStrings } from "./buttonName";
import { commonPlaceholder } from "../Common-Component/placeholder";
import { Input } from "../Common-Component/Input";
import { TextArea } from "../Common-Component/TextArea";

/**
 *
 * @returns mainContent inlcudes buttton (New,Saved,Delete All) and the Form which contains input that we enter (name,title,Description) and one readOnly input box Containing today date
 */
export const MainContent = () => {
  const [inputData, setInputData] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [error, setError] = useState("false");
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

  /**
   *
   * @param {inputname Event} e
   * @desc this used to change the value of input box name on onChange event and validate it using if block
   */
  function handleName(e) {
    const item = e.target.value;
    setInputData(item);
    if (item.length < 3) {
      setError(true);
    } else {
      setError(false);
    }
  }
  /**
   *
   * @param {inputTitle Event} e
   * @desc this used to change the value of input box title on onChange event and validate it using if block
   */
  function handleTitle(e) {
    const item = e.target.value;
    setInputTitle(item);
    if (item.length < 3) {
      setError(true);
    } else {
      setError(false);
    }
  }
  /**
   *
   * @param {inputDesc Event} e
   * @desc this used to change the value of text area box  on onChange event and validate it using if block
   */
  function handlerDesc(e) {
    const item = e.target.value;

    setInputDesc(item);
    if (item.length < 3) {
      setError(true);
    } else {
      setError(false);
    }
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
              setInputTitle("");
              setInputDesc("");
              setInputData("");
            }}
          />

          <Button btnName={CommonStrings.new} />
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

          <Input
            inputPlaceholder={commonPlaceholder.titlePlaceholder}
            inputValue={inputTitle}
            inputChange={handleTitle}
          />

          <TextArea
            inputPlaceholder={commonPlaceholder.descPlaceholder}
            inputValue={inputDesc}
            inputChange={handlerDesc}
          />
        </form>
      </div>
    </>
  );
};

// {error === true ? (
//   <p style={{ color: "red", marginTop: "3px", fontWeight: "bold" }}>
//     Invalid Title
//   </p>
// ) : (
//   ""
// )}
