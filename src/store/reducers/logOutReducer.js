const initialState = {};
const logOutReducer = (state = initialState, action) => {
  if (action.type === "LOG_OUT") {
    localStorage.removeItem("user");
    return (state = {});
  }
  return state;
};

export default logOutReducer;
