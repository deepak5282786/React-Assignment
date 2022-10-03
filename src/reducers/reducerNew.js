const initialData = {
  list: [],
};
/**
 *
 * @param {initial State} state initial value of state
 * @param {action} action  action is javascript object that have a type field (must) and payload(optional) describing what happened
 * @returns this is return new state
 * @desc Reducers are functions that take the current state and an action as arguments, and return a new state result
 */

const reducerNew = (state = initialData, action) => {
  switch (action.type) {
    case "SAVE_NEW":
      const { id, data } = action.payload;
      if (data.name && data.title && data.describe) {
        return {
          ...state,
          list: [...state.list, { id: id, data: data }],
        };
      }

    case "DELETE_NEW":
      const newList = state.list.filter((elem) => elem.id !== action.id);
      return {
        ...state,
        list: newList,
      };
    case "DELETE_ALL":
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
};

export default reducerNew;
