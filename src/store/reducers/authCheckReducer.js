const initialState = {};

const authCheckReducer = (state = initialState, action) => {
  if (action.type === "AUTH_CHECK") {
    return (state = action.payload);
  } else {
    return (state = {});
  }
};

export default authCheckReducer;
