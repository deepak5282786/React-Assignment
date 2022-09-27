import { ActionTypes } from "../Components/actionTypes";

export const addNew = () => {
  return {
    type: ActionTypes.addnew,
  };
};
/**
 *
 * @param {*} data
 * @returns
 */
export const saveNew = (data) => {
  return {
    type: "SAVE_NEW",
    payload: {
      id: Math.random().toString(),
      data: data,
    },
  };
};
export const deleteNew = () => {
  return {
    type: "DELETE_NEW",
  };
};
