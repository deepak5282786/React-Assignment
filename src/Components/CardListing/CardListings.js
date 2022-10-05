import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteNew } from "../../redux/actions";
/**
 * @returns card listing by extracting value of name,tittle,description and which contains delere button to delete indivisual items
 */
export default function CardListings() {
  const list = useSelector((state) => state.reducerNew.list);
  const [filteredList, setFilteredList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
    onChange(e.target.value);
  };

  useEffect(() => {
    setFilteredList(list);
    return () => {
      setFilteredList([]);
    };
  }, [list]);

  const onChange = (fieldName) => {
    if (fieldName === "" || fieldName === null) {
      setFilteredList(list);
    }
    const indexes = list.filter((item, i) => {
      return (
        item.data.name.toLowerCase().indexOf(fieldName.toLowerCase()) !== -1 ||
        item.data.title.toLowerCase().indexOf(fieldName.toLowerCase()) !== -1 ||
        item.data.describe.toLowerCase().indexOf(fieldName.toLowerCase()) !== -1
      );
    });
    setFilteredList(indexes);
  };
  return (
    <>
      <input
        type="text"
        value={searchTerm}
        onChange={(text) => handleSearchTerm(text)}
      />
      <button
        onClick={() => {
          onChange(searchTerm);
        }}
      >
        Filter
      </button>
      {filteredList.length >= 0
        ? filteredList.map((elem) => {
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
