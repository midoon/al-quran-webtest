const globalState = {
  search: "",
};

//reducer
const rootReducer = (state = globalState, action) => {
  if (action.type == "ISSEARCH") {
    return {
      ...state,
    };
  }

  return state;
};

export default rootReducer;
