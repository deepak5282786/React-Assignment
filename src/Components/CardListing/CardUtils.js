/**
 *
 * @param {selectDropdown} selectDropdown this will take value of Dropdown
 * @returns return string value depending on the dropdown value to which we have to click
 */
export function getPlaceholder(selectDropdown) {
  switch (selectDropdown) {
    case "none":
      return "Please select input from dropdown";
    case "username":
      return "Start writing user name";
    case "title":
      return "Start writing title";
    case "desc":
      return "Start writing about description";
    default:
      break;
  }
}
/**
 *
 * @param {selected} selected dropdown value we have selected
 * @param {item} item every object from the array of list
 * @param {value} value each  value that we are entering
 * @returns return the card (it match one by one every value of search term and the data inthe list according to that it return match value otherwise it return null)
 * @Desc like when selected is set to title then it take title value from list and then it match to searching value one by one
 */
export const getInputValue = (selected, item, value) => {
  switch (selected) {
    case "username":
      return item.data.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    case "title":
      return item.data.title.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    case "desc":
      return (
        item.data.describe.toLowerCase().indexOf(value.toLowerCase()) !== -1
      );
    default:
      break;
  }
};

export const dropdownError = (nameTitleErr) => {
  return nameTitleErr === true ? (
    <p style={{ color: "red" }}>Select DropDown List</p>
  ) : null;
};
