import { SAVE, DELETE_CARD, DELETE_ALL } from "./actionTypes";

export const save = (data) => {
  return {
    type: SAVE,
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};
export const deleteCard = (id) => {
  return {
    type: DELETE_CARD,
    id,
  };
};
export const deleteAll = () => {
  return {
    type: DELETE_ALL,
  };
};
