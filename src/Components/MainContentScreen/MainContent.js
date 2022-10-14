import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../../App.css";
import { Button } from "../../Common/Button/Button";
import { save, deleteAll } from "../../redux/actions/index";
import { CommonStrings } from "../../Common/Button/buttonUtils";
import { commonPlaceholder } from "../../Common/InputBox/placeholder";
import { Input } from "../../Common/InputBox/Input";
import { TextArea } from "../../Common/TextArea/TextArea";
import { getButtonDisabledBoolean, nameError } from "./mainContentUtils";
/**
 *
 * @returns mainContent inlcudes buttton (New,Saved,Delete All) and the Form which contains input that we enter (name,title,Description) and one readOnly input box Containing today date
 */
export const MainContent = () => {
  const [inputData, setInputData] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputDesc, setInputDesc] = useState("");
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
    dispatch(save(data));
    resetForm();
  };
  /**
   *
   * @param {inputname Event} e
   * @desc this used to change the value of input box name on onChange event and validate it using if block
   */
  function handleName(e) {
    const item = e.target.value;
    setInputData(item);
  }
  /**
   *
   * @param {inputTitle Event} e
   * @desc this used to change the value of input box title on onChange event and validate it using if block
   */
  function handleTitle(e) {
    const item = e.target.value;
    setInputTitle(item);
  }
  /**
   *
   * @param {inputDesc Event} e
   * @desc this used to change the value of text area box  on onChange event and validate it using if block
   */
  function handlerDesc(e) {
    const item = e.target.value;
    setInputDesc(item);
  }
  /**
   * @desc this function is used to reset form after clicking on submit button
   */
  const resetForm = () => {
    setInputData("");
    setInputTitle("");
    setInputDesc("");
  };

  return (
    <>
      <div className="aside2  col-10">
        <div className="aside2-main">
          <div className="d-flex flex-row-reverse m-3 justify-content-evenly">
            <Button
              btnName={CommonStrings.delete}
              clickSave={() => dispatch(deleteAll(), resetForm())}
            />
            <Button
              btnName={CommonStrings.save}
              disabled={getButtonDisabledBoolean(
                inputData,
                inputTitle,
                inputDesc
              )}
              clickSave={() => {
                createNewTile();
              }}
            />

            <Button btnName={CommonStrings.new} clickSave={() => {}} />
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
            {nameError(inputData)}
            <Input
              inputPlaceholder={commonPlaceholder.titlePlaceholder}
              inputValue={inputTitle}
              true
              inputChange={handleTitle}
            />
            <div className="form-group">{nameError(inputTitle)}</div>
            <TextArea
              inputPlaceholder={commonPlaceholder.descPlaceholder}
              inputValue={inputDesc}
              inputChange={handlerDesc}
            />
            <div className="form-group">{nameError(inputDesc)}</div>
          </form>
        </div>
      </div>
    </>
  );
};
