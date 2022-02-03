const initialState = {};

const authCheckReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_CHECK":
      return { ...state, user: action?.payload };
    default: return state
  }
};

export default authCheckReducer;
