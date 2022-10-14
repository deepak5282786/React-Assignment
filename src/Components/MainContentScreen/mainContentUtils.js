/**
 *
 * @param {inputData} string enter by user
 * @returns return a function according to case value if input length in beetween 0 to 5 then return first case if >5 then return second case otherwise return default value
 */
export const nameError = (string) => {
  switch (true) {
    case string.length > 0 && string.length <= 5:
      return errorText("Please Enter more than 5 characters....");
    case string.length > 5:
      return errorText("");
    default:
      errorText("");
      break;
  }
};

export const newError = (string) => {
  switch (true) {
    case string.length <= 0:
      return errorText("Required");
    default:
      break;
  }
};

/**
 *
 * @param {string} error takes value return by name error
 * @returns return paragraph if error have some value otherwise return null
 */
export const errorText = (error) => {
  return error !== "" ? (
    <p style={{ color: "red" }}>{error}</p>
  ) : (
    () => newError()
  );
};
/**
 *
 * @param {inputData} inputData input data is input name enter by user
 * @param {inputTitle} inputTitle input title is input title enter by user
 * @param {inputDesc} inputDesc input Description is input Description enter by user
 * @returns it return true or false if false then saved button is disabled otherwise enable
 */
export const getButtonDisabledBoolean = (inputData, inputTitle, inputDesc) => {
  return inputData.length < 5 || inputTitle.length < 5 || inputDesc.length < 5;
};
