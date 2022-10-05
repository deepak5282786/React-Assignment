export const addNew = () => {
  return {
    type: "ADD_NEW",
  };
};
export const saveNew = (data) => {
  return {
    type: "SAVE_NEW",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};
export const deleteNew = (id) => {
  return {
    type: "DELETE_NEW",
    id,
  };
};
export const deleteAll = () => {
  return {
    type: "DELETE_ALL",
  };
};
export const filterData = (value) => {
  return {
    type: "FILTER_DATA",
    payload: {
      value: value,
    },
  };
};
