import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteNew } from "../actions/index";
/**
 * @param
 * @returns card listing
 * @desc
 */
export default function CardListings() {
  const list = useSelector((state) => state.reducerNew.list);
  const dispatch = useDispatch();
  return (
    <>
      {list.map((elem) => {
        console.log(elem);
        return (
          <div
            className="card text-black bg-light mb-3"
            style={{
              maxWidth: "18rem",
            }}
            key={new Date().getTime().toString()}
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
                  class="btn btn-success btn-sm"
                  onClick={() => dispatch(deleteNew(elem.id))}
                >
                  Delete
                </button>
              </div>
            </>
          </div>
        );
      })}
    </>
  );
}
