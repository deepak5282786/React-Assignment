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
        {/* /////--------Card Filtering Component---------///////////////////// */}
        <div className="aside1 col-5">
          <div className="form-groups  box">
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Enter Name Or Title for Search"
            />
          </div>
          <div className="dropdown mt-3 box">
            <button
              className="btn btn-light dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Search By Dropdown
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Search by Date
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Search by Name
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Search by Title
                </a>
              </li>
            </ul>
          </div>
          <div className="p-2 box">
            <button type="button" className="btn btn-primary">
              Filter
            </button>
          </div>
          {/* ///--------Card Component--------////// */}
          <div
            className="card text-white bg-secondary mb-3"
            style={{
              maxWidth: "18rem",
            }}
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
        {/* ----------/////////  notes Adding Component ----------///// */}
        <div className="aside2  col-7">
          <div className="d-flex flex-row-reverse m-3">
            <div className="p-2">
              <button type="button" className="btn btn-primary">
                Delete
              </button>
            </div>
            <div className="p-2">
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
            <div className="p-2">
              <button type="button" className="btn btn-primary">
                New
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
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Enter Name"
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
      </div>
    </>
  );
}

export default App;
