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

    default:
      return state;
  }
};

export default reducerNew;
