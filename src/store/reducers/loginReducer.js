const initialState = {};

const loginReducer = (state = initialState, action) => {
  if (action.type === "LOGIN") {
    return (state = action.payload);
  } else {
    return (state = {});
  }
  return state;
};

export default loginReducer;
