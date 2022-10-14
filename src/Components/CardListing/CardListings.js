import React from "react";
import { useDispatch } from "react-redux";
import { deleteCard } from "../../redux/actions/index";
/**
 * @returns card listing by extracting value of name,tittle,description and which contains delere button to delete indivisual items
 */
export default function CardListings(props) {
  const dispatch = useDispatch();
  return (
    <>
      {props.filteredList.length >= 0
        ? props.filteredList.map((elem) => {
            return (
              <div
                className="card text-black bg-light mb-3 main-card"
                style={{
                  maxWidth: "18rem",
                }}
                key={elem.id}
              >
                <div className="card-header">
                  <h5>Name: {elem.data.name}</h5>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Title : {elem.data.title}</h5>
                  <p className="card-text">
                    <span style={{ fontWeight: "500" }}>Desc : </span>
                    {elem.data.describe}
                  </p>
                  <button
                    type="button"
                    className="btn btn-success btn-sm"
                    onClick={() => dispatch(deleteCard(elem.id))}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        : null}
    </>
  );
}
