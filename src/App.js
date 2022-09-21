import "./App.css";

function App() {
  const monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const d = new Date();
  const day = d.getDay();
  const month = d.getMonth();
  const year = d.getFullYear();

  return (
    <>
      <div className="main-div">
        <div className="aside1 col-5">
          <div className="form-groups">
            <label htmlFor="formGroupExampleInput">Example label</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Example input placeholder"
            />
          </div>
          <div className="dropdown mt-3">
            <button
              className="btn btn-light dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown button
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <div className="p-2 text-end ">
            <button type="button" className="btn btn-primary">
              Filter
            </button>
          </div>
          <div
            className="card text-dark bg-light  mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Dark card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        {/* ----------/////////  new Component ----------///// */}
        <div className="aside2  col-7">
          <div className="d-flex flex-row-reverse m-3">
            <div className="p-2">
              <button type="button" className="btn btn-primary">
                New
              </button>
            </div>
            <div className="p-2">
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
            <div className="p-2">
              <button type="button" className="btn btn-primary">
                Delete
              </button>
            </div>
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
              <label htmlFor="formGroupExampleInput">Example label</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Example input placeholder"
              />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">Another label</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Another input placeholder"
              />
            </div>
            <div className="form-outline mb-4 form-group">
              <label className="form-label" htmlFor="form4Example3">
                Message
              </label>
              <textarea
                className="form-control"
                id="form4Example3"
                rows="6"
                placeholder="Enter Something Here!"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
