import "../App.css";

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
        />
      </div>
    </>
  );
};
