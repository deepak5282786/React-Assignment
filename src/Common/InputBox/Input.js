import "../../App.css";
/**
 *
 * @param {input value} props
 * @returns jsx of input box
 * @desc this is Input function which takes input value and set input value on change and also takes hardCoded placeholder value as props
 */
export const Input = (props) => {
  return (
    <>
      <div className="form-group">
        <input
          disabled={props.disable}
          className="form-control"
          type="text"
          value={props.inputValue}
          onChange={props.inputChange}
          placeholder={props.inputPlaceholder}
          onClick={props.inputOnClick}
        />
      </div>
    </>
  );
};
