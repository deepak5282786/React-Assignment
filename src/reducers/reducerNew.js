const initialData = {
  list: [],
};
const reducerNew = (state = initialData, action) => {
  switch (action.type) {
    case "SAVE_NEW":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [...state.list, { id: id, data: data }],
      };
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
