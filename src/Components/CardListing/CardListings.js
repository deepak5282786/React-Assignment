import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteNew } from "../../redux/actions";
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
                className="card text-black bg-light mb-3"
                style={{
                  maxWidth: "18rem",
                }}
                key={elem.id}
              >
                <>
                  <div className="card-header">
                    <h5>Name: {elem.data.name}</h5>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Title : {elem.data.title}</h5>
                    <p className="card-text">Desc : {elem.data.describe}</p>
                    <button
                      type="button"
                      className="btn btn-success btn-sm"
                      onClick={() => dispatch(deleteNew(elem.id))}
                    >
                      Delete
                    </button>
                  </div>
                </>
              </div>
            );
          })
        : null}
    </>
  );
}
